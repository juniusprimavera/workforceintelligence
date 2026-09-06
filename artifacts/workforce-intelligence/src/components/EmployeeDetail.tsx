import { useEffect, useMemo, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
  getListWorkforceValidationsQueryKey,
  useListWorkforceValidations,
  useSaveWorkforceValidation,
} from '@workspace/api-client-react';
import type { MessyEmployee, CleanEmployee } from '../data/types';
import {
  cleanDataset,
  DEFAULT_REQUIRED_PROFICIENCY,
  getBestSkillEvidence,
  getCapabilityMetrics,
  PROFICIENCY_RANK,
} from '../data';
import type { DatasetMode } from '../data';
import {
  displayResolutionValue,
  getValidationFields,
  type ResolutionSource,
} from '../data/validation-resolution';
import { 
  X, AlertTriangle, AlertCircle, MapPin, Search, 
  BrainCircuit, ShieldCheck, Beaker, CheckCircle2,
  AlertOctagon, Info, ChevronRight, FileText, Lock,
  ShieldAlert
} from 'lucide-react';
import { ValidationDataStatus } from './ValidationDataStatus';

interface Props {
  mode: DatasetMode;
  messy: MessyEmployee | null;
  clean: CleanEmployee | null;
  workspace: 'employees' | 'validation' | 'skills';
  onClose: () => void;
}

const PROFICIENCY_COLORS: Record<string, string> = {
  awareness: 'bg-muted/50 text-foreground', 
  basic: 'bg-primary/20 text-primary', 
  intermediate: 'bg-primary/50 text-primary-foreground', 
  advanced: 'bg-primary/80 text-primary-foreground', 
  expert: 'bg-primary text-primary-foreground',
};
const PROFICIENCY_LABELS: Record<string, string> = {
  awareness: 'Awareness', basic: 'Basic', intermediate: 'Intermediate', advanced: 'Advanced', expert: 'Expert',
};
const PROFICIENCY_DESC: Record<string, string> = {
  awareness: 'Conceptual knowledge — not yet applied',
  basic: 'Can execute with supervision',
  intermediate: 'Independent in standard situations',
  advanced: 'Handles complexity, coaches peers',
  expert: 'Organizational authority, sets standards',
};
const SKILL_SOURCE_LABELS: Record<string, string> = {
  certification: 'Certification record',
  training: 'Training record',
  performance: 'Performance record',
  ai_inferred: 'AI-inferred contextual signal',
  self_declared: 'Self-declared record',
};
interface PeerRecommendation {
  skill: string;
  peerCount: number;
  cohortSize: number;
  adoption: number;
  provisional: boolean;
}

function isProfileValidated(profile: CleanEmployee): boolean {
  return !profile.requires_human_review && profile.identity_confidence >= 0.85;
}

function getPeerRecommendations(employee: CleanEmployee): PeerRecommendation[] {
  const cohort = cleanDataset.filter(peer =>
    peer.employee_id !== employee.employee_id &&
    peer.job_title_normalized === employee.job_title_normalized &&
    peer.grade_level === employee.grade_level &&
    isProfileValidated(peer)
  );
  if (cohort.length < 4) return [];

  const skillCounts = new Map<string, number>();
  cohort.forEach(peer => {
    const peerSkills = new Set([...peer.skills_explicit, ...peer.skills_inferred].map(record => record.skill));
    peerSkills.forEach(skill => skillCounts.set(skill, (skillCounts.get(skill) ?? 0) + 1));
  });

  const currentSkills = new Set([...employee.skills_explicit, ...employee.skills_inferred].map(record => record.skill));
  const requiredSkills = new Set(employee.required_skills);

  return Array.from(skillCounts.entries())
    .filter(([skill, count]) => !currentSkills.has(skill) && !requiredSkills.has(skill) && count / cohort.length >= 0.3)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 3)
    .map(([skill, peerCount]) => ({
      skill,
      peerCount,
      cohortSize: cohort.length,
      adoption: peerCount / cohort.length,
      provisional: employee.requires_human_review || employee.identity_confidence < 0.85,
    }));
}

function formatProficiency(level: string): string {
  return level === 'none' ? 'No evidence' : (PROFICIENCY_LABELS[level] ?? level);
}

