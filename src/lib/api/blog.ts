import prisma from "@/lib/db/prisma";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorImage: string | null;
  coverImage: string | null;
  published: boolean;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export async function getAllBlogPosts(filters?: {
  category?: string | null;
  search?: string | null;
  publishedOnly?: boolean;
}): Promise<BlogPost[]> {
  try {
    const where: any = {};

    // Only show published posts on frontend by default
    if (filters?.publishedOnly !== false) {
      where.published = true;
    }

    if (filters?.category) {
      where.category = filters.category;
    }

    if (filters?.search) {
      where.OR = [
        { title: { contains: filters.search, mode: "insensitive" } },
        { excerpt: { contains: filters.search, mode: "insensitive" } },
        { content: { contains: filters.search, mode: "insensitive" } },
      ];
    }

    const posts = await prisma.blogPost.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { id },
    });

    return post;
  } catch (error) {
    console.error("Error fetching blog post by ID:", error);
    return null;
  }
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug },
    });

    return post;
  } catch (error) {
    console.error("Error fetching blog post by slug:", error);
    return null;
  }
}

export async function createBlogPost(
  data: Partial<BlogPost>
): Promise<BlogPost> {
  try {
    console.log("Creating blog post with data:", {
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt?.substring(0, 50),
      category: data.category,
      author: data.author,
      coverImage: data.coverImage,
      published: data.published,
    });

    const post = await prisma.blogPost.create({
      data: {
        title: data.title!,
        slug: data.slug!,
        excerpt: data.excerpt!,
        content: data.content!,
        category: data.category!,
        author: data.author!,
        authorImage: data.authorImage || null,
        coverImage: data.coverImage || null,
        published: data.published || false,
        publishedAt: data.published ? new Date() : null,
      },
    });

    console.log("Blog post created successfully:", post.id);
    return post;
  } catch (error) {
    console.error("Error creating blog post - Full error:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to create blog post: ${error.message}`);
    }
    throw new Error("Failed to create blog post");
  }
}

export async function updateBlogPost(
  id: string,
  data: Partial<BlogPost>
): Promise<BlogPost | null> {
  try {
    const updateData: any = { ...data };

    // If publishing for the first time, set publishedAt
    if (data.published && !data.publishedAt) {
      const existingPost = await prisma.blogPost.findUnique({
        where: { id },
      });
      if (existingPost && !existingPost.published) {
        updateData.publishedAt = new Date();
      }
    }

    const post = await prisma.blogPost.update({
      where: { id },
      data: updateData,
    });

    return post;
  } catch (error) {
    console.error("Error updating blog post:", error);
    return null;
  }
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  try {
    await prisma.blogPost.delete({
      where: { id },
    });

    return true;
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return false;
  }
}

export async function getBlogCategories(): Promise<string[]> {
  try {
    const categories = await prisma.blogPost.findMany({
      where: { published: true },
      select: { category: true },
      distinct: ["category"],
    });

    return categories.map((c) => c.category);
  } catch (error) {
    console.error("Error fetching blog categories:", error);
    return [];
  }
}
