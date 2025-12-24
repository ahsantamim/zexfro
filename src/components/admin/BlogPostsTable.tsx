"use client";

import { useRouter } from "next/navigation";
import { Edit, Trash2, Eye, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { TableLoader } from "@/components/ui/LoadingSpinner";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  published: boolean;
  createdAt: string;
}

async function fetchBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch("/api/blog?publishedOnly=false");
  if (!response.ok) throw new Error("Failed to fetch blog posts");
  const data = await response.json();
  return data.posts;
}

async function deleteBlogPost(id: string): Promise<void> {
  const response = await fetch(`/api/blog/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Failed to delete blog post");
}

export function BlogPostsTable() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchBlogPosts,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteBlogPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
    },
  });

  const handleDelete = async (id: string) => {
    if (
      !confirm(
        "Are you sure you want to delete this blog post? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      await deleteMutation.mutateAsync(id);
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("An error occurred while deleting the blog post.");
    }
  };

  const handleView = (slug: string) => {
    window.open(`/blog/${slug}`, "_blank");
  };

  if (isLoading) {
    return (
      <Card className="border-none shadow-sm rounded-lg overflow-hidden">
        <div className="p-6">
          <TableLoader rows={5} />
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-none shadow-sm rounded-lg overflow-hidden">
        <div className="p-6 text-center text-red-600">
          <p>Failed to load blog posts. Please try again.</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-sm rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="font-bold text-gray-900">Title</TableHead>
              <TableHead className="font-bold text-gray-900">
                Category
              </TableHead>
              <TableHead className="font-bold text-gray-900">Author</TableHead>
              <TableHead className="font-bold text-gray-900">Status</TableHead>
              <TableHead className="font-bold text-gray-900">Date</TableHead>
              <TableHead className="text-right font-bold text-gray-900">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!posts || posts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-32 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <FileText className="w-12 h-12 text-gray-300" />
                    <p className="text-gray-600">No blog posts yet</p>
                    <Button
                      onClick={() => router.push("/admin/blog/create")}
                      className="mt-2"
                    >
                      Create First Post
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              posts.map((post) => (
                <TableRow key={post.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-900 max-w-md">
                    {post.title}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="border-[#0a4a9e] text-[#0a4a9e]"
                    >
                      {post.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600">{post.author}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        post.published
                          ? "bg-green-50 text-green-700 hover:bg-green-50"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                      }
                    >
                      {post.published ? "published" : "draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-blue-50 hover:text-[#0a4a9e]"
                        onClick={() => handleView(post.slug)}
                        title="View on frontend"
                        disabled={!post.published}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-blue-50 hover:text-[#0a4a9e]"
                        onClick={() =>
                          router.push(`/admin/blog/${post.id}/edit`)
                        }
                        title="Edit post"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-red-50 hover:text-red-600"
                        onClick={() => handleDelete(post.id)}
                        title="Delete post"
                        disabled={deleteMutation.isPending}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
