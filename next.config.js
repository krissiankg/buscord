/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/blog', destination: '/', permanent: false },
      { source: '/blog/:slug', destination: '/', permanent: false },
      { source: '/pricing', destination: '/contact', permanent: false },
      { source: '/changelog', destination: '/', permanent: false },
    ];
  },
};

module.exports = nextConfig;
