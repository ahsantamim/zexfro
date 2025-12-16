"use client";

import { BlogPostsTable } from "@/components/admin/BlogPostsTable";
import { PageActions } from "@/components/admin/PageActions";
import { LoadingWrapper } from "@/components/admin/LoadingWrapper";
import { PageHeaderSkeleton } from "@/components/admin/loading";

export default function AdminBlogPage() {
  return (
    <LoadingWrapper>
      {(loading) => (
        <div className="space-y-6">
          {loading ? (
            <>
              <PageHeaderSkeleton />
              <BlogPostsTable loading={true} />
            </>
          ) : (
            <>
              <PageActions
                title="Blog Management"
                description="Manage your blog posts"
                createButtonText="Create New Post"
                createLink="/admin/blog/create"
              />
              <BlogPostsTable />
            </>
          )}
        </div>
      )}
    </LoadingWrapper>
  );
}
