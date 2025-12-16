"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  FileText, 
  UserCheck, 
  Mail,
  ChevronRight 
} from "lucide-react";
import { ZexfroLogo } from "@/components/ui/ZexfroLogo";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/products", label: "Products", icon: Package },
    { href: "/admin/blog", label: "Blog", icon: FileText },
    { href: "/admin/registrations", label: "Registrations", icon: UserCheck },
    { href: "/admin/mail", label: "Mail", icon: Mail },
    { href: "/admin/demo-loading", label: "Loading Demo", icon: LayoutDashboard },
  ];

  return (
    <aside className="w-72 bg-white border-r border-gray-200 min-h-screen sticky top-0 h-screen overflow-y-auto">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="scale-75">
            <ZexfroLogo />
          </div>
        </Link>
        <p className="text-xs text-gray-500 mt-2 font-medium">Admin Portal</p>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative",
                isActive
                  ? "bg-gradient-to-r from-[#0a4a9e] to-[#05306b] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-50 hover:text-[#0a4a9e]"
              )}
            >
              <Icon 
                className={cn(
                  "w-5 h-5 transition-transform duration-200",
                  isActive ? "text-white" : "text-gray-500 group-hover:text-[#0a4a9e]"
                )} 
                strokeWidth={2}
              />
              <span className="font-semibold flex-1">{link.label}</span>
              {isActive && (
                <ChevronRight className="w-4 h-4 text-white" strokeWidth={2.5} />
              )}
            </Link>
          );
        })}
      </nav>

      <Separator className="my-4 mx-4" />

      {/* Quick Info */}
      <div className="p-6 text-xs text-gray-500 space-y-2">
        <div className="flex items-center justify-between">
          <span>Version</span>
          <span className="font-mono">1.0.0</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Last Login</span>
          <span>Just now</span>
        </div>
      </div>
    </aside>
  );
}
