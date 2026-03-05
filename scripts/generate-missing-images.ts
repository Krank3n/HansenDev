#!/usr/bin/env node
// Standalone script to generate images for articles that are missing them
import * as path from 'path';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import matter from 'gray-matter';
import { GoogleGenAI } from '@google/genai';
import { getProduct } from './article-generator/config/products';
import { generateImagePrompt } from './article-generator/config/prompts';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const CONTENT_DIR = path.join(process.cwd(), 'content', 'articles');
const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets', 'articles');
const IMAGE_MODEL = 'gemini-3-pro-image-preview';

const generateImage = async (ai: InstanceType<typeof GoogleGenAI>, topic: string, product: any, outputPath: string) => {
  const prompt = generateImagePrompt(topic, product);
  const response = await ai.models.generateContent({
    model: IMAGE_MODEL,
    contents: prompt,
    config: { responseModalities: ['image', 'text'] },
  });

  const parts = response.candidates?.[0]?.content?.parts;
  const imagePart = parts?.find((p: any) => p.inlineData?.mimeType?.startsWith('image/'));
  if (!imagePart?.inlineData?.data) throw new Error('No image in response');

  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(outputPath, Buffer.from(imagePart.inlineData.data, 'base64'));
};

const main = async () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) { console.error('GEMINI_API_KEY not set'); process.exit(1); }

  const ai = new GoogleGenAI({ apiKey });
  const products = ['shredindex', 'chatspark', 'wakeindex'];

  for (const productId of products) {
    const product = getProduct(productId);
    if (!product) continue;

    const articleDir = path.join(CONTENT_DIR, productId);
    if (!fs.existsSync(articleDir)) continue;

    const files = fs.readdirSync(articleDir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const filePath = path.join(articleDir, file);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);

      if (data.featuredImage) {
        console.log(`⏭  ${productId}/${file} — already has image`);
        continue;
      }

      const slug = data.slug || file.replace('.md', '');
      const title = data.title || slug;
      const imgFile = `${slug}.png`;
      const imgPath = path.join(ASSETS_DIR, productId, imgFile);
      const frontmatterPath = `/assets/articles/${productId}/${imgFile}`;

      console.log(`🎨 Generating image for: ${productId}/${slug}...`);
      try {
        await generateImage(ai, title, product, imgPath);
        // Update frontmatter
        data.featuredImage = frontmatterPath;
        const updated = matter.stringify(content, data);
        fs.writeFileSync(filePath, updated, 'utf-8');
        console.log(`✅ ${productId}/${slug} — image saved & frontmatter updated`);
      } catch (err: any) {
        console.error(`❌ ${productId}/${slug} — ${err.message}`);
      }
    }
  }
  console.log('\nDone!');
};

main();
