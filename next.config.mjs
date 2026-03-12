import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  webpack: (config) => {
    config.resolve ??= {};
    config.resolve.alias ??= {};

    Object.assign(config.resolve.alias, {
      'zustand/traditional$': require.resolve('zustand/traditional'),
      'zustand/vanilla$': require.resolve('zustand/vanilla')
    });

    return config;
  }
};

export default nextConfig;
