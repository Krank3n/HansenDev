#!/usr/bin/env node
// index.ts
// Main entry point for the article generator CLI

import * as path from 'path';
import * as dotenv from 'dotenv';
import { parseArgs } from './cli';
import { getProduct } from './config/products';
import { generateArticleText, generateArticlePreview } from './services/gemini-text';
import { generateFeaturedImage, generateImagePreview } from './services/gemini-image';
import { writeArticle, previewMarkdown } from './services/markdown-writer';
import {
  popNextPending,
  markDone,
  revertToPending,
  formatKeywordList,
  KeywordRow,
} from './services/keyword-queue';
import { generateSlug } from './utils/slug';
import logger from './utils/logger';
import { ProductId } from './types/article';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const PROJECT_ROOT = process.cwd();
const CONTENT_DIR = path.join(PROJECT_ROOT, 'content', 'articles');
const ASSETS_DIR = path.join(PROJECT_ROOT, 'public', 'assets', 'articles');

const main = async () => {
  try {
    logger.header('HansenDev Article Generator');

    // Parse CLI arguments
    const options = parseArgs();
    const product = getProduct(options.product);

    if (!product) {
      logger.error(`Product not found: ${options.product}`);
      process.exit(1);
    }

    // If --from-queue, pop the next pending row and override topic/word count.
    let queueRow: KeywordRow | null = null;
    let topic: string;
    let wordCount: number;
    let clusterKeywords: string[] | undefined;

    if (options.fromQueue) {
      queueRow = popNextPending(options.product as ProductId);
      if (!queueRow) {
        logger.error(`No pending rows in keyword queue for ${product.name}.`);
        logger.info(`Add rows to data/seo/keyword-queue/${options.product}.csv`);
        process.exit(1);
      }
      topic = queueRow.primary_keyword;
      wordCount = queueRow.word_count ?? options.wordCount ?? 1500;
      clusterKeywords = formatKeywordList(queueRow);
      logger.info(`Popped from queue (row #${queueRow._rowIndex}): "${topic}"`);
    } else {
      topic = options.topic!;
      wordCount = options.wordCount ?? 1500;
    }

    logger.keyValue('Product', product.name);
    logger.keyValue('Topic', topic);
    logger.keyValue('Word Count', wordCount.toString());
    logger.keyValue('Source', options.fromQueue ? 'keyword queue' : 'CLI --topic');
    if (clusterKeywords) {
      logger.keyValue('Cluster size', clusterKeywords.length.toString());
    }
    logger.keyValue('Dry Run', options.dryRun ? 'Yes' : 'No');
    logger.keyValue('Generate Image', options.noImage ? 'No' : 'Yes');
    logger.divider();

    const slug = generateSlug(topic);
    logger.keyValue('Generated Slug', slug);

    // Dry run mode - just show the prompts
    if (options.dryRun) {
      logger.header('DRY RUN - Prompts Preview');

      logger.info('Article Generation Prompt:');
      logger.blank();
      console.log(generateArticlePreview(topic, product, wordCount, clusterKeywords));

      if (!options.noImage) {
        logger.blank();
        logger.divider();
        logger.info('Image Generation Prompt:');
        logger.blank();
        console.log(generateImagePreview(topic, product));
      }

      // If we popped from queue in dry-run, revert it so the row stays pending.
      if (queueRow) {
        revertToPending(options.product as ProductId, queueRow._rowIndex);
        logger.info('Reverted queue row to pending (dry run).');
      }

      logger.blank();
      logger.divider();
      logger.success('Dry run complete. No files were generated.');
      return;
    }

    // Generate article content
    logger.blank();
    let article;
    try {
      article = await generateArticleText(topic, product, wordCount, clusterKeywords);
    } catch (err) {
      // On failure during a queue run, revert the row so it can retry.
      if (queueRow) {
        revertToPending(options.product as ProductId, queueRow._rowIndex);
        logger.warning('Generation failed — reverted queue row to pending.');
      }
      throw err;
    }

    // Generate featured image (unless --no-image)
    let imagePath: string | null = null;
    if (!options.noImage) {
      logger.blank();
      const imageOutputPath = path.join(ASSETS_DIR, product.id, `${slug}.png`);
      imagePath = await generateFeaturedImage(topic, product, imageOutputPath);
    }

    // Write markdown file
    logger.blank();
    const articlePath = await writeArticle({
      title: article.title,
      description: article.description,
      slug,
      product,
      keywords: article.keywords,
      content: article.content,
      imagePath,
      outputDir: CONTENT_DIR
    });

    // Mark queue row as done if applicable
    if (queueRow) {
      const today = new Date().toISOString().slice(0, 10);
      markDone(options.product as ProductId, queueRow._rowIndex, slug, today);
      logger.info(`Marked queue row #${queueRow._rowIndex} as done.`);
    }

    // Summary
    logger.blank();
    logger.header('Generation Complete');
    logger.success('Article generated successfully!');
    logger.blank();
    logger.keyValue('Article', articlePath);
    if (imagePath) {
      logger.keyValue('Image', imagePath);
    }
    logger.blank();
    logger.info('Next steps:');
    logger.info('  1. Review and edit the generated article');
    logger.info('  2. Check the featured image quality');
    logger.info('  3. Publish when ready');
    logger.blank();

  } catch (error) {
    logger.blank();
    logger.error('Article generation failed');

    if (error instanceof Error) {
      logger.error(error.message);

      if (error.message.includes('GEMINI_API_KEY')) {
        logger.blank();
        logger.info('Make sure GEMINI_API_KEY is set in your .env.local file');
      }

      if (process.env.DEBUG) {
        console.error(error.stack);
      }
    } else {
      console.error(error);
    }

    process.exit(1);
  }
};

main();
