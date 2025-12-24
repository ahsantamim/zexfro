"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  FileText,
  UserCheck,
  Mail,
  FolderTree,
  TrendingUp,
  LogOut,
  Settings,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/categories", label: "Categories", icon: FolderTree },
    { href: "/admin/products", label: "Products", icon: Package },
    { href: "/admin/trade-types", label: "Trade Types", icon: TrendingUp },
    { href: "/admin/users", label: "Users", icon: UserCheck },
    { href: "/admin/blog", label: "Blog", icon: FileText },
    { href: "/admin/registrations", label: "Registrations", icon: UserCheck },
    { href: "/admin/mail", label: "Mail", icon: Mail },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen sticky top-0 h-screen overflow-y-auto flex flex-col shadow-2xl">
      {/* Logo Section */}
      <div className="p-6 border-b border-slate-700/50">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm p-1">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Zexfro</h1>
            <p className="text-xs text-slate-400">Admin Portal</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Main Menu
        </p>
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
                  : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
              )}
            >
              <Icon
                className={cn(
                  "w-5 h-5 transition-transform duration-200",
                  isActive
                    ? "text-white"
                    : "text-slate-400 group-hover:text-white"
                )}
                strokeWidth={2}
              />
              <span className="font-medium text-sm flex-1">{link.label}</span>
              {isActive && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-l-full" />
              )}
            </Link>
          );
        })}
      </nav>

      <Separator className="mx-3 bg-slate-700/50" />

      {/* Bottom Section */}
      <div className="p-3 space-y-1">
        <Link
          href="/admin/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-200"
        >
          <Settings className="w-5 h-5" strokeWidth={2} />
          <span className="font-medium text-sm">Settings</span>
        </Link>
        <button
          onClick={() => {
            /* Add logout logic */
          }}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-red-600/20 hover:text-red-400 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" strokeWidth={2} />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>

      {/* User Info */}
      <div className="p-4 border-t border-slate-700/50 bg-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-sm">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">
              Admin User
            </p>
            <p className="text-xs text-slate-400 truncate">admin@zexfro.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
