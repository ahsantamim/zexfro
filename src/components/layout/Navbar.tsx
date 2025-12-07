"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <ZexfroLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-[#0A4D96] hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/register">
              <MovingBorderButton
                borderRadius="2 rem"
                className="bg-[#0A4D96] text-white text-xl border-yellow-400 font-bold px-6 py-2"
              >
                Register
              </MovingBorderButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-[#0A4D96] hover:bg-gray-100 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <MovingBorderButton
                  borderRadius="1.75rem"
                  className="w-full bg-white text-[#0A4D96] border-[#0A4D96] font-semibold"
                >
                  Register
                </MovingBorderButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
