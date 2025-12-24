-- Create Category Images Table
-- This table stores cover images for categories
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS category_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    alt_text TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_category_images_category_id ON category_images(category_id);

-- Enable RLS (Row Level Security)
ALTER TABLE category_images ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for category_images
-- Allow public to read
CREATE POLICY "Allow public read access for category images"
    ON category_images FOR SELECT
    TO public
    USING (true);

-- Allow authenticated users to insert
CREATE POLICY "Allow authenticated users to insert category images"
    ON category_images FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Allow authenticated users to update
CREATE POLICY "Allow authenticated users to update category images"
    ON category_images FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Allow authenticated users to delete
CREATE POLICY "Allow authenticated users to delete category images"
    ON category_images FOR DELETE
    TO authenticated
    USING (true);

-- Verify the table was created
SELECT 
    column_name, 
    data_type, 
    is_nullable
FROM information_schema.columns
WHERE table_name = 'category_images'
ORDER BY ordinal_position;
