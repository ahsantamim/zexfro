# Blog Images Bucket Setup Guide

## 🚨 QUICK FIX: RLS Policy Error

If you're getting this error:

```
Error [StorageApiError]: new row violates row-level security policy
status: 400, statusCode: '403'
```

**Run this SQL immediately in Supabase SQL Editor:**

```sql
-- Copy and paste FIX_BLOG_IMAGES_RLS.sql into Supabase SQL Editor and run it
```

Or go to: [FIX_BLOG_IMAGES_RLS.sql](FIX_BLOG_IMAGES_RLS.sql) and run the entire file.

---

## Step-by-Step Setup

### Method 1: Using SQL (Recommended - Fastest)

1. Open your Supabase Dashboard
2. Go to **SQL Editor** (left sidebar)
3. Click **New query**
4. Copy the contents of [FIX_BLOG_IMAGES_RLS.sql](FIX_BLOG_IMAGES_RLS.sql)
5. Paste and click **Run**
6. You should see success messages for all operations

This will:

- ✅ Create `blog-images`, `product-images`, and `category-images` buckets
- ✅ Set all buckets to public
- ✅ Create proper RLS policies for uploads, reads, updates, deletes

### Method 2: Manual Setup via Dashboard

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Navigate to **Storage** in the left sidebar
4. Click **New bucket** (or **Create bucket**)
5. Enter the following settings:
   - **Name**: `blog-images`
   - **Public bucket**: ✅ **Enabled** (checked)
   - **File size limit**: 50 MB (or your preference)
   - **Allowed MIME types**: Leave empty (allows all) or specify: `image/jpeg, image/png, image/gif, image/webp`
6. Click **Create bucket**
7. **Important**: After creating, you MUST set RLS policies (see SQL method above)

### Verify Bucket Configuration

Run this SQL query in the Supabase SQL Editor to check your buckets:

```sql
SELECT * FROM storage.buckets WHERE name IN ('product-images', 'blog-images', 'category-images');
```

Expected output should show:

- `product-images` - public: true
- `blog-images` - public: true
- `category-images` - public: true (if you have it)

## Testing the Upload

1. Go to `/admin/blog/create`
2. Fill in the blog post form
3. Click the image upload area
4. Select an image (PNG, JPG, WEBP)
5. You should see a preview
6. Fill in remaining fields and click "Create Post"

The image URL should be: `https://[your-project].supabase.co/storage/v1/object/public/blog-images/blog/[timestamp]-[filename]`

## Troubleshooting

### 404 Error on Upload

- ✅ **Fixed**: Created `/api/admin/upload` endpoint

### 403 Forbidden Error

- Check that the bucket is set to **Public**
- Verify RLS policies allow uploads for authenticated users

### Bucket Not Found Error

- Create the `blog-images` bucket as described above
- Ensure the bucket name matches exactly (case-sensitive)

### Image Not Displaying

- Check browser console for errors
- Verify the image URL is accessible
- Confirm bucket is public

## Related Files

- API: [src/app/api/admin/upload/route.ts](../src/app/api/admin/upload/route.ts)
- Form: [src/components/admin/forms/BlogPostForm.tsx](../src/components/admin/forms/BlogPostForm.tsx)
- Config: [src/config/storage.ts](../src/config/storage.ts)
