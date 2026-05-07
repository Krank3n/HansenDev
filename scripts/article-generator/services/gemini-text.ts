// services/gemini-text.ts
// Text generation service using Gemini 3 Pro Preview

import { GoogleGenAI } from '@google/genai';
import { ProductConfig } from '../types/article';
import { ARTICLE_SYSTEM_PROMPT, generateArticlePrompt } from '../config/prompts';
import logger from '../utils/logger';

interface ParsedArticle {
  title: string;
  description: string;
  keywords: string[];
  content: string;
}

const parseArticleResponse = (response: string): ParsedArticle => {
  const titleMatch = response.match(/---TITLE---\s*([\s\S]*?)\s*---DESCRIPTION---/);
  const descriptionMatch = response.match(/---DESCRIPTION---\s*([\s\S]*?)\s*---KEYWORDS---/);
  const keywordsMatch = response.match(/---KEYWORDS---\s*([\s\S]*?)\s*---CONTENT---/);
  const contentMatch = response.match(/---CONTENT---\s*([\s\S]*?)$/);

  if (!titleMatch || !descriptionMatch || !keywordsMatch || !contentMatch) {
    logger.error('Failed to parse article response. Raw response:');
    logger.preview('Response', response, 500);
    throw new Error('Invalid article response format from AI');
  }

  const title = titleMatch[1].trim();
  const description = descriptionMatch[1].trim();
  const keywordsRaw = keywordsMatch[1].trim();
  const content = contentMatch[1].trim();

  const keywords = keywordsRaw
    .split(',')
    .map(k => k.trim())
    .filter(k => k.length > 0);

  return { title, description, keywords, content };
};

export const generateArticleText = async (
  topic: string,
  product: ProductConfig,
  wordCount: number,
  clusterKeywords?: string[]
): Promise<ParsedArticle> => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not set');
  }

  logger.step(1, 'Initializing Gemini AI...');

  const ai = new GoogleGenAI({ apiKey });

  const prompt = generateArticlePrompt(topic, product, wordCount, clusterKeywords);

  logger.step(2, 'Generating article content with Gemini 3 Pro...');
  logger.keyValue('Model', 'gemini-3-pro-preview');
  logger.keyValue('Topic', topic);
  logger.keyValue('Product', product.name);
  logger.keyValue('Target Word Count', wordCount.toString());

  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: [
      {
        role: 'user',
        parts: [{ text: `${ARTICLE_SYSTEM_PROMPT}\n\n${prompt}` }]
      }
    ],
    config: {
      temperature: 0.7,
      maxOutputTokens: 8192,
    }
  });

  const text = response.text;

  if (!text) {
    throw new Error('No text response from Gemini');
  }

  logger.step(3, 'Parsing article response...');
  const parsed = parseArticleResponse(text);

  logger.success('Article generated successfully');
  logger.keyValue('Title', parsed.title);
  logger.keyValue('Description length', `${parsed.description.length} chars`);
  logger.keyValue('Keywords', parsed.keywords.length.toString());
  logger.keyValue('Content length', `${parsed.content.split(/\s+/).length} words`);

  return parsed;
};

export const generateArticlePreview = (
  topic: string,
  product: ProductConfig,
  wordCount: number,
  clusterKeywords?: string[]
): string => {
  const prompt = generateArticlePrompt(topic, product, wordCount, clusterKeywords);
  return `${ARTICLE_SYSTEM_PROMPT}\n\n${prompt}`;
};
