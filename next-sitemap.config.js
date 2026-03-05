/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hansendev.com.au',
  generateRobotsTxt: false, // keep existing robots.txt (has custom AI crawler rules)
  sitemapSize: 7000,
  exclude: [
    '/demo/*',        // dynamic demo pages — exclude from sitemap
    '/quote-tool',    // embedded Expo app
    '/quote-tool/*',
  ],
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority based on path
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
    } else if (path.startsWith('/projects/quotemate') || path.startsWith('/projects/shredindex') || path.startsWith('/projects/webfacelift') || path.startsWith('/projects/chatspark')) {
      priority = 0.9;
    } else if (path.match(/-(cairns|development|consulting|integration)/)) {
      priority = 0.9; // service pages
    } else if (path === '/our-work') {
      priority = 0.8;
    } else if (path.startsWith('/articles')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/privacy-policy' || path === '/terms-of-service') {
      priority = 0.5;
      changefreq = 'yearly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
