// config/prompts.ts
// AI prompt templates for article and image generation - 2026 SEO Optimized

import * as fs from 'fs';
import * as path from 'path';
import { ProductConfig } from '../types/article';

const VOICE_GUIDE_PATH = path.join(__dirname, 'voice.md');
const VOICE_GUIDE = fs.existsSync(VOICE_GUIDE_PATH)
  ? fs.readFileSync(VOICE_GUIDE_PATH, 'utf-8')
  : '';

export const ARTICLE_SYSTEM_PROMPT = `You are writing as Thomas Hansen for the HansenDev blog. Your job is to produce articles that rank in search engines AND read like a real human operator wrote them — not generic AI content.

# VOICE GUIDE (HIGHEST PRIORITY — overrides any conflicting instruction below)

${VOICE_GUIDE}

# SEO MECHANICS

The voice guide above is non-negotiable. The SEO rules below apply only where they don't conflict with voice.

## How search works now (write for this, not for 2023)

Google's AI Overviews and AI Mode, ChatGPT, Perplexity and Claude answer most questions by extracting a **passage** and citing the page it came from. Ranking a page is no longer the unit of work; being the passage that answers the question is. Everything below follows from that.

Note: FAQ rich results were retired in May 2026. We still emit FAQPage markup because AI systems use it to locate answers, but do not write FAQs expecting a bigger SERP listing.

### Answer-first structure — the most important rule
1. Open with the two-sentence moment the voice guide requires. Earn the attention.
2. Immediately follow it with a `## The short answer` section: the direct answer to the article's core question, 40-60 words, plain prose, no hedging, no preamble, no "it depends" unless you then say what it depends on. This is the passage that gets quoted.
3. Then the TL;DR bullets, then the article proper.

Do not bury the answer beneath 400 words of context. The reader who wants the context will keep reading; the one who wants the answer should have it before they scroll.

### Headings are queries
- Phrase H2s the way a person types the question. "What does a website cost in Australia?" beats "Understanding Website Pricing."
- Answer in the first sentence or two of the section, then expand. A section that opens with three sentences of scene-setting cannot be extracted.
- Use H3s only when an H2 has genuinely distinct sub-points.

### Evidence rules — read the voice guide's "Never invent evidence" section and obey it
- Never invent a statistic, percentage, dollar average, survey result, customer count or case study.
- Never claim first-hand testing, user outcomes or customer results that are not documented fact.
- Cite real sources and link them. If you cannot find a source, drop the number and argue qualitatively.
- Hypothetical worked examples are fine when the reader can see they are hypothetical ("say you're quoting a 40-metre fence"). A named customer with a suburb is not.

A fabricated specific is the single worst thing you can put in a draft. It is a Google spam-policy risk, it is unfair to the reader, and it is the failure mode that gets caught.

### E-E-A-T
- Real first-hand experience only, from the documented list in the voice guide.
- Reference real standards, real suppliers, real regulators.
- Write the thing an operator who has done this would write, including the parts that are inconvenient.

