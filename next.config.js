/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/blog',
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
