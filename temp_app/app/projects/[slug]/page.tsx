import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projects, getProjectBySlug } from '@/data/projects';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { MapPin, Building, CheckCircle2, Zap, ArrowRight, FileText } from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found | BlueShield RO Industries' };
  }

  return {
    title: `${project.name} | Project Case Study | BlueShield RO Industries`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-surface/30 min-h-screen pt-[72px]">
      {/* Hero */}
      <div className="bg-navy text-white py-14 bg-grid-dark border-b border-border/20">
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Projects', href: '/projects' },
              { label: project.name },
            ]}
          />
          <div className="max-w-3xl mt-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="eyebrow text-water-blue">{project.industry} Case Study</span>
              {project.capacity && (
                <span className="bg-eng-blue/20 text-water-blue border border-water-blue/30 text-xs px-2.5 py-0.5 rounded-full font-semibold">
                  {project.capacity}
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {project.name}
            </h1>
            <div className="flex items-center gap-4 text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-water-blue" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Building className="w-4 h-4 text-water-blue" />
                {project.industry}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12 space-y-12">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-border shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-navy">Project Overview & Objectives</h2>
              <p className="text-sm text-text-muted leading-relaxed">
                {project.description}
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                BlueShield engineered and manufactured the full equipment package, coordinating site delivery, on-site skid placement, electrical integration, pressure testing, and final client handover in {project.location}.
              </p>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-6">Scope of Engineering Work</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.scope.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-surface rounded-2xl border border-border/80">
                    <CheckCircle2 className="w-5 h-5 text-eng-blue shrink-0" />
                    <span className="text-xs font-semibold text-navy">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-border shadow-sm space-y-4">
              <h3 className="text-base font-bold text-navy border-b border-border pb-3">
                Project Key Specs
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span className="text-text-muted">System Model</span>
                  <span className="font-bold text-navy">{project.system}</span>
                </div>
                {project.capacity && (
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-text-muted">Output Capacity</span>
                    <span className="font-bold text-eng-blue">{project.capacity}</span>
                  </div>
                )}
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span className="text-text-muted">Location</span>
                  <span className="font-bold text-navy">{project.location}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-text-muted">Industry</span>
                  <span className="font-bold text-navy">{project.industry}</span>
                </div>
              </div>
            </div>

            <div className="bg-navy text-white p-6 rounded-3xl shadow-sm space-y-4">
              <span className="eyebrow text-water-blue block">Similar Requirement?</span>
              <h4 className="text-lg font-bold text-white">Need a System Like This?</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                We can size and fabricate a matching configuration tailored to your water testing report.
              </p>
              <Link
                href={`/request-quote?requirement=${encodeURIComponent(project.system)}`}
                className="btn btn-primary btn-sm w-full justify-center"
              >
                <FileText className="w-4 h-4" />
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
