import { useMemo } from 'react';
import { useListWorkforceValidations } from '@workspace/api-client-react';
import {
  cleanDataset,
  getValidationDecisionStatus,
  isSourceIssueRecord,
  isValidationCase,
  messyDataset,
} from '../data';
import type { DatasetMode } from '../data';
import type { CleanEmployee, MessyEmployee } from '../data/types';
import { AlertCircle, AlertTriangle, CheckCircle2, ChevronRight, Search } from 'lucide-react';
import { ValidationDataStatus } from './ValidationDataStatus';

type ValidationPriority = 'all' | 'urgent' | 'normal';
type ValidationStatus = 'all' | 'unresolved' | 'confirmed' | 'held';

interface Props {
  mode: DatasetMode;
  onSelect: (id: string) => void;
  selectedId: string | null;
  search: string;
  setSearch: (value: string) => void;
  filterDept: string;
  setFilterDept: (value: string) => void;
  filterLocation: string;
  setFilterLocation: (value: string) => void;
  priority: ValidationPriority;
  setPriority: (value: ValidationPriority) => void;
  status: ValidationStatus;
  setStatus: (value: ValidationStatus) => void;
  confidence: string;
  setConfidence: (value: string) => void;
  reason: string;
  setReason: (value: string) => void;
  issue: string;
  setIssue: (value: string) => void;
}

const controlClass = 'w-full max-w-full sm:w-auto px-4 py-3 text-[14px] bg-transparent text-foreground focus:outline-none focus:bg-muted transition-all appearance-none cursor-pointer hover:bg-muted/50';

