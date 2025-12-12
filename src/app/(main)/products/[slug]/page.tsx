import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/products/ProductDetails";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { getProductBySlug, getAllProducts } from "@/lib/api/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - Products`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ProductDetails product={product} />
      <RelatedProducts
        currentProductId={product.id}
        category={product.category}
      />
    </main>
  );
}
