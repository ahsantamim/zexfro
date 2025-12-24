"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  coverImage: string | null;
  publishedAt: string | null;
  createdAt: string;
}

interface RelatedPostsProps {
  currentPostId: string;
  category: string;
}

export function RelatedPosts({ currentPostId, category }: RelatedPostsProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRelatedPosts();
  }, [currentPostId, category]);

  const fetchRelatedPosts = async () => {
    try {
      const response = await fetch(
        `/api/blog?category=${encodeURIComponent(category)}`
      );
      if (response.ok) {
        const data = await response.json();
        // Filter out current post and limit to 3
        const filtered = data.posts
          .filter((post: BlogPost) => post.id !== currentPostId)
          .slice(0, 3);
        setPosts(filtered);
      }
    } catch (error) {
      console.error("Error fetching related posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
              >
                <div className="bg-gray-200 h-48 w-full" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 bg-gray-200">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-[#0a4a9e] bg-blue-50 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 line-clamp-2 hover:text-[#0a4a9e] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {new Date(
                          post.publishedAt || post.createdAt
                        ).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
