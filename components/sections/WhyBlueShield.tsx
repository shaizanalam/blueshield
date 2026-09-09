'use client';

import { motion } from 'framer-motion';
import { whyBlueShield } from '@/data/company';

export function WhyBlueShield() {
  return (
    <section className="section bg-surface">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow mb-3 block">Why BlueShield</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-text-muted">
            A combination of manufacturing capability, engineering expertise and service commitment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyBlueShield.map((item, i) => (
            <motion.div
              key={item.number}
              className="group p-6 rounded-xl border border-border hover:border-eng-blue/20 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            >
              <span className="text-3xl font-bold text-eng-blue/15 group-hover:text-eng-blue/30 transition-colors">
                {item.number}
              </span>
              <h3 className="text-lg font-semibold text-white mt-2 mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

