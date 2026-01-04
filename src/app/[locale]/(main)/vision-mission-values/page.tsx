import { 
  ContentLayout, 
  ContentSection, 
  SectionHeader,
  FeatureCard,
  CTABox 
} from "@/components/ui/ContentLayout";
import { 
  Target,
  Compass,
  Heart,
  Shield,
  Users,
  TrendingUp,
  Globe,
  CheckCircle,
  Award
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Vision, Mission & Values - Zexfro | Our Purpose",
  description: "Discover Zexfro's vision for the future of global trade, our mission to serve clients, and the core values that guide us.",
};

export default function VisionMissionValuesPage() {
  return (
    <ContentLayout
      pageTitle="Vision, Mission & Values"
      pageDescription="Our guiding principles and commitment to excellence in international trade"
      heroImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
    >
      {/* Vision */}
      <ContentSection bgColor="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-[#0a4a9e] to-[#05306b] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 text-center leading-relaxed">
              "To be the world's most trusted and innovative platform for secure, compliant, and efficient international trade, connecting businesses across borders and creating opportunities for sustainable global commerce."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <Globe className="w-12 h-12 text-[#0a4a9e] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">
                Expanding our network to serve businesses in every corner of the world
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <Shield className="w-12 h-12 text-[#0a4a9e] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Trust & Security</h3>
              <p className="text-gray-600 text-sm">
                Building lasting relationships through transparency and reliability
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <TrendingUp className="w-12 h-12 text-[#0a4a9e] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Leading the industry with cutting-edge solutions and technology
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Mission */}
      <ContentSection bgColor="blue">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Compass className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-green-700 mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <p className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8">
              "To empower businesses worldwide by providing seamless, secure, and compliant international trade solutions that drive growth, foster partnerships, and create lasting value."
            </p>
            
            <div className="border-t-2 border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                We Achieve This By:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Ensuring Compliance</h4>
                    <p className="text-gray-600 text-sm">
                      Maintaining the highest standards of regulatory compliance across all jurisdictions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Building Trust</h4>
                    <p className="text-gray-600 text-sm">
                      Creating transparent and secure environments for international transactions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Delivering Excellence</h4>
                    <p className="text-gray-600 text-sm">
                      Providing exceptional service quality and support at every touchpoint
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Fostering Growth</h4>
                    <p className="text-gray-600 text-sm">
                      Enabling businesses to expand globally with confidence and efficiency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Core Values */}
      <ContentSection bgColor="white">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The fundamental principles that shape our culture and guide our decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Integrity"
            description="We conduct business with honesty, transparency, and ethical practices in every interaction and transaction."
            color="blue"
          />
          
          <FeatureCard
            icon={<Award className="w-6 h-6" />}
            title="Excellence"
            description="We strive for the highest quality in our services, continuously improving and exceeding expectations."
            color="green"
          />
          
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Customer-Centricity"
            description="Our clients' success is at the heart of everything we do. We listen, adapt, and deliver solutions that matter."
            color="purple"
          />
          
          <FeatureCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Innovation"
            description="We embrace change and continuously seek new ways to improve our processes and services."
            color="orange"
          />
          
          <FeatureCard
            icon={<Globe className="w-6 h-6" />}
            title="Collaboration"
            description="We believe in the power of partnerships and work together with clients, suppliers, and stakeholders."
            color="blue"
          />
          
          <FeatureCard
            icon={<Target className="w-6 h-6" />}
            title="Accountability"
            description="We take ownership of our actions and commitments, delivering on our promises consistently."
            color="green"
          />
        </div>
      </ContentSection>

      {/* Our Commitment */}
      <ContentSection bgColor="gray">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our Commitment to You"
            subtitle="Building lasting partnerships through unwavering dedication"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-[#0a4a9e]">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#0a4a9e]" />
                To Our Clients
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We promise to provide secure, compliant, and efficient trade solutions that help you grow your business globally. Your success is our priority, and we're committed to being your trusted partner every step of the way.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-green-600" />
                To Our Team
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We foster a culture of respect, growth, and innovation. We invest in our people, encourage collaboration, and create an environment where everyone can thrive and contribute to our shared vision.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-purple-600" />
                To Our Partners
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We build relationships based on trust, mutual respect, and shared goals. We believe in fair practices, clear communication, and creating win-win scenarios that benefit all stakeholders.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Heart className="w-6 h-6 text-orange-600" />
                To Our Community
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We recognize our responsibility to contribute positively to the communities we serve. We operate ethically, support sustainable practices, and strive to make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection bgColor="white">
        <CTABox
          title="Share Our Vision?"
          description="Join us in revolutionizing international trade and creating opportunities for global growth."
          buttonText="Get Started"
          buttonLink="/contact"
        />
      </ContentSection>
    </ContentLayout>
  );
}

