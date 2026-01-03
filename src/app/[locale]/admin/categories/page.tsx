"use client";

import { CategoriesTable } from "@/components/admin/CategoriesTable";
import { PageActions } from "@/components/admin/PageActions";
import { LoadingWrapper } from "@/components/admin/LoadingWrapper";
import { PageHeaderSkeleton } from "@/components/admin/loading";

export default function AdminCategoriesPage() {
  return (
    <LoadingWrapper>
      {(loading) => (
        <div className="space-y-6">
          {loading ? (
            <>
              <PageHeaderSkeleton />
              <CategoriesTable loading={true} />
            </>
          ) : (
            <>
              <PageActions
                title="Categories Management"
                description="Manage product categories and hierarchies"
                createButtonText="Add New Category"
                createLink="/admin/categories/create"
              />
              <CategoriesTable />
            </>
          )}
        </div>
      )}
    </LoadingWrapper>
  );
}

