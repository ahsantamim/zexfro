"use client";

import { Shield, Clock, Globe, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function FeaturesSection() {
  const t = useTranslations("features");
  
  const features = [
    {
      key: "secure",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      cardBg: "bg-blue-50/60",
      hoverBg: "hover:bg-blue-50/80",
      borderColor: "border-blue-200",
    },
    {
      key: "tracking",
      icon: Clock,
      color: "text-green-600",
      bgColor: "bg-green-50",
      cardBg: "bg-green-50/60",
      hoverBg: "hover:bg-green-50/80",
      borderColor: "border-green-200",
    },
    {
      key: "network",
      icon: Globe,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      cardBg: "bg-yellow-50/60",
      hoverBg: "hover:bg-yellow-50/80",
      borderColor: "border-yellow-200",
    },
    {
      key: "quality",
      icon: CheckCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      cardBg: "bg-red-50/60",
      hoverBg: "hover:bg-red-50/80",
      borderColor: "border-red-200",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
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
                  {t(`items.${feature.key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`items.${feature.key}.description`)}{" "}
                  <span className="bg-cyan-100 text-gray-900 px-1.5 py-0.5 font-medium">
                    {t(`items.${feature.key}.highlight`)}
                  </span>
                  {t.has(`items.${feature.key}.secondDescription`) && ` ${t(`items.${feature.key}.secondDescription`)}`}
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
            {t("learnMore")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
