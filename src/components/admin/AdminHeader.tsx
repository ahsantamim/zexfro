"use client";

import { signOut, useSession } from "next-auth/react";
import { LogOut, Bell, Search, Home } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function AdminHeader() {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#0a4a9e] to-[#05306b] bg-clip-text text-transparent">
            Admin Portal
          </h1>
          <Separator orientation="vertical" className="h-6" />
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0a4a9e] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="hidden md:inline">View Website</span>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search (placeholder) */}
          <button className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
            <Search className="w-4 h-4" />
            <span className="text-sm">Search...</span>
          </button>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 min-w-[1.25rem] h-5">
              3
            </Badge>
          </button>

          <Separator orientation="vertical" className="h-6" />

          {/* User Info */}
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 border-2 border-[#0a4a9e]">
              <AvatarFallback className="bg-gradient-to-br from-[#0a4a9e] to-[#05306b] text-white font-bold">
                {getInitials(session?.user?.name || "Admin")}
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block text-right">
              <p className="text-sm font-semibold text-gray-900">
                {session?.user?.name || "Admin"}
              </p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>

          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 border-gray-300 hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-all duration-200"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
