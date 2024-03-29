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
      },
      {
        protocol: 'https',
        hostname: 'boltagency.ca'
      }
    ],
  },
  env: {
    FIREBASE_APIKEY: 'AIzaSyDegK-SUXxGM5KJlTtlcCBQqKdkNk6n9SU',
    FIREBASE_APP_ID: '1:637236465117:web:e0c30f8f817d0be9303a34',
  },
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['Merienda_One'] } },
      { loader: '@next/font/google', options: { subsets: ['Saira_Extra_Condensed'] } },
      { loader: '@next/font/google', options: { subsets: ['Anonymous_Pro'] } }, 
      { loader: '@next/font/google', options: { subsets: ['Bungee_Shade'] } }, 
    ],
  },

}

module.exports = nextConfig


