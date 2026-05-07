#!/usr/bin/env node
// scripts/cluster-expander/index.ts
// Expands a seed keyword into a cluster using Google Autocomplete.
// No paid APIs, no scraping — just the public suggest endpoint.

import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const QUESTION_PREFIXES = ['how to', 'what is', 'why', 'when to', 'should i', 'best', 'top', 'free'];
const SUFFIX_VARIANTS = ['vs', 'near me', 'reviews', 'australia', 'for small business', 'cost', 'price'];
const QUESTION_WORDS = new Set([
  'how', 'what', 'why', 'when', 'where', 'who', 'which',
  'is', 'are', 'can', 'should', 'will', 'do', 'does',
]);

// Geographic terms that signal a keyword is locale-specific. When the user's
// locale is en-AU, keywords containing en-US / en-UK / en-IN / en-AE city or
// region names get pushed to OTHER (not dropped — the user may still want them
// as seeds for separate articles).
const OFF_LOCALE_TERMS_FOR_AU = new Set([
  // US
  'usa', 'us', 'nyc', 'ny', 'california', 'texas', 'florida', 'chicago',
  'dallas', 'houston', 'phoenix', 'seattle', 'boston', 'atlanta', 'denver',
  'philadelphia', 'miami', 'austin', 'portland', 'detroit', 'minneapolis',
  // UK
  'uk', 'london', 'manchester', 'birmingham', 'liverpool', 'glasgow',
  'edinburgh', 'leeds', 'bristol', 'sheffield', 'cardiff',
  // India
  'india', 'jaipur', 'mumbai', 'delhi', 'bangalore', 'chennai', 'kolkata',
  'hyderabad', 'pune', 'ahmedabad', 'noida', 'gurgaon',
  // UAE / Middle East
  'uae', 'dubai',
  // Canada
  'canada', 'toronto', 'vancouver', 'montreal',
]);

const containsOffLocaleTerm = (kw: string, locale: string): boolean => {
  if (!locale.toLowerCase().endsWith('-au')) return false;
  const words = kw.toLowerCase().split(/\s+/);
  return words.some(w => OFF_LOCALE_TERMS_FOR_AU.has(w));
};

// Generic words that appear in many service/business queries — when a seed
// contains these, they're not distinctive enough to qualify a tertiary match
// on their own. (Seed "ai receptionist for small business" has "small business"
// as its tail, but a tertiary like "how to bill a small business" matches
// "small" + "business" = 2 words yet is irrelevant. Distinctive seed words
// like "receptionist" must also match.)
const GENERIC_SEED_WORDS = new Set([
  'small', 'business', 'service', 'services', 'company', 'companies',
  'free', 'best', 'top', 'app', 'apps', 'cost', 'price', 'pricing',
  'australia', 'australian', 'online', 'system', 'platform', 'tool', 'tools',
  'for', 'with', 'and', 'the',
]);

// Tokens that signal commercial / high-intent search behavior.
// Keywords containing these get a score boost (-5 per match).
const INTENT_BOOST_TOKENS = new Set([
  'cost', 'price', 'pricing', 'rates', 'quote',
  'near', 'me',
  'australia', 'australian', 'sydney', 'melbourne', 'brisbane', 'perth',
  'adelaide', 'cairns', 'gold', 'coast',
  'free', 'best', 'top',
  'expert', 'professional', 'custom', 'affordable', 'cheap',
  'agency', 'company', 'companies', 'agencies',
  'vs', 'reviews', 'review',
  'small', 'business',
]);

// Tokens that signal autocomplete artifacts or low-value queries.
// Keywords with these in the last position get penalized (+8 per match).
const WEAK_END_TOKENS = new Set([
  'list', 'blog', 'post', 'video', 'banner', 'poster',
  'definition', 'meaning', 'wikipedia', 'pdf', 'ppt', 'doc', 'docs',
  'image', 'images', 'logo', 'icon', 'jpg', 'png', 'svg',
  'quote', // ambiguous: "famous quote about" vs "get a quote"
]);

// Tokens that anywhere in the query suggest low-value or off-product intent.
const WEAK_ANYWHERE_TOKENS = new Set([
  'quora', 'reddit', 'wikipedia', 'godaddy', 'wix', 'squarespace',
  'youtube', 'tiktok', 'instagram',
]);

const intentScore = (kw: string): number => {
  const words = kw.toLowerCase().split(/\s+/);
  let score = 0;
  for (const w of words) {
    if (INTENT_BOOST_TOKENS.has(w)) score -= 5;
    if (WEAK_ANYWHERE_TOKENS.has(w)) score += 8;
  }
  const last = words[words.length - 1];
  if (last && WEAK_END_TOKENS.has(last)) score += 8;
  return score;
};

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

