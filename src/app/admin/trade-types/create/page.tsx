"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateTradeTypePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    status: true,
  });

  // Auto-generate slug from name
  const handleNameChange = (name: string) => {
    setFormData(prev => ({
      ...prev,
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/admin/trade-types", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          slug: formData.slug,
          status: formData.status,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Trade type created successfully");
        router.push("/admin/trade-types");
      } else {
        alert("Failed to create trade type: " + data.error);
      }
    } catch (error) {
      console.error("Failed to create trade type:", error);
      alert("Failed to create trade type");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/trade-types">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Create New Trade Type</h1>
          <p className="text-gray-600 mt-2">Add a new trade type (e.g., Import, Export)</p>
        </div>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">
                Trade Type Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="Import"
                required
              />
              <p className="text-sm text-gray-500">
                Examples: Import, Export, Import & Export
              </p>
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
                placeholder="import"
                required
                pattern="[a-z0-9-]+"
                title="Only lowercase letters, numbers, and hyphens"
              />
              <p className="text-sm text-gray-500">
                URL-friendly name (auto-generated from trade type name)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status.toString()}
                onValueChange={(value) =>
                  setFormData({ ...formData, status: value === 'true' })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Active</SelectItem>
                  <SelectItem value="false">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-gray-500">
                Active trade types appear in product forms
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Link href="/admin/trade-types">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Trade Type"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

