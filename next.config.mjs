/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
};
module.exports = {
  experimental: {
    swcLoader: {
      useWasm: true,
    },
  },
};

export default nextConfig;
