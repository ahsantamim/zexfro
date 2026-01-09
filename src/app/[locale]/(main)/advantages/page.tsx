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
          environment, and consumer demand patterns. This insight allows us to
          make informed decisions that help our partners trade with confidence
          and higher profitability.
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
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Agriculture</li>
            <li>• Industrial machinery</li>
            <li>• Consumer goods</li>
            <li>• Raw materials</li>
            <li>• Global commodities</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Our research-driven approach helps us identify which products have
            rising demand, seasonal sales peaks, pricing sensitivity, and
            distribution potential in Bangladesh. This ensures that imported
            goods are positioned for maximum sales impact and market acceptance.
          </p>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Knowledge of Regulations & Trade Compliance
        </h4>
        <p>
          We maintain strong expertise in import-export policies, customs
          procedures, taxation, documentation requirements, port regulations,
          and HS code classification. Our team stays updated with government
          trade rules, product certification needs, and compliance standards,
          minimizing legal or operational delays. This helps shipments clear
          faster and remain fully compliant.
        </p>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Pricing Intelligence & Market Positioning
        </h4>
        <p>
          We track real-time pricing behavior in local wholesale and retail
          channels. Our insights allow us to negotiate cost-effective sourcing,
          calculate landed cost accurately, and set competitive selling prices
          for distributors and wholesalers. We help businesses avoid overpricing
          or underpricing, ensuring healthy margins.
        </p>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Strong Distribution & Market Entry Strategy
        </h4>
        <p>
          We understand the operational structure of local supply chains, major
          trading hubs, B2B procurement channels, wholesale markets, and
          last-mile logistics. This enables us to guide suppliers and importers
          with effective product entry plans, bulk selling strategy, and
          demand-based shipment planning. Our Dhaka-based location (Uttara)
          gives us direct access to national business networks and trade flows.
        </p>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Risk Management & Market Forecasting
        </h4>
        <p>
          We assess potential risks such as currency fluctuation, seasonal
          demand shifts, supply shortages, competitor pricing, and political or
          port-based impact on trade. Our forecasting helps partners plan
          inventory, shipments, and pricing with lower uncertainty.
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
            Our deep market insight ensures that every trade decision is
            data-backed, compliant, and profitable, helping businesses import
            efficiently and scale exports with confidence.
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
          At Zexfro International Limited, we manage the entire international
          trade cycle—from sourcing products globally to delivering goods safely
          and efficiently to final destinations. Our end-to-end capability
          eliminates complexity for our clients and ensures a smooth, compliant,
          cost-efficient, and time-bound trade experience.
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
              <li>• Identify and engage verified manufacturers worldwide</li>
              <li>• Coordinate pricing, specs, and packaging standards</li>
              <li>• Ensure quality consistency and competitive terms</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              2. Trade Documentation & Compliance
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Commercial Invoice</li>
              <li>• Packing List</li>
              <li>• Bill of Lading / Airway Bill</li>
              <li>• Certificate of Origin</li>
              <li>• Insurance Papers</li>
              <li>• Product certifications (if required)</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              3. Freight, Shipping & Carrier Management
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Arrange shipments via sea, air, or land freight</li>
              <li>• Work with trusted global freight forwarders</li>
              <li>• Industry-standard packaging and container planning</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              4. Customs Clearance & Port Handling
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Expert knowledge of Bangladesh customs procedures</li>
              <li>• Pre-calculate duties and taxes</li>
              <li>• Monitor clearance to prevent delays</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              5. Warehousing & Last-Mile Delivery
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Secure storage and inland logistics</li>
              <li>• FCL and LCL distribution support</li>
              <li>• Nationwide delivery across Bangladesh</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              6. Real-Time Tracking & Communication
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Regular shipment updates</li>
              <li>• Estimated arrival schedules</li>
              <li>• Transparent status reports</li>
            </ul>
          </div>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Export Logistics Support for Bangladeshi Goods
        </h4>
        <p>
          We help local producers connect with international buyers and manage
          the shipment process outward. We ensure export compliance, freight
          booking, and smooth handover at Chattogram or Dhaka air cargo
          terminals.
        </p>

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
            Our End-to-End trade model allows businesses to focus on sales,
            growth, and market expansion, while we take care of global
            procurement, shipping, customs, and delivery logistics.
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
          Quality Assurance at Competitive Pricing is a strategic strength at
          Zexfro International Limited. We ensure that suppliers meet
          international standards while keeping pricing competitive through
          optimized sourcing and logistics.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            Our Quality Framework:
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                1. Multi-Layer Supplier Verification
              </h5>
              <p className="text-sm text-gray-700">
                Quality assurance starts at the source. We ensure suppliers hold
                valid trade licenses, have internationally recognized
                certifications (ISO, HACCP, CE, GMP), maintain compliance with
                environmental and labor standards, and have a proven export
                track record with minimal dispute history.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                2. Pre-Shipment Inspection (PSI)
              </h5>
              <p className="text-sm text-gray-700">
                Before goods are shipped, we arrange inspections through
                in-house QC teams or third-party global inspection agencies
                (SGS, BV, TUV, Intertek). This includes random batch sampling,
                visual, functional, and safety compliance tests.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                3. Compliance with Bangladesh Export Standards
              </h5>
              <p className="text-sm text-gray-700">
                For exported goods from Bangladesh, we ensure products meet BSTI
                standards, agricultural products comply with Plant Quarantine &
                Phytosanitary Certification, and frozen foods follow BRC or
                HACCP safety protocols.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                4. Price Optimization Without Compromising Quality
              </h5>
              <ul className="space-y-1 text-sm text-gray-700 mt-2">
                <li>• Sourcing directly from manufacturers</li>
                <li>• Consolidating bulk shipments to reduce freight cost</li>
                <li>• Negotiating long-term supplier contracts</li>
                <li>• Using optimized logistics planning</li>
                <li>• Selecting cost-efficient ports and schedules</li>
                <li>• Ensuring proper packaging to avoid damage</li>
              </ul>
            </div>
          </div>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Quality-Focused Procurement Strategy
        </h4>
        <p>
          Instead of selecting the cheapest product, we prioritize best value
          for price, consistent quality, durability and safety, and
          market-acceptable specifications. This prevents hidden costs such as
          product failure after delivery, re-export charges, customer
          dissatisfaction, and loss due to poor packaging.
        </p>

        <p className="mt-4">
          <strong>
            True competitive pricing means lowest cost without future loss, not
            just lowest purchase price.
          </strong>
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            Benefits & Results Summary
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 px-3 text-gray-900">Benefit</th>
                  <th className="text-left py-2 px-3 text-gray-900">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-3">Verified suppliers</td>
                  <td className="py-2 px-3">Higher reliability</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-3">Pre-shipment testing</td>
                  <td className="py-2 px-3">Fewer disputes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-3">Bulk and direct sourcing</td>
                  <td className="py-2 px-3">Lower cost</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-3">
                    Compliance with global standards
                  </td>
                  <td className="py-2 px-3">Better market acceptance</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-3">Damage-free packaging</td>
                  <td className="py-2 px-3">Reduced loss cost</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Logistics expertise</td>
                  <td className="py-2 px-3">Lower landed price</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">
            Zexfro's Advantage: Right Price for High Quality
          </p>
          <p className="mt-2 text-white/90">
            Our advantage is not just low price, but the right price for high
            quality— ensuring value, reliability, and long-term business
            success.
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
          A Faster Shipment & Reliable Delivery Commitment is a strategic
          assurance that products will move quickly from origin to destination
          and reach the buyer on time, safely, and without unexpected
          disruption. This commitment becomes a competitive edge because
          international buyers and suppliers highly value speed, consistency,
          transparency, and dependability in cross-border trade.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              1. Optimized Logistics Planning
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                • Pre-evaluated routes for fastest, most cost-efficient path
              </li>
              <li>• Partnerships with global freight forwarders</li>
              <li>• Priority space allocation</li>
              <li>• Mode selection: Air, Sea, or Land based on urgency</li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              2. Strong Carrier & Forwarder Network
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Multiple trusted shipping carriers</li>
              <li>• Negotiated contracts for express handling</li>
              <li>• Fallback carrier options</li>
              <li>• Prevents container shortages and booking delays</li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              3. Real-Time Shipment Monitoring
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                • Tracking via carrier reference, vessel name, flight number
              </li>
              <li>• ETD and ETA updates</li>
              <li>• Immediate notification of schedule changes</li>
              <li>• Builds trust and reliability</li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              4. Efficient Documentation & Customs
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Documents prepared accurately and ahead of time</li>
              <li>• Experienced C&F agents for faster clearance</li>
              <li>• Minimizes HS code mismatch and inspection delays</li>
              <li>• Reduces port demurrage charges</li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              5. Port & Warehouse Coordination
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Immediate cargo movement from port to warehouse</li>
              <li>• Pre-booked storage prevents waiting time</li>
              <li>• Cross-docking services for urgent orders</li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              6. Proactive Risk Mitigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Monitor global port congestion trends</li>
              <li>• Plan around holidays and seasonal disruptions</li>
              <li>• Alternative routing options</li>
              <li>• Emergency freight escalation when needed</li>
            </ul>
          </div>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Customer Delivery Commitment Formats
        </h4>
        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>
                "Shipment dispatched within 48–72 hours after order confirmation
                or LC acceptance"
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>"Guaranteed ETA with alternative backup routing"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>"99% on-time delivery record commitment"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>
                "No demurrage or detention through fast customs & port release"
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>
                "Compensation or corrective shipment in case of rare delays"
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-orange-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            What Zexfro's Commitment Means:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Fast booking & dispatch</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Trusted multi-carrier options</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Accurate pre-shipment documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Real-time cargo tracking</span>
              </li>
            </ul>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Fast customs clearance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Cargo safety with insurance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Proactive delay prevention</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>On-time, secure, hassle-free delivery</span>
              </li>
            </ul>
          </div>
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
          At Zexfro International Ltd, communication is more than just
          responding to messages—it is the foundation of trust, long-term
          partnerships, and seamless global trade operations. As an
          international import-export company, we understand that clients,
          suppliers, and logistics partners require fast, accurate, transparent,
          and professional communication at every stage of a transaction.
        </p>

        <div className="bg-teal-50/30 border-l-4 border-teal-500 p-6 my-6 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3">
            Multi-Channel Communication System
          </h4>
          <p className="text-gray-700 mb-4">
            We maintain active communication across multiple platforms to stay
            accessible worldwide:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <strong>24/7 Email Support</strong> – For formal trade documents,
              quotations, order confirmations
            </li>
            <li>
              <strong>Instant Messaging</strong> – WhatsApp, WeChat, Skype for
              real-time updates
            </li>
            <li>
              <strong>Direct Voice & Video Calls</strong> – To discuss
              specifications, negotiate pricing, resolve issues
            </li>
            <li>
              <strong>Website Live Chat</strong> – Immediate assistance for
              inquiries
            </li>
            <li>
              <strong>Social & Business Platforms</strong> – LinkedIn, Google
              Business for corporate networking
            </li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Dedicated Client Support Teams
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-teal-50/20 border border-teal-300 rounded-lg p-4 hover:border-teal-400 transition-colors">
            <p className="font-semibold text-gray-900 mb-2">
              Key Account Managers
            </p>
            <p className="text-sm text-gray-600">
              For regular buyers and suppliers
            </p>
          </div>
          <div className="bg-teal-50/20 border border-teal-300 rounded-lg p-4 hover:border-teal-400 transition-colors">
            <p className="font-semibold text-gray-900 mb-2">
              Trade Support Specialists
            </p>
            <p className="text-sm text-gray-600">
              For sourcing, documentation, and compliance
            </p>
          </div>
          <div className="bg-teal-50/20 border border-teal-300 rounded-lg p-4 hover:border-teal-400 transition-colors">
            <p className="font-semibold text-gray-900 mb-2">
              Logistics Coordination Officers
            </p>
            <p className="text-sm text-gray-600">
              For shipment tracking and delivery updates
            </p>
          </div>
          <div className="bg-teal-50/20 border border-teal-300 rounded-lg p-4 hover:border-teal-400 transition-colors">
            <p className="font-semibold text-gray-900 mb-2">
              Quality & Dispute Resolution Team
            </p>
            <p className="text-sm text-gray-600">
              For handling claims and product issues
            </p>
          </div>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Fast Response & Real-Time Updates
        </h4>
        <div className="bg-teal-50/40 border-2 border-teal-500 rounded-lg p-6 my-6 shadow-md">
          <p className="font-bold text-gray-900 mb-3">We Guarantee:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>
                <strong>Inquiry Response</strong> within 10–30 minutes during
                business hours
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>
                <strong>Quotation Delivery</strong> within 6–12 hours depending
                on product complexity
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>
                <strong>Daily Progress Updates</strong> for shipments and orders
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>
                <strong>Live Tracking Information</strong> for all international
                shipments
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>
                <strong>Instant Issue Acknowledgment</strong> with resolution
                plan
              </span>
            </li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          Customer-Centric Support Philosophy
        </h4>
        <p>Our support approach is built on:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>
                <strong>Transparency</strong> – No hidden charges or unclear
                terms
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>
                <strong>Accuracy</strong> – Verified information and correct
                documentation
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>
                <strong>Professionalism</strong> – Respectful tone and formal
                trade etiquette
              </span>
            </li>
          </ul>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>
                <strong>Reliability</strong> – Consistent follow-ups, no false
                deadlines
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>
                <strong>Problem-Solving Mindset</strong> – We resolve issues,
                not avoid them
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>
                <strong>Long-Term Partnership Focus</strong> – Clients as
                partners, not transactions
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-6 text-white text-center mt-8">
          <p className="text-xl font-bold">
            "Clear Communication, Fast Support, and Reliable Solutions—Every
            Time, Worldwide."
          </p>
          <p className="mt-2 text-white/90 text-sm">
            — Zexfro International Ltd
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
          At Zexfro International Ltd, we understand that no two businesses are
          the same. Whether you're a wholesaler needing bulk procurement, a
          manufacturer sourcing raw materials, a retailer importing finished
          goods, or an exporter seeking global buyers—we provide customized
          trade solutions tailored to your specific requirements, industry,
          budget, and growth objectives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              1. Product-Specific Global Sourcing
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Analyze your detailed product requirements</li>
              <li>• Match with trusted manufacturers worldwide</li>
              <li>• Provide backup sourcing channels</li>
              <li>
                <strong>Result:</strong> Stable supply and competitive pricing
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              2. Tailored Pricing & Landed Cost
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Custom cost breakdowns (FOB, CFR, CIF, DDP, EXW)</li>
              <li>• Accurate HS code classification</li>
              <li>• Shipment consolidation options</li>
              <li>
                <strong>Result:</strong> Full cost transparency and lower
                expenses
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              3. Custom Compliance & Regulatory Support
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Compliance roadmap based on product category</li>
              <li>• Product certifications (BSTI, Plant Quarantine)</li>
              <li>• Trade agreement benefits (GSP, SAFTA, APTA)</li>
              <li>
                <strong>Result:</strong> Faster clearance, zero surprises
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              4. Customized Logistics & Delivery
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Air freight for urgent delivery</li>
              <li>• Sea freight for bulk volume</li>
              <li>• FCL/LCL container planning</li>
              <li>
                <strong>Result:</strong> Faster, safer delivery cycles
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              5. Private Labeling & Packaging
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Export-standard packaging</li>
              <li>• Custom labels, barcodes, origin tags</li>
              <li>• Multilingual packaging support</li>
              <li>
                <strong>Result:</strong> Stronger brand presence
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              6. Personalized Trade Finance
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Secure payment methods (LC, TT, CAD, DP, DA)</li>
              <li>• Risk-balanced payment negotiation</li>
              <li>• Bank alignment for compliance</li>
              <li>
                <strong>Result:</strong> Protected cash flow
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              7. Business-Scalable Planning
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Annual supply contracts</li>
              <li>• Exclusive supplier agreements</li>
              <li>• Logistics scalability</li>
              <li>
                <strong>Result:</strong> Sustainable growth
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              8. After-Sales Support
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Delivery confirmation and feedback</li>
              <li>• Installation guidance for equipment</li>
              <li>• Warranty support</li>
              <li>
                <strong>Result:</strong> Long-term partnership
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white border-2 border-indigo-600 rounded-lg p-6 my-8">
          <h4 className="font-bold text-gray-900 mb-4 text-center text-xl">
            Our Commitment
          </h4>
          <p className="text-center text-gray-700 mb-4">
            Zexfro International Ltd stands as your strategic global trade
            partner, ensuring that your import-export operations are:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <div className="bg-indigo-50 rounded-lg p-3">
              <p className="font-semibold text-indigo-600">Customized</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-3">
              <p className="font-semibold text-indigo-600">Cost-efficient</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-3">
              <p className="font-semibold text-indigo-600">Compliant</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-3">
              <p className="font-semibold text-indigo-600">Scalable</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-3">
              <p className="font-semibold text-indigo-600">Fast & Reliable</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-3">
              <p className="font-semibold text-indigo-600">Supported</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white my-8">
          <h4 className="text-2xl font-bold mb-4 text-center">
            Why Choose Zexfro International Ltd?
          </h4>
          <p className="mb-6 text-white/90 text-center max-w-3xl mx-auto">
            We don't just trade products—we build global business bridges,
            simplify complex import-export operations, and create profitable
            opportunities for our partners worldwide. Our commitment to
            reliability, speed, quality, and compliance sets us apart in the
            industry.
          </p>
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
