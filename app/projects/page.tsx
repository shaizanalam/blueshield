import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { MapPin, Building, ArrowRight, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects & Case Studies | BlueShield RO Industries',
  description: 'Verified installations and engineering case studies across manufacturing, healthcare, hospitality, and packaged drinking water businesses.',
};

export default function ProjectsPage() {
  return (
    <div className="bg-surface/30 min-h-screen pt-[72px]">
      {/* Header Banner */}
      <div className="bg-navy text-white py-14 bg-grid-dark border-b border-border/20">
        <div className="container">
          <Breadcrumb items={[{ label: 'Projects' }]} />
          <div className="max-w-3xl mt-4">
            <span className="eyebrow text-water-blue mb-2 block">Engineering Portfolio</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Selected Installations & Case Studies
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              Explore how BlueShield engineers, manufactures, and commissions reliable water-treatment systems for industrial facilities, commercial buildings, and bottling enterprises.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-surface rounded-3xl border border-border overflow-hidden shadow-sm flex flex-col justify-between hover:border-eng-blue/30 hover:shadow-lg transition-all group"
            >
              <div>
                <div className="aspect-[16/10] bg-surface relative overflow-hidden border-b border-border">
                  {project.images && project.images.length > 0 ? (
                    <Image
                      src={project.images[0].url}
                      alt={project.images[0].alt || project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-ice-blue to-surface flex items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-700">
                      <div>
                        <span className="text-xs font-bold text-eng-blue uppercase tracking-wider block mb-1">
                          {project.industry}
                        </span>
                        <p className="text-base font-bold text-text">{project.name}</p>
                      </div>
                    </div>
                  )}
                  {project.capacity && (
                    <div className="absolute bottom-3 left-3 bg-navy text-white text-xs px-3 py-1 rounded-lg font-semibold flex items-center gap-1">
                      <Zap className="w-3 h-3 text-water-blue" />
                      {project.capacity}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-eng-blue" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-eng-blue" />
                      {project.industry}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-text mb-2 group-hover:text-eng-blue transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-xs text-text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-text mb-2">Scope of Work:</p>
                    <ul className="text-xs text-text-muted space-y-1.5">
                      {project.scope.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-eng-blue" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/projects/${project.slug}`}
                  className="btn btn-secondary btn-sm w-full justify-center text-xs"
                >
                  Read Detailed Case Study
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

