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
      },
      {
        protocol: 'https',
        hostname: 'vagazine.com'
      }
    ],
  },
  env: {
    FIREBASE_APIKEY: 'AIzaSyDegK-SUXxGM5KJlTtlcCBQqKdkNk6n9SU',
    FIREBASE_APP_ID: '1:637236465117:web:e0c30f8f817d0be9303a34',
  },
  // experimental: {
  //   fontLoaders: [
  //     { loader: '@next/font/google', options: { subsets: ['latin'] } },
  //   ],
  // },

}

module.exports = nextConfig


