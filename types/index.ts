// ============================================================
// BlueShield RO Industries — Type Definitions
// ============================================================

// --- Product System ---

export interface ProductImage {
  url: string;
  alt: string;
  type: 'primary' | 'gallery' | 'thumbnail';
}

export interface Specification {
  label: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  shortDescription: string;
  description: string;
  images: ProductImage[];
  price?: number;
  priceUnit?: string;
  priceDisplay?: string;
  priceVisibility: 'visible' | 'on-request' | 'hidden';
  capacity?: string;
  capacityUnit?: string;
  capacityNumeric?: number;
  application: string[];
  automation?: 'Manual' | 'Semi-Automatic' | 'Automatic';
  material?: string;
  installation: 'Available' | 'Not Required' | 'On Request';
  delivery: string;
  minimumOrderQuantity?: string;
  countryOfOrigin: string;
  warranty?: string;
  features: string[];
  specifications: Specification[];
  applications: string[];
  processFlow?: string[];
  faq: FAQItem[];
  relatedProducts: string[]; // slugs
  isFeatured: boolean;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  createdAt: string;
  updatedAt: string;
}

// --- Category System ---

export interface Subcategory {
  name: string;
  slug: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string; // Lucide icon name
  subcategories: Subcategory[];
  productCount?: number;
}

// --- Solutions ---

export interface Solution {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  problem: string;
  solutionText: string;
  icon: string;
  image: string;
  recommendedSystems: string[];
  relevantProducts: string[]; // product slugs
  processFlow: string[];
  applications: string[];
  capacityOptions?: string[];
  seoTitle: string;
  seoDescription: string;
}

// --- Industries ---

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  requirements: string[];
  recommendedSolutions: string[]; // solution slugs
  relevantProducts: string[]; // product slugs
  typicalApplications: string[];
  seoTitle: string;
  seoDescription: string;
}

// --- Projects ---

export interface Project {
  id: string;
  name: string;
  slug: string;
  location: string;
  industry: string;
  system: string;
  capacity?: string;
  description: string;
  scope: string[];
  images: ProductImage[];
  completionDate?: string;
  isFeatured: boolean;
}

// --- Testimonials ---

export interface Testimonial {
  id: string;
  customerName: string;
  company?: string;
  location?: string;
  product?: string;
  testimonial: string;
  rating?: number;
  isFeatured: boolean;
}

// --- Gallery ---

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  category: 'manufacturing' | 'products' | 'installations' | 'team' | 'infrastructure' | 'projects';
  caption?: string;
}

// --- Lead / Quote System ---

export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Quoted' | 'Converted' | 'Closed';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  product?: string;
  category?: string;
  application: string;
  capacity?: string;
  city: string;
  state: string;
  message?: string;
  source: 'quote-form' | 'contact-form' | 'product-inquiry';
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
}

// --- Form Data ---

export interface QuoteFormData {
  requirement: string;
  application: string;
  capacity: string;
  city: string;
  state: string;
  name: string;
  phone: string;
  email?: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  product?: string;
  requirement?: string;
}

// --- Company ---

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  founded: number;
  founder: string;
  founderTitle: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  phone?: string;
  email?: string;
  whatsapp?: string;
  website: string;
  gst?: string;
  nature: string;
  legalStatus: string;
  employees: string;
  turnover: string;
  infrastructure: string[];
}

// --- Navigation ---

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface MegaMenuCategory {
  name: string;
  href: string;
  items: { name: string; href: string }[];
}
