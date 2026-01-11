"use client";

import { DocLayout, DocSection } from "@/components/ui/DocLayout";
import {
  Globe,
  TrendingUp,
  Truck,
  Shield,
  Clock,
  Users,
  Package,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CompetitiveAdvantagesPage() {
  const t = useTranslations("advantages");

  const sections = [
    { id: "global-network", title: t("sectionTitles.globalNetwork") },
    { id: "market-insight", title: t("sectionTitles.marketInsight") },
    { id: "trade-logistics", title: t("sectionTitles.tradeLogistics") },
    { id: "quality-pricing", title: t("sectionTitles.qualityPricing") },
    { id: "delivery", title: t("sectionTitles.delivery") },
    { id: "communication", title: t("sectionTitles.communication") },
    { id: "custom-solutions", title: t("sectionTitles.customSolutions") },
  ];

  return (
    <DocLayout
      sections={sections}
      pageTitle={t("pageTitle")}
      pageDescription={t("pageDescription")}
    >
      {/* Section 1: Strong Global Supplier & Buyer Network */}
      <DocSection id="global-network" title={t("sectionTitles.globalNetwork")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Globe className="w-6 h-6 text-[#0a4a9e]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("globalNetwork.subtitle")}
            </h3>
            <p className="text-gray-600">{t("globalNetwork.description")}</p>
          </div>
        </div>

        <p>{t("globalNetwork.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
            alt={t("globalNetwork.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              {t("globalNetwork.imageCaption")}
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("globalNetwork.capabilityTitle")}
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>{t("globalNetwork.capability1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>{t("globalNetwork.capability2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>{t("globalNetwork.capability3")}</span>
            </li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          {t("globalNetwork.exportsTitle")}
        </h4>
        <p>{t("globalNetwork.exportsDesc")}</p>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          {t("globalNetwork.partnershipsTitle")}
        </h4>
        <p>{t("globalNetwork.partnershipsDesc")}</p>

        <div className="bg-white border-2 border-[#0a4a9e] rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            {t("globalNetwork.benefitsTitle")}
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>{t("globalNetwork.benefit1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>{t("globalNetwork.benefit2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>{t("globalNetwork.benefit3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>{t("globalNetwork.benefit4")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>{t("globalNetwork.benefit5")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">
            {t("globalNetwork.conclusionTitle")}
          </p>
          <p className="mt-2 text-white/90">
            {t("globalNetwork.conclusionDesc")}
          </p>
        </div>
      </DocSection>

      {/* Section 2: Deep Market Insight in Bangladesh */}
      <DocSection id="market-insight" title="Deep Market Insight in Bangladesh">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Extensive Understanding of Local Market Dynamics
            </h3>
            <p className="text-gray-600">
              Our deep knowledge of the Bangladeshi market allows us to make
              informed decisions for higher profitability and successful trade
              operations.
            </p>
          </div>
        </div>

        <p>
          At Zexfro International Limited, our competitive edge is strengthened
          by our extensive understanding of the Bangladeshi market, trade
          environment, and consumer demand patterns.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
            alt="Market analysis and business intelligence"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              Data-Driven Market Intelligence
            </p>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            Understanding Local Demand & Industry Needs
          </h4>
          <p className="text-gray-700 mb-3">
            We continuously analyze market trends across sectors such as:
          </p>
          <ul className="space-y-1 text-gray-700 text-sm mb-4">
            <li>• Agriculture</li>
            <li>• Industrial machinery</li>
            <li>• Consumer goods</li>
            <li>• Raw materials</li>
            <li>• Global commodities</li>
          </ul>
          <p className="text-gray-700">
            Our research-driven approach helps us identify rising demand, seasonal sales peaks, pricing sensitivity, and distribution potential in Bangladesh. This ensures that imported goods are positioned for maximum sales impact and market acceptance.
          </p>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Knowledge of Regulations & Trade Compliance
        </h4>
        <p className="mb-4">
          We maintain strong expertise in import-export policies, customs procedures, taxation, documentation requirements, port regulations, and HS code classification. Our team stays updated with government trade rules, product certification needs, and compliance standards, minimizing legal or operational delays. This helps shipments clear faster and remain fully compliant.
        </p>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Pricing Intelligence & Market Positioning
        </h4>
        <p className="mb-4">
          We track real-time pricing behavior in local wholesale and retail channels. Our insights allow us to negotiate cost-effective sourcing, calculate landed cost accurately, and set competitive selling prices for distributors and wholesalers. We help businesses avoid overpricing or underpricing, ensuring healthy margins.
        </p>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Strong Distribution & Market Entry Strategy
        </h4>
        <p className="mb-4">
          We understand the operational structure of local supply chains, major trading hubs, B2B procurement channels, wholesale markets, and last-mile logistics. This enables us to guide suppliers and importers with effective product entry plans, bulk selling strategy, and demand-based shipment planning. Our Dhaka-based location (Uttara) gives us direct access to national business networks and trade flows.
        </p>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Risk Management & Market Forecasting
        </h4>
        <p className="mb-4">
          We assess potential risks such as currency fluctuation, seasonal demand shifts, supply shortages, competitor pricing, and political or port-based impact on trade. Our forecasting helps partners plan inventory, shipments, and pricing with lower uncertainty.
        </p>

        <div className="bg-white border-2 border-green-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">Client Benefits</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>Strategic product selection based on demand</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>Faster customs clearance and documentation accuracy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>Competitive pricing and better profit margins</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>Smart market entry and distribution planning</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>Lower risk and higher trade success rate</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">
            Our Market Knowledge Drives Your Success
          </p>
          <p className="mt-2 text-white/90">
            We ensure every trade decision is data-backed, compliant, and profitable.
          </p>
        </div>
      </DocSection>

      {/* Section 3: End-to-End Trade & Logistics Expertise */}
      <DocSection
        id="trade-logistics"
        title="End-to-End Trade & Logistics Expertise"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Truck className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Complete International Trade Cycle Management
            </h3>
            <p className="text-gray-600">
              From sourcing products globally to delivering goods safely—we
              manage the entire trade process efficiently.
            </p>
          </div>
        </div>

        <p>
          We manage the entire international trade cycle—from sourcing to final delivery—eliminating complexity and ensuring a smooth, compliant, cost-efficient, and timely experience.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
            alt="International shipping and logistics operations"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              Seamless Logistics Management
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              1. Product Sourcing & Supplier Coordination
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Identify verified manufacturers</li>
              <li>• Coordinate pricing and specifications</li>
              <li>• Finalize packaging standards</li>
              <li>• Order finalization</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              2. Trade Documentation & Compliance Management
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Commercial Invoice</li>
              <li>• Packing List</li>
              <li>• Bill of Lading / Airway Bill</li>
              <li>• Certificate of Origin</li>
              <li>• Insurance Papers</li>
              <li>• Product compliance certificates</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              3. Freight, Shipping & Carrier Management
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Sea freight</li>
              <li>• Air freight</li>
              <li>• Land freight</li>
              <li>• Global freight forwarders</li>
              <li>• Trusted carriers</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              4. Customs Clearance & Port Handling
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Bangladesh customs procedures</li>
              <li>• Duty structures</li>
              <li>• HS code classification</li>
              <li>• Port rules</li>
              <li>• Clearance timelines</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              5. Warehousing, Local Transport & Last-Mile Delivery
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Secure storage</li>
              <li>• Inland logistics</li>
              <li>• Nationwide delivery</li>
              <li>• FCL/LCL distribution</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              6. Real-Time Tracking & Client Communication
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Shipment updates</li>
              <li>• Estimated arrival schedules</li>
              <li>• Cargo status reports</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              7. Export Logistics Support for Bangladeshi Goods
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• International buyer connection</li>
              <li>• Export compliance management</li>
              <li>• Freight booking</li>
              <li>• Port handover coordination</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            Key Benefits for Our Clients
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl">✔</span>
              <span>One-stop trade and logistics management</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl">✔</span>
              <span>Reduced operational stress and paperwork burden</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl">✔</span>
              <span>Faster shipment planning and port clearance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl">✔</span>
              <span>Accurate cost forecasting and better profit margins</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl">✔</span>
              <span>Reliable delivery schedules</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl">✔</span>
              <span>Lower trade risk and higher efficiency</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">
            We Handle the Process, You Scale the Business
          </p>
          <p className="mt-2 text-white/90">
            Focus on sales and growth while we manage global procurement, shipping, customs, and delivery.
          </p>
        </div>
      </DocSection>

      {/* Section 4: Quality Assurance at Competitive Pricing */}
      <DocSection
        id="quality-pricing"
        title="Quality Assurance at Competitive Pricing"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Global-Standard Products at Lower Landed Cost
            </h3>
            <p className="text-gray-600">
              Balancing product quality with cost efficiency to deliver better
              value for our clients.
            </p>
          </div>
        </div>

        <p>
          A strategic strength for Zexfro International Limited, especially when operating in global sourcing while representing Bangladesh in international trade.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            Our Framework:
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Multi-Layer Supplier Verification
              </h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Valid trade licenses</li>
                <li>• International certifications (ISO, HACCP, CE, GMP)</li>
                <li>• Environmental compliance</li>
                <li>• Labor standards</li>
                <li>• Proven export track record</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Pre-Shipment Inspection (PSI)
              </h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• In-house QC teams</li>
                <li>• Third-party agencies (SGS, BV, TUV, Intertek)</li>
                <li>• Random batch sampling</li>
                <li>• Visual/functional/safety tests</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Compliance with Bangladesh Export Standards
              </h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• BSTI certification</li>
                <li>• Plant Quarantine & Phytosanitary</li>
                <li>• BRC/HACCP protocols</li>
                <li>• Material and durability standards</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Price Optimization
              </h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Direct manufacturer sourcing</li>
                <li>• Bulk shipment consolidation</li>
                <li>• Long-term supplier contracts</li>
                <li>• Optimized logistics planning</li>
                <li>• Cost-efficient port selection</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Quality-Focused Procurement
              </h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Best value for price</li>
                <li>• Consistent quality</li>
                <li>• Durability and safety</li>
                <li>• Market-acceptable specifications</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Transparent Specification Matching
              </h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Material type</li>
                <li>• Size/weight/dimensions</li>
                <li>• Technical performance</li>
                <li>• Shelf-life and storage</li>
                <li>• Processing grade</li>
                <li>• Packaging requirements</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Continuous Feedback-Based Improvement
              </h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Buyer feedback collection</li>
                <li>• Supplier performance evaluation</li>
                <li>• Packaging/branding upgrades</li>
                <li>• Logistics optimization</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Smart Cost-Saving Packaging & Handling
              </h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Export-grade materials</li>
                <li>• Moisture-proof packing</li>
                <li>• Correct HS code classification</li>
                <li>• Proper container selection</li>
                <li>• Labeling compliance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 my-6">
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            Risk-Free Trade Guarantee
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>Products meeting buyer standards</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>Verified suppliers with global credibility</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>Inspected shipments before dispatch</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>Lower logistics and handling cost</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>Zero compromise on safety and compliance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>Best possible price for genuine quality</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-6">
          <p className="text-center text-lg font-semibold text-gray-900">
            <strong>Summary:</strong> Zexfro's advantage is not just low price, but the right price for high quality.
          </p>
        </div>

      </DocSection>

      {/* Section 5: Faster Shipment & Reliable Delivery */}
      <DocSection
        id="delivery"
        title="Faster Shipment & Reliable Delivery Commitment"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              On-Time, Safe, and Dependable Delivery
            </h3>
            <p className="text-gray-600">
              Products move quickly from origin to destination, reaching buyers
              on time without unexpected disruptions.
            </p>
          </div>
        </div>

        <p>
          A strategic assurance that products will move quickly from origin to destination and reach the buyer on time, safely, and without unexpected disruption.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&q=80"
            alt="Fast and reliable delivery services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">On-Time Delivery Guaranteed</p>
          </div>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Our Delivery Framework:
        </h4>

        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6">
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">1. Optimized Logistics Planning</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Pre-evaluated shipment routes</li>
                <li>• Partnerships with global freight forwarders</li>
                <li>• Cargo mode selection based on urgency</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">2. Strong Carrier & Forwarder Network</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Multiple trusted shipping carriers</li>
                <li>• Negotiated express handling contracts</li>
                <li>• Fallback carrier options</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">3. Real-Time Shipment Monitoring & Updates</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Carrier reference tracking</li>
                <li>• ETD/ETA updates</li>
                <li>• Immediate delay notifications</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">4. Efficient Documentation & Customs Handling</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Commercial Invoice</li>
                <li>• Packing List</li>
                <li>• Bill of Lading/Airway Bill</li>
                <li>• Certificate of Origin</li>
                <li>• Phytosanitary certificates</li>
                <li>• Insurance</li>
                <li>• LC compliance documents</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">5. Port & Warehouse Coordination</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Immediate cargo movement</li>
                <li>• Pre-booked storage</li>
                <li>• Cross-docking services</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">6. Proactive Risk Mitigation</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Port congestion monitoring</li>
                <li>• Alternative routing</li>
                <li>• Emergency freight escalation</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">7. Last-Mile Delivery Assurance</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Fast inland transport</li>
                <li>• Trusted trucking partners</li>
                <li>• Delivery coordination</li>
                <li>• Handover confirmation</li>
              </ul>
            </div>
          </div>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Delivery Reliability Standards
        </h4>
        <div className="bg-white border-2 border-orange-300 rounded-lg p-6 my-6">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">✓</span>
              <span><strong>Timeliness:</strong> Delivery within promised ETA</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">✓</span>
              <span><strong>Cargo Safety:</strong> Damage-free handling and transport</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">✓</span>
              <span><strong>Insurance Coverage:</strong> Protection against loss/damage/theft</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">✓</span>
              <span><strong>Secure Packaging:</strong> Export-grade packing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">✓</span>
              <span><strong>Demurrage Avoidance:</strong> Fast unloading and clearance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">✓</span>
              <span><strong>No Sudden Hidden Costs:</strong> Pre-communicated pricing</span>
            </li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Customer Delivery Commitment Formats
        </h4>
        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>Shipment dispatched within 48–72 hours after order confirmation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>Guaranteed ETA with alternative backup routing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>99% on-time delivery record commitment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>No demurrage through fast customs & port release</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>Compensation or corrective shipment for delays</span>
            </li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Business Value
        </h4>
        <div className="bg-white border-2 border-orange-300 rounded-lg p-6 my-6">
          <ul className="space-y-2 text-gray-700">
            <li>• Buyers receive goods earlier → faster sales cycle</li>
            <li>• Repeat orders increase</li>
            <li>• Lower cost, higher margin</li>
            <li>• Strong international reputation</li>
            <li>• Higher buyer confidence</li>
            <li>• No booking failure</li>
            <li>• No seasonal disruption losses</li>
          </ul>
        </div>
      </DocSection>

      {/* Section 6: Transparent Communication & Customer Support */}
      <DocSection
        id="communication"
        title="Transparent Communication & Customer Support"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Foundation of Trust & Long-Term Partnerships
            </h3>
            <p className="text-gray-600">
              Fast, accurate, transparent, and professional communication at
              every stage of the transaction.
            </p>
          </div>
        </div>

        <p>
          Communication is the foundation of trust, long-term partnerships, and seamless global trade operations at Zexfro International Ltd.
        </p>

        <div className="bg-teal-50/30 border-l-4 border-teal-500 p-6 my-6 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3">
            Multi-Channel Support
          </h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• 24/7 Email Support</li>
            <li>• Instant Messaging Platforms (WhatsApp, WeChat, Skype)</li>
            <li>• Direct Voice & Video Calls</li>
            <li>• Website Live Chat Support</li>
            <li>• Social & Business Platforms (LinkedIn, Google Business)</li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Dedicated Teams
        </h4>
        <div className="bg-teal-50/20 border-l-4 border-teal-400 p-6 my-6">
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Key Account Managers (KAM)</li>
            <li>• Trade Support Specialists</li>
            <li>• Logistics Coordination Officers</li>
            <li>• Quality & Dispute Resolution Team</li>
            <li>• Technical Support Advisors</li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Response Guarantees
        </h4>
        <div className="bg-teal-50/40 border-2 border-teal-500 rounded-lg p-6 my-6 shadow-md">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>Inquiry Response within 10–30 minutes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>Quotation Delivery within 6–12 hours</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>Daily Shipment & Order Progress Updates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>Live Tracking Information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>Instant Issue Acknowledgment & Resolution</span>
            </li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Support Philosophy
        </h4>
        <div className="bg-white border-2 border-teal-300 rounded-lg p-6 my-6">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">✓</span>
              <span><strong>Transparency:</strong> No hidden charges or unclear terms</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">✓</span>
              <span><strong>Accuracy:</strong> Verified information and precise details</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">✓</span>
              <span><strong>Professionalism:</strong> Respectful tone and formal trade etiquette</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">✓</span>
              <span><strong>Reliability:</strong> Consistent follow-ups and no false deadlines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">✓</span>
              <span><strong>Problem-Solving Mindset</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">✓</span>
              <span><strong>Long-Term Partnership Focus</strong></span>
            </li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          After-Sales Support
        </h4>
        <div className="bg-teal-50/20 border-l-4 border-teal-400 p-6 my-6">
          <ul className="space-y-2 text-gray-700">
            <li>• Delivery confirmation and feedback collection</li>
            <li>• Installation guidance for equipment</li>
            <li>• Warranty or product replacement support</li>
            <li>• Continuous market updates</li>
            <li>• New sourcing opportunities</li>
            <li>• Future bulk order planning</li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Continuous Improvement
        </h4>
        <div className="bg-white border border-teal-200 rounded-lg p-6 my-6">
          <ul className="space-y-2 text-gray-700">
            <li>• Response time monitoring</li>
            <li>• Staff training in international business communication</li>
            <li>• CRM tools for client history tracking</li>
            <li>• Client feedback collection for service upgrades</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-6 text-white text-center mt-8">
          <p className="text-xl font-bold">
            Our Promise
          </p>
          <p className="mt-2 text-white/90">
            "Clear Communication, Fast Support, and Reliable Solutions—Every Time, Worldwide."
          </p>
        </div>
      </DocSection>

      {/* Section 7: Customized Trade Solutions */}
      <DocSection
        id="custom-solutions"
        title="Customized Trade Solutions for Businesses"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Package className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Tailored Sourcing & Export Strategies
            </h3>
            <p className="text-gray-600">
              We adapt to the unique needs of wholesalers, manufacturers,
              retailers, and importers with customized solutions.
            </p>
          </div>
        </div>

        <p>
          We adapt to the unique needs of wholesalers, manufacturers, retailers, and importers by providing tailored sourcing and export strategies.
        </p>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Our Customized Services:
        </h4>

        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-6">
          <div className="space-y-5 text-gray-700">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Product-Specific Global Sourcing</h5>
              <ul className="space-y-1 text-sm mb-2">
                <li>• Detailed requirement analysis</li>
                <li>• Trusted manufacturer matching</li>
                <li>• Backup sourcing channels</li>
              </ul>
              <p className="text-sm text-indigo-700"><strong>Result:</strong> Stable supply, assured quality, competitive pricing</p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Tailored Pricing & Landed Cost Optimization</h5>
              <ul className="space-y-1 text-sm mb-2">
                <li>• Customized cost breakdowns (FOB, CFR, CIF, DDP, EXW)</li>
                <li>• Accurate HS code classification</li>
                <li>• Logistics cost comparison</li>
                <li>• Shipment consolidation</li>
                <li>• Optimal port selection</li>
              </ul>
              <p className="text-sm text-indigo-700"><strong>Result:</strong> Full cost transparency, lower landed expenses</p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Custom Compliance & Regulatory Support</h5>
              <ul className="space-y-1 text-sm mb-2">
                <li>• Compliance roadmap building</li>
                <li>• Product certifications (BSTI, Plant Quarantine)</li>
                <li>• Country-of-origin rules</li>
                <li>• Trade agreement benefits</li>
                <li>• LC compliance support</li>
              </ul>
              <p className="text-sm text-indigo-700"><strong>Result:</strong> Faster customs clearance, zero compliance surprises</p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Customized Logistics & Delivery Planning</h5>
              <ul className="space-y-1 text-sm mb-2">
                <li>• Air/sea/hybrid shipping</li>
                <li>• FCL/LCL container planning</li>
                <li>• Cold chain/special cargo handling</li>
                <li>• Real-time shipment tracking</li>
              </ul>
              <p className="text-sm text-indigo-700"><strong>Result:</strong> Faster, safer, more reliable delivery cycles</p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Private Labeling, Packaging & Branding</h5>
              <ul className="space-y-1 text-sm mb-2">
                <li>• Export-standard packaging</li>
                <li>• Custom labels and barcodes</li>
                <li>• Multilingual packaging</li>
                <li>• Private label manufacturing</li>
              </ul>
              <p className="text-sm text-indigo-700"><strong>Result:</strong> Stronger brand presence in buyer markets</p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Personalized Trade Finance & Payment Term Structuring</h5>
              <ul className="space-y-1 text-sm mb-2">
                <li>• LC (Letter of Credit)</li>
                <li>• TT (Bank Transfer)</li>
                <li>• CAD, DP, DA</li>
                <li>• Risk-balanced payment negotiation</li>
                <li>• Bank alignment for currency compliance</li>
              </ul>
              <p className="text-sm text-indigo-700"><strong>Result:</strong> Protected cash flow, secure global transactions</p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Business-Scalable Trade Planning</h5>
              <ul className="space-y-1 text-sm mb-2">
                <li>• Annual supply contracts</li>
                <li>• Exclusive supplier agreements</li>
                <li>• Logistics and warehousing scalability</li>
                <li>• Demand-based reorder planning</li>
              </ul>
              <p className="text-sm text-indigo-700"><strong>Result:</strong> Sustainable growth for SMEs and large enterprises</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-indigo-600 rounded-lg p-6 my-8">
          <h4 className="font-bold text-gray-900 mb-4 text-center text-xl">
            Our Commitment
          </h4>
          <p className="text-center text-gray-700">
            Zexfro International Ltd stands as your strategic global trade partner, ensuring that your import-export operations are: <strong>Customized, Cost-efficient, Compliant, Scalable, Fast and reliable,</strong> Backed by <strong>dedicated communication support.</strong>
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white my-8">
          <h4 className="text-2xl font-bold mb-4 text-center">
            Why Choose Us?
          </h4>
          <p className="mb-6 text-white/90 text-center max-w-3xl mx-auto">
            We don't just trade products—we build global business bridges, simplify complex import-export operations, and create profitable opportunities for our partners worldwide.
          </p>

          <div className="bg-white/10 rounded-lg p-6 mb-6">
            <h5 className="text-xl font-bold mb-4 text-center">Business Advantages:</h5>
            <ul className="space-y-2 text-white/90">
              <li>✓ <strong>Fully Customized Solutions</strong> → Designed around your product & business model</li>
              <li>✓ <strong>Strong Global Supplier & Buyer Network</strong> → Reliable sourcing and faster buyer reach</li>
              <li>✓ <strong>End-to-End Trade & Logistics Expertise</strong> → Seamless execution from order to delivery</li>
              <li>✓ <strong>Real-Time Communication</strong> → Faster coordination across borders</li>
              <li>✓ <strong>Cost-Efficient Shipment Planning</strong> → Maximum savings and optimized lead time</li>
              <li>✓ <strong>Risk-Free Compliance Roadmap</strong> → Hassle-free customs and documentation</li>
            </ul>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-white text-[#0a4a9e] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors duration-200"
            >
              Partner With Us Today
            </a>
          </div>
        </div>
      </DocSection>
    </DocLayout>
  );
}
