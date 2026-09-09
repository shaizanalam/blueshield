import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { testimonials } from '@/data/testimonials';
import { Quote, Star, Building2, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Client Testimonials & Reviews | BlueShield RO Industries',
  description: 'Verified feedback from commercial, industrial, and institutional clients across India who rely on BlueShield water treatment engineering.',
};

export default function TestimonialsPage() {
  return (
    <div className="bg-surface/30 min-h-screen pt-[72px]">
      {/* Header Banner */}
      <div className="bg-navy text-white py-14 bg-grid-dark border-b border-border/20">
        <div className="container">
          <Breadcrumb items={[{ label: 'Testimonials' }]} />
          <div className="max-w-3xl mt-4">
            <span className="eyebrow text-water-blue mb-2 block">Customer Experiences</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Client Testimonials & Feedback
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              Read feedback from commercial facilities, hospitality establishments, hospitals, and water plant entrepreneurs partnering with BlueShield RO Industries.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-surface p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-10 h-10 text-eng-blue/20" />
                  <div className="flex gap-1">
                    {Array.from({ length: item.rating || 5 }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-base text-white leading-relaxed italic mb-8">
                  &ldquo;{item.testimonial}&rdquo;
                </p>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-base font-bold text-white">{item.customerName}</p>
                <div className="flex items-center gap-3 text-xs text-text-muted mt-1">
                  {item.company && (
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-eng-blue" />
                      {item.company}
                    </span>
                  )}
                  {item.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-eng-blue" />
                      {item.location}
                    </span>
                  )}
                </div>
                {item.product && (
                  <span className="inline-block mt-3 text-xs font-semibold text-eng-blue bg-ice-blue px-3 py-1 rounded-md">
                    System: {item.product}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-navy text-white p-8 sm:p-12 rounded-3xl text-center space-y-4 max-w-3xl mx-auto bg-grid-dark">
          <h3 className="text-2xl font-bold text-white">Experience BlueShield Reliability</h3>
          <p className="text-xs sm:text-sm text-white/70">
            Let our engineering team configure a high-efficiency water system for your facility.
          </p>
          <div className="pt-2">
            <Link href="/request-quote" className="btn btn-primary btn-lg">
              Request Your System Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

