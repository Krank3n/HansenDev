# HansenDev — Claude Code SOP

Standard operating procedures for Claude Code working in this repo. Read this before making changes.

## Project

Next.js 15 marketing site for **HansenDev PTY LTD** (Cairns, QLD). Hosts product pages, an article system, and a programmatic SEO surface area of 182+ pages. Production: `hansendev.com.au`.

Products: QuoteMate, ChatSpark, ShredIndex, WakeIndex, WebFaceLift, Call Katie.

## Stack & non-negotiables

- **Pages Router** (not App Router). Do not migrate or mix.
- **Static Site Generation only** for content/SEO pages. Use `getStaticProps` + `getStaticPaths` with `fallback: false` (or `'blocking'` only when justified). Never SSR a page that should rank — Google needs pre-rendered HTML on first crawl.
- **No client-side rendering for primary content**. Hydrate interactivity, but the SEO-critical body must be in the static HTML.
- **Tailwind CSS** with project tokens: `bg-dark-bg`, `text-dark-text`, `brand-accent`, `brand-primary`. CTAs use `from-brand-accent to-brand-primary` gradient.
- **Australian English** (en-AU). Geo tags target QLD.
- Icons: `lucide-react`.

## Directory map

```
pages/                      Pages Router routes
  articles/[product]/[slug] Article renderer (markdown-driven)
  services/[service]/[location]   Phase 1 programmatic SEO (150 pages)
  tools/[trade]             Phase 2 — QuoteMate trade pages (17)
  solutions/[industry]      Phase 3 — WebFaceLift industry pages (15)
content/articles/<product>/ Markdown articles per product
data/seo/                   Programmatic SEO datasets
  locations.ts              25 FNQ locations
  services.ts               6 services
  trades.ts                 17 trades
  industries.ts             15 industries
constants/business.ts       Business constants (NAP, contact, etc.)
scripts/article-generator/  CLI: `npm run generate-article`
public/assets/articles/     Article featured images
.claude/skills/             Claude skills (stripe-* exist; /blog planned)
next-sitemap.config.js      Custom transform for priorities
```

## Article system

Articles are markdown in `content/articles/<product>/<slug>.md` with frontmatter:

```yaml
title:        # 50-60 chars, includes primary keyword
description:  # 150-160 chars, value prop + CTA verb
slug:         # kebab-case, matches filename
product:      # one of: quotemate | chatspark | shredindex | wakeindex | webfacelift | hansendev
featuredImage: /assets/articles/<product>/<slug>.jpg
keywords:     # 8-10, primary first
author: "Thomas Hansen"
publishDate:  # ISO date
readingTime:  # "<n> min read"
```

### Cluster expansion (free keyword research)

Use this to populate the queue without paying for Semrush. Hits Google Autocomplete with the seed plus alphabet, question-prefix, and suffix variations, then groups results into a CSV-ready cluster row:

```
npm run expand-cluster -- --seed "<keyword>" [--locale en-AU] [--product <id> --append]
```

- Without `--append`: prints PRIMARY/SECONDARY/TERTIARY/OTHER lists and a copy-pasteable CSV row.
- With `--product <id> --append`: writes the row directly into `data/seo/keyword-queue/<product>.csv`.
- `--locale en-AU` (default) demotes US/UK/India/UAE geo-variants to OTHER. Use `en-US`, `en-GB`, etc. for global products (ShredIndex, WakeIndex).
- Scoring: boosts commercial-intent tokens (cost, price, near me, australia, vs, reviews, agency, expert), demotes autocomplete artifacts (list, blog, post, godaddy, wikipedia).

OTHER list is shown so you can spot good seeds for follow-up clusters — niche-specific qualifiers like `melbourne`, `for small business`, etc. often deserve their own article.

### Generation modes

**One-off (ad-hoc topic):**
```
npm run generate-article -- --product <id> --topic "..." [--word-count 1500] [--no-image] [--dry-run]
```

**Queue-driven (cluster from CSV):**
```
npm run generate-article -- --product <id> --from-queue [--no-image] [--dry-run]
```

The queue lives at `data/seo/keyword-queue/<product>.csv`. The generator pops the next `pending` row, transitions it to `in_progress`, generates the article using the full cluster as the keyword set, then marks the row `done` with slug + date on success (or reverts to `pending` on failure). Dry runs revert the row so it stays pending. See `data/seo/keyword-queue/README.md` for schema and workflow.

Prefer queue-driven generation for ranking work. Use `--topic` only for one-off articles or testing.

Voice rules for ALL article generation: `scripts/article-generator/config/voice.md`. Read it before modifying prompts.

## Programmatic SEO

Three phases, all SSG with `getStaticPaths` + `fallback: false`:

| Phase | Pattern | Count | Priority | Data |
|---|---|---|---|---|
| 1 | `/services/[service]/[location]` | 150 | 0.7 | `locations.ts` × `services.ts` |
| 2 | `/tools/quoting-app-for-[trade-slug]` | 17 | 0.8 | `trades.ts` |
| 3 | `/solutions/ai-website-redesign-for-[industry-slug]` | 15 | 0.8 | `industries.ts` |

Sitemap priorities are set in `next-sitemap.config.js` via `transform`. New programmatic surfaces must extend that transform — don't rely on defaults.

## Structured data

Every content page must emit appropriate JSON-LD:
- Articles: `Article` + `BreadcrumbList` + `FAQPage` (if FAQ section exists)
- Service/location pages: `Service` + `BreadcrumbList`
- Product pages: `SoftwareApplication` or `Product`

Inject via `<Head>` + `<script type="application/ld+json" dangerouslySetInnerHTML>`. Never client-side inject — defeats the purpose.

## Build & deploy

```
npm run dev        # local dev
npm run build      # production build
npm run postbuild  # next-sitemap (runs automatically after build)
npm run lint
```

Don't add new build steps without checking `postbuild` doesn't break.

## Don't

- Don't migrate to App Router.
- Don't add SSR (`getServerSideProps`) to a page meant to rank.
- Don't introduce a CMS — markdown + frontmatter is the system.
- Don't add Tailwind tokens outside the existing palette without updating `tailwind.config.js`.
- Don't bypass the article generator with hand-written articles unless explicitly requested — voice consistency depends on the pipeline.
- Don't commit images larger than necessary; the generator outputs PNG, optimise before merging if size matters.

## When in doubt

- Tone/voice questions → `scripts/article-generator/config/voice.md`
- Brand/business facts → `constants/business.ts`
- Programmatic SEO data shape → `data/seo/*.ts`
- Generator behavior → `scripts/article-generator/config/prompts.ts`
