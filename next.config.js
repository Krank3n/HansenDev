/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect /quote-tool to the static Expo web build
  async rewrites() {
    return [
      {
        source: '/quote-tool',
        destination: '/quote-tool/index.html',
      },
    ];
  },
};

module.exports = nextConfig;
