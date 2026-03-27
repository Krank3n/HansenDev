export interface DemoService {
  icon: string;
  title: string;
  description: string;
  image?: string;
  id?: string;
  detailedDescription?: string;
  applications?: string[];
  advantages?: string[];
  images?: string[];
  fabricInfo?: string;
  credential?: string;
}

export interface DemoStat {
  value: string;
  label: string;
  suffix?: string;
}

export interface DemoFeature {
  icon: string;
  title: string;
  description: string;
}

export interface DemoTestimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
  link?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface DemoBusiness {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  phoneAlt: string;
  email: string;
  address: string;
  logoUrl: string;
  logoWhiteUrl: string;
  primaryColor: string;
  primaryColorDark: string;
  accentColor: string;
  heroImage?: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  ctaText: string;
  services: DemoService[];
  stats: DemoStat[];
  whyChooseUs: DemoFeature[];
  testimonials: DemoTestimonial[];
  gallery?: GalleryImage[];
  process?: ProcessStep[];
  serviceAreas: string[];
  certifications: string[];
  template: 'industrial' | 'wakepark';
  navLinks?: { label: string; href: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  custom?: Record<string, any>;
}
