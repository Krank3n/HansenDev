// data/seo/services.ts
// Service data for programmatic SEO pages

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string; // lucide-react icon name
  description: string;
  heroSubtitle: string;
  ctaText: string;
  ctaQuestion: string;
  pricingKey: 'webDevelopment' | 'aiIntegration' | 'automation' | 'consulting' | 'mobileApps' | 'websiteRedesign' | 'seo';
  features: { title: string; description: string; icon: string }[];
  offerings: { title: string; description: string }[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: 'web-development',
    name: 'Web Development',
    shortName: 'Web Dev',
    icon: 'Globe',
    description: 'Custom websites, responsive design, e-commerce, and web applications',
    heroSubtitle: 'Custom websites that look stunning, perform flawlessly, and convert visitors into customers',
    ctaText: 'Start Your Web Project',
    ctaQuestion: 'Ready to Build Your Dream Website?',
    pricingKey: 'webDevelopment',
    features: [
      { title: 'Custom Design', description: 'Beautiful, unique websites that reflect your brand identity and values', icon: 'Palette' },
      { title: 'Responsive & Mobile', description: 'Perfect user experience on all devices - desktop, tablet, and mobile', icon: 'Smartphone' },
      { title: 'SEO Optimized', description: 'Built-in search engine optimization to help customers find you online', icon: 'Search' },
      { title: 'Lightning Fast', description: 'Optimized performance with fast load times and smooth interactions', icon: 'Zap' },
      { title: 'Secure & Reliable', description: 'Enterprise-grade security with SSL certificates and regular backups', icon: 'Shield' },
      { title: 'Conversion Focused', description: 'Designed to turn visitors into customers with strategic CTAs and UX', icon: 'TrendingUp' },
    ],
    offerings: [
      { title: 'Business Websites', description: 'Professional websites that establish credibility and attract customers' },
      { title: 'E-commerce Stores', description: 'Online stores with secure payment processing and inventory management' },
      { title: 'Web Applications', description: 'Custom web apps that streamline operations and serve your users' },
      { title: 'Landing Pages', description: 'High-converting landing pages for marketing campaigns and lead generation' },
      { title: 'Website Redesign', description: 'Modernize your existing website with fresh design and new features' },
      { title: 'Maintenance & Support', description: 'Ongoing updates, security patches, and technical support' },
    ],
    technologies: ['React & Next.js', 'WordPress & WooCommerce', 'Shopify', 'Custom PHP & Laravel', 'HTML5 & CSS3', 'JavaScript & TypeScript', 'Node.js', 'Progressive Web Apps'],
    faqs: [
      { question: 'How long does it take to build a website?', answer: 'Most business websites take 2-6 weeks depending on complexity. We provide a clear timeline during our free consultation so you know exactly what to expect.' },
      { question: 'Do you offer ongoing maintenance?', answer: 'Yes, we offer flexible maintenance packages including security updates, content changes, performance monitoring, and priority support.' },
      { question: 'Can you redesign my existing website?', answer: 'Absolutely. We regularly modernize outdated websites while preserving your existing content and SEO rankings. We can even show you a preview using our WebFaceLift tool.' },
    ],
  },
  {
    slug: 'ai-integration',
    name: 'AI Integration',
    shortName: 'AI',
    icon: 'Bot',
    description: 'AI chatbots, business automation, machine learning, and process optimization',
    heroSubtitle: 'Transform your business with intelligent automation and AI-powered solutions',
    ctaText: 'Get Free AI Consultation',
    ctaQuestion: 'Ready to Integrate AI Into Your Business?',
    pricingKey: 'aiIntegration',
    features: [
      { title: 'AI Chatbots', description: '24/7 customer support with intelligent chatbots that understand context and intent', icon: 'MessageSquare' },
      { title: 'Business Automation', description: 'Automate repetitive tasks and workflows to free up your team\'s valuable time', icon: 'Zap' },
      { title: 'Machine Learning', description: 'Predictive analytics and data-driven insights to improve decision making', icon: 'Brain' },
      { title: 'Process Optimization', description: 'Identify inefficiencies and implement AI solutions that boost productivity', icon: 'Target' },
      { title: 'Customer Experience', description: 'Personalized customer interactions powered by artificial intelligence', icon: 'Users' },
      { title: 'ROI Focused', description: 'Measurable results with solutions that deliver real business value', icon: 'TrendingUp' },
    ],
    offerings: [
      { title: 'Customer Support Bots', description: 'AI chatbots that handle common inquiries and route complex issues to your team' },
      { title: 'Lead Qualification', description: 'Automatically qualify and score leads based on behavior and engagement' },
      { title: 'Data Analysis', description: 'Extract insights from large datasets to identify trends and opportunities' },
      { title: 'Scheduling & Booking', description: 'Automated appointment scheduling that integrates with your calendar' },
      { title: 'Content Generation', description: 'AI-assisted content creation for marketing and communications' },
      { title: 'Inventory Management', description: 'Predictive inventory optimization based on sales patterns and trends' },
    ],
    technologies: ['OpenAI & GPT', 'Claude AI', 'LangChain', 'Python & FastAPI', 'TensorFlow', 'Custom APIs', 'Webhook Integrations', 'Vector Databases'],
    faqs: [
      { question: 'What kind of AI chatbot can you build?', answer: 'We build custom AI chatbots trained on your business data. They can answer customer questions, book appointments, qualify leads, and escalate complex issues to your team - all 24/7.' },
      { question: 'Is AI integration expensive for small businesses?', answer: 'Not at all. Many AI solutions start from $3,000-6,000 and deliver ROI within months through reduced staff time and improved customer experience. We focus on practical solutions with measurable returns.' },
      { question: 'Will AI replace my staff?', answer: 'No - AI augments your team by handling repetitive tasks so your staff can focus on high-value work. Think of it as giving your team superpowers, not replacing them.' },
    ],
  },
  {
    slug: 'e-commerce',
    name: 'E-Commerce Development',
    shortName: 'E-Commerce',
    icon: 'ShoppingCart',
    description: 'Online stores, payment integration, inventory management, and shopping experiences',
    heroSubtitle: 'Launch a professional online store that drives sales and grows your business',
    ctaText: 'Start Selling Online',
    ctaQuestion: 'Ready to Launch Your Online Store?',
    pricingKey: 'webDevelopment',
    features: [
      { title: 'Secure Payments', description: 'PCI-compliant payment processing with Stripe, PayPal, and Afterpay integration', icon: 'Shield' },
      { title: 'Inventory Management', description: 'Real-time stock tracking with automatic low-stock alerts and supplier integration', icon: 'Package' },
      { title: 'Mobile Commerce', description: 'Fully responsive stores optimized for mobile shoppers who make up 70%+ of traffic', icon: 'Smartphone' },
      { title: 'SEO & Marketing', description: 'Built-in SEO, email marketing integration, and social media selling tools', icon: 'TrendingUp' },
      { title: 'Analytics & Insights', description: 'Track sales, customer behavior, and conversion rates with detailed dashboards', icon: 'BarChart' },
      { title: 'Fast & Reliable', description: 'Optimized for speed with 99.9% uptime so you never miss a sale', icon: 'Zap' },
    ],
    offerings: [
      { title: 'Shopify Stores', description: 'Custom Shopify stores with unique themes and app integrations' },
      { title: 'WooCommerce Sites', description: 'WordPress-powered stores with full customization and flexibility' },
      { title: 'Custom E-Commerce', description: 'Bespoke online stores built from scratch for unique business requirements' },
      { title: 'Multi-Channel Selling', description: 'Sell on your website, Facebook, Instagram, and marketplaces from one dashboard' },
      { title: 'Subscription & Booking', description: 'Recurring payment systems and online booking platforms' },
      { title: 'Migration & Upgrade', description: 'Move from an old platform to a modern e-commerce solution without losing data' },
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe & PayPal', 'Next.js Commerce', 'Afterpay / Buy Now Pay Later', 'Google Shopping', 'Inventory APIs', 'Shipping Integrations'],
    faqs: [
      { question: 'Which e-commerce platform should I use?', answer: 'It depends on your needs. Shopify is great for simplicity and speed. WooCommerce offers more customization. We recommend the best fit during our free consultation based on your products, budget, and growth plans.' },
      { question: 'Can you set up Afterpay and buy-now-pay-later?', answer: 'Yes, we integrate all major BNPL providers including Afterpay, Zip Pay, and Klarna. These typically increase average order value by 20-30% for Australian retailers.' },
      { question: 'How do I handle shipping for Australian customers?', answer: 'We integrate with Australia Post, Sendle, and other carriers for real-time shipping quotes. We can set up flat-rate, free shipping thresholds, or calculated shipping based on your needs.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    shortName: 'Mobile Apps',
    icon: 'Smartphone',
    description: 'iOS and Android apps, cross-platform development, and mobile-first solutions',
    heroSubtitle: 'Native and cross-platform mobile apps that your customers will love',
    ctaText: 'Discuss Your App Idea',
    ctaQuestion: 'Ready to Build Your Mobile App?',
    pricingKey: 'mobileApps',
    features: [
      { title: 'Cross-Platform', description: 'Build once, deploy to iOS and Android with React Native for faster delivery and lower cost', icon: 'Layers' },
      { title: 'Offline-First', description: 'Apps that work without internet - critical for regional Queensland areas with patchy coverage', icon: 'WifiOff' },
      { title: 'Push Notifications', description: 'Keep customers engaged with timely, relevant push notifications', icon: 'Bell' },
      { title: 'App Store Publishing', description: 'Full support for Apple App Store and Google Play Store submission and approval', icon: 'Upload' },
      { title: 'Backend & APIs', description: 'Robust server infrastructure and API development to power your app', icon: 'Server' },
      { title: 'Analytics & Updates', description: 'Usage analytics, crash reporting, and over-the-air updates', icon: 'BarChart' },
    ],
    offerings: [
      { title: 'Business Apps', description: 'Custom apps for internal operations, field workers, and customer-facing tools' },
      { title: 'Booking & Scheduling', description: 'Appointment booking apps for salons, clinics, trades, and service businesses' },
      { title: 'Loyalty & Rewards', description: 'Customer loyalty apps with points, rewards, and personalized offers' },
      { title: 'E-Commerce Apps', description: 'Mobile shopping apps with push notifications and one-tap purchasing' },
      { title: 'Field Service Apps', description: 'Apps for tradies and field workers to manage jobs, quotes, and invoices on-site' },
      { title: 'MVP & Prototypes', description: 'Rapid prototyping to validate your app idea before full investment' },
    ],
    technologies: ['React Native', 'Expo', 'Swift & Kotlin', 'Firebase', 'Node.js & Express', 'PostgreSQL', 'Push Notifications', 'App Store Optimization'],
    faqs: [
      { question: 'How much does a mobile app cost?', answer: 'Simple apps start from $8,000-15,000, while complex apps with backend systems can range from $20,000-50,000+. We offer MVP packages to validate your idea before full investment.' },
      { question: 'Do you build for both iPhone and Android?', answer: 'Yes, we use React Native to build cross-platform apps that run natively on both iOS and Android from a single codebase - saving you time and money.' },
      { question: 'How long does app development take?', answer: 'A simple app takes 4-8 weeks. More complex apps with backend integration typically take 8-16 weeks. We provide detailed timelines during our free consultation.' },
    ],
  },
  {
    slug: 'custom-software',
    name: 'Custom Software Development',
    shortName: 'Custom Software',
    icon: 'Code',
    description: 'Bespoke software solutions, business tools, and system integrations',
    heroSubtitle: 'Purpose-built software that solves your unique business challenges',
    ctaText: 'Discuss Your Project',
    ctaQuestion: 'Need Custom Software for Your Business?',
    pricingKey: 'consulting',
    features: [
      { title: 'Tailored Solutions', description: 'Software built specifically for your business processes and workflow requirements', icon: 'Settings' },
      { title: 'System Integration', description: 'Connect your existing tools and databases into a unified, efficient workflow', icon: 'Link' },
      { title: 'Scalable Architecture', description: 'Built to grow with your business from day one with modern cloud infrastructure', icon: 'TrendingUp' },
      { title: 'Data Security', description: 'Enterprise-grade security with encryption, access controls, and compliance', icon: 'Shield' },
      { title: 'Automated Workflows', description: 'Eliminate manual data entry and repetitive tasks with smart automation', icon: 'Zap' },
      { title: 'Training & Support', description: 'Comprehensive training for your team plus ongoing technical support', icon: 'Users' },
    ],
    offerings: [
      { title: 'Business Management Systems', description: 'Custom CRM, ERP, and project management tools tailored to your workflow' },
      { title: 'Data Dashboards', description: 'Real-time reporting and analytics dashboards for informed decision-making' },
      { title: 'API Development', description: 'Custom APIs to connect your systems and enable data sharing between platforms' },
      { title: 'Process Automation', description: 'Automate manual workflows including invoicing, reporting, and data processing' },
      { title: 'Legacy System Modernization', description: 'Upgrade outdated software to modern, maintainable, and secure platforms' },
      { title: 'Database Solutions', description: 'Design and build efficient databases for storing and querying your business data' },
    ],
    technologies: ['TypeScript & Node.js', 'Python', 'PostgreSQL & MongoDB', 'REST & GraphQL APIs', 'Cloud (AWS/GCP)', 'Docker & CI/CD', 'Microservices', 'Automated Testing'],
    faqs: [
      { question: 'When should I choose custom software over off-the-shelf?', answer: 'Custom software makes sense when your business processes are unique, existing tools require too many workarounds, or you need to integrate multiple systems. We help you evaluate the best approach.' },
      { question: 'Can you integrate with our existing systems?', answer: 'Yes, we specialize in system integration. Whether it is MYOB, Xero, Salesforce, or custom databases, we build bridges between your existing tools and new solutions.' },
      { question: 'Do you provide ongoing support after launch?', answer: 'Absolutely. We offer flexible support packages including bug fixes, feature updates, performance monitoring, and priority support to keep your software running smoothly.' },
    ],
  },
  {
    slug: 'technology-consulting',
    name: 'Technology Consulting',
    shortName: 'Tech Consulting',
    icon: 'Lightbulb',
    description: 'Digital transformation strategy, IT audits, cloud migration, and technology roadmaps',
    heroSubtitle: 'Expert technology advice to help your business make smarter digital decisions',
    ctaText: 'Book Free Consultation',
    ctaQuestion: 'Need Expert Technology Advice?',
    pricingKey: 'consulting',
    features: [
      { title: 'Digital Strategy', description: 'Clear technology roadmaps aligned with your business goals and budget', icon: 'Map' },
      { title: 'Technology Audit', description: 'Comprehensive review of your current systems to identify gaps and opportunities', icon: 'ClipboardCheck' },
      { title: 'Cloud Migration', description: 'Seamless transition from on-premise systems to secure cloud infrastructure', icon: 'Cloud' },
      { title: 'Vendor Selection', description: 'Impartial advice on choosing the right tools and platforms for your needs', icon: 'Search' },
      { title: 'Cybersecurity', description: 'Security assessments and strategy to protect your business data and systems', icon: 'Shield' },
      { title: 'Cost Optimization', description: 'Reduce technology spend by identifying redundancies and better alternatives', icon: 'DollarSign' },
    ],
    offerings: [
      { title: 'Digital Transformation', description: 'End-to-end strategy for modernizing your business with technology' },
      { title: 'IT Strategy & Roadmaps', description: 'Long-term technology plans that align with your business growth goals' },
      { title: 'Solution Architecture', description: 'Design the right technical architecture for your projects and systems' },
      { title: 'Technology Audits', description: 'Identify inefficiencies, security risks, and improvement opportunities' },
      { title: 'Cloud Migration Planning', description: 'Strategic planning for moving to cloud platforms like AWS, Azure, or Google Cloud' },
      { title: 'Team Training', description: 'Upskill your team on new technologies and best practices' },
    ],
    technologies: ['AWS & Google Cloud', 'Microsoft Azure', 'Cloud Architecture', 'DevOps & CI/CD', 'Security Frameworks', 'Data Strategy', 'API Architecture', 'Project Management'],
    faqs: [
      { question: 'What does a technology consultation involve?', answer: 'We start with a free discovery call to understand your challenges. Then we conduct a thorough review of your current systems, identify opportunities, and deliver a clear roadmap with prioritized recommendations and costs.' },
      { question: 'Do I need consulting if I already have an IT person?', answer: 'Often yes. We provide strategic-level advice and specialized expertise that complements your existing IT support. Think of it as bringing in a specialist while your GP handles the day-to-day.' },
      { question: 'How much does technology consulting cost?', answer: 'Our consulting services start from $200/hour. Most small businesses benefit from a 2-4 hour initial assessment. We provide transparent pricing and always discuss costs upfront.' },
    ],
  },
  {
    slug: 'website-redesign',
    name: 'Website Redesign & Migration',
    shortName: 'Redesign',
    icon: 'RefreshCw',
    description: 'Modernise outdated websites, migrate platforms, and boost performance without losing SEO',
    heroSubtitle: 'Transform your outdated website into a fast, modern platform — without losing rankings or customers',
    ctaText: 'Get a Free Site Audit',
    ctaQuestion: 'Ready to Modernise Your Website?',
    pricingKey: 'websiteRedesign',
    features: [
      { title: 'Full Site Audit', description: 'Comprehensive review of your current site covering speed, SEO, accessibility, and design', icon: 'ClipboardCheck' },
      { title: 'Modern Redesign', description: 'Fresh, mobile-first design that reflects your brand and converts visitors into customers', icon: 'Palette' },
      { title: 'Platform Migration', description: 'Seamless migration from WordPress, Wix, Squarespace, or Drupal to a modern stack', icon: 'ArrowRightLeft' },
      { title: 'SEO Preservation', description: 'Redirect mapping and on-page SEO to protect your existing search rankings during the switch', icon: 'Search' },
      { title: 'Performance Boost', description: 'Dramatically faster load times with optimised images, code splitting, and modern hosting', icon: 'Zap' },
      { title: 'Content Migration', description: 'All your existing content, images, and data transferred cleanly to the new platform', icon: 'FileText' },
    ],
    offerings: [
      { title: 'WordPress Migration', description: 'Move from slow, plugin-heavy WordPress sites to fast, modern platforms' },
      { title: 'Wix & Squarespace Migration', description: 'Break free from template limitations with a fully custom website' },
      { title: 'Design Refresh', description: 'Update your existing site with a modern design while keeping the same platform' },
      { title: 'Performance Optimisation', description: 'Speed up your current site with image optimisation, caching, and code cleanup' },
      { title: 'Mobile Overhaul', description: 'Make your desktop-only site fully responsive and mobile-friendly' },
      { title: 'E-commerce Migration', description: 'Move your online store to a faster, more capable platform without losing products or orders' },
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'WordPress', 'Headless CMS', 'Cloudflare', 'Image Optimization', 'SEO Redirect Mapping'],
    faqs: [
      { question: 'Will I lose my Google rankings during a redesign?', answer: 'No. We implement 301 redirect mapping and preserve all on-page SEO elements. Most clients see improved rankings within weeks of launch thanks to better performance and modern best practices.' },
      { question: 'How long does a website migration take?', answer: 'Most redesigns take 2-4 weeks. Complex sites with hundreds of pages or e-commerce may take 4-6 weeks. We provide a clear timeline during our free audit.' },
      { question: 'Can you show me what my site could look like before I commit?', answer: 'Yes — our WebFaceLift tool can generate an AI-powered preview of your redesigned site in seconds. We also build demo pages for larger projects so you can see the quality before committing.' },
    ],
  },
  {
    slug: 'seo',
    name: 'SEO & Search Optimisation',
    shortName: 'SEO',
    icon: 'Search',
    description: 'Local SEO, technical SEO, content strategy, and search rankings for FNQ businesses',
    heroSubtitle: 'Get found by local customers searching for exactly what you offer',
    ctaText: 'Get a Free SEO Audit',
    ctaQuestion: 'Ready to Rank Higher on Google?',
    pricingKey: 'seo',
    features: [
      { title: 'Local SEO', description: 'Dominate local search results so customers in your area find you first on Google', icon: 'MapPin' },
      { title: 'Technical SEO', description: 'Fix crawl errors, improve site speed, and ensure search engines can properly index your site', icon: 'Settings' },
      { title: 'Content Strategy', description: 'Targeted content that answers what your customers are searching for and builds authority', icon: 'FileText' },
      { title: 'Google Business Profile', description: 'Optimise your Google Business listing for maximum visibility in maps and local pack results', icon: 'Map' },
      { title: 'Keyword Research', description: 'Identify the exact terms your customers use and build pages that rank for them', icon: 'Search' },
      { title: 'Monthly Reporting', description: 'Clear, transparent reports showing your rankings, traffic, and ROI every month', icon: 'BarChart' },
    ],
    offerings: [
      { title: 'Local SEO Packages', description: 'Ongoing optimisation for local businesses targeting customers in their area' },
      { title: 'One-Off SEO Audit', description: 'Comprehensive technical and content audit with prioritised action items' },
      { title: 'Programmatic SEO', description: 'Scalable page generation targeting hundreds of local search terms automatically' },
      { title: 'Google Business Optimisation', description: 'Set up and optimise your Google Business Profile for local visibility' },
      { title: 'Content Creation', description: 'SEO-optimised blog posts, landing pages, and service pages that rank and convert' },
      { title: 'Competitor Analysis', description: 'Understand what your competitors rank for and find gaps you can exploit' },
    ],
    technologies: ['Google Search Console', 'Google Analytics', 'Structured Data / JSON-LD', 'Core Web Vitals', 'Schema Markup', 'Next.js SSG', 'Sitemap Optimisation', 'Programmatic SEO'],
    faqs: [
      { question: 'How long does SEO take to show results?', answer: 'Most businesses see meaningful improvement in 2-4 months. Local SEO often delivers faster wins through Google Business Profile optimisation. We set realistic expectations and track progress monthly.' },
      { question: 'Do you guarantee first page rankings?', answer: 'No legitimate SEO provider can guarantee specific rankings — Google controls that. What we do guarantee is transparent work, measurable progress, and a clear strategy based on what actually moves the needle.' },
      { question: 'Is SEO worth it for a small local business?', answer: 'Absolutely. Local SEO is one of the highest-ROI marketing channels for small businesses. When someone searches "plumber near me" or "cafe in Palm Cove", being in the top results means real customers walking through your door.' },
    ],
  },
];

export const getService = (slug: string): Service | undefined => {
  return SERVICES.find(s => s.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return SERVICES.map(s => s.slug);
};
