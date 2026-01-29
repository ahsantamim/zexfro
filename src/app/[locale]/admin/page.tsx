import { DashboardStats } from "@/components/admin/DashboardStats";
import { RecentActivity } from "@/components/admin/RecentActivity";
import { QuickActions } from "@/components/admin/QuickActions";
import { Analytics } from "@/components/admin/Analytics";
import { Separator } from "@/components/ui/separator";
import { getDashboardStats, getRecentActivity } from "@/lib/api/dashboard";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

// Force dynamic rendering for auth check, but data fetching is cached
export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  // Parallel data fetching with server-side caching
  const [stats, recentActivity] = await Promise.all([
    getDashboardStats(),
    getRecentActivity(),
  ]);

  // Convert Date objects to strings for client component
  const serializedActivity = recentActivity.map((activity) => ({
    ...activity,
    createdAt: activity.createdAt.toISOString(),
  }));

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0a4a9e] to-[#05306b] bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Welcome back! Here&apos;s your overview.
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Last updated</p>
          <p className="text-sm font-semibold text-gray-900">
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      <Separator />

      {/* Stats Cards */}
      <DashboardStats stats={stats} />

      <Separator />

      {/* Quick Actions */}
      <QuickActions />

      <Separator />

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Analytics />
        <RecentActivity activities={serializedActivity} />
      </div>
    </div>
  );
}
