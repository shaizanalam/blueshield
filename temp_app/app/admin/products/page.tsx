'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { formatPrice } from '@/lib/utils';
import { Search, Filter, ArrowLeft, ExternalLink, Package, ShieldCheck, Zap } from 'lucide-react';
import type { Product } from '@/types';

export default function AdminProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.capacity && p.capacity.toLowerCase().includes(searchTerm.toLowerCase())) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCat = selectedCat === 'all' || p.category === selectedCat;

    return matchesSearch && matchesCat;
  });

  return (
    <div className="bg-surface/40 min-h-screen pt-[72px]">
      {/* Header */}
      <div className="bg-navy text-white py-8 border-b border-border/20">
        <div className="container flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <Link
              href="/admin"
              className="text-xs text-water-blue hover:underline flex items-center gap-1 mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
            </Link>
            <h1 className="text-2xl font-bold text-white">Product Catalog Management</h1>
            <p className="text-white/60 text-xs mt-1">
              Browse, search, and verify all {products.length} registered products.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8 space-y-6">
        {/* Search & Filter Bar */}
        <div className="bg-surface p-4 rounded-2xl border border-border shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search product name, capacity..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-border text-xs text-white focus:outline-none focus:border-eng-blue"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-text-muted shrink-0" />
            <select
              value={selectedCat}
              onChange={(e) => setSelectedCat(e.target.value)}
              className="text-xs font-semibold text-white bg-surface border border-border rounded-xl px-3 py-2 focus:outline-none focus:border-eng-blue w-full sm:w-auto"
            >
              <option value="all">All Categories ({products.length})</option>
              {categories.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-surface rounded-3xl border border-border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-surface/50 border-b border-border text-text-muted uppercase tracking-wider font-bold">
                  <th className="p-4">Product Name</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Capacity</th>
                  <th className="p-4">Automation</th>
                  <th className="p-4">Price Setting</th>
                  <th className="p-4">Installation</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {filtered.map((product) => (
                  <tr key={product.id} className="hover:bg-surface/40 transition-colors">
                    <td className="p-4">
                      <p className="font-bold text-white text-sm">{product.name}</p>
                      <span className="text-[10px] text-text-muted font-mono">{product.slug}</span>
                    </td>
                    <td className="p-4">
                      <span className="bg-ice-blue text-eng-blue px-2 py-0.5 rounded font-semibold text-[10px] uppercase">
                        {product.category}
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-white">
                      {product.capacity ? (
                        <span className="flex items-center gap-1">
                          <Zap className="w-3 h-3 text-eng-blue" />
                          {product.capacity}
                        </span>
                      ) : (
                        <span className="text-text-muted">Custom</span>
                      )}
                    </td>
                    <td className="p-4 text-text">{product.automation || 'Standard'}</td>
                    <td className="p-4 font-semibold text-white">
                      {product.priceVisibility === 'visible' && product.price ? (
                        formatPrice(product.price)
                      ) : (
                        <span className="text-text-muted italic">On Request</span>
                      )}
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        product.installation === 'Available' ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {product.installation}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <Link
                        href={`/products/${product.slug}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-eng-blue hover:text-deep-blue font-semibold"
                      >
                        View Live <ExternalLink className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

