"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ZexfroLogo } from "@/components/ui/ZexfroLogo";

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

  return (
    <nav className="fixed h-60 top-0 left-0 right-0 z-50 bg-[#0A4D96] backdrop-blur-sm shadow-sm border-b border-[#083a73]">
      <div className="container mx-auto max-w-7xl h-full">
        {/* BOTTOM LAYER CONTENT */}
        <div className="flex items-end justify-between h-full pb-4">
          {/* LOGO + TITLE (CENTERED VERTICALLY) */}
          <Link
            href="/"
            className="flex flex-col justify-center items-center h-full"
          >
            <div className="flex items-center gap-2 scale-125">
              <ZexfroLogo />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-end space-x-1 lg:space-x-2 ">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 lg:px-4 py-2 text-sm lg:text-xl font-medium text-white transition-colors duration-200 rounded-md ${
                  link.href === "/contact"
                    ? "bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    : "hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE NAV */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-[#083a73]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-base font-medium text-white transition-colors rounded-md ${
                  link.href === "/contact"
                    ? "bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    : "hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
