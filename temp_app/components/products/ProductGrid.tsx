'use client';

import { ProductCard } from '@/components/products/ProductCard';
import type { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
  comparedIds?: string[];
  onToggleCompare?: (product: Product) => void;
  showCompareOption?: boolean;
}

export function ProductGrid({
  products,
  comparedIds = [],
  onToggleCompare,
  showCompareOption = true,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 bg-surface rounded-2xl border border-border p-8">
        <p className="text-base font-bold text-white mb-1">No systems found</p>
        <p className="text-xs text-text-muted max-w-sm mx-auto">
          We couldn&apos;t find any water treatment systems matching your current criteria. Try adjusting your filters or search terms.
        </p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isCompared={comparedIds.includes(product.id)}
          onToggleCompare={onToggleCompare}
          showCompareOption={showCompareOption}
        />
      ))}
    </div>
  );
}

