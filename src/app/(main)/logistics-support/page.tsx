import { DocLayout, DocSection } from "@/components/ui/DocLayout";
import { Package, Plane, FileCheck, MonitorDot, Network, Truck } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Logistics Support - Zexfro | Comprehensive Supply Chain Solutions",
  description:
    "Zexfro International Ltd provides end-to-end logistics support including freight management, documentation compliance, real-time tracking, and global network integration for seamless international trade.",
};

const sections = [
  { id: "overview", title: "Logistics Support Overview" },
  { id: "supply-chain", title: "End-to-End Supply Chain Coordination" },
  { id: "freight", title: "Freight & Transportation Services" },
  { id: "documentation", title: "Documentation & Compliance Support" },
  { id: "tracking", title: "Real-Time Tracking & Monitoring" },
  { id: "network", title: "Partner & Network Integration" },
];

export default function LogisticsSupportPage() {
  return (
    <DocLayout
      sections={sections}
      pageTitle="Logistics Support"
      pageDescription="Zexfro International Ltd's logistics support is built around comprehensive supply chain coordination that includes freight management, documentation compliance, shipment monitoring, and integration with global transport networks."
    >
      {/* Section 1: Logistics Support Overview */}
      <DocSection id="overview" title="Logistics Support Overview">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Package className="w-6 h-6 text-[#0a4a9e]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Full-Service Import, Export & Marketing Company
            </h3>
            <p className="text-gray-600">
              Operating across global supply chains, helping producers, manufacturers, and
              buyers connect for international trade.
            </p>
          </div>
        </div>

        <p>
          Zexfro International Ltd is a full-service import, export, and marketing company
          based in Dhaka, Bangladesh. It operates across global supply chains, helping
          producers, manufacturers, and buyers connect for international trade. The company
          is engaged primarily in wholesale import and export operations and handles a
          variety of products sourced from overseas suppliers for distribution in Bangladesh
          and potential export markets.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80"
            alt="Global logistics and supply chain management"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Comprehensive Logistics Solutions</p>
          </div>
        </div>

        <p>
          Through these capabilities, the company helps ensure that goods sourced
          internationally reach their intended markets efficiently and in compliance with
          regulatory standards—making it a strategic partner for businesses engaged in
          import and export operations.
        </p>

        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-6 text-white text-center mt-6">
          <p className="text-xl font-bold">Strategic Partner for Global Trade</p>
          <p className="mt-2 text-white/90">
            Ensuring goods reach their intended markets efficiently and in full compliance
            with regulatory standards.
          </p>
        </div>
      </DocSection>

      {/* Section 2: End-to-End Supply Chain Coordination */}
      <DocSection id="supply-chain" title="End-to-End Supply Chain Coordination">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Truck className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Managing the Entire Product Journey
            </h3>
            <p className="text-gray-600">
              From origin to destination, orchestrating multiple logistics tasks to ensure
              goods move efficiently and on schedule.
            </p>
          </div>
        </div>

        <p>
          One of the core strengths of Zexfro International Ltd's logistics support lies in
          its ability to manage the entire product journey from origin to destination. This
          involves orchestrating multiple logistics tasks to ensure goods move efficiently
          and on schedule.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
            alt="Supply chain coordination and management"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Complete Supply Chain Management</p>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">Key Coordination Activities:</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>
                <strong>Procurement & Sourcing:</strong> Partnering with vetted
                international manufacturers and suppliers to source goods.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>
                <strong>Order Processing:</strong> Handling documentation and sales orders
                that feed into logistics planning.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>
                <strong>Export & Import Facilitation:</strong> Planning and routing exports
                to various global markets as well as efficiently bringing imports into
                Bangladesh.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Seamless Product Journey Management</p>
          <p className="mt-2 text-white/90">
            Coordinating every step from procurement to final delivery for maximum
            efficiency and reliability.
          </p>
        </div>
      </DocSection>

      {/* Section 3: Freight & Transportation Services */}
      <DocSection id="freight" title="Freight & Transportation Services">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Plane className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Global Freight Carrier Network
            </h3>
            <p className="text-gray-600">
              Working with international logistics networks for efficient inbound and
              outbound shipments.
            </p>
          </div>
        </div>

        <p>
          Zexfro works with global freight carriers and logistics networks to deliver both
          inbound and outbound shipments. While the company does not publicly detail every
          transport arrangement, its operations typically include comprehensive
          transportation solutions tailored to client needs.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&q=80"
            alt="Air and sea freight transportation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Multi-Modal Transportation Solutions</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-center">Air Freight</h4>
            <p className="text-sm text-gray-700 text-center">
              For fast, time-sensitive deliveries, especially for high-value products or
              urgent consignments.
            </p>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-center">Sea Freight</h4>
            <p className="text-sm text-gray-700 text-center">
              Cost-effective solutions for bulk shipments using ocean liners and container
              services.
            </p>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-center">Multimodal Transport</h4>
            <p className="text-sm text-gray-700 text-center">
              Combined use of land, sea, and air to balance cost, speed, and efficiency.
            </p>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">Transportation Strategy:</h4>
          <p className="text-gray-700">
            These multimodal strategies are common among international trading firms to
            optimize supply chains, reduce transit times, and improve flexibility. Zexfro
            selects the most appropriate transportation method based on:
          </p>
          <ul className="space-y-2 text-gray-700 mt-4">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>Product type and urgency requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>Shipment volume and weight considerations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>Cost optimization and budget constraints</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>Destination and route availability</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Flexible Transportation Solutions</p>
          <p className="mt-2 text-white/90">
            Optimizing every shipment for the perfect balance of speed, cost, and
            reliability.
          </p>
        </div>
      </DocSection>

      {/* Section 4: Documentation & Compliance Support */}
      <DocSection id="documentation" title="Documentation & Compliance Support">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileCheck className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Complex International Regulations Handling
            </h3>
            <p className="text-gray-600">
              Managing the intricate documentation and compliance requirements for
              international trade operations.
            </p>
          </div>
        </div>

        <p>
          A vital part of logistics support for any export–import business is handling the
          complex international regulations. Zexfro International Ltd assists by managing
          comprehensive documentation and ensuring full regulatory compliance throughout the
          trade process.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
            alt="Documentation and compliance management"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Expert Documentation Services</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            Our Comprehensive Documentation Services:
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Preparing Customs Documentation
              </h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Commercial invoices</li>
                <li>• Packing lists</li>
                <li>• Bills of lading / air waybills</li>
                <li>• Certificates of origin</li>
                <li>• Insurance documentation</li>
                <li>• Product-specific certifications as required</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Regulatory Compliance</h5>
              <p className="text-sm text-gray-700">
                Ensuring goods meet import/export requirements of both source and destination
                countries, reducing delays or fines at customs checkpoints. Our team stays
                current with evolving international trade regulations.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Trade Facilitation</h5>
              <p className="text-sm text-gray-700">
                Managing paperwork that supports smooth border clearance, which is crucial
                for avoiding bottlenecks. We coordinate with customs authorities and agents
                to expedite the clearance process.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-yellow-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">Benefits of Our Service:</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold text-xl">✔</span>
              <span>Reduced risk of customs delays and penalties</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold text-xl">✔</span>
              <span>Accurate documentation prepared by experienced professionals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold text-xl">✔</span>
              <span>Full compliance with international trade regulations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold text-xl">✔</span>
              <span>Faster border clearance and reduced holding costs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold text-xl">✔</span>
              <span>Peace of mind knowing all regulatory requirements are met</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Expert Compliance Management</p>
          <p className="mt-2 text-white/90">
            Navigating complex international regulations to ensure smooth, penalty-free
            trade operations.
          </p>
        </div>
      </DocSection>

      {/* Section 5: Real-Time Tracking & Monitoring */}
      <DocSection id="tracking" title="Real-Time Tracking & Monitoring">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <MonitorDot className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Complete Supply Chain Visibility
            </h3>
            <p className="text-gray-600">
              Advanced tracking systems providing real-time updates on cargo position and
              status throughout the journey.
            </p>
          </div>
        </div>

        <p>
          Like many modern trading and logistics firms, Zexfro places emphasis on visibility
          along the supply chain. Their systems and partnerships typically provide
          comprehensive tracking capabilities that keep clients informed at every stage of
          the shipping process.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
            alt="Real-time tracking and monitoring systems"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Advanced Tracking Technology</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Real-Time Shipment Tracking</h4>
            <p className="text-sm text-gray-700 mb-3">
              Monitoring cargo position and status updates to inform customers of progress
              throughout the shipping journey.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span>GPS-enabled tracking systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span>Regular position updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span>Multi-carrier integration</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Notifications & Alerts</h4>
            <p className="text-sm text-gray-700 mb-3">
              Automated alerts for key milestones throughout the shipping process.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span>Departure notifications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span>Arrival confirmations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span>Customs clearance updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span>Final delivery status</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">Benefits of Real-Time Visibility:</h4>
          <p className="text-gray-700 mb-4">
            This transparency helps clients plan inventory reception, manage sales
            commitments, and respond to delays proactively. Key advantages include:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>
                <strong>Better Planning:</strong> Accurate ETAs enable efficient warehouse
                and inventory management
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>
                <strong>Proactive Problem Solving:</strong> Early awareness of delays allows
                for contingency planning
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>
                <strong>Customer Communication:</strong> Keep your customers informed with
                accurate delivery timelines
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>
                <strong>Reduced Anxiety:</strong> Complete visibility eliminates uncertainty
                about shipment status
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-orange-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4 text-center">
            Tracking Capabilities Summary
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Monitoring</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-600 mb-2">Real-Time</div>
              <div className="text-sm text-gray-600">Updates</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Visibility</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Complete Transparency, Complete Control</p>
          <p className="mt-2 text-white/90">
            Stay informed at every stage with our advanced real-time tracking and monitoring
            systems.
          </p>
        </div>
      </DocSection>

      {/* Section 6: Partner & Network Integration */}
      <DocSection id="network" title="Partner & Network Integration">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Network className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Global Network of Trusted Partners
            </h3>
            <p className="text-gray-600">
              Strong relationships with freight forwarders, carriers, and service providers
              ensuring reliability across all routes.
            </p>
          </div>
        </div>

        <p>
          Effective logistics support depends heavily on relationships with freight
          forwarders, carriers, and local service providers. Zexfro International Ltd's
          operations benefit from an extensive network of partnerships that enable smooth,
          reliable, and cost-effective international trade operations.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
            alt="Global partner network and integration"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Extensive Partnership Network</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Global Network of Partners</h4>
            <p className="text-sm text-gray-700 mb-3">
              Through collaborations with overseas transport companies, freight forwarders,
              and customs agencies, we enable broader reach for exporting and importing.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>International freight forwarders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>Global shipping carriers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>Customs clearance agencies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>Insurance providers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>Port handling specialists</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Local Distribution Links</h4>
            <p className="text-sm text-gray-700 mb-3">
              Coordination with warehouses or distribution agents within Bangladesh to ensure
              efficient last-mile delivery.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>Warehouse facilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>Distribution centers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>Last-mile delivery partners</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>Local transportation services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>Storage solutions</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">Network Advantages:</h4>
          <p className="text-gray-700 mb-4">
            This networked model helps sustain reliability and responsiveness across supply
            routes. Key benefits include:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>
                <strong>Multiple Route Options:</strong> Flexibility to choose the most
                efficient and cost-effective shipping routes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>
                <strong>Backup Solutions:</strong> Alternative carriers and routes available
                in case of disruptions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>
                <strong>Better Pricing:</strong> Long-term partnerships enable negotiated
                rates and priority service
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>
                <strong>Local Expertise:</strong> Partners with deep knowledge of regional
                regulations and procedures
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>
                <strong>Rapid Problem Resolution:</strong> Established relationships enable
                quick response to issues
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-red-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4 text-center">
            Partnership Network Benefits
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-red-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-red-600 text-lg">Global Reach</p>
              <p className="text-xs text-gray-600 mt-1">Worldwide coverage</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-red-600 text-lg">Reliability</p>
              <p className="text-xs text-gray-600 mt-1">Trusted partners</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-red-600 text-lg">Flexibility</p>
              <p className="text-xs text-gray-600 mt-1">Multiple options</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-red-600 text-lg">Cost Savings</p>
              <p className="text-xs text-gray-600 mt-1">Negotiated rates</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-red-600 text-lg">Quick Response</p>
              <p className="text-xs text-gray-600 mt-1">Fast resolution</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-red-600 text-lg">Local Knowledge</p>
              <p className="text-xs text-gray-600 mt-1">Regional expertise</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Strength Through Partnership</p>
          <p className="mt-2 text-white/90">
            Our extensive network ensures reliability and responsiveness across all global
            supply routes.
          </p>
        </div>

        {/* Call-to-Action box */}
        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white my-8">
          <h4 className="text-2xl font-bold mb-4">
            Ready to Optimize Your Logistics?
          </h4>
          <p className="mb-6 text-white/90">
            Partner with Zexfro International Ltd for comprehensive logistics support that
            ensures your goods reach their destination efficiently, safely, and in full
            compliance with all regulatory requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0a4a9e] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            Contact Us Today
          </a>
        </div>
      </DocSection>
    </DocLayout>
  );
}

