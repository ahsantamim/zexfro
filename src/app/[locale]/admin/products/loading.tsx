import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

export default function ProductsLoading() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <LoadingSpinner size="lg" text="Loading products..." />
    </div>
  );
}
