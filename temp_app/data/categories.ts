import type { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'ro-plants',
    name: 'RO Plants',
    slug: 'ro-plants',
    description: 'Industrial, commercial and FRP/SS reverse osmosis plants for water purification.',
    icon: 'Droplets',
    subcategories: [
      { name: 'FRP RO Plants', slug: 'frp-ro-plants' },
      { name: 'SS RO Plants', slug: 'ss-ro-plants' },
      { name: 'Industrial RO Plants', slug: 'industrial-ro-plants' },
      { name: 'Commercial RO Plants', slug: 'commercial-ro-plants' },
    ],
  },
  {
    id: 'water-treatment',
    name: 'Water Treatment',
    slug: 'water-treatment',
    description: 'Filtration, ultrafiltration, DM, STP and DEF treatment plants.',
    icon: 'FlaskConical',
    subcategories: [
      { name: 'Water Treatment Plants', slug: 'water-treatment-plants' },
      { name: 'Filtration Systems', slug: 'filtration-systems' },
      { name: 'Ultrafiltration', slug: 'ultrafiltration' },
      { name: 'DM Water Plants', slug: 'dm-water-plants' },
      { name: 'STP Plants', slug: 'stp-plants' },
      { name: 'DEF Plants', slug: 'def-plants' },
    ],
  },
  {
    id: 'water-softeners',
    name: 'Water Softeners',
    slug: 'water-softeners',
    description: 'Residential, domestic, automatic and industrial water softening systems.',
    icon: 'Waves',
    subcategories: [
      { name: 'Residential', slug: 'residential-water-softener' },
      { name: 'Domestic', slug: 'domestic-water-softener' },
      { name: 'Automatic', slug: 'automatic-water-softener' },
      { name: 'Industrial', slug: 'industrial-water-softener' },
    ],
  },
  {
    id: 'water-purifiers',
    name: 'Water Purifiers',
    slug: 'water-purifiers',
    description: 'Commercial, industrial and domestic RO / UV / UF water purifiers.',
    icon: 'ShieldCheck',
    subcategories: [
      { name: 'Commercial', slug: 'commercial-purifier' },
      { name: 'Industrial', slug: 'industrial-purifier' },
      { name: 'Domestic', slug: 'domestic-purifier' },
      { name: 'RO / UV / UF', slug: 'ro-uv-uf-purifier' },
    ],
  },
  {
    id: 'bottling',
    name: 'Bottling & Packaging',
    slug: 'bottling-packaging',
    description: 'Mineral water plants, bottle filling, blowing and pouch packing machines.',
    icon: 'Package',
    subcategories: [
      { name: 'Mineral Water Plants', slug: 'mineral-water-plants' },
      { name: 'Bottle Filling Machines', slug: 'bottle-filling-machines' },
      { name: 'PET Bottle Blowing', slug: 'pet-bottle-blowing' },
      { name: 'Pouch Packing', slug: 'pouch-packing' },
      { name: 'Ozone Generators', slug: 'ozone-generators' },
    ],
  },
  {
    id: 'spare-parts',
    name: 'Spare Parts & Components',
    slug: 'spare-parts',
    description: 'Domestic and industrial RO spare parts, membranes, pumps and resins.',
    icon: 'Cog',
    subcategories: [
      { name: 'Domestic RO Spares', slug: 'domestic-ro-spares' },
      { name: 'RO Membranes', slug: 'ro-membranes' },
      { name: 'RO Pumps', slug: 'ro-pumps' },
      { name: 'Industrial Resin', slug: 'industrial-resin' },
      { name: 'DM Resin', slug: 'dm-resin' },
    ],
  },
  {
    id: 'swimming-pool',
    name: 'Swimming Pool',
    slug: 'swimming-pool',
    description: 'Pool filtration systems, grating and maintenance services.',
    icon: 'Sunset',
    subcategories: [
      { name: 'Pool Filtration', slug: 'pool-filtration' },
      { name: 'Pool Grating', slug: 'pool-grating' },
      { name: 'Pool Maintenance', slug: 'pool-maintenance' },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}
