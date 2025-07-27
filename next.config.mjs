/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'i.ytimg.com',
      process.env.NEXT_PUBLIC_VERCEL_URL?.replace('https://', ''),
      'arush-portfolio-omega.vercel.app', // Replace with your actual Vercel URL
    ].filter(Boolean),
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: "/_next/image",
    loader: "default",
    unoptimized: false,
  },
  // Enable React strict mode
  reactStrictMode: true,
  
  // Configure images to work with export
  trailingSlash: true,
  
  // Disable static export since we have dynamic routes
  // and we're using API routes for data fetching
  output: 'standalone',
  
  // Enable server actions for form submissions
  experimental: {
    serverActions: true,
  },
  
  // Add base path if your site is served from a subdirectory
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
