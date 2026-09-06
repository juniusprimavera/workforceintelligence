import { lazy, Suspense, useMemo } from 'react';
import { useListWorkforceValidations } from '@workspace/api-client-react';
import {
  cleanDataset,
  getCapabilityMetrics,
  getIntelligenceEligibleEmployees,
  getValidationStatusCounts,
  hasAiInferredSignal,
  hasCriticalRoleGap,
  hasLearningPathway,
  isRoleFitComplete,
} from '../data';
import { MESSY_STATS, CLEAN_STATS } from '../data/stats';
import type { DatasetMode } from '../data';
import type { ViewTab } from '../App';

const DashboardCharts = lazy(() => import('./DashboardCharts'));

interface Props {
  mode: DatasetMode;
  onNavigate: (
    v: ViewTab,
    options?: {
      mode?: DatasetMode;
      confidence?: string;
      focus?: string;
      department?: string;
      location?: string;
      priority?: 'all' | 'urgent' | 'normal';
      status?: 'all' | 'unresolved' | 'confirmed' | 'held';
      reason?: string;
      issue?: string;
    },
  ) => void;
}

export default function Dashboard({ mode, onNavigate }: Props) {
  const {
    data: savedValidations,
    isPending: isValidationsLoading,
    isError: isValidationsError,
  } = useListWorkforceValidations();
  const validationStatusCounts = useMemo(
    () => getValidationStatusCounts(cleanDataset, savedValidations ?? []),
    [savedValidations],
  );
  const capabilityEmployees = useMemo(
    () => getIntelligenceEligibleEmployees(cleanDataset, savedValidations ?? []),
    [savedValidations],
  );
  const decisionStateAvailable = !isValidationsLoading && !isValidationsError;
  const capabilityStats = useMemo(() => {
    const total = capabilityEmployees.length;
    const employeeMetrics = capabilityEmployees.map(getCapabilityMetrics);
    const roleFitComplete = capabilityEmployees.filter(isRoleFitComplete).length;
    const withAiSignals = capabilityEmployees.filter(hasAiInferredSignal).length;
    const criticalGaps = capabilityEmployees.filter(hasCriticalRoleGap).length;
    const withLearningPathways = capabilityEmployees.filter(hasLearningPathway).length;
    const averageEvidenceCoverage = total === 0
      ? 0
      : Math.round(employeeMetrics.reduce((sum, metrics) => sum + metrics.evidenceCoverage, 0) / total);
    const averageProficiencyProgress = total === 0
      ? 0
      : Math.round(employeeMetrics.reduce((sum, metrics) => sum + metrics.proficiencyProgress, 0) / total);

    return {
      total,
      roleFitComplete,
      roleFitCompletePercent: total === 0 ? 0 : Math.round((roleFitComplete / total) * 100),
      withAiSignals,
      aiSignalsPercent: total === 0 ? 0 : Math.round((withAiSignals / total) * 100),
      criticalGaps,
      withLearningPathways,
      averageEvidenceCoverage,
      averageProficiencyProgress,
    };
  }, [capabilityEmployees]);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      {/* Mode headline */}
      {mode === 'messy' ? (
        <MessyHeadline onNavigate={onNavigate} />
      ) : (
        <CleanHeadline
          criticalGapCount={decisionStateAvailable ? capabilityStats.criticalGaps : null}
          onNavigate={onNavigate}
        />
      )}

      {mode === 'clean' && (
        <section className="border border-border bg-card p-6 md:p-8 rounded-2xl shadow-airbnb-subtle">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
            <div>
              <div className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest">Data Validation</div>
              <p className="text-[13px] text-muted-foreground mt-2 max-w-2xl">
                Local decision status for the {CLEAN_STATS.requiresReview} profiles in the validation casebook. This comes before capability evidence and does not write back to source systems.
              </p>
            </div>
            <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">UNIT: VALIDATION CASES</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <ValidationMetric
              label="Total validation cases"
              value={validationStatusCounts.total}
              detail="Profiles with at least one reason requiring a local decision"
            />
            <ValidationMetric
              label="Awaiting decision"
              value={decisionStateAvailable ? validationStatusCounts.unresolved : '—'}
              detail={isValidationsError ? 'Unavailable until saved decisions can be read' : 'No Confirm or Hold decision recorded'}
              actionLabel={decisionStateAvailable ? `Open ${validationStatusCounts.unresolved} cases` : undefined}
              onClick={decisionStateAvailable
                ? () => onNavigate('review', { mode: 'clean', status: 'unresolved' })
                : undefined}
            />
            <ValidationMetric
              label="Confirmed locally"
              value={decisionStateAvailable ? validationStatusCounts.confirmed : '—'}
              detail="Selected source values are used only in Workforce Intelligence"
              actionLabel={decisionStateAvailable ? `Open ${validationStatusCounts.confirmed} cases` : undefined}
              onClick={decisionStateAvailable
                ? () => onNavigate('review', { mode: 'clean', status: 'confirmed' })
                : undefined}
            />
            <ValidationMetric
              label="Held locally"
              value={decisionStateAvailable ? validationStatusCounts.held : '—'}
              detail="Excluded from intelligence use pending source review"
              actionLabel={decisionStateAvailable ? `Open ${validationStatusCounts.held} cases` : undefined}
              onClick={decisionStateAvailable
                ? () => onNavigate('review', { mode: 'clean', status: 'held' })
                : undefined}
            />
          </div>
        </section>
      )}

      {/* Key signals — evidence in a reading flow, not competing cards */}
      {mode === 'messy' ? (
        <div className="border border-border bg-card p-6 md:p-8 rounded-2xl shadow-airbnb-subtle">
          <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-border mb-6">
            <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest">Extract Integrity</span>
              <span className="text-xs font-mono text-muted-foreground">N = {MESSY_STATS.total} SOURCE RECORDS</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <BriefSignal
              label="Source records with issues"
              value={String(MESSY_STATS.affectedRecords)}
              sub={`of ${MESSY_STATS.total} records have at least one observed source issue`}
              highlight
              actionLabel={`View ${MESSY_STATS.affectedRecords} records`}
              onClick={() => onNavigate('review', { mode: 'messy' })}
            />
            <BriefSignal
              label="Missing skill data"
              value={String(MESSY_STATS.missingSkills)}
              sub="Records missing structured skill baseline"
              highlight
              actionLabel={`View ${MESSY_STATS.missingSkills} records`}
              onClick={() => onNavigate('review', { mode: 'messy', issue: 'missing_skill_data' })}
            />
            <BriefSignal
              label="Incomplete performance history"
              value={String(MESSY_STATS.incompletePerformance)}
              sub="Records without a complete performance history"
              actionLabel={`View ${MESSY_STATS.incompletePerformance} records`}
              onClick={() => onNavigate('review', { mode: 'messy', issue: 'incomplete_performance_history' })}
            />
            <BriefSignal
              label="Conflicting hire dates"
              value={String(MESSY_STATS.conflictingDates)}
              sub="Incongruent ATS and HRIS tenure dates"
              actionLabel={`View ${MESSY_STATS.conflictingDates} records`}
              onClick={() => onNavigate('review', { mode: 'messy', issue: 'conflicting_hire_dates' })}
            />
          </div>
          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest">Separate completeness signal</div>
              <p className="text-sm text-foreground mt-2">
                <span className="font-semibold">{MESSY_STATS.employeesWithNoSkillsOrTraining}</span> source records have no skills or training recorded.
              </p>
              <p className="text-[13px] text-muted-foreground mt-1">This is a completeness signal, not another source-issue category or a count of training cases.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-border bg-card p-6 md:p-8 rounded-2xl shadow-airbnb-subtle">
          <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-border mb-6">
            <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest">Skill Intelligence</span>
            <span className="text-xs font-mono text-muted-foreground">WORKFORCE READINESS · N = {CLEAN_STATS.total} RESOLVED PROFILES</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            <BriefSignal
              label="People with critical role gaps"
              value={decisionStateAvailable ? String(capabilityStats.criticalGaps) : '—'}
              sub={decisionStateAvailable
                ? 'Eligible profiles with at least one critical gap against their role standard'
                : 'Unavailable until saved validation decisions can be read'}
              highlightAlert
              actionLabel={decisionStateAvailable ? `View ${capabilityStats.criticalGaps} people` : undefined}
              onClick={decisionStateAvailable ? () => onNavigate('skills', { focus: 'critical-gaps' }) : undefined}
            />
            <BriefSignal
              label="People with learning pathways"
              value={decisionStateAvailable ? String(capabilityStats.withLearningPathways) : '—'}
              sub={decisionStateAvailable
                ? 'Eligible profiles with role-based learning options available for review'
                : 'Unavailable until saved validation decisions can be read'}
              actionLabel={decisionStateAvailable ? `View ${capabilityStats.withLearningPathways} people` : undefined}
              onClick={decisionStateAvailable ? () => onNavigate('skills', { focus: 'interventions' }) : undefined}
            />
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <div className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest">Capability baseline</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
              <CapabilityMetric
                label="Role-fit complete"
                value={decisionStateAvailable ? `${capabilityStats.roleFitCompletePercent}%` : '—'}
                detail={decisionStateAvailable
                  ? `${capabilityStats.roleFitComplete} of ${capabilityStats.total} eligible profiles meet every required skill level`
                  : 'Unavailable until held profiles can be excluded'}
                actionLabel={decisionStateAvailable ? `View ${capabilityStats.roleFitComplete} people` : undefined}
                onClick={decisionStateAvailable ? () => onNavigate('skills', { focus: 'role-fit-complete' }) : undefined}
              />
              <CapabilityMetric
                label="Average proficiency progress"
                value={decisionStateAvailable ? `${capabilityStats.averageProficiencyProgress}%` : '—'}
                detail={decisionStateAvailable ? 'Average current proficiency progress across eligible profiles' : 'Unavailable until held profiles can be excluded'}
              />
              <CapabilityMetric
                label="Required-skill coverage"
                value={decisionStateAvailable ? `${capabilityStats.averageEvidenceCoverage}%` : '—'}
                detail={decisionStateAvailable ? 'Average share of required skills with evidence across eligible profiles' : 'Unavailable until held profiles can be excluded'}
              />
              <CapabilityMetric
                label="AI-inferred skill signals"
                value={decisionStateAvailable ? `${capabilityStats.aiSignalsPercent}%` : '—'}
                detail={decisionStateAvailable
                  ? `${capabilityStats.withAiSignals} of ${capabilityStats.total} eligible profiles have contextual signals`
                  : 'Unavailable until held profiles can be excluded'}
                actionLabel={decisionStateAvailable ? `View ${capabilityStats.withAiSignals} people` : undefined}
                onClick={decisionStateAvailable ? () => onNavigate('skills', { focus: 'ai-signals' }) : undefined}
              />
            </div>
          </div>
        </div>
      )}

      <Suspense fallback={<DashboardChartsFallback mode={mode} />}>
        <DashboardCharts mode={mode} />
      </Suspense>

    </div>
  );
}

