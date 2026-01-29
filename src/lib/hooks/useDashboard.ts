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
    // Optimized configuration to reduce unnecessary API calls
    staleTime: 5 * 60 * 1000, // 5 minutes (match server cache duration)
    gcTime: 10 * 60 * 1000, // 10 minutes (garbage collection time)
    refetchOnWindowFocus: false, // Don't refetch when switching tabs
    refetchOnMount: false, // Don't refetch if data exists in cache
    refetchInterval: false, // Disable auto-refetch (use manual refresh instead)
    retry: 2, // Reduce retry attempts from default 3
  });
}
