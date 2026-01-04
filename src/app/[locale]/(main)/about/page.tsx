import { 
  ContentLayout, 
  ContentSection, 
  SectionHeader,
  FeatureCard,
  CTABox 
} from "@/components/ui/ContentLayout";
import { 
  Target,
  Users,
  Globe,
  Award,
  TrendingUp,
  Shield
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About Us - Zexfro | Global Trade Made Simple",
  description: "Learn about Zexfro's mission to revolutionize international trade through innovation, security, and compliance.",
};

export default function AboutPage() {
  return (
    <ContentLayout
      pageTitle="About Zexfro"
      pageDescription="Revolutionizing global trade through innovation, security, and unwavering commitment to excellence in international commerce."
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
    >
      {/* Who We Are */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="Who We Are"
          subtitle="A leading force in international trade, connecting businesses worldwide"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Zexfro International Ltd. is a full-service import, export, and marketing company based in Dhaka, Bangladesh. Since our inception, we have been dedicated to facilitating seamless international trade operations for businesses of all sizes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We specialize in connecting global suppliers with buyers, ensuring that every transaction is secure, compliant, and efficient. Our team of experienced professionals works tirelessly to maintain the highest standards of service quality and customer satisfaction.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong focus on regulatory compliance and ethical business practices, Zexfro has established itself as a trusted partner in the global trade ecosystem.
            </p>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
              alt="Zexfro team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </ContentSection>

      {/* Our Values */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title="Our Core Values"
          subtitle="The principles that guide everything we do"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon={<Target className="w-6 h-6" />}
            title="Excellence"
            description="We strive for excellence in every aspect of our operations, from customer service to logistics management."
            color="blue"
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Integrity"
            description="Honesty, transparency, and ethical practices are at the core of all our business relationships."
            color="green"
          />
          <FeatureCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Innovation"
            description="Continuously improving our processes and adopting new technologies to better serve our clients."
            color="purple"
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Customer Focus"
            description="Our clients' success is our success. We go above and beyond to meet their needs."
            color="orange"
          />
          <FeatureCard
            icon={<Globe className="w-6 h-6" />}
            title="Global Vision"
            description="Building bridges between markets and creating opportunities for international growth."
            color="blue"
          />
          <FeatureCard
            icon={<Award className="w-6 h-6" />}
            title="Quality Assurance"
            description="Maintaining the highest standards in all our products, services, and partnerships."
            color="green"
          />
        </div>
      </ContentSection>

      {/* Our Expertise */}
      <ContentSection bgColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
              alt="Global trade operations"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeader
              title="Our Expertise"
              subtitle="Decades of experience in international trade"
            />

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Import-Export Management</h3>
                  <p className="text-gray-600">
                    Comprehensive management of import and export operations, ensuring smooth customs clearance and timely delivery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance & Documentation</h3>
                  <p className="text-gray-600">
                    Expert handling of all regulatory requirements, certifications, and trade documentation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Supply Chain Solutions</h3>
                  <p className="text-gray-600">
                    End-to-end logistics support, from supplier verification to final delivery and tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Statistics */}
      <ContentSection bgColor="blue">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses worldwide for reliable and efficient trade solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#0a4a9e] mb-2">100+</div>
            <div className="text-sm md:text-base text-gray-600">Global Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#0a4a9e] mb-2">50+</div>
            <div className="text-sm md:text-base text-gray-600">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#0a4a9e] mb-2">10K+</div>
            <div className="text-sm md:text-base text-gray-600">Shipments Handled</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#0a4a9e] mb-2">98%</div>
            <div className="text-sm md:text-base text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection bgColor="white">
        <CTABox
          title="Ready to Partner With Us?"
          description="Join hundreds of businesses that trust Zexfro for their international trade needs. Let's grow together."
          buttonText="Get Started Today"
          buttonLink="/contact"
        />
      </ContentSection>
    </ContentLayout>
  );
}
