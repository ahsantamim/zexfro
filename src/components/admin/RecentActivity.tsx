"use client";

import { Package, FileText, UserPlus, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

interface RecentActivityProps {
  loading?: boolean;
}

export function RecentActivity({ loading = false }: RecentActivityProps) {
  if (loading) {
    return (
      <Card className="border-none shadow-sm rounded-none">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-6 w-12 rounded-full" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i}>
                <div className="flex items-start gap-4">
                  <Skeleton className="h-8 w-8 rounded-lg flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-3 w-64" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
                {i < 4 && <Separator className="my-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
  const activities = [
    {
      type: "product",
      icon: Package,
      title: "New product added",
      description: "Electronics - Laptop Model X",
      time: "2 minutes ago",
      color: "bg-blue-500"
    },
    {
      type: "blog",
      icon: FileText,
      title: "Blog post published",
      description: "Understanding EU Trade Regulations",
      time: "1 hour ago",
      color: "bg-green-500"
    },
    {
      type: "registration",
      icon: UserPlus,
      title: "New registration",
      description: "John Smith - ABC Trading Co.",
      time: "3 hours ago",
      color: "bg-purple-500"
    },
    {
      type: "mail",
      icon: Mail,
      title: "Email campaign sent",
      description: "Monthly Newsletter - 1,234 recipients",
      time: "5 hours ago",
      color: "bg-orange-500"
    },
    {
      type: "product",
      icon: Package,
      title: "Product updated",
      description: "Medical Equipment - Price updated",
      time: "1 day ago",
      color: "bg-blue-500"
    }
  ];

  return (
    <Card className="border-none shadow-sm rounded-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-900">Recent Activity</CardTitle>
          <Badge variant="secondary" className="bg-blue-50 text-[#0a4a9e] hover:bg-blue-50">
            Live
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={index}>
                <div className="flex items-start gap-4">
                  <div className={`${activity.color} p-2 rounded-lg flex-shrink-0`}>
                    <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-600 truncate">
                      {activity.description}
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {activity.time}
                    </div>
                  </div>
                </div>
                {index < activities.length - 1 && (
                  <Separator className="my-4" />
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
