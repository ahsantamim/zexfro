import { ProductsTable } from "@/components/admin/ProductsTable";
import { PageActions } from "@/components/admin/PageActions";

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <PageActions
        title="Products Management"
        description="Manage your product catalog"
        createButtonText="Add New Product"
        createLink="/admin/products/create"
      />
      <ProductsTable />
    </div>
  );
}
