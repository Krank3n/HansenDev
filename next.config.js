/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect /quote-tool to the static Expo web build
  async rewrites() {
    return [
      {
        source: '/quote-tool',
        destination: '/quote-tool/index.html',
      },
      // Handle _expo bundle requests from within the quote-tool
      {
        source: '/_expo/:path*',
        destination: '/quote-tool/_expo/:path*',
      },
      // Handle asset requests from within the quote-tool
      {
        source: '/assets/:path*',
        destination: '/quote-tool/assets/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
