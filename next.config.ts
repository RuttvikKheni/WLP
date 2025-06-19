import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.unsplash.com",
      "worktok-dev-app-data.s3.me-south-1.amazonaws.com",
      "worktok-stage-app-data.s3.me-south-1.amazonaws.com",
      "worktok-prod-app-data.s3.me-south-1.amazonaws.com",
      "basheerbucket.s3.me-south-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
