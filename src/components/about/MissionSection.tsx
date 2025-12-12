import Image from "next/image";
import { Target, Eye, Heart, Award } from "lucide-react";

export function MissionSection() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work, delivering quality that exceeds expectations."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices at all times."
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "We embrace innovation and continuously seek new ways to improve and grow."
    },
    {
      icon: Award,
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping you achieve your goals."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-[#0a4a9e] font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                Our Mission
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Empowering Global Trade Through Innovation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Zexfro, we're on a mission to revolutionize international trade by providing secure, compliant, and efficient solutions that connect businesses across borders. We believe that every company, regardless of size, should have access to world-class trade infrastructure.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through cutting-edge technology, transparent processes, and unwavering commitment to our clients, we're making global commerce accessible, reliable, and profitable for businesses worldwide.
            </p>
            <div className="relative h-80 rounded-none overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-[#0a4a9e] font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                Our Vision
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Building the Future of International Commerce
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We envision a world where international trade is seamless, secure, and sustainable. A future where businesses can expand globally with confidence, knowing they have a trusted partner in their corner.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By 2030, we aim to be the leading platform for verified international trade, connecting over 100,000 businesses across 150+ countries, and facilitating billions in secure, compliant transactions.
            </p>
            <div className="relative h-80 rounded-none overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="Global business"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <span className="text-[#0a4a9e] font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
            Core Values
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
            What We Stand For
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Our values guide everything we do and shape how we serve our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white border border-gray-200 rounded-none hover:shadow-xl transition-all duration-300 hover:border-[#0a4a9e]"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0a4a9e] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#0a4a9e] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
