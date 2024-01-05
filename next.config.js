// next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tailwindui.com",
      'www.imgeorgiev.com',
      'avatars.githubusercontent.com'
    ],
  },
};

module.exports = withContentlayer(nextConfig);
