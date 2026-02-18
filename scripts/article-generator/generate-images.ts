#!/usr/bin/env node
// generate-images.ts
// Standalone script to generate featured images for articles that are missing them

import * as path from 'path';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import { getProduct } from './config/products';
import { generateFeaturedImage } from './services/gemini-image';
import logger from './utils/logger';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const PROJECT_ROOT = process.cwd();
const ASSETS_DIR = path.join(PROJECT_ROOT, 'public', 'assets', 'articles');

const ARTICLES = [
  {
    slug: 'quotemate-now-does-invoices-the-complete-quote-to-cash-workflow',
    topic: 'QuoteMate now does invoices - complete quote to cash workflow for Australian tradies, showing a tradie on a phone converting a quote to an invoice on a job site',
  },
  {
    slug: 'never-chase-payments-again-how-smart-tradies-track-what-theyre-owed',
    topic: 'Smart payment tracking for tradies - an Australian tradie confidently reviewing payment status on their phone, professional and organised',
  },
  {
    slug: 'quote-to-invoice-in-one-tap-stop-double-handling-your-paperwork',
    topic: 'One tap quote to invoice conversion - a tradie tapping their phone to instantly convert a quote to an invoice, eliminating paperwork',
  },
  {
    slug: 'setting-up-payid-bank-transfer-and-bpay-in-quotemate',
    topic: 'Setting up payment methods PayID, bank transfer and BPAY for Australian tradies - showing digital payment on a phone at a construction site',
  },
  {
    slug: 'the-complete-gst-guide-for-australian-tradies-2026',
    topic: 'GST guide for Australian tradies - a tradie with a calculator and professional invoices, Australian construction setting with organised financial documents',
  },
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
  logger.header('QuoteMate Article Image Generator');

  const product = getProduct('quotemate');
  if (!product) {
    logger.error('Product not found: quotemate');
    process.exit(1);
  }

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < ARTICLES.length; i++) {
    const article = ARTICLES[i];
    const outputPath = path.join(ASSETS_DIR, 'quotemate', `${article.slug}.png`);

    // Skip if image already exists
    if (fs.existsSync(outputPath)) {
      logger.info(`[${i + 1}/${ARTICLES.length}] Skipping (already exists): ${article.slug}`);
      successCount++;
      continue;
    }

    logger.blank();
    logger.info(`[${i + 1}/${ARTICLES.length}] Generating image for: ${article.slug}`);

    try {
      await generateFeaturedImage(article.topic, product, outputPath);
      successCount++;
      logger.success(`Image saved: ${outputPath}`);
    } catch (error) {
      failCount++;
      logger.error(`Failed to generate image for ${article.slug}`);
      if (error instanceof Error) {
        logger.error(error.message);
      }
    }

    // Rate limit delay between requests (10 seconds)
    if (i < ARTICLES.length - 1) {
      logger.info('Waiting 10s for rate limit...');
      await delay(10000);
    }
  }

  logger.blank();
  logger.header('Image Generation Complete');
  logger.keyValue('Success', successCount.toString());
  logger.keyValue('Failed', failCount.toString());
};

main();
