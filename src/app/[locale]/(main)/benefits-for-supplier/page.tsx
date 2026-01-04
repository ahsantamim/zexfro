import { 
  ContentLayout, 
  ContentSection, 
  SectionHeader,
  FeatureCard,
  CTABox 
} from "@/components/ui/ContentLayout";
import { 
  TrendingUp,
  Globe,
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle,
  DollarSign,
  Package,
  BarChart,
  Headphones,
  FileCheck
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Benefits for Suppliers - Zexfro | Partner With Us",
  description: "Discover the advantages of partnering with Zexfro as a supplier. Access global markets, streamlined processes, and reliable payments.",
};

export default function BenefitsForSupplierPage() {
  return (
    <ContentLayout
      pageTitle="Benefits for Suppliers"
      pageDescription="Partner with Zexfro and unlock global opportunities for your business growth"
      heroImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80"
    >
      {/* Introduction */}
      <ContentSection bgColor="white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#0a4a9e] to-[#05306b] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Partner With Zexfro?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join our global network of trusted suppliers and gain access to international markets, streamlined processes, and reliable payment systems. We provide the platform, support, and expertise you need to expand your business globally.
          </p>
        </div>
      </ContentSection>

      {/* Key Benefits */}
      <ContentSection bgColor="blue">
        <SectionHeader
          title="Key Benefits"
          subtitle="What you gain by partnering with us"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon={<Globe className="w-6 h-6" />}
            title="Global Market Access"
            description="Reach buyers in 50+ countries and expand your customer base beyond local markets."
            color="blue"
          />
          
          <FeatureCard
            icon={<DollarSign className="w-6 h-6" />}
            title="Secure Payments"
            description="Benefit from LC-based transactions and reliable payment systems that protect your interests."
            color="green"
          />
          
          <FeatureCard
            icon={<FileCheck className="w-6 h-6" />}
            title="Documentation Support"
            description="We handle all export documentation, compliance, and customs procedures for you."
            color="purple"
          />
          
          <FeatureCard
            icon={<Headphones className="w-6 h-6" />}
            title="Dedicated Support"
            description="Get personalized assistance from our team throughout the entire trade process."
            color="orange"
          />
          
          <FeatureCard
            icon={<Package className="w-6 h-6" />}
            title="Logistics Assistance"
            description="Simplified shipping and logistics management with our experienced partners."
            color="blue"
          />
          
          <FeatureCard
            icon={<BarChart className="w-6 h-6" />}
            title="Business Growth"
            description="Access analytics, market insights, and tools to help your business scale."
            color="green"
          />
        </div>
      </ContentSection>

      {/* How It Works */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="How It Works"
          subtitle="Your journey to becoming a Zexfro supplier partner"
          centered
        />

        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Register</h3>
              <p className="text-gray-600">
                Complete our simple supplier registration form and provide your business details.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verification</h3>
              <p className="text-gray-600">
                We verify your credentials and ensure compliance with international standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">List Products</h3>
              <p className="text-gray-600">
                Add your products to our platform and reach global buyers instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start Trading</h3>
              <p className="text-gray-600">
                Receive orders, manage shipments, and grow your business globally.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* What We Offer */}
      <ContentSection bgColor="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="What We Offer Suppliers"
              subtitle="Comprehensive support for your success"
            />

            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Market Intelligence</h3>
                  <p className="text-gray-600 text-sm">
                    Access to market trends, pricing insights, and buyer preferences to optimize your offerings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Quality Assurance Support</h3>
                  <p className="text-gray-600 text-sm">
                    Guidance on meeting international quality standards and certifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Training & Resources</h3>
                  <p className="text-gray-600 text-sm">
                    Educational materials and training to help you understand export processes and requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Dispute Resolution</h3>
                  <p className="text-gray-600 text-sm">
                    Fair and transparent processes to handle any concerns or disputes that may arise.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Marketing Support</h3>
                  <p className="text-gray-600 text-sm">
                    Visibility through our platform, promotional campaigns, and buyer outreach programs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
              alt="Supplier collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </ContentSection>

      {/* Success Stories */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="Success Stories"
          subtitle="Real results from our supplier partners"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-8 text-center">
            <div className="text-5xl font-bold text-[#0a4a9e] mb-2">300%</div>
            <div className="text-gray-700 font-semibold mb-2">Revenue Growth</div>
            <p className="text-sm text-gray-600">
              Average revenue increase for suppliers in their first year
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-lg p-8 text-center">
            <div className="text-5xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-700 font-semibold mb-2">New Markets</div>
            <p className="text-sm text-gray-600">
              Average number of new countries our suppliers reach
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-lg p-8 text-center">
            <div className="text-5xl font-bold text-purple-600 mb-2">99%</div>
            <div className="text-gray-700 font-semibold mb-2">On-Time Payment</div>
            <p className="text-sm text-gray-600">
              Reliable payment processing with LC-based security
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Requirements */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title="Supplier Requirements"
          subtitle="What we look for in our partners"
          centered
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#0a4a9e] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Legal Registration</h3>
                  <p className="text-gray-600 text-sm">
                    Valid business registration and tax identification numbers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#0a4a9e] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Quality Standards</h3>
                  <p className="text-gray-600 text-sm">
                    Commitment to meeting international quality requirements
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#0a4a9e] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Product Compliance</h3>
                  <p className="text-gray-600 text-sm">
                    Products must comply with destination country regulations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#0a4a9e] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Ethical Practices</h3>
                  <p className="text-gray-600 text-sm">
                    Adherence to ethical business and labor practices
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#0a4a9e] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Reliable Capacity</h3>
                  <p className="text-gray-600 text-sm">
                    Ability to fulfill orders consistently and on time
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#0a4a9e] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Communication</h3>
                  <p className="text-gray-600 text-sm">
                    Responsive and professional communication with buyers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-2xl p-12 text-white text-center shadow-2xl">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Expand Globally?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join our network of successful suppliers and start reaching international buyers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a4a9e] hover:bg-white/90 font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Become a Supplier
              </a>
              <a
                href="/faq"
                className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-3 rounded-full transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}

