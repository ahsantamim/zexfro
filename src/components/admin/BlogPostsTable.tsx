"use client";

export function BlogPostsTable() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Title
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Category
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Author
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Status
            </th>
            <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5} className="px-6 py-8 text-center text-gray-600">
              No blog posts yet
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
