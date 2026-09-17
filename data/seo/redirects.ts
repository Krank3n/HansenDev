// data/seo/redirects.ts
// Permanent redirects for retired programmatic URLs.
//
// These are derived from the SEO datasets rather than hand-listed, so retiring a
// service (or later, a location) is a data change and the 301s follow. Consumed by
// next.config.js, which cannot import TypeScript directly - see the note there.

import { getRetiredLocationPageServiceSlugs } from './services';

export interface Redirect {
  source: string;
  destination: string;
  // 301 rather than Next's `permanent: true`, which emits 308. Google treats the two
  // the same; 301 is what SEO tooling and log analysis expect to see.
  statusCode: 301;
}

// /services/<retired-service>/<any-location> -> the service hub, which covers the
// same topic for the whole region. One rule per service rather than one per URL.
export const retiredServiceLocationRedirects = (): Redirect[] =>
  getRetiredLocationPageServiceSlugs().map(slug => ({
    source: `/services/${slug}/:location`,
    destination: `/services/${slug}`,
    statusCode: 301,
  }));

// The /articles/hansendev/web-and-ai-integration-services-for-* set targeted the same
// queries as the suburb pages beneath /services. Their genuinely local material now
// lives in locations.ts as `localInsight`, and the article URLs point at the suburb's
// AI integration page.
export const mergedLocationArticleRedirects = (): Redirect[] =>
  ([
    ['web-and-ai-integration-services-for-atherton-tablelands-businesses', 'atherton'],
    ['web-and-ai-integration-services-for-cairns-cbd-businesses', 'cairns-cbd'],
    ['web-and-ai-integration-services-for-cairns-northern-beaches-palm-cove-trinity-beach', 'palm-cove'],
    ['web-and-ai-integration-services-for-innisfail-and-cassowary-coast-businesses', 'innisfail'],
    ['web-and-ai-integration-services-for-kuranda-village-businesses', 'kuranda'],
    ['web-and-ai-integration-services-for-mareeba-businesses', 'mareeba'],
    ['web-and-ai-integration-services-for-mission-beach-businesses', 'mission-beach'],
    ['web-and-ai-integration-services-for-port-douglas-businesses', 'port-douglas'],
  ] as [string, string][]).map(([slug, location]) => ({
    source: `/articles/hansendev/${slug}`,
    destination: `/services/ai-integration/${location}`,
    statusCode: 301,
  }));

export const getRedirects = (): Redirect[] => [
  ...retiredServiceLocationRedirects(),
  ...mergedLocationArticleRedirects(),
];
