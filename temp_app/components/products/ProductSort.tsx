'use client';

import { ArrowUpDown } from 'lucide-react';

export type SortOption = 'relevance' | 'newest' | 'name' | 'price-asc' | 'price-desc' | 'capacity';

interface ProductSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function ProductSort({ value, onChange }: ProductSortProps) {
  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="w-4 h-4 text-text-muted" />
      <span className="text-xs text-text-muted font-medium">Sort by:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="text-xs font-semibold text-white bg-surface border border-border rounded-lg px-3 py-2 focus:outline-none focus:border-eng-blue"
      >
        <option value="relevance">Featured & Relevant</option>
        <option value="name">Product Name (A-Z)</option>
        <option value="capacity">Capacity (High to Low)</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
        <option value="newest">Newest Additions</option>
      </select>
    </div>
  );
}

