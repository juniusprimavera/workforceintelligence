import type { DatasetMode } from '../data';

export default function DatasetContextBar({ mode }: { mode: DatasetMode }) {
  return (
    <div className="border-b border-border bg-card">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[13px]">
        {mode === 'messy' ? (
          <>
            <div className="flex flex-col gap-1">
              <span className="text-foreground font-semibold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Dataset A: Source Evidence
              </span>
              <span className="text-muted-foreground">Raw extracts from HRIS and ATS systems.</span>
            </div>
            <div className="flex flex-col sm:text-right gap-1">
              <span className="text-accent font-semibold uppercase tracking-widest">Action Required</span>
              <span className="text-muted-foreground">
                Review source-issue coverage on the Decision Desk
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-1">
              <span className="text-foreground font-semibold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                 Dataset B: Contextualized profiles
              </span>
               <span className="text-muted-foreground">Normalized for local analysis; some profiles still require a source decision.</span>
            </div>
            <div className="flex flex-col sm:text-right gap-1">
               <span className="text-primary font-semibold uppercase tracking-widest">Local analysis view</span>
              <span className="text-muted-foreground">
                 Confidence is evidence quality, not a validation decision
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}