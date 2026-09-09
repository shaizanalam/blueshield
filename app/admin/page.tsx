import Link from 'next/link';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { solutions } from '@/data/solutions';
import { projects } from '@/data/projects';
import { Package, Users, Layers, Factory, ArrowRight, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Total Catalog Products', value: products.length, icon: Package, href: '/admin/products', color: 'text-eng-blue' },
    { label: 'Active Categories', value: categories.length, icon: Layers, href: '/admin/products', color: 'text-water-blue' },
    { label: 'Solution Blueprints', value: solutions.length, icon: Factory, href: '/solutions', color: 'text-deep-blue' },
    { label: 'Installed Projects', value: projects.length, icon: ShieldCheck, href: '/admin/content', color: 'text-emerald-600' },
  ];

  return (
    <div className="bg-surface/40 min-h-screen pt-[72px]">
      <div className="bg-navy text-white py-10 border-b border-border/20">
        <div className="container">
          <span className="eyebrow text-water-blue mb-1 block">Management Console</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">BlueShield Administration</h1>
          <p className="text-white/60 text-xs mt-1">
            Manage product catalog data, quotation inquiry leads, and published engineering content.
          </p>
        </div>
      </div>

      <div className="container py-8 space-y-8">
        {/* Metric Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="bg-surface p-5 rounded-2xl border border-border shadow-sm hover:border-eng-blue/30 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                <ArrowRight className="w-4 h-4 text-border group-hover:text-eng-blue transition-colors" />
              </div>
              <p className="text-2xl font-bold text-text mb-1">{stat.value}</p>
              <p className="text-xs font-semibold text-text-muted">{stat.label}</p>
            </Link>
          ))}
        </div>

        {/* Quick Admin Navigation Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-surface p-6 rounded-3xl border border-border shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-eng-blue">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-text">Product Catalog Manager</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              View all 34 catalog items, search by capacity, inspect specifications, and verify pricing models.
            </p>
            <Link href="/admin/products" className="btn btn-secondary btn-sm w-full justify-center text-xs">
              Open Products Manager
            </Link>
          </div>

          <div className="bg-surface p-6 rounded-3xl border border-border shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-eng-blue">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-text">Quotation Leads Workflow</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Track incoming quotation inquiries, update lead status (New, Contacted, Quoted, Converted), and inspect client requirements.
            </p>
            <Link href="/admin/leads" className="btn btn-secondary btn-sm w-full justify-center text-xs">
              Open Leads Console
            </Link>
          </div>

          <div className="bg-surface p-6 rounded-3xl border border-border shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-eng-blue">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-text">Content & Case Studies</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Manage testimonials, featured installation case studies, FAQs, and verified company information.
            </p>
            <Link href="/admin/content" className="btn btn-secondary btn-sm w-full justify-center text-xs">
              Open Content Manager
            </Link>
          </div>
        </div>

        {/* Catalog Health Status */}
        <div className="bg-surface p-6 sm:p-8 rounded-3xl border border-border shadow-sm space-y-4">
          <h3 className="text-base font-bold text-text border-b border-border pb-3">Catalog System Health</h3>
          <div className="grid sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-surface rounded-xl border border-border/80">
              <span className="text-text-muted block mb-1">Architecture</span>
              <strong className="text-text text-sm font-bold">TypeScript Data Layer</strong>
              <p className="text-[11px] text-emerald-600 font-semibold mt-1">✓ Fully Type-Safe</p>
            </div>
            <div className="p-4 bg-surface rounded-xl border border-border/80">
              <span className="text-text-muted block mb-1">Rendering Engine</span>
              <strong className="text-text text-sm font-bold">Next.js 16 App Router</strong>
              <p className="text-[11px] text-emerald-600 font-semibold mt-1">✓ Static Pre-rendered</p>
            </div>
            <div className="p-4 bg-surface rounded-xl border border-border/80">
              <span className="text-text-muted block mb-1">SEO Readiness</span>
              <strong className="text-text text-sm font-bold">JSON-LD + Dynamic Sitemap</strong>
              <p className="text-[11px] text-emerald-600 font-semibold mt-1">✓ Google Ready</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

