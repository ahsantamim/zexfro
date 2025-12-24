/**
 * Industry-standard React Query hooks for product data management
 */

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
  categoryId: string;
  category?: {
    id: string;
    name: string;
  };
  tradeTypeId: string;
  tradeType?: {
    id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductInput {
  name: string;
  description: string;
  images: string[];
  categoryId: string;
  tradeTypeId: string;
}

export interface UpdateProductInput extends Partial<CreateProductInput> {
  id: string;
}

// Fetch all products (cached for 60 seconds)
export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("/api/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      return data.products as Product[];
    },
  });
}

// Fetch single product by ID (cached for 60 seconds)
export function useProduct(id: string | null) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      if (!id) throw new Error("No ID provided");
      const response = await fetch(`/api/products/${id}`);
      if (!response.ok) throw new Error("Failed to fetch product");
      const data = await response.json();
      return data.product as Product;
    },
    enabled: !!id,
  });
}

// Create product mutation
export function useCreateProduct() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (input: CreateProductInput) => {
      const response = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create product");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      router.push("/admin/products");
    },
  });
}

// Update product mutation
export function useUpdateProduct() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (input: UpdateProductInput) => {
      const { id, ...data } = input;
      const response = await fetch(`/api/admin/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to update product");
      }

      return response.json();
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["product", variables.id] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
      router.push("/admin/products");
    },
  });
}

// Delete product mutation
export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/admin/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
