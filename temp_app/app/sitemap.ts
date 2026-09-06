import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { solutions } from '@/data/solutions';
import { industries } from '@/data/industries';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://blueshieldro.net';

  const staticPages = [
    '',
    '/about',
    '/products',
    '/solutions',
    '/industries',
    '/projects',
    '/gallery',
    '/faq',
    '/testimonials',
    '/contact',
    '/request-quote',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const productPages = products.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(p.updatedAt || p.createdAt),
    changeFrequency: 'monthly' as const,
    priority: p.isFeatured ? 0.9 : 0.7,
  }));

  const solutionPages = solutions.map((s) => ({
    url: `${baseUrl}/solutions/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const industryPages = industries.map((i) => ({
    url: `${baseUrl}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const projectPages = projects.map((proj) => ({
    url: `${baseUrl}/projects/${proj.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...solutionPages, ...industryPages, ...projectPages];
}
