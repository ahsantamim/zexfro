"use client";

import { Package, FileText, UserPlus, FolderTree, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { RecentActivityItem } from "@/lib/hooks/useDashboard";

interface RecentActivityProps {
  activities?: RecentActivityItem[];
  loading?: boolean;
}

function getTimeAgo(date: string): string {
  const now = new Date();
  const past = new Date(date);
  const diffInMs = now.getTime() - past.getTime();
  const diffInMinutes = Math.floor(diffInMs / 60000);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 1) return "Just now";
  if (diffInMinutes < 60)
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  if (diffInHours < 24)
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
}

export function RecentActivity({
  activities,
  loading = false,
}: RecentActivityProps) {
  if (loading || !activities) {
    return (
      <Card className="border-none shadow-sm rounded-lg">
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

  const getIconAndColor = (type: string) => {
    switch (type) {
      case "product":
        return { icon: Package, color: "bg-blue-500" };
      case "blog":
        return { icon: FileText, color: "bg-green-500" };
      case "category":
        return { icon: FolderTree, color: "bg-purple-500" };
      case "user":
        return { icon: UserPlus, color: "bg-orange-500" };
      default:
        return { icon: Package, color: "bg-gray-500" };
    }
  };

  if (!activities || activities.length === 0) {
    return (
      <Card className="border-none shadow-sm rounded-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold text-gray-900">
              Recent Activity
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <Clock className="w-12 h-12 mx-auto mb-2 text-gray-300" />
            <p>No recent activity</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-sm rounded-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold text-gray-900">
            Recent Activity
          </CardTitle>
          <Badge
            variant="secondary"
            className="bg-blue-50 text-[#0a4a9e] hover:bg-blue-50"
          >
            {activities.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const { icon: Icon, color } = getIconAndColor(activity.type);
            return (
              <div key={activity.id}>
                <div className="flex items-start gap-4">
                  <div className={`${color} p-2 rounded-lg flex-shrink-0`}>
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
                      {getTimeAgo(activity.createdAt)}
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
