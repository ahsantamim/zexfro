# Product Image Upload & Rich Text Editor Implementation

## Overview
This implementation adds two major features to the product creation form:
1. **S3 Image Upload** - Upload product images directly to Supabase Storage
2. **Rich Text Editor** - Full-featured HTML editor for product descriptions

## What Was Added

### 1. New Components

#### `src/components/admin/forms/ImageUploader.tsx`
A reusable image upload component with:
- Drag-and-drop support
- Multiple file selection (max 5 images)
- Real-time upload progress indicator
- Image preview gallery with delete functionality
- File validation (type and size)
- Error messages
- Responsive grid layout

**Key Props:**
- `value`: Array of uploaded image URLs
- `onChange`: Callback when images are added/removed
- `bucket`: "products" or "blog"
- `maxFiles`: Maximum number of files (default: 5)
- `required`: Whether field is required
- `accept`: File type filter (default: "image/*")

#### `src/components/admin/forms/RichTextEditor.tsx`
A rich text editor component powered by Quill with:
- Formatting toolbar (bold, italic, underline, strikethrough)
- Heading levels, lists, blockquotes
- Text color and background color
- Font and size selection
- Code blocks
- Alignment options
- Clean, intuitive UI
- Customizable height

**Key Props:**
- `value`: HTML content
- `onChange`: Callback on content change
- `placeholder`: Input placeholder text
- `required`: Whether field is required
- `readOnly`: Read-only mode for display
- `height`: Editor height (default: "300px")

### 2. Utility Functions

#### `src/lib/supabase/storage.ts`
Storage utilities for Supabase S3 integration:
- `uploadToSupabase()` - Upload single file to S3
- `uploadMultipleToSupabase()` - Upload multiple files in parallel
- `deleteFromSupabase()` - Delete files from S3
- Automatic timestamp-based file naming
- Public URL generation
- Error handling

#### `src/config/storage.ts`
Configuration file with:
- S3 endpoint and region settings
- Bucket names and paths
- File validation utilities
- Allowed file types and size limits
- Environment variable support

### 3. Updated Components

#### `src/components/admin/forms/ProductForm.tsx`
Enhanced with:
- Image upload field (before descriptions)
- Rich text editor for long_description
- Automatic image array handling
- Form submission includes image URLs

### 4. Database Support
The existing Prisma schema already supports:
```prisma
model Product {
  images String[] // Array of image URLs
}
```

## Installation & Setup

### 1. Install Dependencies
```bash
npm install react-quill quill
```

### 2. Configure Environment Variables
Add to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_S3_ENDPOINT=https://jjkczpvsxzglqursnhya.storage.supabase.co/storage/v1/s3
NEXT_PUBLIC_SUPABASE_S3_REGION=eu-central-1
NEXT_PUBLIC_SUPABASE_BUCKET_PRODUCTS=product-images
NEXT_PUBLIC_SUPABASE_BUCKET_BLOG=blog-images
```

### 3. Verify Supabase Buckets
Ensure these buckets exist in Supabase Storage:
- `product-images` - Set to Public
- `blog-images` - Set to Public

## Usage

### In Product Form
```tsx
// Image Upload
<ImageUploader
  label="Product Images"
  value={formData.images}
  onChange={(images) => setFormData({ ...formData, images })}
  bucket="products"
  maxFiles={5}
  required={true}
/>

// Rich Text Editor
<RichTextEditor
  label="Long Description"
  value={formData.long_description}
  onChange={(value) => setFormData({ ...formData, long_description: value })}
  placeholder="Enter detailed product description"
  required
  height="400px"
/>
```

### In API Routes
```tsx
// Images are stored in formData.images as URLs
const input: CreateProductInput = {
  // ... other fields
  images: body.images, // Array of Supabase URLs
  long_description: body.long_description, // HTML from editor
};
```

### Displaying on Frontend
```tsx
// Show image gallery
<div className="grid grid-cols-3 gap-4">
  {product.images.map((img, idx) => (
    <img key={idx} src={img} alt={`Product ${idx}`} />
  ))}
</div>

// Display rich text description
<div 
  className="prose"
  dangerouslySetInnerHTML={{ __html: product.long_description }} 
