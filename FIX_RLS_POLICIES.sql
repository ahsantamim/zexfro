-- ============================================
-- FIX RLS POLICIES FOR CATEGORIES
-- ============================================
-- This allows inserts to categories table
-- Run this in Supabase SQL Editor
-- ============================================

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Admins can manage categories" ON categories;
DROP POLICY IF EXISTS "Public can view active categories" ON categories;

-- Create new permissive policies

-- Allow anyone to read active categories (for public access)
CREATE POLICY "Anyone can view active categories"
ON categories FOR SELECT
USING (status = true);

-- Allow all inserts (you can make this more restrictive later)
CREATE POLICY "Allow all inserts to categories"
ON categories FOR INSERT
WITH CHECK (true);

-- Allow all updates
CREATE POLICY "Allow all updates to categories"
ON categories FOR UPDATE
USING (true)
WITH CHECK (true);

-- Allow all deletes
CREATE POLICY "Allow all deletes from categories"
ON categories FOR DELETE
USING (true);

-- ============================================
-- Also fix Trade Types RLS if needed
-- ============================================

DROP POLICY IF EXISTS "Admins can manage trade types" ON trade_types;
DROP POLICY IF EXISTS "Public can view active trade types" ON trade_types;

CREATE POLICY "Anyone can view active trade types"
ON trade_types FOR SELECT
USING (status = true);

CREATE POLICY "Allow all inserts to trade_types"
ON trade_types FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow all updates to trade_types"
ON trade_types FOR UPDATE
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow all deletes from trade_types"
ON trade_types FOR DELETE
USING (true);

-- ============================================
-- Verify policies are active
-- ============================================

SELECT tablename, policyname, permissive, roles, cmd
FROM pg_policies
WHERE tablename IN ('categories', 'trade_types')
ORDER BY tablename, policyname;

-- ============================================
-- DONE! Now try creating a category again
-- ============================================

