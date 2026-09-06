import { lazy, Suspense, useState, useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import type { DatasetMode } from './data';
import type { MessyEmployee, CleanEmployee } from './data/types';
import TopBar from './components/TopBar';

const Dashboard = lazy(() => import('./components/Dashboard'));
const EmployeeList = lazy(() => import('./components/EmployeeList'));
const EmployeeDetail = lazy(() => import('./components/EmployeeDetail'));
const ReviewQueue = lazy(() => import('./components/ReviewQueue'));
const Comparison = lazy(() => import('./components/Comparison'));
const DatasetContextBar = lazy(() => import('./components/DatasetContextBar'));

export type ViewTab = 'dashboard' | 'employees' | 'review' | 'skills' | 'comparison';

export default function App() {
  const [mode, setMode] = useState<DatasetMode>('clean'); // Defaulting to clean for better first impression
  const [view, setView] = useState<ViewTab>('dashboard');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [employeeSearch, setEmployeeSearch] = useState('');
  const [employeeDept, setEmployeeDept] = useState('');
  const [employeeLocation, setEmployeeLocation] = useState('');
  const [skillSearch, setSkillSearch] = useState('');
  const [skillDept, setSkillDept] = useState('');
  const [skillLocation, setSkillLocation] = useState('');
  const [skillFocus, setSkillFocus] = useState('');
  const [validationSearch, setValidationSearch] = useState('');
  const [validationDept, setValidationDept] = useState('');
  const [validationLocation, setValidationLocation] = useState('');
  const [validationPriority, setValidationPriority] = useState<'all' | 'urgent' | 'normal'>('all');
  const [validationStatus, setValidationStatus] = useState<'all' | 'unresolved' | 'confirmed' | 'held'>('all');
  const [validationConfidence, setValidationConfidence] = useState('');
  const [validationReason, setValidationReason] = useState('');
  const [validationIssue, setValidationIssue] = useState('');
  const [selectedData, setSelectedData] = useState<{
    messy: MessyEmployee[];
    clean: CleanEmployee[];
  } | null>(null);
  const detailPanelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!selectedId) {
      setSelectedData(null);
      return;
    }

    let isCurrent = true;
    import('./data').then(({ messyDataset, cleanDataset }) => {
      if (isCurrent) {
        setSelectedData({ messy: messyDataset, clean: cleanDataset });
      }
    });

    return () => {
      isCurrent = false;
    };
  }, [selectedId]);

  const selectedMessy = selectedId && selectedData
    ? selectedData.messy.find((employee) => employee.hris_id === selectedId) ?? null
    : null;
  const selectedClean = selectedId && selectedData
    ? selectedData.clean.find((employee) => employee.employee_id === selectedId) ?? null
    : null;

  function handleSelectEmployee(id: string) {
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSelectedId(id);
  }
  function handleCloseDetail() {
    setSelectedId(null);
  }

  useEffect(() => {
    if (!selectedId) return;

    const focusPanel = window.requestAnimationFrame(() => detailPanelRef.current?.focus());
    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        handleCloseDetail();
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.cancelAnimationFrame(focusPanel);
      window.removeEventListener('keydown', handleEscape);
      previousFocusRef.current?.focus();
    };
  }, [selectedId]);

  function trapDetailFocus(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'Tab') return;

    const panel = detailPanelRef.current;
    const focusable = Array.from(
      panel?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ) ?? []
    ).filter((element) => !element.hasAttribute('aria-hidden'));

    if (focusable.length === 0) {
      event.preventDefault();
      detailPanelRef.current?.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (document.activeElement === panel) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div id="workforce-root" className="min-h-[100dvh] bg-background flex flex-col font-sans">
      <TopBar
        mode={mode}
        setMode={(m) => {
          setMode(m);
          setSelectedId(null);
          setEmployeeSearch('');
          setEmployeeDept('');
          setEmployeeLocation('');
          setSkillSearch('');
          setSkillDept('');
          setSkillLocation('');
          setSkillFocus('');
          setValidationSearch('');
          setValidationDept('');
          setValidationLocation('');
          setValidationPriority('all');
          setValidationStatus('all');
          setValidationConfidence('');
          setValidationReason('');
          setValidationIssue('');
        }}
        view={view}
        setView={(v) => { setView(v); setSelectedId(null); }}
      />

      <Suspense fallback={<DatasetContextFallback />}>
        <DatasetContextBar mode={mode} />
      </Suspense>

      {/* Main content */}
      <main className="flex-1 relative pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8 sm:py-10">
          <Suspense fallback={<WorkspaceFallback />}>
            {view === 'dashboard' && (
              <Dashboard
                mode={mode}
                onNavigate={(v, options) => {
                  if (options?.mode) setMode(options.mode);
                  setView(v);
                  setSelectedId(null);
                  if (v === 'review') {
                    setValidationSearch('');
                    setValidationDept(options?.department ?? '');
                    setValidationLocation(options?.location ?? '');
                    setValidationPriority(options?.priority ?? 'all');
                    setValidationStatus(options?.status ?? 'all');
                    setValidationConfidence(options?.confidence ?? '');
                    setValidationReason(options?.reason ?? '');
                    setValidationIssue(options?.issue ?? '');
                  } else if (v === 'skills') {
                    setSkillSearch('');
                    setSkillDept('');
                    setSkillLocation('');
                    setSkillFocus(options?.focus ?? '');
                  }
                }}
              />
            )}
            {view === 'employees' && (
              <EmployeeList
                mode={mode}
                workspace="employees"
                search={employeeSearch}
                setSearch={setEmployeeSearch}
                filterDept={employeeDept}
                setFilterDept={setEmployeeDept}
                filterLocation={employeeLocation}
                setFilterLocation={setEmployeeLocation}
                onSelect={handleSelectEmployee}
                selectedId={selectedId}
              />
            )}
            {view === 'review' && (
              <ReviewQueue
                mode={mode}
                onSelect={handleSelectEmployee}
                selectedId={selectedId}
                search={validationSearch}
                setSearch={setValidationSearch}
                filterDept={validationDept}
                setFilterDept={setValidationDept}
                filterLocation={validationLocation}
                setFilterLocation={setValidationLocation}
                priority={validationPriority}
                setPriority={setValidationPriority}
                status={validationStatus}
                setStatus={setValidationStatus}
                confidence={validationConfidence}
                setConfidence={setValidationConfidence}
                reason={validationReason}
                setReason={setValidationReason}
                issue={validationIssue}
                setIssue={setValidationIssue}
              />
            )}
            {view === 'skills' && (
              <EmployeeList
                mode={mode}
                workspace="skills"
                search={skillSearch}
                setSearch={setSkillSearch}
                filterDept={skillDept}
                setFilterDept={setSkillDept}
                filterLocation={skillLocation}
                setFilterLocation={setSkillLocation}
                filterFocus={skillFocus}
                setFilterFocus={setSkillFocus}
                onSelect={handleSelectEmployee}
                selectedId={selectedId}
              />
            )}
            {view === 'comparison' && (
              <Comparison
                onNavigate={(v, options) => {
                  if (options?.mode) setMode(options.mode);
                  setView(v);
                  setSelectedId(null);
                  if (v === 'review') {
                    setValidationSearch('');
                    setValidationDept('');
                    setValidationLocation('');
                    setValidationPriority('all');
                    setValidationStatus('all');
                    setValidationConfidence('');
                    setValidationReason('');
                    setValidationIssue(options?.issue ?? '');
                  }
                }}
              />
            )}
          </Suspense>
        </div>

        {/* Employee detail slide-over */}
        {selectedId && (
          <>
            <div
              aria-hidden="true"
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 transition-all duration-500 ease-out"
              onClick={handleCloseDetail}
            />
            <div
              ref={detailPanelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Employee detail"
              data-testid="employee-detail-panel"
              tabIndex={-1}
              onKeyDown={trapDetailFocus}
              className="fixed top-0 bottom-0 right-0 z-[70] w-full max-w-[640px] bg-card border-l border-border shadow-[0_0_40px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-500 ease-out flex flex-col translate-x-0 focus:outline-none"
            >
              {selectedData ? (
                <Suspense fallback={<DetailLoading />}>
                  <EmployeeDetail
                    mode={mode}
                    messy={selectedMessy}
                    clean={selectedClean}
                    workspace={view === 'review' ? 'validation' : view === 'employees' ? 'employees' : 'skills'}
                    onClose={handleCloseDetail}
                  />
                </Suspense>
              ) : (
                <DetailLoading />
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function WorkspaceFallback() {
  return (
    <div
      className="min-h-[420px] animate-pulse space-y-6"
      data-testid="workspace-loading"
      role="status"
      aria-label="Loading workspace"
    >
      <div className="h-8 w-72 rounded bg-muted" />
      <div className="h-24 rounded-xl border border-border bg-card" />
      <div className="h-56 rounded-xl border border-border bg-card" />
    </div>
  );
}

function DetailLoading() {
  return (
    <div
      className="flex h-full items-center justify-center bg-card text-sm text-muted-foreground"
      data-testid="employee-detail-loading"
      role="status"
      aria-live="polite"
    >
      Loading employee details…
    </div>
  );
}

function DatasetContextFallback() {
  return (
    <div className="border-b border-border bg-card" role="status" aria-label="Loading dataset context">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-4">
        <div className="h-10 rounded bg-muted animate-pulse" />
      </div>
    </div>
  );
}
