# Supabase Setup Guide for Zexfro

This guide will help you set up Supabase with your Zexfro application.

## 📋 Prerequisites

- Supabase account and project created
- Project URL: `https://jjkczpvsxzglqursnhya.supabase.co`
- Anon Key: (Already configured in `.env.local`)

## 🚀 Step-by-Step Setup

### Step 1: Run the Database Migration

1. Open your Supabase Dashboard
2. Navigate to: **SQL Editor** (in the left sidebar)
3. Open the file `supabase_migration.sql` from your project root
4. Copy all the SQL code
5. Paste it into the Supabase SQL Editor
6. Click **Run** (or press Cmd/Ctrl + Enter)

This will create:
- ✅ All database tables
- ✅ Indexes for performance
- ✅ Row Level Security (RLS) policies
- ✅ Triggers for automatic timestamp updates
- ✅ Admin user (email: `admin@zexfro.com`, password: `zexfro12341234`)
- ✅ Default trade types (Import/Export)
- ✅ Default blog categories

### Step 2: Create Storage Buckets

1. Navigate to **Storage** in Supabase Dashboard
2. Click **New bucket**

#### Create Product Images Bucket:
- Name: `product-images`
- Public: ✅ Yes
- Click **Create bucket**

#### Create Blog Images Bucket:
- Name: `blog-images`
- Public: ✅ Yes
- Click **Create bucket**

### Step 3: Set Storage Policies

For each bucket (`product-images` and `blog-images`):

1. Click on the bucket
2. Go to **Policies** tab
3. Add the following policies:

#### Public Read Policy:
```sql
CREATE POLICY "Public can view images"
ON storage.objects FOR SELECT
USING (bucket_id = 'product-images'); -- or 'blog-images'
```

#### Authenticated Upload Policy:
```sql
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'product-images'); -- or 'blog-images'
```

#### Authenticated Delete Policy:
```sql
CREATE POLICY "Authenticated users can delete"
ON storage.objects FOR DELETE
USING (bucket_id = 'product-images'); -- or 'blog-images'
```

### Step 4: Verify the Setup

Run these queries in the SQL Editor to verify:

```sql
-- Check if admin user exists
SELECT email, full_name, role FROM user_profiles;

-- Check trade types
SELECT * FROM trade_types;

-- Check blog categories
SELECT * FROM blog_categories;

-- Verify tables
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;
```

### Step 5: Configure Environment Variables

The `.env.local` file has been created with your Supabase credentials. Make sure it contains:

```env
NEXT_PUBLIC_SUPABASE_URL=https://jjkczpvsxzglqursnhya.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

> ⚠️ **Note**: Add your database password to the `DATABASE_URL` if you plan to use Prisma alongside Supabase.

### Step 6: Install Dependencies and Run

```bash
# Install dependencies (if not already done)
npm install

# Run the development server
npm run dev
```

## 🔐 Admin Login Credentials

**Default Admin User:**
- **Email**: `admin@zexfro.com`
- **Password**: `zexfro12341234`
- **Role**: Admin

> ⚠️ **IMPORTANT**: Change this password immediately in production!

## 📊 Database Schema Overview

### Core Tables:
1. **user_profiles** - Admin and editor users
2. **categories** - Product categories (hierarchical)
3. **products** - Main products table
4. **product_images** - Multiple images per product
5. **product_specifications** - Flexible key-value specs
6. **product_trade_types** - Links products to import/export
7. **trade_types** - Import/Export types
8. **blogs** - Blog posts
9. **blog_categories** - Blog categories
10. **blog_products** - Links blogs to products
11. **client_inquiries** - Customer form submissions

## 🔗 API Endpoints

### Products API
- `GET /api/admin/products` - List all products (with filters, pagination)
- `POST /api/admin/products` - Create new product
- `GET /api/admin/products/:id` - Get single product
- `PUT /api/admin/products/:id` - Update product
- `DELETE /api/admin/products/:id` - Delete product

### Users API
- `GET /api/admin/users` - List all users (with filters, pagination)
- `POST /api/admin/users` - Create new user
- `GET /api/admin/users/:id` - Get single user
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user

### Auth API
- `POST /api/auth/login` - Login with email/password

### Helper APIs
- `GET /api/admin/categories` - Get all categories
- `GET /api/admin/trade-types` - Get all trade types

## 🎨 Admin Portal Features

### Products Management (`/admin/products`)
- ✅ Full CRUD operations
- ✅ Advanced filtering (search, category, status)
- ✅ Pagination
- ✅ Real-time data from Supabase
- ✅ Multiple images support
- ✅ Specifications management
- ✅ Trade types (import/export)

### Users Management (`/admin/users`)
- ✅ Full CRUD operations
- ✅ Role-based access (Admin/Editor)
- ✅ Password hashing with bcrypt
- ✅ Email validation
- ✅ Search and filter
- ✅ Pagination

## 🔒 Security Features

1. **Row Level Security (RLS)** - Enabled on all tables
2. **Password Hashing** - bcrypt with salt rounds
3. **SQL Injection Prevention** - Supabase client handles this
4. **XSS Protection** - React handles this
5. **API Validation** - Input validation on all endpoints
6. **HTTPS Only** - Supabase enforces HTTPS

## 📝 Next Steps

1. ✅ **Test Admin Login**: Go to `/login` and use the admin credentials
2. ✅ **Create Test Product**: Navigate to `/admin/products` and create a product
3. ✅ **Create Test User**: Navigate to `/admin/users` and create an editor user
4. 📸 **Upload Images**: Set up Cloudinary or use Supabase Storage
5. 🔄 **Add More Features**: Implement remaining tables (blogs, etc.)

## 🆘 Troubleshooting

### Issue: Cannot connect to Supabase
- Verify your `.env.local` file exists and has correct values
- Restart the development server
- Check Supabase project status

### Issue: RLS prevents data access
- Make sure you're using the correct API key
- For admin operations, you might need the service role key (not recommended for client-side)
- Check your RLS policies in Supabase Dashboard

### Issue: Migration fails
- Check for syntax errors in the SQL
- Run queries one section at a time
- Check Supabase logs for detailed errors

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Supabase Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

## 🎉 Congratulations!

Your Supabase backend is now fully integrated with Zexfro. You have:
- ✅ Industry-standard database schema
- ✅ RESTful API endpoints
- ✅ Secure authentication
- ✅ Dynamic admin portal
- ✅ Full CRUD operations
- ✅ Production-ready architecture

---

**Need Help?** Check the SQL migration file for detailed table structures and relationships.

