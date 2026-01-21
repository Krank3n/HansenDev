// config/prompts.ts
// AI prompt templates for article and image generation - 2026 SEO Optimized

import { ProductConfig } from '../types/article';

export const ARTICLE_SYSTEM_PROMPT = `You are an expert SEO content writer specializing in creating engaging, informative articles that rank well in search engines and provide genuine value to readers.

## 2026 SEO Best Practices You Must Follow:

### Content Structure
- Use clear heading hierarchy (H2 for main sections, H3 for subsections)
- Start with a compelling hook that addresses the reader's pain point
- Include a brief summary/TL;DR after the introduction
- Use short paragraphs (2-3 sentences max)
- Include bullet points and numbered lists for scannable content
- Add specific examples, statistics, and case studies
- End with actionable takeaways

### E-E-A-T Signals (Experience, Expertise, Authoritativeness, Trustworthiness)
- Write from first-hand experience where relevant
- Include specific examples that demonstrate expertise
- Reference industry standards and best practices
- Provide actionable, tested advice

### Featured Snippet Optimization
- Include a definition or direct answer early in the article
- Use "What is...", "How to...", "Why..." formats for headers
- Create list-based content that Google can extract
- Answer questions concisely in 40-60 words

### Keyword Strategy
- Include the primary keyword in the first 100 words
- Use semantic variations and related terms naturally
- Include question-based keywords (who, what, when, where, why, how)
- Add long-tail variations throughout

### User Engagement
- Use conversational tone appropriate to the brand
- Include rhetorical questions to engage readers
- Add "Pro Tips" or "Expert Insights" callouts
- Create content worth bookmarking and sharing`;

export const generateArticlePrompt = (
  topic: string,
  product: ProductConfig,
  wordCount: number
): string => {
  return `Write a comprehensive, SEO-optimized article about "${topic}" for ${product.name}.

## Brand Context
${product.promptContext}

## Writing Guidelines
- **Tone:** ${product.tone}
- **Target Audience:** ${product.targetAudience}
- **Word Count:** ${wordCount}-${wordCount + 200} words
- **Primary Keywords:** ${product.primaryKeywords.slice(0, 5).join(', ')}

## Article Structure Requirements

### 1. Title (50-60 characters)
Create a compelling, click-worthy title that:
- Includes the main topic/keyword
- Uses power words (Ultimate, Complete, Essential, Proven)
- Optionally includes a number for listicles
- Appeals directly to the target audience

### 2. Meta Description (150-160 characters)
Write a compelling description that:
- Includes the primary keyword
- Has a clear value proposition
- Encourages clicks with action words
- Creates curiosity or promises a benefit

### 3. Article Body Structure

**Introduction (150-200 words)**
- Start with a hook that identifies the reader's pain point
- Establish relevance and urgency
- Include the primary keyword naturally
- End with a preview of what the article covers

**Main Content (${Math.floor(wordCount * 0.7)} words)**
- Use 4-8 main H2 sections
- Each section should have 2-3 H3 subsections where appropriate
- Include practical, actionable advice
- Add specific examples relevant to Australian context
- Use bullet points for lists of 3+ items
- Include "Pro Tip" or "Quick Tip" callouts marked with **Pro Tip:**

**FAQ Section (3-5 questions)**
Create a dedicated "## Frequently Asked Questions" section with:
- Real questions your target audience would ask
- Concise, helpful answers (40-80 words each)
- Format each as "### Q: [Question]" followed by the answer

**Conclusion (100-150 words)**
- Summarize the key takeaways (3-5 bullet points)
- Include a soft mention of how ${product.name} can help
- End with a forward-looking or motivational statement

### 4. SEO Keywords to Include Naturally
${product.primaryKeywords.map(kw => `- "${kw}"`).join('\n')}

### 5. Content Quality Checklist
- Every paragraph must add value (no filler)
- Include at least 2 specific examples or case studies
- Add Australian-specific context where relevant
- Make content scannable with formatting
- Include actionable tips readers can implement immediately

## Output Format

Structure your response EXACTLY as follows (use these exact delimiters):

---TITLE---
[Your SEO-optimized title - 50-60 characters]

---DESCRIPTION---
[Your meta description - 150-160 characters with primary keyword and CTA]

---KEYWORDS---
[8-10 comma-separated keywords including long-tail variations]

---CONTENT---
[Full article in Markdown format]

## Introduction
[Hook + pain point + preview]

## [Main Section 1 - use descriptive H2]
[Content with H3 subsections as needed]

## [Main Section 2]
[Content]

[Continue with 4-8 total main sections...]

## Frequently Asked Questions

### Q: [First common question about the topic]?
[Concise, helpful answer]

### Q: [Second question]?
[Answer]

### Q: [Third question]?
[Answer]

## Key Takeaways

[Bullet point summary of main points]

## Conclusion

[Wrap-up paragraph - do NOT include CTA block, it will be added automatically]

IMPORTANT: Do not include any call-to-action or promotional section at the end. The CTA will be added automatically.`;
};

export const generateImagePrompt = (
  topic: string,
  product: ProductConfig
): string => {
  return `Create a professional, modern featured image for a blog article about "${topic}".

Visual Style:
${product.imageStyle}

Brand Colors to Incorporate:
- Primary: ${product.brandColors.primary}
- Secondary: ${product.brandColors.secondary}
- Accent: ${product.brandColors.accent}

Technical Requirements:
- Professional, high-quality appearance suitable for a business blog
- 16:9 aspect ratio (landscape orientation)
- Clean, modern design aesthetic
- Should visually represent the topic "${topic}"
- No text overlays or typography - image only
- Suitable for both light and dark website backgrounds
- Should look great as a social media share image
- Avoid overly stock-photo look - aim for authentic, relatable imagery

Content Focus:
- Show people, tools, or scenarios relevant to the topic
- Capture the essence of "${topic}" visually
- Appeal to the target audience: ${product.targetAudience}
- Convey professionalism and trustworthiness`;
};

export const generateReadingTime = (wordCount: number): string => {
  const wordsPerMinute = 200;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};
