import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.unsplash.com",
      "pixabay.com",
      "worktok-stage-app-data.s3.me-south-1.amazonaws.com",
      "basheerbucket.s3.me-south-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
