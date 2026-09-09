import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FAQ } from '@/components/ui/FAQ';
import Link from 'next/link';
import { PhoneCall, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | BlueShield RO Industries',
  description: 'Common questions about RO capacity sizing, LPH calculation, installation support, FRP vs SS plants, and delivery across India.',
};

const generalFaqs = [
  {
    question: 'What does LPH mean in water treatment plants?',
    answer: 'LPH stands for Litres Per Hour. It represents the volume of purified water the reverse osmosis or filtration plant produces per continuous operating hour. For example, a 1000 LPH plant operating for 10 hours will produce approximately 10,000 litres of treated water.',
  },
  {
    question: 'How do I determine what capacity RO plant I need for my facility?',
    answer: 'Capacity sizing is determined by three parameters: your daily purified water requirement (in litres), the operating hours available per day, and the raw water quality (TDS and hardness). BlueShield offers complimentary technical sizing based on your water test report.',
  },
  {
    question: 'What is the key difference between FRP and Stainless Steel (SS) RO plants?',
    answer: 'FRP (Fibre-Reinforced Plastic) vessels are corrosion-resistant, lightweight, and cost-effective, making them ideal for standard commercial and industrial applications. SS (Stainless Steel, SS 304 or 316) plants offer food-grade hygiene, high temperature tolerance, and are required in pharmaceutical, medical, and food-processing environments.',
  },
  {
    question: 'Does BlueShield provide on-site installation and commissioning?',
    answer: 'Yes. We provide complete turnkey installation and commissioning support across India. Our field engineering teams handle plant placement, piping integration, electrical panel wiring, membrane loading, test runs, and operator training.',
  },
  {
    question: 'Can the systems be customized for specific raw water parameters?',
    answer: 'Absolutely. We custom design pre-treatment (sand, carbon, dual media, antiscalant dosing, or water softening) based on your raw water source (borewell, river, municipal) to protect the RO membranes and maximize recovery efficiency.',
  },
  {
    question: 'How often do RO membranes and filter media need replacement?',
    answer: 'Under normal operating conditions with proper pre-treatment, industrial RO membranes typically last 2 to 3 years. Sediment and carbon filter media should be checked and serviced every 6 to 12 months.',
  },
  {
    question: 'Do you supply spare parts and replacement resins outside Raipur?',
    answer: 'Yes. We maintain a ready inventory of domestic and industrial RO membranes, booster pumps, multiport valves, and ion-exchange softening resins with PAN India courier and freight dispatch.',
  },
];

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: generalFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-surface/30 min-h-screen pt-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header Banner */}
      <div className="bg-navy text-white py-14 bg-grid-dark border-b border-border/20">
        <div className="container">
          <Breadcrumb items={[{ label: 'FAQ' }]} />
          <div className="max-w-3xl mt-4">
            <span className="eyebrow text-water-blue mb-2 block">Technical Knowledgebase</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              Find clear, technical answers regarding system sizing, reverse osmosis engineering, installation logistics, and maintenance protocols.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12 space-y-12">
        <div className="bg-surface p-8 sm:p-12 rounded-3xl border border-border shadow-sm">
          <FAQ items={generalFaqs} />
        </div>

        {/* Contact Strip */}
        <div className="bg-navy text-white p-8 sm:p-10 rounded-3xl text-center space-y-4 bg-grid-dark max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Have a Specific Water Question Not Listed Here?
          </h3>
          <p className="text-xs sm:text-sm text-white/70">
            Send your raw water test report to our Raipur engineering team for custom analysis.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link href="/contact" className="btn btn-primary btn-sm">
              <PhoneCall className="w-4 h-4" />
              Contact Our Engineers
            </Link>
            <Link href="/request-quote" className="btn btn-secondary btn-sm text-white border-white/20 hover:bg-surface hover:text-white">
              <FileText className="w-4 h-4" />
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

