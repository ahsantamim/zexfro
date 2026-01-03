"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/products", key: "products" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [showStaticLogo, setShowStaticLogo] = useState(false);

  useEffect(() => {
    // Show GIF animation for 3 seconds, then switch to static PNG
    const timer = setTimeout(() => {
      setShowStaticLogo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className="fixed h-16 md:h-20 top-0 left-0 right-0 z-50 bg-[#1800ad] backdrop-blur-md shadow-lg border-b border-white/10"
      style={{ boxShadow: "0 8px 32px 0 rgba(5, 48, 107, 0.37)" }}
    >
      {/* World Map Blueprint Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(/world%20map.png)",
          backgroundSize: "50%",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          filter: "brightness(1.5) contrast(2.2)",
          mixBlendMode: "overlay",
        }}
      />
      <div className="container mx-auto max-w-7xl h-full relative z-10 px-4 sm:px-6 lg:px-8">
        {/* MOBILE/TABLET LAYOUT - Industry Standard */}
        <div className="md:hidden flex items-center justify-between h-full">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="Zexfro Logo"
              width={68}
              height={68}
              className="object-contain"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* DESKTOP LAYOUT - Industry Standard */}
        <div className="hidden md:flex items-center justify-between h-full">
          {/* Desktop Logo with Animation */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[60px] h-[60px]">
              {/* GIF Animation */}
              <Image
                src="/zex.gif"
                alt="Zexfro Logo Animation"
                width={60}
                height={60}
                className={`object-contain absolute scale-190 transition-all duration-1000 ${
                  showStaticLogo
                    ? "opacity-0 scale-90"
                    : "opacity-100 scale-100"
                }`}
                priority
              />
              {/* Static PNG Logo */}
              <Image
                src="/Logo.png"
                alt="Zexfro Logo"
                width={120}
                height={120}
                className={`object-contain absolute scale-190 transition-all duration-1000 ${
                  showStaticLogo
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110"
                }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 lg:px-5 py-2 text-base lg:text-lg font-semibold text-white transition-colors duration-200 rounded-md ${
                  link.href === "/contact"
                    ? "bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    : "hover:bg-white/20"
                }`}
              >
                {t(link.key as any)}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#1800ad] border-t border-white/10 shadow-lg backdrop-blur-md">
          <div className="container mx-auto max-w-7xl px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-semibold text-white transition-colors rounded-md ${
                  link.href === "/contact"
                    ? "bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    : "hover:bg-white/20"
                }`}
              >
                {t(link.key as any)}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