export default function ReviewQueue({
  mode, onSelect, selectedId, search, setSearch, filterDept, setFilterDept,
  filterLocation, setFilterLocation, priority, setPriority, status, setStatus,
  confidence, setConfidence, reason, setReason, issue, setIssue,
}: Props) {
  const {
    data: savedValidations,
    isPending: isValidationsLoading,
    isError: isValidationsError,
    refetch: refetchValidations,
  } = useListWorkforceValidations();
  const resolvedValidations = savedValidations ?? [];

  const validationByEmployeeId = useMemo(
    () => new Map(resolvedValidations.map((validation) => [validation.employeeId, validation])),
    [resolvedValidations],
  );

  const rawCases = useMemo(() => messyDataset.filter(isSourceIssueRecord), []);
  const rawDepartments = useMemo(() => uniqueSorted(rawCases.map((employee) => employee.department)), [rawCases]);
  const rawLocations = useMemo(() => uniqueSorted(rawCases.map((employee) => employee.location)), [rawCases]);
  const rawIssues = useMemo(() => uniqueSorted(rawCases.flatMap((employee) => employee.data_issues)), [rawCases]);

  const rawFiltered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return rawCases.filter((employee) => {
      if (query && ![employee.name_hris, employee.job_title, employee.hris_id, employee.email ?? '']
        .some((value) => value.toLowerCase().includes(query))) return false;
      if (filterDept && employee.department !== filterDept) return false;
      if (filterLocation && employee.location !== filterLocation) return false;
      if (issue && !employee.data_issues.includes(issue)) return false;
      return true;
    });
  }, [rawCases, search, filterDept, filterLocation, issue]);

  const validationCases = useMemo(
    () => cleanDataset.filter(isValidationCase),
    [],
  );
  const departments = useMemo(() => uniqueSorted(validationCases.map((employee) => employee.department)), [validationCases]);
  const locations = useMemo(() => uniqueSorted(validationCases.map((employee) => employee.location)), [validationCases]);
  const reasons = useMemo(
    () => uniqueSorted(validationCases.flatMap((employee) => employee.review_reasons)),
    [validationCases],
  );

  const commonFiltered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return validationCases.filter((employee) => {
      if (query && ![
        employee.name,
        employee.job_title_normalized,
        employee.employee_id,
        employee.email,
      ].some((value) => value.toLowerCase().includes(query))) return false;
      if (filterDept && employee.department !== filterDept) return false;
      if (filterLocation && employee.location !== filterLocation) return false;
      if (confidence && identityConfidenceBucket(employee.identity_confidence) !== confidence) return false;
      if (reason && !employee.review_reasons.includes(reason)) return false;
      if (status !== 'all' && getValidationDecisionStatus(employee.employee_id, validationByEmployeeId) !== status) return false;
      return true;
    });
  }, [validationCases, validationByEmployeeId, search, filterDept, filterLocation, confidence, reason, status]);

  const filtered = useMemo(
    () => commonFiltered
      .filter((employee) => priority === 'all' || employee.review_priority === priority)
      .sort(sortCases),
    [commonFiltered, priority],
  );
  const urgentCount = commonFiltered.filter((employee) => employee.review_priority === 'urgent').length;
  const normalCount = commonFiltered.filter((employee) => employee.review_priority === 'normal').length;

  const activeFilters = mode === 'messy'
    ? [search, filterDept, filterLocation, issue].filter(Boolean).length
    : [
        search,
        filterDept,
        filterLocation,
        priority === 'all' ? '' : priority,
        status === 'all' ? '' : status,
        confidence,
        reason,
      ].filter(Boolean).length;

  function clearFilters() {
    setSearch('');
    setFilterDept('');
    setFilterLocation('');
    setPriority('all');
    setStatus('all');
    setConfidence('');
    setReason('');
    setIssue('');
  }

  if (mode === 'messy') {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_250px] gap-6 pb-7 mb-6 border-b border-border">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary mb-3">Source evidence casebook</div>
            <h1 className="text-[34px] font-display font-semibold text-foreground tracking-tight">Data Validation Queue</h1>
            <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed">
              Inspect source issues before a resolved identity is available. Raw records are read-only here; local Confirm and Hold decisions appear only in Resolved mode.
            </p>
          </div>
          <CaseLoad count={rawFiltered.length} label="source records" detail={`${rawCases.length} source records with one or more observed issues`} />
        </div>

        <FilterToolbar ariaLabel="Filter source evidence">
          <SearchInput ariaLabel="Search source records" value={search} onChange={setSearch} placeholder="Find a source record" />
          <FilterSelect label="Department" value={filterDept} onChange={setFilterDept} options={rawDepartments} />
          <FilterSelect label="Location" value={filterLocation} onChange={setFilterLocation} options={rawLocations} />
          <FilterSelect
            label="Source issue"
            ariaLabel="Filter source issue"
            value={issue}
            onChange={setIssue}
            options={rawIssues}
            formatOption={(value) => `${formatReason(value)} (${rawCases.filter((employee) => employee.data_issues.includes(value)).length})`}
          />
          {activeFilters > 0 && <ClearButton count={activeFilters} onClick={clearFilters} />}
        </FilterToolbar>

        <div className="border-t border-border mb-12">
          {rawFiltered.length === 0 ? (
            <EmptyState title="No source records match these filters." detail="Try another source issue or clear the casebook filters." onClear={clearFilters} />
          ) : (
            rawFiltered.map((employee) => <RawCase key={employee.hris_id} employee={employee} selectedId={selectedId} onSelect={onSelect} />)
          )}
        </div>
      </div>
    );
  }

  if (isValidationsLoading) return <ValidationDataStatus state="loading" />;
  if (isValidationsError) return <ValidationDataStatus state="error" onRetry={() => void refetchValidations()} />;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_250px] gap-6 pb-7 mb-6 border-b border-border">
        <div className="max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary mb-3">Investigation casebook</div>
          <h1 className="text-[34px] font-display font-semibold text-foreground tracking-tight">Data Validation Queue</h1>
          <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed">
            Find resolved records by the evidence that needs attention. Every resolution is a local analytical decision with its source and reason retained.
          </p>
        </div>
        <CaseLoad
          count={filtered.length}
          label="cases shown"
          detail={`${urgentCount} need immediate attention · ${normalCount} can be reviewed in sequence`}
        />
      </div>

      <FilterToolbar ariaLabel="Filter validation cases">
        <SearchInput ariaLabel="Search validation cases" value={search} onChange={setSearch} placeholder="Find a person, role, or case" />
        <FilterSelect label="Department" value={filterDept} onChange={setFilterDept} options={departments} />
        <FilterSelect label="Location" value={filterLocation} onChange={setFilterLocation} options={locations} />
        <FilterSelect
          label="Identity confidence"
          ariaLabel="Filter identity confidence"
          value={confidence}
          onChange={setConfidence}
          options={['high', 'medium', 'low']}
          formatOption={(value) => value === 'high' ? 'High (85%+)' : value === 'medium' ? 'Medium (70–84%)' : 'Low (under 70%)'}
        />
        <FilterSelect
          label="Validation reason"
          ariaLabel="Filter validation reason"
          value={reason}
          onChange={setReason}
          options={reasons}
          formatOption={formatReason}
        />
        <FilterSelect
          label="Local decision"
          ariaLabel="Filter local decision status"
          value={status}
          onChange={(value) => setStatus(value as ValidationStatus)}
          allLabel="All decisions"
          allValue="all"
          options={['unresolved', 'confirmed', 'held']}
          formatOption={(value) => value === 'unresolved' ? 'Needs decision' : value === 'confirmed' ? 'Confirmed' : 'Held'}
        />
        {activeFilters > 0 && <ClearButton count={activeFilters} onClick={clearFilters} />}
      </FilterToolbar>

      <div className="flex flex-wrap gap-x-5 mb-0 border-b border-border w-full" aria-label="Filter validation priority">
        {([
          ['all', `All cases (${commonFiltered.length})`],
          ['urgent', `Immediate (${urgentCount})`],
          ['normal', `In sequence (${normalCount})`],
        ] as const).map(([item, label]) => (
          <button
            key={item}
            type="button"
            onClick={() => setPriority(item)}
            aria-pressed={priority === item}
            className={`relative py-3 text-[13px] font-medium transition-colors duration-200 ${
              priority === item ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {label}
            {priority === item && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary" />}
          </button>
        ))}
      </div>

      <div className="border-b border-border pb-0 mb-12">
        {filtered.length === 0 ? (
          <EmptyState title="No cases match these filters." detail="Try another decision status, priority, or validation reason." onClear={clearFilters} />
        ) : (
          filtered.map((employee) => (
            <ValidationCase
              key={employee.employee_id}
              employee={employee}
               savedStatus={getValidationDecisionStatus(employee.employee_id, validationByEmployeeId)}
              selectedId={selectedId}
              onSelect={onSelect}
            />
          ))
        )}
      </div>
    </div>
  );
}

function FilterToolbar({ ariaLabel, children }: { ariaLabel: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-2 flex-wrap border-y border-border py-1 mb-0" aria-label={ariaLabel}>
      {children}
    </div>
  );
}

function SearchInput({
  ariaLabel, value, onChange, placeholder,
}: {
  ariaLabel: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div className="relative flex-1 min-w-[240px]">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="search"
        aria-label={ariaLabel}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 text-[14px] bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/50 focus-visible:bg-primary/[0.03] transition-all"
      />
    </div>
  );
}

function FilterSelect({
  label, ariaLabel, value, onChange, options, allLabel, allValue = '', formatOption = (option) => option,
}: {
  label: string;
  ariaLabel?: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  allLabel?: string;
  allValue?: string;
  formatOption?: (option: string) => string;
}) {
  return (
    <select
      aria-label={ariaLabel ?? `Filter ${label.toLowerCase()}`}
      title={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={controlClass}
      style={{ backgroundImage: 'none' }}
    >
      <option value={allValue}>{allLabel ?? `All ${label}s`}</option>
      {options.map((option) => <option key={option} value={option}>{formatOption(option)}</option>)}
    </select>
  );
}

function ClearButton({ count, onClick }: { count: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-3 py-2 text-[13px] font-semibold text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
    >
      Clear filters ({count})
    </button>
  );
}

function CaseLoad({ count, label, detail }: { count: number; label: string; detail: string }) {
  return (
    <div className="lg:border-l lg:border-border lg:pl-6 self-end">
      <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.14em]">Case load</div>
      <div className="mt-2 font-display text-3xl text-foreground">{count}</div>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{label}<br />{detail}</p>
    </div>
  );
}

function RawCase({ employee, selectedId, onSelect }: { employee: MessyEmployee; selectedId: string | null; onSelect: (id: string) => void }) {
  const isSelected = selectedId === employee.hris_id;
  return (
    <div className={`group relative border-b border-border transition-colors duration-200 ${isSelected ? 'bg-primary/[0.05]' : 'hover:bg-muted/40'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-[56px_minmax(0,1fr)_190px] lg:items-center gap-4 lg:gap-6 px-4 sm:px-5 py-5">
        <div className="font-mono text-[12px] text-primary">SOURCE</div>
        <div className="min-w-0">
          <button
            type="button"
            onClick={() => onSelect(employee.hris_id)}
            className="text-[17px] font-display font-semibold text-foreground hover:text-primary transition-colors text-left truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {employee.name_hris}
          </button>
          <div className="mt-1 text-[14px] font-medium text-muted-foreground">{employee.job_title} <span className="opacity-50 mx-1">•</span> {employee.location}</div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {employee.data_issues.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 text-[12px] font-medium text-foreground">
                <AlertCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                {formatReason(item)}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-border">
          <div className="text-left lg:text-right">
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.12em]">Source systems</div>
            <span className="text-[12px] font-medium text-foreground">{employee.source_systems.length} observed</span>
          </div>
          <button
            type="button"
            onClick={() => onSelect(employee.hris_id)}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary hover:text-primary/75 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Inspect source <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ValidationCase({
  employee, savedStatus, selectedId, onSelect,
}: {
  employee: CleanEmployee;
  savedStatus: 'unresolved' | 'confirmed' | 'held';
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const isSelected = selectedId === employee.employee_id;
  const isUrgent = employee.review_priority === 'urgent';
  const statusLabel = savedStatus === 'confirmed' ? 'CONFIRMED' : savedStatus === 'held' ? 'HELD' : isUrgent ? 'NOW' : 'NEXT';
  return (
    <div className={`group relative border-b last:border-b-0 transition-colors duration-200 ${isSelected ? 'bg-primary/[0.05]' : 'hover:bg-muted/40'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-[56px_minmax(0,1fr)_190px] lg:items-center gap-4 lg:gap-6 px-4 sm:px-5 py-5">
        <div className={`font-mono text-[12px] ${savedStatus === 'confirmed' ? 'text-primary' : savedStatus === 'held' ? 'text-muted-foreground' : isUrgent ? 'text-primary' : 'text-muted-foreground'}`}>{statusLabel}</div>
        <div className="min-w-0">
          <button
            type="button"
            onClick={() => onSelect(employee.employee_id)}
            className="text-[17px] font-display font-semibold text-foreground hover:text-primary transition-colors text-left truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {employee.name}
          </button>
          <div className="mt-1 text-[14px] font-medium text-muted-foreground">{employee.job_title_normalized} <span className="opacity-50 mx-1">•</span> {employee.location}</div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {employee.review_reasons.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 text-[12px] font-medium text-foreground">
                <AlertCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                {formatReason(item)}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-border">
          <div className="text-left lg:text-right">
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.12em]">Identity evidence</div>
            <span className="text-[12px] font-medium text-foreground">{Math.round(employee.identity_confidence * 100)}% match</span>
          </div>
          <button
            type="button"
            onClick={() => onSelect(employee.employee_id)}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary hover:text-primary/75 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {savedStatus === 'held' ? 'Reopen case' : 'Review evidence'} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ title, detail, onClear }: { title: string; detail: string; onClear: () => void }) {
  return (
    <div className="text-center py-20 text-muted-foreground">
      <CheckCircle2 className="w-7 h-7 text-primary mx-auto mb-4" />
      <p className="text-lg text-foreground font-display font-semibold">{title}</p>
      <p className="mt-1">{detail}</p>
      <button type="button" onClick={onClear} className="text-primary font-bold hover:underline mt-3">Clear filters</button>
    </div>
  );
}

function uniqueSorted(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

function identityConfidenceBucket(value: number) {
  if (value >= 0.85) return 'high';
  if (value >= 0.7) return 'medium';
  return 'low';
}

function sortCases(a: CleanEmployee, b: CleanEmployee) {
  if (a.review_priority === 'urgent' && b.review_priority !== 'urgent') return -1;
  if (b.review_priority === 'urgent' && a.review_priority !== 'urgent') return 1;
  return (b.avg_performance_score ?? 0) - (a.avg_performance_score ?? 0);
}

function formatReason(reason: string): string {
  return reason.replace(/_/g, ' ').replace(/\b\w/g, (character) => character.toUpperCase());
}