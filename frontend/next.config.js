/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.pixabay.com", "localhost", "imgur.com", "ipfs.io"],
  },
};

module.exports = nextConfig;
