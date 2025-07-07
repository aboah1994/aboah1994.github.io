import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: false, // You might need to set this to false if encountering issues
  trailingSlash: true, // Optional: ensures trailing slashes for routes, can help with some static hosting
  assetPrefix: "/aboah1994.github.io",
  basePath: "/aboah1994.github.io",
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization by default
  },
};

export default nextConfig;
