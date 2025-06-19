import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: "/",
      destination: "/home",
    },
  ],
};

export default nextConfig;
