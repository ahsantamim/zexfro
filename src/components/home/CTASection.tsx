"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function CTASection() {
  const t = useTranslations("cta");
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0A4D96] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg
          className="absolute left-10 top-10 h-32 w-32 text-white"
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
          className="absolute right-20 bottom-10 h-40 w-40 text-white"
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {t("title")}
        </h2>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 bg-white text-[#0A4D96] hover:bg-white/90 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          {t("button")}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
}
