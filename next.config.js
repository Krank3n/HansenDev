/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'webfacelift.app',
      },
      {
        protocol: 'https',
        hostname: 'instantalloyscaffolding.com.au',
      },
      {
        protocol: 'https',
        hostname: 'www.beachesfamilypractice.com.au',
      },
      {
        protocol: 'https',
        hostname: 'www.sailstructures.com.au',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },
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
  // Handle Node.js modules that should only run on the server
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't bundle these Node.js modules on the client
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
