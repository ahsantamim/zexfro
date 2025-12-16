"use client";

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
import { TableSkeleton } from "./loading";

interface BlogPostsTableProps {
  loading?: boolean;
}

export function BlogPostsTable({ loading = false }: BlogPostsTableProps) {
  if (loading) {
    return <TableSkeleton rows={5} columns={6} />;
  }
  // Sample data - replace with actual data from API
  const posts = [
    {
      id: 1,
      title: "Understanding EU Trade Regulations",
      category: "Regulations",
      author: "Admin",
      status: "published",
      date: "Dec 12, 2024"
    },
    {
      id: 2,
      title: "Top 10 Export Products in 2024",
      category: "Insights",
      author: "Admin",
      status: "published",
      date: "Dec 10, 2024"
    },
    {
      id: 3,
      title: "How to Start Importing Business",
      category: "Guides",
      author: "Admin",
      status: "draft",
      date: "Dec 8, 2024"
    },
  ];

  return (
    <Card className="border-none shadow-sm rounded-none overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="font-bold text-gray-900">Title</TableHead>
              <TableHead className="font-bold text-gray-900">Category</TableHead>
              <TableHead className="font-bold text-gray-900">Author</TableHead>
              <TableHead className="font-bold text-gray-900">Status</TableHead>
              <TableHead className="font-bold text-gray-900">Date</TableHead>
              <TableHead className="text-right font-bold text-gray-900">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-32 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <FileText className="w-12 h-12 text-gray-300" />
                    <p className="text-gray-600">No blog posts yet</p>
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
                    <Badge variant="outline" className="border-[#0a4a9e] text-[#0a4a9e]">
                      {post.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600">{post.author}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        post.status === "published"
                          ? "bg-green-50 text-green-700 hover:bg-green-50"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                      }
                    >
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600">{post.date}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-blue-50 hover:text-[#0a4a9e]"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-blue-50 hover:text-[#0a4a9e]"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-red-50 hover:text-red-600"
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
