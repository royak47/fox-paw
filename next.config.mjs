/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  experimental: {
    swcLoader: {
      useWasm: true,
    },
  },
};

export default nextConfig;
