'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/types';

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FAQ({ items, title, subtitle, className = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items || items.length === 0) return null;

  return (
    <div className={className}>
      {(title || subtitle) && (
        <div className="mb-8 text-center max-w-2xl mx-auto">
          {subtitle && <span className="eyebrow mb-2 block">{subtitle}</span>}
          {title && <h3 className="text-2xl sm:text-3xl font-bold text-text">{title}</h3>}
        </div>
      )}

      <div className="max-w-3xl mx-auto divide-y divide-border border-y border-border">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-4">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between gap-4 text-left font-semibold text-text hover:text-eng-blue transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-base leading-snug">{item.question}</span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center bg-surface shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-ice-blue text-eng-blue' : 'text-text-muted'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              {isOpen && (
                <div className="mt-3 text-sm text-text-muted leading-relaxed pr-8 animate-[fadeIn_0.2s_ease-out]">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

