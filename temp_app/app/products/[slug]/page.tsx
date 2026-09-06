import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { products, getProductBySlug, getAllProductSlugs } from '@/data/products';
import { getRelatedProducts, formatPrice } from '@/lib/utils';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { SpecificationCard } from '@/components/products/SpecificationCard';
import { SpecificationTable } from '@/components/products/SpecificationTable';
import { ProcessFlow } from '@/components/products/ProcessFlow';
import { FAQ } from '@/components/ui/FAQ';
import { ProductCard } from '@/components/products/ProductCard';
import {
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  FileText,
  Truck,
  Wrench,
  HelpCircle,
} from 'lucide-react';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | BlueShield RO Industries',
    };
  }

  return {
    title: product.seoTitle || `${product.name} | BlueShield RO Industries`,
    description: product.seoDescription || product.shortDescription,
    keywords: product.seoKeywords,
    openGraph: {
      title: product.seoTitle || product.name,
      description: product.seoDescription || product.shortDescription,
      type: 'website',
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(products, product.slug, 3);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    brand: {
      '@type': 'Brand',
      name: 'BlueShield RO Industries',
    },
    category: product.category,
    offers: product.price
      ? {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        }
      : undefined,
  };

  return (
    <div className="bg-surface/30 min-h-screen pt-[72px]">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Product Hero Top Bar */}
      <div className="bg-white border-b border-border">
        <div className="container py-4">
          <Breadcrumb
            items={[
              { label: 'Products', href: '/products' },
              { label: product.category, href: `/products?category=${encodeURIComponent(product.category)}` },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      <div className="container py-8 sm:py-12">
        {/* Top Product Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-10 bg-white p-6 sm:p-10 rounded-3xl border border-border shadow-sm mb-12">
          {/* Left: Image / Visual */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative aspect-square rounded-2xl bg-surface border border-border overflow-hidden flex items-center justify-center p-8 text-center">
              <div className="space-y-2">
                <span className="text-xs font-bold text-eng-blue tracking-wider uppercase">
                  {product.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-navy">{product.name}</h2>
                <p className="text-xs text-text-muted max-w-xs mx-auto">{product.material || 'Engineered System'}</p>
              </div>

              {product.capacity && (
                <div className="absolute top-4 left-4">
                  <Badge variant="accent" size="md">
                    {product.capacity}
                  </Badge>
                </div>
              )}
            </div>

            {/* Quick Guarantees Strip */}
            <div className="grid grid-cols-2 gap-2 text-xs text-text-muted">
              <div className="flex items-center gap-2 p-3 bg-surface rounded-xl border border-border/60">
                <Truck className="w-4 h-4 text-eng-blue shrink-0" />
                <span>PAN India Delivery</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-surface rounded-xl border border-border/60">
                <Wrench className="w-4 h-4 text-eng-blue shrink-0" />
                <span>Installation Support</span>
              </div>
            </div>
          </div>

          {/* Right: Info & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="primary" size="md">
                  {product.category}
                </Badge>
                {product.subcategory && (
                  <Badge variant="surface" size="md">
                    {product.subcategory}
                  </Badge>
                )}
                {product.automation && (
                  <Badge variant="surface" size="md">
                    {product.automation}
                  </Badge>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 leading-tight">
                {product.name}
              </h1>

              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6">
                {product.shortDescription}
              </p>

              {/* Price Banner */}
              <div className="p-4 rounded-2xl bg-ice-blue/40 border border-eng-blue/20 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-eng-blue block">
                    Indicative Price
                  </span>
                  {product.priceVisibility === 'visible' && product.price ? (
                    <p className="text-xl sm:text-2xl font-bold text-navy">
                      {formatPrice(product.price)}
                      <span className="text-xs font-normal text-text-muted ml-1.5">onwards*</span>
                    </p>
                  ) : (
                    <p className="text-base font-bold text-eng-blue">Pricing on Custom Requirement</p>
                  )}
                </div>
                <span className="text-[10px] text-text-muted text-right max-w-[140px]">
                  *Ex-works / taxes & transport as applicable
                </span>
              </div>

              {/* Key Specs Card */}
              <div className="mb-6">
                <SpecificationCard
                  capacity={product.capacity}
                  automation={product.automation}
                  material={product.material}
                  installation={product.installation}
                  delivery={product.delivery}
                  moq={product.minimumOrderQuantity}
                />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
              <Link
                href={`/request-quote?product=${encodeURIComponent(product.name)}`}
                className="btn btn-primary btn-lg flex-1 justify-center"
              >
                <FileText className="w-4 h-4" />
                Request a Custom Quote
              </Link>
              <Link
                href="/contact"
                className="btn btn-secondary btn-lg flex-1 justify-center"
              >
                <PhoneCall className="w-4 h-4" />
                Talk to an Engineer
              </Link>
            </div>
          </div>
        </div>

        {/* Product Details Section (Tabs/Content) */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview & Description */}
            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-4">System Overview</h3>
              <div className="text-sm text-text-muted leading-relaxed space-y-4">
                <p>{product.description}</p>
              </div>
            </div>

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-6">Key Engineering Features</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 bg-surface rounded-xl border border-border/60">
                      <CheckCircle2 className="w-4 h-4 text-eng-blue mt-0.5 shrink-0" />
                      <span className="text-xs font-semibold text-navy leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Specifications Table */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-6">Technical Specifications</h3>
                <SpecificationTable specifications={product.specifications} />
              </div>
            )}

            {/* Process Flow */}
            {product.processFlow && product.processFlow.length > 0 && (
              <ProcessFlow steps={product.processFlow} />
            )}

            {/* FAQs */}
            {product.faq && product.faq.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-eng-blue" />
                  Frequently Asked Questions
                </h3>
                <FAQ items={product.faq} />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Suitable Applications */}
            {product.applications && product.applications.length > 0 && (
              <div className="bg-white p-6 rounded-3xl border border-border shadow-sm">
                <h4 className="text-base font-bold text-navy mb-4">Recommended Applications</h4>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold text-navy bg-surface border border-border px-3 py-1.5 rounded-lg"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Installation & Commissioning Note */}
            <div className="bg-navy text-white p-6 rounded-3xl shadow-sm space-y-4">
              <span className="eyebrow text-water-blue block">Engineering Support</span>
              <h4 className="text-lg font-bold text-white leading-snug">
                Installation & Site Assessment
              </h4>
              <p className="text-xs text-white/70 leading-relaxed">
                BlueShield provides complete on-site installation, pipework integration, and water parameter verification across India.
              </p>
              <Link
                href={`/request-quote?product=${encodeURIComponent(product.name)}`}
                className="btn btn-primary btn-sm w-full justify-center"
              >
                Inquire About Installation
              </Link>
            </div>

            {/* Related Products */}
            {related.length > 0 && (
              <div className="bg-white p-6 rounded-3xl border border-border shadow-sm">
                <h4 className="text-base font-bold text-navy mb-4">Related Systems</h4>
                <div className="space-y-4">
                  {related.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/products/${rel.slug}`}
                      className="block p-3 rounded-xl border border-border hover:border-eng-blue/40 hover:bg-surface/50 transition-all group"
                    >
                      <span className="text-[10px] font-bold text-eng-blue uppercase block mb-1">
                        {rel.category}
                      </span>
                      <p className="text-xs font-bold text-navy group-hover:text-eng-blue transition-colors">
                        {rel.name}
                      </p>
                      {rel.capacity && (
                        <p className="text-[11px] text-text-muted mt-1">{rel.capacity}</p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
