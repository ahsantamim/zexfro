"use client";

import { Package, FileText, UserCheck, Mail, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatsGridSkeleton } from "./loading";

interface DashboardStatsProps {
  loading?: boolean;
}

export function DashboardStats({ loading = false }: DashboardStatsProps) {
  if (loading) {
    return <StatsGridSkeleton count={4} />;
  }
  const stats = [
    { 
      label: "Total Products", 
      value: "124", 
      icon: Package, 
      color: "bg-blue-500",
      trend: "+12%",
      trendUp: true,
      description: "vs last month"
    },
    { 
      label: "Blog Posts", 
      value: "48", 
      icon: FileText, 
      color: "bg-green-500",
      trend: "+8%",
      trendUp: true,
      description: "vs last month"
    },
    { 
      label: "Registrations", 
      value: "1,234", 
      icon: UserCheck, 
      color: "bg-purple-500",
      trend: "+24%",
      trendUp: true,
      description: "vs last month"
    },
    { 
      label: "Emails Sent", 
      value: "3,567", 
      icon: Mail, 
      color: "bg-orange-500",
      trend: "-3%",
      trendUp: false,
      description: "vs last month"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 rounded-none">
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
              <div className="flex items-center gap-2">
                <Badge 
                  variant="secondary" 
                  className={`${
                    stat.trendUp 
                      ? "bg-green-50 text-green-700 hover:bg-green-50" 
                      : "bg-red-50 text-red-700 hover:bg-red-50"
                  } font-semibold`}
                >
                  {stat.trendUp ? (
                    <ArrowUp className="w-3 h-3 mr-1" />
                  ) : (
                    <ArrowDown className="w-3 h-3 mr-1" />
                  )}
                  {stat.trend}
                </Badge>
                <span className="text-xs text-gray-500">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
