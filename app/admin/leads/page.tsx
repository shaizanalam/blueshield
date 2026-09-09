'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Filter, Phone, Mail, MapPin, CheckCircle2, Clock } from 'lucide-react';
import type { Lead, LeadStatus } from '@/types';

// Mock initial leads for display and demonstration
const initialLeads: Lead[] = [
  {
    id: 'lead-001',
    name: 'Vikramaditya Steel Works',
    phone: '+91 98271 22334',
    email: 'purchase@vikramsteel.com',
    product: 'Industrial RO Plant',
    category: 'RO Plants',
    application: 'Industrial',
    capacity: '2000-5000 LPH',
    city: 'Raipur',
    state: 'Chhattisgarh',
    message: 'Require 2000 LPH automatic RO plant for cooling tower makeup and boiler feed water.',
    source: 'quote-form',
    status: 'New',
    createdAt: '2025-01-15T10:30:00Z',
    updatedAt: '2025-01-15T10:30:00Z',
  },
  {
    id: 'lead-002',
    name: 'Dr. Alok Verma (Verma Memorial Hospital)',
    phone: '+91 94252 88990',
    email: 'admin@vermahospital.org',
    product: 'Hospital STP Plant',
    category: 'Water Treatment',
    application: 'Institutional',
    capacity: 'Custom (50 KLD)',
    city: 'Bilaspur',
    state: 'Chhattisgarh',
    message: 'Need MBBR STP plant proposal for 100-bed hospital setup with state pollution board clearance.',
    source: 'quote-form',
    status: 'Contacted',
    createdAt: '2025-01-14T14:15:00Z',
    updatedAt: '2025-01-14T16:00:00Z',
  },
  {
    id: 'lead-003',
    name: 'Suresh Agrawal (AquaPure Beverages)',
    phone: '+91 97550 11223',
    product: 'Mineral Water Plant',
    category: 'Bottling & Packaging',
    application: 'Commercial',
    capacity: '1000-2000 LPH',
    city: 'Durg',
    state: 'Chhattisgarh',
    message: 'Planning to launch packaged 1-litre drinking water brand. Need turn-key plant quote with bottle blowing and packaging.',
    source: 'quote-form',
    status: 'Quoted',
    createdAt: '2025-01-12T09:00:00Z',
    updatedAt: '2025-01-13T11:20:00Z',
  },
];

const statuses: LeadStatus[] = ['New', 'Contacted', 'Qualified', 'Quoted', 'Converted', 'Closed'];

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const updateLeadStatus = (id: string, newStatus: LeadStatus) => {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id
          ? { ...lead, status: newStatus, updatedAt: new Date().toISOString() }
          : lead
      )
    );
  };

  const filteredLeads =
    selectedStatus === 'all'
      ? leads
      : leads.filter((l) => l.status === selectedStatus);

  return (
    <div className="bg-surface/40 min-h-screen pt-[72px]">
      <div className="bg-navy text-white py-8 border-b border-border/20">
        <div className="container">
          <Link
            href="/admin"
            className="text-xs text-water-blue hover:underline flex items-center gap-1 mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-white">Quotation Leads & Inquiries</h1>
          <p className="text-white/60 text-xs mt-1">
            Track inquiries captured via the Smart Quote Generator and Contact form.
          </p>
        </div>
      </div>

      <div className="container py-8 space-y-6">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-surface p-4 rounded-2xl border border-border shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-text-muted shrink-0" />
            <button
              onClick={() => setSelectedStatus('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedStatus === 'all'
                  ? 'bg-eng-blue text-white'
                  : 'bg-surface text-white hover:bg-border/50'
              }`}
            >
              All Leads ({leads.length})
            </button>
            {statuses.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedStatus === st
                    ? 'bg-eng-blue text-white'
                    : 'bg-surface text-white hover:bg-border/50'
                }`}
              >
                {st} ({leads.filter((l) => l.status === st).length})
              </button>
            ))}
          </div>
        </div>

        {/* Leads List Cards */}
        <div className="space-y-4">
          {filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="bg-surface p-6 rounded-3xl border border-border shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      lead.status === 'New'
                        ? 'bg-blue-100 text-blue-700'
                        : lead.status === 'Contacted'
                        ? 'bg-amber-100 text-amber-700'
                        : lead.status === 'Quoted'
                        ? 'bg-purple-100 text-purple-700'
                        : lead.status === 'Converted'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    Status: {lead.status}
                  </span>
                  <span className="text-xs font-semibold text-eng-blue bg-ice-blue px-2.5 py-0.5 rounded-md">
                    {lead.product || 'General System'}
                  </span>
                  {lead.capacity && (
                    <span className="text-xs text-text-muted">Cap: {lead.capacity}</span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white">{lead.name}</h3>

                <div className="flex flex-wrap gap-4 text-xs text-text-muted">
                  <a
                    href={`tel:${lead.phone}`}
                    className="flex items-center gap-1 hover:text-eng-blue font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-eng-blue" />
                    {lead.phone}
                  </a>
                  {lead.email && (
                    <a
                      href={`mailto:${lead.email}`}
                      className="flex items-center gap-1 hover:text-eng-blue"
                    >
                      <Mail className="w-3.5 h-3.5 text-eng-blue" />
                      {lead.email}
                    </a>
                  )}
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-eng-blue" />
                    {lead.city}, {lead.state}
                  </span>
                </div>

                {lead.message && (
                  <p className="text-xs text-white bg-surface p-3 rounded-xl border border-border/80 leading-relaxed mt-2">
                    &ldquo;{lead.message}&rdquo;
                  </p>
                )}
              </div>

              {/* Status Action Dropdown */}
              <div className="shrink-0 flex flex-col items-end gap-2 border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
                  Update Lead Stage:
                </span>
                <select
                  value={lead.status}
                  onChange={(e) => updateLeadStatus(lead.id, e.target.value as LeadStatus)}
                  className="text-xs font-bold text-white bg-surface border border-border rounded-xl px-3 py-2 focus:outline-none focus:border-eng-blue"
                >
                  {statuses.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
                <span className="text-[10px] text-text-muted">
                  Received: {new Date(lead.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

