/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.3cx.fr',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  // Disable server-specific features
  experimental: {
    serverActions: false,
  },
};

module.exports = nextConfig;