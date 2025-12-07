"use client";

export function ProductsFilter() {
  return (
    <div className="flex gap-4 mb-8">
      <select className="px-4 py-2 border border-gray-300 rounded-lg">
        <option>All Categories</option>
        <option>Category 1</option>
        <option>Category 2</option>
      </select>
      <input
        type="search"
        placeholder="Search products..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
      />
    </div>
  );
}
