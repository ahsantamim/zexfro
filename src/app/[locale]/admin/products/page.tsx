"use client";

import { ProductsTable } from "@/components/admin/ProductsTable";
import { PageActions } from "@/components/admin/PageActions";
import { LoadingWrapper } from "@/components/admin/LoadingWrapper";

export default function AdminProductsPage() {
  return (
    <LoadingWrapper loadingText="Loading products...">
      <div className="space-y-6">
        <PageActions
          title="Products Management"
          description="Manage your product catalog"
          createButtonText="Add New Product"
          createLink="/admin/products/create"
        />
        <ProductsTable />
      </div>
    </LoadingWrapper>
  );
}
