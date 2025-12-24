/**
 * Example: Displaying Product Images and Rich Text
 * 
 * This file shows how to display products with:
 * - Multiple product images
 * - Rich text (HTML) descriptions
 */

// ============================================
// DISPLAY SINGLE PRODUCT WITH IMAGES
// ============================================

import React from "react";

interface Product {
  id: string;
  name: string;
  short_description: string;
  long_description: string; // HTML content from rich text editor
  images: string[]; // Array of Supabase URLs
  price: number;
  brand: string;
  origin_country: string;
}

export function ProductDetail({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = React.useState(
    product.images[0] || "/placeholder.jpg"
  );

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      {/* Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Image */}
        <div className="md:col-span-2">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg border border-gray-200"
          />
        </div>

        {/* Image Gallery */}
        <div className="space-y-3">
          {product.images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(image)}
              className={`w-full aspect-square rounded-lg overflow-hidden border-2 transition ${
                selectedImage === image
                  ? "border-blue-500"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={image}
                alt={`${product.name} ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.short_description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 py-4 border-y">
          {product.brand && (
            <div>
              <p className="text-sm text-gray-500">Brand</p>
              <p className="font-semibold">{product.brand}</p>
            </div>
          )}
          {product.origin_country && (
            <div>
              <p className="text-sm text-gray-500">Origin Country</p>
              <p className="font-semibold">{product.origin_country}</p>
            </div>
          )}
        </div>
      </div>

      {/* Rich Text Description */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Description</h2>
        <div
          className="prose prose-sm md:prose-base max-w-none"
          dangerouslySetInnerHTML={{ __html: product.long_description }}
        />
      </div>
    </div>
  );
}

// ============================================
// PRODUCT CARD WITH IMAGE
// ============================================

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition">
      {/* Product Image */}
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img
          src={product.images[0] || "/placeholder.jpg"}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.short_description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-bold">${product.price}</span>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {product.images.length} images
          </span>
        </div>
      </div>
    </div>
  );
}

// ============================================
// PRODUCT GRID GALLERY
// ============================================

export function ProductGallery({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// ============================================
// RICH TEXT STYLES WITH TAILWIND
// ============================================

/**
 * Add this to your global CSS or tailwind.config.ts for better rich text display:
 */

export const richTextStyles = `
  /* Rich Text Description Styling */
  .product-description {
    @apply prose prose-sm md:prose-base max-w-none;
  }

  .product-description h1,
  .product-description h2,
  .product-description h3 {
    @apply font-bold mt-4 mb-2;
  }

  .product-description h1 {
    @apply text-2xl;
  }

  .product-description h2 {
    @apply text-xl;
  }

  .product-description h3 {
    @apply text-lg;
  }

  .product-description p {
    @apply mb-3 text-gray-700;
  }

  .product-description ul,
  .product-description ol {
    @apply ml-6 mb-3;
  }

  .product-description li {
    @apply mb-1;
  }

  .product-description blockquote {
    @apply border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4;
  }

  .product-description code {
    @apply bg-gray-100 px-2 py-1 rounded font-mono text-sm;
  }

  .product-description pre {
    @apply bg-gray-100 p-4 rounded overflow-x-auto my-4;
  }

  .product-description strong {
    @apply font-bold;
  }

  .product-description em {
    @apply italic;
  }

  .product-description a {
    @apply text-blue-500 hover:underline;
  }
`;

// ============================================
// USAGE EXAMPLE
// ============================================

/**
 * Example: Using in a Next.js page
 */

export default function ProductPage() {
  // Example product data with rich text and images
  const product: Product = {
    id: "1",
    name: "Premium Laptop",
    short_description: "High-performance laptop for professionals",
    long_description: `
      <h2>Features</h2>
      <ul>
        <li>Intel Core i9 Processor</li>
        <li>32GB RAM</li>
        <li>1TB SSD Storage</li>
        <li>4K Display</li>
      </ul>
      <p><strong>Perfect for:</strong> Video editing, 3D rendering, and software development</p>
      <blockquote>
        "This laptop changed my workflow completely!" - Customer Review
      </blockquote>
    `,
    images: [
      "https://jjkczpvsxzglqursnhya.storage.supabase.co/storage/v1/s3/product-images/1234567890-laptop-1.jpg",
      "https://jjkczpvsxzglqursnhya.storage.supabase.co/storage/v1/s3/product-images/1234567890-laptop-2.jpg",
      "https://jjkczpvsxzglqursnhya.storage.supabase.co/storage/v1/s3/product-images/1234567890-laptop-3.jpg",
    ],
    price: 1999,
    brand: "TechBrand",
    origin_country: "USA",
  };

  return (
    <div className="product-description">
      <ProductDetail product={product} />
    </div>
  );
}

// ============================================
// FETCH PRODUCT WITH IMAGES FROM API
// ============================================

/**
 * Example API call to fetch products with images
 */

export async function getProductWithImages(productId: string) {
  const response = await fetch(`/api/admin/products/${productId}`);
  const data = await response.json();

  if (data.success) {
    const product = data.data;
    return {
      ...product,
      // Images are already stored as URLs in the database
      images: product.images || [],
    };
  }

  throw new Error("Failed to fetch product");
}

// ============================================
// DISPLAY RICH TEXT FROM DATABASE
// ============================================

/**
 * Component to safely display HTML content from database
 */

export function RichTextDisplay({ html }: { html: string }) {
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{
        __html: html,
        // Note: Only use dangerouslySetInnerHTML with trusted content
        // If content comes from user input, sanitize it first:
        // import DOMPurify from 'isomorphic-dompurify';
        // __html: DOMPurify.sanitize(html)
      }}
    />
  );
}

// ============================================
// EXAMPLE: SANITIZING HTML (OPTIONAL)
// ============================================

/**
 * If you need to sanitize user-generated HTML:
 * 
 * npm install isomorphic-dompurify
 * 
 * import DOMPurify from 'isomorphic-dompurify';
 * 
 * function SafeRichText({ html }: { html: string }) {
 *   return (
 *     <div
 *       dangerouslySetInnerHTML={{
 *         __html: DOMPurify.sanitize(html)
 *       }}
 *     />
 *   );
 * }
 */
