'use client';

import Link from 'next/link';
import { ArrowUpRight, Zap, Settings, MapPin, Check } from 'lucide-react';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  isCompared?: boolean;
  onToggleCompare?: (product: Product) => void;
  showCompareOption?: boolean;
}

export function ProductCard({
  product,
  isCompared = false,
  onToggleCompare,
  showCompareOption = true,
}: ProductCardProps) {
  return (
    <div className="card group flex flex-col justify-between h-full relative">
      <div>
        {/* Visual Box */}
        <div className="relative aspect-[4/3] bg-surface overflow-hidden border-b border-border/80">
          {product.images && product.images.length > 0 ? (
            <Image
              src={product.images[0].url}
              alt={product.images[0].alt || product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-ice-blue to-surface flex items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-500">
              <div>
                <span className="text-[11px] font-bold text-eng-blue tracking-wider uppercase block mb-1">
                  {product.category}
                </span>
                <p className="text-sm font-bold text-text line-clamp-2">{product.name}</p>
              </div>
            </div>
          )}

          {/* Badges Top Left */}
          <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-surface/95 backdrop-blur-sm text-text rounded-md shadow-sm border border-border/50">
              {product.category}
            </span>
          </div>

          {/* Compare Checkbox Top Right */}
          {showCompareOption && onToggleCompare && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onToggleCompare(product);
              }}
              className={`absolute top-3 right-3 z-10 flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-md transition-all ${
                isCompared
                  ? 'bg-eng-blue text-white shadow-md'
                  : 'bg-surface/90 backdrop-blur-sm text-text hover:bg-surface border border-border/60'
              }`}
              title="Add to comparison"
            >
              <div
                className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${
                  isCompared ? 'bg-surface border-white' : 'border-border bg-surface'
                }`}
              >
                {isCompared && <Check className="w-2.5 h-2.5 text-eng-blue stroke-[3]" />}
              </div>
              <span>Compare</span>
            </button>
          )}

          {/* Quick Details Hover Overlay Icon */}
          <Link
            href={`/products/${product.slug}`}
            className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-eng-blue text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md group-hover:scale-105"
            aria-label={`View details of ${product.name}`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Content Box */}
        <div className="p-5">
          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="font-bold text-text text-base leading-snug group-hover:text-eng-blue transition-colors mb-2 line-clamp-2">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-4">
            {product.shortDescription}
          </p>

          {/* Specifications Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.capacity && (
              <Badge variant="accent" size="sm">
                <Zap className="w-3 h-3 text-eng-blue" />
                {product.capacity}
              </Badge>
            )}
            {product.automation && (
              <Badge variant="surface" size="sm">
                <Settings className="w-3 h-3 text-text-muted" />
                {product.automation}
              </Badge>
            )}
            {product.material && (
              <Badge variant="surface" size="sm">
                {product.material}
              </Badge>
            )}
            {product.installation === 'Available' && (
              <Badge variant="surface" size="sm">
                <MapPin className="w-3 h-3 text-text-muted" />
                Install Available
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Footer / Action */}
      <div className="p-5 pt-0 border-t border-border/50 mt-auto">
        <div className="flex items-center justify-between pt-3">
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-text-muted block">
              Indicative Price
            </span>
            {product.priceVisibility === 'visible' && product.price ? (
              <p className="text-sm font-bold text-text">
                {formatPrice(product.price)}
                <span className="text-[10px] font-normal text-text-muted ml-0.5">onwards*</span>
              </p>
            ) : (
              <p className="text-xs font-semibold text-eng-blue">Price on Request</p>
            )}
          </div>

          <div className="flex gap-2">
            <Link
              href={`/request-quote?product=${encodeURIComponent(product.name)}`}
              className="btn btn-primary btn-sm text-xs py-1.5 px-3"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