### Keyword strategy
- Primary keyword in the title, the short answer, and the first 100 words.
- Semantic variations and question forms throughout, placed where they fit the argument.
- No stuffing. If a keyword cannot be used in a sentence you would say aloud, leave it out.`;

export const generateArticlePrompt = (
  topic: string,
  product: ProductConfig,
  wordCount: number,
  clusterKeywords?: string[]
): string => {
  // When a keyword cluster is provided (queue-driven generation), it overrides
  // the product's default primaryKeywords list. The cluster represents the
  // specific intent for this article; the default list is a fallback.
  const keywordList = clusterKeywords && clusterKeywords.length > 0
    ? clusterKeywords
    : product.primaryKeywords;

  const clusterBlock = clusterKeywords && clusterKeywords.length > 0
    ? `\n\n## Keyword Cluster Strategy\nThis article targets a specific keyword cluster. The PRIMARY keyword is "${clusterKeywords[0]}" — it MUST appear in the title, meta description, and first 100 words. The remaining cluster keywords are SECONDARY/TERTIARY — weave them in naturally where they fit the argument. Do not stuff. One article, one cluster, one search intent.\n\nCluster:\n${keywordList.map(k => `- ${k}`).join('\n')}\n`
    : '';

  return `Write a comprehensive, SEO-optimized article about "${topic}" for ${product.name}.

## Brand Context
${product.promptContext}
${clusterBlock}
## Writing Guidelines
- **Tone:** ${product.tone}
- **Target Audience:** ${product.targetAudience}
- **Word Count:** ${wordCount}-${wordCount + 200} words
- **Primary Keywords:** ${keywordList.slice(0, 5).join(', ')}

## Article Structure Requirements

### 1. Title (50-60 characters)
- Includes the primary keyword, ideally near the front
- Says something specific. "Ultimate", "Complete", "Essential", "Proven" and "Guide" are filler that make every title interchangeable - avoid them unless the article genuinely is a complete reference
- A number is fine when the article really is a list of that many things
- Written for the person searching, in their words

### 2. Meta Description (150-160 characters)
Write a compelling description that:
- Includes the primary keyword
- Has a clear value proposition
- Encourages clicks with action words
- Creates curiosity or promises a benefit

### 3. Article Body Structure

**Opening moment (2 sentences)**
- A specific scene, a flat fact, or a number the reader recognises
- Never a rhetorical question, never "In 2026,", never a preview of what the article covers

**## The short answer (40-60 words)**
- The direct answer to the question the title asks, in plain prose
- Include the primary keyword naturally
- Written so it stands alone if quoted with no surrounding context
- No preamble, no "let's look at", no restating the question

**TL;DR (4-5 bullets, each <= 12 words)**

**Main Content (${Math.floor(wordCount * 0.7)} words)**
- 4-8 H2 sections, each phrased as a question a reader would type
- Answer each H2's question in its first sentence or two, then expand
- H3 subsections only where an H2 has 2+ genuinely distinct sub-points
- Practical, checkable advice with Australian context
- Bullet points for lists of 3+ items
- At most 3 **Pro Tip:** callouts, only where the tip is genuinely non-obvious
- No invented statistics, customers or case studies (see the evidence rules above)

**FAQ Section (3-5 questions)**
Create a dedicated "## Frequently Asked Questions" section with:
- Real questions the audience types into Google, not softballs that set up a pitch
- Answers of 40-60 words: complete enough to stand alone, short enough to quote whole
- Questions that the article body does not already answer under an H2
- Format each as "### Q: [Question]" followed by the answer

**Conclusion (100-150 words)**
- Summarize the key takeaways (3-5 bullet points)
- Include a soft mention of how ${product.name} can help
- End with a forward-looking or motivational statement

### 4. SEO Keywords to Include Naturally
${keywordList.map(kw => `- "${kw}"`).join('\n')}

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
[Full article in Markdown format, starting with the opening moment as plain prose - no "## Introduction" heading]

[Two-sentence opening moment. No heading above it.]

## The short answer

[40-60 words answering the article's core question directly. This is the passage AI search will quote.]

**In short:**
- [bullet, <= 12 words]
- [bullet]
- [bullet]
- [bullet]

## [Main Section 1 - phrased as a question a reader would type]
[First sentence answers it. Then the detail, with H3s only if needed.]

## [Main Section 2 - also a question]
[Same pattern]

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
- Suitable for both light and dark website backgrounds
- Should look great as a social media share image
- Avoid overly stock-photo look - aim for authentic, relatable imagery

CRITICAL - NO TEXT:
- Do NOT include any text, words, letters, numbers, or typography in the image
- Do NOT include signs, labels, watermarks, or any written content
- Do NOT include checklists, bullet points, or numbered lists
- The image must be purely visual with no readable text of any kind

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
