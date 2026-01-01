"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Section {
  id: string;
  title: string;
}

interface DocLayoutProps {
  sections: Section[];
  children: React.ReactNode;
  pageTitle: string;
  pageDescription: string;
}

export function DocLayout({
  sections,
  children,
  pageTitle,
  pageDescription,
}: DocLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar (80px + 20px buffer)

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -90; // Offset for fixed navbar (80px navbar + 10px spacing)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen pt-16 md:pt-20 bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] text-white py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {pageTitle}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            {pageDescription}
          </p>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Sidebar - Fixed Navigation */}
          <aside className="lg:w-64 lg:flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <nav className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  On This Page
                </h2>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                          activeSection === section.id
                            ? "bg-[#0a4a9e] text-white font-semibold"
                            : "text-gray-600 hover:text-[#0a4a9e] hover:bg-blue-50"
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Quick Contact Card */}
              <div className="hidden lg:block mt-6 bg-gradient-to-br from-[#0a4a9e] to-[#05306b] rounded-lg shadow-sm p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Need Help?</h3>
                <p className="text-sm text-white/90 mb-4">
                  Our team is ready to assist you
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-white text-[#0a4a9e] hover:bg-white/90 font-semibold py-2 px-4 rounded-md transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </aside>

          {/* Right Content Area - Scrollable */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8 lg:p-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

interface DocSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function DocSection({ id, title, children }: DocSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 mb-16 last:mb-0">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#0a4a9e]">
        {title}
      </h2>
      <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

