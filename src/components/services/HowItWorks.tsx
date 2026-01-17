"use client";

import { FileSearch, CheckCircle, Truck, PackageCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export function HowItWorks() {
  const t = useTranslations("services.howItWorks");

  const steps = [
    { icon: FileSearch },
    { icon: CheckCircle },
    { icon: Truck },
    { icon: PackageCheck },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0a4a9e 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
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

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Hidden on mobile */}
          <div
            className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0a4a9e] via-[#05306b] to-[#041f3f] z-0"
            style={{ width: "calc(100% - 8rem)", left: "4rem" }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const stepNumber = String(index + 1).padStart(2, '0');
            return (
              <div key={index} className="relative z-10">
                {/* Step Card */}
                <div className="group">
                  {/* Number Badge */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-20">
                      {stepNumber}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="bg-white border-2 border-gray-200 rounded-none p-6 hover:border-[#0a4a9e] hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-[#0a4a9e] transition-colors duration-300">
                      <Icon
                        className="w-6 h-6 text-[#0a4a9e] group-hover:text-white transition-colors duration-300"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {t(`steps.${index}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {t(`steps.${index}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
