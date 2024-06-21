// next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tailwindui.com",
      "www.imgeorgiev.com",
      "avatars.githubusercontent.com",
      "yt3.googleusercontent.com",
      "zkahgfoymdwxmhuxqhub.supabase.co",
      "cdn-dkold.nitrocdn.com",
      "https://blog.dataiku.com/",
    ],
  },
};

module.exports = withContentlayer(nextConfig);
