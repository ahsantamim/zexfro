import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Local Service - Zexfro | Domestic Trade Solutions",
  description:
    "Comprehensive local trade services including domestic shipping, warehousing, and supply chain optimization for businesses in Bangladesh.",
};

export default function LocalServicePage() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <PageHeader
        title="Local Service"
        description="Comprehensive domestic trade solutions to help your business succeed in local markets"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Local Trade Services in Bangladesh
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                At Zexfro International Limited, we provide comprehensive local trade services
                tailored to meet the needs of businesses operating within Bangladesh. Our domestic
                solutions ensure seamless operations and efficient logistics management.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Our Local Services Include:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Domestic Logistics
                  </h4>
                  <p className="text-gray-700">
                    Efficient transportation and distribution services across Bangladesh,
                    ensuring timely delivery to all major cities and regions.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Local Warehousing
                  </h4>
                  <p className="text-gray-700">
                    Secure storage facilities with modern inventory management systems
                    for short-term and long-term storage needs.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Distribution Network
                  </h4>
                  <p className="text-gray-700">
                    Extensive local distribution network connecting businesses with
                    retailers and wholesalers across the country.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Trade Documentation
                  </h4>
                  <p className="text-gray-700">
                    Complete assistance with local trade documentation, permits,
                    and compliance requirements for domestic operations.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white my-8">
                <h3 className="text-2xl font-bold mb-4">Why Choose Our Local Service?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold text-xl">✓</span>
                    <span>Deep understanding of local market dynamics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold text-xl">✓</span>
                    <span>Established network across Bangladesh</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold text-xl">✓</span>
                    <span>Fast and reliable domestic delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold text-xl">✓</span>
                    <span>Competitive pricing for local operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold text-xl">✓</span>
                    <span>Expert knowledge of local regulations</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 text-lg">
                Partner with us to streamline your domestic trade operations and grow your
                business within Bangladesh's thriving market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

