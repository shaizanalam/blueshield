import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { solutions, getSolutionBySlug } from '@/data/solutions';
import { products } from '@/data/products';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ProcessFlow } from '@/components/products/ProcessFlow';
import { ProductCard } from '@/components/products/ProductCard';
import { CheckCircle2, ArrowRight, PhoneCall, FileText, AlertCircle, Sparkles } from 'lucide-react';

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return { title: 'Solution Not Found | BlueShield RO Industries' };
  }

  return {
    title: solution.seoTitle,
    description: solution.seoDescription,
  };
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  // Find relevant product objects
  const matchedProducts = products.filter((p) =>
    solution.relevantProducts.includes(p.slug)
  );

  return (
    <div className="bg-surface/30 min-h-screen pt-[72px]">
      {/* Hero */}
      <div className="bg-navy text-white py-14 bg-grid-dark border-b border-border/20">
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Solutions', href: '/solutions' },
              { label: solution.name },
            ]}
          />
          <div className="max-w-3xl mt-4">
            <span className="eyebrow text-water-blue mb-2 block">{solution.name}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {solution.tagline}
            </h1>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              {solution.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/request-quote?solution=${encodeURIComponent(solution.name)}`}
                className="btn btn-primary btn-lg"
              >
                <FileText className="w-4 h-4" />
                Request Custom Solution Proposal
              </Link>
              <Link
                href="/contact"
                className="btn btn-secondary btn-lg text-white border-white/20 hover:bg-white hover:text-navy"
              >
                <PhoneCall className="w-4 h-4" />
                Talk to Solution Specialist
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12 space-y-12">
        {/* Problem vs Solution Comparison Card */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm">
            <div className="flex items-center gap-2 text-red-600 mb-3">
              <AlertCircle className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">The Operational Challenge</span>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Common Industry Pitfalls</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              {solution.problem}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-eng-blue/20 shadow-sm bg-gradient-to-br from-white to-ice-blue/20">
            <div className="flex items-center gap-2 text-eng-blue mb-3">
              <Sparkles className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">The BlueShield Engineering Solution</span>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Engineered Turnkey Reliability</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              {solution.solutionText}
            </p>
          </div>
        </div>

        {/* Process Flow */}
        <ProcessFlow
          steps={solution.processFlow}
          title={`${solution.name} Process Blueprint`}
        />

        {/* Capacity Selector (if available) */}
        {solution.capacityOptions && (
          <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
            <h3 className="text-xl font-bold text-navy mb-4">Scalable Capacity Configurations</h3>
            <p className="text-sm text-text-muted mb-6">
              Our engineering systems are modular and custom fabricated for distinct daily volumes:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {solution.capacityOptions.map((cap) => (
                <div key={cap} className="p-4 rounded-xl bg-surface border border-border text-center">
                  <span className="text-xs text-text-muted block">Output Rating</span>
                  <span className="text-base font-bold text-navy">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Relevant Products Grid */}
        {matchedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="eyebrow block mb-1">Equipment Catalog</span>
                <h3 className="text-2xl font-bold text-navy">
                  Key Systems in this Solution
                </h3>
              </div>
              <Link href="/products" className="text-xs font-bold text-eng-blue hover:text-deep-blue flex items-center gap-1">
                View All Products <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* Typical Applications */}
        {solution.applications && (
          <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
            <h3 className="text-xl font-bold text-navy mb-6">Suitable Facilities & Sectors</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {solution.applications.map((app) => (
                <div key={app} className="flex items-center gap-2.5 p-3.5 bg-surface rounded-xl border border-border/80">
                  <CheckCircle2 className="w-4 h-4 text-eng-blue shrink-0" />
                  <span className="text-xs font-semibold text-navy">{app}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-navy text-white p-8 sm:p-12 rounded-3xl text-center space-y-4 bg-grid-dark">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Need a {solution.name} System Designed for Your Site?
          </h3>
          <p className="text-sm text-white/70 max-w-xl mx-auto">
            Contact our technical team with your water test report or required volume for an exact system blueprint and quotation.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href={`/request-quote?solution=${encodeURIComponent(solution.name)}`}
              className="btn btn-primary btn-lg"
            >
              Request Custom Technical Proposal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
