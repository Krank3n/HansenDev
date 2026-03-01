// services/markdown-writer.ts
// Markdown file output service

import * as fs from 'fs';
import * as path from 'path';
import { ArticleMetadata, ProductConfig } from '../types/article';
import { generateReadingTime } from '../config/prompts';
import logger from '../utils/logger';

interface WriteArticleParams {
  title: string;
  description: string;
  slug: string;
  product: ProductConfig;
  keywords: string[];
  content: string;
  imagePath: string | null;
  outputDir: string;
}

const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

const generateFrontmatter = (metadata: ArticleMetadata): string => {
  const keywordsYaml = metadata.keywords
    .map(k => `  - "${k}"`)
    .join('\n');

  return `---
title: "${metadata.title}"
description: "${metadata.description}"
slug: "${metadata.slug}"
product: "${metadata.product}"
featuredImage: "${metadata.featuredImage}"
keywords:
${keywordsYaml}
author: "${metadata.author}"
publishDate: "${metadata.publishDate}"
readingTime: "${metadata.readingTime}"
---`;
};

export const writeArticle = async (params: WriteArticleParams): Promise<string> => {
  const {
    title,
    description,
    slug,
    product,
    keywords,
    content,
    imagePath,
    outputDir
  } = params;

  logger.step(5, 'Writing markdown file...');

  // Calculate word count and reading time
  const wordCount = content.split(/\s+/).length;
  const readingTime = generateReadingTime(wordCount);

  // Build image path for frontmatter
  const featuredImage = imagePath
    ? `/assets/articles/${product.id}/${slug}.jpg`
    : '';

  // Create metadata
  const metadata: ArticleMetadata = {
    title,
    description,
    slug,
    product: product.id,
    featuredImage,
    keywords,
    author: 'Thomas Hansen',
    publishDate: formatDate(new Date()),
    readingTime
  };

  // Generate frontmatter
  const frontmatter = generateFrontmatter(metadata);

  // Combine all parts
  const fullContent = [
    frontmatter,
    '',
    content,
    '',
    '---',
    '',
    product.ctaBlock
  ].join('\n');

  // Ensure output directory exists
  const articleDir = path.join(outputDir, product.id);
  if (!fs.existsSync(articleDir)) {
    fs.mkdirSync(articleDir, { recursive: true });
  }

  // Write file
  const filePath = path.join(articleDir, `${slug}.md`);
  fs.writeFileSync(filePath, fullContent, 'utf-8');

  logger.success('Article written successfully');
  logger.keyValue('Path', filePath);
  logger.keyValue('Word count', wordCount.toString());
  logger.keyValue('Reading time', readingTime);

  return filePath;
};

export const previewMarkdown = (params: Omit<WriteArticleParams, 'outputDir'>): string => {
  const {
    title,
    description,
    slug,
    product,
    keywords,
    content,
    imagePath
  } = params;

  const wordCount = content.split(/\s+/).length;
  const readingTime = generateReadingTime(wordCount);

  const featuredImage = imagePath
    ? `/assets/articles/${product.id}/${slug}.jpg`
    : '';

  const metadata: ArticleMetadata = {
    title,
    description,
    slug,
    product: product.id,
    featuredImage,
    keywords,
    author: 'Thomas Hansen',
    publishDate: formatDate(new Date()),
    readingTime
  };

  const frontmatter = generateFrontmatter(metadata);

  return [
    frontmatter,
    '',
    content.substring(0, 500) + '...',
    '',
    '---',
    '',
    product.ctaBlock
  ].join('\n');
};