function DashboardChartsFallback({ mode }: { mode: DatasetMode }) {
  return (
    <div
      className={mode === 'messy' ? 'grid grid-cols-1 lg:grid-cols-2 gap-8' : 'grid grid-cols-1 lg:grid-cols-3 gap-8'}
      data-testid="dashboard-charts-loading"
      role="status"
      aria-label="Loading dashboard charts"
    >
      <div className="border-t border-border pt-5 animate-pulse">
        <div className="h-6 w-48 bg-muted mb-2" />
        <div className="h-4 w-64 bg-muted mb-8" />
        <div className="h-[280px] bg-muted/50" />
      </div>
      <div className={`${mode === 'messy' ? '' : 'lg:col-span-2'} border-t border-border pt-5 animate-pulse`}>
        <div className="h-6 w-56 bg-muted mb-2" />
        <div className="h-4 w-72 bg-muted mb-8" />
        <div className="h-[280px] bg-muted/50" />
      </div>
    </div>
  );
}

function BriefSignal({ label, value, sub, highlight, highlightAlert, actionLabel, onClick }: {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
  highlightAlert?: boolean;
  actionLabel?: string;
  onClick?: () => void;
}) {
  return (
    <div className="flex flex-col">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{label}</div>
      <div className={`text-5xl font-display mt-3 mb-2 ${highlightAlert ? 'text-accent' : highlight ? 'text-primary' : 'text-foreground'}`}>{value}</div>
      <div className="text-[13px] leading-relaxed text-muted-foreground max-w-[200px] border-l-2 border-border pl-3 mt-1">{sub}</div>
      {actionLabel && onClick && (
        <button
          type="button"
          onClick={onClick}
          className="mt-4 text-left text-[13px] font-semibold text-primary hover:text-primary/75 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 w-fit"
        >
          {actionLabel} →
        </button>
      )}
    </div>
  );
}

