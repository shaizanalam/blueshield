import type { Solution } from '@/types';

export const solutions: Solution[] = [
  {
    id: 'industrial-water-treatment',
    name: 'Industrial Water Treatment',
    slug: 'industrial-water-treatment',
    tagline: 'Industrial Water Treatment Without the Complexity.',
    description:
      'Complete industrial water-treatment solutions including reverse osmosis, filtration, softening, DM water generation and wastewater treatment. Designed for manufacturing, processing and heavy-duty applications.',
    problem:
      'Industrial processes require reliable, high-capacity water treatment. Untreated or poorly treated water leads to equipment damage, production downtime, regulatory issues and increased maintenance costs.',
    solutionText:
      'BlueShield provides turnkey industrial water-treatment systems engineered for your specific capacity, water source and application requirements. From RO plants to DM water and STP systems, we handle design, manufacturing, installation and commissioning.',
    icon: 'Factory',
    image: '/images/solutions/industrial.jpg',
    recommendedSystems: [
      'Industrial RO Plants',
      'Water Softening Systems',
      'DM Water Plants',
      'Ultrafiltration Systems',
      'STP Plants',
      'Filtration Systems',
    ],
    relevantProducts: [
      'industrial-ro-plant',
      'ss-ro-plant',
      'water-filtration-plant',
      'dm-water-plant',
      'ultrafiltration-system',
      'industrial-water-softener',
      'hospital-stp-plant',
    ],
    processFlow: [
      'Raw Water Intake',
      'Pre-Treatment & Filtration',
      'Reverse Osmosis',
      'Post-Treatment',
      'Storage & Distribution',
    ],
    applications: [
      'Manufacturing Plants',
      'Processing Facilities',
      'Power Plants',
      'Pharmaceutical',
      'Chemical Industry',
      'Food & Beverage',
    ],
    capacityOptions: ['500 LPH', '1000 LPH', '2000 LPH', '5000 LPH', '10000+ LPH'],
    seoTitle: 'Industrial Water Treatment Solutions | BlueShield RO Industries',
    seoDescription:
      'Complete industrial water-treatment systems — RO plants, filtration, softening, DM water and STP. Manufactured and installed by BlueShield RO Industries, Raipur.',
  },
  {
    id: 'commercial-water-systems',
    name: 'Commercial Water Systems',
    slug: 'commercial-water-systems',
    tagline: 'Reliable Water Systems for Commercial Facilities.',
    description:
      'Water purification, softening and treatment solutions for offices, hotels, restaurants, hospitals, schools and commercial buildings.',
    problem:
      'Commercial facilities need consistent, safe drinking water for employees, guests and patients. Generic solutions often fail to meet capacity requirements or water quality standards.',
    solutionText:
      'BlueShield offers commercial-grade RO systems, water purifiers and softeners sized for your facility. Our solutions ensure reliable water quality with minimal maintenance.',
    icon: 'Building2',
    image: '/images/solutions/commercial.jpg',
    recommendedSystems: [
      'Commercial RO Plants',
      'Commercial Water Purifiers',
      'Water Softeners',
      'Filtration Systems',
    ],
    relevantProducts: [
      'commercial-ro-plant',
      'commercial-ro-water-purifier',
      'domestic-water-softener',
      'automatic-water-softener',
    ],
    processFlow: [
      'Water Source Analysis',
      'System Sizing',
      'Installation',
      'Water Quality Testing',
      'Ongoing Maintenance',
    ],
    applications: [
      'Hotels & Resorts',
      'Restaurants & Cafes',
      'Offices & Co-working',
      'Hospitals & Clinics',
      'Schools & Colleges',
      'Commercial Complexes',
    ],
    seoTitle: 'Commercial Water Treatment Solutions | BlueShield RO Industries',
    seoDescription:
      'Commercial water purification and treatment systems for hotels, hospitals, offices and institutions. BlueShield RO Industries, Raipur.',
  },
  {
    id: 'packaged-drinking-water',
    name: 'Packaged Drinking Water',
    slug: 'packaged-drinking-water',
    tagline: 'Build Your Water Business With the Right Plant.',
    description:
      'Complete packaged drinking water plant solutions — from water treatment to bottling, capping and packaging. Everything you need to start or expand a water business.',
    problem:
      'Starting a packaged water business requires multiple integrated systems — RO treatment, ozone disinfection, filling, capping and packaging. Sourcing these separately leads to compatibility issues and higher costs.',
    solutionText:
      'BlueShield provides end-to-end mineral water plant solutions. We supply the complete ecosystem — RO plant, ozone generator, bottle filling machine, PET blowing machine and pouch packing machine — as an integrated package.',
    icon: 'GlassWater',
    image: '/images/solutions/packaged-water.jpg',
    recommendedSystems: [
      'Mineral Water Plants',
      'RO Plants',
      'Ozone Generators',
      'Bottle Filling Machines',
      'PET Blowing Machines',
      'Pouch Packing Machines',
    ],
    relevantProducts: [
      'mineral-water-plant',
      '1000-lph-frp-ro-plant',
      'ozone-generator-system',
      'bottle-filling-machine',
      'pet-bottle-blowing-machine',
      'water-pouch-packing-machine',
      'water-bottling-machine',
    ],
    processFlow: [
      'Raw Water',
      'Pre-Treatment',
      'Reverse Osmosis',
      'UV / Ozone Treatment',
      'Storage',
      'Bottle Filling',
      'Capping',
      'Packaging',
    ],
    applications: [
      'Mineral Water Plants',
      'Packaged Drinking Water',
      'Water Pouch Businesses',
      'Bottling Plants',
      'Water Distribution',
    ],
    capacityOptions: ['500 LPH', '1000 LPH', '2000 LPH', '5000 LPH'],
    seoTitle: 'Packaged Drinking Water Plant Solutions | BlueShield RO Industries',
    seoDescription:
      'Complete mineral water plant setup — RO, ozone, filling, blowing and packaging equipment. Start your water business with BlueShield RO Industries.',
  },
  {
    id: 'wastewater-treatment',
    name: 'Wastewater Treatment',
    slug: 'wastewater-treatment',
    tagline: 'Responsible Wastewater Management, Engineered Right.',
    description:
      'Sewage treatment plants (STP) and wastewater solutions for hospitals, institutions and industrial facilities.',
    problem:
      'Untreated wastewater creates environmental hazards and regulatory violations. Industrial and institutional facilities need compliant, efficient wastewater treatment.',
    solutionText:
      'BlueShield provides MBBR-based and conventional STP systems designed for your wastewater volume and discharge requirements. Our solutions include installation, commissioning and support.',
    icon: 'Recycle',
    image: '/images/solutions/wastewater.jpg',
    recommendedSystems: [
      'STP Plants',
      'MBBR Systems',
      'Filtration Systems',
    ],
    relevantProducts: ['hospital-stp-plant', 'water-filtration-plant'],
    processFlow: [
      'Wastewater Collection',
      'Screening & Primary Treatment',
      'Biological Treatment (MBBR)',
      'Secondary Clarification',
      'Disinfection',
      'Treated Water Discharge',
    ],
    applications: [
      'Hospitals',
      'Hotels & Resorts',
      'Industrial Facilities',
      'Housing Complexes',
      'Institutions',
    ],
    seoTitle: 'Wastewater Treatment & STP Plants | BlueShield RO Industries',
    seoDescription:
      'Sewage treatment plants and wastewater solutions for hospitals, industries and institutions. BlueShield RO Industries, Raipur.',
  },
  {
    id: 'swimming-pool-systems',
    name: 'Swimming Pool Systems',
    slug: 'swimming-pool-systems',
    tagline: 'Clean, Safe Pool Water — Engineered Solutions.',
    description:
      'Swimming pool filtration, grating and maintenance services for residential, commercial and institutional pools.',
    problem:
      'Poor pool water quality creates health risks and maintenance headaches. Without proper filtration and treatment, pools require frequent chemical dosing and manual cleaning.',
    solutionText:
      'BlueShield provides complete swimming pool water management — filtration systems, pool grating and ongoing maintenance services to keep your pool water clean and safe.',
    icon: 'Waves',
    image: '/images/solutions/swimming-pool.jpg',
    recommendedSystems: [
      'Pool Filtration Systems',
      'Pool Grating',
      'Pool Maintenance Services',
    ],
    relevantProducts: ['swimming-pool-filtration', 'swimming-pool-grating', 'swimming-pool-maintenance'],
    processFlow: [
      'Water Circulation',
      'Filtration',
      'Chemical Treatment',
      'Heating (optional)',
      'Return to Pool',
    ],
    applications: [
      'Hotels & Resorts',
      'Residential Complexes',
      'Sports Facilities',
      'Clubs',
      'Institutions',
    ],
    seoTitle: 'Swimming Pool Filtration & Maintenance | BlueShield RO Industries',
    seoDescription:
      'Swimming pool filtration systems, grating and maintenance services. BlueShield RO Industries, Raipur.',
  },
  {
    id: 'domestic-water-purification',
    name: 'Domestic Water Purification',
    slug: 'domestic-water-purification',
    tagline: 'Pure Water for Your Home.',
    description:
      'Domestic RO water purifiers, water softeners and replacement components for residential use.',
    problem:
      'Household water often contains dissolved solids, hardness and contaminants that affect taste, health and appliance lifespan.',
    solutionText:
      'BlueShield offers domestic RO purifiers, water softeners and a complete range of replacement spare parts — membranes, pumps and filters — for home water treatment.',
    icon: 'Home',
    image: '/images/solutions/domestic.jpg',
    recommendedSystems: [
      'Domestic RO Purifiers',
      'Water Softeners',
      'RO Spare Parts',
    ],
    relevantProducts: [
      'ro-uv-uf-water-purifier',
      'residential-water-softener',
      'domestic-ro-spare-parts',
      'domestic-ro-membrane',
      'domestic-ro-water-pump',
    ],
    processFlow: [
      'Tap Water',
      'Sediment Filter',
      'Carbon Filter',
      'RO Membrane',
      'UV / UF Treatment',
      'Purified Drinking Water',
    ],
    applications: [
      'Homes & Apartments',
      'Kitchens',
      'Drinking Water',
    ],
    seoTitle: 'Domestic Water Purifiers & Softeners | BlueShield RO Industries',
    seoDescription:
      'Domestic RO water purifiers, water softeners and spare parts for home use. BlueShield RO Industries, Raipur.',
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find(s => s.slug === slug);
}
