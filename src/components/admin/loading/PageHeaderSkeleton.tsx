"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export function PageHeaderSkeleton() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="space-y-2">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-5 w-96" />
        </div>
        <Skeleton className="h-12 w-48 rounded-full" />
      </div>
      <Separator />
    </div>
  );
}

