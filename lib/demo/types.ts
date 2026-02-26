export interface DemoService {
  icon: string;
  title: string;
  description: string;
  image?: string;
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
  template: 'industrial' | 'corporate' | 'medical' | 'wakepark';
  navLinks?: { label: string; href: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  custom?: Record<string, any>;
}

// ─── Medical-specific types ───────────────────────────────────────────────

export interface Clinic {
  name: string;
  address: string;
  addressUrl: string;
  phone: string;
  fax: string;
  hours: { days: string; time: string }[];
  bookingUrl: string;
}

export interface Doctor {
  name: string;
  qualifications: string;
  interests: string[];
  location: string;
  acceptingNewPatients: boolean;
  imageUrl: string;
  imageAlt: string;
  bio: string;
}

export interface MedicalCustomData {
  clinics: Clinic[];
  doctors: Doctor[];
  onboardingSteps: ProcessStep[];
  accreditations: string[];
  bookingUrl: string;
  feeStandard: string;
  feeExtended: string;
  bulkBillingNote: string;
}
