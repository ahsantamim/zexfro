-- Fix RLS policy for product_images table
-- This allows inserting/updating product images

-- Drop existing policies if any
DROP POLICY IF EXISTS "product_images_insert_policy" ON product_images;
DROP POLICY IF EXISTS "product_images_select_policy" ON product_images;
DROP POLICY IF EXISTS "product_images_update_policy" ON product_images;
DROP POLICY IF EXISTS "product_images_delete_policy" ON product_images;

-- Create new permissive policies
CREATE POLICY "product_images_select_policy" ON product_images
  FOR SELECT
  USING (true);

CREATE POLICY "product_images_insert_policy" ON product_images
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "product_images_update_policy" ON product_images
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "product_images_delete_policy" ON product_images
  FOR DELETE
  USING (true);
