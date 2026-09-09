'use client';

import { useState } from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Camera, Layers, Factory, Wrench, Building, Users } from 'lucide-react';

const galleryCategories = [
  { id: 'all', label: 'All Photos' },
  { id: 'products', label: 'Products & Plants' },
  { id: 'manufacturing', label: 'Manufacturing & QC' },
  { id: 'installations', label: 'Field Installations' },
  { id: 'infrastructure', label: 'Infrastructure' },
];

const galleryItems = [
  { id: 1, category: 'products', title: '1000 LPH FRP RO Plant', caption: 'Automatic 4040 Membrane Assembly' },
  { id: 2, category: 'products', title: 'Stainless Steel RO Skid', caption: 'Food-grade SS 304 High Purity Unit' },
  { id: 3, category: 'manufacturing', title: 'High Pressure Pipe Welding', caption: 'Precision TIG Welding for SS Piping' },
  { id: 4, category: 'installations', title: 'Hospital STP Plant Commissioning', caption: 'MBBR Biological Aeration Tank' },
  { id: 5, category: 'products', title: 'Automatic Water Softener', caption: 'Digital Control Valve with Timer Regeneration' },
  { id: 6, category: 'manufacturing', title: 'Pressure Vessel Hydro-Testing', caption: 'Quality Control Rigorous Pressure Verification' },
  { id: 7, category: 'installations', title: 'Mineral Water Bottling Line', caption: '4-Nozzle Automatic Filling & Capping' },
  { id: 8, category: 'infrastructure', title: 'Raipur Assembly Facility', caption: 'Skid Mounting and Wiring Section' },
  { id: 9, category: 'products', title: 'DM Water Plant Mixed Bed', caption: 'Dual Column Ion Exchange Setup' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-surface/30 min-h-screen pt-[72px]">
      {/* Header Banner */}
      <div className="bg-navy text-white py-14 bg-grid-dark border-b border-border/20">
        <div className="container">
          <Breadcrumb items={[{ label: 'Photo Gallery' }]} />
          <div className="max-w-3xl mt-4">
            <span className="eyebrow text-water-blue mb-2 block">Facility & Systems</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Manufacturing & Project Gallery
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              Explore photographs of our equipment fabrication, pressure testing, field installations, and plant assemblies.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                selectedCategory === cat.id
                  ? 'bg-eng-blue text-white border-eng-blue shadow-sm'
                  : 'bg-surface text-text border-border hover:border-eng-blue/40 hover:text-eng-blue'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-surface rounded-3xl border border-border overflow-hidden shadow-sm group hover:border-eng-blue/30 hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/3] bg-surface relative overflow-hidden flex items-center justify-center p-6 text-center border-b border-border/80">
                <div className="space-y-1">
                  <Camera className="w-8 h-8 text-eng-blue/30 mx-auto mb-2" />
                  <p className="text-sm font-bold text-text">{item.title}</p>
                  <p className="text-xs text-text-muted">{item.caption}</p>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-eng-blue block mb-1">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-text group-hover:text-eng-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted mt-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

