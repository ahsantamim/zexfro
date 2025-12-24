"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Upload, X, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

interface TradeType {
  id: string;
  name: string;
  slug: string;
}

export default function EditCategoryPage() {
  const router = useRouter();
  const params = useParams();
  const categoryId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tradeTypes, setTradeTypes] = useState<TradeType[]>([]);
  const [coverImage, setCoverImage] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    type: "",
    description: "",
    status: true,
  });

  // Fetch trade types
  useEffect(() => {
    async function fetchTradeTypes() {
      try {
        const response = await fetch(
          "/api/admin/trade-types?status=true&limit=100"
        );
        const data = await response.json();
        if (data.success) {
          setTradeTypes(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch trade types:", error);
      }
    }
    fetchTradeTypes();
  }, []);

  // Fetch category data
  useEffect(() => {
    async function fetchCategory() {
      try {
        console.log("Fetching category:", categoryId);
        const response = await fetch(`/api/admin/categories/${categoryId}`);
        const data = await response.json();
        console.log("Category data received:", data);

        if (data.success) {
          const category = data.data;
          console.log("Setting form data:", {
            name: category.name,
            slug: category.slug,
            type: category.type || "",
            description: category.description || "",
            status: category.status,
          });
          console.log("Category type from API:", category.type);

          setFormData({
            name: category.name,
            slug: category.slug,
            type: category.type || "",
            description: category.description || "",
            status: category.status,
          });

          setIsEditing(true); // Mark that we're in edit mode

          // Fetch category image
          const imageResponse = await fetch(
            `/api/admin/categories/images?category_id=${categoryId}`
          );
          const imageData = await imageResponse.json();
          console.log("Image data received:", imageData);
          if (imageData.success && imageData.data) {
            setCoverImage(imageData.data.image_url);
          }
        } else {
          console.error("Failed to fetch category:", data.error);
        }
      } catch (error) {
        console.error("Failed to fetch category:", error);
      } finally {
        setLoading(false);
      }
    }

    if (categoryId) {
      fetchCategory();
    }
  }, [categoryId]);

  const handleNameChange = (name: string) => {
    setFormData((prev) => ({
      ...prev,
      name,
      // Only auto-generate slug if we're creating (not editing)
      slug: !isEditing
        ? name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "")
        : prev.slug,
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("bucket", "category-images");
      formData.append("path", `category-${Date.now()}-${file.name}`);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.url) {
        setCoverImage(data.url);
      } else {
        alert("Failed to upload image: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      console.log("Submitting category update with:", {
        name: formData.name,
        slug: formData.slug,
        type: formData.type || null,
        description: formData.description || null,
        status: formData.status,
      });

      // Update category
      const response = await fetch(`/api/admin/categories/${categoryId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          slug: formData.slug,
          type: formData.type || null,
          description: formData.description || null,
          status: formData.status,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Update cover image if changed
        if (coverImage) {
          try {
            // Delete old image first
            await fetch(
              `/api/admin/categories/images?category_id=${categoryId}`,
              {
                method: "DELETE",
              }
            );

            // Add new image
            await fetch("/api/admin/categories/images", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                category_id: categoryId,
                image_url: coverImage,
                alt_text: formData.name,
              }),
            });
          } catch (err) {
            console.error("Failed to update category image:", err);
          }
        }

        alert("Category updated successfully");
        router.push("/admin/categories");
      } else {
        alert("Failed to update category: " + data.error);
      }
    } catch (error) {
      console.error("Failed to update category:", error);
      alert("Failed to update category");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/categories">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Edit Category</h1>
          <p className="text-gray-600 mt-2">Update category information</p>
        </div>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">
              Category Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="Electronics"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">
              Slug <span className="text-red-500">*</span>
            </Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
              placeholder="electronics"
              required
              pattern="[a-z0-9-]+"
              title="Only lowercase letters, numbers, and hyphens"
            />
            <p className="text-sm text-gray-500">
              URL-friendly name (auto-generated from category name)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">
              Type <span className="text-red-500">*</span>
            </Label>
            <Select
              key={formData.type || "no-type"}
              value={formData.type}
              onValueChange={(value) => {
                console.log("Category type changed to:", value);
                setFormData({ ...formData, type: value });
              }}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select trade type" />
              </SelectTrigger>
              <SelectContent>
                {tradeTypes.map((tt) => (
                  <SelectItem key={tt.id} value={tt.id}>
                    {tt.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Optional category description..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover-image">Cover Image</Label>
            <div className="space-y-4">
              {coverImage ? (
                <div className="relative w-full h-48 border rounded-lg overflow-hidden">
                  <Image
                    src={coverImage}
                    alt="Category cover"
                    fill
                    className="object-cover"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => setCoverImage("")}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <input
                    id="cover-image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploading}
                    className="hidden"
                  />
                  <label
                    htmlFor="cover-image"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <Upload className="w-8 h-8 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {uploading
                        ? "Uploading..."
                        : "Click to upload cover image"}
                    </span>
                    <span className="text-xs text-gray-500">
                      PNG, JPG, WEBP up to 10MB
                    </span>
                  </label>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="status"
              checked={formData.status}
              onCheckedChange={(checked: boolean) =>
                setFormData({ ...formData, status: checked })
              }
            />
            <Label htmlFor="status">Active</Label>
          </div>

          <div className="flex justify-end gap-4">
            <Link href="/admin/categories">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={saving}>
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
