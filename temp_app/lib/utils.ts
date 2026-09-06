import type { Product } from '@/types';

// ============================================================
// Utility Functions
// ============================================================

/** Merge class names, filtering falsy values */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/** Format price in INR */
export function formatPrice(price: number, unit?: string): string {
  if (price >= 100000) {
    const lakhs = price / 100000;
    return `₹${lakhs % 1 === 0 ? lakhs.toFixed(0) : lakhs.toFixed(2)} Lakh${unit ? ` ${unit}` : ''}`;
  }
  return `₹${price.toLocaleString('en-IN')}${unit ? ` ${unit}` : ''}`;
}

/** Generate URL slug */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Filter products by criteria */
export function filterProducts(
  products: Product[],
  filters: {
    category?: string;
    application?: string;
    capacity?: string;
    automation?: string;
    installation?: string;
    search?: string;
  }
): Product[] {
  let result = [...products];

  if (filters.category) {
    result = result.filter(p => p.category === filters.category);
  }

  if (filters.application) {
    result = result.filter(p =>
      p.application.some(a => a.toLowerCase() === filters.application!.toLowerCase())
    );
  }

  if (filters.capacity) {
    result = result.filter(p => {
      if (!p.capacityNumeric) return false;
      const cap = p.capacityNumeric;
      switch (filters.capacity) {
        case '<500': return cap < 500;
        case '500-1000': return cap >= 500 && cap <= 1000;
        case '1000-2000': return cap > 1000 && cap <= 2000;
        case '2000+': return cap > 2000;
        default: return true;
      }
    });
  }

  if (filters.automation) {
    result = result.filter(p => p.automation === filters.automation);
  }

  if (filters.installation) {
    result = result.filter(p => p.installation === filters.installation);
  }

  if (filters.search) {
    const query = filters.search.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.shortDescription.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      (p.subcategory && p.subcategory.toLowerCase().includes(query)) ||
      (p.capacity && p.capacity.toLowerCase().includes(query)) ||
      p.application.some(a => a.toLowerCase().includes(query)) ||
      p.seoKeywords.some(k => k.toLowerCase().includes(query))
    );
  }

  return result;
}

/** Sort products */
export function sortProducts(
  products: Product[],
  sortBy: 'relevance' | 'newest' | 'name' | 'price-asc' | 'price-desc' | 'capacity'
): Product[] {
  const sorted = [...products];

  switch (sortBy) {
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'newest':
      return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    case 'price-asc':
      return sorted.sort((a, b) => (a.price || Infinity) - (b.price || Infinity));
    case 'price-desc':
      return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
    case 'capacity':
      return sorted.sort((a, b) => (b.capacityNumeric || 0) - (a.capacityNumeric || 0));
    case 'relevance':
    default:
      return sorted.sort((a, b) => {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      });
  }
}

/** Get related products by slug */
export function getRelatedProducts(
  allProducts: Product[],
  currentSlug: string,
  limit: number = 4
): Product[] {
  const current = allProducts.find(p => p.slug === currentSlug);
  if (!current) return [];

  // First try explicit related products
  const explicit = current.relatedProducts
    .map(slug => allProducts.find(p => p.slug === slug))
    .filter((p): p is Product => p !== undefined);

  if (explicit.length >= limit) return explicit.slice(0, limit);

  // Fill with same-category products
  const sameCategory = allProducts
    .filter(p => p.slug !== currentSlug && p.category === current.category && !current.relatedProducts.includes(p.slug));

  return [...explicit, ...sameCategory].slice(0, limit);
}

/** Search products with fuzzy matching */
export function searchProducts(products: Product[], query: string): Product[] {
  if (!query.trim()) return [];

  const terms = query.toLowerCase().split(/\s+/);

  const scored = products.map(product => {
    let score = 0;
    const searchableText = [
      product.name,
      product.shortDescription,
      product.category,
      product.subcategory || '',
      product.capacity || '',
      ...product.application,
      ...product.seoKeywords,
      product.material || '',
      product.automation || '',
    ].join(' ').toLowerCase();

    for (const term of terms) {
      if (product.name.toLowerCase().includes(term)) score += 10;
      if (product.category.toLowerCase().includes(term)) score += 5;
      if (product.capacity?.toLowerCase().includes(term)) score += 8;
      if (product.application.some(a => a.toLowerCase().includes(term))) score += 4;
      if (searchableText.includes(term)) score += 1;
    }

    return { product, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(s => s.product);
}

/** Generate breadcrumb items */
export function getBreadcrumbs(
  segments: { label: string; href: string }[]
): { label: string; href: string }[] {
  return [{ label: 'Home', href: '/' }, ...segments];
}
