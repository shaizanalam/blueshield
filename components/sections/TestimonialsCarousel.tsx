'use client';

import { motion } from 'framer-motion';
import { Quote, Star, Building2, MapPin } from 'lucide-react';
import { getFeaturedTestimonials } from '@/data/testimonials';

export function TestimonialsCarousel() {
  const testimonials = getFeaturedTestimonials();

  return (
    <section className="section bg-surface">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow mb-3 block">Client Feedback</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Commercial & Industrial Clients
          </h2>
          <p className="text-text-muted">
            Hear from businesses and facilities that rely on BlueShield water treatment engineering daily.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-eng-blue/20" />
                  <div className="flex gap-1">
                    {Array.from({ length: item.rating || 5 }).map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-text leading-relaxed italic mb-6">
                  &ldquo;{item.testimonial}&rdquo;
                </p>
              </div>

              <div className="border-t border-border/80 pt-4">
                <p className="text-sm font-bold text-white">{item.customerName}</p>
                <div className="flex items-center gap-2 text-xs text-text-muted mt-0.5">
                  {item.company && (
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-eng-blue" />
                      {item.company}
                    </span>
                  )}
                  {item.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-eng-blue" />
                      {item.location}
                    </span>
                  )}
                </div>
                {item.product && (
                  <span className="inline-block mt-2 text-[11px] font-semibold text-eng-blue bg-ice-blue px-2 py-0.5 rounded">
                    {item.product}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

