"use client";

import { signOut, useSession } from "next-auth/react";
import { LogOut } from "lucide-react";

export function AdminHeader() {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="px-8 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Zexfro Admin Portal</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">
            Welcome, <span className="font-semibold">{session?.user?.name || "Admin"}</span>
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] hover:from-[#0d5bbf] hover:to-[#0a4a9e] text-white rounded-full transition-all duration-300 shadow hover:shadow-lg"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
