'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/data/company';
import { ClipboardList, Lightbulb, Wrench, HardHat, HeadphonesIcon } from 'lucide-react';

const stepIcons = [ClipboardList, Lightbulb, Wrench, HardHat, HeadphonesIcon];

export function HowWeWork() {
  return (
    <section className="section section-dark bg-grid-dark">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow text-water-blue mb-3 block">How We Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            From Requirement to Running System
          </h2>
          <p className="text-white/60">
            A structured process that ensures you get the right water-treatment system,
            installed and running efficiently.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-water-blue/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {processSteps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div
                  key={step.step}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {/* Step Number */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface/5 border border-white/10 mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-water-blue" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-eng-blue text-white text-[10px] font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-0.5">{step.title}</h3>
                  <p className="text-sm font-medium text-water-blue mb-2">{step.subtitle}</p>
                  <p className="text-xs text-white/50 leading-relaxed max-w-[200px] mx-auto">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

