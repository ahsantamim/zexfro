"use client";

import { useEffect, useState } from "react";

export function BlogCategories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/blog/categories");
      if (response.ok) {
        const data = await response.json();
        setCategories(data.categories);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h3 className="text-xl font-bold mb-4">Categories</h3>
      <ul className="space-y-2">
        <li
          className={`cursor-pointer transition-colors ${
            selectedCategory === null
              ? "text-[#0a4a9e] font-semibold"
              : "text-gray-600 hover:text-[#0a4a9e]"
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          All Posts
        </li>
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer transition-colors ${
              selectedCategory === category
                ? "text-[#0a4a9e] font-semibold"
                : "text-gray-600 hover:text-[#0a4a9e]"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
