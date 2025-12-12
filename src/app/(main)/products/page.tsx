import { PageHeader } from "@/components/ui/PageHeader";
import { ProductsGrid } from "@/components/products/ProductsGrid";
import { ProductsFilter } from "@/components/products/ProductsFilter";

export const metadata = {
  title: "Products - Company Profile",
  description: "Browse our range of products",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-60">
      <PageHeader
        title="Our Products"
        description="Explore our innovative product offerings"
      />
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <ProductsFilter />
          <ProductsGrid />
        </div>
      </section>
    </main>
  );
}
