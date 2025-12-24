const {
  getDashboardStats,
  getRecentActivity,
} = require("./src/lib/api/dashboard.ts");

async function testDashboard() {
  console.log("=== Testing Dashboard Functions ===\n");

  console.log("Fetching stats...");
  const stats = await getDashboardStats();
  console.log("Stats:", JSON.stringify(stats, null, 2));

  console.log("\nFetching recent activity...");
  const activity = await getRecentActivity();
  console.log("Activity count:", activity.length);
  activity.forEach((item) => {
    console.log(`- ${item.type}: ${item.title} - ${item.description}`);
  });
}

testDashboard();
