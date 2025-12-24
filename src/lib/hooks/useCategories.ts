/**
 * Industry-standard React Query hooks for category data management
 */

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export interface Category {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCategoryInput {
  name: string;
  description?: string;
  image?: string;
}

export interface UpdateCategoryInput extends Partial<CreateCategoryInput> {
  id: string;
}

// Fetch all categories (cached for 60 seconds)
export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch("/api/admin/categories");
      if (!response.ok) throw new Error("Failed to fetch categories");
      const data = await response.json();
      return data.categories as Category[];
    },
  });
}

// Fetch single category by ID (cached for 60 seconds)
export function useCategory(id: string | null) {
  return useQuery({
    queryKey: ["category", id],
    queryFn: async () => {
      if (!id) throw new Error("No ID provided");
      const response = await fetch(`/api/admin/categories/${id}`);
      if (!response.ok) throw new Error("Failed to fetch category");
      const data = await response.json();
      return data.category as Category;
    },
    enabled: !!id,
  });
}

// Create category mutation
export function useCreateCategory() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (input: CreateCategoryInput) => {
      const response = await fetch("/api/admin/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create category");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      router.push("/admin/categories");
    },
  });
}

// Update category mutation
export function useUpdateCategory() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (input: UpdateCategoryInput) => {
      const { id, ...data } = input;
      const response = await fetch(`/api/admin/categories/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to update category");
      }

      return response.json();
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["category", variables.id] });
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      router.push("/admin/categories");
    },
  });
}

// Delete category mutation
export function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/admin/categories/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete category");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
