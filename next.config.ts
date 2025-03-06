import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["aceternity.com"], // Add the correct hostname here
    formats: ["image/avif", "image/webp"], // Enable modern formats for better performance
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        pathname: "/images/products/thumbnails/new/*", // Allow images from this path
      },
    ],
  },
};

export default nextConfig;
