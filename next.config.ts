import type { NextConfig } from "next";
import dns from "node:dns";

// Prioritize IPv4 over IPv6 to prevent ECONNRESET / UND_ERR_CONNECT_TIMEOUT issues with TMDB (AWS CloudFront)
dns.setDefaultResultOrder("ipv4first");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
};

export default nextConfig;