/>
```

## File Structure
```
src/
├── app/
│   ├── api/admin/
│   │   └── upload/
│   │       └── route.example.ts          # Optional API upload handler
│   └── admin/products/
│       └── page.tsx                      # Uses ProductForm
├── components/admin/forms/
│   ├── ProductForm.tsx                   # ✓ Updated
│   ├── ImageUploader.tsx                 # ✓ New
│   ├── RichTextEditor.tsx                # ✓ New
│   └── BlogPostForm.tsx                  # Can also use these
├── lib/supabase/
│   ├── storage.ts                        # ✓ New
│   ├── client.ts                         # Already exists
│   ├── products.service.ts               # Already supports images
│   └── ...
└── config/
    ├── storage.ts                        # ✓ New
    └── site.ts                           # Existing config
```

## Key Features

### Image Upload
✓ Drag-and-drop interface
✓ Progress indication during upload
✓ Real-time preview
✓ Individual image removal
✓ File validation (type and size)
✓ Multiple file support
✓ Error handling with user feedback
✓ Automatic file naming with timestamps

### Rich Text Editor
✓ WYSIWYG editing
✓ HTML output
✓ Toolbar with formatting options
✓ Heading levels
✓ Lists and blockquotes
✓ Code formatting
✓ Text and background colors
✓ Font selection
✓ Full keyboard shortcuts support
✓ Customizable height

## API Changes

### POST /api/admin/products
Now accepts:
```json
{
  "name": "Product Name",
  "slug": "product-name",
  "category_id": "uuid",
  "short_description": "Brief text",
  "long_description": "<p>HTML formatted text</p>",
  "images": [
    "https://jjkczpvsxzglqursnhya.storage.supabase.co/storage/v1/s3/product-images/...",
    "https://jjkczpvsxzglqursnhya.storage.supabase.co/storage/v1/s3/product-images/..."
  ],
  "hs_code": "8471.30",
  "brand": "Brand Name",
  "origin_country": "China",
  "type": "Standard",
  "category_id": "cat-123",
  "trade_type_ids": ["type-1", "type-2"]
}
```

## Styling

Both components use:
- Tailwind CSS for layout
- Radix UI components (Label, Button, Input, etc.)
- Lucide React icons
- Quill's built-in snow theme
- Custom CSS for rich text editor

## Performance Considerations

1. **Image Uploads**: Uses Supabase's S3 backend for fast, parallel uploads
2. **Rich Text**: Quill is dynamically imported (ssr: false) to prevent hydration issues
3. **Bucket Size**: Each bucket supports up to 50MB per file
4. **Image Optimization**: Consider adding image compression before upload for better performance

## Error Handling

- Invalid file types are rejected
- File size validation (50MB limit)
- Network errors are caught and displayed
- Upload failures show specific error messages
- Partial uploads handled gracefully

## Security Notes

1. Buckets are public but file names include timestamps for some uniqueness
2. Consider adding file type validation on the backend as well
3. Implement virus scanning if needed for production
4. Monitor storage costs with multiple large files

## Optional: Custom Upload API

If you want to handle uploads through your API instead of direct S3:
1. Rename `src/app/api/admin/upload/route.example.ts` to `route.ts`
2. Update ImageUploader to use the API endpoint:
```tsx
const response = await fetch('/api/admin/upload', {
  method: 'POST',
  body: formData,
});
```

## Testing the Implementation

1. Navigate to `/admin/products/create`
2. Upload product images (drag-drop or click)
3. Wait for upload progress to complete
4. Check preview gallery
5. Enter description using rich text editor
6. Try formatting options (bold, italic, colors, etc.)
7. Submit form to create product
8. Verify images are stored in Supabase and accessible

## Troubleshooting

**Images not uploading**
- Check Supabase credentials in environment variables
- Verify buckets exist and are set to Public
- Check browser console for specific error messages

**Rich text editor not showing**
- Ensure `npm install react-quill quill` completed successfully
- Verify component is in a "use client" context
- Check that CSS import is present
- Clear browser cache

**Images not persisting**
- Verify database schema includes `images String[]` field
- Check API endpoint is receiving image URLs
- Confirm Supabase Storage URLs are valid and public

**File upload size exceeded**
- Maximum file size is 50MB per bucket setting
- Consider compressing images before upload
- Implement client-side file size validation

## Future Enhancements

- [ ] Image compression before upload
- [ ] Drag-to-reorder images
- [ ] Image cropping tool
- [ ] HTML preview in editor
- [ ] Markdown support
- [ ] Image optimization/responsive sizing
- [ ] Bulk image upload
- [ ] Image alt text input
