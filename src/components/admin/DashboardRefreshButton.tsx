"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

/**
 * Dashboard Refresh Button
 *
 * Add this component to your AdminHeader or Dashboard page
 * to allow manual cache refresh
 *
 * Usage:
 * import { DashboardRefreshButton } from "@/components/admin/DashboardRefreshButton";
 *
 * <DashboardRefreshButton />
 */

export function DashboardRefreshButton() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleRefresh = async () => {
    setIsRefreshing(true);
    setMessage("");

    try {
      // Call the refresh API
      const response = await fetch("/api/admin/dashboard/refresh", {
        method: "POST",
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✓ Dashboard refreshed!");

        // Refresh the page to show new data
        router.refresh();

        // Clear success message after 3 seconds
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("✗ " + (data.error || "Failed to refresh"));
      }
    } catch (error) {
      setMessage("✗ Network error");
      console.error("Refresh error:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={handleRefresh}
        disabled={isRefreshing}
        className="gap-2"
      >
        <RefreshCw
          className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`}
        />
        {isRefreshing ? "Refreshing..." : "Refresh Data"}
      </Button>

      {message && (
        <span
          className={`text-sm ${
            message.startsWith("✓") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </span>
      )}
    </div>
  );
}
