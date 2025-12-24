import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogPost as BlogPostType } from "@/lib/api/blog";

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="min-h-screen pt-32 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#0a4a9e] hover:text-blue-700 mb-8 font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative bg-gray-200 rounded-xl h-96 mb-8 overflow-hidden shadow-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Content Container */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block bg-blue-50 text-[#0a4a9e] text-sm font-semibold px-4 py-2 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#0a4a9e] rounded-full flex items-center justify-center text-white font-semibold">
                {post.author.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-600">
                  {new Date(
                    post.publishedAt || post.createdAt
                  ).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Excerpt */}
          <div className="text-xl text-gray-600 mb-8 italic border-l-4 border-[#0a4a9e] pl-6">
            {post.excerpt}
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#0a4a9e] prose-strong:text-gray-900">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
    </article>
  );
}