function CapabilityMetric({ label, value, detail, actionLabel, onClick }: {
  label: string;
  value: string;
  detail: string;
  actionLabel?: string;
  onClick?: () => void;
}) {
  return (
    <div className="border-l-2 border-border pl-4 min-w-0">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{label}</div>
      <div className="text-3xl font-display text-foreground mt-2">{value}</div>
      <div className="text-[13px] leading-relaxed text-muted-foreground mt-2 max-w-[230px]">{detail}</div>
      {actionLabel && onClick && (
        <button
          type="button"
          onClick={onClick}
          className="mt-3 text-left text-[13px] font-semibold text-primary hover:text-primary/75 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 w-fit"
        >
          {actionLabel} →
        </button>
      )}
    </div>
  );
}

function ValidationMetric({ label, value, detail, actionLabel, onClick }: {
  label: string;
  value: number | string;
  detail: string;
  actionLabel?: string;
  onClick?: () => void;
}) {
  return (
    <div className="border-l-2 border-border pl-4 min-w-0">
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{label}</div>
      <div className="text-3xl font-display text-foreground mt-2">{value}</div>
      <div className="text-[13px] leading-relaxed text-muted-foreground mt-2">{detail}</div>
      {actionLabel && onClick && (
        <button
          type="button"
          onClick={onClick}
          className="mt-3 text-left text-[13px] font-semibold text-primary hover:text-primary/75 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 w-fit"
        >
          {actionLabel} →
        </button>
      )}
    </div>
  );
}

