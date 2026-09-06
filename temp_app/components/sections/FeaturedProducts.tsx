'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Zap, Settings, MapPin } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';
import { formatPrice } from '@/lib/utils';

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="section bg-surface">
      <div className="container">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="eyebrow mb-2 block">Featured Products</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Products Built for Performance
            </h2>
          </div>
          <Link href="/products" className="btn btn-secondary btn-sm shrink-0">
            View All Products
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={`/products/${product.slug}`}
                className="group block rounded-xl bg-surface border border-border overflow-hidden hover:shadow-lg hover:border-eng-blue/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] bg-surface overflow-hidden">
                  {product.images && product.images.length > 0 ? (
                    <Image
                      src={product.images[0].url}
                      alt={product.images[0].alt || product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-ice-blue to-surface flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <div className="text-center p-4">
                        <p className="text-xs font-medium text-text-muted">{product.category}</p>
                        <p className="text-sm font-semibold text-white mt-1">{product.name}</p>
                      </div>
                    </div>
                  )}
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-surface/90 backdrop-blur-sm text-eng-blue rounded-md">
                      {product.category}
                    </span>
                  </div>
                  {/* Hover Arrow */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-eng-blue flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-white group-hover:text-eng-blue transition-colors text-sm leading-snug mb-2">
                    {product.name}
                  </h3>

                  {/* Specs Row */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.capacity && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-text-muted bg-surface rounded-md px-2 py-0.5">
                        <Zap className="w-3 h-3" /> {product.capacity}
                      </span>
                    )}
                    {product.automation && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-text-muted bg-surface rounded-md px-2 py-0.5">
                        <Settings className="w-3 h-3" /> {product.automation}
                      </span>
                    )}
                    {product.installation === 'Available' && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-text-muted bg-surface rounded-md px-2 py-0.5">
                        <MapPin className="w-3 h-3" /> Installation
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  {product.priceVisibility === 'visible' && product.price ? (
                    <p className="text-sm font-bold text-white">
                      {formatPrice(product.price)}
                      <span className="text-xs font-normal text-text-muted ml-1">onwards*</span>
                    </p>
                  ) : (
                    <p className="text-sm font-medium text-eng-blue">Get Quote</p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

