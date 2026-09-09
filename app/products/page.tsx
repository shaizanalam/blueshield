'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import { filterProducts, sortProducts } from '@/lib/utils';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SearchBar } from '@/components/ui/SearchBar';
import { FilterPanel, type FilterState } from '@/components/products/FilterPanel';
import { ProductSort, type SortOption } from '@/components/products/ProductSort';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ComparisonBar } from '@/components/products/ComparisonBar';
import { ComparisonTable } from '@/components/products/ComparisonTable';
import { SlidersHorizontal, X } from 'lucide-react';
import type { Product } from '@/types';

function ProductExplorerContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') || undefined;
  const searchParam = searchParams.get('search') || undefined;

  const [filters, setFilters] = useState<FilterState>({
    category: categoryParam,
    search: searchParam,
    application: undefined,
    capacity: undefined,
    automation: undefined,
    installation: undefined,
  });

  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [comparedProducts, setComparedProducts] = useState<Product[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const list = filterProducts(products, filters);
    return sortProducts(list, sortBy);
  }, [filters, sortBy]);

  const handleToggleCompare = (product: Product) => {
    setComparedProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        if (prev.length >= 4) {
          alert('You can compare up to 4 systems at once.');
          return prev;
        }
        return [...prev, product];
      }
    });
  };

  const handleRemoveCompare = (id: string) => {
    setComparedProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="bg-surface/40 min-h-screen pt-[72px]">
      {/* Header Banner */}
      <div className="bg-navy text-white py-12 border-b border-border/20 bg-grid-dark">
        <div className="container">
          <Breadcrumb items={[{ label: 'Products' }]} />
          <div className="max-w-2xl mt-2">
            <span className="eyebrow text-water-blue mb-2 block">Catalog & Solutions</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
              Water Treatment Equipment Catalog
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Explore our range of industrial RO plants, water treatment machinery, commercial purifiers, softeners, bottling equipment, and spare parts.
            </p>
          </div>
        </div>
      </div>

      {/* Main Explorer Workspace */}
      <div className="container py-8">
        {/* Top Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-surface p-4 rounded-2xl border border-border shadow-sm">
          <div className="w-full md:w-96">
            <SearchBar
              placeholder="Search catalog by name, capacity, specs..."
              onSelect={() => {}}
            />
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden btn btn-secondary btn-sm flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {Object.values(filters).filter(Boolean).length > 0 && (
                <span className="w-4 h-4 rounded-full bg-eng-blue text-white text-[10px] flex items-center justify-center">
                  {Object.values(filters).filter(Boolean).length}
                </span>
              )}
            </button>

            <ProductSort value={sortBy} onChange={setSortBy} />
          </div>
        </div>

        {/* Layout: Sidebar + Grid */}
        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block sticky top-24">
            <FilterPanel
              filters={filters}
              onChange={setFilters}
              totalMatches={filteredProducts.length}
            />
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-semibold text-text-muted">
                Showing <span className="text-text font-bold">{filteredProducts.length}</span> of {products.length} systems
              </p>
            </div>

            <ProductGrid
              products={filteredProducts}
              comparedIds={comparedProducts.map((p) => p.id)}
              onToggleCompare={handleToggleCompare}
              showCompareOption={true}
            />
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm lg:hidden flex justify-end animate-[fadeIn_0.15s_ease-out]">
          <div className="bg-surface w-full max-w-sm h-full flex flex-col justify-between animate-[slideInRight_0.2s_ease-out] shadow-2xl">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 border-b border-border bg-surface shrink-0">
              <div>
                <h3 className="font-bold text-text text-base">Filter Catalog</h3>
                <p className="text-xs text-text-muted">{filteredProducts.length} systems found</p>
              </div>
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="p-2 rounded-xl text-text-muted hover:text-text hover:bg-white border border-border transition-colors"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Filter List */}
            <div className="p-5 overflow-y-auto flex-1">
              <FilterPanel
                filters={filters}
                onChange={setFilters}
                totalMatches={filteredProducts.length}
              />
            </div>

            {/* Sticky Bottom Drawer Actions */}
            <div className="p-4 border-t border-border bg-surface shrink-0 flex gap-2">
              <button
                onClick={() => setFilters({})}
                className="btn btn-secondary btn-sm flex-1 justify-center"
              >
                Reset All
              </button>
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="btn btn-primary btn-sm flex-1 justify-center"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Compare Bar */}
      <ComparisonBar
        comparedProducts={comparedProducts}
        onRemove={handleRemoveCompare}
        onClear={() => setComparedProducts([])}
        onOpenCompareModal={() => setIsCompareModalOpen(true)}
      />

      {/* Comparison Modal */}
      {isCompareModalOpen && (
        <ComparisonTable
          products={comparedProducts}
          onClose={() => setIsCompareModalOpen(false)}
          onRemove={handleRemoveCompare}
        />
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center">Loading product catalog...</div>}>
      <ProductExplorerContent />
    </Suspense>
  );
}

