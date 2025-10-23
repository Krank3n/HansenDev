/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect /quote-tool to the static Expo web build
  async rewrites() {
    return [
      {
        source: '/quote-tool',
        destination: '/quote-tool/index.html',
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
