-- STORAGE BUCKET CONFIGURATION GUIDE
-- ====================================
-- Storage RLS policies must be configured through the Supabase Dashboard, not SQL.
-- Follow these steps:

-- STEP 1: Configure Storage Buckets in Supabase Dashboard
-- --------------------------------------------------------
-- 1. Go to: https://supabase.com/dashboard/project/YOUR_PROJECT/storage/buckets
-- 2. For each bucket (product-images, blog-images):
--    a. Click on the bucket name
--    b. Click "Configuration" tab
--    c. Enable "Public bucket" toggle (allows public READ access)
--    d. Click "Policies" tab
--    e. Click "New Policy"
--    f. For INSERT: Select "Custom" and use:
--       Policy name: Allow authenticated uploads
--       Target roles: authenticated
--       WITH CHECK: true (or leave as default)
--    g. For SELECT: Select "Custom" and use:
--       Policy name: Public read access
--       Target roles: public
--       USING: true (or leave as default)

-- STEP 2: Get Service Role Key (Required for server-side uploads)
-- ----------------------------------------------------------------
-- 1. Go to: https://supabase.com/dashboard/project/YOUR_PROJECT/settings/api
-- 2. Copy the "service_role" key (keep it secret!)
-- 3. Add to your .env.local file:
--    SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

-- STEP 3: Verify Buckets Exist
-- -----------------------------
-- Run this query in Supabase SQL Editor to check:
SELECT 
  id,
  name,
  public,
  created_at
FROM storage.buckets
WHERE name IN ('product-images', 'blog-images');

-- If buckets don't exist, create them through the Dashboard:
-- Storage → New bucket → Name: product-images → Public: Yes → Create
-- Storage → New bucket → Name: blog-images → Public: Yes → Create

-- STEP 4: Verify Policies (Optional)
-- -----------------------------------
-- Check existing policies:
SELECT 
  policyname,
  roles,
  cmd
FROM pg_policies 
WHERE schemaname = 'storage' AND tablename = 'objects'
ORDER BY policyname;
