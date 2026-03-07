/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['react-notion-x', 'notion-client', 'notion-utils', 'notion-types'],
};

export default nextConfig;
