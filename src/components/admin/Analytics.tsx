"use client";

import { TrendingUp, Users, Eye, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface AnalyticsProps {
  loading?: boolean;
}

export function Analytics({ loading = false }: AnalyticsProps) {
  if (loading) {
    return (
      <Card className="border-none shadow-sm rounded-none">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="text-center p-3 bg-gray-50 rounded-lg space-y-2">
                <Skeleton className="h-4 w-4 mx-auto" />
                <Skeleton className="h-6 w-16 mx-auto" />
                <Skeleton className="h-3 w-20 mx-auto" />
                <Skeleton className="h-5 w-12 mx-auto" />
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-32 mb-3" />
            <div className="flex items-end justify-between gap-2 h-48">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex items-end justify-center h-40">
                    <Skeleton 
                      className="w-full rounded-t-sm" 
                      style={{ height: `${Math.random() * 80 + 20}%` }}
                    />
                  </div>
                  <Skeleton className="h-3 w-8" />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const data = [45, 52, 38, 65, 72, 85];
  const maxValue = Math.max(...data);

  const metrics = [
    { label: "Page Views", value: "24.5K", change: "+12.5%", icon: Eye, up: true },
    { label: "Visitors", value: "8.2K", change: "+8.3%", icon: Users, up: true },
    { label: "Conversions", value: "1.8K", change: "+15.2%", icon: ShoppingCart, up: true },
  ];

  return (
    <Card className="border-none shadow-sm rounded-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-900">Analytics Overview</CardTitle>
          <Badge variant="outline" className="border-[#0a4a9e] text-[#0a4a9e]">
            Last 6 months
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {/* Mini Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                <Icon className="w-4 h-4 text-gray-500 mx-auto mb-2" strokeWidth={2} />
                <p className="text-xl font-bold text-gray-900">{metric.value}</p>
                <p className="text-xs text-gray-600 mb-1">{metric.label}</p>
                <Badge 
                  variant="secondary" 
                  className={`text-xs ${
                    metric.up ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                  }`}
                >
                  {metric.change}
                </Badge>
              </div>
            );
          })}
        </div>

        {/* Simple Bar Chart */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-[#0a4a9e]" />
            <span className="text-sm font-semibold text-gray-700">Traffic Trend</span>
          </div>
          <div className="flex items-end justify-between gap-2 h-48">
            {data.map((value, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex items-end justify-center h-40">
                  <div
                    className="w-full bg-gradient-to-t from-[#0a4a9e] to-[#0d5bbf] rounded-t-sm hover:from-[#0d5bbf] hover:to-[#0f6fe6] transition-all duration-300 cursor-pointer relative group"
                    style={{ height: `${(value / maxValue) * 100}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs py-1 px-2 rounded">
                      {value}K
                    </div>
                  </div>
                </div>
                <span className="text-xs text-gray-600 font-medium">{months[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
