'use client';

import Link from 'next/link';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { company } from '@/data/company';

export function MobileStickyBar() {
  const callHref = company.phone ? `tel:${company.phone}` : '/contact';
  const whatsappHref = company.whatsapp 
    ? `https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello BlueShield, I would like to inquire about water treatment plant requirements.')}` 
    : '/contact';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-navy/95 backdrop-blur-xl border-t border-white/10 p-3 lg:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <Link
          href={callHref}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-surface/10 text-white border border-white/15 text-xs font-semibold hover:bg-surface/20 active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-water-blue" />
          <span>Call Sales</span>
        </Link>
        <Link
          href={whatsappHref}
          target={company.whatsapp ? '_blank' : undefined}
          rel={company.whatsapp ? 'noopener noreferrer' : undefined}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-900/50 active:scale-95 transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp</span>
        </Link>
        <Link
          href="/request-quote"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-eng-blue to-water-blue text-white text-xs font-bold shadow-lg shadow-eng-blue/30 active:scale-95 transition-all"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Quote</span>
        </Link>
      </div>
    </div>
  );
}
