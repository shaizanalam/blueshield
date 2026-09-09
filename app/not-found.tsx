import Link from 'next/link';
import { Droplets, Home, Search, PhoneCall } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-surface/30 min-h-screen pt-[72px] flex items-center justify-center py-16">
      <div className="container max-w-lg text-center space-y-6 bg-surface p-8 sm:p-12 rounded-3xl border border-border shadow-lg">
        <div className="w-16 h-16 rounded-2xl bg-ice-blue flex items-center justify-center mx-auto text-eng-blue">
          <Droplets className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="eyebrow block">404 Error</span>
          <h1 className="text-3xl font-bold text-text">Page or System Not Found</h1>
          <p className="text-sm text-text-muted leading-relaxed">
            The water-treatment page or catalog item you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4 border-t border-border">
          <Link href="/" className="btn btn-primary btn-sm justify-center">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="/products" className="btn btn-secondary btn-sm justify-center">
            <Search className="w-4 h-4" />
            Explore Products
          </Link>
          <Link href="/contact" className="btn btn-ghost btn-sm justify-center">
            <PhoneCall className="w-4 h-4" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

