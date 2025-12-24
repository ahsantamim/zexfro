# Quick Reference: Product Upload & Rich Text Editor

## 🚀 Quick Start

### 1. Install (if not already done)
```bash
npm install react-quill quill
```

### 2. Use in Your Form
```tsx
import { ImageUploader } from "@/components/admin/forms/ImageUploader";
import { RichTextEditor } from "@/components/admin/forms/RichTextEditor";

// In your component:
const [images, setImages] = useState<string[]>([]);
const [description, setDescription] = useState("");

// Upload images
<ImageUploader
  value={images}
  onChange={setImages}
  bucket="products"
/>

// Rich text editor
<RichTextEditor
  value={description}
  onChange={setDescription}
/>
```

### 3. Submit to API
```tsx
await fetch("/api/admin/products", {
  method: "POST",
  body: JSON.stringify({
    name: "Product",
    images: images, // Array of URLs
    long_description: description, // HTML content
    // ... other fields
  }),
});
```

## 📦 What's Included

| File | Purpose |
|------|---------|
| `ImageUploader.tsx` | Upload & preview images |
| `RichTextEditor.tsx` | HTML rich text editing |
| `storage.ts` | Supabase upload utilities |
| `storage.ts` (config) | Configuration & validation |

## 🎨 Features

### ImageUploader
- Drag-and-drop upload
- Max 5 images (configurable)
- Real-time preview
- Remove individual images
- File validation
- Progress indication

### RichTextEditor
- Bold, italic, underline, strikethrough
- Heading levels (h1-h3)
- Ordered/unordered lists
- Blockquotes, code blocks
- Text color & background
- Font & size selection
- Full toolbar customization

## 🔧 Configuration

### Supabase S3
```
Endpoint: https://jjkczpvsxzglqursnhya.storage.supabase.co/storage/v1/s3
Region: eu-central-1
Buckets: product-images, blog-images
Max: 50MB per file
```

### Optional Environment Variables
```
NEXT_PUBLIC_SUPABASE_S3_ENDPOINT=...
NEXT_PUBLIC_SUPABASE_S3_REGION=eu-central-1
NEXT_PUBLIC_SUPABASE_BUCKET_PRODUCTS=product-images
NEXT_PUBLIC_SUPABASE_BUCKET_BLOG=blog-images
```

## 💾 Database

```prisma
model Product {
  images String[]  // Array of URLs
  long_description String @db.Text  // HTML
}
```

## 📡 API

```json
POST /api/admin/products
{
  "name": "Product",
  "images": ["https://...image1.jpg", "https://...image2.jpg"],
  "long_description": "<h2>Description</h2><p>Content...</p>",
  ...
}
```

## 🎯 Display Products

### Show Images
```tsx
<img src={product.images[0]} alt={product.name} />
```

### Show Description
```tsx
<div dangerouslySetInnerHTML={{ __html: product.long_description }} />
```

### Full Gallery
```tsx
{product.images.map((img) => (
  <img key={img} src={img} alt="Product" />
))}
```

## ⚠️ Validation

- **File types:** JPEG, PNG, WebP, GIF
- **Max size:** 50MB per file
- **Max images:** 5 per product
- **HTML:** Any valid HTML (consider sanitizing if user-generated)

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not uploading | Check Supabase bucket is Public |
| Editor not showing | Install react-quill: `npm install react-quill quill` |
| 404 on images | Verify bucket name and region |
| Hydration error | Editor uses dynamic import, should work |

## 📚 Documentation

- `PRODUCT_UPLOAD_IMPLEMENTATION.md` - Full docs
- `PRODUCT_DISPLAY_EXAMPLES.tsx` - Display code
- `SUPABASE_S3_STORAGE_SETUP.md` - Setup guide
- `IMPLEMENTATION_COMPLETE.md` - Summary

## 🔗 Components Used

- **Quill** - Rich text editor
- **Supabase** - Storage/S3
- **React Hooks** - State management
- **Lucide React** - Icons
- **Tailwind CSS** - Styling
- **Radix UI** - UI components

## ✅ Checklist

- [ ] `npm install react-quill quill` done
- [ ] ProductForm updated with new components
- [ ] Can upload images
- [ ] Can format text with editor
- [ ] Form submission includes images and HTML
- [ ] Product displays with images and formatted text
- [ ] All images are accessible from Supabase URLs

## 🎓 Learn More

### Image Upload
- See: `src/components/admin/forms/ImageUploader.tsx`
- Handles: Upload, preview, remove, validation
- Uses: `lib/supabase/storage.ts` utilities

### Rich Text
- See: `src/components/admin/forms/RichTextEditor.tsx`
- Powered by: Quill editor
- Output: Clean HTML

### Storage Utilities
- See: `src/lib/supabase/storage.ts`
- Functions: Upload, delete, validate
- URL: Supabase Storage API

## 🚦 Status

✅ ImageUploader - Ready
✅ RichTextEditor - Ready
✅ Product Form - Updated
✅ API - Ready
✅ Database - Ready
✅ Documentation - Complete

**Ready to use!**
