import { ProductForm } from "@/components/admin/forms/ProductForm";

export default function CreateProductPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Create New Product</h1>
        <p className="text-gray-600 mt-2">Add a new product to your catalog</p>
      </div>
      <ProductForm />
    </div>
  );
}
