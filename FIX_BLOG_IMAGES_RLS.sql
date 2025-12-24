-- ============================================
-- FIX BLOG IMAGES UPLOAD - RLS POLICIES
-- ============================================
-- Run this in Supabase SQL Editor to fix the RLS policy error
-- Error: "new row violates row-level security policy"

-- STEP 1: Ensure bucket exists
-- -----------------------------
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Also ensure other buckets exist and are public
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

INSERT INTO storage.buckets (id, name, public)
VALUES ('category-images', 'category-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- STEP 2: Drop existing policies
-- -------------------------------
DROP POLICY IF EXISTS "blog-images-insert" ON storage.objects;
DROP POLICY IF EXISTS "blog-images-select" ON storage.objects;
DROP POLICY IF EXISTS "blog-images-update" ON storage.objects;
DROP POLICY IF EXISTS "blog-images-delete" ON storage.objects;

DROP POLICY IF EXISTS "product-images-insert" ON storage.objects;
DROP POLICY IF EXISTS "product-images-select" ON storage.objects;
DROP POLICY IF EXISTS "product-images-update" ON storage.objects;
DROP POLICY IF EXISTS "product-images-delete" ON storage.objects;

DROP POLICY IF EXISTS "category-images-insert" ON storage.objects;
DROP POLICY IF EXISTS "category-images-select" ON storage.objects;
DROP POLICY IF EXISTS "category-images-update" ON storage.objects;
DROP POLICY IF EXISTS "category-images-delete" ON storage.objects;

-- STEP 3: Create permissive policies for ALL buckets
-- ---------------------------------------------------
-- These policies allow ANY authenticated or anonymous user to upload/read
-- Perfect for server-side uploads using anon key

-- Blog Images Policies
CREATE POLICY "blog-images-insert"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "blog-images-select"
ON storage.objects
FOR SELECT
USING (bucket_id = 'blog-images');

CREATE POLICY "blog-images-update"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'blog-images')
WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "blog-images-delete"
ON storage.objects
FOR DELETE
USING (bucket_id = 'blog-images');

-- Product Images Policies
CREATE POLICY "product-images-insert"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'product-images');

CREATE POLICY "product-images-select"
ON storage.objects
FOR SELECT
USING (bucket_id = 'product-images');

CREATE POLICY "product-images-update"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'product-images')
WITH CHECK (bucket_id = 'product-images');

CREATE POLICY "product-images-delete"
ON storage.objects
FOR DELETE
USING (bucket_id = 'product-images');

-- Category Images Policies
CREATE POLICY "category-images-insert"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'category-images');

CREATE POLICY "category-images-select"
ON storage.objects
FOR SELECT
USING (bucket_id = 'category-images');

CREATE POLICY "category-images-update"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'category-images')
WITH CHECK (bucket_id = 'category-images');

CREATE POLICY "category-images-delete"
ON storage.objects
FOR DELETE
USING (bucket_id = 'category-images');

-- STEP 4: Verify Setup
-- ---------------------
-- Check buckets
SELECT 
  id,
  name,
  public as is_public,
  created_at
FROM storage.buckets
WHERE name IN ('blog-images', 'product-images', 'category-images')
ORDER BY name;

-- Check policies
SELECT 
  policyname,
  roles,
  cmd as operation,
  qual as using_expression,
  with_check as with_check_expression
FROM pg_policies 
WHERE schemaname = 'storage' 
  AND tablename = 'objects'
  AND policyname LIKE '%-images-%'
ORDER BY policyname;

-- Expected output:
-- You should see policies for INSERT, SELECT, UPDATE, DELETE for each bucket
-- All should have roles = {public} (allows both authenticated and anonymous)

-- ============================================
-- TROUBLESHOOTING
-- ============================================

-- If you still get 403 errors after running this:

-- 1. Verify your .env.local has the correct keys:
--    NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
--    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
--    SUPABASE_SERVICE_ROLE_KEY=your_service_role_key (optional)

-- 2. Check bucket exists and is public:
SELECT * FROM storage.buckets WHERE name = 'blog-images';
-- Should show: public = true

-- 3. Try disabling RLS temporarily for testing:
-- ALTER TABLE storage.objects DISABLE ROW LEVEL SECURITY;
-- WARNING: Only for testing! Re-enable after: 
-- ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- 4. Clear browser cache and restart dev server
