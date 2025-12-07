"use client";

export function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <p className="col-span-full text-center text-gray-600">
        Product grid will load dynamically from API
      </p>
    </div>
  );
}
