'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Factory, Building2, GlassWater, Recycle, Waves, Home, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Factory, Building2, GlassWater, Recycle, Waves, Home,
};

const solutionItems = [
  {
    title: 'Industrial Water Treatment',
    description: 'RO plants, filtration, softening and purification systems for industrial applications.',
    icon: 'Factory',
    href: '/solutions/industrial-water-treatment',
    color: 'from-eng-blue/10 to-deep-blue/5',
  },
  {
    title: 'Commercial Water Systems',
    description: 'Solutions for offices, hotels, institutions and commercial facilities.',
    icon: 'Building2',
    href: '/solutions/commercial-water-systems',
    color: 'from-water-blue/10 to-eng-blue/5',
  },
  {
    title: 'Packaged Drinking Water',
    description: 'Complete mineral water plant and bottling equipment for water businesses.',
    icon: 'GlassWater',
    href: '/solutions/packaged-drinking-water',
    color: 'from-eng-blue/10 to-water-blue/5',
  },
  {
    title: 'Wastewater Treatment',
    description: 'STP and wastewater treatment solutions for hospitals and institutions.',
    icon: 'Recycle',
    href: '/solutions/wastewater-treatment',
    color: 'from-deep-blue/10 to-eng-blue/5',
  },
  {
    title: 'Swimming Pool Systems',
    description: 'Filtration, grating and maintenance for residential and commercial pools.',
    icon: 'Waves',
    href: '/solutions/swimming-pool-systems',
    color: 'from-water-blue/10 to-deep-blue/5',
  },
  {
    title: 'Domestic Water Purification',
    description: 'Purifiers, RO systems and replacement components for home use.',
    icon: 'Home',
    href: '/solutions/domestic-water-purification',
    color: 'from-eng-blue/5 to-water-blue/5',
  },
];

export function SolutionsGrid() {
  return (
    <section className="section section-alt">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow mb-3 block">Solutions</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Water Treatment Solutions for Every Application
          </h2>
          <p className="text-text-muted">
            From industrial plants to domestic purifiers, we provide complete water-treatment
            solutions engineered for performance and reliability.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutionItems.map((item, i) => {
            const Icon = iconMap[item.icon] || Factory;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group block p-6 rounded-xl bg-surface border border-border hover:border-eng-blue/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-eng-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-eng-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-eng-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

