'use client';

import Link from 'next/link';
import { X, Check, ArrowRight } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import type { Product } from '@/types';

interface ComparisonTableProps {
  products: Product[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

export function ComparisonTable({ products, onClose, onRemove }: ComparisonTableProps) {
  if (products.length === 0) return null;

  const rows = [
    { label: 'Category', render: (p: Product) => p.category },
    { label: 'Subcategory', render: (p: Product) => p.subcategory || '—' },
    { label: 'Capacity', render: (p: Product) => p.capacity || 'Customizable' },
    { label: 'Automation', render: (p: Product) => p.automation || 'Standard' },
    { label: 'Material', render: (p: Product) => p.material || 'FRP / SS' },
    {
      label: 'Applications',
      render: (p: Product) => p.application.join(', '),
    },
    { label: 'Installation', render: (p: Product) => p.installation },
    { label: 'Delivery', render: (p: Product) => p.delivery },
    {
      label: 'Indicative Price',
      render: (p: Product) =>
        p.priceVisibility === 'visible' && p.price
          ? formatPrice(p.price) + ' onwards*'
          : 'On Request',
    },
    { label: 'Warranty', render: (p: Product) => p.warranty || 'Contact for details' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-navy/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-surface rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-border overflow-hidden animate-[fadeIn_0.2s_ease-out]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-surface/50">
          <div>
            <span className="eyebrow block mb-1">Side-by-Side Analysis</span>
            <h2 className="text-xl font-bold text-white">System Comparison</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-surface text-text-muted hover:text-white transition-colors border border-border"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Table */}
        <div className="overflow-x-auto p-6 flex-1">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-text-muted w-40 bg-surface/30">
                  Feature / Parameter
                </th>
                {products.map((p) => (
                  <th key={p.id} className="p-4 align-top min-w-[200px]">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold uppercase text-eng-blue bg-ice-blue px-2 py-0.5 rounded">
                        {p.category}
                      </span>
                      <button
                        onClick={() => onRemove(p.id)}
                        className="text-text-muted hover:text-red-500 p-1"
                        title="Remove from comparison"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <Link
                      href={`/products/${p.slug}`}
                      className="font-bold text-white text-sm hover:text-eng-blue line-clamp-2"
                    >
                      {p.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-xs">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-surface/50 transition-colors">
                  <td className="p-4 font-semibold text-white bg-surface/30">{row.label}</td>
                  {products.map((p) => (
                    <td key={p.id} className="p-4 text-text">
                      {row.render(p)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-4 font-semibold text-white bg-surface/30">Action</td>
                {products.map((p) => (
                  <td key={p.id} className="p-4">
                    <Link
                      href={`/request-quote?product=${encodeURIComponent(p.name)}`}
                      className="btn btn-primary btn-sm w-full justify-center text-xs"
                    >
                      Request Quote
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-surface/30 flex justify-end">
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
}

