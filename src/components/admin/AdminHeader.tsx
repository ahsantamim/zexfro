"use client";

import { signOut, useSession } from "next-auth/react";
import { LogOut, Bell, Search, Home } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export function AdminHeader() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch pending registrations count
  const { data: notifications, refetch } = useQuery({
    queryKey: ["admin-notifications"],
    queryFn: async () => {
      const response = await fetch("/api/admin/notifications");
      if (!response.ok) throw new Error("Failed to fetch notifications");
      return response.json();
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const pendingCount = notifications?.pendingRegistrations || 0;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNotificationClick = () => {
    setIsDropdownOpen(false);
    router.push("/admin/registrations");
  };

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
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              {pendingCount > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 min-w-[1.25rem] h-5">
                  {pendingCount}
                </Badge>
              )}
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
                {/* Header */}
                <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                </div>

                {/* Content */}
                <div className="max-h-96 overflow-y-auto">
                  {pendingCount > 0 ? (
                    <button
                      onClick={handleNotificationClick}
                      className="w-full px-4 py-3 hover:bg-gray-50 transition-colors text-left border-b border-gray-100 last:border-b-0 cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Bell className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            {pendingCount} Pending Registration
                            {pendingCount !== 1 ? "s" : ""}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            You have {pendingCount} new registration
                            {pendingCount !== 1 ? "s" : ""} waiting for review
                          </p>
                          <p className="text-xs text-blue-600 mt-1 font-medium">
                            Click to view →
                          </p>
                        </div>
                      </div>
                    </button>
                  ) : (
                    <div className="px-4 py-8 text-center">
                      <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-sm text-gray-500">
                        No new notifications
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                {pendingCount > 0 && (
                  <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                    <button
                      onClick={handleNotificationClick}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium w-full text-center cursor-pointer"
                    >
                      View All Registrations
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

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
