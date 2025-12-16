"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

interface ProductsFilterProps {
  activeTab: "import" | "export";
  onTabChange: (tab: "import" | "export") => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProductsFilter({
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: ProductsFilterProps) {
  const importCategories = [
    "All Categories",
    "Agriculture Equipment",
    "Garment Products",
    "Electronics",
    "Medical Equipment",
    "Veterinary Medicine",
    "Spices",
    "Cosmetics",
    "Consumer Products",
    "Sport Products",
    "Industrial Machinery",
    "Pharmaceutical Products",
    "Automotive Parts",
    "Construction Materials",
    "Chemical Products",
    "Food & Beverages",
    "Furniture & Fixtures",
    "Toys & Games",
    "Office Supplies",
    "Renewable Energy Equipment",
    "Others",
  ];

  const exportCategories = [
    "All Categories",
    "Readymade Garments",
    "Leather Products",
    "Jute Products",
    "Frozen Food",
    "Agricultural Products",
    "Cottage Industry Products",
    "Tea & Coffee",
    "Seafood Products",
    "Handicrafts",
    "Textiles & Fabrics",
    "Footwear",
    "Ceramic Products",
    "Processed Foods",
    "Spices & Herbs",
    "Home Textiles",
    "Bamboo Products",
    "Jewelry & Accessories",
    "Organic Products",
    "Wood Products",
    "Canned & Preserved Foods",
  ];

  const categories =
    activeTab === "import" ? importCategories : exportCategories;

  return (
    <div className="space-y-6">
      {/* Tab Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-lg bg-white shadow-md p-1 border border-gray-200">
          <button
            onClick={() => onTabChange("import")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "import"
                ? "bg-gradient-to-r from-[#0a4a9e] to-[#05306b] text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Import Products
          </button>
          <button
            onClick={() => onTabChange("export")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "export"
                ? "bg-gradient-to-r from-[#0a4a9e] to-[#05306b] text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Export Products
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
        {/* Category Filter */}
        <div className="relative flex-shrink-0">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <SlidersHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full md:w-64 pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium focus:border-[#0a4a9e] focus:ring-2 focus:ring-[#0a4a9e]/20 outline-none transition-all appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500 focus:border-[#0a4a9e] focus:ring-2 focus:ring-[#0a4a9e]/20 outline-none transition-all"
          />
        </div>
      </div>
    </div>
  );
}
