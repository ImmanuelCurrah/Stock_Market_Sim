/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DOMAIN: process.env.DOMAIN,
    CLIENT_ID: process.env.CLIENT_ID,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
