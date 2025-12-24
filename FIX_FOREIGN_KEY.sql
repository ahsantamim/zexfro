-- ============================================
-- FIX: Remove foreign key constraint on created_by
-- ============================================

-- Drop the foreign key constraint
ALTER TABLE categories 
DROP CONSTRAINT IF EXISTS categories_created_by_fkey;

-- Make sure the column is nullable
ALTER TABLE categories 
ALTER COLUMN created_by DROP NOT NULL;

-- ============================================
-- DONE! Now try creating a category
-- ============================================

