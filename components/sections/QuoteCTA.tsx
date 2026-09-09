'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, FileText, CheckCircle2 } from 'lucide-react';

export function QuoteCTA() {
  return (
    <section className="section section-dark relative overflow-hidden bg-grid-dark">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-eng-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow text-water-blue mb-3 block">Get Started</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Have a Water Treatment Requirement?
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
              Share your required capacity, application, and raw water parameters.
              Our engineering team will recommend and quote the optimal system configuration.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <Link href="/request-quote" className="btn btn-primary btn-lg w-full sm:w-auto justify-center shadow-xl shadow-eng-blue/20">
                <FileText className="w-5 h-5" />
                Request a Custom Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn btn-secondary btn-lg w-full sm:w-auto justify-center text-white border-white/20 hover:bg-white hover:text-navy">
                <PhoneCall className="w-5 h-5" />
                Talk to an Engineer
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/70">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-water-blue" />
                Free Technical Sizing
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-water-blue" />
                Custom Plant Design
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-water-blue" />
                PAN-India Delivery & Support
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

