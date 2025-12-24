# Supabase S3 Storage Setup Guide

This guide explains how to configure Supabase S3 storage for your application.

## Configuration Details

### S3 Endpoint
- **URL**: `https://jjkczpvsxzglqursnhya.storage.supabase.co/storage/v1/s3`
- **Region**: `eu-central-1`

### Buckets

1. **product-images** (for product uploads)
   - Public visibility
   - Max file size: 50 MB
   - Allowed formats: Any

2. **blog-images** (for blog post images)
   - Public visibility
   - Max file size: 50 MB
   - Allowed formats: Any

## Environment Variables

Add these to your `.env.local` file:

```
# Supabase S3 Configuration
NEXT_PUBLIC_SUPABASE_S3_ENDPOINT=https://jjkczpvsxzglqursnhya.storage.supabase.co/storage/v1/s3
NEXT_PUBLIC_SUPABASE_S3_REGION=eu-central-1
NEXT_PUBLIC_SUPABASE_BUCKET_PRODUCTS=product-images
NEXT_PUBLIC_SUPABASE_BUCKET_BLOG=blog-images
```

## Features Implemented

### 1. Image Upload Component (`ImageUploader`)
- Drag-and-drop file upload support
- Multiple file selection (up to 5 images per product)
- Real-time upload progress
- Image preview gallery
- Remove individual images
- Validation for file types and sizes

### 2. Rich Text Editor (`RichTextEditor`)
- Full-featured HTML editor using Quill
- Formatting options: bold, italic, underline, strikethrough
- Heading levels (h1, h2, h3)
- Lists, blockquotes, code blocks
- Text color and background color
- Alignment options
- Font and size selection

### 3. Storage Utilities (`lib/supabase/storage.ts`)
- `uploadToSupabase()` - Upload single file
- `uploadMultipleToSupabase()` - Upload multiple files
- `deleteFromSupabase()` - Delete uploaded files
- Error handling and validation
- Public URL generation

## Usage in Product Form

### Upload Images
```tsx
<ImageUploader
  label="Product Images"
  value={formData.images}
  onChange={(images) => setFormData({ ...formData, images })}
  bucket="products"
  maxFiles={5}
  required={true}
/>
```

### Rich Text Description
```tsx
<RichTextEditor
  label="Product Description"
  value={formData.long_description}
  onChange={(value) => setFormData({ ...formData, long_description: value })}
  placeholder="Enter detailed description"
  required
  height="400px"
/>
```

## File Structure

```
src/
├── components/admin/forms/
│   ├── ImageUploader.tsx       # Image upload component
│   ├── RichTextEditor.tsx      # Rich text editor component
│   └── ProductForm.tsx         # Updated product form
├── lib/supabase/
│   └── storage.ts             # Storage utilities
├── config/
│   └── storage.ts             # Storage configuration
```

## API Integration

The product creation API already supports:
- `images: string[]` - Array of image URLs from Supabase Storage
- `long_description: string` - HTML content from rich text editor

Example API request:
```json
{
  "name": "Product Name",
  "slug": "product-name",
  "category_id": "cat-123",
  "short_description": "Brief description",
  "long_description": "<p>HTML formatted description</p>",
  "images": [
    "https://..../product-images/1234567890-image.jpg",
    "https://..../product-images/1234567891-image.jpg"
  ]
}
```

## Frontend Display

When displaying products:
```tsx
// Display first image
<img src={product.images[0]} alt={product.name} />

// Display all images
{product.images.map((img, idx) => (
  <img key={idx} src={img} alt={`${product.name} ${idx}`} />
))}

// Display rich text description
<div dangerouslySetInnerHTML={{ __html: product.long_description }} />
```

## Troubleshooting

### Images not uploading
1. Check Supabase credentials in `.env.local`
2. Verify bucket exists and is public
3. Check browser console for detailed errors
4. Ensure file size is under 50MB
5. Verify file format is supported

### Rich text editor not rendering
1. Ensure `react-quill` is installed: `npm install react-quill quill`
2. Check that CSS is imported in component
3. Verify component is used within "use client" context

### Bucket permission errors
1. Ensure bucket is set to "Public"
2. Check Row Level Security (RLS) policies
3. Verify Supabase anon key has storage permissions
