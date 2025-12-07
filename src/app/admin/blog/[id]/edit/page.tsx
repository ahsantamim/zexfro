import { notFound } from "next/navigation";
import { BlogPostForm } from "@/components/admin/forms/BlogPostForm";
import { getBlogPostById } from "@/lib/api/blog";

interface EditBlogPostPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPostPage({
  params,
}: EditBlogPostPageProps) {
  const { id } = await params;
  const post = await getBlogPostById(id);

  if (!post) {
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
