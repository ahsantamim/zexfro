import { PageHeader } from "@/components/ui/PageHeader";
import { ProductsGrid } from "@/components/products/ProductsGrid";
import { ProductsFilter } from "@/components/products/ProductsFilter";

export const metadata = {
  title: "Products - Company Profile",
  description: "Browse our range of products",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Our Products"
        description="Explore our innovative product offerings"
      />
      <div className="container mx-auto px-4 py-16">
        <ProductsFilter />
        <ProductsGrid />
      </div>
    </main>
  );
}
