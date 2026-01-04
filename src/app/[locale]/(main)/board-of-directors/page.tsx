import { 
  ContentLayout, 
  ContentSection, 
  SectionHeader,
  CTABox 
} from "@/components/ui/ContentLayout";
import { 
  Users,
  Mail,
  Linkedin,
  Award
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Board of Directors - Zexfro | Leadership Team",
  description: "Meet the experienced leadership team guiding Zexfro's vision and strategic direction in international trade.",
};

export default function BoardOfDirectorsPage() {
  const directors = [
    {
      name: "John Anderson",
      position: "Chairman & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      bio: "With over 25 years of experience in international trade, John leads Zexfro's strategic vision and global expansion initiatives.",
      linkedin: "#",
      email: "j.anderson@zexfro.com"
    },
    {
      name: "Sarah Chen",
      position: "Managing Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      bio: "Sarah brings 20 years of expertise in supply chain management and has been instrumental in building Zexfro's global network.",
      linkedin: "#",
      email: "s.chen@zexfro.com"
    },
    {
      name: "Michael Rodriguez",
      position: "Director of Operations",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      bio: "Michael oversees all operational aspects, ensuring efficiency and compliance across all Zexfro's trade activities.",
      linkedin: "#",
      email: "m.rodriguez@zexfro.com"
    },
    {
      name: "Dr. Fatima Hassan",
      position: "Director of Compliance",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      bio: "Dr. Hassan ensures Zexfro maintains the highest standards of regulatory compliance and ethical business practices.",
      linkedin: "#",
      email: "f.hassan@zexfro.com"
    },
    {
      name: "David Thompson",
      position: "Director of Business Development",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      bio: "David drives growth strategies and partnerships, expanding Zexfro's presence in emerging markets worldwide.",
      linkedin: "#",
      email: "d.thompson@zexfro.com"
    },
    {
      name: "Lisa Wang",
      position: "Director of Finance",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
      bio: "Lisa manages financial planning and risk management, ensuring sustainable growth and fiscal responsibility.",
      linkedin: "#",
      email: "l.wang@zexfro.com"
    },
  ];

  return (
    <ContentLayout
      pageTitle="Board of Directors"
      pageDescription="Meet the experienced leaders steering Zexfro towards excellence in international trade and global commerce."
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
    >
      {/* Introduction */}
      <ContentSection bgColor="white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#0a4a9e] rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Leadership Excellence
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our Board of Directors brings together decades of combined experience in international trade, logistics, compliance, and business development. Together, they guide Zexfro's strategic direction and ensure we maintain the highest standards of service excellence.
          </p>
        </div>
      </ContentSection>

      {/* Directors Grid */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title="Meet Our Directors"
          subtitle="Experienced professionals dedicated to your success"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {directors.map((director) => (
            <div
              key={director.name}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{director.name}</h3>
                  <p className="text-sm text-white/90">{director.position}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {director.bio}
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <a
                    href={`mailto:${director.email}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0a4a9e] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="hidden lg:inline">Email</span>
                  </a>
                  <a
                    href={director.linkedin}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0a4a9e] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="hidden lg:inline">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Governance */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="Corporate Governance"
          subtitle="Committed to transparency and accountability"
          icon={<Award className="w-7 h-7 text-white" />}
          centered
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Board Responsibilities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Strategic planning and direction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Risk management oversight</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Financial performance monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Compliance and ethical standards</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Meeting Schedule</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Quarterly board meetings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Annual general meetings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Special committee sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Strategic planning retreats</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Commitment
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              The Board of Directors is committed to maintaining the highest standards of corporate governance, transparency, and ethical business conduct. We ensure that Zexfro operates in the best interests of our stakeholders, employees, and the communities we serve.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection bgColor="gray">
        <CTABox
          title="Want to Learn More?"
          description="Get in touch with our team to discover how Zexfro can support your international trade needs."
          buttonText="Contact Us"
          buttonLink="/contact"
        />
      </ContentSection>
    </ContentLayout>
  );
}

