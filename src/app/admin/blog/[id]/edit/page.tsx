"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { BlogPostForm } from "@/components/admin/forms/BlogPostForm";
import { useBlogPost } from "@/lib/hooks/useBlog";
import { PageLoader } from "@/components/ui/LoadingSpinner";

interface EditBlogPostPageProps {
  params: Promise<{ id: string }>;
}

export default function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  const { id } = use(params);
  const { data: post, isLoading, error } = useBlogPost(id);

  if (isLoading) {
    return <PageLoader />;
  }

  if (error || !post) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Edit Blog Post</h1>
        <p className="text-gray-600 mt-2">Update your article</p>
      </div>
      <BlogPostForm post={post} />
    </div>
  );
}
