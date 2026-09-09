'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, Zap, Droplets } from 'lucide-react';
import { products } from '@/data/products';
import { searchProducts } from '@/lib/utils';
import type { Product } from '@/types';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSelect?: () => void;
}

export function SearchBar({
  placeholder = 'Search by product, capacity (e.g. 1000 LPH), application...',
  className = '',
  onSelect,
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length > 1) {
      const matched = searchProducts(products, query).slice(0, 6);
      setResults(matched);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className={`relative w-full ${className}`}>
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-4 h-4 text-text-muted pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim().length > 1 && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-11 pr-10 py-3 rounded-xl border border-border bg-white text-sm text-text placeholder:text-text-muted/70 focus:outline-none focus:border-eng-blue focus:ring-2 focus:ring-eng-blue/10 transition-all"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3.5 p-1 rounded-md text-text-muted hover:text-text hover:bg-surface transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-surface rounded-2xl border border-border shadow-2xl overflow-hidden z-50 animate-[fadeIn_0.15s_ease-out]">
          {results.length > 0 ? (
            <div className="py-2 divide-y divide-border/50">
              <div className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-text-muted bg-surface/50">
                Matching Systems ({results.length})
              </div>
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  onClick={() => {
                    setIsOpen(false);
                    setQuery('');
                    if (onSelect) onSelect();
                  }}
                  className="flex items-center justify-between p-3.5 hover:bg-ice-blue/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface border border-border/80 flex items-center justify-center shrink-0 group-hover:border-eng-blue/30">
                      <Droplets className="w-4 h-4 text-eng-blue" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text group-hover:text-eng-blue transition-colors">
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-text-muted mt-0.5">
                        <span>{product.category}</span>
                        {product.capacity && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-0.5 text-eng-blue font-medium">
                              <Zap className="w-3 h-3" /> {product.capacity}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-border group-hover:text-eng-blue group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
              <div className="p-3 bg-surface/30 text-center">
                <Link
                  href={`/products?search=${encodeURIComponent(query)}`}
                  onClick={() => {
                    setIsOpen(false);
                    setQuery('');
                    if (onSelect) onSelect();
                  }}
                  className="text-xs font-semibold text-eng-blue hover:text-deep-blue"
                >
                  View all results for &ldquo;{query}&rdquo; →
                </Link>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-sm text-text font-semibold">No direct matches found</p>
              <p className="text-xs text-text-muted mt-1">
                Try searching for general terms like &ldquo;RO Plant&rdquo;, &ldquo;Softener&rdquo;, or &ldquo;1000 LPH&rdquo;.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

