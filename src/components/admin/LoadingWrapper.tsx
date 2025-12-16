"use client";

import { useState, useEffect, ReactNode } from "react";

interface LoadingWrapperProps {
  children: (loading: boolean) => ReactNode;
  delay?: number;
}

export function LoadingWrapper({ children, delay = 800 }: LoadingWrapperProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return <>{children(loading)}</>;
}

