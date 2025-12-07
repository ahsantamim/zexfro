"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/admin", label: "Dashboard", icon: "📊" },
    { href: "/admin/products", label: "Products", icon: "📦" },
    { href: "/admin/blog", label: "Blog", icon: "📝" },
    { href: "/admin/registrations", label: "Registrations", icon: "👥" },
    { href: "/admin/mail", label: "Mail", icon: "📧" },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Admin</h2>
      </div>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              pathname === link.href
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="text-xl">{link.icon}</span>
            <span className="font-medium">{link.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
