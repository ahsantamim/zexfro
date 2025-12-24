-- ============================================
-- VERIFY PRODUCT COUNT
-- ============================================
-- Run this to check if your product was saved correctly
-- ============================================

-- 1. Check all categories and their product counts
SELECT 
  c.id,
  c.name,
  c.slug,
  COUNT(p.id) as product_count
FROM categories c
LEFT JOIN products p ON p.category_id = c.id
GROUP BY c.id, c.name, c.slug
ORDER BY c.name;

-- 2. Check your specific product
SELECT 
  id,
  name,
  category_id,
  slug,
  created_at
FROM products
WHERE name ILIKE '%agriculture%' OR name ILIKE '%equipment%'
ORDER BY created_at DESC
LIMIT 5;

-- 3. Check if Agriculture Equipment category exists
SELECT id, name, slug
FROM categories
WHERE name ILIKE '%agriculture%equipment%'
   OR slug ILIKE '%agriculture%equipment%';

-- ============================================
-- If you see your product but count is 0:
-- The category_id in the product might not match
-- the category id. Check the IDs above.
-- ============================================

