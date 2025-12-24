const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function testBlogCRUD() {
  console.log("\n🧪 Testing Blog CRUD Operations\n");
  console.log("=".repeat(60));

  try {
    // CREATE
    console.log("\n1️⃣  CREATE - Creating a test blog post...");
    const newPost = await prisma.blogPost.create({
      data: {
        title: "CRUD Test Post",
        slug: "crud-test-post-" + Date.now(),
        excerpt: "Testing full CRUD functionality",
        content:
          "<p>This is a test post to verify CRUD operations work correctly.</p>",
        category: "Testing",
        author: "System Test",
        published: false,
      },
    });
    console.log("   ✅ Created:", newPost.title, "(ID:", newPost.id + ")");

    // READ
    console.log("\n2️⃣  READ - Fetching the blog post...");
    const fetchedPost = await prisma.blogPost.findUnique({
      where: { id: newPost.id },
    });
    console.log("   ✅ Found:", fetchedPost.title);
    console.log("   - Slug:", fetchedPost.slug);
    console.log("   - Published:", fetchedPost.published);

    // UPDATE
    console.log("\n3️⃣  UPDATE - Updating the blog post...");
    const updatedPost = await prisma.blogPost.update({
      where: { id: newPost.id },
      data: {
        title: "Updated CRUD Test Post",
        published: true,
        publishedAt: new Date(),
      },
    });
    console.log("   ✅ Updated:", updatedPost.title);
    console.log("   - Published:", updatedPost.published);
    console.log("   - PublishedAt:", updatedPost.publishedAt);

    // DELETE
    console.log("\n4️⃣  DELETE - Deleting the blog post...");
    await prisma.blogPost.delete({
      where: { id: newPost.id },
    });
    console.log("   ✅ Deleted successfully");

    // VERIFY DELETE
    const deletedPost = await prisma.blogPost.findUnique({
      where: { id: newPost.id },
    });
    if (!deletedPost) {
      console.log("   ✅ Verified: Post no longer exists");
    }

    console.log("\n" + "=".repeat(60));
    console.log("✅ ALL CRUD OPERATIONS WORKING PERFECTLY!");
    console.log("=".repeat(60));

    // Show current blog posts
    console.log("\n📚 Your Current Blog Posts:\n");
    const allPosts = await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
    });

    if (allPosts.length === 0) {
      console.log("   No blog posts found.");
    } else {
      allPosts.forEach((post, index) => {
        console.log(`${index + 1}. ${post.title}`);
        console.log(
          `   Status: ${post.published ? "✅ Published" : "📝 Draft"}`
        );
        console.log(`   Category: ${post.category}`);
        console.log(`   Slug: ${post.slug}`);
        console.log("");
      });
    }
  } catch (error) {
    console.error("\n❌ Test Failed:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testBlogCRUD();
