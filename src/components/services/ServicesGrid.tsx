"use client";

import {
  Ship,
  Package,
  ShieldCheck,
  FileCheck,
  TrendingUp,
  Globe,
  Warehouse,
  DollarSign,
  Clock,
  Users,
  BarChart3,
  Truck,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function ServicesGrid() {
  const t = useTranslations("services.servicesGrid");

  const services = [
    { icon: Ship, title: t("services.0.title"), description: t("services.0.description") },
    { icon: FileCheck, title: t("services.1.title"), description: t("services.1.description") },
    { icon: ShieldCheck, title: t("services.2.title"), description: t("services.2.description") },
    { icon: Package, title: t("services.3.title"), description: t("services.3.description") },
    { icon: Warehouse, title: t("services.4.title"), description: t("services.4.description") },
    { icon: Globe, title: t("services.5.title"), description: t("services.5.description") },
    { icon: DollarSign, title: t("services.6.title"), description: t("services.6.description") },
    { icon: TrendingUp, title: t("services.7.title"), description: t("services.7.description") },
    { icon: Users, title: t("services.8.title"), description: t("services.8.description") },
    { icon: Clock, title: t("services.9.title"), description: t("services.9.description") },
    { icon: BarChart3, title: t("services.10.title"), description: t("services.10.description") },
    { icon: Truck, title: t("services.11.title"), description: t("services.11.description") },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#0a4a9e] font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block">
            {t("sectionTag")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white rounded-none hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#0a4a9e]"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0a4a9e] transition-colors duration-300">
                  <Icon
                    className="w-7 h-7 text-[#0a4a9e] group-hover:text-white transition-colors duration-300"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
