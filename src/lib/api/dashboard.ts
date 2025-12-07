export interface DashboardStats {
  totalProducts: number;
  totalBlogPosts: number;
  totalRegistrations: number;
  pendingRegistrations: number;
  recentActivity: Activity[];
}

export interface Activity {
  id: string;
  type: string;
  description: string;
  timestamp: Date;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  // Replace with actual database queries
  return {
    totalProducts: 0,
    totalBlogPosts: 0,
    totalRegistrations: 0,
    pendingRegistrations: 0,
    recentActivity: [],
  };
}
