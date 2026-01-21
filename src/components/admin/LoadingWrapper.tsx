"use client";

import { useState, useEffect, ReactNode } from "react";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

interface LoadingWrapperProps {
  children: ReactNode;
  delay?: number;
  loadingText?: string;
}

export function LoadingWrapper({
  children,
  delay = 500,
  loadingText = "Loading...",
}: LoadingWrapperProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <LoadingSpinner size="lg" text={loadingText} />
      </div>
    );
  }

  return <>{children}</>;
}
