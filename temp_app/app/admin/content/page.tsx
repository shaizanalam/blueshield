import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, HelpCircle, FileText, User } from 'lucide-react';
import { company } from '@/data/company';
import { testimonials } from '@/data/testimonials';
import { projects } from '@/data/projects';

export default function AdminContentPage() {
  return (
    <div className="bg-surface/40 min-h-screen pt-[72px]">
      <div className="bg-navy text-white py-8 border-b border-border/20">
        <div className="container">
          <Link
            href="/admin"
            className="text-xs text-water-blue hover:underline flex items-center gap-1 mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-white">Content & Credibility Management</h1>
          <p className="text-white/60 text-xs mt-1">
            Review verified company claims, case studies, and customer testimonials.
          </p>
        </div>
      </div>

      <div className="container py-8 space-y-8">
        {/* Section 1: Company Profile Info */}
        <div className="bg-surface p-6 sm:p-8 rounded-3xl border border-border shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-eng-blue" />
              <h2 className="text-lg font-bold text-white">Corporate Identity Data</h2>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded">
              Verified
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-surface rounded-xl border border-border/60">
              <span className="text-text-muted block">Legal Name:</span>
              <strong className="text-white">{company.legalName}</strong>
            </div>
            <div className="p-3 bg-surface rounded-xl border border-border/60">
              <span className="text-text-muted block">GST Number:</span>
              <strong className="text-white">{company.gst}</strong>
            </div>
            <div className="p-3 bg-surface rounded-xl border border-border/60">
              <span className="text-text-muted block">Managing Director:</span>
              <strong className="text-white">{company.founder}</strong>
            </div>
            <div className="p-3 bg-surface rounded-xl border border-border/60">
              <span className="text-text-muted block">Operating Address:</span>
              <strong className="text-white">{company.address.street}, {company.address.city}</strong>
            </div>
          </div>
        </div>

        {/* Section 2: Case Studies */}
        <div className="bg-surface p-6 sm:p-8 rounded-3xl border border-border shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-eng-blue" />
              <h2 className="text-lg font-bold text-white">
                Installation Case Studies ({projects.length})
              </h2>
            </div>
            <Link href="/projects" className="text-xs font-semibold text-eng-blue hover:underline">
              View Public Page â†’
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {projects.map((proj) => (
              <div key={proj.id} className="p-4 bg-surface rounded-2xl border border-border/80 text-xs">
                <span className="text-[10px] font-bold uppercase text-eng-blue">{proj.industry}</span>
                <p className="font-bold text-white text-sm mt-0.5">{proj.name}</p>
                <p className="text-text-muted mt-1">{proj.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Testimonials */}
        <div className="bg-surface p-6 sm:p-8 rounded-3xl border border-border shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-eng-blue" />
              <h2 className="text-lg font-bold text-white">
                Customer Testimonials ({testimonials.length})
              </h2>
            </div>
            <Link href="/testimonials" className="text-xs font-semibold text-eng-blue hover:underline">
              View Public Page â†’
            </Link>
          </div>

          <div className="space-y-3">
            {testimonials.map((t) => (
              <div key={t.id} className="p-4 bg-surface rounded-2xl border border-border/80 text-xs flex justify-between items-center">
                <div>
                  <p className="font-bold text-white">{t.customerName} ({t.company})</p>
                  <p className="text-text-muted italic mt-0.5">&ldquo;{t.testimonial}&rdquo;</p>
                </div>
                <span className="text-[11px] font-bold text-eng-blue shrink-0 ml-4">{t.product}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

