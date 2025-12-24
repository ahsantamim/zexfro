-- ============================================
-- Zexfro Database Migration for Supabase
-- ============================================
-- Run this in Supabase SQL Editor
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 1. USER PROFILES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS user_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT NOT NULL,
    role TEXT CHECK (role IN ('admin', 'editor')) DEFAULT 'editor',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON user_profiles(email);

-- ============================================
-- 2. TRADE TYPES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS trade_types (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    status BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on slug
CREATE INDEX IF NOT EXISTS idx_trade_types_slug ON trade_types(slug);

-- ============================================
-- 3. CATEGORIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    parent_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    status BOOLEAN DEFAULT TRUE,
    created_by UUID REFERENCES user_profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_parent_id ON categories(parent_id);
CREATE INDEX IF NOT EXISTS idx_categories_status ON categories(status);

-- ============================================
-- 4. PRODUCTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    short_description TEXT NOT NULL,
    long_description TEXT NOT NULL,
    hs_code TEXT,
    brand TEXT,
    origin_country TEXT,
    status BOOLEAN DEFAULT TRUE,
    created_by UUID REFERENCES user_profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_status ON products(status);
CREATE INDEX IF NOT EXISTS idx_products_created_at ON products(created_at DESC);

-- ============================================
-- 5. PRODUCT TRADE TYPES (Junction Table)
-- ============================================
CREATE TABLE IF NOT EXISTS product_trade_types (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    trade_type_id UUID REFERENCES trade_types(id) ON DELETE CASCADE,
    UNIQUE(product_id, trade_type_id)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_product_trade_types_product_id ON product_trade_types(product_id);
CREATE INDEX IF NOT EXISTS idx_product_trade_types_trade_type_id ON product_trade_types(trade_type_id);

-- ============================================
-- 6. PRODUCT IMAGES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS product_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    alt_text TEXT NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_product_images_product_id ON product_images(product_id);
CREATE INDEX IF NOT EXISTS idx_product_images_is_primary ON product_images(is_primary);

-- ============================================
-- 7. PRODUCT SPECIFICATIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS product_specifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    spec_key TEXT NOT NULL,
    spec_value TEXT NOT NULL,
    unit TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_product_specifications_product_id ON product_specifications(product_id);

-- ============================================
-- 8. BLOG CATEGORIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS blog_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    status BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON blog_categories(slug);

-- ============================================
-- 9. BLOGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS blogs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    blog_category_id UUID REFERENCES blog_categories(id) ON DELETE SET NULL,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    featured_image TEXT,
    author_id UUID REFERENCES user_profiles(id) ON DELETE SET NULL,
    status TEXT CHECK (status IN ('draft', 'published')) DEFAULT 'draft',
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_status ON blogs(status);
CREATE INDEX IF NOT EXISTS idx_blogs_published_at ON blogs(published_at DESC);

-- ============================================
-- 10. BLOG PRODUCTS (Junction Table)
-- ============================================
CREATE TABLE IF NOT EXISTS blog_products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    blog_id UUID REFERENCES blogs(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    UNIQUE(blog_id, product_id)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_blog_products_blog_id ON blog_products(blog_id);
CREATE INDEX IF NOT EXISTS idx_blog_products_product_id ON blog_products(product_id);

-- ============================================
-- 11. CLIENT INQUIRIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS client_inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    country TEXT NOT NULL,
    company_name TEXT NOT NULL,
    designation TEXT NOT NULL,
    product_type TEXT NOT NULL,
    phone_code TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    telephone_number TEXT,
    email TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_client_inquiries_email ON client_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_client_inquiries_created_at ON client_inquiries(created_at DESC);

-- ============================================
-- TRIGGERS FOR UPDATED_AT
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply triggers
DROP TRIGGER IF EXISTS update_user_profiles_updated_at ON user_profiles;
CREATE TRIGGER update_user_profiles_updated_at
    BEFORE UPDATE ON user_profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_categories_updated_at ON categories;
CREATE TRIGGER update_categories_updated_at
    BEFORE UPDATE ON categories
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_products_updated_at ON products;
CREATE TRIGGER update_products_updated_at
    BEFORE UPDATE ON products
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_blogs_updated_at ON blogs;
CREATE TRIGGER update_blogs_updated_at
    BEFORE UPDATE ON blogs
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- SEED DATA
-- ============================================

-- Insert Admin User (username: admin, password: zexfro12341234)
-- Password hash generated with bcrypt
INSERT INTO user_profiles (email, password_hash, full_name, role)
VALUES (
    'admin@zexfro.com',
    '$2a$10$thSXbOruLTXbeL/Mz65IzOrrKLBf.yq4OJPNEPCQskWgFJgdFYTqm',
    'Admin User',
    'admin'
) ON CONFLICT (email) DO NOTHING;

-- Insert Trade Types
INSERT INTO trade_types (slug, name, status) VALUES
    ('import', 'Import', true),
    ('export', 'Export', true)
ON CONFLICT (slug) DO NOTHING;

-- Insert Sample Blog Category
INSERT INTO blog_categories (slug, name, description, status) VALUES
    ('industry-news', 'Industry News', 'Latest news from the industry', true),
    ('product-updates', 'Product Updates', 'Updates about our products', true)
ON CONFLICT (slug) DO NOTHING;

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE trade_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_trade_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_specifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_inquiries ENABLE ROW LEVEL SECURITY;

-- Public read access to active content
CREATE POLICY "Public can view active trade types"
    ON trade_types FOR SELECT
    USING (status = true);

CREATE POLICY "Public can view active categories"
    ON categories FOR SELECT
    USING (status = true);

CREATE POLICY "Public can view active products"
    ON products FOR SELECT
    USING (status = true);

CREATE POLICY "Public can view product trade types"
    ON product_trade_types FOR SELECT
    USING (true);

CREATE POLICY "Public can view product images"
    ON product_images FOR SELECT
    USING (true);

CREATE POLICY "Public can view product specifications"
    ON product_specifications FOR SELECT
    USING (true);

CREATE POLICY "Public can view active blog categories"
    ON blog_categories FOR SELECT
    USING (status = true);

CREATE POLICY "Public can view published blogs"
    ON blogs FOR SELECT
    USING (status = 'published');

CREATE POLICY "Public can view blog products"
    ON blog_products FOR SELECT
    USING (true);

CREATE POLICY "Public can insert inquiries"
    ON client_inquiries FOR INSERT
    WITH CHECK (true);

-- Admin access (when using service role key)
-- These policies allow authenticated users with proper roles to manage data
-- You'll need to implement authentication tokens to enforce these

CREATE POLICY "Admins can manage all data"
    ON user_profiles FOR ALL
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Admins can manage trade types"
    ON trade_types FOR ALL
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Admins can manage categories"
    ON categories FOR ALL
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Admins can manage products"
    ON products FOR ALL
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Admins can manage product trade types"
    ON product_trade_types FOR ALL
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Admins can manage product images"
    ON product_images FOR ALL
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Admins can manage product specifications"
    ON product_specifications FOR ALL
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Admins can manage blog categories"
    ON blog_categories FOR ALL
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Admins can manage blogs"
    ON blogs FOR ALL
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Admins can manage blog products"
    ON blog_products FOR ALL
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Admins can view all inquiries"
    ON client_inquiries FOR SELECT
    USING (true);

-- ============================================
-- STORAGE BUCKETS SETUP
-- ============================================
-- Note: Run these commands separately in Supabase Dashboard > Storage

-- Create product-images bucket
-- INSERT INTO storage.buckets (id, name, public) VALUES ('product-images', 'product-images', true);

-- Create blog-images bucket
-- INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);

-- Storage policies for product-images
-- CREATE POLICY "Public can view product images"
--     ON storage.objects FOR SELECT
--     USING (bucket_id = 'product-images');

-- CREATE POLICY "Authenticated users can upload product images"
--     ON storage.objects FOR INSERT
--     WITH CHECK (bucket_id = 'product-images');

-- Storage policies for blog-images
-- CREATE POLICY "Public can view blog images"
--     ON storage.objects FOR SELECT
--     USING (bucket_id = 'blog-images');

-- CREATE POLICY "Authenticated users can upload blog images"
--     ON storage.objects FOR INSERT
--     WITH CHECK (bucket_id = 'blog-images');

-- ============================================
-- VERIFICATION QUERIES
-- ============================================
-- Run these to verify the setup

-- SELECT * FROM user_profiles;
-- SELECT * FROM trade_types;
-- SELECT * FROM blog_categories;

-- ============================================
-- END OF MIGRATION
-- ============================================

