"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
};

export function Spinner({ size = "md", className }: SpinnerProps) {
  return (
    <Loader2
      className={cn(
        "animate-spin text-[#0a4a9e]",
        sizeClasses[size],
        className
      )}
    />
  );
}

export function PageSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center space-y-4">
        <Spinner size="xl" />
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}

export function FullPageSpinner() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center space-y-4">
        <Spinner size="xl" />
        <p className="text-gray-900 font-semibold text-lg">Loading...</p>
      </div>
    </div>
  );
}

