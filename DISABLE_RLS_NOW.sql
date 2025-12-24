-- ============================================
-- QUICK FIX: Disable RLS on Categories
-- ============================================
-- Copy and paste this into Supabase SQL Editor
-- Click RUN
-- ============================================

-- Disable RLS on categories
ALTER TABLE categories DISABLE ROW LEVEL SECURITY;

-- Disable RLS on trade_types  
ALTER TABLE trade_types DISABLE ROW LEVEL SECURITY;

-- Disable RLS on products (if needed later)
ALTER TABLE products DISABLE ROW LEVEL SECURITY;

-- ============================================
-- DONE! Now try creating a category
-- ============================================

-- To verify RLS is disabled, run:
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('categories', 'trade_types', 'products');

-- You should see rowsecurity = false for all tables

