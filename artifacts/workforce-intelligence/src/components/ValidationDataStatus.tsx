import { AlertTriangle, LoaderCircle, RotateCcw } from 'lucide-react';

interface ValidationDataStatusProps {
  state: 'loading' | 'error';
  onRetry?: () => void;
}

export function ValidationDataStatus({ state, onRetry }: ValidationDataStatusProps) {
  if (state === 'loading') {
    return (
      <div className="flex flex-1 items-center justify-center p-8" role="status" aria-live="polite">
        <div className="max-w-md text-center">
          <LoaderCircle className="mx-auto mb-4 h-8 w-8 animate-spin text-primary" aria-hidden="true" />
          <h3 className="font-display text-lg font-semibold text-foreground">Checking local decisions</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
            We are checking saved Workforce Intelligence decisions before showing this validation case.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 items-center justify-center p-8">
      <div className="max-w-md rounded-xl border border-primary/20 bg-primary/5 p-8 text-center" role="alert">
        <AlertTriangle className="mx-auto mb-4 h-8 w-8 text-primary" aria-hidden="true" />
        <h3 className="font-display text-lg font-semibold text-foreground">Saved decisions unavailable</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
          We could not check local validation decisions. This view is paused so confirmed and held records are not mistaken for new work.
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Retry
        </button>
      </div>
    </div>
  );
}