import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'Privacy Policy | BlueShield RO Industries',
  description: 'Privacy policy and data protection practices of BlueShield RO Industries Private Limited.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-surface/30 min-h-screen pt-[72px]">
      <div className="bg-navy text-white py-12 bg-grid-dark border-b border-border/20">
        <div className="container">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">Privacy Policy</h1>
          <p className="text-white/60 text-xs mt-1">Last updated: January 2025</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="bg-surface p-8 sm:p-12 rounded-3xl border border-border shadow-sm max-w-4xl mx-auto space-y-6 text-sm text-text-muted leading-relaxed">
          <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
          <p>
            When you submit a quotation inquiry or contact request on blueshieldro.net, we collect personal and business contact details including your name, telephone number, email address, company or facility type, installation city/state, and water treatment system specifications.
          </p>

          <h2 className="text-xl font-bold text-white">2. How We Use Your Information</h2>
          <p>
            The collected information is solely used to evaluate your engineering requirements, size appropriate water treatment machinery, prepare quotation documents, coordinate installation logistics, and provide after-sales support. We do not sell, rent, or trade your contact details with unauthorized third parties.
          </p>

          <h2 className="text-xl font-bold text-white">3. Data Security & Storage</h2>
          <p>
            We implement standard technical and organizational measures to safeguard your information against unauthorized access, loss, or disclosure. All form transmissions are encrypted via HTTPS.
          </p>

          <h2 className="text-xl font-bold text-white">4. Contact For Privacy Matters</h2>
          <p>
            For questions regarding your data or to request deletion of your inquiry details, contact BlueShield RO Industries Private Limited, Samvet Shikhar Complex, Raipur - 492001, Chhattisgarh, India.
          </p>
        </div>
      </div>
    </div>
  );
}

