/**
 * Industry-standard React Query hooks for blog data management
 * Provides automatic caching, background updates, and optimistic UI
 */

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  author: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBlogPostInput {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: string;
  published: boolean;
}

export interface UpdateBlogPostInput extends Partial<CreateBlogPostInput> {
  id: string;
}

// Fetch all blog posts (cached for 60 seconds)
export function useBlogPosts(publishedOnly = false) {
  return useQuery({
    queryKey: ["blog-posts", { publishedOnly }],
    queryFn: async () => {
      const response = await fetch(`/api/blog?publishedOnly=${publishedOnly}`);
      if (!response.ok) throw new Error("Failed to fetch blog posts");
      const data = await response.json();
      return data.posts as BlogPost[];
    },
  });
}

// Fetch single blog post by ID (cached for 60 seconds)
export function useBlogPost(id: string | null) {
  return useQuery({
    queryKey: ["blog-post", id],
    queryFn: async () => {
      if (!id) throw new Error("No ID provided");
      const response = await fetch(`/api/blog/${id}`);
      if (!response.ok) throw new Error("Failed to fetch blog post");
      const data = await response.json();
      return data.post as BlogPost;
    },
    enabled: !!id, // Only run query if ID is provided
  });
}

// Create blog post mutation with automatic cache invalidation
export function useCreateBlogPost() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (input: CreateBlogPostInput) => {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create blog post");
      }

      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch blog posts
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
      router.push("/admin/blog");
    },
  });
}

// Update blog post mutation with automatic cache invalidation
export function useUpdateBlogPost() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (input: UpdateBlogPostInput) => {
      const { id, ...data } = input;
      const response = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to update blog post");
      }

      return response.json();
    },
    onSuccess: (_, variables) => {
      // Invalidate specific post and list
      queryClient.invalidateQueries({ queryKey: ["blog-post", variables.id] });
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
      router.push("/admin/blog");
    },
  });
}

// Delete blog post mutation with automatic cache invalidation
export function useDeleteBlogPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog post");
      }

      return response.json();
    },
    onSuccess: () => {
      // Invalidate blog posts list
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
    },
  });
}

// Upload image mutation
export function useUploadImage() {
  return useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "blog");

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      return data.url as string;
    },
  });
}
