import { DocLayout, DocSection } from "@/components/ui/DocLayout";
import { FileText, Building2, ShieldCheck, Package, Banknote, Receipt, Globe2, Database, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'documentationCompliance' });
  
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

const sections = [
  { id: "overview", title: "Documentation & Compliance Framework" },
  { id: "company", title: "Company Registration & Legal Foundation" },
  { id: "trade-auth", title: "Import & Export Authorization" },
  { id: "customs", title: "Customs & Shipment Compliance" },
  { id: "banking", title: "Banking & Financial Compliance" },
  { id: "tax", title: "Tax & VAT Compliance" },
  { id: "international", title: "International Trade Compliance" },
  { id: "controls", title: "Internal Control & Record Management" },
  { id: "commitment", title: "Compliance Commitment" },
];

export default function DocumentationCompliancePage() {
  return (
    <DocLayout
      sections={sections}
      pageTitle="Documentation & Compliance"
      pageDescription="Zero International Limited operates under a comprehensive documentation and compliance framework to ensure full legal validity, transparent trade operations, and smooth international business activities. All processes strictly follow the regulatory requirements of Bangladesh and applicable international trade standards."
    >
      {/* Section 1: Overview */}
      <DocSection id="overview" title="Documentation & Compliance Framework">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6 text-[#0a4a9e]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Full Legal Compliance & Transparency
            </h3>
            <p className="text-gray-600">
              Comprehensive documentation framework ensuring legal validity and regulatory
              compliance across all operations.
            </p>
          </div>
        </div>

        <p>
          Zero International Limited operates under a comprehensive documentation and compliance
          framework to ensure full legal validity, transparent trade operations, and smooth
          international business activities. All processes strictly follow the regulatory
          requirements of Bangladesh and applicable international trade standards.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
            alt="Documentation and compliance framework"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Comprehensive Compliance Framework</p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">Our Documentation Framework Includes:</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>
                <strong>Company Registration & Legal Foundation:</strong> Proper incorporation
                and statutory documents
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>
                <strong>Import & Export Authorization:</strong> Full authorization for
                international trade activities
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>
                <strong>Customs & Shipment Compliance:</strong> Accurate declarations and
                transparent procedures
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>
                <strong>Banking & Financial Compliance:</strong> Authorized transactions
                through commercial banks
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>
                <strong>Tax & VAT Compliance:</strong> Full compliance with national tax
                regulations
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">
            Complete Documentation for Transparent Operations
          </p>
          <p className="mt-2 text-white/90">
            Every aspect of our business is properly documented and compliant with all
            applicable regulations.
          </p>
        </div>
      </DocSection>

      {/* Section 2: Company Registration & Legal Foundation */}
      <DocSection id="company" title="Company Registration & Legal Foundation">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Building2 className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Legally Registered and Properly Incorporated
            </h3>
            <p className="text-gray-600">
              Zero International Limited is a legally registered company in Bangladesh with
              all statutory documents properly maintained.
            </p>
          </div>
        </div>

        <p>
          Zero International Limited is a legally registered company in Bangladesh. All
          incorporation and statutory documents are properly maintained and updated to ensure
          regulatory compliance and corporate governance.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
            alt="Company registration and legal documents"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Proper Legal Foundation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Key Documents</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Certificate of Incorporation</strong> - Legal entity establishment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Memorandum of Association (MOA)</strong> - Company objectives and powers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Articles of Association (AOA)</strong> - Internal management rules</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Director and Shareholder Records</strong> - Complete ownership documentation</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Issuing Authority</h4>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Registrar of Joint Stock Companies and Firms (RJSC)
                </p>
                <p className="text-sm text-gray-700">
                  All incorporation documents are issued and maintained by the RJSC, the
                  official government authority responsible for company registration in Bangladesh.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-xs font-semibold text-gray-600 mb-2">CORPORATE GOVERNANCE</p>
                <p className="text-sm text-gray-700">
                  Regular updates and maintenance of all statutory records ensure ongoing
                  compliance with Bangladesh Companies Act requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">Trade License</h4>
          <p className="text-gray-700 mb-3">
            The company holds a valid <strong>Trade License</strong> issued by the relevant
            city authority and renews it annually to maintain uninterrupted business operations.
          </p>
          <div className="bg-white rounded-lg p-4 mt-3">
            <p className="text-sm font-semibold text-gray-900 mb-1">Issuing Authority:</p>
            <p className="text-sm text-gray-700">
              <strong>Dhaka North City Corporation (DNCC)</strong> - The municipal authority
              responsible for issuing and renewing trade licenses for businesses operating
              within Dhaka North.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Fully Licensed and Legally Compliant</p>
          <p className="mt-2 text-white/90">
            All incorporation and operational licenses are maintained in full compliance with
            Bangladesh law.
          </p>
        </div>
      </DocSection>

      {/* Section 3: Import & Export Authorization */}
      <DocSection id="trade-auth" title="Import & Export Authorization">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Fully Authorized for International Trade
            </h3>
            <p className="text-gray-600">
              Complete authorization to conduct import and export activities in Bangladesh.
            </p>
          </div>
        </div>

        <p>
          Zero International Limited is fully authorized to conduct import and export activities
          in Bangladesh. We hold all necessary certificates and registrations required for
          legal international trade operations.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80"
            alt="Import and export authorization"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Authorized International Trade Operations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-4 text-center">
              Import Registration Certificate (IRC)
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              The IRC authorizes Zero International Limited to import goods into Bangladesh
              from international markets. This certificate ensures:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>Legal authorization to import products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>Compliance with Bangladesh import policies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>Access to international supplier networks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>Customs clearance authorization</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-4 text-center">
              Export Registration Certificate (ERC)
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              The ERC authorizes Zero International Limited to export goods from Bangladesh
              to international markets. This certificate provides:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>Legal authorization to export products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>Compliance with Bangladesh export policies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>Access to international buyer networks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>Export incentive eligibility</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">Issuing Authority</h4>
          <div className="space-y-3">
            <p className="text-gray-700">
              <strong>Office of the Chief Controller of Imports & Exports (CCI&E)</strong>
            </p>
            <p className="text-sm text-gray-700">
              The CCI&E is the designated government authority under the Ministry of Commerce
              responsible for:
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mt-3">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Issuing and renewing IRC and ERC certificates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Monitoring import and export compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Maintaining trader registration database</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Implementing Bangladesh trade policies</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Fully Certified for Global Trade</p>
          <p className="mt-2 text-white/90">
            Our IRC and ERC certifications ensure legal, compliant, and seamless international
            trade operations.
          </p>
        </div>
      </DocSection>

      {/* Section 4: Customs & Shipment Compliance */}
      <DocSection id="customs" title="Customs & Shipment Compliance">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Package className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Transparent Customs Procedures
            </h3>
            <p className="text-gray-600">
              All shipments processed according to Bangladesh Customs regulations for accurate
              declarations and timely clearance.
            </p>
          </div>
        </div>

        <p>
          All shipments are processed in accordance with Bangladesh Customs regulations to
          ensure accurate declarations, timely clearance, and full transparency. Our customs
          compliance procedures guarantee smooth international trade operations.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
            alt="Customs clearance and shipping documentation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Compliant Customs Procedures</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-2">
            Customs &amp; Shipment Compliance Documents
          </h4>
          <p className="text-sm text-gray-700 mb-5">
            For every consignment, we generate and preserve mandatory trade documents required
            by Bangladesh Customs, Port Authorities, and International Partners:
          </p>

          <div className="rounded-lg bg-white/70 border border-yellow-200 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 bg-white border-b border-yellow-200">
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Document</p>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Purpose</p>
            </div>
            <ul className="divide-y divide-yellow-100">
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">Commercial Invoice</span>
                <span>Proof of trade value</span>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">Packing List</span>
                <span>Product breakdown &amp; weight</span>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">Bill of Lading / Airway Bill</span>
                <span>Shipment contract</span>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">Certificate of Origin (COO)</span>
                <span>Product source proof</span>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">LC (Letter of Credit) documents</span>
                <span>Bank-secured trade</span>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">Insurance Certificate</span>
                <span>Cargo safety</span>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">Proforma Invoice</span>
                <span>Buyer-seller agreement</span>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">
                  LCAF (Letter of Credit Authorization Form)
                </span>
                <span>Required for LC imports</span>
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-700 mt-5">
            These documents ensure fast clearance at <strong>Chattogram Port</strong>,{" "}
            <strong>ICD Dhaka</strong>, and{" "}
            <strong>Hazrat Shahjalal International Airport Cargo</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-white border-2 border-yellow-600 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">📋</div>
            <h4 className="font-bold text-gray-900 mb-2">Accurate Declarations</h4>
            <p className="text-sm text-gray-600">
              100% accuracy in customs documentation and product descriptions
            </p>
          </div>
          <div className="bg-white border-2 border-yellow-600 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-bold text-gray-900 mb-2">Timely Clearance</h4>
            <p className="text-sm text-gray-600">
              Efficient processing ensuring minimal delays at customs
            </p>
          </div>
          <div className="bg-white border-2 border-yellow-600 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🔍</div>
            <h4 className="font-bold text-gray-900 mb-2">Full Transparency</h4>
            <p className="text-sm text-gray-600">
              Complete documentation trail for every shipment
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Seamless Customs Clearance</p>
          <p className="mt-2 text-white/90">
            Our comprehensive documentation ensures smooth customs procedures and compliance
            with all regulations.
          </p>
        </div>
      </DocSection>

      {/* Section 5: Banking & Financial Compliance */}
      <DocSection id="banking" title="Banking & Financial Compliance">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Banknote className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Authorized Financial Transactions
            </h3>
            <p className="text-gray-600">
              All trade-related financial transactions conducted through authorized commercial
              banks in compliance with foreign exchange regulations.
            </p>
          </div>
        </div>

        <p>
          All trade-related financial transactions are conducted through authorized commercial
          banks and comply with foreign exchange regulations established by Bangladesh Bank,
          the central banking authority.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200&q=80"
            alt="Banking and financial compliance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Compliant Financial Operations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Financial Documentation</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Bank Solvency Certificate:</strong> Proof of financial standing and
                  creditworthiness
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Letter of Credit (LC) Documentation:</strong> Secure payment
                  mechanism for international transactions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Proforma Invoice:</strong> Preliminary transaction documentation for
                  LC establishment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Foreign Exchange Endorsements:</strong> Proper documentation of all
                  foreign currency transactions
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Regulatory Authority</h4>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Bangladesh Bank</p>
                <p className="text-sm text-gray-700 mb-3">
                  The central bank of Bangladesh regulates all foreign exchange transactions
                  and international trade payments.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-xs font-semibold text-gray-600 mb-2">
                  COMPLIANCE REQUIREMENTS
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• All international payments through authorized dealers</li>
                  <li>• Proper documentation of foreign exchange transactions</li>
                  <li>• Adherence to Bangladesh Bank forex regulations</li>
                  <li>• Timely reporting of trade transactions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">Banking Compliance Benefits:</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold text-xl">✔</span>
              <span>Secure and transparent financial transactions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold text-xl">✔</span>
              <span>Full compliance with Bangladesh Bank regulations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold text-xl">✔</span>
              <span>Protection through letter of credit mechanisms</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold text-xl">✔</span>
              <span>Proper audit trail for all financial operations</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Secure Financial Operations</p>
          <p className="mt-2 text-white/90">
            All transactions conducted through authorized channels in full compliance with
            Bangladesh Bank regulations.
          </p>
        </div>
      </DocSection>

      {/* Section 6: Tax & VAT Compliance */}
      <DocSection id="tax" title="Tax & VAT Compliance">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Receipt className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Full Tax & VAT Compliance
            </h3>
            <p className="text-gray-600">
              Complete compliance with national tax and VAT regulations with accurate
              financial reporting.
            </p>
          </div>
        </div>

        <p>
          Zero International Limited fully complies with national tax and VAT regulations and
          maintains accurate financial reporting. All tax obligations are met in accordance
          with the requirements of the National Board of Revenue (NBR).
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80"
            alt="Tax and VAT compliance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Comprehensive Tax Compliance</p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">Compliance Coverage</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">VAT Compliance</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>VAT Registration:</strong> Properly registered with NBR for VAT
                    collection and remittance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Monthly VAT Returns:</strong> Timely filing of VAT returns and
                    payment of dues
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>VAT Documentation:</strong> Proper invoicing and record-keeping
                    for VAT transactions
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-3">Income Tax Compliance</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Annual Income Tax Returns:</strong> Complete and accurate tax
                    return filing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Withholding Tax Records:</strong> Proper deduction and remittance
                    of withholding taxes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Tax Audit Readiness:</strong> Maintained documentation for tax
                    audits and assessments
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-red-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4 text-center">Regulatory Authority</h4>
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-gray-900">
              National Board of Revenue (NBR)
            </p>
            <p className="text-sm text-gray-600 mt-2">
              The apex authority for tax administration in Bangladesh
            </p>
          </div>
          <p className="text-sm text-gray-700 text-center">
            The NBR is responsible for formulating and implementing tax policies, collecting
            revenue, and ensuring compliance with tax laws including VAT Act, Income Tax
            Ordinance, and Customs Act.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
          <div className="bg-red-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-2">✓</div>
            <p className="font-semibold text-gray-900 text-sm mb-1">VAT Registered</p>
            <p className="text-xs text-gray-600">Valid registration</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-2">✓</div>
            <p className="font-semibold text-gray-900 text-sm mb-1">Timely Returns</p>
            <p className="text-xs text-gray-600">Monthly VAT filing</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-2">✓</div>
            <p className="font-semibold text-gray-900 text-sm mb-1">Tax Compliant</p>
            <p className="text-xs text-gray-600">Annual returns filed</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-2">✓</div>
            <p className="font-semibold text-gray-900 text-sm mb-1">Audit Ready</p>
            <p className="text-xs text-gray-600">Complete records</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">100% Tax Compliance</p>
          <p className="mt-2 text-white/90">
            Full adherence to all VAT and income tax requirements ensures transparent and
            responsible financial operations.
          </p>
        </div>
      </DocSection>

      {/* Section 7: International Trade Compliance */}
      <DocSection id="international" title="International Trade Compliance">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Globe2 className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Adherence to National & International Standards
            </h3>
            <p className="text-gray-600">
              Full compliance with Bangladesh trade policies and international shipping
              standards.
            </p>
          </div>
        </div>

        <p>
          The company adheres to all applicable national and international trade regulations,
          ensuring legal and compliant cross-border commerce. Our operations are governed by
          comprehensive trade policies and international standards.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80"
            alt="International trade compliance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Global Trade Standards</p>
          </div>
        </div>

        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            Applicable Trade Regulations & Standards:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">National Regulations</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>
                    <strong>Bangladesh Import Policy Order:</strong> Governing all import
                    activities and product categories
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>
                    <strong>Bangladesh Export Policy:</strong> Framework for export
                    operations and incentives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>
                    <strong>Customs Act:</strong> Regulations for customs procedures and
                    clearance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>
                    <strong>VAT & Supplementary Duty Act:</strong> Tax obligations on
                    imported and exported goods
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-3">International Standards</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>
                    <strong>Incoterms:</strong> International commercial terms for
                    shipment and delivery
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>
                    <strong>International shipping standards:</strong> Compliance with
                    maritime and air cargo regulations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>
                    <strong>Product safety standards:</strong> CE marking, ISO certifications
                    where applicable
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>
                    <strong>Destination country requirements:</strong> Compliance with
                    import regulations of target markets
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="bg-white border-2 border-indigo-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-center">Policy Compliance</h4>
            <p className="text-sm text-gray-700 text-center mb-4">
              Full adherence to Bangladesh import and export policies
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>• Approved product categories</li>
              <li>• Restricted item compliance</li>
              <li>• Documentation requirements</li>
              <li>• Licensing obligations</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-indigo-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-center">Customs Compliance</h4>
            <p className="text-sm text-gray-700 text-center mb-4">
              Complete adherence to customs procedures and regulations
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>• Accurate HS code classification</li>
              <li>• Proper valuation methods</li>
              <li>• Tariff compliance</li>
              <li>• Origin certification</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-indigo-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-center">International Standards</h4>
            <p className="text-sm text-gray-700 text-center mb-4">
              Compliance with global shipping and logistics standards
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>• Incoterms 2020</li>
              <li>• IATA/IMO regulations</li>
              <li>• Product certifications</li>
              <li>• Quality standards</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Comprehensive Trade Compliance</p>
          <p className="mt-2 text-white/90">
            Our operations meet all national and international trade requirements for seamless
            global commerce.
          </p>
        </div>
      </DocSection>

      {/* Section 8: Internal Control & Record Management */}
      <DocSection id="controls" title="Internal Control & Record Management">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Database className="w-6 h-6 text-cyan-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Structured Control System for Accountability
            </h3>
            <p className="text-gray-600">
              Comprehensive internal controls ensuring audit readiness and regulatory
              compliance.
            </p>
          </div>
        </div>

        <p>
          To ensure accountability and audit readiness, Zero International Limited maintains
          a structured internal control system. Our record management practices ensure that
          all documentation is secure, accessible, and compliant with regulatory requirements.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=80"
            alt="Internal controls and record management"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Structured Control Systems</p>
          </div>
        </div>

        <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">Key Practices</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 font-bold">•</span>
                <span>
                  <strong>Secure Digital and Physical Document Storage:</strong> Dual storage
                  system ensuring document safety and accessibility
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 font-bold">•</span>
                <span>
                  <strong>Controlled Access to Sensitive Records:</strong> Role-based access
                  control protecting confidential information
                </span>
              </li>
            </ul>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 font-bold">•</span>
                <span>
                  <strong>Regular Internal Reviews and Compliance Checks:</strong> Periodic
                  audits ensuring ongoing compliance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 font-bold">•</span>
                <span>
                  <strong>Ongoing Regulatory Monitoring:</strong> Continuous tracking of
                  regulatory changes and updates
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-white border-2 border-cyan-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Document Management System</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>Digital archiving with backup systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>Physical document storage with security measures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>Document indexing and retrieval systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>Retention policy compliance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>Audit trail maintenance</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-cyan-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Quality Control Measures</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>Regular compliance audits and reviews</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>Staff training on compliance procedures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>Process documentation and standard operating procedures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>Corrective action implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>Continuous improvement initiatives</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Audit-Ready at All Times</p>
          <p className="mt-2 text-white/90">
            Our structured internal control system ensures accountability, transparency, and
            compliance readiness.
          </p>
        </div>
      </DocSection>

      {/* Section 9: Compliance Commitment */}
      <DocSection id="commitment" title="Compliance Commitment">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Our Commitment to Excellence
            </h3>
            <p className="text-gray-600">
              Maintaining the highest standards of legal compliance, financial transparency,
              and ethical trade practices.
            </p>
          </div>
        </div>

        <p className="text-lg">
          Zero International Limited is committed to maintaining the highest standards of legal
          compliance, financial transparency, and ethical trade practices across all operations.
          Our compliance framework ensures reliability, trust, and long-term partnerships with
          clients, suppliers, and regulatory authorities.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
            alt="Compliance commitment and business integrity"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Commitment to Excellence</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="font-bold text-gray-900 mb-2">Reliability</h4>
            <p className="text-sm text-gray-600">
              Consistent compliance and dependable operations across all business activities
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h4 className="font-bold text-gray-900 mb-2">Trust</h4>
            <p className="text-sm text-gray-600">
              Building lasting partnerships through transparency and ethical practices
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h4 className="font-bold text-gray-900 mb-2">Excellence</h4>
            <p className="text-sm text-gray-600">
              Exceeding regulatory requirements and industry standards
            </p>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">Our Core Values</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>
                <strong>Legal Compliance:</strong> Full adherence to all applicable laws and
                regulations
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>
                <strong>Financial Transparency:</strong> Clear and accurate financial
                reporting and documentation
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>
                <strong>Ethical Trade Practices:</strong> Responsible and fair business
                conduct in all transactions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>
                <strong>Continuous Improvement:</strong> Ongoing enhancement of compliance
                systems and processes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>
                <strong>Stakeholder Partnership:</strong> Building trust with clients,
                suppliers, and regulators
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white text-center mb-8">
          <p className="text-xl font-bold">Compliance is Our Foundation</p>
          <p className="mt-2 text-white/90">
            Our unwavering commitment to compliance ensures sustainable, transparent, and
            trustworthy international trade operations.
          </p>
        </div>

        {/* Call-to-Action box */}
        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white">
          <h4 className="text-2xl font-bold mb-4">
            Experience Compliant and Transparent Trade
          </h4>
          <p className="mb-6 text-white/90">
            Partner with Zero International Limited and benefit from our comprehensive
            documentation and compliance framework. Every transaction is backed by proper
            legal authorization, transparent procedures, and ethical business practices.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0a4a9e] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            Connect with Us Today
          </a>
        </div>
      </DocSection>
    </DocLayout>
  );
}

