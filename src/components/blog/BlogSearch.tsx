"use client";

export function BlogSearch() {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h3 className="text-xl font-bold mb-4">Search</h3>
      <input
        type="search"
        placeholder="Search articles..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
    </div>
  );
}
