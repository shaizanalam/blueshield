'use client';

import { motion } from 'framer-motion';
import { Calendar, Factory, Truck, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: Calendar, label: 'Since 2016', sublabel: 'Raipur, India' },
  { icon: Factory, label: 'Manufacturer', sublabel: 'Water Treatment Systems' },
  { icon: Truck, label: 'PAN India', sublabel: 'Delivery & Installation' },
  { icon: ShieldCheck, label: 'Quality Focused', sublabel: 'Engineering' },
];

export function TrustStrip() {
  return (
    <section className="relative bg-surface border-b border-border">
      <div className="container py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-ice-blue shrink-0">
                <stat.icon className="w-5 h-5 text-eng-blue" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">{stat.label}</p>
                <p className="text-xs text-text-muted">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

