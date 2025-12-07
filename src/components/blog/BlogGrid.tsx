"use client";

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <p className="col-span-full text-center text-gray-600">
        Blog posts will load dynamically from API
      </p>
    </div>
  );
}
