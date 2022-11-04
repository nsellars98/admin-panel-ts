/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.dribbble.com',
      },
      {
        protocol: 'https',
        hostname: '**.shopify.com'
      }
    ],
  },

}

module.exports = nextConfig


