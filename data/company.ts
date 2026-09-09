import type { CompanyInfo } from '@/types';

export const company: CompanyInfo = {
  name: 'BlueShield RO Industries',
  legalName: 'BlueShield RO Industries Private Limited',
  tagline: 'Water Treatment, Engineered Around Your Needs.',
  description:
    'BlueShield RO Industries designs, manufactures and supplies water-treatment systems for industrial, commercial and institutional applications. With dedicated manufacturing infrastructure, quality-controlled production and PAN India delivery, we engineer complete water solutions — from purification and softening to bottling and wastewater treatment.',
  founded: 2016,
  founder: 'Abdul Shamsher',
  founderTitle: 'Managing Director',
  address: {
    street: 'First Floor, 36–37, Samvet Shikhar Complex',
    city: 'Raipur',
    state: 'Chhattisgarh',
    pincode: '492001',
    country: 'India',
  },
  phone: undefined,       // To be provided by the business
  email: undefined,       // To be provided by the business
  whatsapp: undefined,    // To be provided by the business
  website: 'https://blueshieldro.net',
  gst: '22AAHCB0126E1ZH',
  nature: 'Manufacturer',
  legalStatus: 'Limited Company',
  employees: 'Up to 10',
  turnover: '₹1.5–5 Cr',
  infrastructure: [
    'Manufacturing Facility',
    'Quality Control Lab',
    'Warehouse & Storage',
    'Logistics Network',
    'Installation Teams',
    'Administrative Office',
  ],
};

export const companyFacts = [
  { label: 'Since', value: '2016', description: 'Raipur, India' },
  { label: 'Nature', value: 'Manufacturer', description: 'Water Treatment Systems' },
  { label: 'Delivery', value: 'PAN India', description: 'Delivery & Installation' },
  { label: 'Focus', value: 'Quality', description: 'Engineering' },
];

export const whyBlueShield = [
  {
    number: '01',
    title: 'Manufacturing Capability',
    description: 'In-house manufacturing with dedicated production infrastructure for water-treatment systems.',
  },
  {
    number: '02',
    title: 'Custom Solutions',
    description: 'Systems engineered around your specific capacity, application and site requirements.',
  },
  {
    number: '03',
    title: 'Installation Support',
    description: 'Professional installation, commissioning and on-site support for applicable systems.',
  },
  {
    number: '04',
    title: 'PAN India Delivery',
    description: 'Wide distribution network with logistics capability across India.',
  },
  {
    number: '05',
    title: 'Quality-Controlled Production',
    description: 'Quality checks from material procurement through final inspection and dispatch.',
  },
  {
    number: '06',
    title: 'Experienced Team',
    description: 'Professional team with expertise in water-treatment engineering and project execution.',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Understand',
    subtitle: 'Your Requirement',
    description: 'We study your water source, daily consumption, application and site conditions.',
  },
  {
    step: '02',
    title: 'Recommend',
    subtitle: 'The Right System',
    description: 'Our team suggests the most suitable treatment system based on your specific needs.',
  },
  {
    step: '03',
    title: 'Engineer',
    subtitle: 'The Solution',
    description: 'We design and manufacture the system to match your required capacity and specifications.',
  },
  {
    step: '04',
    title: 'Install &',
    subtitle: 'Commission',
    description: 'Professional installation, connection, testing and commissioning at your site.',
  },
  {
    step: '05',
    title: 'Support &',
    subtitle: 'Service',
    description: 'Ongoing maintenance support, spare parts supply and technical assistance.',
  },
];

export const qualityProcess = [
  'Material Inspection',
  'Production',
  'Quality Control',
  'Testing',
  'Final Inspection',
  'Dispatch',
];
