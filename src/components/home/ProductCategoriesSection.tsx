"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ArrowButton } from "@/components/ui/ArrowButton";

const importProducts = [
  { id: 1, name: "Agriculture Equipment", subtitle: "Farming machinery & tools", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" },
  { id: 2, name: "Garment Products", subtitle: "Clothing & textiles", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80" },
  { id: 3, name: "Electronics", subtitle: "Latest tech & gadgets", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80" },
  { id: 4, name: "Medical Equipment", subtitle: "Healthcare devices", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80" },
  { id: 5, name: "Veterinary Medicine", subtitle: "Animal healthcare", image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&q=80" },
  { id: 6, name: "Spices", subtitle: "Quality seasonings", image: "https://images.unsplash.com/photo-1596040033229-a0b3b83c9dd3?w=800&q=80" },
  { id: 7, name: "Cosmetics", subtitle: "Beauty products", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80" },
  { id: 8, name: "Consumer Products", subtitle: "Daily essentials", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
  { id: 9, name: "Sport Products", subtitle: "Athletic gear", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80" },
  { id: 10, name: "Others", subtitle: "Various products", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" },
];

const exportProducts = [
  { id: 1, name: "Readymade Garments", subtitle: "Fashion & apparel", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80" },
  { id: 2, name: "Leather Products", subtitle: "Quality leather goods", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80" },
  { id: 3, name: "Jute Products", subtitle: "Eco-friendly items", image: "https://images.unsplash.com/photo-1625887291775-b45b0bcac0fa?w=800&q=80" },
  { id: 4, name: "Frozen Food", subtitle: "Preserved goods", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80" },
  { id: 5, name: "Agricultural Products", subtitle: "Farm produce", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80" },
  { id: 6, name: "Cottage Industry Products", subtitle: "Handcrafted items", image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80" },
];

export function ProductCategoriesSection() {
  const [activeTab, setActiveTab] = useState<"import" | "export">("import");
  const products = activeTab === "import" ? importProducts : exportProducts;
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
          <div className="inline-flex rounded-lg bg-white shadow-md p-1 border border-gray-200">
            <button
              onClick={() => setActiveTab("import")}
              className={`px-8 py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 ${
                activeTab === "import"
                  ? "bg-gradient-to-r from-[#0a4a9e] to-[#05306b] text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Import
            </button>
            <button
              onClick={() => setActiveTab("export")}
              className={`px-8 py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 ${
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-500 ease-in-out">
          {products.map((product, index) => (
            <div 
              key={`${activeTab}-${product.id}`} 
              className="relative group animate-fade-in"
              style={{ 
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'backwards'
              }}
            >
              <Link
                href={`/products/${activeTab}/${product.id}`}
                className="relative rounded-none aspect-[4/3] block transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden rounded-none">
                  <Image
                    src={product.image}
                    alt={product.name}
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
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-200 line-clamp-1">
                        {product.subtitle}
                      </p>
                    </div>
                    {/* Arrow Button - Bottom Right */}
                    <div className="flex-shrink-0 self-end mb-1">
                      <ArrowButton />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

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
