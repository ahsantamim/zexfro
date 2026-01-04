import { 
  ContentLayout, 
  ContentSection, 
  SectionHeader, 
  FeatureCard,
  CTABox 
} from "@/components/ui/ContentLayout";
import { 
  Package, 
  Plane, 
  Ship,
  FileCheck, 
  MonitorDot, 
  Network, 
  Truck,
  Globe,
  CheckCircle,
  Clock,
  Shield
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Logistics & Supply Chain - Zexfro | Comprehensive Logistics Solutions",
  description:
    "Zexfro provides end-to-end logistics and supply chain management including freight forwarding, warehousing, customs clearance, and real-time tracking for seamless global trade.",
};

export default function LogisticsSupplyChainPage() {
  return (
    <ContentLayout
      pageTitle="Logistics & Supply Chain"
      pageDescription="Comprehensive end-to-end supply chain management solutions designed to streamline your global trade operations with efficiency, reliability, and complete transparency."
      heroImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80"
    >
      {/* Overview Section */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="Complete Supply Chain Solutions"
          subtitle="From origin to destination, we manage every aspect of your logistics operations to ensure seamless, efficient, and cost-effective global trade."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon={<Package className="w-6 h-6" />}
            title="Freight Management"
            description="Expert coordination of air, sea, and land freight services to ensure your cargo reaches its destination on time and within budget."
            color="blue"
          />
          <FeatureCard
            icon={<Truck className="w-6 h-6" />}
            title="Warehousing Solutions"
            description="Secure storage facilities with inventory management systems to keep your products safe and accessible when you need them."
            color="green"
          />
          <FeatureCard
            icon={<FileCheck className="w-6 h-6" />}
            title="Customs Clearance"
            description="Full documentation support and customs brokerage services to ensure smooth border crossings and regulatory compliance."
            color="purple"
          />
          <FeatureCard
            icon={<MonitorDot className="w-6 h-6" />}
            title="Real-Time Tracking"
            description="24/7 visibility into your shipments with advanced tracking technology and automated status notifications."
            color="orange"
          />
          <FeatureCard
            icon={<Network className="w-6 h-6" />}
            title="Global Network"
            description="Extensive network of trusted partners and carriers spanning all major trade routes and destinations worldwide."
            color="blue"
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Risk Management"
            description="Comprehensive insurance coverage and contingency planning to protect your cargo against unforeseen circumstances."
            color="green"
          />
        </div>
      </ContentSection>

      {/* Transportation Services */}
      <ContentSection bgColor="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="Multi-Modal Transportation"
              subtitle="Flexible shipping options tailored to your specific needs, timeline, and budget requirements."
              icon={<Globe className="w-7 h-7 text-white" />}
            />

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4 p-5 bg-white rounded-lg border border-gray-200 hover:border-[#0a4a9e] transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plane className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Air Freight</h3>
                  <p className="text-gray-600 text-sm">
                    Fast, reliable air cargo services for time-sensitive shipments. Ideal for high-value products, perishables, and urgent deliveries requiring speed over cost.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-lg border border-gray-200 hover:border-[#0a4a9e] transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Ship className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Sea Freight</h3>
                  <p className="text-gray-600 text-sm">
                    Cost-effective ocean shipping for bulk cargo and large volumes. Full container load (FCL) and less than container load (LCL) options available.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-lg border border-gray-200 hover:border-[#0a4a9e] transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Land Transportation</h3>
                  <p className="text-gray-600 text-sm">
                    Efficient road and rail freight services for domestic and cross-border shipments. Door-to-door delivery with real-time GPS tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&q=80"
                alt="Global transportation and logistics network"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#0a4a9e]">150+</div>
                  <div className="text-xs text-gray-600 mt-1">Countries Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0a4a9e]">10K+</div>
                  <div className="text-xs text-gray-600 mt-1">Shipments/Year</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0a4a9e]">98%</div>
                  <div className="text-xs text-gray-600 mt-1">On-Time Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Process Section */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="Our Logistics Process"
          subtitle="A streamlined approach to managing your supply chain from end to end"
          centered
        />

        <div className="mt-12 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#0a4a9e] via-[#05306b] to-[#041f3f] mx-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              {
                number: "01",
                title: "Order Planning",
                description: "We analyze your requirements and create an optimal logistics strategy tailored to your needs.",
                icon: <Package className="w-6 h-6" />,
              },
              {
                number: "02",
                title: "Documentation",
                description: "Complete preparation of all required customs and shipping documents for smooth processing.",
                icon: <FileCheck className="w-6 h-6" />,
              },
              {
                number: "03",
                title: "Transportation",
                description: "Execution of freight movement using the most efficient and cost-effective transportation mode.",
                icon: <Truck className="w-6 h-6" />,
              },
              {
                number: "04",
                title: "Delivery & Tracking",
                description: "Real-time monitoring and final delivery confirmation with complete shipment visibility.",
                icon: <CheckCircle className="w-6 h-6" />,
              },
            ].map((step) => (
              <div key={step.number} className="relative">
                {/* Number Badge */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0a4a9e] to-[#041f3f] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg relative z-10">
                    {step.number}
                  </div>
                </div>
                
                {/* Card */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#0a4a9e] hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <div className="text-[#0a4a9e]">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* Benefits Section */}
      <ContentSection bgColor="blue">
        <SectionHeader
          title="Why Choose Our Logistics Services"
          subtitle="Experience the advantages of working with a trusted global logistics partner"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Time Efficiency</h3>
                <p className="text-gray-600">
                  Optimized routing and scheduling ensure your cargo arrives on schedule. Our average on-time delivery rate exceeds 98%, minimizing delays and keeping your supply chain moving smoothly.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Security & Safety</h3>
                <p className="text-gray-600">
                  Your cargo is protected with comprehensive insurance coverage and secure handling procedures. We maintain the highest standards of safety throughout the entire logistics chain.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MonitorDot className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Transparency</h3>
                <p className="text-gray-600">
                  Real-time tracking and automated notifications keep you informed at every stage. Access detailed shipment information anytime through our online portal or mobile app.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Network className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600">
                  Our extensive network of trusted partners spans over 150 countries, ensuring reliable service wherever your business takes you. From major trade hubs to remote locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Testimonial Section */}
      <ContentSection bgColor="white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-[#0a4a9e] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">"</span>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium mb-6">
              "Zexfro's logistics team has been instrumental in streamlining our global supply chain. Their attention to detail, proactive communication, and reliable service have made them an invaluable partner for our business."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div className="text-left">
                <p className="font-bold text-gray-900">Michael Thompson</p>
                <p className="text-sm text-gray-600">Supply Chain Director, Global Electronics Corp</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection bgColor="gray">
        <CTABox
          title="Ready to Optimize Your Supply Chain?"
          description="Partner with Zexfro for reliable, efficient, and cost-effective logistics solutions that drive your business forward. Contact us today for a free consultation."
          buttonText="Get Started Today"
          buttonLink="/contact"
        />
      </ContentSection>
    </ContentLayout>
  );
}
