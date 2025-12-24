const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function checkCounts() {
  try {
    const products = await prisma.product.count();
    const blogs = await prisma.blogPost.count();
    const registrations = await prisma.registration.count();
    const users = await prisma.user.count();

    console.log("=== ACTUAL DATABASE COUNTS ===");
    console.log("Products:", products);
    console.log("Blogs:", blogs);
    console.log("Registrations:", registrations);
    console.log("Users:", users);

    // Try to find categories table
    try {
      const result = await prisma.$queryRaw`SELECT COUNT(*) FROM categories`;
      console.log("Categories (raw):", result);
    } catch (e) {
      console.log("Categories table check:", e.message);
    }
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkCounts();
