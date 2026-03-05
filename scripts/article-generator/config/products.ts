// config/products.ts
// Product configurations for all HansenDev products

import { ProductConfig, ProductId } from '../types/article';

export const PRODUCTS: Record<ProductId, ProductConfig> = {
  quotemate: {
    id: 'quotemate',
    name: 'QuoteMate',
    tagline: 'Create Professional Quotes in Minutes',
    tone: 'Friendly, practical, and relatable for Australian tradies. Use casual Australian English, speak directly to tradies about their pain points (time wasted on quotes, inaccurate pricing, looking unprofessional). Be helpful and solution-focused.',
    targetAudience: 'Australian tradies including carpenters, builders, deck builders, landscapers, fencing contractors, pergola installers, handymen, renovators, and general construction professionals.',
    brandColors: {
      primary: '#14B8A6', // Teal
      secondary: '#0D9488',
      accent: '#F59E0B' // Amber
    },
    imageStyle: 'Professional construction/tradie imagery with Australian context. Show tools, job sites, mobile phones with app interfaces, professional-looking tradies, timber decks, fences, and outdoor projects. Modern, clean aesthetic with teal and amber accent colors.',
    primaryKeywords: [
      'tradie quoting app',
      'quote builder Australia',
      'Bunnings prices',
      'tradesman invoice app',
      'carpenter quotes',
      'builder estimator',
      'deck quote calculator',
      'fence quote app',
      'construction quotes',
      'job estimator'
    ],
    ctaBlock: `## Ready to Save Hours on Quoting?

QuoteMate helps Australian tradies create professional quotes in under 5 minutes with AI-powered estimation and real-time Bunnings pricing.

**Try free - your first 5 quotes are on us!**

[Get Started with QuoteMate](https://hansendev.com.au/quote-tool) | No credit card required`,
    promptContext: `QuoteMate is a mobile app for Australian tradies that helps them create professional quotes in under 5 minutes. Key features include:
- AI-powered job estimation - just describe the work in plain English
- Real-time Bunnings pricing automatically added to quotes
- Professional PDF quotes with business logo and branding
- Works offline for on-site quoting
- GST calculated automatically
- Send quotes via email, SMS, or WhatsApp
- Track all quotes in one place
The app saves tradies 5+ hours per week and helps them look more professional to win more jobs. First 5 quotes are free, no credit card required.`,
    websiteUrl: 'https://hansendev.com.au/projects/quotemate'
  },

  chatspark: {
    id: 'chatspark',
    name: 'ChatSpark',
    tagline: 'Build Confidence Through Conversations',
    tone: 'Warm, supportive, and encouraging. Speak to people who may feel anxious about social situations. Be empathetic and non-judgmental. Focus on small wins and gradual progress. Use inclusive language.',
    targetAudience: 'People experiencing social anxiety, shyness, or who want to improve their social confidence and conversation skills. Includes introverts, those recovering from isolation, or anyone wanting to build better connections.',
    brandColors: {
      primary: '#8B5CF6', // Purple
      secondary: '#7C3AED',
      accent: '#F472B6' // Pink
    },
    imageStyle: 'Warm, approachable imagery showing positive social interactions, friendly conversations, people connecting. Soft purple and pink tones. Show diverse people in comfortable social settings like cafes, parks, or casual meetups. Avoid overwhelming crowd scenes.',
    primaryKeywords: [
      'social anxiety app',
      'confidence building',
      'conversation skills',
      'social skills training',
      'overcome shyness',
      'communication practice',
      'anxiety management',
      'social confidence',
      'micro-interactions',
      'mental wellness'
    ],
    ctaBlock: `## Ready to Build Your Social Confidence?

ChatSpark helps you overcome social anxiety with 145+ conversation micro-missions across 7 difficulty levels. Build real-world confidence one small interaction at a time.

**Download free - 100% privacy-focused with no data collection.**

[Get ChatSpark](https://hansendev.com.au/projects/chatspark) | Available for iOS and Android`,
    promptContext: `ChatSpark is a mobile app that helps people overcome social anxiety and build social confidence through structured micro-missions. Key features include:
- 145+ context-aware conversation micro-missions
- 7 difficulty levels from very easy to challenging
- Voice-guided coaching for every mission
- Progress tracking with mood analytics
- Adaptive difficulty system that adjusts to your comfort level
- 100% offline and privacy-focused - no data collection
- Multi-language support (English and Spanish)
- Export progress reports as PDF
The app uses gradual exposure therapy principles, helping users practice social interactions in small, manageable steps. Completely free with no ads or subscriptions.`,
    websiteUrl: 'https://hansendev.com.au/projects/chatspark'
  },

  shredindex: {
    id: 'shredindex',
    name: 'ShredIndex',
    tagline: "World's Largest Ski Resort Database",
    tone: 'Adventurous, knowledgeable, and enthusiastic about skiing and snowboarding. Speak to passionate skiers and snowboarders, as well as those planning their first ski trip. Be informative and helpful with destination recommendations.',
    targetAudience: 'Skiers, snowboarders, winter sports enthusiasts, ski trip planners, families looking for ski holidays, and people seeking ski resort employment opportunities.',
    brandColors: {
      primary: '#3B82F6', // Blue
      secondary: '#1D4ED8',
      accent: '#22D3EE' // Cyan
    },
    imageStyle: 'Epic mountain scenery, powder skiing, snowboarding action shots, beautiful ski resorts, snowy landscapes. Cool blue tones with bright white snow. Show both adventure (extreme skiing) and family-friendly resort scenes.',
    primaryKeywords: [
      'ski resort database',
      'ski resort finder',
      'best ski resorts',
      'ski resort jobs',
      'snowboard resorts',
      'ski resort comparison',
      'luxury ski resorts',
      'family ski resorts',
      'powder skiing',
      'ski industry careers'
    ],
    ctaBlock: `## Find Your Perfect Mountain

ShredIndex features 6,239+ ski resorts across 94 countries with advanced filtering, lifestyle categories, and the largest ski resort job board.

**Explore for free - no account required.**

[Explore ShredIndex](https://www.shredindex.com) | Find resorts and jobs worldwide`,
    promptContext: `ShredIndex is the world's largest ski resort database featuring 6,239+ ski resorts across 94 countries. Key features include:
- Comprehensive resort profiles with stats, reviews, and photos
- Advanced filtering by lifestyle categories (Family, Luxury, Extreme, Powder, Affordable)
- Professional athlete reviews and local insights
- Highlights and lowlights for each resort
- Largest ski resort job board with career opportunities
- Compare resorts side-by-side
- Global coverage from Americas to Asia and Oceania
The platform helps skiers and snowboarders find their perfect resort and also connects job seekers with opportunities in the ski industry. Free to use with no account required.`,
    websiteUrl: 'https://www.shredindex.com'
  },

  hansendev: {
    id: 'hansendev',
    name: 'HansenDev',
    tagline: 'Custom Web Development & AI Integration',
    tone: 'Professional, knowledgeable, and approachable. Speak to business owners and decision-makers in Cairns and Far North Queensland. Balance technical expertise with accessible explanations. Focus on business outcomes and ROI.',
    targetAudience: 'Small to medium business owners in Cairns and Far North Queensland looking for web development, AI integration, custom software, or technology consulting services.',
    brandColors: {
      primary: '#14B8A6', // Teal
      secondary: '#0D9488',
      accent: '#F59E0B' // Amber
    },
    imageStyle: 'Professional tech imagery with a Cairns/tropical twist where appropriate. Show modern websites, AI interfaces, business dashboards, and professional development environments. Clean, modern aesthetic.',
    primaryKeywords: [
      'web development Cairns',
      'AI integration Cairns',
      'custom software Cairns',
      'technology consulting Queensland',
      'website design Cairns',
      'Far North Queensland tech',
      'business automation',
      'digital transformation',
      'Cairns web developer',
      'Queensland software development'
    ],
    ctaBlock: `## Ready to Transform Your Business?

HansenDev provides custom web development, AI integration, and technology consulting services in Cairns and Far North Queensland.

**Get a free consultation to discuss your project.**

[Contact HansenDev](https://hansendev.com.au/#contact) | Based in Cairns, serving all of Australia`,
    promptContext: `HansenDev is a technology consulting and development company based in Cairns, Queensland, Australia. Services include:
- Custom web development and website design
- AI integration and automation for businesses
- Technology consulting and digital transformation
- Custom software development
- E-commerce solutions
- Mobile-responsive web applications
Founded by Thomas Hansen, the company serves businesses across Far North Queensland and Australia remotely. Focus on delivering practical technology solutions that drive real business results. Professional indemnity insured with local Cairns references available.`,
    websiteUrl: 'https://hansendev.com.au'
  },

  wakeindex: {
    id: 'wakeindex',
    name: 'WakeIndex',
    tagline: "World's Largest Wakeboarding Spot Database",
    tone: 'Energetic, adventurous, and community-focused. Speak to wakeboarders, water sports enthusiasts, and those looking to try wakeboarding. Be stoked about the sport and helpful with spot recommendations.',
    targetAudience: 'Wakeboarders, wakesurfers, water sports enthusiasts, cable park visitors, boat owners, and people looking to try wakeboarding for the first time.',
    brandColors: {
      primary: '#06B6D4', // Cyan
      secondary: '#0891B2',
      accent: '#F97316' // Orange
    },
    imageStyle: 'Dynamic water sports imagery featuring wakeboarding action, cable parks, lakes, boats, and wake parks. Bright, energetic colors with cyan water tones and orange accents. Show both professional riders and beginners having fun.',
    primaryKeywords: [
      'wakeboarding spots',
      'cable park finder',
      'wake park database',
      'wakeboarding locations',
      'water sports destinations',
      'wakeboard parks near me',
      'boat wakeboarding spots',
      'wakesurfing locations',
      'cable wakeboarding',
      'wakeboard travel guide'
    ],
    ctaBlock: `## Find Your Perfect Wake Spot

WakeIndex is the world's most comprehensive database of wakeboarding spots, cable parks, and boat-friendly lakes worldwide.

**Explore for free - no account required.**

[Explore WakeIndex](https://www.wakeindex.com) | Find spots worldwide`,
    promptContext: `WakeIndex is the world's largest database of wakeboarding and water sports spots. Key features include:
- Comprehensive database of cable parks and wake parks worldwide
- Boat-friendly lake and waterway listings
- User reviews and ratings for each spot
- Filtering by spot type (cable park, boat spot, wake park)
- Difficulty ratings for beginners to pros
- Pricing information and operating hours
- Travel guides and trip planning features
The platform helps wakeboarders and water sports enthusiasts discover new spots and plan their sessions. Sister site to ShredIndex, applying the same comprehensive approach to water sports.`,
    websiteUrl: 'https://www.wakeindex.com'
  },

  webfacelift: {
    id: 'webfacelift',
    name: 'WebFaceLift',
    tagline: 'AI Website Redesign in Seconds',
    tone: 'Confident, practical, and results-focused. Speak to business owners frustrated with their outdated websites, web agencies looking for faster workflows, and freelancers pitching redesigns. Be direct about the pain of old websites and show how AI reconstruction solves it.',
    targetAudience: 'Small business owners with outdated websites, freelance web designers, digital agencies, and web developers looking to speed up their redesign workflow.',
    brandColors: {
      primary: '#6366F1', // Indigo
      secondary: '#7C3AED', // Violet
      accent: '#A78BFA' // Light purple
    },
    imageStyle: 'Split-screen before/after website transformations, modern web design interfaces, AI-powered design tools, clean dashboards. Use indigo and violet tones. Show outdated websites being transformed into modern designs. Professional SaaS aesthetic.',
    primaryKeywords: [
      'AI website redesign',
      'website reconstruction',
      'AI web design tool',
      'modernise website',
      'website makeover',
      'automated web design',
      'AI website builder',
      'outdated website fix',
      'website facelift',
      'redesign website with AI'
    ],
    ctaBlock: `## Ready to Modernise Your Website?

WebFaceLift transforms any outdated website into a modern design in 30 seconds. Paste a URL, get a complete redesign powered by AI.

**Try free — no account required.**

[Try WebFaceLift Free](https://webfacelift.app) | Built by [HansenDev](https://hansendev.com.au)`,
    promptContext: `WebFaceLift is an AI-powered website reconstruction platform built by HansenDev. Key features include:
- Paste any website URL and get a complete modern redesign in ~30 seconds
- AI scrapes all content, images, and structure from the original site
- Claude AI analyses the content and generates a modern blueprint
- Chat with the AI to refine the design in real-time ("Make it blue", "Add a contact form")
- 4 design styles: Glass, Bold, Minimal, Vibrant
- Niche-specific templates for restaurants, fitness, water sports, medical, etc.
- 13+ component types (hero, services, testimonials, pricing, gallery, FAQ, etc.)
- Component-based JSON output you can export
- Free demo mode with no account required
The platform is ideal for agencies pitching redesigns, freelancers generating mockups, and business owners who want to see what their site could look like before committing to a full rebuild.`,
    websiteUrl: 'https://webfacelift.app'
  }
};

export const getProduct = (id: string): ProductConfig | undefined => {
  return PRODUCTS[id as ProductId];
};

export const getProductIds = (): ProductId[] => {
  return Object.keys(PRODUCTS) as ProductId[];
};

export const isValidProduct = (id: string): id is ProductId => {
  return id in PRODUCTS;
};
