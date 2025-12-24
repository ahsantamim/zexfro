-- ============================================
-- REQUIRED: Run this in Supabase SQL Editor
-- ============================================

-- Step 1: Add type column to categories (references trade_types)
ALTER TABLE categories 
ADD COLUMN IF NOT EXISTS type UUID REFERENCES trade_types(id) ON DELETE SET NULL;

-- Step 2: Make created_by nullable
ALTER TABLE categories 
ALTER COLUMN created_by DROP NOT NULL;

-- Step 3: Add type column to products
ALTER TABLE products
ADD COLUMN IF NOT EXISTS type TEXT;

-- Step 4: Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_categories_type ON categories(type);
CREATE INDEX IF NOT EXISTS idx_products_type ON products(type);

-- Step 5: Verify the columns were added
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'categories' 
AND column_name IN ('type', 'created_by');

-- You should see:
-- type       | uuid    | YES
-- created_by | uuid    | YES

-- ============================================
-- DONE! Now restart your Next.js server
-- ============================================

