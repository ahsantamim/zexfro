-- RLS Policies for server-side uploads (using anon key)
-- Drop all existing policies
DROP POLICY IF EXISTS "product-images-insert" ON storage.objects;
DROP POLICY IF EXISTS "product-images-select" ON storage.objects;
DROP POLICY IF EXISTS "product-images-update" ON storage.objects;
DROP POLICY IF EXISTS "product-images-delete" ON storage.objects;
DROP POLICY IF EXISTS "blog-images-insert" ON storage.objects;
DROP POLICY IF EXISTS "blog-images-select" ON storage.objects;
DROP POLICY IF EXISTS "blog-images-update" ON storage.objects;
DROP POLICY IF EXISTS "blog-images-delete" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to upload product images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to read product images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to update product images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to delete product images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to upload blog images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to read blog images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to update blog images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to delete blog images" ON storage.objects;

-- Product Images - Allow public uploads and reads
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

-- Blog Images - Allow public uploads and reads
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

-- Verify
SELECT policyname FROM pg_policies WHERE tablename = 'objects' ORDER BY policyname;
