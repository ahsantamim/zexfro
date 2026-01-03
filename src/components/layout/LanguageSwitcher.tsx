"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = (params.locale as Locale) || "en";

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (locale: Locale) => {
    router.replace(pathname, { locale });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-5 h-5" />
        <span className="font-semibold text-sm uppercase">{currentLocale}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                currentLocale === locale
                  ? "bg-[#1800ad] text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="flex items-center justify-between">
                <span>{localeNames[locale]}</span>
                {currentLocale === locale && (
                  <span className="text-xs">✓</span>
                )}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

