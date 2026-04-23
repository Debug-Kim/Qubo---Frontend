import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow all origins for local images; add domains as needed for remote
    remotePatterns: [],
  },
  // Silence the cross-origin warning in dev for canvas/3D
  experimental: {},
};

export default nextConfig;
