interface RelatedProductsProps {
  currentProductId: string;
  category: string;
}

export function RelatedProducts({
  currentProductId,
  category,
}: RelatedProductsProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <p className="col-span-full text-center text-gray-600">
            Related products will load here
          </p>
        </div>
      </div>
    </section>
  );
}
