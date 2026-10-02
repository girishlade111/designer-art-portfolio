import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // static build -> out/, deployable to GitHub/Cloudflare Pages
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    ".space-z.ai",
  ],
};

export default nextConfig;
