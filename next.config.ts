import type { NextConfig } from "next";
import path from "path";

// Ensure NEXTAUTH_URL is set for NextAuth
if (!process.env.NEXTAUTH_URL) {
  process.env.NEXTAUTH_URL = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000';
}

const nextConfig: NextConfig = {
  turbopack: process.env.NODE_ENV === 'development' ? {
    root: path.resolve(process.cwd()),
  } : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: false,
  },
  serverExternalPackages: ["pg"],
};

export default nextConfig;
