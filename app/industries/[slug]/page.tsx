import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { industries, getIndustryBySlug } from '@/data/industries';
import { products } from '@/data/products';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ProductCard } from '@/components/products/ProductCard';
import { CheckCircle2, ArrowRight, PhoneCall, FileText, Factory } from 'lucide-react';

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return { title: 'Industry Not Found | BlueShield RO Industries' };
  }

  return {
    title: industry.seoTitle,
    description: industry.seoDescription,
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  // Find relevant product objects
  const matchedProducts = products.filter((p) =>
    industry.relevantProducts.includes(p.slug)
  );

  return (
    <div className="bg-surface/30 min-h-screen pt-[72px]">
      {/* Hero */}
      <div className="bg-navy text-white py-14 bg-grid-dark border-b border-border/20">
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Industries', href: '/industries' },
              { label: industry.name },
            ]}
          />
          <div className="max-w-3xl mt-4">
            <span className="eyebrow text-water-blue mb-2 block">{industry.name} Water Systems</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Water Treatment Solutions for {industry.name}
            </h1>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              {industry.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/request-quote?industry=${encodeURIComponent(industry.name)}`}
                className="btn btn-primary btn-lg w-full sm:w-auto justify-center"
              >
                <FileText className="w-4 h-4" />
                Request Industry Sizing & Quote
              </Link>
              <Link
                href="/contact"
                className="btn btn-secondary btn-lg w-full sm:w-auto justify-center text-white border-white/20 hover:bg-white hover:text-navy"
              >
                <PhoneCall className="w-4 h-4" />
                Consult Our Technical Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12 space-y-12">
        {/* Requirements & Applications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
            <h3 className="text-xl font-bold text-navy mb-4">
              Critical Water Requirements in {industry.name}
            </h3>
            <div className="space-y-3">
              {industry.requirements.map((req, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-surface rounded-xl border border-border/60">
                  <CheckCircle2 className="w-4 h-4 text-eng-blue mt-0.5 shrink-0" />
                  <span className="text-xs font-semibold text-navy leading-snug">{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
            <h3 className="text-xl font-bold text-navy mb-4">
              Typical Facility Applications
            </h3>
            <div className="space-y-3">
              {industry.typicalApplications.map((app, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-ice-blue/30 rounded-xl border border-eng-blue/20">
                  <span className="w-2 h-2 rounded-full bg-eng-blue mt-1.5 shrink-0" />
                  <span className="text-xs font-semibold text-navy leading-snug">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Systems */}
        {matchedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="eyebrow block mb-1">Recommended Systems</span>
                <h3 className="text-2xl font-bold text-navy">
                  Engineered Products for {industry.name}
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

        {/* Bottom CTA */}
        <div className="bg-navy text-white p-8 sm:p-12 rounded-3xl text-center space-y-4 bg-grid-dark">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Looking for a Compliant System for Your {industry.name} Facility?
          </h3>
          <p className="text-sm text-white/70 max-w-xl mx-auto">
            BlueShield provides full turnkey engineering — from raw water laboratory testing to custom plant fabrication and commissioning.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href={`/request-quote?industry=${encodeURIComponent(industry.name)}`}
              className="btn btn-primary btn-lg w-full sm:w-auto justify-center"
            >
              Get Sizing Assessment & Proposal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
