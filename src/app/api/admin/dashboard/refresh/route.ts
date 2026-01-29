/**
 * Manual Dashboard Refresh Endpoint
 *
 * Create this endpoint to allow manual cache refresh from the dashboard UI
 * Useful for testing and giving admins control over data freshness
 */

import { NextResponse } from "next/server";
import { revalidateDashboard } from "@/lib/cache/revalidate";
import { auth } from "@/auth";

export async function POST() {
  try {
    // Check authentication
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Revalidate all dashboard caches
    await revalidateDashboard();

    return NextResponse.json({
      success: true,
      message: "Dashboard cache refreshed successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Dashboard refresh error:", error);
    return NextResponse.json(
      {
        error: "Failed to refresh dashboard cache",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

// You can also add a GET endpoint to check cache status
export async function GET() {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({
      cacheConfig: {
        statsRevalidation: "300 seconds (5 minutes)",
        activityRevalidation: "180 seconds (3 minutes)",
        tags: ["dashboard", "stats", "activity"],
      },
      status: "active",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get cache status" },
      { status: 500 },
    );
  }
}
