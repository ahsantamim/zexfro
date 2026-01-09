import { prisma } from "@/lib/db/prisma";

export interface DashboardStats {
  totalProducts: number;
  totalBlogPosts: number;
  totalCategories: number;
  totalUsers: number;
  totalRegistrations: number;
  publishedBlogPosts: number;
  draftBlogPosts: number;
}

export interface RecentActivityItem {
  id: string;
  type: "product" | "blog" | "category" | "user";
  title: string;
  description: string;
  createdAt: Date;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const [
      totalProducts,
      totalBlogPosts,
      totalUsers,
      totalRegistrations,
      publishedBlogPosts,
      draftBlogPosts,
    ] = await Promise.all([
      prisma.product.count(),
      prisma.blogPost.count(),
      prisma.user.count(),
      prisma.registration.count(),
      prisma.blogPost.count({ where: { published: true } }),
      prisma.blogPost.count({ where: { published: false } }),
    ]);

    // Get categories count using raw query since it's not in Prisma schema
    let totalCategories = 0;
    try {
      const result = await prisma.$queryRaw<Array<{ count: bigint }>>`
        SELECT COUNT(*) FROM categories
      `;
      totalCategories = Number(result[0].count);
    } catch (error) {
      console.error("Error counting categories:", error);
    }

    return {
      totalProducts,
      totalBlogPosts,
      totalCategories,
      totalUsers,
      totalRegistrations,
      publishedBlogPosts,
      draftBlogPosts,
    };
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return {
      totalProducts: 0,
      totalBlogPosts: 0,
      totalCategories: 0,
      totalUsers: 0,
      totalRegistrations: 0,
      publishedBlogPosts: 0,
      draftBlogPosts: 0,
    };
  }
}

export async function getRecentActivity(): Promise<RecentActivityItem[]> {
  try {
    const activities: RecentActivityItem[] = [];

    // Get recent products using Prisma
    try {
      const recentProducts = await prisma.product.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          category: true,
          createdAt: true,
        },
      });

      recentProducts.forEach((product) => {
        activities.push({
          id: product.id,
          type: "product",
          title: "New product added",
          description: product.name,
          createdAt: product.createdAt,
        });
      });
    } catch (error) {
      console.error("Error fetching recent products:", error);
    }

    // Get recent blog posts
    try {
      const recentBlogPosts = await prisma.blogPost.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          category: true,
          published: true,
          createdAt: true,
        },
      });

      recentBlogPosts.forEach((post) => {
        activities.push({
          id: post.id,
          type: "blog",
          title: post.published ? "Blog post published" : "Blog post created",
          description: `${post.category} - ${post.title}`,
          createdAt: post.createdAt,
        });
      });
    } catch (error) {
      console.error("Error fetching recent blog posts:", error);
    }

    // Get recent categories using raw query
    try {
      const recentCategories = await prisma.$queryRaw<
        Array<{ id: string; name: string; created_at: Date }>
      >`
        SELECT id, name, created_at 
        FROM categories 
        ORDER BY created_at DESC 
        LIMIT 3
      `;

      recentCategories.forEach((category) => {
        activities.push({
          id: category.id,
          type: "category",
          title: "Category created",
          description: category.name,
          createdAt: category.created_at,
        });
      });
    } catch (error) {
      console.error("Error fetching recent categories:", error);
    }

    // Sort by date and return top 8
    return activities
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 8);
  } catch (error) {
    console.error("Error fetching recent activity:", error);
    return [];
  }
}
