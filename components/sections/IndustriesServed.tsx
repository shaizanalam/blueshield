'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Factory, Hotel, Heart, GraduationCap, Building, Store, Home, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Factory, Hotel, Heart, GraduationCap, Building, Store, Home,
};

const industryItems = [
  { name: 'Manufacturing', icon: 'Factory', href: '/industries/manufacturing', desc: 'Process water & treatment' },
  { name: 'Hospitality', icon: 'Hotel', href: '/industries/hospitality', desc: 'Hotels, restaurants & resorts' },
  { name: 'Healthcare', icon: 'Heart', href: '/industries/healthcare', desc: 'Hospitals & medical facilities' },
  { name: 'Education', icon: 'GraduationCap', href: '/industries/education', desc: 'Schools & institutions' },
  { name: 'Commercial', icon: 'Building', href: '/industries/commercial', desc: 'Offices & commercial buildings' },
  { name: 'Water Businesses', icon: 'Store', href: '/industries/water-businesses', desc: 'Packaged water & bottling' },
  { name: 'Residential', icon: 'Home', href: '/industries/residential', desc: 'Domestic purification & softening' },
];

export function IndustriesServed() {
  return (
    <section className="section section-alt">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow mb-3 block">Industries</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Industries We Serve</h2>
          <p className="text-text-muted">
            Water-treatment solutions designed for the specific requirements of each industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {industryItems.map((item, i) => {
            const Icon = iconMap[item.icon] || Factory;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="group flex flex-col items-center text-center p-5 rounded-xl bg-surface border border-border hover:border-eng-blue/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-ice-blue flex items-center justify-center mb-3 group-hover:bg-eng-blue/10 transition-colors">
                    <Icon className="w-6 h-6 text-eng-blue" />
                  </div>
                  <p className="text-sm font-semibold text-text group-hover:text-eng-blue transition-colors">{item.name}</p>
                  <p className="text-[11px] text-text-muted mt-1 leading-snug">{item.desc}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

