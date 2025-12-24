-- Supabase RLS Policy Fix for Product Images Upload
-- This allows authenticated users to upload to product-images bucket

-- For product-images bucket
-- Allow authenticated users to upload (INSERT)
CREATE POLICY "Allow authenticated users to upload product images"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'product-images'
  AND auth.role() = 'authenticated'
);

-- Allow authenticated users to read (SELECT)
CREATE POLICY "Allow authenticated users to read product images"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'product-images'
  AND auth.role() = 'authenticated'
);

-- Allow authenticated users to update (UPDATE)
CREATE POLICY "Allow authenticated users to update product images"
ON storage.objects
FOR UPDATE
WITH CHECK (
  bucket_id = 'product-images'
  AND auth.role() = 'authenticated'
);

-- Allow authenticated users to delete (DELETE)
CREATE POLICY "Allow authenticated users to delete product images"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'product-images'
  AND auth.role() = 'authenticated'
);

-- For blog-images bucket
-- Allow authenticated users to upload (INSERT)
CREATE POLICY "Allow authenticated users to upload blog images"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'blog-images'
  AND auth.role() = 'authenticated'
);

-- Allow authenticated users to read (SELECT)
CREATE POLICY "Allow authenticated users to read blog images"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'blog-images'
  AND auth.role() = 'authenticated'
);

-- Allow authenticated users to update (UPDATE)
CREATE POLICY "Allow authenticated users to update blog images"
ON storage.objects
FOR UPDATE
WITH CHECK (
  bucket_id = 'blog-images'
  AND auth.role() = 'authenticated'
);

-- Allow authenticated users to delete (DELETE)
CREATE POLICY "Allow authenticated users to delete blog images"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'blog-images'
  AND auth.role() = 'authenticated'
);

-- Alternative: If you want to allow public read access (optional)
-- CREATE POLICY "Allow public to read product images"
-- ON storage.objects
-- FOR SELECT
-- USING (bucket_id = 'product-images');
