import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";

export function TeamSection() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "15+ years in international trade and business development",
      linkedin: "#",
      twitter: "#",
      email: "sarah@zexfro.com"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Former lead architect at major fintech companies",
      linkedin: "#",
      twitter: "#",
      email: "michael@zexfro.com"
    },
    {
      name: "Emma Davis",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Expert in logistics and supply chain management",
      linkedin: "#",
      twitter: "#",
      email: "emma@zexfro.com"
    },
    {
      name: "James Wilson",
      role: "Head of Compliance",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "20+ years in regulatory compliance and risk management",
      linkedin: "#",
      twitter: "#",
      email: "james@zexfro.com"
    },
    {
      name: "Lisa Anderson",
      role: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Passionate about delivering exceptional client experiences",
      linkedin: "#",
      twitter: "#",
      email: "lisa@zexfro.com"
    },
    {
      name: "David Martinez",
      role: "Head of Business Development",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Building strategic partnerships across global markets",
      linkedin: "#",
      twitter: "#",
      email: "david@zexfro.com"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#0a4a9e] font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
            Meet the Minds Behind Zexfro
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse team of experts dedicated to your success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-none border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-[#0a4a9e]"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a4a9e]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    <Link
                      href={member.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-[#0a4a9e]" />
                    </Link>
                    <Link
                      href={member.twitter}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-[#0a4a9e]" />
                    </Link>
                    <Link
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-[#0a4a9e]" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#0a4a9e] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] rounded-none p-12 md:p-16 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-[#0a4a9e] hover:bg-white/90 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View Open Positions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
