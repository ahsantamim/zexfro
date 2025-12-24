/**
 * React Query hooks for dashboard data
 */

import { useQuery } from "@tanstack/react-query";

export interface DashboardStats {
  totalProducts: number;
  totalBlogPosts: number;
  totalCategories: number;
  totalUsers: number;
  totalRegistrations: number;
  publishedBlogPosts: number;
  draftBlogPosts: number;
}

export interface RecentActivityItem {
  id: string;
  type: "product" | "blog" | "category" | "user";
  title: string;
  description: string;
  createdAt: string;
}

export interface DashboardData {
  stats: DashboardStats;
  recentActivity: RecentActivityItem[];
}

export function useDashboard() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const response = await fetch("/api/admin/dashboard");
      if (!response.ok) throw new Error("Failed to fetch dashboard data");
      return response.json() as Promise<DashboardData>;
    },
    staleTime: 30 * 1000, // 30 seconds (more frequent updates for dashboard)
    refetchInterval: 60 * 1000, // Auto-refetch every minute
  });
}