const fetchAutocomplete = async (query: string, locale: string): Promise<string[]> => {
  const [hl = 'en', gl = 'au'] = locale.toLowerCase().split('-');
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}&hl=${hl}&gl=${gl}`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0 Safari/537.36',
        'Accept': 'application/json,text/javascript,*/*;q=0.01',
      },
    });
    if (!res.ok) {
      console.error(`  HTTP ${res.status} for query "${query}"`);
      return [];
    }
    const data = await res.json();
    return Array.isArray(data) && Array.isArray(data[1]) ? (data[1] as string[]) : [];
  } catch (err) {
    console.error(`  Fetch failed for "${query}": ${(err as Error).message}`);
    return [];
  }
};

const expandSeed = async (seed: string, locale: string): Promise<Set<string>> => {
  const queries: string[] = [
    seed,
    ...ALPHABET.map(c => `${seed} ${c}`),
    ...QUESTION_PREFIXES.map(p => `${p} ${seed}`),
    ...SUFFIX_VARIANTS.map(s => `${seed} ${s}`),
  ];

  console.error(`Querying ${queries.length} variations of "${seed}"...`);

  const all = new Set<string>();
  const BATCH_SIZE = 5;
  for (let i = 0; i < queries.length; i += BATCH_SIZE) {
    const batch = queries.slice(i, i + BATCH_SIZE);
    const results = await Promise.all(batch.map(q => fetchAutocomplete(q, locale)));
    results.flat().forEach(s => {
      const normalized = s.toLowerCase().trim().replace(/\s+/g, ' ');
      if (normalized.length > 0) all.add(normalized);
    });
    process.stderr.write('.');
    if (i + BATCH_SIZE < queries.length) await sleep(150);
  }
  console.error(' done.\n');

  // Drop the seed itself.
  all.delete(seed.toLowerCase().trim());
  return all;
};

const isQuestion = (kw: string): boolean => {
  const first = kw.split(' ')[0];
  return QUESTION_WORDS.has(first);
};

interface Grouped {
  secondary: string[];
  tertiary: string[];
  other: string[];
}

// Stop words to exclude from seed analysis. Short distinctive terms like "ai"
// survive because we filter by stop-word membership, not by length.
const STOP_WORDS = new Set([
  'for', 'with', 'and', 'the', 'but', 'not', 'can', 'will', 'from', 'by',
  'are', 'was', 'were', 'this', 'that', 'these', 'those', 'your', 'our',
  'is', 'be', 'to', 'of', 'in', 'on', 'at', 'as', 'an', 'a', 'or', 'if',
]);

const groupKeywords = (
  seed: string,
  candidates: Set<string>,
  limits: { secondary: number; tertiary: number },
  locale: string,
): Grouped => {
  const seedLower = seed.toLowerCase();
  const seedWords = seedLower
    .split(/\s+/)
    .filter(w => w.length > 1 && !STOP_WORDS.has(w));

  const containsSeed = (kw: string) => kw.includes(seedLower);
  const seedOverlap = (kw: string): number => {
    const kwWords = new Set(kw.split(/\s+/));
    return seedWords.filter(w => kwWords.has(w)).length;
  };

  // Score: lower is better. Off-locale → 100. Otherwise: penalty for missing
  // seed words, intent bonuses/penalties for commercial vs artifact tokens,
  // small length tiebreaker.
  const score = (kw: string): number => {
    const overlap = seedOverlap(kw);
    const lengthPenalty = kw.length / 1000;
    const offLocalePenalty = containsOffLocaleTerm(kw, locale) ? 100 : 0;
    return offLocalePenalty + (seedWords.length - overlap) * 10 + intentScore(kw) + lengthPenalty;
  };

  const sorted = [...candidates].sort((a, b) => score(a) - score(b));

  const secondary: string[] = [];
  const tertiary: string[] = [];
  const other: string[] = [];

  // Distinctive seed words: those that aren't generic business filler.
  // E.g., for "ai receptionist for small business" → ["receptionist"].
  // A tertiary keyword must contain at least one of these (when any exist),
  // otherwise it's just sharing "small business" / "for" with the seed.
  const distinctiveSeedWords = seedWords.filter(w => !GENERIC_SEED_WORDS.has(w));
  const distinctiveOverlap = (kw: string): number => {
    const kwWords = new Set(kw.split(/\s+/));
    return distinctiveSeedWords.filter(w => kwWords.has(w)).length;
  };

  const N = seedWords.length;

  // Tertiary: must be a question form, must contain at least one distinctive
  // (non-generic) seed word when any exist, AND share most of the seed words.
  // Better to return empty tertiary than to fill it with off-intent noise —
  // the user can add good question keywords manually if autocomplete lacks them.
  const tertiaryPasses = (kw: string): boolean => {
    if (!isQuestion(kw)) return false;
    if (distinctiveSeedWords.length > 0 && distinctiveOverlap(kw) === 0) return false;
    if (N <= 2) return containsSeed(kw);
    return seedOverlap(kw) >= N - 1;
  };

  const siblingSecondaryPasses = (kw: string): boolean => {
    if (distinctiveSeedWords.length > 0 && distinctiveOverlap(kw) === 0) return false;
    if (N <= 2) return containsSeed(kw);
    return seedOverlap(kw) >= N - 1;
  };

  for (const kw of sorted) {
    const offLocale = containsOffLocaleTerm(kw, locale);

    if (offLocale) {
      other.push(kw);
      continue;
    }

    if (tertiary.length < limits.tertiary && tertiaryPasses(kw)) {
      tertiary.push(kw);
    } else if (containsSeed(kw) && secondary.length < limits.secondary) {
      secondary.push(kw);
    } else if (siblingSecondaryPasses(kw) && secondary.length < limits.secondary) {
      secondary.push(kw);
    } else {
      other.push(kw);
    }
  }

  return {
    secondary,
    tertiary,
    other: other.slice(0, 30),
  };
};

const escapeCsvField = (value: string): string => {
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
};

const buildCsvRow = (seed: string, secondary: string[], tertiary: string[], wordCount: number): string => {
  const fields = [
    'pending',
    seed,
    secondary.join('|'),
    tertiary.join('|'),
    '', // search_volume
    '', // difficulty
    String(wordCount),
    '', // slug
    '', // generated_date
    'Generated by cluster-expander',
  ];
  return fields.map(escapeCsvField).join(',');
};

const main = async () => {
  const program = new Command();

  program
    .name('expand-cluster')
    .description('Expand a seed keyword into a CSV-ready cluster using Google Autocomplete')
    .requiredOption('-s, --seed <keyword>', 'Seed keyword to expand')
    .option('-p, --product <id>', 'Product id (quotemate, hansendev, etc.) — used with --append')
    .option('-a, --append', 'Append the cluster row to data/seo/keyword-queue/<product>.csv', false)
    .option('-l, --locale <code>', 'Locale (e.g., en-AU, en-US)', 'en-AU')
    .option('--secondary-limit <n>', 'Max secondary keywords in the row', '5')
    .option('--tertiary-limit <n>', 'Max tertiary keywords in the row', '8')
    .option('--word-count <n>', 'Default word count for the article', '1500')
    .addHelpText('after', `
