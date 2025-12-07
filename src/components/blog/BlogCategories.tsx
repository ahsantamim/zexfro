"use client";

export function BlogCategories() {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h3 className="text-xl font-bold mb-4">Categories</h3>
      <ul className="space-y-2">
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
          All Posts
        </li>
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
          Technology
        </li>
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
          Business
        </li>
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
          News
        </li>
      </ul>
    </div>
  );
}
