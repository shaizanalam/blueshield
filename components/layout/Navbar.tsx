'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Search, Phone } from 'lucide-react';
import { categories } from '@/data/categories';

const navLinks = [
  { label: 'Products', href: '/products', hasMega: true },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  const isHomePage = pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-surface/90 backdrop-blur-xl shadow-xs border-b border-border/50'
      }`}
    >
      <nav className="container flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="BlueShield RO Industries Home">
          <Image 
            src="/images/logo.png" 
            alt="BlueShield Logo" 
            width={44} 
            height={44} 
            className="w-11 h-11 object-contain"
            priority
          />
          <div className="flex flex-col">
            <span className={`text-lg font-bold font-display leading-tight tracking-tight transition-colors ${
              isTransparent ? 'text-white' : 'text-text'
            }`}>
              BlueShield
            </span>
            <span className={`text-[10px] font-medium tracking-[0.15em] uppercase leading-none transition-colors ${
              isTransparent ? 'text-white/70' : 'text-text-muted'
            }`}>
              RO Industries
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.hasMega && setIsMegaOpen(true)}
              onMouseLeave={() => link.hasMega && setIsMegaOpen(false)}
              ref={link.hasMega ? megaRef : undefined}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isTransparent
                    ? 'text-white/90 hover:text-white hover:bg-surface/10'
                    : 'text-text hover:text-eng-blue hover:bg-ice-blue/50'
                }`}
              >
                {link.label}
                {link.hasMega && <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMegaOpen ? 'rotate-180' : ''}`} />}
              </Link>

              {/* Mega Menu */}
              {link.hasMega && isMegaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] mt-2 bg-surface rounded-xl shadow-xl border border-border p-6 grid grid-cols-3 gap-6 animate-[fadeIn_0.15s_ease-out]">
                  {categories.map((cat) => (
                    <div key={cat.id}>
                      <Link
                        href={`/products?category=${cat.slug}`}
                        className="text-sm font-semibold text-text hover:text-eng-blue transition-colors"
                      >
                        {cat.name}
                      </Link>
                      <ul className="mt-2 space-y-1.5">
                        {cat.subcategories.slice(0, 4).map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              href={`/products?category=${cat.slug}&sub=${sub.slug}`}
                              className="text-sm text-text-muted hover:text-eng-blue transition-colors"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-3 pt-4 border-t border-border">
                    <Link
                      href="/products"
                      className="text-sm font-semibold text-eng-blue hover:text-deep-blue transition-colors"
                    >
                      View All Products →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/products"
            className={`p-2 rounded-lg transition-colors ${
              isTransparent ? 'text-white/80 hover:text-white hover:bg-surface/10' : 'text-text-muted hover:text-eng-blue hover:bg-ice-blue/50'
            }`}
            aria-label="Search Products"
          >
            <Search className="w-5 h-5" />
          </Link>
          <Link
            href="/request-quote"
            className="btn btn-primary btn-sm"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Right Actions (Search + Menu Toggle) */}
        <div className="flex items-center gap-1 lg:hidden">
          <Link
            href="/products"
            className={`p-2 rounded-lg transition-colors ${
              isMobileOpen || !isTransparent ? 'text-text hover:text-eng-blue' : 'text-white hover:text-white/80'
            }`}
            aria-label="Search Products"
          >
            <Search className="w-5 h-5" />
          </Link>
          <button
            className={`p-2 rounded-lg transition-colors ${
              isMobileOpen || !isTransparent ? 'text-text' : 'text-white'
            }`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-surface z-40 overflow-y-auto animate-[fadeIn_0.2s_ease-out] flex flex-col justify-between">
          <div className="p-4 sm:p-6 space-y-4">
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 pb-3 border-b border-border">
              <Link
                href="/request-quote"
                onClick={() => setIsMobileOpen(false)}
                className="btn btn-primary w-full justify-center text-xs py-2.5"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="btn btn-secondary w-full justify-center text-xs py-2.5"
              >
                <Phone className="w-3.5 h-3.5" />
                Contact
              </Link>
            </div>

            {/* Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                      isActive
                        ? 'bg-ice-blue/80 text-eng-blue font-semibold'
                        : 'text-text hover:bg-surface/80'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.hasMega ? (
                      <ChevronDown className="w-4 h-4 text-text-muted" />
                    ) : (
                      <span className="text-xs text-text-muted font-normal">→</span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Product Categories on Mobile */}
            <div className="pt-4 border-t border-border">
              <p className="px-4 py-2 text-xs font-bold text-text-muted uppercase tracking-wider">
                Product Categories
              </p>
              <div className="grid grid-cols-2 gap-2 mt-1 px-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/products?category=${cat.slug}`}
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2.5 rounded-xl bg-white border border-border text-xs font-medium text-text hover:text-eng-blue hover:border-eng-blue/30 transition-all text-center"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Footer Strip */}
          <div className="p-4 bg-surface/50 border-t border-border text-center text-xs text-text-muted">
            <p className="font-semibold text-text">BlueShield RO Industries</p>
            <p className="text-[11px] mt-0.5">Raipur, Chhattisgarh • PAN India Delivery</p>
          </div>
        </div>
      )}
    </header>
  );
}

