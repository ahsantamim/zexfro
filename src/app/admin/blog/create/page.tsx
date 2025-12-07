import { BlogPostForm } from "@/components/admin/forms/BlogPostForm";

export default function CreateBlogPostPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Create New Blog Post
        </h1>
        <p className="text-gray-600 mt-2">Write and publish a new article</p>
      </div>
      <BlogPostForm />
    </div>
  );
}
