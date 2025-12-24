"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show on admin home
  if (pathname === "/admin") return null;

  const segments = pathname.split("/").filter(Boolean);

  // Remove 'admin' from segments for display
  const breadcrumbSegments = segments.slice(1);

  const capitalize = (str: string) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link
        href="/admin"
        className="flex items-center gap-1 hover:text-[#0a4a9e] transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Dashboard</span>
      </Link>

      {breadcrumbSegments.map((segment, index) => {
        const href = `/admin/${breadcrumbSegments
          .slice(0, index + 1)
          .join("/")}`;
        const isLast = index === breadcrumbSegments.length - 1;
        const isId = segment.startsWith("cmj"); // Check if it's an ID

        // Skip IDs in breadcrumbs
        if (isId) return null;

        return (
          <div key={segment} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {isLast ? (
              <span className="font-semibold text-gray-900">
                {capitalize(segment)}
              </span>
            ) : (
              <Link
                href={href}
                className="hover:text-[#0a4a9e] transition-colors"
              >
                {capitalize(segment)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
