const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function checkBlogPosts() {
  try {
    const posts = await prisma.blogPost.findMany();

    console.log("\n📊 Blog Posts in Database:\n");
    console.log("Total posts:", posts.length);
    console.log("");

    if (posts.length === 0) {
      console.log("❌ No blog posts found in database!");
    } else {
      posts.forEach((post, index) => {
        console.log(`${index + 1}. ${post.title}`);
        console.log(
          `   Published: ${post.published ? "✅ YES" : "❌ NO (Draft)"}`
        );
        console.log(`   Slug: ${post.slug}`);
        console.log(`   Category: ${post.category}`);
        console.log(`   Created: ${post.createdAt}`);
        console.log("");
      });

      const publishedCount = posts.filter((p) => p.published).length;
      console.log(
        `\n📌 Published: ${publishedCount} | Drafts: ${
          posts.length - publishedCount
        }`
      );
    }
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkBlogPosts();
