"use client";

import { CategoriesTable } from "@/components/admin/CategoriesTable";
import { PageActions } from "@/components/admin/PageActions";
import { LoadingWrapper } from "@/components/admin/LoadingWrapper";

export default function AdminCategoriesPage() {
  return (
    <LoadingWrapper loadingText="Loading categories...">
      <div className="space-y-6">
        <PageActions
          title="Categories Management"
          description="Manage product categories and hierarchies"
          createButtonText="Add New Category"
          createLink="/admin/categories/create"
        />
        <CategoriesTable />
      </div>
    </LoadingWrapper>
  );
}