export default function EmployeeDetail({ mode, messy, clean, workspace, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<'profile' | 'gaps' | 'learning'>('profile');
  const [selectedSources, setSelectedSources] = useState<Record<string, ResolutionSource>>({});
  const [decisionNote, setDecisionNote] = useState('');
  const queryClient = useQueryClient();
  const {
    data: savedValidations,
    isPending: isValidationsLoading,
    isError: isValidationsError,
    refetch: refetchValidations,
  } = useListWorkforceValidations();
  const resolvedValidations = savedValidations ?? [];
  const saveValidation = useSaveWorkforceValidation({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getListWorkforceValidationsQueryKey() });
      },
    },
  });

  const validationFields = useMemo(() => clean ? getValidationFields(clean) : [], [clean]);
  const savedValidation = useMemo(
    () => resolvedValidations.find((validation) => validation.employeeId === clean?.employee_id),
    [clean?.employee_id, resolvedValidations],
  );
  const isLocallyConfirmed = savedValidation?.status === 'confirmed';

  useEffect(() => {
    const sources = Object.fromEntries(
      validationFields.map((field) => {
        const saved = savedValidation?.decisions.find((decision) => decision.fieldKey === field.key);
        const defaultSource: ResolutionSource = field.sourceValues.hris === null ? 'ats' : 'hris';
        return [field.key, saved?.selectedSource ?? defaultSource];
      }),
    ) as Record<string, ResolutionSource>;
    setSelectedSources(sources);
    setDecisionNote(savedValidation?.decisionNote ?? '');
  }, [savedValidation, validationFields]);

  function saveLocalValidation(status: 'confirmed' | 'held') {
    if (!clean) return;

    saveValidation.mutate({
      employeeId: clean.employee_id,
      data: {
        status,
        decisionNote: decisionNote.trim() || null,
        decisions: status === 'confirmed'
          ? validationFields.map((field) => {
              const selectedSource = selectedSources[field.key] ?? 'hris';
              return {
                fieldKey: field.key,
                selectedSource,
                resolvedValue: displayResolutionValue(field, selectedSource),
                reason: field.policy,
                sourceValues: field.sourceValues,
              };
            })
          : [],
      },
    });
  }

  if (!messy && !clean) return null;

  return (
    <div className="flex flex-col h-full bg-card w-full" data-testid="employee-detail-content">
      {/* Header */}
      <div className="flex items-start justify-between p-6 border-b border-border shrink-0 bg-card/95 backdrop-blur-xl sticky top-0 z-20">
        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
              mode === 'messy' || workspace === 'validation' ? 'text-primary' : 'text-muted-foreground'
            }`}>
              {mode === 'messy'
                ? 'Raw source record'
                : workspace === 'validation'
                  ? 'Validation case'
                  : workspace === 'employees'
                    ? 'Employee profile'
                    : 'Capability sheet'}
            </span>
          </div>
          <h2 className="text-[24px] font-display font-semibold text-foreground truncate mt-2 leading-tight">
            {mode === 'messy' ? messy?.name_hris : clean?.name}
          </h2>
          <div className="text-[15px] font-semibold text-muted-foreground mt-2 flex items-center gap-3">
            <span>{mode === 'messy' ? messy?.job_title : clean?.job_title_normalized}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4 opacity-70" />{mode === 'messy' ? messy?.location : clean?.location}</span>
          </div>
        </div>
        <button
           type="button"
          onClick={onClose}
          aria-label="Close employee detail"
          className="p-2 bg-card hover:bg-muted text-foreground transition-colors border border-border shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {mode === 'messy' ? (
        <MessyView messy={messy!} />
      ) : isValidationsLoading ? (
        <ValidationDataStatus state="loading" />
      ) : isValidationsError ? (
        <ValidationDataStatus state="error" onRetry={() => void refetchValidations()} />
      ) : workspace === 'validation' ? (
        <ValidationView
          clean={clean!}
          decisionNote={decisionNote}
          isSaving={saveValidation.isPending}
          savedValidation={savedValidation}
          selectedSources={selectedSources}
          setDecisionNote={setDecisionNote}
          setSelectedSources={setSelectedSources}
          validationFields={validationFields}
          onSave={saveLocalValidation}
          saveError={saveValidation.error?.message}
        />
      ) : workspace === 'employees' ? (
        <EmployeeView clean={clean!} />
      ) : (
        <CleanView
          clean={clean!}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          profileIsReady={isProfileValidated(clean!) || isLocallyConfirmed}
        />
      )}
    </div>
  );
}

// ... Rest of the large file omitted to save bytes in the response, but logically I would generate it completely.
// Since I must output the full file, I will compress the sub-components while maintaining the design language.
// Actually, I have a big budget, I should output it. Let's do a tailored, complete file.

function MessyView({ messy }: { messy: MessyEmployee }) {
  const hasIssues = messy.data_issues.length > 0;

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-card">
      {hasIssues && (
        <div className="border-t-2 border-primary bg-muted/20 px-5 py-5">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Data Quality Issues ({messy.data_issues.length})
          </h3>
          <ul className="space-y-3">
            {messy.data_issues.map((issue, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] font-medium text-foreground py-3 border-b border-border last:border-0">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                {formatIssue(issue)}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Section title="Source Systems">
        <div className="flex gap-2 flex-wrap mb-4">
          {messy.source_systems.map(sys => (
            <span key={sys} className="text-[13px] font-bold text-foreground uppercase tracking-widest">
              {sys}
            </span>
          ))}
        </div>
        {messy.has_duplicate_flag && (
          <div className="text-[14px] text-primary font-semibold flex items-center gap-2 border-l-2 border-primary pl-4 py-1">
            <AlertOctagon className="w-5 h-5" />
            Potential duplicate record flagged
          </div>
        )}
      </Section>

      <Section title="Identity Fields Across Systems">
        <div className="space-y-2 text-[15px]">
          <FieldRow label="HRIS Name" value={messy.name_hris} />
          <FieldRow label="ATS Name" value={messy.name_ats ?? '—'} mismatch={messy.name_ats !== null && messy.name_ats !== messy.name_hris} />
          <FieldRow label="HRIS ID" value={messy.hris_id} />
          <FieldRow label="ATS ID" value={messy.ats_id ?? '—'} missing={!messy.ats_id} />
          <FieldRow label="Email" value={messy.email ?? '—'} missing={!messy.email} />
          <FieldRow label="Hire Date (HRIS)" value={messy.hire_date_hris} />
          <FieldRow label="Hire Date (ATS)" value={messy.hire_date_ats ?? '—'} mismatch={!!messy.hire_date_ats && messy.hire_date_ats !== messy.hire_date_hris} />
        </div>
      </Section>

      <Section title={`Skills (${messy.skills.length} recorded)`}>
        {messy.skills.length === 0 ? (
          <div className="text-[15px] font-semibold text-primary flex items-center gap-2 border-l-2 border-primary pl-4 py-1">
            <AlertCircle className="w-5 h-5 shrink-0" />
            No skills recorded — cannot assess readiness or gaps
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {messy.skills.map((skill, i) => (
              <span key={i} className="text-[14px] font-semibold text-foreground">{skill}</span>
            ))}
          </div>
        )}
      </Section>

      <Section title={`Performance Records (${messy.performance_records.length})`}>
        {messy.performance_records.length === 0 ? (
          <div className="text-[15px] font-semibold text-muted-foreground italic p-4 bg-muted/30 border-y border-border border-dashed text-center">No performance records found</div>
        ) : (
          <div className="space-y-2">
            {messy.performance_records.slice(0, 4).map((pr, i) => (
              <div key={i} className="flex items-center justify-between text-[15px] py-4 border-b border-border">
                <span className="font-bold text-foreground">{pr.year} {pr.quarter}</span>
                <div className="flex items-center gap-3">
                  <span className={pr.score !== null ? 'text-primary font-semibold text-lg' : 'text-primary font-semibold italic'}>
                    {pr.score !== null ? `${pr.score}/5` : 'Missing'}
                  </span>
                  {!pr.is_reliable && (
                    <span className="text-primary text-[11px] font-semibold uppercase tracking-wider">Unreliable</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>

      <div className="border-y border-primary/20 bg-primary/[0.02] p-6 text-[15px] font-bold text-primary text-center">
        Switch to Dataset B to see the resolved profile with actionable insights
      </div>
    </div>
  );
}

function ValidationView({
  clean, decisionNote, isSaving, savedValidation, selectedSources,
  setDecisionNote, setSelectedSources, validationFields, onSave, saveError,
}: any) {
  const [pendingDecision, setPendingDecision] = useState<'confirmed' | 'held' | null>(null);

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-card">
          <div className="flex-1 overflow-y-auto p-6 space-y-7">
        {savedValidation && (
          <div className="border-t-2 border-primary bg-muted/20 px-5 py-5">
            <div className="flex items-center gap-3 mb-2">
              {savedValidation.status === 'confirmed' ? <CheckCircle2 className="w-5 h-5 text-primary" /> : <Lock className="w-5 h-5 text-primary" />}
              <div className="text-[13px] font-semibold uppercase tracking-widest text-foreground">
                Local decision recorded
              </div>
            </div>
            <p className="text-[16px] font-semibold mt-2 text-foreground">
              {savedValidation.status === 'confirmed' ? 'Resolved data confirmed for Workforce Intelligence.' : 'Record held for investigation.'}
            </p>
            <p className="text-[14px] mt-1 text-muted-foreground">
              Source applications remain unchanged. {savedValidation.decisionNote && <span className="block mt-2 italic border-l-2 pl-3 py-1">"{savedValidation.decisionNote}"</span>}
            </p>
          </div>
        )}

        <div className="border-l-2 border-primary px-5 py-1">
          <div className="text-[12px] font-semibold uppercase tracking-widest text-primary mb-2">Read before deciding</div>
          <h3 className="text-xl font-display font-semibold text-foreground">An identity match does not resolve every source conflict</h3>
          <p className="text-[15px] text-muted-foreground mt-2 leading-relaxed">
            A <strong className="font-bold">{Math.round(clean.identity_confidence * 100)}% identity match</strong> means the records are very likely to belong to the same person. The high-priority status means a separate duplicate or source-data risk still needs a human decision before downstream insights are acted on.
          </p>
        </div>

        <Section title="Identity resolution evidence">
          <div className="space-y-2 text-[15px]">
            <FieldRow label="Match confidence" value={`${Math.round(clean.identity_confidence * 100)}%`} highlight={clean.identity_confidence >= 0.85 ? 'good' : 'bad'} />
            <FieldRow label="Resolution method" value={clean.identity_resolution_method.replace(/_/g, ' ')} />
            <FieldRow label="Data confidence" value={clean.data_confidence} />
            <FieldRow label="Employee ID" value={clean.employee_id} />
            <FieldRow label="Email" value={clean.email} />
          </div>
        </Section>

        <Section title={`Validation reasons (${clean.review_reasons.length})`}>
          {clean.review_reasons.length > 0 ? (
            <div className="space-y-3">
              {clean.review_reasons.map((reason: string, i: number) => (
                <div key={i} className="flex items-start gap-3 py-3 border-b border-primary/20">
                  <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-[15px] font-semibold text-foreground leading-snug">{formatIssue(reason)}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-[15px] font-semibold text-foreground bg-muted/40 px-4 py-3 border-y border-border flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              No validation issues were detected.
            </div>
          )}
        </Section>

        <Section title="Resolve differing source values">
          <p className="text-[15px] font-medium text-muted-foreground mb-6">
            Identity confidence answers whether these records likely belong to the same person. Choose the value Workforce Intelligence will use for analysis; source applications stay unchanged.
          </p>
          
          {validationFields.length > 0 ? (
            <div className="space-y-6">
              {validationFields.map((field: any) => {
                const selectedSource = selectedSources[field.key] ?? 'hris';
                return (
                  <div key={field.key} className="border-t border-border pt-5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-lg font-display font-bold text-foreground">{field.label}</h4>
                        <p className="mt-1 text-[13px] font-semibold text-muted-foreground">{field.policy}</p>
                      </div>
                      <span className="shrink-0 text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Local use only</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(['hris', 'ats'] as const).map((source) => {
                        const value = displayResolutionValue(field, source);
                        const unavailable = field.sourceValues[source] === null;
                        const isSelected = selectedSource === source;
                        
                        return (
                          <label
                            key={source}
                            className={`flex cursor-pointer items-start gap-4 border p-4 transition-all duration-300 ${
                              isSelected ? 'border-primary bg-primary/[0.03] ring-1 ring-primary/20' : 'border-border hover:bg-muted/50'
                            } ${unavailable ? 'cursor-not-allowed opacity-50 grayscale' : ''}`}
                          >
                            <input
                              type="radio"
                              name={`${clean.employee_id}-${field.key}`}
                              value={source}
                              checked={isSelected}
                              disabled={unavailable}
                              onChange={() => setSelectedSources({ ...selectedSources, [field.key]: source })}
                              className="mt-1 h-5 w-5 accent-primary shrink-0"
                            />
                            <div className="min-w-0">
                              <span className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{source === 'hris' ? 'HRIS Source' : 'ATS Source'}</span>
                              <span className={`block text-[15px] font-bold truncate ${isSelected ? 'text-primary' : 'text-foreground'}`}>{value}</span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="border-y border-border bg-muted/30 p-6 text-[15px] font-medium text-muted-foreground text-center">
              No field-level differences are available. Use identity evidence to make a local decision.
            </div>
          )}
        </Section>

        <Section title="Local decision note">
          <textarea
            value={decisionNote}
            onChange={(event) => setDecisionNote(event.target.value)}
            maxLength={500}
            placeholder="Optional: explain why this decision is appropriate for Workforce Intelligence."
             className="min-h-[120px] w-full resize-y border border-border bg-card p-4 text-[15px] font-medium text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/30 focus-visible:ring-2"
          />
        </Section>
      </div>

      {saveError && (
        <div className="border-t border-primary/20 bg-primary/10 p-6 text-[15px] font-semibold text-primary flex items-center gap-3">
          <AlertCircle className="w-5 h-5" />
          Could not save: {saveError}
        </div>
      )}

      {pendingDecision ? (
        <div className="border-t border-border bg-card p-8 shrink-0">
          <div className="mb-6 border-l-2 border-primary bg-muted/30 px-5 py-3">
            <h4 className="text-lg font-display font-semibold flex items-center gap-2 text-foreground">
              {pendingDecision === 'confirmed' ? <ShieldCheck className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
              {pendingDecision === 'confirmed' ? 'Confirm Resolution?' : 'Hold Record?'}
            </h4>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              {pendingDecision === 'confirmed'
                ? 'Selected values will be used for Intelligence analysis. Source systems (payroll, HRIS) are NOT changed.'
                : 'Record will be excluded from intelligence analysis until source-data concerns are resolved.'}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setPendingDecision(null)}
              disabled={isSaving}
              className="flex-1 border border-border bg-card py-4 text-[15px] font-bold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                onSave(pendingDecision);
                setPendingDecision(null);
              }}
              disabled={isSaving}
              className={`flex-1 py-4 text-[15px] font-semibold transition-colors ${
                pendingDecision === 'confirmed' ? 'bg-primary text-white hover:bg-primary/90' : 'bg-foreground text-white hover:bg-foreground/90'
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
            >
              {isSaving ? 'Saving…' : pendingDecision === 'confirmed' ? 'Confirm Resolution' : 'Hold Record'}
            </button>
          </div>
        </div>
      ) : (
          <div className="p-6 border-t border-border flex gap-3 shrink-0 bg-card">
          <button
            type="button"
            onClick={() => setPendingDecision('confirmed')}
            className="flex-1 py-3 bg-primary text-white text-[14px] font-semibold transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={() => setPendingDecision('held')}
            className="flex-1 py-3 border border-border bg-card text-foreground text-[14px] font-semibold hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
              Hold
          </button>
        </div>
      )}
    </div>
  );
}

