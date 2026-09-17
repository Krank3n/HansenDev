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
  async rewrites() {
    return [];
  },
  // Retired programmatic URLs. The rules live in data/seo/redirects.ts so they stay
  // derived from the SEO datasets; next.config.js is CommonJS and cannot import the
  // TypeScript module, so the shape is mirrored here. Keep the two in step when
  // retiring anything else.
  async redirects() {
    const retiredServices = ['website-redesign', 'seo'];
    // Location articles merged into locations.ts `localInsight`; slug -> suburb.
    const mergedLocationArticles = [
      ['web-and-ai-integration-services-for-atherton-tablelands-businesses', 'atherton'],
      ['web-and-ai-integration-services-for-cairns-cbd-businesses', 'cairns-cbd'],
      ['web-and-ai-integration-services-for-cairns-northern-beaches-palm-cove-trinity-beach', 'palm-cove'],
      ['web-and-ai-integration-services-for-innisfail-and-cassowary-coast-businesses', 'innisfail'],
      ['web-and-ai-integration-services-for-kuranda-village-businesses', 'kuranda'],
      ['web-and-ai-integration-services-for-mareeba-businesses', 'mareeba'],
      ['web-and-ai-integration-services-for-mission-beach-businesses', 'mission-beach'],
      ['web-and-ai-integration-services-for-port-douglas-businesses', 'port-douglas'],
    ];
    return [
      ...retiredServices.map((slug) => ({
        source: `/services/${slug}/:location`,
        destination: `/services/${slug}`,
        statusCode: 301,
      })),
      ...mergedLocationArticles.map(([slug, location]) => ({
        source: `/articles/hansendev/${slug}`,
        destination: `/services/ai-integration/${location}`,
        statusCode: 301,
      })),
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
