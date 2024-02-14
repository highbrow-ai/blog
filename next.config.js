/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  env: {
    MICROCMS_API_KEY: 'cwJSEyPIqxIbSsTeXWlhtPde2bzLnpd88dtX',
    MICROCMS_SERVICE_DOMAIN: 'jqyxa0b0wm',
    BASE_URL: 'https://highbrow-ai.github.io/blog/',
  },
};

module.exports = nextConfig;
