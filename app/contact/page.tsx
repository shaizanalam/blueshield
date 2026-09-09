import type { Metadata } from 'next';
import { company } from '@/data/company';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ContactForm } from '@/components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock, Building2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | BlueShield RO Industries, Raipur',
  description: 'Get in touch with BlueShield RO Industries in Raipur, Chhattisgarh. Inquire about water treatment equipment, request quotes, or get technical support.',
};

export default function ContactPage() {
  return (
    <div className="bg-surface/30 min-h-screen pt-[72px]">
      {/* Header Banner */}
      <div className="bg-navy text-white py-14 bg-grid-dark border-b border-border/20">
        <div className="container">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />
          <div className="max-w-3xl mt-4">
            <span className="eyebrow text-water-blue mb-2 block">Direct Contact</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Let&apos;s Build the Right Water System for Your Requirement
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              Reach out to our engineering and sales office in Raipur for technical consultations, plant sizing, quotation requests, and maintenance inquiries.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface p-8 rounded-3xl border border-border shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-text border-b border-border pb-4">
                Headquarters & Factory Office
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-eng-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text">{company.legalName}</h3>
                    <p className="text-xs text-text-muted mt-0.5">Water Treatment Equipment Manufacturer</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-eng-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text">Office Address</h3>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">
                      {company.address.street}<br />
                      {company.address.city} - {company.address.pincode}<br />
                      {company.address.state}, {company.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-eng-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text">Corporate Identifiers</h3>
                    <p className="text-xs text-text-muted mt-1">
                      GST: <strong className="text-text">{company.gst}</strong><br />
                      Status: {company.legalStatus}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-eng-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text">Working Hours</h3>
                    <p className="text-xs text-text-muted mt-1">
                      Monday - Saturday: 9:30 AM - 7:00 PM<br />
                      Sunday: Closed / Emergency Response
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Sizing Box */}
            <div className="bg-navy text-white p-8 rounded-3xl shadow-sm space-y-4">
              <span className="eyebrow text-water-blue block">Fast Track</span>
              <h3 className="text-lg font-bold text-white">Need an Instant System Quote?</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Use our structured 5-step Smart Quote Wizard to submit your exact water capacity and application parameters for an itemized estimate.
              </p>
              <a href="/request-quote" className="btn btn-primary btn-sm w-full justify-center">
                Launch Smart Quote Wizard
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

