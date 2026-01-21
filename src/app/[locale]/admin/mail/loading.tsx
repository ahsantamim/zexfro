import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

export default function MailLoading() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <LoadingSpinner size="lg" text="Loading mail settings..." />
    </div>
  );
}
