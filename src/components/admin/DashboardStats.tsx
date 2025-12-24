"use client";

import { Package, FileText, UserCheck, FolderTree } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatsGridSkeleton } from "./loading";
import { DashboardStats as DashboardStatsType } from "@/lib/hooks/useDashboard";

interface DashboardStatsProps {
  stats?: DashboardStatsType;
  loading?: boolean;
}

export function DashboardStats({
  stats,
  loading = false,
}: DashboardStatsProps) {
  if (loading || !stats) {
    return <StatsGridSkeleton count={4} />;
  }

  const statCards = [
    {
      label: "Total Products",
      value: stats.totalProducts.toString(),
      icon: Package,
      color: "bg-blue-500",
      description: "Active products",
    },
    {
      label: "Blog Posts",
      value: stats.totalBlogPosts.toString(),
      icon: FileText,
      color: "bg-green-500",
      description: `${stats.publishedBlogPosts} published, ${stats.draftBlogPosts} drafts`,
    },
    {
      label: "Categories",
      value: stats.totalCategories.toString(),
      icon: FolderTree,
      color: "bg-purple-500",
      description: "Product categories",
    },
    {
      label: "Registrations",
      value: stats.totalRegistrations.toString(),
      icon: UserCheck,
      color: "bg-orange-500",
      description: "Total user registrations",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={index}
            className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.label}
              </CardTitle>
              <div className={`${stat.color} text-white p-2.5 rounded-lg`}>
                <Icon className="w-5 h-5" strokeWidth={2} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <p className="text-xs text-gray-500">{stat.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
