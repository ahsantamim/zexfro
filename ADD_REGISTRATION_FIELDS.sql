-- Add missing fields to Registration table for RegisterModal
ALTER TABLE "Registration" 
ADD COLUMN IF NOT EXISTS "country" TEXT,
ADD COLUMN IF NOT EXISTS "designation" TEXT,
ADD COLUMN IF NOT EXISTS "clientType" TEXT,
ADD COLUMN IF NOT EXISTS "documentUrl" TEXT,
ADD COLUMN IF NOT EXISTS "telephone" TEXT;

-- Add index for faster queries
CREATE INDEX IF NOT EXISTS "Registration_country_idx" ON "Registration"("country");
CREATE INDEX IF NOT EXISTS "Registration_clientType_idx" ON "Registration"("clientType");
