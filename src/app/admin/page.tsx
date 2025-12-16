"use client";

import { DashboardStats } from "@/components/admin/DashboardStats";
import { RecentActivity } from "@/components/admin/RecentActivity";
import { QuickActions } from "@/components/admin/QuickActions";
import { Analytics } from "@/components/admin/Analytics";
import { Separator } from "@/components/ui/separator";
import { LoadingWrapper } from "@/components/admin/LoadingWrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function AdminDashboard() {
  return (
    <LoadingWrapper delay={1200}>
      {(loading) => (
        <div className="space-y-8">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              {loading ? (
                <>
                  <Skeleton className="h-10 w-48 mb-2" />
                  <Skeleton className="h-5 w-72" />
                </>
              ) : (
                <>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0a4a9e] to-[#05306b] bg-clip-text text-transparent">
                    Dashboard
                  </h1>
                  <p className="text-gray-600 mt-2 text-lg">
                    Welcome back! Here&apos;s your overview.
                  </p>
                </>
              )}
            </div>
            <div className="text-right">
              {loading ? (
                <>
                  <Skeleton className="h-4 w-24 mb-1 ml-auto" />
                  <Skeleton className="h-4 w-32 ml-auto" />
                </>
              ) : (
                <>
                  <p className="text-sm text-gray-500">Last updated</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {new Date().toLocaleDateString("en-US", { 
                      month: "short", 
                      day: "numeric", 
                      year: "numeric" 
                    })}
                  </p>
                </>
              )}
            </div>
          </div>

          <Separator />

          {/* Stats Cards */}
          <DashboardStats loading={loading} />

          <Separator />

          {/* Quick Actions */}
          <QuickActions loading={loading} />

          <Separator />

          {/* Analytics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Analytics loading={loading} />
            <RecentActivity loading={loading} />
          </div>
        </div>
      )}
    </LoadingWrapper>
  );
}
