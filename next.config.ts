import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        pathname: "/images/products/thumbnails/new/*", // Allow images from this path
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**", // Allow all images from Freepik
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**", // Allow all images from this domain
      },
    ],
  },
};

export default nextConfig;
