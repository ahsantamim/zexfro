import { DocLayout, DocSection } from "@/components/ui/DocLayout";
import { Shield, FileCheck, Users, Leaf, Target, Scale } from "lucide-react";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'complianceStandards' });
  
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

const sections = [
  { id: "overview", title: "Compliance & Standards Overview" },
  { id: "regulatory", title: "Regulatory & Trade Compliance" },
  { id: "quality", title: "Quality Assurance & Standards" },
  { id: "ethical", title: "Ethical Sourcing & Social Compliance" },
  { id: "environmental", title: "Environmental & Sustainability Standards" },
  { id: "pillars", title: "Our Compliance Pillars" },
];

export default function ComplianceStandardsPage() {
  return (
    <DocLayout
      sections={sections}
      pageTitle="Compliance & Standards"
      pageDescription="At Zexfro International Limited, we recognize that trust is the primary currency in global trade. Operating in the export–import sector requires more than just logistics; it requires rigid commitment to international laws, ethical sourcing, and quality benchmarks."
    >
      {/* Section 1: Compliance & Standards Overview */}
      <DocSection id="overview" title="Compliance & Standards Overview">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-[#0a4a9e]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Trust as the Foundation of Global Trade
            </h3>
            <p className="text-gray-600">
              Rigid commitment to international laws, ethical sourcing, and quality
              benchmarks in every transaction.
            </p>
          </div>
        </div>

        <p>
          At Zexfro International Limited, we recognize that trust is the primary currency
          in global trade. Operating in the export–import sector requires more than just
          logistics; it requires rigid commitment to international laws, ethical sourcing,
          and quality benchmarks.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80"
            alt="Compliance and standards in international trade"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Commitment to Excellence and Integrity</p>
          </div>
        </div>

        <p>
          This overview outlines the Compliance & Standards framework that governs our
          operations, ensuring that every shipment, partnership, and transaction meets the
          highest international standards of quality, legality, and ethical responsibility.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">Our Compliance Framework:</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>
                <strong>Regulatory Compliance:</strong> Strict adherence to local and
                international trade laws
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>
                <strong>Quality Standards:</strong> ISO-aligned processes and product-specific
                certifications
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>
                <strong>Ethical Sourcing:</strong> Responsible supply chain practices and labor
                rights protection
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>
                <strong>Environmental Responsibility:</strong> Sustainable practices and carbon
                footprint reduction
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Compliance is Not Optional—It's Essential</p>
          <p className="mt-2 text-white/90">
            Our comprehensive framework ensures that every aspect of our operations meets or
            exceeds international standards.
          </p>
        </div>
      </DocSection>

      {/* Section 2: Regulatory & Trade Compliance */}
      <DocSection id="regulatory" title="Regulatory & Trade Compliance">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Scale className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Adherence to International Trade Regulations
            </h3>
            <p className="text-gray-600">
              Ensuring smooth cross-border transactions through strict compliance with local
              and international trade laws.
            </p>
          </div>
        </div>

        <p>
          To ensure smooth cross-border transactions, we strictly adhere to both local and
          international trade regulations. Our regulatory compliance framework is
          comprehensive, covering all aspects of international trade from documentation to
          partner screening.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
            alt="Regulatory compliance and trade documentation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Rigorous Regulatory Compliance</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Customs & Documentation</h4>
            <p className="text-sm text-gray-700 mb-4">
              We maintain 100% accuracy in documentation to prevent delays, discrepancies,
              and legal issues.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Harmonized System (HS) coding</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Country-of-origin labeling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Accurate valuation methods</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Complete trade documentation</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Sanction Screening</h4>
            <p className="text-sm text-gray-700 mb-4">
              Every partner, vendor, and financial institution is screened against global
              lists.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>"Denied Parties" lists verification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Sanctioned entities screening</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Continuous monitoring updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Compliance database management</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Anti-Bribery & Corruption (ABC)</h4>
            <p className="text-sm text-gray-700 mb-4">
              Zero-tolerance policy regarding corruption and bribery in all forms.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>FCPA compliance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Local anti-corruption laws</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Ethical business practices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Regular staff training</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            Foreign Corrupt Practices Act (FCPA) Compliance:
          </h4>
          <p className="text-gray-700 mb-3">
            We operate under a zero-tolerance policy regarding the Foreign Corrupt Practices
            Act (FCPA) and local anti-corruption laws. This commitment includes:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>
                Prohibition of payments, gifts, or anything of value to foreign officials to
                obtain or retain business
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>
                Accurate books and records that reflect all business transactions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Internal controls to ensure compliance with anti-corruption laws</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>
                Regular training for employees on FCPA and anti-corruption regulations
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-green-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">Compliance Benefits:</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>Zero legal violations or penalties</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>Smooth customs clearance and reduced delays</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>Protection from sanctioned entities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>Enhanced reputation and trustworthiness</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>Ethical business operations</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">100% Regulatory Compliance, 0% Compromise</p>
          <p className="mt-2 text-white/90">
            Our strict adherence to international trade regulations ensures legal, ethical,
            and smooth business operations.
          </p>
        </div>
      </DocSection>

      {/* Section 3: Quality Assurance & Standards */}
      <DocSection id="quality" title="Quality Assurance & Standards">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileCheck className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Quality as a Prerequisite, Not a Goal
            </h3>
            <p className="text-gray-600">
              Every shipment leaving or entering our warehouses meets the highest quality
              standards.
            </p>
          </div>
        </div>

        <p>
          Quality is not just a goal; it is a prerequisite for every shipment leaving or
          entering our warehouses. We maintain rigorous quality assurance processes aligned
          with international standards to ensure consistent excellence in every transaction.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
            alt="Quality assurance and ISO certification"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">ISO-Aligned Quality Management</p>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">ISO Certification:</h4>
          <p className="text-gray-700 mb-4">
            We align our processes with <strong>ISO 9001:2015 (Quality Management
            Systems)</strong> to ensure consistency in service delivery. This international
            standard helps us:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>Demonstrate our ability to consistently provide products and services that meet customer and regulatory requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>Enhance customer satisfaction through effective application of the system</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>Address risks and opportunities associated with our context and objectives</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>Continuously improve our processes and performance</span>
            </li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Product-Specific Standards
        </h4>
        <p>
          Depending on the cargo (e.g., textiles, electronics, or perishables), we ensure
          compliance with relevant international standards that guarantee safety, quality,
          and market acceptance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="bg-white border-2 border-purple-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-center">CE Marking</h4>
            <p className="text-sm text-gray-700 text-center mb-4">
              European safety standards for products sold in the EU
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Health and safety requirements</li>
              <li>• Environmental protection</li>
              <li>• Consumer protection standards</li>
              <li>• Mandatory for EU market access</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-purple-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-center">ASTM/ANSI</h4>
            <p className="text-sm text-gray-700 text-center mb-4">
              American technical standards for quality and performance
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Material specifications</li>
              <li>• Performance testing methods</li>
              <li>• Safety requirements</li>
              <li>• Product classification</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-purple-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-center">OEKO-TEX</h4>
            <p className="text-sm text-gray-700 text-center mb-4">
              Sustainable and safe textile exports certification
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Harmful substance testing</li>
              <li>• Skin-friendly certification</li>
              <li>• Environmental sustainability</li>
              <li>• Consumer confidence</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4 text-center">
            Quality Performance Target
          </h4>
          <div className="text-center">
            <div className="inline-block bg-purple-50 rounded-lg p-8">
              <div className="text-6xl font-bold text-purple-600 mb-3">99.9%</div>
              <div className="text-lg text-gray-900 font-semibold mb-2">
                Defect-Free Shipment Rate
              </div>
              <div className="text-sm text-gray-600">
                Our commitment to inspection and testing excellence
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Quality Assurance in Every Shipment</p>
          <p className="mt-2 text-white/90">
            ISO-aligned processes and product-specific certifications ensure consistent
            excellence and customer satisfaction.
          </p>
        </div>
      </DocSection>

      {/* Section 4: Ethical Sourcing & Social Compliance */}
      <DocSection id="ethical" title="Ethical Sourcing & Social Compliance">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Responsible Supply Chain Practices
            </h3>
            <p className="text-gray-600">
              A sustainable supply chain is a responsible one—ensuring fair treatment of
              people and the environment.
            </p>
          </div>
        </div>

        <p>
          We believe that a sustainable supply chain is a responsible one. We vet our
          suppliers based on their treatment of people and the environment, ensuring that
          every partner in our network upholds the highest ethical standards.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
            alt="Ethical sourcing and social compliance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Commitment to Ethical Business Practices</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Labor Rights</h4>
            <p className="text-sm text-gray-700 mb-4">
              We strictly prohibit exploitation and unfair practices within our supply chain.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Zero Child Labor:</strong> Absolute prohibition of child labor in
                  any form
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>No Forced Labor:</strong> Workers must be employed voluntarily with
                  freedom to leave
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Fair Wages:</strong> Payment of at least minimum wage and living
                  wage where possible
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Safe Working Conditions:</strong> Compliance with occupational
                  health and safety standards
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Freedom of Association:</strong> Right to form and join trade unions
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Factory Audits</h4>
            <p className="text-sm text-gray-700 mb-4">
              Regular verification of workplace safety and ethical conditions through
              comprehensive audits.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>On-Site Inspections:</strong> Our team conducts regular facility
                  visits
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Third-Party Audits:</strong> Utilization of SEDEX or BSCI certified
                  auditors
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Workplace Safety:</strong> Verification of safe working environment
                  and equipment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Corrective Action Plans:</strong> Support for improvements where
                  needed
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Continuous Monitoring:</strong> Ongoing compliance verification
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            Social Compliance Frameworks We Support:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">SEDEX (Supplier Ethical Data Exchange)</h5>
              <p className="text-sm text-gray-700">
                Global platform for sharing ethical supply chain data, covering labor
                standards, health & safety, environment, and business ethics.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">BSCI (Business Social Compliance Initiative)</h5>
              <p className="text-sm text-gray-700">
                European framework for improving working conditions in global supply chains
                through a common monitoring system.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-yellow-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4 text-center">
            Our Ethical Commitment
          </h4>
          <p className="text-center text-gray-700 mb-4">
            We are committed to ensuring dignity across the entire supply chain:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="text-3xl mb-2">👥</div>
              <p className="font-semibold text-gray-900 mb-1">People First</p>
              <p className="text-xs text-gray-600">Fair treatment for all workers</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="text-3xl mb-2">🛡️</div>
              <p className="font-semibold text-gray-900 mb-1">Safety Standards</p>
              <p className="text-xs text-gray-600">Protecting worker wellbeing</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="text-3xl mb-2">✓</div>
              <p className="font-semibold text-gray-900 mb-1">Verified Compliance</p>
              <p className="text-xs text-gray-600">Regular audits and monitoring</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Ensuring Dignity Across the Supply Chain</p>
          <p className="mt-2 text-white/90">
            Our commitment to ethical sourcing protects workers' rights and promotes fair
            labor practices throughout our global network.
          </p>
        </div>
      </DocSection>

      {/* Section 5: Environmental & Sustainability Standards */}
      <DocSection id="environmental" title="Environmental & Sustainability Standards">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Leaf className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Reducing the Carbon Footprint of Global Logistics
            </h3>
            <p className="text-gray-600">
              Commitment to environmental sustainability through eco-friendly practices and
              green logistics.
            </p>
          </div>
        </div>

        <p>
          Zexfro International Limited is committed to reducing the carbon footprint of
          global logistics. We recognize that environmental responsibility is essential for
          sustainable business operations and actively implement practices that minimize our
          environmental impact.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80"
            alt="Environmental sustainability and green logistics"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Sustainable Business Practices</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Eco-Friendly Packaging</h4>
            <p className="text-sm text-gray-700 mb-4">
              We prioritize biodegradable or recyclable packaging materials wherever possible.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Biodegradable Materials:</strong> Use of materials that break down
                  naturally
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Recyclable Packaging:</strong> Materials that can be reprocessed
                  and reused
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Minimal Packaging:</strong> Reducing excess materials without
                  compromising protection
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Sustainable Sources:</strong> Packaging from responsibly managed
                  resources
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Reusable Options:</strong> Encouraging packaging that can be used
                  multiple times
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Green Logistics</h4>
            <p className="text-sm text-gray-700 mb-4">
              Working with carriers that utilize sustainable practices to minimize
              environmental impact.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Fuel-Efficient Vessels:</strong> Carriers using modern, efficient
                  ships and aircraft
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Optimized Routing:</strong> Planning routes to minimize distance and
                  fuel consumption
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>CO₂ Emission Reduction:</strong> Active monitoring and reduction of
                  carbon footprint
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Consolidated Shipments:</strong> Combining cargo to reduce trips
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Paperless Operations:</strong> Digital documentation to reduce paper
                  waste
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            Our Environmental Commitments:
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>
                <strong>Transitioning to Paperless Operations:</strong> Digital documentation
                and electronic communication reducing paper consumption
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>
                <strong>Low-Carbon Trade Practices:</strong> Selecting environmentally
                responsible carriers and routes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>
                <strong>Sustainable Partner Selection:</strong> Preferring partners with
                strong environmental credentials
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>
                <strong>Continuous Improvement:</strong> Regular review and enhancement of
                environmental practices
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-orange-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4 text-center">
            Environmental Impact Goals
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-600 mb-2">🌱</div>
              <p className="font-semibold text-gray-900 mb-1">Sustainable Packaging</p>
              <p className="text-xs text-gray-600">Reducing environmental waste</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-600 mb-2">🚢</div>
              <p className="font-semibold text-gray-900 mb-1">Green Transportation</p>
              <p className="text-xs text-gray-600">Lower carbon emissions</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-600 mb-2">📄</div>
              <p className="font-semibold text-gray-900 mb-1">Paperless Operations</p>
              <p className="text-xs text-gray-600">Digital-first approach</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Protecting Our Planet for Future Generations</p>
          <p className="mt-2 text-white/90">
            Our commitment to environmental sustainability ensures responsible business
            practices that benefit both commerce and the environment.
          </p>
        </div>
      </DocSection>

      {/* Section 6: Our Compliance Pillars */}
      <DocSection id="pillars" title="Our Compliance Pillars">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Target className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Four Pillars of Excellence
            </h3>
            <p className="text-gray-600">
              Our comprehensive framework built on integrity, quality, people, and planet.
            </p>
          </div>
        </div>

        <p>
          Our compliance framework rests on four fundamental pillars that guide every
          decision, partnership, and transaction. These pillars represent our unwavering
          commitment to excellence across all dimensions of our business operations.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
            alt="Compliance pillars and business excellence"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Built on Strong Foundations</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden my-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0a4a9e] text-white">
                  <th className="text-left py-4 px-6 font-bold">Pillar</th>
                  <th className="text-left py-4 px-6 font-bold">Focus Area</th>
                  <th className="text-left py-4 px-6 font-bold">Goal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-[#0a4a9e]" />
                      </div>
                      <span className="font-semibold text-gray-900">Integrity</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-700">Financial & Legal</td>
                  <td className="py-4 px-6 text-gray-700">
                    Zero legal violations or penalties
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileCheck className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="font-semibold text-gray-900">Quality</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-700">Inspection & Testing</td>
                  <td className="py-4 px-6 text-gray-700">
                    99.9% defect-free shipment rate
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-yellow-600" />
                      </div>
                      <span className="font-semibold text-gray-900">People</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-700">Fair Labor Practices</td>
                  <td className="py-4 px-6 text-gray-700">
                    Ensuring dignity across the supply chain
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Leaf className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="font-semibold text-gray-900">Planet</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-700">Carbon Footprint</td>
                  <td className="py-4 px-6 text-gray-700">
                    Transitioning to paperless and low-carbon trade
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Pillar 1: Integrity</h4>
            <p className="text-sm text-gray-700 mb-3">
              Our commitment to financial and legal integrity ensures that every transaction
              is conducted with the highest ethical standards.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Full regulatory compliance</li>
              <li>• Transparent financial practices</li>
              <li>• Anti-corruption measures</li>
              <li>• Ethical business conduct</li>
            </ul>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Pillar 2: Quality</h4>
            <p className="text-sm text-gray-700 mb-3">
              Quality excellence through rigorous inspection and testing ensures customer
              satisfaction and product reliability.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• ISO 9001:2015 alignment</li>
              <li>• Pre-shipment inspections</li>
              <li>• Product certifications</li>
              <li>• Continuous quality monitoring</li>
            </ul>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Pillar 3: People</h4>
            <p className="text-sm text-gray-700 mb-3">
              Fair labor practices and worker dignity are fundamental to our supply chain
              operations.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• No child or forced labor</li>
              <li>• Fair wages and working conditions</li>
              <li>• Regular factory audits</li>
              <li>• Worker rights protection</li>
            </ul>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Pillar 4: Planet</h4>
            <p className="text-sm text-gray-700 mb-3">
              Environmental responsibility through sustainable practices that reduce our
              carbon footprint.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Eco-friendly packaging</li>
              <li>• Green logistics solutions</li>
              <li>• Paperless operations</li>
              <li>• Carbon emission reduction</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Four Pillars, One Commitment: Excellence</p>
          <p className="mt-2 text-white/90">
            Our compliance framework ensures that we deliver exceptional value while
            maintaining the highest standards of integrity, quality, ethics, and
            sustainability.
          </p>
        </div>

        {/* Call-to-Action box */}
        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white my-8">
          <h4 className="text-2xl font-bold mb-4">
            Partner with a Company You Can Trust
          </h4>
          <p className="mb-6 text-white/90">
            Our comprehensive compliance framework ensures that every aspect of our
            operations meets or exceeds international standards. Experience the confidence
            that comes from working with a truly compliant and responsible trade partner.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0a4a9e] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            Start Your Journey with Zexfro
          </a>
        </div>
      </DocSection>
    </DocLayout>
  );
}

