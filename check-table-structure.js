const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function checkTableStructure() {
  try {
    const columns = await prisma.$queryRaw`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'products' 
      ORDER BY ordinal_position
    `;

    console.log("Products table columns:");
    console.log(JSON.stringify(columns, null, 2));

    const products = await prisma.$queryRaw`SELECT * FROM products LIMIT 3`;
    console.log("\nActual products in database:");
    console.log(JSON.stringify(products, null, 2));
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

checkTableStructure();