function EmployeeView({ clean }: { clean: CleanEmployee }) {
  const completeness = [
    { label: 'Identity resolved', value: clean.data_completeness.identity_resolved ? 'Available' : 'Needs review' },
    { label: 'Skill evidence recorded', value: clean.data_completeness.has_skills ? 'Available' : 'Not recorded' },
    { label: 'Performance history', value: clean.data_completeness.has_performance ? 'Available' : 'Not recorded' },
    { label: 'Training history', value: clean.data_completeness.has_training ? 'Available' : 'Not recorded' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-card">
      <div className="px-6 py-5 border-b border-border bg-muted/20 shrink-0">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.12em] mb-1">
              Workforce profile
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground">Employment record</h3>
          </div>
          <span className="text-[13px] font-semibold text-muted-foreground">
            Evidence status: {clean.data_confidence}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-10 bg-card">
        <Section title="Employment details">
          <div className="space-y-1 text-[15px]">
            <FieldRow label="Employee ID" value={clean.employee_id} />
            <FieldRow label="Email" value={clean.email} />
            <FieldRow label="Job title" value={clean.job_title_normalized} />
            <FieldRow label="Job family" value={clean.job_family} />
            <FieldRow label="Department" value={clean.department} />
            <FieldRow label="Grade level" value={clean.grade_level} />
            <FieldRow label="Location" value={clean.location} />
            <FieldRow label="Hire date" value={clean.hire_date} />
            <FieldRow label="Tenure" value={`${clean.tenure_years} years`} />
          </div>
        </Section>

        <Section title="Record coverage">
          <div className="space-y-1 text-[15px]">
            {completeness.map((item) => (
              <FieldRow
                key={item.label}
                label={item.label}
                value={item.value}
                highlight={item.value === 'Available' ? 'good' : undefined}
              />
            ))}
            <FieldRow label="Performance trend" value={clean.performance_trend.replace(/_/g, ' ')} />
            <FieldRow
              label="Average performance"
              value={clean.avg_performance_score === null ? 'Not recorded' : `${clean.avg_performance_score}`}
            />
          </div>
        </Section>

        <div className="border-l border-border pl-4">
          <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.12em] mb-2">
            Capability review is separate
          </div>
          <p className="text-[14px] leading-relaxed text-muted-foreground">
            Skill requirements, role gaps, and learning paths are available in the Skill Intelligence workspace.
          </p>
        </div>
      </div>
    </div>
  );
}

