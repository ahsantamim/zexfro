import { DashboardStats } from "@/components/admin/DashboardStats";
import { RecentActivity } from "@/components/admin/RecentActivity";
import { QuickActions } from "@/components/admin/QuickActions";
import { Analytics } from "@/components/admin/Analytics";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's what's happening.
        </p>
      </div>

      <DashboardStats />
      <QuickActions />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Analytics />
        <RecentActivity />
      </div>
    </div>
  );
}
