// lib/articles.ts
// Utilities for reading and parsing article markdown files

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface ArticleFrontmatter {
  title: string;
  description: string;
  slug: string;
  product: string;
  featuredImage: string;
  keywords: string[];
  author: string;
  publishDate: string;
  readingTime: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Article {
  frontmatter: ArticleFrontmatter;
  content: string;
  htmlContent: string;
  faqs: FAQ[];
}

export interface ArticlePreview {
  frontmatter: ArticleFrontmatter;
  excerpt: string;
}

// Get all product directories
export const getProductDirectories = (): string[] => {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  return fs.readdirSync(articlesDirectory).filter(file => {
    const fullPath = path.join(articlesDirectory, file);
    return fs.statSync(fullPath).isDirectory();
  });
};

// Get all article slugs for a specific product
export const getArticleSlugs = (product: string): string[] => {
  const productDir = path.join(articlesDirectory, product);
  if (!fs.existsSync(productDir)) {
    return [];
  }
  return fs.readdirSync(productDir)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
};

// Get all articles for static paths
export const getAllArticlePaths = (): { product: string; slug: string }[] => {
  const products = getProductDirectories();
  const paths: { product: string; slug: string }[] = [];

  products.forEach(product => {
    const slugs = getArticleSlugs(product);
    slugs.forEach(slug => {
      paths.push({ product, slug });
    });
  });

  return paths;
};

// Extract FAQs from markdown content
const extractFAQsFromContent = (content: string): FAQ[] => {
  const faqs: FAQ[] = [];

  // Look for FAQ section with ### Q: format
  const faqPattern = /###\s*Q:\s*(.+?)\??\s*\n+([\s\S]*?)(?=###\s*Q:|##\s|$)/gi;
  let match;

  while ((match = faqPattern.exec(content)) !== null) {
    const question = match[1].trim().replace(/\?$/, '') + '?';
    const answer = match[2].trim()
      .replace(/^\n+/, '')
      .replace(/\n+$/, '')
      .replace(/\*\*/g, '')
      .substring(0, 500);

    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
};

// Get a single article by product and slug
export const getArticle = async (product: string, slug: string): Promise<Article | null> => {
  const fullPath = path.join(articlesDirectory, product, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Extract FAQs from content
  const faqs = extractFAQsFromContent(content);

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html, { sanitize: true })
    .process(content);
  const htmlContent = processedContent.toString();

  return {
    frontmatter: data as ArticleFrontmatter,
    content,
    htmlContent,
    faqs
  };
};

// Get article preview (for listing pages)
export const getArticlePreview = (product: string, slug: string): ArticlePreview | null => {
  const fullPath = path.join(articlesDirectory, product, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Extract first paragraph as excerpt
  const excerpt = content
    .split('\n\n')
    .map(p => p.trim())
    .find(p => p && !p.startsWith('#') && !p.startsWith('---') && !p.startsWith('*') && !p.startsWith('-'))
    ?.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove markdown links
    ?.replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold markdown
    ?.substring(0, 200) + '...' || '';

  return {
    frontmatter: data as ArticleFrontmatter,
    excerpt
  };
};

// Get all articles for a product (for listing pages)
export const getArticlesByProduct = (product: string): ArticlePreview[] => {
  const slugs = getArticleSlugs(product);
  const articles = slugs
    .map(slug => getArticlePreview(product, slug))
    .filter((article): article is ArticlePreview => article !== null)
    .sort((a, b) =>
      new Date(b.frontmatter.publishDate).getTime() -
      new Date(a.frontmatter.publishDate).getTime()
    );

  return articles;
};

// Get all articles across all products
export const getAllArticles = (): ArticlePreview[] => {
  const products = getProductDirectories();
  const allArticles: ArticlePreview[] = [];

  products.forEach(product => {
    const articles = getArticlesByProduct(product);
    allArticles.push(...articles);
  });

  return allArticles.sort((a, b) =>
    new Date(b.frontmatter.publishDate).getTime() -
    new Date(a.frontmatter.publishDate).getTime()
  );
};

// Get related articles (same product, excluding current)
export const getRelatedArticles = (product: string, currentSlug: string, limit = 3): ArticlePreview[] => {
  const articles = getArticlesByProduct(product)
    .filter(article => article.frontmatter.slug !== currentSlug)
    .slice(0, limit);

  return articles;
};

// Product display names
export const productNames: Record<string, string> = {
  quotemate: 'QuoteMate',
  chatspark: 'ChatSpark',
  shredindex: 'ShredIndex',
  hansendev: 'HansenDev',
  wakeindex: 'WakeIndex'
};

export const getProductName = (product: string): string => {
  return productNames[product] || product;
};
