import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: "/",
      destination: "/home",
    },
  ],
  images: {
    domains: ["ik.imagekit.io"],
  },
};

export default nextConfig;
