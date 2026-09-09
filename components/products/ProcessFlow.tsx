import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProcessFlowProps {
  steps: string[];
  title?: string;
  className?: string;
}

export function ProcessFlow({
  steps,
  title = 'Treatment & Purification Flow',
  className = '',
}: ProcessFlowProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className={`p-6 rounded-2xl bg-surface border border-border ${className}`}>
      <h4 className="text-sm font-bold uppercase tracking-wider text-navy mb-5 flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-eng-blue" />
        {title}
      </h4>

      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface border border-border/80 shadow-sm text-xs font-semibold text-navy">
              <span className="w-5 h-5 rounded-full bg-ice-blue text-eng-blue text-[10px] font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span>{step}</span>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="w-3.5 h-3.5 text-eng-blue shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

