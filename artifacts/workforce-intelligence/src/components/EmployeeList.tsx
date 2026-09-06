import { useMemo } from 'react';
import { useListWorkforceValidations } from '@workspace/api-client-react';
import {
  CAPABILITY_FOCUS_DEFINITIONS,
  messyDataset,
  cleanDataset,
  getIntelligenceEligibleEmployees,
  getCapabilityMetrics,
  matchesCapabilityFocus,
} from '../data';
import type { DatasetMode } from '../data';
import { Search } from 'lucide-react';
import { ValidationDataStatus } from './ValidationDataStatus';

interface Props {
  mode: DatasetMode;
  workspace: 'employees' | 'skills';
  search: string;
  setSearch: (s: string) => void;
  filterDept: string;
  setFilterDept: (d: string) => void;
  filterLocation: string;
  setFilterLocation: (l: string) => void;
  filterFocus?: string;
  setFilterFocus?: (focus: string) => void;
  onSelect: (id: string) => void;
  selectedId: string | null;
}

export default function EmployeeList({
  mode, workspace, search, setSearch, filterDept, setFilterDept,
  filterLocation, setFilterLocation, filterFocus = '', setFilterFocus,
  onSelect, selectedId,
}: Props) {
  const {
    data: savedValidations,
    isPending: isValidationsLoading,
    isError: isValidationsError,
    refetch: refetchValidations,
  } = useListWorkforceValidations();
  const eligibleCapabilityEmployees = useMemo(
    () => getIntelligenceEligibleEmployees(cleanDataset, savedValidations ?? []),
    [savedValidations],
  );
  const cleanRegisterEmployees = workspace === 'skills' ? eligibleCapabilityEmployees : cleanDataset;

  const departments = useMemo(() => {
    const depts = new Set(cleanRegisterEmployees.map(e => e.department));
    return Array.from(depts).sort();
  }, [cleanRegisterEmployees]);

  const locations = useMemo(() => {
    const locs = new Set(cleanRegisterEmployees.map(e => e.location));
    return Array.from(locs).sort();
  }, [cleanRegisterEmployees]);

  const filteredEmployees = useMemo(() => {
    const q = search.toLowerCase().trim();

    if (mode === 'messy') {
      return messyDataset.filter(e => {
        if (q && ![e.name_hris, e.job_title, e.hris_id, e.email ?? '']
          .some((value) => value.toLowerCase().includes(q))) return false;
        if (filterDept && e.department !== filterDept) return false;
        if (filterLocation && e.location !== filterLocation) return false;
        if (filterFocus && !e.data_issues.includes(filterFocus)) return false;
        return true;
      });
    } else {
      return cleanRegisterEmployees.filter(e => {
        if (q && ![e.name, e.job_title_normalized, e.employee_id, e.email]
          .some((value) => value.toLowerCase().includes(q))) return false;
        if (filterDept && e.department !== filterDept) return false;
        if (filterLocation && e.location !== filterLocation) return false;
        if (workspace === 'skills' && !matchesCapabilityFocus(e, filterFocus)) return false;
        return true;
      });
    }
  }, [mode, workspace, search, filterDept, filterLocation, filterFocus, cleanRegisterEmployees]);

  const activeFocusFilter = workspace === 'skills' ? filterFocus : '';
  const activeFilters = [filterDept, filterLocation, activeFocusFilter].filter(Boolean).length;

  function clearFilters() {
    setFilterDept('');
    setFilterLocation('');
    setFilterFocus?.('');
    setSearch('');
  }

  if (mode === 'clean' && workspace === 'skills' && isValidationsLoading) {
    return <ValidationDataStatus state="loading" />;
  }
  if (mode === 'clean' && workspace === 'skills' && isValidationsError) {
    return <ValidationDataStatus state="error" onRetry={() => void refetchValidations()} />;
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="flex flex-col gap-5 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-6 pb-7 border-b border-border">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary mb-3">
              {workspace === 'skills' ? 'Capability register' : 'Workforce register'}
            </div>
            <h1 className="text-[34px] font-display font-semibold text-foreground tracking-tight">
              {workspace === 'skills' ? 'Skill Intelligence' : 'Employees'}
            </h1>
            <p className="text-[15px] text-muted-foreground mt-3 max-w-2xl leading-relaxed">
              {mode === 'messy'
                ? 'A source-by-source index. These records are shown as received and do not yet support capability decisions.'
                : workspace === 'skills'
                  ? 'Review the evidence people bring to their role before deciding on capability intervention.'
                  : 'A factual index of resolved people, roles, locations, and evidence status.'}
            </p>
          </div>
          <div className="lg:border-l lg:border-border lg:pl-6 self-end">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">In this register</div>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              <span className="font-display text-3xl mr-2">{filteredEmployees.length}</span>
              records shown
            </p>
          </div>
          {activeFilters > 0 && (
            <button 
              onClick={clearFilters} 
              className="lg:col-start-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors underline underline-offset-4 self-start"
            >
              Clear filters ({activeFilters})
            </button>
          )}
        </div>

        <div className="flex gap-2 flex-wrap border-y border-border py-1" aria-label="Filter workforce register">
          <div className="relative flex-1 min-w-[280px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Find by name, role, ID, or email"
              className="w-full pl-12 pr-4 py-3 text-[14px] bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/50 focus-visible:bg-primary/[0.03] transition-all"
            />
          </div>
          <div className="w-px bg-border my-2 hidden md:block" />
          <select
            value={filterDept}
            onChange={e => setFilterDept(e.target.value)}
            className="px-4 py-3 text-[14px] bg-transparent text-foreground focus:outline-none focus:bg-muted transition-all appearance-none cursor-pointer hover:bg-muted/50"
            style={{ backgroundImage: 'none' }}
          >
            <option value="">All Departments</option>
            {departments.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          <div className="w-px bg-border my-2 hidden md:block" />
          <select
            value={filterLocation}
            onChange={e => setFilterLocation(e.target.value)}
            className="px-4 py-3 text-[14px] bg-transparent text-foreground focus:outline-none focus:bg-muted transition-all appearance-none cursor-pointer hover:bg-muted/50"
            style={{ backgroundImage: 'none' }}
          >
            <option value="">All Locations</option>
            {locations.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
          
          {workspace === 'skills' && (
                <>
                  <div className="w-px bg-border my-2 hidden md:block" />
                  <select
                    value={filterFocus}
                    onChange={e => setFilterFocus?.(e.target.value)}
                    className="px-4 py-3 text-[14px] bg-transparent text-foreground focus:outline-none focus:bg-muted transition-all appearance-none cursor-pointer hover:bg-muted/50"
                    aria-label="Filter capability focus"
                    style={{ backgroundImage: 'none' }}
                  >
                    <option value="">All capability signals</option>
                    {CAPABILITY_FOCUS_DEFINITIONS.map((definition) => (
                      <option key={definition.value} value={definition.value}>
                        {definition.label} ({cleanRegisterEmployees.filter(definition.matches).length})
                      </option>
                    ))}
                  </select>
                </>
          )}
        </div>
      </div>

      <div className={`grid text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.14em] mb-0 px-4 sm:px-5 ${
        mode === 'messy'
          ? 'grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[56px_2fr_2fr_1.5fr_1fr]'
          : 'grid-cols-[minmax(0,1fr)_88px_auto] sm:grid-cols-[56px_2.25fr_2fr_1.35fr_1fr_1fr]'
      }`}>
        <span className="hidden sm:block">No.</span>
        <span>Employee</span>
        <span className="hidden sm:block">Role</span>
        <span className="hidden sm:block">
          {mode === 'clean' && workspace === 'skills' ? 'Role standard' : 'Location / grade'}
        </span>
        {mode === 'messy' ? (
          <>
            <span>Record condition</span>
          </>
        ) : (
          <>
            <span className="hidden sm:block">{workspace === 'skills' ? 'Skill evidence' : 'Record coverage'}</span>
            <span>{workspace === 'skills' ? 'Capability' : 'Profile state'}</span>
          </>
        )}
      </div>

      {/* Rows */}
      <div className="overflow-hidden border-t border-border pb-0 mb-12">
        {filteredEmployees.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground border-b border-dashed border-border bg-muted/20">
              <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground/50" />
            </div>
            <p className="text-lg">No employees match your filters.</p>
            <button onClick={clearFilters} className="text-primary font-bold hover:underline mt-2">Clear filters</button>
          </div>
        ) : mode === 'messy' ? (
          filteredEmployees.map((emp: any) => {
            const isSelected = selectedId === emp.hris_id;
            const hasIssues = emp.data_issues.length > 0;
            return (
              <button
                key={emp.hris_id}
                onClick={() => onSelect(emp.hris_id)}
                className={`w-full grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[56px_2fr_2fr_1.5fr_1fr] items-center px-4 sm:px-5 py-5 border-b last:border-b-0 text-left transition-colors duration-200 group ${
                  isSelected 
                    ? 'border-primary/30 bg-primary/[0.035]'
                    : 'border-border hover:bg-muted/50'
                }`}
              >
                <span className="hidden sm:block text-[12px] font-mono text-muted-foreground/70">{String(emp.hris_id).replace('HRIS-', '')}</span>
                <div className="flex items-center gap-3 min-w-0">
                  <div className="min-w-0 pr-4">
                    <div className="font-semibold text-[15px] text-foreground truncate">{emp.name_hris}</div>
                    <div className="text-[11px] font-mono text-muted-foreground mt-1">{emp.hris_id}</div>
                  </div>
                </div>
                <div className="hidden sm:block truncate text-muted-foreground pr-4 font-semibold text-[15px]">{emp.job_title}</div>
                <div className="hidden sm:flex flex-col gap-1 min-w-0">
                  <span className="text-muted-foreground truncate font-medium text-[14px]">{emp.location}</span>
                  <span className="text-[11px] text-muted-foreground">{emp.source_systems.length} source systems</span>
                </div>
                <div>
                  {hasIssues ? (
                    <span className="text-primary text-xs font-semibold">{emp.data_issues.length} source issue{emp.data_issues.length === 1 ? '' : 's'}</span>
                  ) : (
                    <span className="text-sm font-medium text-muted-foreground opacity-50">—</span>
                  )}
                </div>
              </button>
            );
          })
        ) : (
          filteredEmployees.map((emp: any) => {
            const isSelected = selectedId === emp.employee_id;
            const capabilityMetrics = getCapabilityMetrics(emp);
            return (
              <button
                key={emp.employee_id}
                onClick={() => onSelect(emp.employee_id)}
                className={`w-full grid grid-cols-[minmax(0,1fr)_88px_auto] sm:grid-cols-[56px_2.25fr_2fr_1.35fr_1fr_1fr] items-center px-4 sm:px-5 py-5 border-b last:border-b-0 text-left transition-colors duration-200 group ${
                  isSelected 
                    ? 'border-primary/30 bg-primary/[0.035]'
                    : 'border-border hover:bg-muted/50'
                }`}
              >
                <span className="hidden sm:block text-[12px] font-mono text-muted-foreground/70">{String(emp.employee_id).replace('EMP-', '')}</span>
                <div className="flex items-center gap-3 min-w-0">
                  <div className="min-w-0 pr-4">
                    <div className="font-semibold text-[15px] text-foreground truncate">{emp.name}</div>
                    <div className="text-[11px] font-medium text-muted-foreground mt-1 uppercase tracking-[0.1em]">{emp.job_family}</div>
                  </div>
                </div>
                <div className="hidden sm:block truncate text-muted-foreground pr-4 font-semibold text-[15px]">
                  {workspace === 'skills' ? `${emp.job_title_normalized} · ${emp.grade_level}` : emp.job_title_normalized}
                </div>
                <div className="hidden sm:flex flex-col gap-1 min-w-0">
                  {workspace === 'skills' ? (
                    <>
                      <span className="text-foreground font-semibold">{emp.required_skills.length} required skills</span>
                      <span className="text-[11px] text-muted-foreground">{emp.grade_level} baseline · Intermediate level</span>
                    </>
                  ) : (
                    <>
                      <span className="text-muted-foreground truncate font-medium text-[14px]">{emp.location}</span>
                      <span className="text-[11px] text-muted-foreground">{emp.department} · {emp.grade_level} · {emp.tenure_years}y tenure</span>
                    </>
                  )}
                </div>
                <div className="hidden sm:flex flex-col gap-1 min-w-0">
                  {workspace === 'skills' ? (
                    <>
                      <span className="text-foreground font-semibold">
                        {emp.skills_explicit.length + emp.skills_inferred.length} skills recorded
                      </span>
                      <span className="text-[11px] text-muted-foreground">{Math.round(emp.skill_confidence * 100)}% evidence confidence</span>
                    </>
                  ) : (
                    <>
                      <EvidenceLabel level={emp.data_confidence} />
                      <span className="text-[11px] text-muted-foreground">
                        {emp.data_completeness.identity_resolved ? 'Identity resolved' : 'Identity needs review'}
                      </span>
                    </>
                  )}
                </div>
                <div className="justify-self-end">
                  {workspace === 'skills' ? (
                    <div className="text-right">
                      <span className={`block text-xs font-semibold ${
                        emp.skill_gaps.some((gap: any) => gap.gap_severity === 'critical')
                          ? 'text-primary'
                          : emp.skill_gaps.length > 0
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                      }`}>
                        {capabilityMetrics.proficiencyProgress}% proficiency progress
                      </span>
                      <span className="block text-[11px] text-muted-foreground mt-1">
                        {capabilityMetrics.standardCompletion}% standard · {capabilityMetrics.evidenceCoverage}% coverage
                      </span>
                      <span className="block text-[11px] text-muted-foreground mt-1">
                        {emp.skill_gaps.length > 0 ? `${emp.skill_gaps.length} role gap${emp.skill_gaps.length === 1 ? '' : 's'}` : 'No role gaps'}
                      </span>
                    </div>
                  ) : emp.requires_human_review ? (
                    <span className={`text-right text-xs font-semibold ${
                      emp.review_priority === 'urgent' ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {emp.review_priority === 'urgent' ? 'Review needed now' : 'Review needed'}
                    </span>
                  ) : (
                    <span className="text-right text-xs font-semibold text-foreground">Profile usable</span>
                  )}
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}

function EvidenceLabel({ level }: { level: string }) {
  const isHigh = level === 'high';
  const isMed = level === 'medium';
  
  return (
    <span className={`text-xs font-medium capitalize ${
      isHigh ? 'text-primary' :
      isMed ? 'text-foreground' :
      'text-muted-foreground'
    }`}>
      {level} confidence
    </span>
  );
}
