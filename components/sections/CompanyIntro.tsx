'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, ShieldCheck, Warehouse, Truck, Cpu, HardHat } from 'lucide-react';

const capabilities = [
  { icon: Wrench, label: 'Manufacturing' },
  { icon: ShieldCheck, label: 'Quality Control' },
  { icon: Warehouse, label: 'Warehousing' },
  { icon: Truck, label: 'Logistics' },
  { icon: Cpu, label: 'Engineering' },
  { icon: HardHat, label: 'Installation' },
];

export function CompanyIntro() {
  return (
    <section className="section bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image area */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] rounded-2xl bg-surface border border-border overflow-hidden relative group">
              <Image
                src="/images/hero/manufacturing-infrastructure.jpg"
                alt="BlueShield Manufacturing Infrastructure"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Accent element */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-xl bg-eng-blue/5 border border-eng-blue/10 -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">About BlueShield</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-5 leading-tight">
              Built Around Water.{' '}
              <span className="text-gradient">Engineered Around Your Requirements.</span>
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              BlueShield RO Industries manufactures and supplies water-treatment systems, purification
              equipment, water softeners and related machinery. With dedicated infrastructure for
              manufacturing, quality control, warehousing and logistics, we deliver complete water
              solutions engineered to your specific requirements.
            </p>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
              {capabilities.map((cap) => (
                <div
                  key={cap.label}
                  className="flex items-center gap-2 p-2.5 sm:px-3 sm:py-2.5 rounded-lg bg-surface border border-border"
                >
                  <cap.icon className="w-4 h-4 text-eng-blue shrink-0" />
                  <span className="text-xs font-medium text-text truncate">{cap.label}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn btn-primary w-full sm:w-auto justify-center">
              Discover BlueShield
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

