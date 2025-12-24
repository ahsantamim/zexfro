const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function migrate() {
  try {
    // Add columns one by one
    await prisma.$executeRaw`ALTER TABLE "Registration" ADD COLUMN IF NOT EXISTS "country" TEXT`;
    await prisma.$executeRaw`ALTER TABLE "Registration" ADD COLUMN IF NOT EXISTS "designation" TEXT`;
    await prisma.$executeRaw`ALTER TABLE "Registration" ADD COLUMN IF NOT EXISTS "clientType" TEXT`;
    await prisma.$executeRaw`ALTER TABLE "Registration" ADD COLUMN IF NOT EXISTS "documentUrl" TEXT`;
    await prisma.$executeRaw`ALTER TABLE "Registration" ADD COLUMN IF NOT EXISTS "telephone" TEXT`;

    // Add indexes
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "Registration_country_idx" ON "Registration"("country")`;
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "Registration_clientType_idx" ON "Registration"("clientType")`;

    console.log("✅ Migration completed successfully");
  } catch (error) {
    console.error("❌ Migration error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

migrate();