interface CleanViewProps {
  clean: CleanEmployee;
  activeTab: 'profile' | 'gaps' | 'learning';
  setActiveTab: (tab: 'profile' | 'gaps' | 'learning') => void;
  profileIsReady: boolean;
}

function CleanView({ clean, activeTab, setActiveTab, profileIsReady }: CleanViewProps) {
  const criticalGaps = clean.skill_gaps.filter((gap) => gap.gap_severity === 'critical');
  const isSkillIntelligenceGated = !profileIsReady;
  const peerRecommendations = getPeerRecommendations(clean);
  const capabilityMetrics = getCapabilityMetrics(clean);
  const roleStandards = clean.required_skills.map((skill) => {
    const gap = clean.skill_gaps.find((item) => item.skill === skill);
    const evidence = getBestSkillEvidence(clean, skill);
    const currentLevel = gap?.current_proficiency ?? evidence?.proficiency ?? 'none';
    const requiredLevel = gap?.required_proficiency ?? DEFAULT_REQUIRED_PROFICIENCY;
    return {
      skill,
      requiredLevel,
      currentLevel,
      evidenceConfidence: evidence?.confidence ?? null,
      evidenceSource: evidence?.source ?? null,
      meetsStandard: PROFICIENCY_RANK[currentLevel] >= PROFICIENCY_RANK[requiredLevel],
    };
  });

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-card">
      <div className="px-6 py-5 border-b border-border bg-muted/20 shrink-0">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="grid grid-cols-3 gap-5 sm:gap-8">
              <CapabilitySummaryMetric label="Evidence coverage" value={capabilityMetrics.evidenceCoverage} />
              <CapabilitySummaryMetric label="Proficiency progress" value={capabilityMetrics.proficiencyProgress} />
              <CapabilitySummaryMetric label="Standard completion" value={capabilityMetrics.standardCompletion} />
            </div>
          
          {isSkillIntelligenceGated && (
            <div className="text-[13px] font-semibold text-primary flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              Pending Data Validation
            </div>
          )}
        </div>
      </div>

       <div className="flex px-6 border-b border-border shrink-0 bg-card">
        {(['profile', 'gaps', 'learning'] as const).map(tab => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`relative py-4 px-1 mr-6 text-[14px] font-medium capitalize transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
              activeTab === tab
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab === 'gaps' ? `Role Fit & Gaps (${clean.skill_gaps.length})` : tab === 'learning' ? `Learning Paths` : 'Skill Evidence'}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t-full" />
            )}
          </button>
        ))}
      </div>

       <div className="flex-1 overflow-y-auto p-6 bg-card">
        {activeTab === 'profile' && (
            <div className="space-y-10">
             <Section title="Recorded skill evidence">
              <p className="text-[14px] text-muted-foreground mb-4 leading-relaxed">
                Directly recorded evidence. Source, proficiency, and confidence are shown for each skill.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {clean.skills_explicit.map((s, i) => (
                  <SkillEvidenceCard key={`${s.skill}-${i}`} evidence={s} />
                ))}
                {clean.skills_explicit.length === 0 && (
                  <p className="text-[14px] text-muted-foreground italic">No directly recorded skill evidence is available.</p>
                )}
              </div>
            </Section>
             <Section title="Contextual / AI-inferred skill evidence">
               <p className="text-[14px] text-muted-foreground mb-4 leading-relaxed">
                 These are contextual signals, not direct records or confirmed capabilities.
               </p>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {clean.skills_inferred.map((s, i) => (
                  <SkillEvidenceCard key={`${s.skill}-${i}`} evidence={s} contextual />
                ))}
                {clean.skills_inferred.length === 0 && (
                  <p className="text-[14px] text-muted-foreground italic">No contextual or AI-inferred skill evidence is available.</p>
                )}
              </div>
             </Section>
              <Section title="AI-suggested skills">
                <div className="border border-border bg-muted/15 p-5">
                  <div className="flex items-start gap-3 mb-5">
                    <BrainCircuit className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-semibold text-foreground">
                        Evidence-based suggestions from comparable peers
                      </p>
                      <p className="text-[13px] text-muted-foreground mt-1 leading-relaxed">
                        These are exploratory signals, not mandatory role requirements. They are based on recurring skills among validated peers with the same role and grade.
                      </p>
                    </div>
                  </div>
                  {peerRecommendations.length > 0 ? (
                    <div className="border-t border-border">
                      {peerRecommendations.map((recommendation) => (
                        <div key={recommendation.skill} className="py-4 border-b last:border-b-0 border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <div className="text-[15px] font-semibold text-foreground">{recommendation.skill}</div>
                            <div className="text-[13px] text-muted-foreground mt-1">
                              Seen in {recommendation.peerCount} of {recommendation.cohortSize} comparable peers ({Math.round(recommendation.adoption * 100)}%)
                            </div>
                          </div>
                          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary shrink-0">
                            Peer-pattern signal
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="border-t border-border pt-4 text-[13px] text-muted-foreground leading-relaxed">
                      No peer-pattern suggestions are available for this profile yet. Suggestions require at least four comparable validated peers.
                    </p>
                  )}
                </div>
              </Section>
              <Section title={`Role standard · ${clean.job_title_normalized}`}>
               <p className="text-[14px] text-muted-foreground mb-4 leading-relaxed">
                  The standard for this position at grade {clean.grade_level} is an intermediate level for each listed skill. Current evidence is shown against that role baseline.
               </p>
                <div className="border-y border-border">
                  <div className="hidden sm:grid grid-cols-[minmax(0,1fr)_130px_170px] gap-4 py-3 border-b border-border text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    <span>Required skill</span>
                    <span>Role standard</span>
                    <span>Current evidence</span>
                  </div>
                  {roleStandards.map((standard) => (
                    <div key={standard.skill} className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_130px_170px] gap-2 sm:gap-4 py-4 border-b last:border-b-0 border-border">
                      <div>
                        <div className="font-semibold text-[15px] text-foreground">{standard.skill}</div>
                        <div className={`sm:hidden mt-1 text-[13px] ${standard.meetsStandard ? 'text-muted-foreground' : 'text-primary'}`}>
                          Current: {formatProficiency(standard.currentLevel)}
                        </div>
                      </div>
                      <div className={`text-[13px] font-semibold self-center px-2 py-1 w-fit ${PROFICIENCY_COLORS[standard.requiredLevel]}`}>
                        {formatProficiency(standard.requiredLevel)}
                      </div>
                      <div className="flex flex-col sm:items-start gap-1 self-center">
                        <span className={`text-[13px] font-semibold ${standard.meetsStandard ? 'text-foreground' : 'text-primary'}`}>
                          {formatProficiency(standard.currentLevel)} · {standard.meetsStandard ? 'Meets standard' : 'Gap'}
                        </span>
                        <span className="text-[12px] text-muted-foreground">
                          {standard.evidenceConfidence === null
                            ? 'No skill evidence recorded'
                            : `${SKILL_SOURCE_LABELS[standard.evidenceSource ?? ''] ?? standard.evidenceSource} · ${Math.round(standard.evidenceConfidence * 100)}% confidence`}
                        </span>
                      </div>
                   </div>
                 ))}
               </div>
             </Section>
          </div>
        )}
        
        {activeTab === 'gaps' && (
          <div className="space-y-6">
            {clean.skill_gaps.map((gap, i) => {
              const evidence = getBestSkillEvidence(clean, gap.skill);
              return (
                <div key={i} className={`border-t p-6 ${
                  gap.gap_severity === 'critical' ? 'border-primary bg-primary/[0.035]' : 'border-border'
                }`}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-lg font-display font-bold text-foreground flex items-center gap-2">
                        {gap.skill}
                        {gap.gap_severity === 'critical' && <span className="text-primary text-[10px] uppercase tracking-widest">Critical</span>}
                      </h4>
                      <p className="text-[14px] font-medium text-muted-foreground mt-1">
                        Required: {formatProficiency(gap.required_proficiency)} • Current: {formatProficiency(gap.current_proficiency)}
                      </p>
                      <p className="text-[12px] text-muted-foreground mt-2">
                        {evidence
                          ? `Evidence source: ${SKILL_SOURCE_LABELS[evidence.source] ?? evidence.source.replace(/_/g, ' ')} • Evidence confidence: ${Math.round(evidence.confidence * 100)}%`
                          : 'Evidence source: none recorded • Evidence confidence: unavailable'}
                      </p>
                    </div>
                  </div>
                  <div className="bg-muted/30 px-4 py-3 text-[14px] font-medium border-l-2 border-border text-muted-foreground">
                    <strong className="text-foreground">Role fit:</strong> close this gap to meet the expected proficiency for the current role.
                  </div>
                </div>
              );
            })}
            {clean.skill_gaps.length === 0 && (
              <div className="text-center py-12 text-muted-foreground font-medium border-y border-dashed border-border">
                <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3 opacity-50" />
                No skill gaps identified for current role.
              </div>
            )}
          </div>
        )}

        {activeTab === 'learning' && (
          <div className="space-y-6">
            {clean.recommended_learning.map((rec, i) => {
              const targetSkills = rec.skills_addressed;
              const duration = rec.duration_hours;
              return (
                <div key={i} className="border-t border-border pt-5 flex flex-col sm:flex-row gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[11px] font-bold uppercase tracking-widest ${
                        rec.priority === 'high' ? 'text-primary' : 'text-muted-foreground'
                      }`}>
                        {rec.priority} Priority
                      </span>
                      {duration && <span className="text-[13px] font-bold text-muted-foreground">{duration}h</span>}
                    </div>
                    <h4 className="text-lg font-display font-bold text-foreground leading-tight">{rec.course_name}</h4>
                    <div className="text-[14px] font-medium text-muted-foreground mt-1.5 flex items-center gap-2">
                      <FileText className="w-4 h-4 opacity-70" />
                      {rec.provider} • Targets: {targetSkills.join(', ') || 'Role development'}
                    </div>
                  </div>
                  <div className="shrink-0 border-l-2 border-border pl-4 py-1 sm:max-w-64">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      Review status
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                      {isSkillIntelligenceGated
                        ? 'Pathway is available for review. Complete validation before acting; no LMS assignment is created.'
                        : 'Pathway is available for review. No LMS assignment is created from this workspace.'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function SkillEvidenceCard({
  evidence,
  contextual = false,
}: {
  evidence: CleanEmployee['skills_explicit'][number];
  contextual?: boolean;
}) {
  const sourceLabel = SKILL_SOURCE_LABELS[evidence.source] ?? evidence.source.replace(/_/g, ' ');

  return (
    <div className={`border p-4 ${contextual ? 'border-border bg-muted/20' : 'border-border bg-card'}`}>
      <div className="flex items-start gap-3">
        {contextual ? (
          <BrainCircuit className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
        ) : (
          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
        )}
        <div className="min-w-0">
          <h4 className="text-[15px] font-semibold text-foreground">{evidence.skill}</h4>
          <dl className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-1 text-[12px] text-muted-foreground">
            <div><dt className="inline font-semibold text-foreground">Source: </dt><dd className="inline">{sourceLabel}</dd></div>
            <div><dt className="inline font-semibold text-foreground">Proficiency: </dt><dd className="inline">{formatProficiency(evidence.proficiency)}</dd></div>
            <div><dt className="inline font-semibold text-foreground">Evidence confidence: </dt><dd className="inline">{Math.round(evidence.confidence * 100)}%</dd></div>
          </dl>
        </div>
      </div>
    </div>
  );
}

function CapabilitySummaryMetric({ label, value }: { label: string; value: number }) {
  return (
    <div className="border-l border-border pl-3 sm:pl-5 first:border-l-0 first:pl-0">
      <div className="text-[10px] sm:text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.1em] mb-1">{label}</div>
      <div className={`text-xl sm:text-2xl font-display font-semibold ${
        value >= 80 ? 'text-foreground' : value >= 60 ? 'text-muted-foreground' : 'text-primary'
      }`}>
        {value}%
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-lg font-display font-bold text-foreground mb-4">{title}</h3>
      {children}
    </section>
  );
}

function FieldRow({ label, value, missing, mismatch, highlight }: any) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-border/60 last:border-0 gap-1 sm:gap-4">
      <div className="w-48 shrink-0 text-[14px] font-bold text-muted-foreground">{label}</div>
      <div className={`flex-1 min-w-0 font-semibold text-[15px] ${
        missing ? 'text-muted-foreground italic' : 
        mismatch ? 'text-primary' :
        highlight === 'good' ? 'text-foreground' :
        highlight === 'bad' ? 'text-primary' :
        'text-foreground'
      }`}>
        {value}
      </div>
      {mismatch && <div className="text-[11px] font-semibold uppercase tracking-widest text-primary shrink-0">Mismatch</div>}
    </div>
  );
}

function formatIssue(issue: string): string {
  return issue.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}
