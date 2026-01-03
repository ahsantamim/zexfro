"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ProductForm } from "@/components/admin/forms/ProductForm";
import { Loader2 } from "lucide-react";

export default function EditProductPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/admin/products/${params.id}`);
        const data = await response.json();

        if (data.success) {
          setProduct(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Product Not Found
          </h1>
          <p className="text-gray-600 mt-2">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ProductForm product={product} />
    </div>
  );
}
