-- ============================================
-- FIX PRODUCTS TABLE
-- ============================================

-- Disable RLS on products
ALTER TABLE products DISABLE ROW LEVEL SECURITY;

-- Remove foreign key constraint on created_by
ALTER TABLE products 
DROP CONSTRAINT IF EXISTS products_created_by_fkey;

-- Make created_by nullable
ALTER TABLE products 
ALTER COLUMN created_by DROP NOT NULL;

-- Make category_id nullable (optional - if you want products without categories)
-- ALTER TABLE products 
-- ALTER COLUMN category_id DROP NOT NULL;

-- ============================================
-- DONE! Products should work now
-- ============================================

