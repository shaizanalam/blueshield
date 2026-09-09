import Link from 'next/link';
import type { Metadata } from 'next';
import { company, companyFacts, whyBlueShield, qualityProcess } from '@/data/company';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ShieldCheck, Factory, Award, CheckCircle2, User, Building, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About BlueShield RO Industries | Water Treatment Engineering',
  description: 'Learn about BlueShield RO Industries — founded in 2016 in Raipur, Chhattisgarh. Manufacturers and suppliers of precision water treatment systems across India.',
};

export default function AboutPage() {
  return (
    <div className="bg-surface/30 min-h-screen pt-[72px]">
      {/* Header Banner */}
      <div className="bg-navy text-white py-14 bg-grid-dark border-b border-border/20">
        <div className="container">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <div className="max-w-3xl mt-4">
            <span className="eyebrow text-water-blue mb-2 block">Company Profile</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Engineering Water Solutions Since 2016
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              Headquartered in Raipur, Chhattisgarh, BlueShield RO Industries Private Limited is a specialized manufacturer and supplier of water-treatment plants, reverse osmosis machinery, purifiers, softeners, and bottling equipment.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12 space-y-16">
        {/* Company Facts Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {companyFacts.map((fact) => (
            <div key={fact.label} className="p-6 rounded-2xl bg-surface border border-border text-center shadow-sm">
              <span className="text-xs text-text-muted font-bold uppercase tracking-wider block mb-1">{fact.label}</span>
              <p className="text-2xl font-bold text-text mb-1">{fact.value}</p>
              <p className="text-xs text-text-muted">{fact.description}</p>
            </div>
          ))}
        </div>

        {/* Corporate Story & Mission */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="eyebrow block">Our Mission & Approach</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text leading-tight">
              Built Around Water. Engineered Around Your Specific Needs.
            </h2>
            <div className="space-y-4 text-sm text-text-muted leading-relaxed">
              <p>
                Founded in 2016 in Raipur, Chhattisgarh, BlueShield RO Industries was established with a singular focus: to engineer reliable, high-recovery water purification and treatment systems that industrial and commercial operations can depend upon without constant downtime.
              </p>
              <p>
                From small-scale domestic softening units to heavy-duty industrial reverse osmosis plants producing tens of thousands of litres per hour, our systems are built using premium pressure vessels, high-rejection membranes, stainless-steel skid fabrication, and calibrated electrical automation.
              </p>
              <p>
                We do not simply sell equipment; we guide clients through water testing assessment, system capacity sizing, turnkey installation, operator training, and lifetime spare parts availability.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface p-8 rounded-3xl border border-border shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-text border-b border-border pb-3">Corporate Information</h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-border/50">
                <span className="text-text-muted font-medium">Legal Name</span>
                <span className="font-bold text-text">{company.legalName}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-border/50">
                <span className="text-text-muted font-medium">Business Nature</span>
                <span className="font-bold text-text">{company.nature}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-border/50">
                <span className="text-text-muted font-medium">Year Established</span>
                <span className="font-bold text-text">{company.founded}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-border/50">
                <span className="text-text-muted font-medium">Registered Location</span>
                <span className="font-bold text-text">Raipur, Chhattisgarh</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-border/50">
                <span className="text-text-muted font-medium">GST Identification</span>
                <span className="font-bold text-text">{company.gst}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-text-muted font-medium">Delivery Scope</span>
                <span className="font-bold text-eng-blue">PAN India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-surface p-8 sm:p-12 rounded-3xl border border-border shadow-sm">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="eyebrow mb-2 block">Leadership</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text">Executive Management</h2>
          </div>
          <div className="max-w-md mx-auto p-6 rounded-2xl bg-surface border border-border text-center">
            <div className="w-16 h-16 rounded-full bg-ice-blue mx-auto mb-4 flex items-center justify-center">
              <User className="w-8 h-8 text-eng-blue" />
            </div>
            <h3 className="text-xl font-bold text-text">{company.founder}</h3>
            <p className="text-xs font-semibold text-eng-blue uppercase tracking-wider mt-1">{company.founderTitle}</p>
            <p className="text-xs text-text-muted mt-3 leading-relaxed">
              Directing corporate engineering strategy, manufacturing quality standards, and industrial client relations across India.
            </p>
          </div>
        </div>

        {/* Pillars / Why Choose Us */}
        <div>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="eyebrow mb-2 block">Core Strengths</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text">Why Choose BlueShield</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyBlueShield.map((item) => (
              <div key={item.number} className="bg-surface p-6 rounded-2xl border border-border shadow-sm">
                <span className="text-2xl font-bold text-eng-blue/30 block mb-2">{item.number}</span>
                <h3 className="text-lg font-bold text-text mb-2">{item.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-navy text-white p-8 sm:p-12 rounded-3xl text-center space-y-4 bg-grid-dark">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Discuss Your Water Treatment Requirement
          </h3>
          <p className="text-sm text-white/70 max-w-xl mx-auto">
            Connect with our Raipur headquarters or request a detailed proposal for your facility.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Contact BlueShield
            </Link>
            <Link href="/request-quote" className="btn btn-secondary btn-lg text-white border-white/20 hover:bg-surface hover:text-white">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

