"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeixin } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  const t = useTranslations("footer");

  const footerLinks = {
    company: [
      { href: "/payment-methods", label: t("companyPaymentMethods") },
      { href: "/case-study", label: "Case Studies" },
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
      { href: "/logistic-supply-chain", label: t("resourcesLogistics") },
      { href: "/privacy-policy", label: t("resourcesPrivacy") },
      { href: "/terms-conditions", label: t("resourcesTerms") },
      { href: "/hs-code", label: t("resourcesHsCode") },
    ],
    services: [
      { href: "/competitive-advantages", label: t("servicesAdvantages") },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto items-start">
          {/* Info Column */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Information</h4>
            <div className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 justify-center">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>9/B, Uttara -8, Dhaka -1230, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>Phone: +88 01911657332</span>
                </div>

                <div className="flex items-center gap-2 justify-center">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>Email: info@zexfrointl.com</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 justify-center mt-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61580928983797"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 p-2 rounded-full hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" fill="white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/zexfro-international-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#0A66C2] p-2 rounded hover:opacity-80 "
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" fill="white" />
                </a>
                <a
                  href="https://wechat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#09B83E] p-1 rounded hover:opacity-80 transition-opacity"
                  aria-label="WeChat"
                >
                  <FontAwesomeIcon icon={faWeixin} className="text-xl mt-1" />
                </a>
              </div>
            </div>
          </div>

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

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <div className="flex flex-col items-center gap-4">
            {/* Logo */}
            <Image
              src="/zexfro_logo_new.png"
              alt="Zexfro Logo"
              width={80}
              height={80}
              className="object-contain opacity-50"
            />
            {/* Copyright Text */}
            <p className="text-sm text-gray-400">
              © 2026 Zexfro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
