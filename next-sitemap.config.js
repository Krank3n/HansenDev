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
  additionalPaths: async (config) => {
    // Programmatic SEO: generate sitemap entries for all service/location combos
    const services = ['web-development', 'ai-integration', 'e-commerce', 'mobile-app-development', 'custom-software', 'technology-consulting'];
    const locations = ['cairns-cbd', 'palm-cove', 'port-douglas', 'trinity-beach', 'smithfield', 'edge-hill', 'redlynch', 'gordonvale', 'kuranda', 'mareeba', 'atherton', 'innisfail', 'mission-beach', 'mossman', 'clifton-beach', 'earlville', 'freshwater', 'whitfield', 'bentley-park', 'tully', 'ravenshoe', 'yungaburra', 'cardwell', 'babinda', 'cooktown'];
    const paths = [];
    for (const service of services) {
      for (const location of locations) {
        paths.push(await config.transform(config, `/services/${service}/${location}`));
      }
    }
    // Programmatic SEO: QuoteMate trade-specific pages
    const trades = ['carpenter', 'builder', 'electrician', 'plumber', 'landscaper', 'fencing-contractor', 'painter', 'tiler', 'concreter', 'roofer', 'handyman', 'deck-builder', 'plasterer', 'cabinet-maker', 'floor-sander', 'pool-builder', 'shed-builder'];
    for (const trade of trades) {
      paths.push(await config.transform(config, `/tools/quoting-app-for-${trade}`));
    }
    // Programmatic SEO: WebFaceLift industry-specific pages
    const industries = ['restaurant', 'dental-practice', 'real-estate-agency', 'gym-fitness', 'law-firm', 'plumber-tradie', 'accountant', 'hair-salon', 'cafe', 'mechanic', 'veterinary-clinic', 'accommodation', 'wedding-venue', 'physiotherapy', 'cleaning-service'];
    for (const industry of industries) {
      paths.push(await config.transform(config, `/solutions/ai-website-redesign-for-${industry}`));
    }
    return paths;
  },
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
    } else if (path.startsWith('/services/')) {
      priority = 0.7; // programmatic SEO - service/location pages
      changefreq = 'monthly';
    } else if (path.startsWith('/tools/')) {
      priority = 0.8; // programmatic SEO - QuoteMate trade pages
      changefreq = 'monthly';
    } else if (path.startsWith('/solutions/')) {
      priority = 0.8; // programmatic SEO - WebFaceLift industry pages
      changefreq = 'monthly';
    } else if (path.match(/-(cairns|development|consulting|integration)/)) {
      priority = 0.9; // static service pages
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
