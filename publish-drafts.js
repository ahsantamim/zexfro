const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function publishAllDrafts() {
  try {
    const result = await prisma.blogPost.updateMany({
      where: { published: false },
      data: {
        published: true,
        publishedAt: new Date(),
      },
    });

    console.log(`✅ Published ${result.count} blog post(s)!`);
    console.log("\nNow refresh your /blog page - posts will appear!");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

publishAllDrafts();
