const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function checkTable() {
  try {
    const columns = await prisma.$queryRaw`
      SELECT column_name, data_type, character_maximum_length, is_nullable
      FROM information_schema.columns 
      WHERE table_name = 'Registration' 
      ORDER BY ordinal_position
    `;
    console.log("Registration table columns:");
    console.log(JSON.stringify(columns, null, 2));
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

checkTable();
