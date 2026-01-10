"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  const footerLinks = {
    company: [
      { href: "/payment-methods", label: t("companyPaymentMethods") },
      { href: "/case-study", label: t("companyCaseStudies") },
      { href: "/careers", label: t("companyCareers") },
      { href: "/contact", label: t("companyPartner") },
      { href: "/contact", label: t("companyQuote") },
      { href: "/about", label: t("companyMission") },
      { href: "/vision-mission-values", label: t("companyVision") },
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
      {
        href: "/compliance-standards",
        label: t("servicesComplianceStandards"),
      },
      {
        href: "/documentation-compliance",
        label: t("servicesDocumentationCompliance"),
      },
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

      <div className="container mx-auto max-w-9xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto items-start">
          {/* Company Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">
              {t("companyTitle")}
            </h4>
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
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">
              {t("resourcesTitle")}
            </h4>
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
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">
              {t("servicesTitle")}
            </h4>
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

        {/* Company Info Row */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Image
                src="/Logo.png"
                alt="Zexfro Logo"
                width={100}
                height={100}
                className="object-contain"
              />
              <div className="text-left">
                <p className="text-xs">{t("brandDescription")}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
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

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>© 2026 Zexfro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
