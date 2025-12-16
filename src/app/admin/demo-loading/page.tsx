"use client";

import { useState } from "react";
import { DashboardStats } from "@/components/admin/DashboardStats";
import { QuickActions } from "@/components/admin/QuickActions";
import { Analytics } from "@/components/admin/Analytics";
import { RecentActivity } from "@/components/admin/RecentActivity";
import { ProductsTable } from "@/components/admin/ProductsTable";
import { BlogPostsTable } from "@/components/admin/BlogPostsTable";
import { RegistrationsTable } from "@/components/admin/RegistrationsTable";
import { MailStats } from "@/components/admin/MailStats";
import { MailLogs } from "@/components/admin/MailLogs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RefreshCw } from "lucide-react";

export default function DemoLoadingPage() {
  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0a4a9e] to-[#05306b] bg-clip-text text-transparent">
            Loading States Demo
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Click the button to see skeleton loading states in action
          </p>
        </div>
        <Button
          onClick={simulateLoading}
          disabled={isLoading}
          className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] hover:from-[#0d5bbf] hover:to-[#0a4a9e] text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <RefreshCw className={`w-5 h-5 mr-2 ${isLoading ? "animate-spin" : ""}`} />
          {isLoading ? "Loading..." : "Simulate Loading"}
        </Button>
      </div>

      <Separator />

      {/* Stats Cards */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Stats Cards</h2>
        <DashboardStats loading={isLoading} />
      </div>

      <Separator />

      {/* Quick Actions */}
      <QuickActions loading={isLoading} />

      <Separator />

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics</h2>
          <Analytics loading={isLoading} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <RecentActivity loading={isLoading} />
        </div>
      </div>

      <Separator />

      {/* Products Table */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Products Table</h2>
        <ProductsTable loading={isLoading} />
      </div>

      <Separator />

      {/* Blog Posts Table */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog Posts Table</h2>
        <BlogPostsTable loading={isLoading} />
      </div>

      <Separator />

      {/* Registrations Table */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Registrations Table</h2>
        <RegistrationsTable loading={isLoading} />
      </div>

      <Separator />

      {/* Mail Stats */}
      <MailStats loading={isLoading} />

      <Separator />

      {/* Mail Logs */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mail Logs</h2>
        <MailLogs loading={isLoading} />
      </div>
    </div>
  );
}

