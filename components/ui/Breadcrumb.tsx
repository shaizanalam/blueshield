import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 text-xs font-medium text-text-muted">
      <ol className="flex items-center flex-wrap gap-1.5">
        <li className="flex items-center">
          <Link href="/" className="hover:text-eng-blue transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-border shrink-0" />
              {isLast || !item.href ? (
                <span className="text-current font-semibold line-clamp-1">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-eng-blue transition-colors line-clamp-1">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

