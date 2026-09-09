'use client';

import { motion } from 'framer-motion';
import { Factory, ShieldCheck, Warehouse, Truck, Wrench, Users } from 'lucide-react';

const facilities = [
  {
    icon: Factory,
    title: 'Manufacturing Facility',
    desc: 'Dedicated production floor for assembly, fabrication, and integration of industrial and commercial water treatment plants.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control Lab',
    desc: 'Equipped testing setup ensuring pressure rating integrity, membrane rejection performance, and strict quality verification before dispatch.',
  },
  {
    icon: Warehouse,
    title: 'Warehouse & Inventory',
    desc: 'Organized storage maintaining ready stock of critical RO components, membranes, booster pumps, control valves, and softening resins.',
  },
  {
    icon: Truck,
    title: 'PAN-India Logistics',
    desc: 'Reliable distribution partnerships enabling safe transit, tracked delivery, and scheduled on-site material arrival across India.',
  },
  {
    icon: Wrench,
    title: 'Installation & Commissioning',
    desc: 'Experienced field engineers for turnkey plumbing, electrical connections, membrane loading, calibration, and plant handover.',
  },
  {
    icon: Users,
    title: 'Engineering & Support Team',
    desc: 'Technical experts ready to evaluate raw water parameters, size systems accurately, and provide ongoing operational guidance.',
  },
];

export function Infrastructure() {
  return (
    <section className="section bg-surface">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow mb-3 block">Infrastructure & Capability</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Built on Solid Engineering Infrastructure
          </h2>
          <p className="text-text-muted">
            Our manufacturing and operational setup in Raipur enables precision fabrication, rapid dispatch, and end-to-end project execution.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item, i) => (
            <motion.div
              key={item.title}
              className="p-6 rounded-2xl bg-surface border border-border hover:border-eng-blue/30 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-xl bg-ice-blue flex items-center justify-center mb-5 group-hover:bg-eng-blue group-hover:text-white transition-colors duration-300">
                <item.icon className="w-6 h-6 text-eng-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-eng-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

