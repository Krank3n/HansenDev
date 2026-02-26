import { DemoBusiness } from '../types';

export const brbb: DemoBusiness = {
  name: 'Barrier Reef Business Brokers',
  tagline: 'Your Trusted Business Brokers in Far North Queensland',
  description:
    'Barrier Reef Business Brokers specialise in business sales, commercial property, business migration, and business valuations across Cairns and Far North Queensland. Trusted advisors helping you buy, sell, and grow.',
  phone: '07 4031 7991',
  phoneAlt: '0400 000 000',
  email: 'info@brbb.com.au',
  address: 'Level 1, 123 Abbott Street, Cairns',
  logoUrl: '/images/demo/brbb-logo.png',
  logoWhiteUrl: '/images/demo/brbb-logo-white.png',
  primaryColor: '#1e3a5f',
  primaryColorDark: '#0f1f35',
  accentColor: '#c8a45c',
  heroTitle: 'Expert Business Brokers',
  heroHighlight: 'You Can Rely On',
  heroSubtitle:
    'Specialising in business sales, commercial property, and valuations across Cairns and Far North Queensland. Professional advice you can trust.',
  ctaText: 'Free Consultation',
  services: [
    {
      icon: 'Briefcase',
      title: 'Business Sales',
      description: 'End-to-end management of business sales, from valuation and marketing through to settlement. Maximise your sale price with our proven process.',
    },
    {
      icon: 'Building2',
      title: 'Commercial Property',
      description: 'Expert guidance on commercial property sales and leasing. We connect buyers and sellers across retail, industrial, and office spaces.',
    },
    {
      icon: 'Globe',
      title: 'Business Migration',
      description: 'Helping international buyers find and acquire Australian businesses. Visa-compliant opportunities and full relocation support.',
    },
    {
      icon: 'BarChart3',
      title: 'Business Valuations',
      description: 'Accurate, independent business valuations for sale, purchase, partnership disputes, or financial reporting purposes.',
    },
  ],
  stats: [
    { value: '20', label: 'Years Experience', suffix: '+' },
    { value: '500', label: 'Businesses Sold', suffix: '+' },
    { value: '95', label: 'Client Satisfaction', suffix: '%' },
    { value: '150', label: 'Active Listings', suffix: '+' },
  ],
  whyChooseUs: [
    {
      icon: 'Award',
      title: 'Licensed & Accredited',
      description: 'Fully licensed real estate agents and accredited business brokers with AIBB membership.',
    },
    {
      icon: 'Target',
      title: 'Local Market Expertise',
      description: 'Deep knowledge of the Cairns and FNQ business market with an extensive network of qualified buyers.',
    },
    {
      icon: 'Handshake',
      title: 'Confidential Process',
      description: 'Strict confidentiality protocols protect your business and staff throughout the entire sales process.',
    },
    {
      icon: 'Scale',
      title: 'Fair Valuations',
      description: 'Independent, accurate valuations based on proven methodologies and current market data.',
    },
  ],
  testimonials: [
    {
      quote: 'Barrier Reef Business Brokers made selling my business a smooth and stress-free process. Their market knowledge and professionalism were outstanding.',
      author: 'David M.',
      role: 'Former Restaurant Owner',
      rating: 5,
    },
    {
      quote: 'The team helped us find the perfect business to purchase in Cairns. Their guidance through the due diligence process was invaluable.',
      author: 'Lisa K.',
      role: 'New Business Owner',
      rating: 5,
    },
    {
      quote: 'Professional, knowledgeable, and always available. They achieved a great result on the sale of our commercial property.',
      author: 'Robert W.',
      role: 'Property Investor',
      rating: 5,
    },
  ],
  process: [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We meet to understand your goals, assess your business, and discuss the best strategy for achieving your desired outcome.',
      icon: 'Users',
    },
    {
      step: '02',
      title: 'Valuation & Preparation',
      description: 'A thorough business valuation and preparation of a comprehensive information memorandum to present to qualified buyers.',
      icon: 'BarChart3',
    },
    {
      step: '03',
      title: 'Marketing & Matching',
      description: 'Targeted marketing through our network, databases, and platforms to connect your business with the right buyers.',
      icon: 'Target',
    },
    {
      step: '04',
      title: 'Negotiation & Settlement',
      description: 'Expert negotiation to achieve the best price, followed by professional management through to settlement.',
      icon: 'Handshake',
    },
  ],
  serviceAreas: [
    'Cairns CBD', 'Cairns Northern Beaches', 'Port Douglas', 'Atherton Tablelands',
    'Palm Cove', 'Mission Beach', 'Mareeba', 'Innisfail', 'Townsville', 'Far North Queensland',
  ],
  certifications: [
    'AIBB Accredited Business Broker',
    'Licensed Real Estate Agent',
    'Registered Business Valuer',
    'Member REIQ',
    'Professional Indemnity Insured',
  ],
  template: 'corporate',
  navLinks: [
    { label: 'Services', href: '#services' },
    { label: 'How We Work', href: '#process' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
};
