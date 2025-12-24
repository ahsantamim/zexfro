"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X, Upload, Loader2 } from "lucide-react";
import { uploadMultipleToSupabase } from "@/lib/supabase/storage";
import { SUPABASE_S3_CONFIG } from "@/lib/supabase/storage";

interface ImageUploaderProps {
  label?: string;
  value: string[];
  onChange: (urls: string[]) => void;
  bucket?: "products" | "blog";
  maxFiles?: number;
  required?: boolean;
  accept?: string;
}

export function ImageUploader({
  label = "Product Images",
  value,
  onChange,
  bucket = "products",
  maxFiles = 5,
  required = false,
  accept = "image/*",
}: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files) return;

    // Check max files
    if (value.length + files.length > maxFiles) {
      setError(`Maximum ${maxFiles} images allowed`);
      return;
    }

    setError(null);
    setUploading(true);

    try {
      const filesArray = Array.from(files);
      const bucketName = SUPABASE_S3_CONFIG.buckets[bucket];

      const results = await uploadMultipleToSupabase(
        bucketName,
        filesArray,
        `${bucket}/${Date.now()}`
      );

      // Filter out errors and add successful uploads
      const successfulUrls = results
        .filter((result) => !result.error && result.url)
        .map((result) => result.url);

      // Check for any errors
      const errors = results.filter((result) => result.error);
      if (errors.length > 0) {
        setError(
          `Failed to upload ${errors.length} file(s): ${errors[0].error}`
        );
      }

      if (successfulUrls.length > 0) {
        onChange([...value, ...successfulUrls]);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to upload images"
      );
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemoveImage = (url: string) => {
    onChange(value.filter((v) => v !== url));
    setError(null);
  };

  const remainingSlots = maxFiles - value.length;

  return (
    <div className="space-y-4">
      {label && (
        <Label>
          {label}
          {required && <span className="text-red-500"> *</span>}
        </Label>
      )}

      {/* Upload Area */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition">
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={accept}
          onChange={handleFileSelect}
          disabled={uploading || remainingSlots === 0}
          className="hidden"
        />

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading || remainingSlots === 0}
          className="w-full"
        >
          {uploading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Uploading...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Upload className="w-8 h-8 text-gray-400" />
              <span className="text-sm font-medium">
                Click to upload or drag and drop
              </span>
              <span className="text-xs text-gray-500">
                {remainingSlots > 0
                  ? `${remainingSlots} slot${remainingSlots !== 1 ? "s" : ""} remaining`
                  : "Maximum images reached"}
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
          {error}
        </div>
      )}

      {/* Image Preview Grid */}
      {value.length > 0 && (
        <div>
          <h4 className="text-sm font-medium mb-3">
            Uploaded Images ({value.length}/{maxFiles})
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {value.map((url) => (
              <div key={url} className="relative group">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                  <img
                    src={url}
                    alt="Uploaded"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveImage(url)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                  title="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Info Text */}
      <p className="text-xs text-gray-500">
        Supported formats: JPEG, PNG, WebP, GIF. Max 5 images.
      </p>
    </div>
  );
}
