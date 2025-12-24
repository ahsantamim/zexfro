-- Drop existing policies and recreate with correct settings
-- Run this to fix the RLS issue

-- Drop existing policies
DROP POLICY IF EXISTS "Allow authenticated users to upload product images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to read product images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to update product images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to delete product images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to upload blog images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to read blog images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to update blog images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to delete blog images" ON storage.objects;

-- Product Images Bucket - Allow all authenticated operations
CREATE POLICY "product-images-insert"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'product-images'
);

CREATE POLICY "product-images-select"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'product-images'
);

CREATE POLICY "product-images-update"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'product-images'
)
WITH CHECK (
  bucket_id = 'product-images'
);

CREATE POLICY "product-images-delete"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'product-images'
);

-- Blog Images Bucket - Allow all authenticated operations
CREATE POLICY "blog-images-insert"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'blog-images'
);

CREATE POLICY "blog-images-select"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'blog-images'
);

CREATE POLICY "blog-images-update"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'blog-images'
)
WITH CHECK (
  bucket_id = 'blog-images'
);

CREATE POLICY "blog-images-delete"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'blog-images'
);

-- Verify policies created
SELECT policyname, roles, qual FROM pg_policies 
WHERE tablename = 'objects' AND policyname LIKE '%images%'
ORDER BY policyname;
