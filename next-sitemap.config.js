const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

/**
 * Real lastmod dates.
 *
 * Every URL used to be stamped with `new Date()` at build time, so all of them
 * claimed to change on every deploy. That is a false freshness signal, and Google
 * discounts lastmod site-wide once it looks untrustworthy. Instead:
 *
 *   - Articles date from their own frontmatter (lastUpdated, else publishDate).
 *     Always accurate, always in the repo.
 *   - Everything else dates from the last commit that touched the file behind it -
 *     the page component, plus the SEO dataset for programmatic routes.
 *   - If git history isn't available (a shallow CI clone, no git at all), lastmod is
 *     omitted rather than guessed. No date beats a wrong one.
 */

const ARTICLES_DIR = path.join(__dirname, 'content', 'articles');
const SHALLOW_CLONE = fs.existsSync(path.join(__dirname, '.git', 'shallow'));

const gitDateCache = new Map();

const gitDate = (relativePath) => {
  if (SHALLOW_CLONE) return undefined;
  if (gitDateCache.has(relativePath)) return gitDateCache.get(relativePath);

  let result;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', relativePath], {
      cwd: __dirname,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    result = out ? new Date(out).toISOString() : undefined;
  } catch (err) {
    result = undefined;
  }

  gitDateCache.set(relativePath, result);
  return result;
};

// Newest of several source files - a programmatic page changes when either its
// template or its dataset does.
const newestGitDate = (...relativePaths) => {
  const dates = relativePaths.map(gitDate).filter(Boolean);
  if (!dates.length) return undefined;
  return dates.sort().pop();
};

// Frontmatter dates, read directly so the config needs no parser dependency.
const readArticleDate = (product, slug) => {
  const file = path.join(ARTICLES_DIR, product, `${slug}.md`);
  if (!fs.existsSync(file)) return undefined;

  const head = fs.readFileSync(file, 'utf8').slice(0, 2000);
  const field = (name) => {
    const match = head.match(new RegExp('^' + name + ':\\s*["\']?([0-9]{4}-[0-9]{2}-[0-9]{2})', 'm'));
    return match ? match[1] : undefined;
  };

  const date = field('lastUpdated') || field('publishDate');
  return date ? new Date(`${date}T00:00:00+10:00`).toISOString() : undefined;
};

const newestArticleDateForProduct = (product) => {
  const dir = path.join(ARTICLES_DIR, product);
  if (!fs.existsSync(dir)) return undefined;
  const dates = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => readArticleDate(product, f.replace(/\.md$/, '')))
    .filter(Boolean);
  return dates.length ? dates.sort().pop() : undefined;
};

const lastmodFor = (urlPath) => {
  const segments = urlPath.split('/').filter(Boolean);

  if (segments[0] === 'articles') {
    if (segments.length === 3) return readArticleDate(segments[1], segments[2]);
    if (segments.length === 2) return newestArticleDateForProduct(segments[1]);
    return newestGitDate('pages/articles/index.tsx');
  }

  if (segments[0] === 'services') {
    if (segments.length === 3) {
      return newestGitDate('pages/services/[service]/[location].tsx', 'data/seo/services.ts', 'data/seo/locations.ts');
    }
    if (segments.length === 2) {
      return newestGitDate('pages/services/[service]/index.tsx', 'data/seo/services.ts');
    }
    return newestGitDate('pages/services/index.tsx', 'data/seo/services.ts');
  }

  if (segments[0] === 'tools') {
    return segments.length === 2
      ? newestGitDate('pages/tools/[trade].tsx', 'data/seo/trades.ts')
      : newestGitDate('pages/tools/index.tsx', 'data/seo/trades.ts');
  }

  if (segments[0] === 'solutions') {
    return segments.length === 2
      ? newestGitDate('pages/solutions/[industry].tsx', 'data/seo/industries.ts')
      : newestGitDate('pages/solutions/index.tsx', 'data/seo/industries.ts');
  }

  if (!segments.length) return newestGitDate('pages/index.tsx');

  // Everything else maps straight onto a page component.
  return newestGitDate(`pages/${segments.join('/')}.tsx`);
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hansendev.com.au',
  generateRobotsTxt: false, // keep existing robots.txt (has custom AI crawler rules)
  sitemapSize: 7000,
  exclude: [
    '/demo/*',        // dynamic demo pages — exclude from sitemap
  ],
  // No additionalPaths: next-sitemap discovers every pre-rendered page from the build,
  // so the programmatic routes come through on their own. The old hand-listed set had
  // already drifted out of step with data/seo/services.ts.
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority based on path
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
    } else if (path.startsWith('/projects/quotemate') || path.startsWith('/projects/shredindex') || path.startsWith('/projects/webfacelift') || path.startsWith('/projects/chatspark') || path.startsWith('/projects/callkatie')) {
      priority = 0.9;
    } else if (path.startsWith('/services/')) {
      // /services/<service> are the hub pages; /services/<service>/<location> the leaves
      const isHub = path.split('/').filter(Boolean).length === 2;
      priority = isHub ? 0.8 : 0.7;
      changefreq = 'monthly';
    } else if (path.startsWith('/tools/')) {
      priority = 0.8; // programmatic SEO - QuoteMate trade pages
      changefreq = 'monthly';
    } else if (path.startsWith('/solutions/')) {
      priority = 0.8; // programmatic SEO - WebFaceLift industry pages
      changefreq = 'monthly';
    } else if (path.startsWith('/about/')) {
      priority = 0.8; // author entity page - carries the site's E-E-A-T signals
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
      lastmod: lastmodFor(path),
    };
  },
};
