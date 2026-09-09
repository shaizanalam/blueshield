import Link from 'next/link';
import type { Metadata } from 'next';
import { industries } from '@/data/industries';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ArrowRight, Factory, Hotel, Heart, GraduationCap, Building, Store, Home, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Factory, Hotel, Heart, GraduationCap, Building, Store, Home,
};

export const metadata: Metadata = {
  title: 'Industries We Serve | BlueShield RO Industries',
  description: 'Water treatment and reverse osmosis engineering tailored for manufacturing, healthcare, hospitality, education, commercial, and water businesses.',
};

export default function IndustriesPage() {
  return (
    <div className="bg-surface/30 min-h-screen pt-[72px]">
      {/* Header Banner */}
      <div className="bg-navy text-white py-14 bg-grid-dark border-b border-border/20">
        <div className="container">
          <Breadcrumb items={[{ label: 'Industries' }]} />
          <div className="max-w-2xl mt-2">
            <span className="eyebrow text-water-blue mb-2 block">Sector Expertise</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Industries We Serve
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Every industry has distinct water quality standards, recovery requirements, and regulatory frameworks. We build specialized water systems configured for your sector.
            </p>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] || Factory;

            return (
              <div
                key={industry.id}
                className="bg-surface rounded-3xl border border-border p-8 shadow-sm flex flex-col justify-between hover:border-eng-blue/30 hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-ice-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-eng-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-text mb-3 group-hover:text-eng-blue transition-colors">
                    {industry.name}
                  </h2>
                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-text">
                      Key Demands:
                    </p>
                    <ul className="space-y-1.5 text-xs text-text-muted">
                      {industry.requirements.slice(0, 3).map((req) => (
                        <li key={req} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-eng-blue shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-eng-blue hover:text-deep-blue transition-colors"
                  >
                    View Industry Solutions <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

