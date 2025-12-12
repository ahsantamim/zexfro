import { Shield, Clock, Globe, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function FeaturesSection() {
  const features = [
    {
      title: "Secure & Compliant",
      description:
        "End-to-end encryption and full regulatory compliance across all ",
      highlight: "EU trade regulations",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      cardBg: "bg-blue-50/60",
      hoverBg: "hover:bg-blue-50/80",
      borderColor: "border-blue-200",
    },
    {
      title: "Real-Time Tracking",
      description: "Monitor your shipments and orders ",
      highlight: "24/7 with live updates",
      secondDescription: " and automated notifications",
      icon: Clock,
      color: "text-green-600",
      bgColor: "bg-green-50",
      cardBg: "bg-green-50/60",
      hoverBg: "hover:bg-green-50/80",
      borderColor: "border-green-200",
    },
    {
      title: "Global Network",
      description: "Connect with ",
      highlight: "100+ verified importers and exporters",
      secondDescription: " across Europe and beyond",
      icon: Globe,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      cardBg: "bg-yellow-50/60",
      hoverBg: "hover:bg-yellow-50/80",
      borderColor: "border-yellow-200",
    },
    {
      title: "Quality Assurance",
      description: "All partners are vetted and products meet ",
      highlight: "international quality standards",
      icon: CheckCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      cardBg: "bg-red-50/60",
      hoverBg: "hover:bg-red-50/80",
      borderColor: "border-red-200",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Zexfro
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for secure, compliant, and efficient global
            trade
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group p-6 ${feature.cardBg} ${feature.hoverBg} rounded-none hover:shadow-xl transition-all duration-300 border ${feature.borderColor}`}
              >
                <div
                  className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                >
                  <Icon
                    className={`w-7 h-7 ${feature.color} transition-all duration-300 group-hover:scale-110`}
                    strokeWidth={2}
                  />
                  <Icon
                    className={`w-7 h-7 ${feature.color} absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    strokeWidth={3}
                    fill="currentColor"
                    fillOpacity={0.2}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                  <span className="bg-cyan-100 text-gray-900 px-1.5 py-0.5 font-medium">
                    {feature.highlight}
                  </span>
                  {feature.secondDescription}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] hover:from-[#0d5bbf] hover:to-[#0a4a9e] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
