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
    // Continuously cycle between GIF and static logo
    const interval = setInterval(() => {
      setShowStaticLogo((prev) => !prev);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed h-60 top-0 left-0 right-0 z-50 bg-[#001a3d] backdrop-blur-md shadow-lg border-b border-white/10" style={{ boxShadow: '0 8px 32px 0 rgba(5, 48, 107, 0.37)' }}>
      <div className="container mx-auto max-w-7xl h-full">
        {/* BOTTOM LAYER CONTENT */}
        <div className="flex items-end justify-between h-full pb-4">
          {/* LOGO + TITLE */}
          <Link
            href="/"
            className="flex flex-col justify-center items-center h-full"
          >
            <div className="flex items-center justify-center relative w-[400px] h-[400px]">
              {/* GIF Animation - Bigger */}
              <Image 
                src="/zex.gif" 
                alt="Zexfro Logo Animation" 
                width={300} 
                height={300}
                className={`object-cover absolute transition-all duration-1000 ${
                  showStaticLogo ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
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
                  showStaticLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
                priority
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-end space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 lg:px-4 py-2 text-base lg:text-2xl font-bold text-white transition-colors duration-200 rounded-md ${
                  link.href === "/contact"
                    ? "bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    : "hover:bg-white/20"
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
          <div className="md:hidden py-4 space-y-2 border-t border-[#041f3f]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-lg font-bold text-white transition-colors rounded-md ${
                  link.href === "/contact"
                    ? "bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    : "hover:bg-white/20"
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
