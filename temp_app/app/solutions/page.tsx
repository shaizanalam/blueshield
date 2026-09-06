import Link from 'next/link';
import type { Metadata } from 'next';
import { solutions } from '@/data/solutions';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ArrowRight, CheckCircle2, Factory, Building2, GlassWater, Recycle, Waves, Home } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Factory, Building2, GlassWater, Recycle, Waves, Home,
};

export const metadata: Metadata = {
  title: 'Water Treatment Solutions | BlueShield RO Industries',
  description: 'Turnkey water treatment solutions for industrial, commercial, packaged drinking water, wastewater, pool and domestic applications.',
};

export default function SolutionsPage() {
  return (
    <div className="bg-surface/30 min-h-screen pt-[72px]">
      {/* Header Banner */}
      <div className="bg-navy text-white py-14 bg-grid-dark border-b border-border/20">
        <div className="container">
          <Breadcrumb items={[{ label: 'Solutions' }]} />
          <div className="max-w-2xl mt-2">
            <span className="eyebrow text-water-blue mb-2 block">Application Engineering</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Water Treatment Solutions
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              We design, build, and commission complete treatment ecosystems customized around your raw water source, daily volume, and required purity standards.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions List */}
      <div className="container py-12">
        <div className="space-y-8">
          {solutions.map((solution, index) => {
            const Icon = iconMap[solution.icon] || Factory;
            const isEven = index % 2 === 0;

            return (
              <div
                key={solution.id}
                className="bg-surface rounded-3xl border border-border p-8 sm:p-10 shadow-sm overflow-hidden"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center">
                        <Icon className="w-5 h-5 text-eng-blue" />
                      </div>
                      <span className="eyebrow">{solution.name}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      {solution.tagline}
                    </h2>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-white">
                        Key Systems Included:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {solution.recommendedSystems.map((sys) => (
                          <span
                            key={sys}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-surface px-3 py-1.5 rounded-lg border border-border"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-eng-blue" />
                            {sys}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/solutions/${solution.slug}`}
                        className="btn btn-primary btn-sm"
                      >
                        Explore Solution Blueprint
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href={`/request-quote?solution=${encodeURIComponent(solution.name)}`}
                        className="btn btn-secondary btn-sm"
                      >
                        Get System Proposal
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-surface rounded-2xl p-6 border border-border">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                      Process Flow & Applications
                    </h4>
                    <div className="space-y-3">
                      {solution.processFlow.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <span className="w-5 h-5 rounded-full bg-eng-blue text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <span className="font-semibold text-white">{step}</span>
                        </div>
                      ))}
                    </div>

                    {solution.applications && (
                      <div className="mt-6 pt-4 border-t border-border">
                        <span className="text-[11px] text-text-muted font-medium block mb-2">Typical for:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {solution.applications.slice(0, 4).map((app) => (
                            <span key={app} className="text-[10px] font-medium text-white bg-surface px-2 py-0.5 rounded border border-border">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

