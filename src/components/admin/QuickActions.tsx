"use client";

import Link from "next/link";
import { Plus, PenSquare, Eye, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface QuickActionsProps {
  loading?: boolean;
}

export function QuickActions({ loading = false }: QuickActionsProps) {
  if (loading) {
    return (
      <div>
        <Skeleton className="h-6 w-32 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="border-none shadow-sm rounded-none">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Skeleton className="h-12 w-12 rounded-lg" />
                  <Skeleton className="h-5 w-5 rounded" />
                </div>
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-40" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  const actions = [
    { 
      label: "Add Product", 
      href: "/admin/products/create", 
      icon: Plus,
      description: "Create new product",
      color: "from-blue-500 to-blue-600"
    },
    { 
      label: "Write Post", 
      href: "/admin/blog/create", 
      icon: PenSquare,
      description: "Publish new article",
      color: "from-green-500 to-green-600"
    },
    { 
      label: "View Website", 
      href: "/", 
      icon: Eye,
      description: "Visit main site",
      color: "from-purple-500 to-purple-600"
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link key={index} href={action.href} className="group">
              <Card className="border-none shadow-sm hover:shadow-lg transition-all duration-300 rounded-none hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-br ${action.color} p-3 rounded-lg shadow-md`}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0a4a9e] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">
                    {action.label}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {action.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
