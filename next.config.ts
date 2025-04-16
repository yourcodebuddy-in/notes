import type { NextConfig } from "next";
import "./env.config";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
