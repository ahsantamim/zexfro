import { BlogPost as BlogPostType } from "@/lib/api/blog";

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="bg-gray-200 rounded-lg h-96 mb-8 flex items-center justify-center">
        <p className="text-gray-600">Cover Image</p>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

      <div className="flex items-center gap-4 mb-8 text-gray-600">
        <span>{post.author}</span>
        <span>•</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>

      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}
