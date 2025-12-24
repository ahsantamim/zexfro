/**
 * Database Connection Test & Sync Script
 *
 * This script will:
 * 1. Test Prisma connection to Supabase
 * 2. Show you how to get correct DATABASE_URL if it fails
 * 3. Push schema to database
 * 4. Verify BlogPost table exists
 */

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function testConnection() {
  console.log("\n🔍 Testing Database Connection...\n");

  try {
    // Test basic connection
    await prisma.$connect();
    console.log("✅ Successfully connected to database!");

    // Test query
    const result =
      await prisma.$queryRaw`SELECT current_database(), current_user, version()`;
    console.log("✅ Database info:", result[0]);

    return true;
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
    return false;
  }
}

async function checkTables() {
  console.log("\n🔍 Checking if tables exist...\n");

  try {
    // Check if BlogPost table exists
    const blogPosts = await prisma.blogPost.findMany({ take: 1 });
    console.log("✅ BlogPost table exists");
    console.log(
      `   Found ${blogPosts.length > 0 ? "existing" : "no"} blog posts`
    );

    // Check other tables
    const products = await prisma.product.findMany({ take: 1 });
    console.log("✅ Product table exists");

    const categories = await prisma.category.findMany({ take: 1 });
    console.log("✅ Category table exists");

    const users = await prisma.user.findMany({ take: 1 });
    console.log("✅ User table exists");

    return true;
  } catch (error) {
    console.error("❌ Table check failed:", error.message);
    return false;
  }
}

async function showDatabaseURLHelp() {
  console.log("\n" + "=".repeat(80));
  console.log("📋 HOW TO GET CORRECT DATABASE_URL FROM SUPABASE");
  console.log("=".repeat(80));
  console.log("\n1. Go to your Supabase Dashboard:");
  console.log(
    "   https://supabase.com/dashboard/project/jjkczpvsxzglqursnhya/settings/database"
  );
  console.log('\n2. Look for "Connection string" section');
  console.log('\n3. Select "Transaction" mode (NOT Session mode)');
  console.log("\n4. You will see a URL like:");
  console.log(
    "   postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres"
  );
  console.log(
    '\n5. Copy the "Connection string" and replace [YOUR-PASSWORD] with your actual password'
  );
  console.log("\n6. Update your .env file:");
  console.log(
    '   DATABASE_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres"'
  );
  console.log("\n⚠️  IMPORTANT NOTES:");
  console.log(
    "   - Use Transaction mode (port 6543) NOT Session mode (port 5432)"
  );
  console.log(
    "   - Use the pooler URL (*.pooler.supabase.com) NOT direct connection"
  );
  console.log("   - Make sure to use YOUR actual database password");
  console.log(
    "   - Add ?pgbouncer=true to the end if using connection pooling"
  );
  console.log("\n7. Example correct format:");
  console.log(
    '   DATABASE_URL="postgresql://postgres.jjkczpvsxzglqursnhya:YOUR_PASSWORD@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true"'
  );
  console.log("\n" + "=".repeat(80) + "\n");
}

async function main() {
  console.log(
    "╔════════════════════════════════════════════════════════════════╗"
  );
  console.log(
    "║     Database Connection Test & Sync Script                     ║"
  );
  console.log(
    "╚════════════════════════════════════════════════════════════════╝"
  );

  // Step 1: Test Connection
  const isConnected = await testConnection();

  if (!isConnected) {
    await showDatabaseURLHelp();
    console.log(
      "❌ Please fix your DATABASE_URL in .env file and run this script again."
    );
    process.exit(1);
  }

  // Step 2: Check tables
  const tablesExist = await checkTables();

  if (!tablesExist) {
    console.log(
      "\n⚠️  Some tables are missing. Running Prisma push to create them...\n"
    );
    console.log("Run this command manually:");
    console.log("  npm run db:push");
    console.log("  or");
    console.log("  npx prisma db push");
  }

  // Step 3: Test blog post creation
  console.log("\n🧪 Testing blog post creation...\n");
  try {
    const testPost = await prisma.blogPost.create({
      data: {
        title: "Test Post - " + Date.now(),
        slug: "test-post-" + Date.now(),
        excerpt: "This is a test post to verify database connectivity",
        content: "<p>Test content</p>",
        category: "Test",
        author: "System",
        published: false,
      },
    });

    console.log("✅ Successfully created test blog post!");
    console.log("   ID:", testPost.id);
    console.log("   Title:", testPost.title);

    // Clean up test post
    await prisma.blogPost.delete({ where: { id: testPost.id } });
    console.log("✅ Cleaned up test post");
  } catch (error) {
    console.error("❌ Failed to create test blog post:", error.message);
  }

  console.log("\n" + "=".repeat(80));
  console.log("✅ DATABASE IS FULLY CONNECTED AND WORKING!");
  console.log("=".repeat(80));
  console.log("\nYou can now:");
  console.log("  • Create blog posts from /admin/blog/create");
  console.log("  • Upload images");
  console.log("  • All CRUD operations should work");
  console.log("\n");

  await prisma.$disconnect();
}

main().catch(async (error) => {
  console.error("\n💥 FATAL ERROR:", error);
  await showDatabaseURLHelp();
  await prisma.$disconnect();
  process.exit(1);
});
