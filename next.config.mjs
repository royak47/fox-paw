/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true, // Keep SWC minification enabled
};

export default nextConfig;
