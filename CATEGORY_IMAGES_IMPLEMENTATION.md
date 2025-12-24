# Category Images Implementation

## Summary

Successfully implemented category cover image functionality with upload support.

## Changes Made

### 1. Database Schema

- **Created**: [CREATE_CATEGORY_IMAGES_TABLE.sql](CREATE_CATEGORY_IMAGES_TABLE.sql)
  - New `category_images` table to store cover images for categories
  - Includes RLS policies for public read and authenticated write access
  - Foreign key relationship to `categories` table

### 2. Category Create Form

- **Updated**: [src/app/admin/categories/create/page.tsx](src/app/admin/categories/create/page.tsx)
  - Added cover image upload field with preview
  - Image upload to `category-images` bucket
  - Auto-saves image to `category_images` table after category creation
  - UI includes drag-and-drop style upload area

### 3. API Endpoint

- **Created**: [src/app/api/admin/categories/images/route.ts](src/app/api/admin/categories/images/route.ts)
  - POST endpoint to save category images
  - GET endpoint to retrieve category images
  - Proper error handling

### 4. Sidebar Update

- **Updated**: [src/components/admin/AdminSidebar.tsx](src/components/admin/AdminSidebar.tsx)
  - Moved "Categories" before "Products" in navigation menu

## Setup Instructions

### 1. Run SQL Migration

Execute [CREATE_CATEGORY_IMAGES_TABLE.sql](CREATE_CATEGORY_IMAGES_TABLE.sql) in Supabase SQL Editor to create the table.

### 2. Verify Bucket Configuration

- Bucket `category-images` should be configured as **Public** in Supabase Storage
- Allows public read access, authenticated write access

### 3. Test the Feature

1. Navigate to Admin → Categories → Create New Category
2. Fill in category details
3. Upload a cover image using the upload field
4. Submit the form
5. Image will be saved to Supabase Storage and linked to the category

## Features

- ✅ Upload cover images for categories
- ✅ Image preview before submission
- ✅ Remove/replace uploaded image
- ✅ Automatic save to database
- ✅ Categories appear before Products in sidebar
- ✅ Clean UI with upload feedback

## Storage Buckets

- `category-images` - For category cover images
- `product-images` - For product images
- `blog-images` - For blog images
