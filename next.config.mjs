/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
};
export default {
  swcMinify: true,
  experimental: {
    swcLoader: {
      useWasm: true,
    },
  },
};

export default nextConfig;
