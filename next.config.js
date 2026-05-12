/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
{
    protocol: 'https',
    hostname: '**.unsplash.com', // Much safer!
    pathname: '/**',
  },
  {
    protocol: 'https',
    hostname: '**i.ibb.co.com', // Much safer!
    pathname: '/**',
  },
    ],
  },
};

export default nextConfig;