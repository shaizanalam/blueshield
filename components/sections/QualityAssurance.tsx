'use client';

import { motion } from 'framer-motion';
import { qualityProcess } from '@/data/company';
import { CheckCircle2, ArrowDown } from 'lucide-react';

export function QualityAssurance() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow mb-3 block">Quality Assurance</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Quality at Every Stage
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Quality checks are integrated throughout our production process — from raw material
              procurement through manufacturing, assembly, testing and final inspection before dispatch.
            </p>
            <ul className="space-y-3">
              {['Rigorous material inspection', 'In-process quality checks', 'Performance testing before dispatch', 'Documentation and traceability'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-eng-blue shrink-0" />
                  <span className="text-sm text-text">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Process Flow */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3 w-full max-w-xs">
              {qualityProcess.map((step, i) => (
                <div key={step}>
                  <motion.div
                    className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border shadow-sm"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-eng-blue/10 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-eng-blue">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <span className="text-sm font-medium text-text">{step}</span>
                  </motion.div>
                  {i < qualityProcess.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-4 h-4 text-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

