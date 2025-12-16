"use client";

import { ProductsTable } from "@/components/admin/ProductsTable";
import { PageActions } from "@/components/admin/PageActions";
import { LoadingWrapper } from "@/components/admin/LoadingWrapper";
import { PageHeaderSkeleton } from "@/components/admin/loading";

export default function AdminProductsPage() {
  return (
    <LoadingWrapper>
      {(loading) => (
        <div className="space-y-6">
          {loading ? (
            <>
              <PageHeaderSkeleton />
              <ProductsTable loading={true} />
            </>
          ) : (
            <>
              <PageActions
                title="Products Management"
                description="Manage your product catalog"
                createButtonText="Add New Product"
                createLink="/admin/products/create"
              />
              <ProductsTable />
            </>
          )}
        </div>
      )}
    </LoadingWrapper>
  );
}
