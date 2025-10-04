import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mac-center.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.apple.com",
        port: "",
      }
    ],
  },
};

export default nextConfig;
