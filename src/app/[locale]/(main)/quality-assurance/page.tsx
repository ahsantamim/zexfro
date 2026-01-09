import { DocLayout, DocSection } from "@/components/ui/DocLayout";
import {
  ShieldCheck,
  Users,
  FileCheck,
  Eye,
  Award,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "qualityAssurance" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const sections = [
  { id: "overview", title: "Quality Assurance Overview" },
  { id: "partner-vetting", title: "Verified Partners & Product Vetting" },
  { id: "compliance", title: "Regulatory Compliance & Security" },
  { id: "monitoring", title: "Real-Time Monitoring & Transparency" },
  { id: "standards", title: "International Standards Alignment" },
  { id: "practice", title: "Quality Assurance in Practice" },
];

export default function QualityAssurancePage() {
  return (
    <DocLayout
      sections={sections}
      pageTitle="Quality Assurance"
      pageDescription="Zexfro International Ltd's quality assurance model ensures that every aspect of international trade—from supplier vetting to final delivery—meets the highest standards of quality, compliance, and reliability."
    >
      {/* Section 1: Quality Assurance Overview */}
      <DocSection id="overview" title="Quality Assurance Overview">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#0a4a9e]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Commitment to Quality Excellence
            </h3>
            <p className="text-gray-600">
              Comprehensive quality assurance framework ensuring reliable,
              compliant, and high-standard international trade operations.
            </p>
          </div>
        </div>

        <p>
          Zexfro International Ltd is a Dhaka-based import, export, and global
          trade services company that facilitates international trade by
          connecting verified partners, managing logistics, and handling product
          sourcing and distribution. Our quality assurance approach is
          integrated into every aspect of our operations.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80"
            alt="Quality assurance and control processes"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              Excellence in Quality Standards
            </p>
          </div>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Core Elements of Zexfro's Quality Assurance
        </h4>
        <p>
          While Zexfro does not publicly publish an extensive standardized
          Quality Assurance manual, the company highlights several commitments
          related to quality compliance and partner/product standards. Our
          approach ensures that quality is maintained throughout the entire
          trade cycle.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">Our Quality Pillars:</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>
                <strong>Verified Network:</strong> All partners vetted for
                reliability and compliance
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>
                <strong>Regulatory Compliance:</strong> Full adherence to
                international trade laws and standards
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>
                <strong>Transparent Operations:</strong> Real-time tracking and
                monitoring throughout the supply chain
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>
                <strong>International Standards:</strong> Alignment with global
                quality norms and expectations
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Quality at Every Step</p>
          <p className="mt-2 text-white/90">
            From supplier selection to final delivery, quality assurance is
            embedded in every aspect of our operations.
          </p>
        </div>
      </DocSection>

      {/* Section 2: Verified Partners & Product Vetting */}
      <DocSection
        id="partner-vetting"
        title="Verified Partners & Product Vetting"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Quality Control at the Network Level
            </h3>
            <p className="text-gray-600">
              Comprehensive vetting processes ensure only reliable, compliant
              partners enter our network.
            </p>
          </div>
        </div>

        <p>
          Zexfro's platform emphasizes quality control at the network level
          through rigorous partner evaluation and product vetting. This
          proactive approach ensures that only verified, reliable partners are
          part of our ecosystem, protecting both buyers and sellers from
          potential risks.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
            alt="Partner verification and vetting process"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Verified Partner Network</p>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            Partner Vetting Process:
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Comprehensive Partner Verification
              </h5>
              <p className="text-sm text-gray-700 mb-2">
                All partners are vetted before entering the network to ensure
                reliability and compliance. Our verification process includes:
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Business registration and legal status verification</li>
                <li>• Track record and reputation assessment</li>
                <li>• Financial stability checks</li>
                <li>• Compliance with local and international regulations</li>
                <li>• Quality management system evaluation</li>
                <li>• References from previous clients and partners</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Product Quality Standards
              </h5>
              <p className="text-sm text-gray-700">
                Products offered through the platform are required to meet
                international quality standards, which helps protect buyers from
                low-quality or non-compliant goods. We ensure that all products
                align with recognized industry benchmarks and certification
                requirements.
              </p>
            </div>
          </div>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Risk Reduction Through Proactive Vetting
        </h4>
        <p>
          This vetting process functions as a key quality assurance mechanism by
          evaluating suppliers before trade begins, reducing risk for importers
          and exporters. By implementing rigorous screening protocols, we
          eliminate potentially problematic partners before they can impact our
          clients' operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-white border-2 border-green-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">For Buyers</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Confidence in supplier reliability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Assurance of product quality standards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Reduced risk of non-compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Protection from fraudulent suppliers</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-green-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">For Sellers</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Access to verified buyer network</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Enhanced credibility and trust</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Payment security assurance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Professional business environment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">
            Quality Starts with the Right Partners
          </p>
          <p className="mt-2 text-white/90">
            Our rigorous vetting process ensures that every partner in our
            network meets our high standards for reliability and quality.
          </p>
        </div>
      </DocSection>

      {/* Section 3: Regulatory Compliance & Security */}
      <DocSection id="compliance" title="Regulatory Compliance & Security">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileCheck className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Strong Compliance Framework
            </h3>
            <p className="text-gray-600">
              Full regulatory compliance with international trade laws,
              especially European Union trade regulations.
            </p>
          </div>
        </div>

        <p>
          Zexfro operates under a strong compliance framework that ensures all
          trade operations meet legal and safety standards required for
          international commerce. Our commitment to regulatory compliance is a
          fundamental aspect of our quality assurance approach.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
            alt="Regulatory compliance and documentation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              Comprehensive Compliance Management
            </p>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            Compliance Commitments:
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                The company ensures <strong>full regulatory compliance</strong>{" "}
                with relevant trade laws, especially European Union trade
                regulations
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                Compliance is part of our quality assurance focus, ensuring that
                cross-border movement of goods meets legal and safety standards
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                All documentation is prepared according to international
                standards and destination country requirements
              </span>
            </li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Beyond Product Quality
        </h4>
        <p>
          Quality assurance at Zexfro isn't only about product integrity but
          also about meeting legal and logistical standards required in
          international trade. This comprehensive approach ensures that every
          aspect of the trade process adheres to regulatory requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Legal Compliance</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Import/export regulations adherence</li>
              <li>• Trade sanctions and embargo compliance</li>
              <li>• Anti-money laundering (AML) protocols</li>
              <li>• Intellectual property protection</li>
              <li>• Data protection and privacy laws</li>
              <li>• Consumer protection regulations</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Safety Standards</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Product safety certifications</li>
              <li>• Hazardous materials handling</li>
              <li>• Food safety regulations (where applicable)</li>
              <li>• Environmental compliance</li>
              <li>• Packaging and labeling requirements</li>
              <li>• Industry-specific safety standards</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            EU Trade Regulations Expertise
          </h4>
          <p className="text-gray-700 mb-3">
            Zexfro maintains specialized expertise in European Union trade
            regulations, ensuring smooth trade operations with EU member states.
            This includes:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl">✔</span>
              <span>CE marking requirements and conformity assessments</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl">✔</span>
              <span>
                REACH and RoHS compliance for chemicals and electronics
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl">✔</span>
              <span>EU customs procedures and tariff classification</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl">✔</span>
              <span>
                Origin certification and preferential trade agreements
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">
            Compliance as a Quality Foundation
          </p>
          <p className="mt-2 text-white/90">
            Our strong regulatory framework ensures legal, safe, and
            standard-compliant international trade operations.
          </p>
        </div>
      </DocSection>

      {/* Section 4: Real-Time Monitoring & Transparency */}
      <DocSection id="monitoring" title="Real-Time Monitoring & Transparency">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Eye className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Visibility Throughout the Supply Chain
            </h3>
            <p className="text-gray-600">
              Real-time tracking and automated updates ensure transparency and
              early issue detection.
            </p>
          </div>
        </div>

        <p>
          One way Zexfro supports quality assurance is through real-time
          tracking and automated updates of shipments and orders. This
          transparency-focused approach allows clients to monitor their goods
          throughout the entire supply chain journey, from origin to final
          delivery.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
            alt="Real-time monitoring and tracking systems"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Advanced Monitoring Systems</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            Transparency Benefits:
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>
                Clients can{" "}
                <strong>track goods throughout the supply chain</strong> from
                origin to delivery
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>
                This increases transparency and helps{" "}
                <strong>identify and resolve issues early</strong> — a quality
                assurance approach in logistics and delivery
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>
                Automated notifications keep all stakeholders informed of
                shipment status and milestones
              </span>
            </li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Service Quality Through Technology
        </h4>
        <p>
          While this isn't traditional "product quality control," it ensures
          that the overall service quality offered by the company adheres to
          international expectations for reliability and traceability. Real-time
          monitoring serves as a quality assurance tool by enabling proactive
          problem-solving and continuous oversight.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-white border border-yellow-600 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600 font-semibold mb-1">
              Real-Time Tracking
            </div>
            <div className="text-xs text-gray-500">Continuous monitoring</div>
          </div>
          <div className="bg-white border border-yellow-600 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">100%</div>
            <div className="text-sm text-gray-600 font-semibold mb-1">
              Transparency
            </div>
            <div className="text-xs text-gray-500">Full visibility</div>
          </div>
          <div className="bg-white border border-yellow-600 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              Instant
            </div>
            <div className="text-sm text-gray-600 font-semibold mb-1">
              Alerts
            </div>
            <div className="text-xs text-gray-500">Automated updates</div>
          </div>
        </div>

        <div className="bg-white border-2 border-yellow-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            Real-Time Monitoring Features:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>GPS-enabled shipment tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>Milestone notifications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>Estimated arrival time updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>Customs clearance status</span>
              </li>
            </ul>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>Delay alerts and explanations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>Document verification status</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>Quality checkpoint confirmations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>Delivery confirmation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Transparency Builds Trust</p>
          <p className="mt-2 text-white/90">
            Real-time monitoring ensures service quality, reliability, and
            traceability that meet international expectations.
          </p>
        </div>
      </DocSection>

      {/* Section 5: International Standards Alignment */}
      <DocSection id="standards" title="International Standards Alignment">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Award className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Global Quality Norms & Standards
            </h3>
            <p className="text-gray-600">
              Alignment with internationally recognized quality standards and
              trade requirements.
            </p>
          </div>
        </div>

        <p>
          Although Zexfro does not list specific certificates (like ISO 9001) on
          its website, its emphasis on "products meet international quality
          standards" implies alignment with global norms commonly expected in
          global trade. This commitment ensures that all products and services
          meet the quality expectations of international markets.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80"
            alt="International standards and quality certifications"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              International Quality Standards
            </p>
          </div>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            Standards Alignment Framework:
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Quality Standards for Traded Goods
              </h5>
              <p className="text-sm text-gray-700">
                Ensuring all products meet recognized industry standards such as
                ISO, ASTM, IEC, and other relevant quality benchmarks
                appropriate to the product category.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Compliance with Import/Export Requirements
              </h5>
              <p className="text-sm text-gray-700">
                Products and documentation meet the specific requirements of
                both origin and destination countries, including safety,
                labeling, and certification requirements.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Verification of Manufacturer Credibility
              </h5>
              <p className="text-sm text-gray-700">
                Confirming that manufacturers hold appropriate certifications
                and maintain quality management systems that align with
                international best practices.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Adherence to Regulatory Frameworks in Target Markets
              </h5>
              <p className="text-sm text-gray-700">
                Understanding and meeting the specific regulatory and quality
                requirements of destination markets, including EU, North
                American, and Asian standards.
              </p>
            </div>
          </div>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Reputation-Based Quality Commitment
        </h4>
        <p>
          This type of assurance is typical for international trading firms
          whose reputation depends on delivering high-quality and compliant
          products to their clients. Our success is built on maintaining these
          standards consistently across all transactions and partnerships.
        </p>

        <div className="bg-white border-2 border-orange-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4 text-center">
            Recognized Standards We Support
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-orange-600 text-sm">
                ISO Standards
              </p>
              <p className="text-xs text-gray-600 mt-1">Quality management</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-orange-600 text-sm">
                CE Marking
              </p>
              <p className="text-xs text-gray-600 mt-1">EU compliance</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-orange-600 text-sm">BSTI</p>
              <p className="text-xs text-gray-600 mt-1">Bangladesh standards</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-orange-600 text-sm">GMP/HACCP</p>
              <p className="text-xs text-gray-600 mt-1">Food safety</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Aligned with Global Excellence</p>
          <p className="mt-2 text-white/90">
            Our commitment to international standards ensures products meet
            quality expectations across all markets.
          </p>
        </div>
      </DocSection>

      {/* Section 6: Quality Assurance in Practice */}
      <DocSection id="practice" title="Quality Assurance in Practice">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Practical Quality Implementation
            </h3>
            <p className="text-gray-600">
              How Zexfro's quality assurance model works in day-to-day
              operations.
            </p>
          </div>
        </div>

        <p>
          In effect, Zexfro's quality assurance model includes comprehensive
          practices that span from initial supplier contact through final
          product delivery. Our practical approach ensures quality at every
          touchpoint of the international trade process.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&q=80"
            alt="Quality assurance implementation and practice"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Quality in Action</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-teal-50/20 border-2 border-teal-300 rounded-lg p-6 hover:border-teal-400 transition-colors">
            <h4 className="font-bold text-gray-900 mb-3">
              1. Supplier Qualification
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Checking supplier credentials</li>
              <li>• Ensuring legitimacy and compliance before onboarding</li>
              <li>• Verifying business licenses and certifications</li>
              <li>• Assessing production capabilities</li>
              <li>• Reviewing quality management systems</li>
            </ul>
          </div>

          <div className="bg-teal-50/20 border-2 border-teal-300 rounded-lg p-6 hover:border-teal-400 transition-colors">
            <h4 className="font-bold text-gray-900 mb-3">
              2. Product Standard Confirmation
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                • Evaluating whether offered goods conform to recognized
                standards
              </li>
              <li>• Preventing the sale or promotion of substandard items</li>
              <li>• Conducting pre-shipment inspections</li>
              <li>• Testing samples for quality compliance</li>
              <li>• Verifying product specifications</li>
            </ul>
          </div>

          <div className="bg-teal-50/20 border-2 border-teal-300 rounded-lg p-6 hover:border-teal-400 transition-colors">
            <h4 className="font-bold text-gray-900 mb-3">
              3. Regulatory Quality
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                • Meeting legal requirements in key markets, especially within
                the EU
              </li>
              <li>• Supporting documentation and compliance checks</li>
              <li>• Ensuring proper product certifications</li>
              <li>• Managing customs and regulatory documentation</li>
              <li>• Maintaining compliance databases</li>
            </ul>
          </div>

          <div className="bg-teal-50/20 border-2 border-teal-300 rounded-lg p-6 hover:border-teal-400 transition-colors">
            <h4 className="font-bold text-gray-900 mb-3">
              4. Supply Chain Transparency
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                • Visibility in logistics and shipping to detect issues early
              </li>
              <li>
                • Enabling client confidence through tracking and notifications
              </li>
              <li>• Real-time status updates</li>
              <li>• Proactive problem resolution</li>
              <li>• Comprehensive reporting systems</li>
            </ul>
          </div>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Comparison with Traditional QA Frameworks
        </h4>
        <p>
          Traditional quality assurance systems (like ISO 9001) involve
          documented Quality Management Systems (QMS), internal audits,
          corrective actions, and continuous improvement programs. Zexfro's
          public materials highlight quality control practices oriented toward
          proactive partner vetting and regulatory compliance rather than
          listing formal ISO certifications or detailed documented QA processes
          on their website.
        </p>

        <p className="mt-4">
          However, the emphasis on verified partners and meeting "international
          standards" signals a quality-oriented approach that aligns with basic
          principles of quality assurance, particularly in global trade.
        </p>

        <div className="bg-teal-50/30 border-l-4 border-teal-500 p-6 my-6 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3">
            Zexfro's Quality Assurance Strengths:
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>
                <strong>
                  Preventing low-quality products from entering the system
                </strong>{" "}
                — Proactive vetting stops problems before they start
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>
                <strong>
                  Ensuring consistent quality through vendor checks
                </strong>{" "}
                — Continuous monitoring and evaluation of suppliers
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>
                <strong>
                  Providing transparency in delivery and compliance
                </strong>{" "}
                — Real-time visibility builds trust and enables quick action
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-teal-50/40 border-2 border-teal-500 rounded-lg p-6 my-6 shadow-md">
          <h4 className="font-bold text-gray-900 mb-4 text-center text-xl">
            Quality Assurance Results
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-teal-50/30 rounded-lg p-6 h-full">
                <div className="text-4xl mb-3">🛡️</div>
                <p className="font-semibold text-gray-900 mb-2">
                  Protected Buyers
                </p>
                <p className="text-sm text-gray-600">
                  Confidence in quality and compliance
                </p>
              </div>
            </div>
            <div>
              <div className="bg-teal-50/30 rounded-lg p-6 h-full">
                <div className="text-4xl mb-3">✅</div>
                <p className="font-semibold text-gray-900 mb-2">
                  Verified Quality
                </p>
                <p className="text-sm text-gray-600">
                  Consistent standards across all products
                </p>
              </div>
            </div>
            <div>
              <div className="bg-teal-50/30 rounded-lg p-6 h-full">
                <div className="text-4xl mb-3">📊</div>
                <p className="font-semibold text-gray-900 mb-2">
                  Full Transparency
                </p>
                <p className="text-sm text-gray-600">
                  Complete visibility throughout process
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">
            Quality Through Action, Not Just Words
          </p>
          <p className="mt-2 text-white/90">
            Our practical quality assurance approach ensures every transaction
            meets the highest standards of reliability and compliance.
          </p>
        </div>

        {/* Call-to-Action box */}
        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white my-8">
          <h4 className="text-2xl font-bold mb-4">
            Experience Quality You Can Trust
          </h4>
          <p className="mb-6 text-white/90">
            Partner with Zexfro International Ltd and benefit from our
            comprehensive quality assurance framework that ensures reliable,
            compliant, and high-standard international trade operations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0a4a9e] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            Get Started Today
          </a>
        </div>
      </DocSection>
    </DocLayout>
  );
}
