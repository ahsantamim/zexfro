"use client";

import Link from "next/link";

export function QuickActions() {
  const actions = [
    { label: "Add Product", href: "/admin/products/create", icon: "➕" },
    { label: "Write Post", href: "/admin/blog/create", icon: "✍️" },
    { label: "View Site", href: "/", icon: "🌐" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {actions.map((action, index) => (
        <Link
          key={index}
          href={action.href}
          className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition flex items-center gap-4"
        >
          <span className="text-3xl">{action.icon}</span>
          <span className="font-semibold text-lg">{action.label}</span>
        </Link>
      ))}
    </div>
  );
}
