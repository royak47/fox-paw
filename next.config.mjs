/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true, // Enable SWC minification
  experimental: {
    swcLoader: true, // This should work with the WASM fallback
  },
};

export default nextConfig;
