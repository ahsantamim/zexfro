import { NextResponse } from "next/server";
import { getDashboardStats, getRecentActivity } from "@/lib/api/dashboard";
import { auth } from "@/auth";

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [stats, recentActivity] = await Promise.all([
      getDashboardStats(),
      getRecentActivity(),
    ]);

    return NextResponse.json({
      stats,
      recentActivity,
    });
  } catch (error) {
    console.error("Dashboard API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}
