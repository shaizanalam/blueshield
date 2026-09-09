import type { Project } from '@/types';

// NOTE: Replace with verified, real project data only.
// Do NOT publish fabricated project information.

export const projects: Project[] = [
  {
    id: 'proj-001',
    name: 'Industrial RO Installation',
    slug: 'industrial-ro-installation',
    location: 'Chhattisgarh',
    industry: 'Manufacturing',
    system: 'Industrial RO Plant',
    capacity: '1000 LPH',
    description: 'Complete industrial RO plant supply, installation and commissioning for a manufacturing facility.',
    scope: ['Plant Supply', 'Site Preparation Guidance', 'Installation', 'Commissioning', 'Training'],
    images: [{ url: '/images/projects/industrial-ro-install.jpg', alt: 'Industrial RO Installation Project', type: 'primary' }],
    isFeatured: true,
  },
  {
    id: 'proj-002',
    name: 'Commercial Water Treatment',
    slug: 'commercial-water-treatment-project',
    location: 'Raipur, Chhattisgarh',
    industry: 'Hospitality',
    system: 'Commercial RO System',
    capacity: '500 LPH',
    description: 'Commercial RO system installation for a hospitality establishment including water softening.',
    scope: ['Requirement Assessment', 'System Design', 'Equipment Supply', 'Installation', 'Water Testing'],
    images: [{ url: '/images/projects/commercial-wt.jpg', alt: 'Commercial Water Treatment Project', type: 'primary' }],
    isFeatured: true,
  },
  {
    id: 'proj-003',
    name: 'Mineral Water Plant Setup',
    slug: 'mineral-water-plant-setup',
    location: 'Chhattisgarh',
    industry: 'Water Business',
    system: 'Mineral Water Plant (RO + Filling + Packaging)',
    capacity: '1000 LPH',
    description: 'Complete packaged drinking water plant setup including RO treatment, ozone generator, bottle filling machine and packaging.',
    scope: ['Plant Design', 'Equipment Supply', 'Installation', 'Commissioning', 'Operator Training'],
    images: [{ url: '/images/projects/mineral-water-setup.jpg', alt: 'Mineral Water Plant Setup', type: 'primary' }],
    isFeatured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.isFeatured);
}