Examples:
  $ npm run expand-cluster -- --seed "tradie quoting app"
  $ npm run expand-cluster -- --seed "web development services" --locale en-AU
  $ npm run expand-cluster -- --seed "ski resort jobs" --product shredindex --append
`)
    .parse();

  const opts = program.opts();

  console.log(`\nSeed: "${opts.seed}"`);
  console.log(`Locale: ${opts.locale}\n`);

  const candidates = await expandSeed(opts.seed, opts.locale);
  console.log(`Found ${candidates.size} unique candidate keywords.\n`);

  if (candidates.size === 0) {
    console.error('No candidates returned. Check connectivity or try a less specific seed.');
    process.exit(1);
  }

  const grouped = groupKeywords(
    opts.seed,
    candidates,
    {
      secondary: parseInt(opts.secondaryLimit, 10),
      tertiary: parseInt(opts.tertiaryLimit, 10),
    },
    opts.locale,
  );

  console.log('PRIMARY:');
  console.log(`  ${opts.seed}\n`);

  console.log(`SECONDARY (${grouped.secondary.length}):`);
  grouped.secondary.forEach(k => console.log(`  ${k}`));
  console.log();

  console.log(`TERTIARY (${grouped.tertiary.length}):`);
  grouped.tertiary.forEach(k => console.log(`  ${k}`));
  console.log();

  console.log(`OTHER (${grouped.other.length} found, not in CSV row — review for additional seeds):`);
  grouped.other.slice(0, 15).forEach(k => console.log(`  ${k}`));
  if (grouped.other.length > 15) console.log(`  ... +${grouped.other.length - 15} more`);
  console.log();

  const wordCount = parseInt(opts.wordCount, 10);
  const csvRow = buildCsvRow(opts.seed, grouped.secondary, grouped.tertiary, wordCount);

  console.log('─── CSV row ───');
  console.log(csvRow);
  console.log();

  if (opts.append) {
    if (!opts.product) {
      console.error('Error: --append requires --product');
      process.exit(1);
    }
    const csvPath = path.join(process.cwd(), 'data', 'seo', 'keyword-queue', `${opts.product}.csv`);
    if (!fs.existsSync(csvPath)) {
      console.error(`Error: ${csvPath} does not exist`);
      process.exit(1);
    }
    const existing = fs.readFileSync(csvPath, 'utf-8');
    const needsNewline = existing.length > 0 && !existing.endsWith('\n');
    fs.appendFileSync(csvPath, (needsNewline ? '\n' : '') + csvRow + '\n');
    console.log(`✓ Appended to ${csvPath}`);
  } else {
    console.log('Tip: add --product <id> --append to write this directly to the queue.');
  }
};

main().catch(err => {
  console.error('Failed:', err instanceof Error ? err.message : err);
  process.exit(1);
});
