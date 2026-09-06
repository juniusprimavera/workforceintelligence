import { ShieldCheck } from 'lucide-react';
import type { DatasetMode } from '../data';
import type { ViewTab } from '../App';

interface TopBarProps {
  mode: DatasetMode;
  setMode: (m: DatasetMode) => void;
  view: ViewTab;
  setView: (v: ViewTab) => void;
}

const NAV_TABS: { id: ViewTab; label: string }[] = [
  { id: 'dashboard', label: 'Decision Desk' },
  { id: 'employees', label: 'Employees' },
  { id: 'review', label: 'Data Validation' },
  { id: 'skills', label: 'Skill Intelligence' },
  { id: 'comparison', label: 'Evidence Report' },
];

export default function TopBar({ mode, setMode, view, setView }: TopBarProps) {
  return (
    <header className="sticky top-0 z-[60] bg-card border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 min-h-[72px] py-4 lg:py-0 flex flex-wrap items-center justify-between gap-y-4">
        
        {/* Logo Area */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-foreground font-display font-semibold text-lg leading-tight tracking-tight">
              Medika Nusantara
            </span>
            <span className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest mt-0.5">
              Workforce Intelligence
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex self-stretch items-stretch gap-8" aria-label="Workspace navigation">
          {NAV_TABS.map(tab => {
            const isActive = view === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setView(tab.id)}
                type="button"
                aria-current={isActive ? 'page' : undefined}
                className={`relative flex items-center text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 ${
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
                {isActive && <span className="absolute bottom-0 inset-x-0 h-[3px] bg-primary" />}
              </button>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex items-center border-l-2 border-border pl-4">
            <button
              onClick={() => setMode('messy')}
              type="button"
              className={`px-3 py-2 text-xs font-mono font-medium uppercase tracking-widest transition-colors duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                mode === 'messy'
                  ? 'bg-accent/10 text-accent border border-accent/20'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent'
              }`}
            >
              Raw
            </button>
            <button
              onClick={() => setMode('clean')}
              type="button"
              className={`px-3 py-2 text-xs font-mono font-medium uppercase tracking-widest transition-colors duration-200 ml-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                mode === 'clean'
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent'
              }`}
            >
              Resolved
            </button>
          </div>
        </div>

        <nav className="lg:hidden order-3 w-full" aria-label="Workspace navigation">
          <label className="sr-only" htmlFor="workspace-view">Choose workspace</label>
          <select
            id="workspace-view"
            value={view}
            onChange={(event) => setView(event.target.value as ViewTab)}
            className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            {NAV_TABS.map((tab) => (
               <option key={tab.id} value={tab.id}>{tab.label}</option>
            ))}
          </select>
        </nav>
      </div>
    </header>
  );
}
