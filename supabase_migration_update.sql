-- ============================================
-- ADD TYPE COLUMN TO CATEGORIES AND PRODUCTS
-- ============================================
-- Run this AFTER the main migration
-- ============================================

-- Add type column to categories (references trade_types)
ALTER TABLE categories 
ADD COLUMN IF NOT EXISTS type UUID REFERENCES trade_types(id) ON DELETE SET NULL;

-- Make created_by nullable (optional)
ALTER TABLE categories 
ALTER COLUMN created_by DROP NOT NULL;

-- Add type column to products  
ALTER TABLE products
ADD COLUMN IF NOT EXISTS type TEXT;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_categories_type ON categories(type);
CREATE INDEX IF NOT EXISTS idx_products_type ON products(type);

-- Add comments
COMMENT ON COLUMN categories.type IS 'Category trade type (references trade_types.id)';
COMMENT ON COLUMN products.type IS 'Product type: standard, premium, wholesale, etc.';

-- ============================================
-- VERIFICATION
-- ============================================
-- Check if columns were added successfully
-- SELECT column_name, data_type FROM information_schema.columns 
-- WHERE table_name = 'categories' AND column_name = 'type';

-- SELECT column_name, data_type FROM information_schema.columns 
-- WHERE table_name = 'products' AND column_name = 'type';

