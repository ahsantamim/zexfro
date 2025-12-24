const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function checkProducts() {
  try {
    console.log("=== CHECKING PRODUCTS ===\n");

    const productCount = await prisma.product.count();
    console.log("Product count from Prisma:", productCount);

    const allProducts = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        category: true,
        createdAt: true,
      },
      take: 10,
    });

    console.log("\nProducts found:", allProducts.length);
    if (allProducts.length > 0) {
      console.log("\nProduct details:");
      allProducts.forEach((p, i) => {
        console.log(`${i + 1}. ${p.name} (${p.category}) - ${p.createdAt}`);
      });
    } else {
      console.log("No products in database.");
    }

    // Check if there's a different products table
    try {
      const rawResult = await prisma.$queryRaw`SELECT COUNT(*) FROM products`;
      console.log("\nRaw query count:", rawResult);
    } catch (e) {
      console.log("\nRaw query error:", e.message);
    }

    // Check Product model vs products table
    const tableInfo = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name LIKE '%product%'
    `;
    console.log('\nTables with "product" in name:', tableInfo);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkProducts();
