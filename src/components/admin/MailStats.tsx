"use client";

import { Mail, AlertCircle, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatsGridSkeleton } from "./loading";
import { Skeleton } from "@/components/ui/skeleton";

interface MailStatsProps {
  loading?: boolean;
}

export function MailStats({ loading = false }: MailStatsProps) {
  if (loading) {
    return (
      <div>
        <Skeleton className="h-6 w-40 mb-4" />
        <StatsGridSkeleton count={4} />
      </div>
    );
  }
  const stats = [
    { 
      label: "Emails Sent", 
      value: "3,567", 
      icon: CheckCircle,
      color: "bg-green-500",
      trend: "+145 today"
    },
    { 
      label: "Failed", 
      value: "12", 
      icon: AlertCircle,
      color: "bg-red-500",
      trend: "-3 from yesterday"
    },
    { 
      label: "Pending", 
      value: "24", 
      icon: Clock,
      color: "bg-yellow-500",
      trend: "In queue"
    },
    { 
      label: "Total Sent", 
      value: "12.5K", 
      icon: Mail,
      color: "bg-blue-500",
      trend: "This month"
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Email Statistics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-none shadow-sm rounded-none">
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
                <p className="text-xs text-gray-500">{stat.trend}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
