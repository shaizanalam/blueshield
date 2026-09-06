'use client';

import { X, ArrowRight, Layers } from 'lucide-react';
import type { Product } from '@/types';

interface ComparisonBarProps {
  comparedProducts: Product[];
  onRemove: (productId: string) => void;
  onClear: () => void;
  onOpenCompareModal: () => void;
}

export function ComparisonBar({
  comparedProducts,
  onRemove,
  onClear,
  onOpenCompareModal,
}: ComparisonBarProps) {
  if (comparedProducts.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-navy text-white px-5 py-4 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-6 max-w-2xl w-[90%] sm:w-auto animate-[fadeInUp_0.3s_ease-out]">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-eng-blue flex items-center justify-center">
          <Layers className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-xs font-bold leading-tight">Compare Systems</p>
          <p className="text-[11px] text-white/60">{comparedProducts.length} of 4 selected</p>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-2">
        {comparedProducts.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-1.5 bg-surface/10 px-2.5 py-1.5 rounded-lg border border-white/10 text-xs"
          >
            <span className="max-w-[120px] truncate font-medium">{p.name}</span>
            <button
              onClick={() => onRemove(p.id)}
              className="p-0.5 hover:bg-surface/20 rounded transition-colors text-white/70 hover:text-white"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <button
          onClick={onClear}
          className="text-xs text-white/60 hover:text-white underline transition-colors px-1"
        >
          Clear
        </button>
        <button
          onClick={onOpenCompareModal}
          disabled={comparedProducts.length < 2}
          className="btn btn-primary btn-sm text-xs px-3.5 py-2 disabled:opacity-50 disabled:pointer-events-none"
        >
          Compare Now
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

