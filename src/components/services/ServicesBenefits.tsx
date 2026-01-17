"use client";

import {
  CheckCircle2,
  Shield,
  Clock,
  TrendingUp,
  Globe2,
  Users2,
  Sparkles,
  Award,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function ServicesBenefits() {
  const t = useTranslations("services.benefits");

  const benefits = [
    { icon: Shield },
    { icon: Clock },
    { icon: Globe2 },
    { icon: TrendingUp },
    { icon: Users2 },
    { icon: Award },
    { icon: Sparkles },
    { icon: CheckCircle2 },
  ];

  return (
    <>
      {/* Benefits Grid Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#0a4a9e] font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full inline-block">
              {t("sectionTag")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
              {t("title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t("subtitle")}
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
                    <Icon
                      className="w-6 h-6 text-[#0a4a9e] group-hover:text-white transition-colors duration-300"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {t(`items.${index}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`items.${index}.description`)}
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
                  {t("stats.sectionTag")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-4">
                  {t("stats.title")}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t("stats.description")}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] rounded-none text-white">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {t("stats.successfulShipments.value")}
                  </div>
                  <div className="text-white/90 text-sm">{t("stats.successfulShipments.label")}</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] rounded-none text-white">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {t("stats.countriesCovered.value")}
                  </div>
                  <div className="text-white/90 text-sm">{t("stats.countriesCovered.label")}</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] rounded-none text-white">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {t("stats.onTimeDelivery.value")}
                  </div>
                  <div className="text-white/90 text-sm">{t("stats.onTimeDelivery.label")}</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] rounded-none text-white">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {t("stats.customerSupport.value")}
                  </div>
                  <div className="text-white/90 text-sm">{t("stats.customerSupport.label")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
