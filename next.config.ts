import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "jjkczpvsxzglqursnhya.supabase.co",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },
  transpilePackages: ["react-circle-flags", "country-data-list"],
};

export default nextConfig;
