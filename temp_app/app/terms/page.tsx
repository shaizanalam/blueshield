import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'Terms & Conditions | BlueShield RO Industries',
  description: 'Terms and conditions for product quotations, orders, delivery, and services from BlueShield RO Industries Private Limited.',
};

export default function TermsPage() {
  return (
    <div className="bg-surface/30 min-h-screen pt-[72px]">
      <div className="bg-navy text-white py-12 bg-grid-dark border-b border-border/20">
        <div className="container">
          <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">Terms & Conditions</h1>
          <p className="text-white/60 text-xs mt-1">Last updated: January 2025</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="bg-surface p-8 sm:p-12 rounded-3xl border border-border shadow-sm max-w-4xl mx-auto space-y-6 text-sm text-text-muted leading-relaxed">
          <h2 className="text-xl font-bold text-white">1. Product Information & Pricing</h2>
          <p>
            All catalog descriptions, technical specifications, capacities, and pricing indications displayed on blueshieldro.net are indicative and subject to final engineering confirmation. Formal proposals with itemized scopes and delivery terms are provided upon technical review.
          </p>

          <h2 className="text-xl font-bold text-white">2. Quotation Validity & Orders</h2>
          <p>
            Official quotations issued by BlueShield RO Industries are valid for the period specified on the quotation sheet. Orders are confirmed upon receipt of formal purchase orders or advance payment as per agreed commercial milestones.
          </p>

          <h2 className="text-xl font-bold text-white">3. Delivery & On-Site Installation</h2>
          <p>
            Delivery schedules are estimates based on manufacturing workloads and freight transit times from Raipur. For plants requiring on-site installation, client site readiness (foundation, raw water supply piping, 3-phase electrical power, and drain lines) is required prior to engineer dispatch.
          </p>

          <h2 className="text-xl font-bold text-white">4. Jurisdiction</h2>
          <p>
            Any disputes arising in connection with sales or services provided by BlueShield RO Industries Private Limited are subject to the exclusive jurisdiction of the courts in Raipur, Chhattisgarh, India.
          </p>
        </div>
      </div>
    </div>
  );
}

