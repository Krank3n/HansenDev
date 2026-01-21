// cli.ts
// CLI argument parsing using Commander.js

import { Command } from 'commander';
import { CLIOptions, ProductId } from './types/article';
import { getProductIds, isValidProduct } from './config/products';

const DEFAULT_WORD_COUNT = 1500;

export const parseArgs = (): CLIOptions => {
  const program = new Command();

  program
    .name('generate-article')
    .description('Generate SEO-optimized articles for HansenDev products')
    .version('1.0.0')
    .requiredOption(
      '-p, --product <product>',
      `Product to generate article for (${getProductIds().join(', ')})`
    )
    .requiredOption(
      '-t, --topic <topic>',
      'Topic for the article (e.g., "how to quote a deck")'
    )
    .option(
      '-w, --word-count <count>',
      'Target word count for the article',
      String(DEFAULT_WORD_COUNT)
    )
    .option(
      '-d, --dry-run',
      'Preview the prompts without generating content',
      false
    )
    .option(
      '-n, --no-image',
      'Skip image generation'
    )
    .addHelpText('after', `

Examples:
  $ npm run generate-article -- --product=quotemate --topic="how to quote a deck"
  $ npm run generate-article -- --product=chatspark --topic="overcoming small talk anxiety" --word-count=2000
  $ npm run generate-article -- --product=shredindex --topic="best ski resorts for beginners" --dry-run
  $ npm run generate-article -- --product=hansendev --topic="benefits of custom software" --no-image

Products:
  quotemate   - Quoting app for Australian tradies
  chatspark   - Social anxiety & confidence building app
  shredindex  - Ski resort database & job board
  hansendev   - Web development & AI consulting
  wakeindex   - Wakeboarding spot database
`);

  program.parse();

  const opts = program.opts();

  // Validate product
  const product = opts.product.toLowerCase();
  if (!isValidProduct(product)) {
    console.error(`Error: Invalid product "${opts.product}"`);
    console.error(`Valid products: ${getProductIds().join(', ')}`);
    process.exit(1);
  }

  // Parse word count
  const wordCount = parseInt(opts.wordCount, 10);
  if (isNaN(wordCount) || wordCount < 100 || wordCount > 10000) {
    console.error('Error: Word count must be between 100 and 10000');
    process.exit(1);
  }

  return {
    product: product as ProductId,
    topic: opts.topic,
    wordCount,
    dryRun: opts.dryRun,
    noImage: !opts.image // Commander inverts --no-* options
  };
};

export default parseArgs;
