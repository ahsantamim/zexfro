/**
 * Supabase S3 Storage Configuration
 * 
 * These are the settings for Supabase S3 (Storage) buckets
 * Update these values in your .env.local file as needed
 */

export const SUPABASE_STORAGE_CONFIG = {
  // S3 Endpoint
  endpoint:
    process.env.NEXT_PUBLIC_SUPABASE_S3_ENDPOINT ||
    "https://jjkczpvsxzglqursnhya.storage.supabase.co/storage/v1/s3",

  // AWS Region
  region:
    process.env.NEXT_PUBLIC_SUPABASE_S3_REGION || "eu-central-1",

  // Bucket Names
  buckets: {
    products:
      process.env.NEXT_PUBLIC_SUPABASE_BUCKET_PRODUCTS ||
      "product-images",
    blog:
      process.env.NEXT_PUBLIC_SUPABASE_BUCKET_BLOG ||
      "blog-images",
  },

  // Max file size in bytes (50 MB as per bucket settings)
  maxFileSize: 50 * 1024 * 1024,

  // Allowed file types
  allowedFileTypes: [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
  ],

  // Allowed file extensions
  allowedExtensions: [".jpg", ".jpeg", ".png", ".webp", ".gif"],
};

/**
 * Validate file before upload
 */
export function validateUploadFile(file: File): {
  valid: boolean;
  error?: string;
} {
  // Check file type
  if (!SUPABASE_STORAGE_CONFIG.allowedFileTypes.includes(file.type)) {
    return {
      valid: false,
      error: `File type not allowed. Allowed types: ${SUPABASE_STORAGE_CONFIG.allowedExtensions.join(", ")}`,
    };
  }

  // Check file size
  if (file.size > SUPABASE_STORAGE_CONFIG.maxFileSize) {
    return {
      valid: false,
      error: `File size exceeds ${SUPABASE_STORAGE_CONFIG.maxFileSize / (1024 * 1024)}MB limit`,
    };
  }

  return { valid: true };
}
