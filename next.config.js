/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
{
    protocol: 'https',
    hostname: '**.unsplash.com', // Much safer!
    pathname: '/**',
  },
    ],
  },
};

export default nextConfig;