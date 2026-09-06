import { useMemo } from 'react';
import { useListWorkforceValidations } from '@workspace/api-client-react';
import {
  cleanDataset,
  getCapabilityMetrics,
  getIntelligenceEligibleEmployees,
  messyDataset,
  MESSY_STATS,
} from '../data';
import type { DatasetMode, MessyEmployee } from '../data';
import type { ViewTab } from '../App';
import { ValidationDataStatus } from './ValidationDataStatus';

interface NavigateOptions {
  mode?: DatasetMode;
  issue?: string;
}

interface Props {
  onNavigate: (view: ViewTab, options?: NavigateOptions) => void;
}

interface EvidenceExample {
  type: string;
  hrisId: string;
  name: string;
  title: string;
  issue: string;
  evidenceGap: string;
  decisionImpact: string;
}

interface EvidenceRow {
  measure: string;
  raw: string;
  resolved: string;
  note: string;
}

const percent = (numerator: number, denominator: number) =>
  denominator === 0 ? 0 : Math.round((numerator / denominator) * 100);

function stableById(records: MessyEmployee[]) {
  return [...records].sort((a, b) => a.hris_id.localeCompare(b.hris_id));
}

export default function Comparison({ onNavigate }: Props) {
  const {
    data: savedValidations,
    isPending: isValidationsLoading,
    isError: isValidationsError,
    refetch: refetchValidations,
  } = useListWorkforceValidations();
  const eligibleProfiles = useMemo(
    () => getIntelligenceEligibleEmployees(cleanDataset, savedValidations ?? []),
    [savedValidations],
  );
  const report = useMemo(() => {
    const total = messyDataset.length;
    const rawStatus = messyDataset.reduce(
      (counts, employee) => {
        if (employee.skills.length === 0) counts.notCapabilityAssessable += 1;
        else if (employee.data_issues.length > 0) counts.reviewableSourceIssue += 1;
        else counts.noObservedIssue += 1;
        return counts;
      },
      { noObservedIssue: 0, reviewableSourceIssue: 0, notCapabilityAssessable: 0 },
    );

    const capabilityMetrics = eligibleProfiles.map(getCapabilityMetrics);
    const rawProfilesWithSkills = messyDataset.filter((employee) => employee.skills.length > 0).length;
    const requiredSkillInstances = capabilityMetrics.reduce((sum, metrics) => sum + metrics.requiredSkills, 0);
    const coveredRequiredSkills = capabilityMetrics.reduce((sum, metrics) => sum + metrics.coveredSkills, 0);
    const profilesWithRequiredSkillEvidence = capabilityMetrics.filter((metrics) => metrics.coveredSkills > 0).length;
    const profilesWithRoleMapping = eligibleProfiles.filter((employee) => employee.required_skills.length > 0).length;
    const profilesWithCriticalGaps = eligibleProfiles.filter((employee) =>
      employee.skill_gaps.some((gap) => gap.gap_severity === 'critical'),
    ).length;
    const reviewableResolvedProfiles = cleanDataset.filter((employee) => employee.requires_human_review).length;

    return {
      total,
      eligibleProfiles: eligibleProfiles.length,
      rawStatus,
      rawProfilesWithSkills,
      requiredSkillInstances,
      coveredRequiredSkills,
      profilesWithRequiredSkillEvidence,
      profilesWithRoleMapping,
      profilesWithCriticalGaps,
      reviewableResolvedProfiles,
    };
  }, [eligibleProfiles]);

  const sourceIssueExamples = useMemo<EvidenceExample[]>(() => {
    const duplicates = stableById(messyDataset.filter((employee) => employee.has_duplicate_flag))
      .slice(0, 2)
      .map((employee) => ({
        type: 'Potential duplicate',
        hrisId: employee.hris_id,
        name: employee.name_hris,
        title: employee.job_title,
        issue: 'potential_duplicate_record',
        evidenceGap: 'Marked as a potential duplicate in the source records; the records need an identity decision before headcount use.',
        decisionImpact: 'Avoid treating this as an independent employee until the source relationship is reviewed.',
      }));
    const dateConflicts = stableById(
      messyDataset.filter((employee) => employee.data_issues.includes('conflicting_hire_dates') && employee.hire_date_ats),
    )
      .slice(0, 2)
      .map((employee) => {
        const months = Math.round(Math.abs(
          (new Date(employee.hire_date_hris).getTime() - new Date(employee.hire_date_ats!).getTime()) / 86400000,
        ) / 30);
        return {
          type: 'Tenure evidence conflict',
          hrisId: employee.hris_id,
          name: employee.name_hris,
          title: employee.job_title,
          issue: 'conflicting_hire_dates',
          evidenceGap: `HRIS hire date ${employee.hire_date_hris} and ATS hire date ${employee.hire_date_ats} differ by about ${months} months.`,
          decisionImpact: 'Confirm the source of record before using tenure in progression or eligibility decisions.',
        };
      });
    return [...duplicates, ...dateConflicts];
  }, []);

  const capabilityEvidenceExamples = useMemo<EvidenceExample[]>(() => {
    const missingSkillEvidence = stableById(
      messyDataset.filter((employee) => employee.skills.length === 0 && employee.data_issues.includes('missing_skill_data')),
    ).slice(0, 2).map((employee) => ({
      type: 'Missing skill evidence',
      hrisId: employee.hris_id,
      name: employee.name_hris,
      title: employee.job_title,
      issue: 'missing_skill_data',
      evidenceGap: 'The raw extract has no skill entries, so capability cannot be assessed from this source record.',
      decisionImpact: 'Do not infer role readiness from an empty skill field; collect or validate evidence first.',
    }));
    const missingLinks = stableById(messyDataset.filter((employee) => !employee.ats_id))
      .slice(0, 2)
      .map((employee) => ({
        type: 'Missing source link',
        hrisId: employee.hris_id,
        name: employee.name_hris,
        title: employee.job_title,
        issue: 'no_ats_record',
        evidenceGap: 'Present in HRIS but not linked to an ATS record, leaving the cross-source picture incomplete.',
        decisionImpact: 'Review source coverage before using this record for mobility or hiring-history decisions.',
      }));
    return [...missingSkillEvidence, ...missingLinks];
  }, []);

  const metrics: EvidenceRow[] = useMemo(() => [
    {
      measure: 'Skill fields populated in the raw extract',
      raw: `${report.rawProfilesWithSkills} / ${report.total} records (${percent(report.rawProfilesWithSkills, report.total)}%)`,
      resolved: 'Not restated as a resolved KPI',
      note: 'Raw field presence only; it does not establish evidence for a role requirement.',
    },
    {
      measure: 'Required-skill evidence coverage',
      raw: 'Not assessable: no role requirements are attached to raw records.',
      resolved: `${report.coveredRequiredSkills} / ${report.requiredSkillInstances} required-skill instances (${percent(report.coveredRequiredSkills, report.requiredSkillInstances)}%)`,
      note: `Coverage counts required skills with explicit or inferred evidence; ${report.profilesWithRequiredSkillEvidence} / ${report.eligibleProfiles} eligible profiles have evidence for at least one required skill. Held profiles are excluded.`,
    },
    {
      measure: 'Profiles with a role requirement map',
      raw: `0 / ${report.total}: raw records do not include a role requirement map.`,
      resolved: `${report.profilesWithRoleMapping} / ${report.eligibleProfiles} eligible profiles (${percent(report.profilesWithRoleMapping, report.eligibleProfiles)}%)`,
      note: 'A role map contextualizes evidence and gaps; it does not make a source issue disappear. Held profiles are excluded.',
    },
    {
      measure: 'Profiles with a critical role gap',
      raw: 'Not assessable: no common requirement baseline in the raw extract.',
      resolved: `${report.profilesWithCriticalGaps} / ${report.eligibleProfiles} eligible profiles (${percent(report.profilesWithCriticalGaps, report.eligibleProfiles)}%)`,
      note: 'This is a mapped capability signal, subject to the required-skill evidence coverage above. Held profiles are excluded.',
    },
    {
      measure: 'Records retained for source validation',
      raw: `${MESSY_STATS.affectedRecords} / ${report.total} records with one or more observed source issues (${percent(MESSY_STATS.affectedRecords, report.total)}%)`,
      resolved: `${report.reviewableResolvedProfiles} / ${report.total} profiles marked for human review (${percent(report.reviewableResolvedProfiles, report.total)}%)`,
      note: 'These are different classifications: observed raw issues versus the contextualized review queue.',
    },
  ], [report]);

  const affectedPct = percent(MESSY_STATS.affectedRecords, report.total);
  const statuses = [
    { label: 'No observed issue', count: report.rawStatus.noObservedIssue, color: 'bg-primary' },
    { label: 'Reviewable source issue with some skill evidence', count: report.rawStatus.reviewableSourceIssue, color: 'bg-muted-foreground' },
    { label: 'Not capability-assessable: skill data missing', count: report.rawStatus.notCapabilityAssessable, color: 'bg-accent' },
  ];

  if (isValidationsLoading) return <ValidationDataStatus state="loading" />;
  if (isValidationsError) return <ValidationDataStatus state="error" onRetry={() => void refetchValidations()} />;

  return (
    <div className="space-y-16 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-12 pb-10 border-b border-border">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-display font-medium text-foreground leading-[1.05] tracking-tight">
            Evidence report: <br />
            <span className="text-muted-foreground">Raw extract to contextualized evidence</span>
          </h1>
          <p className="text-lg text-foreground mt-6 leading-relaxed border-l border-primary pl-4">
            This is an evidence narrative, not an apples-to-apples KPI comparison. It shows what the raw extract can support and how identity resolution, source review, and role mapping make evidence reviewable.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Capability measures use {report.eligibleProfiles} profiles currently eligible for intelligence analysis; held validation cases are excluded.
          </p>
        </div>
        <aside className="lg:border-l lg:border-border lg:pl-8 self-end bg-card p-4 border border-border rounded-2xl shadow-airbnb-subtle lg:border-y-0 lg:border-r-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:rounded-none lg:border-solid">
          <div className="text-xs font-mono font-medium uppercase tracking-widest text-primary">Evidence boundary</div>
          <p className="mt-3 text-[13px] leading-relaxed text-foreground font-medium">
            {affectedPct}% ({MESSY_STATS.affectedRecords}/{report.total}) of raw records have an observed source issue. Contextualization prioritizes review; it does not resolve every issue.
          </p>
        </aside>
      </div>

      <section className="pb-16 border-b border-border">
        <SectionHeader title="What changes in the evidence available for review" />
        <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
          Each row declares its denominator and measurement basis. Read across as a change in available context, not as two versions of the same KPI.
        </p>
        <div className="border border-border bg-card overflow-hidden rounded-2xl shadow-airbnb-subtle">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left border-collapse">
              <thead>
                <tr className="bg-muted text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground">
                  <th className="px-6 py-4 border-b border-border">Evidence measure</th>
                  <th className="px-6 py-4 border-b border-l border-border">Raw extract observation</th>
                  <th className="px-6 py-4 border-b border-l border-border bg-primary/5 text-primary">Contextualized evidence</th>
                  <th className="px-6 py-4 border-b border-l border-border">Method note</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {metrics.map((row) => (
                  <tr key={row.measure} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors align-top">
                    <td className="px-6 py-4 font-medium text-foreground">{row.measure}</td>
                    <td className="px-6 py-4 text-muted-foreground border-l border-border">{row.raw}</td>
                    <td className="px-6 py-4 text-foreground font-medium border-l border-border bg-primary/5">{row.resolved}</td>
                    <td className="px-6 py-4 text-muted-foreground border-l border-border text-xs leading-relaxed">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pb-16 border-b border-border">
        <SectionHeader title="Raw record classification method" />
        <div className="p-6 md:p-8 border border-border bg-card rounded-2xl shadow-airbnb-subtle">
          <p className="text-sm text-foreground leading-relaxed max-w-4xl">
            Product classification of all {report.total} raw records, assigned once in this order: missing skill data; otherwise an observed source issue with at least one skill entry; otherwise no observed issue. “No observed issue” means no issue recorded in this extract, not verified accuracy.
          </p>
          <div className="mt-8 space-y-5">
            {statuses.map((status) => (
              <div key={status.label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-2 items-center">
                <div className="h-3 bg-muted overflow-hidden">
                  <div className={`h-full ${status.color}`} style={{ width: `${percent(status.count, report.total)}%` }} />
                </div>
                <div className="text-sm font-mono font-medium text-foreground text-right">{status.count}/{report.total} ({percent(status.count, report.total)}%)</div>
                <div className="col-span-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">{status.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-7 pt-5 border-t border-border text-xs text-muted-foreground">
            Check: {statuses.reduce((sum, status) => sum + status.count, 0)} / {report.total} records. Categories are mutually exclusive and exhaustive for this product view.
          </p>
        </div>
      </section>

      <section>
        <SectionHeader title="Deterministic examples from the source extract" />
        <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
          Examples are selected by issue criterion and then HRIS ID ascending: the first two potential duplicates and date conflicts; the first two missing-skill and missing-ATS-link records.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ExampleGroup title="Source decisions needed" description="Identity and tenure evidence that should be validated before it informs planning." examples={sourceIssueExamples} onNavigate={onNavigate} />
          <ExampleGroup title="Capability evidence limitations" description="Missing evidence or source links that constrain the record available for capability review." examples={capabilityEvidenceExamples} onNavigate={onNavigate} />
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return <div className="flex items-center gap-3 mb-8"><span className="h-px w-8 bg-primary" aria-hidden="true" /><h2 className="text-3xl font-display font-medium text-foreground tracking-tight">{title}</h2></div>;
}

function ExampleGroup({ title, description, examples, onNavigate }: { title: string; description: string; examples: EvidenceExample[]; onNavigate: Props['onNavigate'] }) {
  return <div className="space-y-6"><div className="mb-6"><h3 className="text-2xl font-display font-medium text-foreground">{title}</h3><p className="text-sm text-muted-foreground mt-2 border-l border-border pl-3">{description}</p></div>{examples.map((example) => <ExampleCard key={`${example.issue}-${example.hrisId}`} {...example} onNavigate={onNavigate} />)}</div>;
}

function ExampleCard({ type, hrisId, name, title, issue, evidenceGap, decisionImpact, onNavigate }: EvidenceExample & { onNavigate: Props['onNavigate'] }) {
  return <div className="bg-card border border-border shadow-airbnb-subtle rounded-2xl overflow-hidden flex flex-col"><div className="px-5 py-3 border-b border-border bg-muted/30 flex items-center justify-between gap-3"><span className="inline-flex text-[11px] font-mono font-medium uppercase tracking-widest text-foreground">{type}</span><span className="text-[11px] font-mono font-medium text-muted-foreground shrink-0">ID: {hrisId}</span></div><div className="px-5 py-4 border-b border-border"><div className="text-lg font-display font-medium text-foreground">{name}</div><div className="text-sm text-muted-foreground mt-1">{title}</div></div><div className="flex flex-col text-sm"><div className="p-5 border-b border-border flex flex-col gap-1.5"><span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Evidence limitation</span><span className="text-foreground">{evidenceGap}</span></div><div className="p-5 bg-accent/5 text-foreground flex flex-col gap-1.5"><span className="text-xs font-mono text-accent font-semibold uppercase tracking-widest">Decision impact</span><span className="leading-snug">{decisionImpact}</span></div></div><div className="p-4 border-t border-border"><button type="button" onClick={() => onNavigate('review', { mode: 'messy', issue })} className="w-full px-4 py-2.5 text-sm font-medium border border-border text-foreground hover:bg-muted transition-colors">Open relevant issue in Raw Data Validation</button></div></div>;
}