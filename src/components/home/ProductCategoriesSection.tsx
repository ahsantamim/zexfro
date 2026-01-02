"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Loader2 } from "lucide-react";
import { ArrowButton } from "@/components/ui/ArrowButton";

interface Category {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  type: string | null;
  image?: {
    image_url: string;
    alt_text: string | null;
  } | null;
}

export function ProductCategoriesSection() {
  const [activeTab, setActiveTab] = useState<"import" | "export">("import");
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/categories?type=${activeTab}`);
        const data = await response.json();

        if (data.success) {
          // Show only first 8 categories
          setCategories(data.data.slice(0, 8));
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [activeTab]);
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Angled Grid Pattern - Left Side */}
      <div className="absolute -left-32 top-0 bottom-0 w-96 pointer-events-none transform -skew-y-12">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-left"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#0A4D96"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="fade-left" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f9fafb" stopOpacity="1" />
              <stop offset="30%" stopColor="#f9fafb" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#f9fafb" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f9fafb" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#grid-left)"
            opacity="0.3"
          />
          <rect width="100%" height="100%" fill="url(#fade-left)" />
        </svg>
      </div>

      {/* Decorative Angled Grid Pattern - Right Side */}
      <div className="absolute -right-32 top-0 bottom-0 w-96 pointer-events-none transform skew-y-12">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-right"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#0A4D96"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="fade-right" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f9fafb" stopOpacity="1" />
              <stop offset="30%" stopColor="#f9fafb" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#f9fafb" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f9fafb" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#grid-right)"
            opacity="0.3"
          />
          <rect width="100%" height="100%" fill="url(#fade-right)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Product Categories
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our approved categories for secure and compliant trade
          </p>

          {/* Tab Toggle */}
          <div className="inline-flex rounded-full bg-white gap-2 shadow-md p-1 border border-gray-200">
            <button
              onClick={() => setActiveTab("import")}
              className={`px-8 py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-300 ${
                activeTab === "import"
                  ? "bg-gradient-to-r from-[#0a4a9e] to-[#05306b] text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Import
            </button>
            <button
              onClick={() => setActiveTab("export")}
              className={`px-8 py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-300 ${
                activeTab === "export"
                  ? "bg-gradient-to-r from-[#0a4a9e] to-[#05306b] text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Export
            </button>
          </div>
        </div>

        {/* Product Grid with smooth fade transition */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center space-y-4">
              <Loader2 className="w-12 h-12 animate-spin text-[#0a4a9e] mx-auto" />
              <p className="text-gray-600">Loading categories...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-500 ease-in-out">
            {categories.map((category, index) => {
              const imageUrl =
                category.image?.image_url ||
                "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80";

              return (
                <div
                  key={`${activeTab}-${category.id}`}
                  className="relative group animate-fade-in"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <Link
                    href={`/products/categories/${category.slug}`}
                    className="relative rounded-none aspect-[4/3] block transition-transform duration-300 hover:scale-[1.02]"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 overflow-hidden rounded-none">
                      <Image
                        src={imageUrl}
                        alt={category.image?.alt_text || category.name}
                        fill
                        className="object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col p-4 sm:p-6">
                      {/* Title & Subtitle - Bottom Left */}
                      <div className="flex-1" />
                      <div className="flex items-end justify-between gap-2 sm:gap-4">
                        <div className="space-y-1 sm:space-y-2 flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white line-clamp-2">
                            {category.name}
                          </h3>
                          {category.description && (
                            <p className="text-xs sm:text-sm text-gray-200 line-clamp-1">
                              {category.description}
                            </p>
                          )}
                        </div>
                        {/* Arrow Button - Bottom Right */}
                        <div className="flex-shrink-0 self-end mb-1">
                          <ArrowButton />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        {/* View All Products Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href={`/products?type=${activeTab}`}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] hover:from-[#0d5bbf] hover:to-[#0a4a9e] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
