"use client";

import { Link } from "@/i18n/routing";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  const footerLinks = {
    company: [
      { href: "/payment-methods", label: t("companyPaymentMethods") },
      { href: "/contact", label: t("companyCaseStudies") },
      { href: "/contact", label: t("companyCareers") },
      { href: "/contact", label: t("companyPartner") },
      { href: "/contact", label: t("companyQuote") },
      { href: "/about", label: t("companyMission") },
      { href: "/vision-mission-values", label: t("companyVision") },
      { href: "/contact", label: t("companySocial") },
    ],
    resources: [
      { href: "/blog", label: t("resourcesBlog") },
      { href: "/faq", label: t("resourcesFaq") },
      { href: "/contact", label: t("resourcesContact") },
      { href: "/logistics-support", label: t("resourcesLogistics") },
      { href: "/privacy-policy", label: t("resourcesPrivacy") },
      { href: "/terms-conditions", label: t("resourcesTerms") },
      { href: "/hs-code", label: t("resourcesHsCode") },
    ],
    services: [
      { href: "/advantages", label: t("servicesAdvantages") },
      { href: "/logistics-support", label: t("servicesLogisticsSupport") },
      { href: "/quality-assurance", label: t("servicesQualityAssurance") },
      { href: "/compliance-standards", label: t("servicesComplianceStandards") },
      { href: "/documentation-compliance", label: t("servicesDocumentationCompliance") },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* World Map Background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "url('/footer/world-map.webp')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          filter: "brightness(1.8) contrast(0.7)",
          mixBlendMode: "overlay",
        }}
      />
      
      {/* Subtle Shadow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{t("brandTitle")}</h3>
            <p className="text-sm text-gray-400">
              {t("brandDescription")}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{t("address")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{t("phone")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{t("email")}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("companyTitle")}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("resourcesTitle")}</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("servicesTitle")}</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}
