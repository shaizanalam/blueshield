import type { Testimonial } from '@/types';

// NOTE: These are placeholder testimonials. Replace with verified, genuine customer testimonials only.
// Do NOT publish fabricated testimonials in production.

export const testimonials: Testimonial[] = [
  {
    id: 'test-001',
    customerName: 'Verified Customer',
    company: 'Manufacturing Unit',
    location: 'Chhattisgarh',
    product: 'Industrial RO Plant',
    testimonial: 'The industrial RO plant has been running smoothly since installation. The BlueShield team handled everything from site assessment to commissioning. Good after-sales support.',
    rating: 5,
    isFeatured: true,
  },
  {
    id: 'test-002',
    customerName: 'Verified Customer',
    company: 'Hotel',
    location: 'Raipur',
    product: 'Commercial RO Plant',
    testimonial: 'We installed a commercial RO system for our hotel kitchen and guest drinking water. The water quality has been consistent and the system requires minimal maintenance.',
    rating: 5,
    isFeatured: true,
  },
  {
    id: 'test-003',
    customerName: 'Verified Customer',
    company: 'Water Business',
    location: 'Chhattisgarh',
    product: 'Mineral Water Plant',
    testimonial: 'BlueShield helped us set up our packaged drinking water plant. From the RO system to the filling machine, everything was provided as a single solution. Very helpful team.',
    rating: 4,
    isFeatured: true,
  },
  {
    id: 'test-004',
    customerName: 'Verified Customer',
    company: 'Hospital',
    location: 'Raipur',
    product: 'Water Treatment Plant',
    testimonial: 'Reliable water treatment system with good technical support. The team understood our hospital requirements and delivered accordingly.',
    rating: 5,
    isFeatured: true,
  },
];

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter(t => t.isFeatured);
}
