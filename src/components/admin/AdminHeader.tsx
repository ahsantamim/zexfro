"use client";

export function AdminHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="px-8 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Company Profile Admin</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Admin User</span>
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
