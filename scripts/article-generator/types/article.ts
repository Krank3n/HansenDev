// types/article.ts
// TypeScript interfaces for the article generator

export interface ProductConfig {
  id: string;
  name: string;
  tagline: string;
  tone: string;
  targetAudience: string;
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  imageStyle: string;
  primaryKeywords: string[];
  ctaBlock: string;
  promptContext: string;
  websiteUrl: string;
}

export interface ArticleMetadata {
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

export interface GeneratedArticle {
  metadata: ArticleMetadata;
  content: string;
  ctaBlock: string;
}

export interface CLIOptions {
  product: string;
  topic?: string;
  wordCount?: number;
  dryRun?: boolean;
  noImage?: boolean;
  fromQueue?: boolean;
}

export interface GenerationResult {
  success: boolean;
  articlePath?: string;
  imagePath?: string;
  error?: string;
}

export type ProductId = 'quotemate' | 'chatspark' | 'shredindex' | 'hansendev' | 'wakeindex' | 'webfacelift' | 'callkatie';
