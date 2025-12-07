import { Product } from "@/lib/api/products";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
          <p className="text-gray-600">Product Image</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl text-blue-600 font-bold mb-6">
            ${product.price}
          </p>
          <p className="text-gray-600 mb-8">{product.description}</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
