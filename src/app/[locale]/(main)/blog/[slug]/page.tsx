import { notFound } from "next/navigation";
import { BlogPost } from "@/components/blog/BlogPost";
import { BlogComments } from "@/components/blog/BlogComments";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/api/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <BlogPost post={post} />
      <RelatedPosts currentPostId={post.id} category={post.category} />
      <BlogComments postId={post.id} />
    </main>
  );
}
