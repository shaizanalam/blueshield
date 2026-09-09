import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { company } from '@/data/company';

const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'FAQ', href: '/faq' },
  ],
  products: [
    { label: 'RO Plants', href: '/products?category=ro-plants' },
    { label: 'Water Treatment', href: '/products?category=water-treatment' },
    { label: 'Water Softeners', href: '/products?category=water-softeners' },
    { label: 'Water Purifiers', href: '/products?category=water-purifiers' },
    { label: 'Bottling & Packaging', href: '/products?category=bottling-packaging' },
    { label: 'Spare Parts', href: '/products?category=spare-parts' },
  ],
  solutions: [
    { label: 'Industrial', href: '/solutions/industrial-water-treatment' },
    { label: 'Commercial', href: '/solutions/commercial-water-systems' },
    { label: 'Packaged Water', href: '/solutions/packaged-drinking-water' },
    { label: 'Wastewater', href: '/solutions/wastewater-treatment' },
    { label: 'Swimming Pool', href: '/solutions/swimming-pool-systems' },
    { label: 'Domestic', href: '/solutions/domestic-water-purification' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Request Quote', href: '/request-quote' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/images/logo.png" 
                alt="BlueShield Logo" 
                width={48} 
                height={48} 
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight tracking-tight">BlueShield</span>
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase leading-none text-white/60">
                  RO Industries
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Water-treatment systems manufacturer in Raipur, Chhattisgarh. We design, manufacture and supply RO plants,
              purifiers, softeners, filtration and bottling equipment with PAN India delivery.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-water-blue mt-0.5 shrink-0" />
                <p className="text-sm text-white/70">
                  {company.address.street}<br />
                  {company.address.city} – {company.address.pincode}<br />
                  {company.address.state}, {company.address.country}
                </p>
              </div>
              {company.phone && (
                <a href={`tel:${company.phone}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-water-blue transition-colors">
                  <Phone className="w-4 h-4 text-water-blue shrink-0" />
                  {company.phone}
                </a>
              )}
              {company.email && (
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-water-blue transition-colors">
                  <Mail className="w-4 h-4 text-water-blue shrink-0" />
                  {company.email}
                </a>
              )}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-water-blue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Products</h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-water-blue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-water-blue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Support</h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-water-blue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-water-blue hover:text-white transition-colors"
              >
                Request a Quote
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} BlueShield RO Industries Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-white/30">
            <span>Manufacturer</span>
            <span>·</span>
            <span>Raipur, Chhattisgarh</span>
            <span>·</span>
            <span>Since 2016</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
