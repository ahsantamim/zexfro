"use client";

import { Link } from "@/i18n/routing";
import { Settings, MapPin, Globe2, ArrowRight } from "lucide-react";
import Image from "next/image";

export function ServicesHighlightSection() {
  const services = [
    {
      id: 1,
      title: "Seamless Solutions",
      description:
        "End-to-end export-import solutions to help your business succeed in global markets. Complete trade cycle management from sourcing to delivery.",
      icon: Settings,
      href: "/services",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      features: [
        "Complete Trade Management",
        "Documentation Support",
        "Quality Assurance",
        "Real-time Tracking",
      ],
    },
    {
      id: 2,
      title: "Local Service",
      description:
        "Comprehensive domestic trade solutions within Bangladesh. Fast, reliable, and cost-effective local logistics and distribution services.",
      icon: MapPin,
      href: "/local-service",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
      features: [
        "Domestic Logistics",
        "Local Warehousing",
        "Distribution Network",
        "Trade Documentation",
      ],
    },
    {
      id: 3,
      title: "Global Service",
      description:
        "International trade solutions connecting businesses worldwide. Expert customs clearance, global sourcing, and worldwide shipping services.",
      icon: Globe2,
      href: "/global-service",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
      features: [
        "International Shipping",
        "Customs Clearance",
        "Global Sourcing",
        "Trade Finance",
      ],
    },
  ];

  return (
    <section className="min-h-[66vh] flex items-center relative py-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/home/sercvicebg.jpg"
          alt="Import Export Services Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-white/70 to-slate-50/100" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive trade solutions tailored to your business needs - from
            local operations to global expansion
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group block bg-blue-50/100 hover:bg-blue-50/80 rounded-none border border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Icon on Image */}
                  <div className="absolute top-4 right-4 w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-blue-600" strokeWidth={2} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-blue-600 font-bold text-sm mt-0.5">
                          •
                        </span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More */}
                  <div className="flex items-center gap-2 text-[#0a4a9e] font-semibold text-sm">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] hover:from-[#0d5bbf] hover:to-[#0a4a9e] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

