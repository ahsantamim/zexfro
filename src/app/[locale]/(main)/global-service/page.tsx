import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Global Service - Zexfro | International Trade Solutions",
  description:
    "Comprehensive global trade services including international shipping, customs clearance, and worldwide logistics for businesses expanding globally.",
};

export default function GlobalServicePage() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <PageHeader
        title="Global Service"
        description="Comprehensive international trade solutions to help your business succeed in global markets"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Global Trade Services Worldwide
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Zexfro International Limited connects businesses across continents with our
                comprehensive global trade services. We facilitate seamless international
                transactions, ensuring your products reach markets worldwide with efficiency
                and compliance.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Our Global Services Include:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    International Shipping
                  </h4>
                  <p className="text-gray-700">
                    Sea, air, and land freight services to over 150 countries worldwide
                    with competitive rates and reliable delivery schedules.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Customs Clearance
                  </h4>
                  <p className="text-gray-700">
                    Expert customs brokerage services ensuring smooth clearance through
                    international borders with full regulatory compliance.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Global Sourcing
                  </h4>
                  <p className="text-gray-700">
                    Access to verified suppliers and manufacturers across Asia, Europe,
                    Africa, and the Americas for diverse product categories.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Export Documentation
                  </h4>
                  <p className="text-gray-700">
                    Complete documentation support including certificates of origin,
                    phytosanitary certificates, and trade compliance papers.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Trade Finance
                  </h4>
                  <p className="text-gray-700">
                    Letter of credit (LC) handling, payment terms negotiation, and
                    secure international payment processing services.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Quality Inspection
                  </h4>
                  <p className="text-gray-700">
                    Pre-shipment inspection services ensuring products meet international
                    quality standards and buyer specifications.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white my-8">
                <h3 className="text-2xl font-bold mb-4">Global Reach & Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3">Export Markets</h4>
                    <ul className="space-y-2">
                      <li>• North America</li>
                      <li>• European Union</li>
                      <li>• Middle East</li>
                      <li>• Africa</li>
                      <li>• Asia Pacific</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Import Sources</h4>
                    <ul className="space-y-2">
                      <li>• China & Southeast Asia</li>
                      <li>• India & South Asia</li>
                      <li>• Turkey & Middle East</li>
                      <li>• Europe</li>
                      <li>• USA & Americas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-lg p-6 my-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Global Service?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span>Established network of international partners and agents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span>Expert knowledge of international trade regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span>Competitive international freight rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span>Real-time shipment tracking and updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span>Multilingual support team available 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span>Risk management and cargo insurance options</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 text-lg">
                Expand your business globally with confidence. Partner with Zexfro International
                Limited for reliable, compliant, and cost-effective international trade solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

