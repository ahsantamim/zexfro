import { 
  CheckCircle2, 
  Shield, 
  Clock, 
  TrendingUp, 
  Globe2, 
  Users2,
  Sparkles,
  Award
} from "lucide-react";
import Image from "next/image";

export function ServicesBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "100% Secure & Compliant",
      description: "All transactions are protected with bank-level security and full compliance with international trade regulations."
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Streamlined workflows and automated systems ensure quick turnaround times for all documentation and shipping."
    },
    {
      icon: Globe2,
      title: "Global Network",
      description: "Access to a verified network of partners across 150+ countries for seamless international trade operations."
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Leverage our volume discounts and optimized routes to reduce shipping costs by up to 30%."
    },
    {
      icon: Users2,
      title: "Dedicated Support",
      description: "24/7 multilingual customer support team ready to assist you at every step of your trade journey."
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Over 15 years of experience in international trade with certified customs brokers and logistics specialists."
    },
    {
      icon: Sparkles,
      title: "Technology-Driven",
      description: "Advanced tracking systems, real-time updates, and digital documentation for complete transparency."
    },
    {
      icon: CheckCircle2,
      title: "Quality Guaranteed",
      description: "Comprehensive quality checks and verification processes to ensure your goods meet all required standards."
    }
  ];

  const stats = [
    { value: "10,000+", label: "Successful Shipments" },
    { value: "150+", label: "Countries Covered" },
    { value: "98%", label: "On-Time Delivery" },
    { value: "24/7", label: "Customer Support" }
  ];

  return (
    <>
      {/* Benefits Grid Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#0a4a9e] font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full inline-block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
              Benefits That Drive Success
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of working with a trusted partner in international trade
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-none hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0a4a9e] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#0a4a9e] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section with Image */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[500px] rounded-none overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
                alt="Global shipping operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Stats & Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <span className="text-[#0a4a9e] font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block">
                  Proven Track Record
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-4">
                  Numbers That Speak for Themselves
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our commitment to excellence is reflected in our performance metrics. We&apos;ve helped thousands of businesses expand globally with reliable, efficient trade solutions.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] rounded-none text-white"
                  >
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/90 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
