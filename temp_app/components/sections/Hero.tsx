'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden pt-24 pb-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-dark" />

      {/* Animated Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-eng-blue/20 rounded-full blur-[100px] animate-orb pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-water-blue/20 rounded-full blur-[80px] animate-orb-alt pointer-events-none mix-blend-screen" />

      {/* Animated Water Flow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
        <motion.div
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-water-blue to-transparent"
          animate={{ x: ['-100%', '400%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-deep-blue/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-water-blue" />
              <span className="eyebrow text-water-blue">
                Water Treatment â€¢ RO â€¢ Industrial Solutions
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-5 max-w-3xl">
              Engineering <span className="text-gradient">Better Water</span><br className="hidden sm:block" /> for Every Scale.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg text-white/70 max-w-lg mb-10 leading-relaxed">
              BlueShield RO Industries designs, manufactures and supplies
              waterâ€‘treatment systems for industrial, commercial and
              institutional applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/solutions" className="btn btn-primary btn-lg group">
                Explore Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/request-quote" className="btn btn-secondary btn-lg text-white border-white/30 hover:bg-surface hover:text-white group">
                Request a Quote
                <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center justify-between max-w-lg mt-14 pt-8 border-t border-white/10">
              <div>
                <p className="text-xl font-bold text-white">Since 2016</p>
                <p className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">Established</p>
              </div>
              <div className="h-8 w-px bg-surface/10" />
              <div>
                <p className="text-xl font-bold text-white">PAN India</p>
                <p className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">Delivery</p>
              </div>
              <div className="h-8 w-px bg-surface/10" />
              <div>
                <p className="text-xl font-bold text-white">34+</p>
                <p className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">Products</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main Image Area */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-deep-blue/40">
              <Image 
                src="/images/hero/hero-industrial.jpg"
                alt="Industrial RO System"
                fill
                className="object-cover opacity-90 transition-opacity hover:opacity-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-center justify-center">
                <div className="text-center translate-y-12">
                  <div className="w-20 h-20 rounded-full bg-navy/30 backdrop-blur-sm border-2 border-water-blue/50 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-eng-blue/40 transition-colors group">
                    <Play className="w-8 h-8 text-white ml-1 group-hover:text-water-blue transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Spec Card (Glassmorphic) */}
            <motion.div
              className="absolute bottom-8 left-8 bg-surface/90 backdrop-blur-md rounded-xl shadow-2xl p-4 min-w-[180px] border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-eng-blue" />
                <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">System Spec</span>
              </div>
              <p className="text-xl font-bold text-white">1000 LPH</p>
              <p className="text-xs text-text-muted">RO System â€¢ Automatic</p>
              <p className="text-xs text-text-muted">PAN India Installation</p>
            </motion.div>

            {/* Floating Badge (Glassmorphic) */}
            <motion.div
              className="absolute top-8 right-8 bg-eng-blue/90 backdrop-blur-md text-white rounded-lg px-3 py-1.5 shadow-xl border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <p className="text-xs font-bold">Manufacturer</p>
              <p className="text-[10px] text-white/70">Raipur, India</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

