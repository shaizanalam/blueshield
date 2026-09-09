import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { ShieldCheck, Truck, Wrench, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request a System Quote | BlueShield RO Industries',
  description: 'Specify your water treatment requirements, application, and capacity to receive an itemized technical proposal and quotation from BlueShield.',
};

export default function RequestQuotePage() {
  return (
    <div className="bg-surface/30 min-h-screen pt-[72px]">
      {/* Header Banner */}
      <div className="bg-navy text-white py-12 bg-grid-dark border-b border-border/20">
        <div className="container">
          <Breadcrumb items={[{ label: 'Request a Quote' }]} />
          <div className="max-w-2xl mt-2 text-center mx-auto">
            <span className="eyebrow text-water-blue mb-2 block">System Sizing & Estimation</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              Smart Quote Generator
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Complete the 5 quick steps below to configure your system parameters. Our engineering department will calculate equipment sizing and provide an itemized quote.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <Suspense fallback={<div className="text-center py-12">Loading Quote Form...</div>}>
          <QuoteForm />
        </Suspense>

        {/* Value Strip */}
        <div className="grid sm:grid-cols-4 gap-4 max-w-2xl mx-auto mt-12 text-center text-xs text-text-muted">
          <div className="p-4 bg-surface rounded-xl border border-border">
            <ShieldCheck className="w-5 h-5 text-eng-blue mx-auto mb-2" />
            <span className="font-semibold text-text block">Accurate Sizing</span>
            <span>Based on water source</span>
          </div>
          <div className="p-4 bg-surface rounded-xl border border-border">
            <Truck className="w-5 h-5 text-eng-blue mx-auto mb-2" />
            <span className="font-semibold text-text block">PAN India Logistics</span>
            <span>Safe transit across states</span>
          </div>
          <div className="p-4 bg-surface rounded-xl border border-border">
            <Wrench className="w-5 h-5 text-eng-blue mx-auto mb-2" />
            <span className="font-semibold text-text block">Site Commissioning</span>
            <span>Turnkey installation</span>
          </div>
          <div className="p-4 bg-surface rounded-xl border border-border">
            <Clock className="w-5 h-5 text-eng-blue mx-auto mb-2" />
            <span className="font-semibold text-text block">Fast Turnaround</span>
            <span>Rapid quotation response</span>
          </div>
        </div>
      </div>
    </div>
  );
}

