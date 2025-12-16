"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface CardSkeletonProps {
  showHeader?: boolean;
  contentLines?: number;
}

export function CardSkeleton({ 
  showHeader = true, 
  contentLines = 3 
}: CardSkeletonProps) {
  return (
    <Card className="border-none shadow-sm rounded-none">
      {showHeader && (
        <CardHeader>
          <Skeleton className="h-6 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
      )}
      <CardContent>
        <div className="space-y-3">
          {Array.from({ length: contentLines }).map((_, i) => (
            <Skeleton 
              key={i} 
              className="h-4" 
              style={{ width: `${100 - (i * 10)}%` }} 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

