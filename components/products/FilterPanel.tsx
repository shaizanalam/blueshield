'use client';

import { categories } from '@/data/categories';
import { X, Filter, RotateCcw } from 'lucide-react';

export interface FilterState {
  category?: string;
  application?: string;
  capacity?: string;
  automation?: string;
  installation?: string;
  search?: string;
}

interface FilterPanelProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  totalMatches: number;
  className?: string;
}

const applications = ['Industrial', 'Commercial', 'Residential', 'Institutional'];
const capacityRanges = [
  { label: 'All Capacities', value: '' },
  { label: '< 500 LPH', value: '<500' },
  { label: '500 - 1000 LPH', value: '500-1000' },
  { label: '1000 - 2000 LPH', value: '1000-2000' },
  { label: '2000+ LPH', value: '2000+' },
];
const automations = ['Automatic', 'Semi-Automatic', 'Manual'];

export function FilterPanel({
  filters,
  onChange,
  totalMatches,
  className = '',
}: FilterPanelProps) {
  const activeCount = Object.values(filters).filter(Boolean).length;

  const handleReset = () => {
    onChange({});
  };

  return (
    <div className={`bg-surface rounded-2xl border border-border p-5 space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-eng-blue" />
          <h3 className="font-bold text-white text-sm">Filters</h3>
          {activeCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-eng-blue text-white text-[10px] font-bold flex items-center justify-center">
              {activeCount}
            </span>
          )}
        </div>
        {activeCount > 0 && (
          <button
            onClick={handleReset}
            className="text-xs font-semibold text-text-muted hover:text-eng-blue flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
        )}
      </div>

      {/* Categories */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
          Category
        </h4>
        <div className="space-y-1">
          <button
            onClick={() => onChange({ ...filters, category: undefined })}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              !filters.category
                ? 'bg-eng-blue text-white font-semibold'
                : 'text-text hover:bg-surface'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => {
            const isSelected = filters.category === cat.slug || filters.category === cat.name;
            return (
              <button
                key={cat.id}
                onClick={() =>
                  onChange({
                    ...filters,
                    category: isSelected ? undefined : cat.name,
                  })
                }
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                  isSelected
                    ? 'bg-eng-blue text-white font-semibold'
                    : 'text-text hover:bg-surface'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Application */}
      <div className="pt-4 border-t border-border">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
          Application
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {applications.map((app) => {
            const isSelected = filters.application === app;
            return (
              <button
                key={app}
                onClick={() =>
                  onChange({
                    ...filters,
                    application: isSelected ? undefined : app,
                  })
                }
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  isSelected
                    ? 'bg-deep-blue text-white border-deep-blue shadow-sm'
                    : 'bg-surface text-white border-border hover:border-eng-blue/40'
                }`}
              >
                {app}
              </button>
            );
          })}
        </div>
      </div>

      {/* Capacity */}
      <div className="pt-4 border-t border-border">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
          Capacity Range
        </h4>
        <div className="space-y-1.5">
          {capacityRanges.map((range) => {
            const isSelected = (filters.capacity || '') === range.value;
            return (
              <label
                key={range.value}
                className="flex items-center gap-2 text-xs text-text cursor-pointer hover:text-eng-blue"
              >
                <input
                  type="radio"
                  name="capacity"
                  checked={isSelected}
                  onChange={() =>
                    onChange({
                      ...filters,
                      capacity: range.value || undefined,
                    })
                  }
                  className="accent-eng-blue"
                />
                <span>{range.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Automation */}
      <div className="pt-4 border-t border-border">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
          Automation
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {automations.map((auto) => {
            const isSelected = filters.automation === auto;
            return (
              <button
                key={auto}
                onClick={() =>
                  onChange({
                    ...filters,
                    automation: isSelected ? undefined : auto,
                  })
                }
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  isSelected
                    ? 'bg-deep-blue text-white border-deep-blue'
                    : 'bg-surface text-white border-border hover:border-eng-blue/40'
                }`}
              >
                {auto}
              </button>
            );
          })}
        </div>
      </div>

      {/* Installation */}
      <div className="pt-4 border-t border-border">
        <label className="flex items-center gap-2 text-xs font-medium text-white cursor-pointer">
          <input
            type="checkbox"
            checked={filters.installation === 'Available'}
            onChange={(e) =>
              onChange({
                ...filters,
                installation: e.target.checked ? 'Available' : undefined,
              })
            }
            className="rounded accent-eng-blue"
          />
          <span>Installation Available</span>
        </label>
      </div>

      <div className="pt-4 border-t border-border text-center text-xs text-text-muted">
        Showing <strong className="text-white">{totalMatches}</strong> matching systems
      </div>
    </div>
  );
}