function MessyHeadline({ onNavigate }: { onNavigate: (view: ViewTab, options?: { mode?: DatasetMode; focus?: string }) => void }) {
  return (
    <div className="pb-8 border-b border-border flex flex-col md:flex-row items-start gap-12">
      <div className="flex-1 max-w-3xl">
        <div className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-4">Current review / source intake</div>
        <h1 className="text-4xl md:text-5xl font-display font-medium text-foreground leading-[1.1]">Source readiness</h1>
        <p className="text-lg text-foreground mt-5 leading-relaxed max-w-2xl">
          <span className="font-semibold">Current question:</span> can this extract support a workforce decision?
        </p>
        <p className="text-base text-muted-foreground mt-3 leading-relaxed max-w-2xl">
          The initial intake contains fragmentation between ATS and HRIS. Skill coverage is missing for <span className="font-semibold text-foreground">{MESSY_STATS.missingSkills}</span> people, so readiness should not be scored yet.
        </p>
      </div>
      <aside className="w-full md:w-72 bg-card border border-border p-5 rounded-2xl shadow-airbnb-subtle">
        <div className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest">Next Action</div>
        <p className="text-sm text-foreground leading-relaxed mt-3">
          Review structural conflicts before attempting intelligence tasks.
        </p>
        <button onClick={() => onNavigate('review', { mode: 'messy' })} className="mt-5 text-sm font-semibold bg-foreground text-background px-4 py-2 w-full hover:bg-foreground/90 transition-colors">
          Inspect Source Data
        </button>
      </aside>
    </div>
  );
}

function CleanHeadline({ criticalGapCount, onNavigate }: {
  criticalGapCount: number | null;
  onNavigate: (
    view: ViewTab,
    options?: {
      mode?: DatasetMode;
      status?: 'all' | 'unresolved' | 'confirmed' | 'held';
      focus?: string;
    },
  ) => void;
}) {
  return (
    <div className="pb-8 border-b border-border flex flex-col md:flex-row items-start gap-12">
      <div className="flex-1 max-w-3xl">
        <div className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-4">Current review / data validation</div>
        <h1 className="text-4xl md:text-5xl font-display font-medium text-foreground leading-[1.1]">Data validation first</h1>
        <p className="text-lg text-foreground mt-5 leading-relaxed max-w-2xl">
          <span className="font-semibold">Current question:</span> which profiles are ready for capability analysis?
        </p>
        <p className="text-base text-muted-foreground mt-3 leading-relaxed max-w-2xl">
          {criticalGapCount === null
            ? 'Capability analysis is paused until saved validation decisions can be read.'
            : <>Review source evidence and local decisions before interpreting the <span className="font-semibold text-foreground">{criticalGapCount}</span> eligible profiles with critical capability gaps.</>}
        </p>
      </div>
      <aside className="w-full md:w-72 bg-card border border-border p-5 border-l-4 border-l-primary rounded-2xl shadow-airbnb-subtle">
        <div className="text-xs font-mono font-medium text-primary uppercase tracking-widest">Next Action</div>
        <p className="text-sm text-foreground leading-relaxed mt-3">
          Resolve source-data decisions before reviewing role gaps or learning options.
        </p>
        <button
          type="button"
          disabled={criticalGapCount === null}
          onClick={() => onNavigate('review', { mode: 'clean', status: 'unresolved' })}
          className="mt-5 text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 w-full hover:bg-primary/90 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        >
          Review validation cases
        </button>
      </aside>
    </div>
  );
}
