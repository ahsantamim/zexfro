"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
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
      className="fixed h-20 md:h-60 top-0 left-0 right-0 z-50 bg-[#1800ad] backdrop-blur-md shadow-lg border-b border-white/10 md:overflow-hidden"
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
      <div className="container mx-auto max-w-9xl h-full relative z-10 md:px-0 px-4">
        {/* MOBILE/TABLET LAYOUT - Industry Standard */}
        <div className="md:hidden flex items-center justify-between h-full">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="Zexfro Logo"
              width={80}
              height={80}
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

        {/* DESKTOP LAYOUT - Custom Client Design */}
        <div className="hidden md:flex items-end justify-between h-full">
          {/* Desktop Logo with Animation */}
          <Link href="/" className="flex flex-col items-start h-full pl-0">
            <div className="flex items-center relative w-[400px] h-[400px]">
              {/* GIF Animation - Bigger */}
              <Image
                src="/zex.gif"
                alt="Zexfro Logo Animation"
                width={300}
                height={300}
                className={`object-cover absolute transition-all duration-1000 ${
                  showStaticLogo
                    ? "opacity-0 scale-90"
                    : "opacity-100 scale-100"
                }`}
                priority
              />
              {/* Static PNG Logo - Smaller */}
              <Image
                src="/Logo.png"
                alt="Zexfro Logo"
                width={240}
                height={240}
                className={`object-cover absolute transition-all duration-1000 ${
                  showStaticLogo
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110"
                }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="flex items-end space-x-1 lg:space-x-2 pr-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 lg:px-4 py-8 text-base lg:text-3xl font-bold text-white transition-colors duration-200 rounded-md ${
                  link.href === "/contact"
                    ? "bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    : "hover:bg-white/20"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#1800ad] border-t border-white/10 shadow-lg backdrop-blur-md">
          <div className="container mx-auto max-w-7xl px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-lg font-bold text-white transition-colors rounded-md ${
                  link.href === "/contact"
                    ? "bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    : "hover:bg-white/20"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
