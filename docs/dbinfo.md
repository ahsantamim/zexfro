🗄️ Database Schema Documentation

Project: Product Listing + Blogs + Client Submission
Tech Stack: Next.js, Supabase (PostgreSQL + Storage)

📦 Storage Buckets
Bucket Name	Purpose	Public
product-images	Stores product images (multiple per product)	✅
blog-images	Stores featured images for blogs	✅
🔹 1. Users

Table: user_profiles

Column	Type	Description
id	uuid	References auth.users (Supabase Auth)
full_name	text	User full name
role	text	admin or editor
created_at	timestamptz	Timestamp of creation

Purpose: Stores user metadata (admin/editor) for products, categories, and blogs.

🔹 2. Trade Types

Table: trade_types

Column	Type	Description
id	uuid	Primary key
slug	text	URL-friendly name (import, export)
name	text	Display name (Import, Export)
status	boolean	Active/inactive
created_at	timestamptz	Timestamp

Purpose: Defines trade types for products.

🔹 3. Categories

Table: categories

Column	Type	Description
id	uuid	Primary key
parent_id	uuid	Optional parent category for hierarchy
slug	text	URL-friendly name
name	text	Display name
description	text	Optional description
status	boolean	Active/inactive
created_by	uuid	User who created the category
created_at	timestamptz	Timestamp

Purpose: Product categories (Sportswear, Pharmaceuticals, etc.)

🔹 4. Products

Table: products

Column	Type	Description
id	uuid	Primary key
category_id	uuid	References categories.id
slug	text	URL-friendly product name
name	text	Product display name
short_description	text	Short description
long_description	text	Detailed description
hs_code	text	Harmonized System code
brand	text	Product brand
origin_country	text	Country of origin
status	boolean	Active/inactive
created_by	uuid	User who created product
created_at	timestamptz	Timestamp

Purpose: Stores all product information.

🔹 5. Product ↔ Trade Types

Table: product_trade_types

Column	Type	Description
id	uuid	Primary key
product_id	uuid	References products.id
trade_type_id	uuid	References trade_types.id

Purpose: Many-to-many relationship between products and trade types.
One product can be both import and export.

🔹 6. Product Images

Table: product_images

Column	Type	Description
id	uuid	Primary key
product_id	uuid	References products.id
image_url	text	URL from product-images bucket
alt_text	text	SEO-friendly alt text
is_primary	boolean	True = main thumbnail
sort_order	int	Display order in gallery
created_at	timestamptz	Timestamp

Purpose: Store multiple images per product (carousel, gallery).

🔹 7. Product Specifications

Table: product_specifications

Column	Type	Description
id	uuid	Primary key
product_id	uuid	References products.id
spec_key	text	Specification name (Material, Size, Grade)
spec_value	text	Value of specification
unit	text	Optional unit (kg, cm, ml)
created_at	timestamptz	Timestamp

Purpose: Flexible key-value specs for products. No schema changes required for new specs.

🔹 8. Blog Categories

Table: blog_categories

Column	Type	Description
id	uuid	Primary key
slug	text	URL-friendly category
name	text	Display name
description	text	Optional
status	boolean	Active/inactive
created_at	timestamptz	Timestamp
🔹 9. Blogs

Table: blogs

Column	Type	Description
id	uuid	Primary key
blog_category_id	uuid	References blog_categories.id
slug	text	URL-friendly blog slug
title	text	Blog title
excerpt	text	Short summary
content	text	Markdown / HTML content
featured_image	text	URL from blog-images bucket
author_id	uuid	References auth.users.id
status	text	draft or published
published_at	timestamptz	Publication date
created_at	timestamptz	Timestamp
🔹 10. Blog ↔ Products (Optional)

Table: blog_products

Column	Type	Description
id	uuid	Primary key
blog_id	uuid	References blogs.id
product_id	uuid	References products.id

Purpose: Links blogs to products for SEO and contextual relevance.

🔹 11. Client Inquiries (Form Submissions)

Table: client_inquiries

Column	Type	Description
id	uuid	Primary key
full_name	text	Client full name
country	text	Country name
company_name	text	Company name
designation	text	CEO, Manager, etc.
product_type	text	exporter / importer
phone_code	text	Country code (+880)
phone_number	text	Mobile number
telephone_number	text	Optional landline
email	text	Email address
created_at	timestamptz	Submission timestamp

Purpose: Public leads submitted via form, completely separate from users.

🔹 12. ER Diagram Overview
auth.users
   └── user_profiles
   └── categories
         └── products
               └── product_trade_types
               └── product_images
               └── product_specifications
   └── blogs
         └── blog_products

client_inquiries (standalone)

🔹 13. Notes

Images: Use product-images & blog-images buckets for all image URLs.

Multiple Images: Each product can have multiple images via product_images.

Dynamic Specs: product_specifications supports unlimited key-value pairs.

RLS: Apply Row-Level Security in Supabase for public read / admin insert.

SEO: Use slugs for categories, products, and blogs.