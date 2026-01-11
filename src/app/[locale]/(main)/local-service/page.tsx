import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Local Activities & Manufacturer - Zexfro | Domestic Trade Solutions",
  description:
    "Zexfro International Ltd plays an active role in Bangladesh's local trade ecosystem, supporting local businesses and ensuring efficient distribution across the country.",
};

export default function LocalServicePage() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <PageHeader
        title="Local Activities & Manufacturer"
        description="Strengthening Bangladesh's trade ecosystem through local partnerships and distribution excellence"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Local Activities of Zexfro International Ltd
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Zexfro International Ltd plays an active and responsible role in the local trade 
                ecosystem of Bangladesh. Operating from Dhaka Uttara, the company focuses on 
                strengthening domestic supply chains, supporting local businesses, and ensuring 
                efficient distribution of quality imported and locally produced goods across the country.
              </p>
            </div>

            {/* Local Market Distribution */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Local Market Distribution & Supply Chain Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Zexfro International Ltd maintains a strong distribution network throughout Bangladesh 
                to ensure timely and reliable delivery of imported products. The company collaborates 
                with wholesalers, retailers, and institutional buyers to distribute products efficiently 
                in urban and rural markets. This ensures product availability, competitive pricing, and 
                consistent supply across the country.
              </p>
            </div>

            {/* Sourcing & Promotion */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sourcing & Promotion of Bangladeshi Products
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                One of the key local activities of Zexfro International Ltd is sourcing high-quality 
                products manufactured in Bangladesh. The company works closely with local manufacturers, 
                farmers, SMEs, and factories to identify export-ready products. These products are 
                promoted and prepared according to international standards for global markets.
              </p>

              {/* Local Supplier Development */}
              <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Local Supplier Development
                </h4>
                <p className="text-gray-700 mb-4">
                  Zexfro International Ltd supports local suppliers by:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">•</span>
                    <span>Providing guidance on quality improvement and packaging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">•</span>
                    <span>Advising on international compliance and certification requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">•</span>
                    <span>Helping manufacturers understand global market demand</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 font-medium">
                  This strengthens Bangladesh's export potential and helps local businesses grow sustainably.
                </p>
              </div>
            </div>

            {/* Quality Inspection */}
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quality Inspection & Compliance Monitoring
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Before distribution in the local market or export abroad, Zexfro International Ltd 
                conducts strict quality checks. Products are inspected for safety, durability, 
                labeling, and regulatory compliance as per Bangladesh standards and international 
                requirements. This ensures consumer trust and long-term brand reliability.
              </p>
            </div>

            {/* Key Activities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              {/* Local Marketing */}
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Local Marketing & Brand Promotion
                </h4>
                <p className="text-gray-700 mb-4">
                  Zexfro International Ltd actively markets imported products within Bangladesh through:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Distributor and dealer networks</li>
                  <li>• Business-to-business (B2B) promotions</li>
                  <li>• Trade fairs, exhibitions, and local business events</li>
                  <li>• Market research and consumer feedback analysis</li>
                </ul>
                <p className="text-gray-700 mt-4 text-sm">
                  These activities help build brand awareness and expand market reach.
                </p>
              </div>

              {/* Warehousing */}
              <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Warehousing & Inventory Management
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The company manages secure warehousing facilities to store imported and locally 
                  sourced goods. Proper inventory control, stock rotation, and product handling 
                  practices are followed to maintain product quality and reduce losses.
                </p>
              </div>

              {/* Logistics */}
              <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Logistics & Transportation Support
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The company coordinates domestic transportation using reliable logistics partners 
                  to ensure smooth movement of goods from ports to warehouses and from warehouses 
                  to markets across Bangladesh. Efficient route planning and timely delivery are 
                  key priorities.
                </p>
              </div>

              {/* Customer Support */}
              <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Customer Support & After-Sales Services
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Zexfro International Ltd provides dedicated customer support for local buyers, 
                  distributors, and partners. This includes order tracking, technical assistance 
                  (where applicable), complaint handling, and after-sales services to ensure 
                  complete customer satisfaction.
                </p>
              </div>
            </div>

            {/* Employment & Economic Contribution */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Employment & Local Economic Contribution
              </h3>
              <p className="text-white/95 leading-relaxed">
                Through its operations, Zexfro International Ltd creates employment opportunities 
                for local professionals, warehouse staff, logistics personnel, and marketing teams. 
                The company contributes to Bangladesh's economy by supporting local industries and 
                trade activities.
              </p>
            </div>

            {/* Ethical Practices */}
            <div className="bg-gray-50 border-l-4 border-gray-600 p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ethical Business Practices & Community Responsibility
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Zexfro International Ltd follows ethical business practices, fair trade principles, 
                and transparent operations. The company aims to build long-term relationships with 
                local partners while contributing positively to the business community and overall 
                economic development of Bangladesh.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <a
                href="/contact"
                className="inline-block bg-[#0a4a9e] text-white font-bold px-8 py-4 rounded-full hover:bg-[#05306b] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

