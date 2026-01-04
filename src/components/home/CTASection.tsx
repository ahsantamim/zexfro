"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function CTASection() {
  const t = useTranslations("cta");
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg
          className="absolute left-10 top-10 h-32 w-32 text-[#0A4D96]"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
        </svg>
        <svg
          className="absolute right-20 bottom-10 h-40 w-40 text-[#0A4D96]"
          viewBox="0 0 100 100"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          {t("title")}
        </h2>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] hover:from-[#0d5bbf] hover:to-[#0a4a9e] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          {t("button")}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
}
