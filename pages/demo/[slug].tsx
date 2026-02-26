import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Truck,
  HardHat,
  Menu,
  X,
  Building2,
  Wrench,
  Plane,
  Anchor,
  Layers,
  ArrowUp,
  ChevronDown,
  Play,
  Zap,
} from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface DemoService {
  icon: string;
  title: string;
  description: string;
  image: string;
}

interface DemoStat {
  value: string;
  label: string;
  suffix?: string;
}

interface DemoFeature {
  icon: string;
  title: string;
  description: string;
}

interface DemoTestimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface DemoBusiness {
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
  heroImage: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  ctaText: string;
  services: DemoService[];
  stats: DemoStat[];
  whyChooseUs: DemoFeature[];
  testimonials: DemoTestimonial[];
  gallery: GalleryImage[];
  serviceAreas: string[];
  certifications: string[];
}

// ─── Demo Data ───────────────────────────────────────────────────────────────

const demoBusinesses: Record<string, DemoBusiness> = {
  instantalloy: {
    name: 'Instant Alloy Scaffolding',
    tagline: 'Cairns\' Trusted Scaffolding Experts Since 2006',
    description:
      'With over 15 years of experience, Instant Alloy Scaffolding provides safe, reliable scaffolding solutions for residential, commercial, and industrial projects across Cairns and Far North Queensland.',
    phone: '07 4041 0064',
    phoneAlt: '1300 128 968',
    email: 'sales@instantalloyscaffolding.com.au',
    address: '6 Arc Close, Aeroglen, Cairns',
    logoUrl: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/image30.png',
    logoWhiteUrl: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/White-Logo.png',
    primaryColor: '#006CB6',
    primaryColorDark: '#002453',
    accentColor: '#00A3E0',
    heroImage: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/Gallery-1-scaled.jpg',
    heroTitle: 'Professional Scaffolding',
    heroHighlight: 'Solutions You Can Trust',
    heroSubtitle:
      'Safety-first scaffolding hire, sales & installation for Cairns and Far North Queensland. Fully insured up to $20 million in public liability.',
    ctaText: 'Get a Free Quote',
    services: [
      {
        icon: 'Building2',
        title: 'Steel & Alloy Scaffolding',
        description: 'Full range of steel and alloy scaffolding for construction, renovation, and maintenance projects of any scale.',
        image: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/Gallery-1-scaled.jpg',
      },
      {
        icon: 'HardHat',
        title: 'Installation & Dismantle',
        description: 'Professional installation and dismantling by our fully qualified team with dedicated project managers.',
        image: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/gallery-2.jpg',
      },
      {
        icon: 'Truck',
        title: 'DIY Dry Hire',
        description: 'Convenient self-hire options with delivery and collection service. All equipment certified to Australian standards.',
        image: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/Gallery-3-scaled.jpg',
      },
      {
        icon: 'Anchor',
        title: 'Marine Scaffolding',
        description: 'Specialised scaffolding for marine environments, docks, and waterfront projects across North Queensland.',
        image: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/Gallery-4.jpg',
      },
      {
        icon: 'Plane',
        title: 'Aviation Scaffolding',
        description: 'Purpose-built scaffolding solutions for aircraft maintenance, hangars, and aviation facilities.',
        image: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/Gallery-5-scaled.jpg',
      },
      {
        icon: 'Wrench',
        title: 'Industrial Scaffolding',
        description: 'Heavy-duty scaffolding for industrial plants, refineries, and large-scale commercial projects.',
        image: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/Gallery-6.jpg',
      },
      {
        icon: 'Layers',
        title: 'Stair Access Solutions',
        description: 'Safe stair access scaffolding systems for multi-level buildings and complex access requirements.',
        image: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/Gallery7-scaled.jpg',
      },
      {
        icon: 'Shield',
        title: 'Fall & Edge Protection',
        description: 'Comprehensive fall protection and edge protection systems compliant with Australian safety standards.',
        image: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/last-section-1.jpg',
      },
      {
        icon: 'ArrowUp',
        title: 'Elevated Work Platforms',
        description: 'Scissor lifts, boom lifts, and elevated work platforms for safe working at height.',
        image: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/last-section-2-scaled.jpeg',
      },
    ],
    stats: [
      { value: '15', label: 'Years Experience', suffix: '+' },
      { value: '$20M', label: 'Public Liability' },
      { value: '100', label: 'Safety Record', suffix: '%' },
      { value: '1000', label: 'Projects Completed', suffix: '+' },
    ],
    whyChooseUs: [
      {
        icon: 'Shield',
        title: 'Safety First Policy',
        description: 'Zero harm policy with dedicated onsite safety supervisors and full WHS & SWMS certification on every job.',
      },
      {
        icon: 'Award',
        title: 'Fully Certified',
        description: 'All products comply with Australian Safety Standards & WorkCover. Fully insured up to $20 million.',
      },
      {
        icon: 'Users',
        title: 'Expert Team',
        description: 'All workforce experienced, competent, and fully qualified with a dedicated project manager on every job.',
      },
      {
        icon: 'Truck',
        title: 'Delivery & Collection',
        description: 'Convenient delivery and collection service across Cairns and FNQ with national shipping available.',
      },
    ],
    testimonials: [
      {
        quote: 'Instant Alloy Scaffolding provided excellent service for our commercial project. Their team was professional, on time, and safety-conscious throughout.',
        author: 'Mark T.',
        role: 'Construction Manager',
        rating: 5,
      },
      {
        quote: 'We use Instant Alloy for all our scaffolding needs. Their dry hire service is convenient and the equipment is always in top condition.',
        author: 'Sarah L.',
        role: 'Property Developer',
        rating: 5,
      },
      {
        quote: 'Great team, great service. They handled the scaffolding for our resort renovation perfectly. Highly recommend for any commercial project.',
        author: 'James R.',
        role: 'Resort Manager',
        rating: 5,
      },
    ],
    gallery: [
      { src: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/Gallery-1-scaled.jpg', alt: 'Commercial scaffolding project' },
      { src: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/gallery-2.jpg', alt: 'Residential scaffolding installation' },
      { src: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/Gallery-3-scaled.jpg', alt: 'Industrial scaffolding setup' },
      { src: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/Gallery-4.jpg', alt: 'Marine scaffolding project' },
      { src: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/Gallery-5-scaled.jpg', alt: 'High-rise scaffolding access' },
      { src: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/Gallery-6.jpg', alt: 'Resort scaffolding renovation' },
      { src: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/Gallery7-scaled.jpg', alt: 'Complex scaffolding structure' },
    ],
    serviceAreas: [
      'Cairns CBD', 'Cairns Beaches', 'Port Douglas', 'Atherton Tablelands',
      'Palm Cove', 'Mission Beach', 'Mareeba', 'Innisfail', 'Cooktown', 'Far North Queensland',
    ],
    certifications: [
      'Australian Safety Standards Compliant',
      'WorkCover Approved',
      '$20M Public Liability Insurance',
      'WHS & SWMS Certified',
      'Australian Warranty on All Products',
    ],
  },
};

// ─── Icon Map ────────────────────────────────────────────────────────────────

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Phone, Mail, MapPin, Shield, Award, Users, Clock, CheckCircle, ArrowRight,
  Star, Truck, HardHat, Menu, X, Building2, Wrench, Plane, Anchor,
  Layers, ArrowUp, Zap,
};

function getIcon(name: string, className?: string) {
  const Icon = iconMap[name];
  return Icon ? <Icon className={className} /> : null;
}

// ─── Animated Counter Hook ───────────────────────────────────────────────────

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let frame: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start]);
  return count;
}

// ─── Intersection Observer Hook ──────────────────────────────────────────────

function useInView(threshold = 0.2) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return { setRef, inView };
}

// ─── Stat Counter Component ─────────────────────────────────────────────────

function StatCounter({ stat, inView }: { stat: DemoStat; inView: boolean }) {
  const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''), 10);
  const isNumeric = !isNaN(numericValue) && !stat.value.startsWith('$');
  const count = useCountUp(isNumeric ? numericValue : 0, 2000, inView);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tabular-nums">
        {isNumeric ? count : stat.value}
        {isNumeric && stat.suffix ? stat.suffix : ''}
      </div>
      <div className="text-sm md:text-base text-white/60 uppercase tracking-wider font-medium">
        {stat.label}
      </div>
    </div>
  );
}

// ─── Demo Page ───────────────────────────────────────────────────────────────

interface DemoPageProps {
  business: DemoBusiness;
  slug: string;
}

export default function DemoPage({ business }: DemoPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const statsView = useInView(0.3);
  const galleryView = useInView(0.1);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Projects', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <Head>
        <title>{business.name} | Demo Landing Page</title>
        <meta name="description" content={business.description} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --primary: ${business.primaryColor};
            --primary-dark: ${business.primaryColorDark};
            --accent: ${business.accentColor};
          }
          * { font-family: 'Inter', system-ui, sans-serif; }
          html { scroll-behavior: smooth; }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-60px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(60px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-fade-up { animation: fadeInUp 0.8s ease-out both; }
          .animate-fade-up-delay-1 { animation: fadeInUp 0.8s ease-out 0.1s both; }
          .animate-fade-up-delay-2 { animation: fadeInUp 0.8s ease-out 0.2s both; }
          .animate-fade-up-delay-3 { animation: fadeInUp 0.8s ease-out 0.3s both; }
          .animate-fade-up-delay-4 { animation: fadeInUp 0.8s ease-out 0.4s both; }
          .animate-scale-in { animation: scaleIn 0.6s ease-out both; }
          .animate-slide-left { animation: slideInLeft 0.8s ease-out both; }
          .animate-slide-right { animation: slideInRight 0.8s ease-out 0.2s both; }
          .animate-gradient { background-size: 200% 200%; animation: gradient 4s ease infinite; }
          .shimmer-text {
            background: linear-gradient(90deg, ${business.accentColor}, #fff, ${business.accentColor});
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 3s linear infinite;
          }
          .glass { background: rgba(255,255,255,0.08); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.12); }
          .glass-dark { background: rgba(0,0,0,0.3); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08); }
          .hover-lift { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
          .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
          .service-card { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
          .service-card:hover .service-image { transform: scale(1.1); }
          .service-image { transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
          .gallery-item { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
          .gallery-item:hover { transform: scale(1.03); z-index: 10; }
          .gallery-item:hover .gallery-overlay { opacity: 1; }
          .gallery-overlay { transition: opacity 0.4s ease; }
          .glow-pulse { box-shadow: 0 0 40px rgba(0, 108, 182, 0.3); animation: glowPulse 3s ease-in-out infinite; }
          @keyframes glowPulse {
            0%, 100% { box-shadow: 0 0 20px rgba(0, 108, 182, 0.2); }
            50% { box-shadow: 0 0 60px rgba(0, 108, 182, 0.4); }
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

        {/* ─── Demo Banner ────────────────────────────────────────────── */}
        <div
          className="text-white text-center py-2.5 px-4 text-sm relative z-50 animate-gradient"
          style={{ background: `linear-gradient(135deg, ${business.primaryColorDark}, ${business.primaryColor}, ${business.accentColor})`, backgroundSize: '200% 200%' }}
        >
          <span className="opacity-90">Demo landing page concept by </span>
          <a href="https://hansendev.com.au" target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-2 underline-offset-2 hover:opacity-80 transition-opacity">
            HansenDev
          </a>
          <span className="opacity-90"> — </span>
          <a href="https://hansendev.com.au/#contact" target="_blank" rel="noopener noreferrer" className="font-semibold bg-white/20 px-3 py-0.5 rounded-full hover:bg-white/30 transition-colors ml-1">
            Get yours built today &rarr;
          </a>
        </div>

        {/* ─── Navigation ─────────────────────────────────────────────── */}
        <nav className={`sticky top-0 z-40 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5' : 'bg-white/80 backdrop-blur-md'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <a href="#home" className="flex items-center gap-2 group">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-105 transition-transform"
                  style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})` }}
                >
                  IAS
                </div>
                <span className="font-bold text-base md:text-lg hidden sm:block" style={{ color: business.primaryColorDark }}>
                  {business.name}
                </span>
              </a>

              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="relative text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
                    {link.label}
                  </a>
                ))}
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="ml-4 inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0"
                  style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})` }}
                >
                  <Phone className="h-4 w-4" />
                  {business.phone}
                </a>
              </div>

              <button className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="lg:hidden border-t border-gray-100 py-4 space-y-1 animate-fade-up">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl text-gray-600 hover:bg-gray-50 font-medium transition-colors">
                    {link.label}
                  </a>
                ))}
                <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 text-white px-4 py-3 rounded-xl font-semibold mt-3" style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})` }}>
                  <Phone className="h-4 w-4" />
                  Call {business.phone}
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* ─── Hero Section ───────────────────────────────────────────── */}
        <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={business.heroImage} alt="Scaffolding project" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${business.primaryColorDark}ee 0%, ${business.primaryColorDark}cc 40%, ${business.primaryColor}99 100%)` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Animated geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-white/10" style={{ animation: 'float 8s ease-in-out infinite' }} />
            <div className="absolute bottom-32 right-40 w-48 h-48 rounded-full border border-white/5" style={{ animation: 'float 6s ease-in-out infinite 1s' }} />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full" style={{ background: `radial-gradient(circle, ${business.accentColor}15, transparent 70%)`, animation: 'float 10s ease-in-out infinite 0.5s' }} />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="animate-fade-up inline-flex items-center gap-3 rounded-full pl-1.5 pr-5 py-1.5 mb-8 border border-white/15 bg-white/[0.06] backdrop-blur-xl">
                <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                  <MapPin className="h-3.5 w-3.5" style={{ color: business.accentColor }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: business.accentColor }}>Cairns</span>
                </div>
                <span className="text-sm font-medium text-white/80">Trusted Scaffolding Since 2006</span>
              </div>

              <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6 tracking-tight">
                {business.heroTitle}
                <span className="block shimmer-text">{business.heroHighlight}</span>
              </h1>

              <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
                {business.heroSubtitle}
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 active:translate-y-0 glow-pulse"
                  style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})` }}
                >
                  {business.ctaText}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="group inline-flex items-center justify-center gap-3 glass text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:bg-white/15"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5" />
                  </div>
                  Call Now
                </a>
              </div>

              {/* Trust badges */}
              <div className="animate-fade-up-delay-4 flex flex-wrap gap-4">
                {['$20M Insured', 'Safety First', 'Australian Standards'].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator - hidden on mobile */}
          <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
            <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="h-5 w-5 text-white/40" />
          </div>
        </section>

        {/* ─── Stats Bar ──────────────────────────────────────────────── */}
        <section ref={statsView.setRef} className="relative -mt-1" style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.primaryColorDark})` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {business.stats.map((stat, i) => (
                <StatCounter key={i} stat={stat} inView={statsView.inView} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Services Section ───────────────────────────────────────── */}
        <section id="services" className="py-20 md:py-32 bg-gray-950 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 blur-3xl rounded-full" style={{ background: `radial-gradient(circle, ${business.primaryColor}, transparent 70%)` }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 bg-white/10 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6 text-white/70">
                <Zap className="h-4 w-4" />
                What We Offer
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
                Our <span style={{ color: business.accentColor }}>Services</span>
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                Comprehensive scaffolding solutions for every project, from residential repairs to large-scale industrial work.
              </p>
            </div>

            {/* Bento grid layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px]">
              {business.services.map((service, i) => {
                // First two cards span taller, third spans wide on lg
                const isHero = i < 2;
                const isWide = i === 2;
                return (
                  <div
                    key={i}
                    className={`service-card group relative rounded-2xl md:rounded-3xl overflow-hidden ${
                      isHero ? 'row-span-2' : ''
                    } ${isWide ? 'lg:col-span-2' : ''}`}
                  >
                    {/* Background image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-image absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:via-black/40 transition-all duration-500" />
                    {/* Colored edge glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl" style={{ boxShadow: `inset 0 0 80px ${business.primaryColor}30` }} />

                    {/* Number tag */}
                    <div className="absolute top-5 left-5 glass rounded-full w-9 h-9 flex items-center justify-center">
                      <span className="text-white/70 text-xs font-bold">0{i + 1}</span>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          style={{ background: `linear-gradient(135deg, ${business.primaryColor}cc, ${business.accentColor}cc)` }}
                        >
                          {getIcon(service.icon, 'h-5 w-5 text-white')}
                        </div>
                        <h3 className={`font-bold text-white ${isHero ? 'text-xl md:text-2xl' : 'text-lg'}`}>{service.title}</h3>
                      </div>
                      <p className={`text-white/60 leading-relaxed max-w-md group-hover:text-white/80 transition-colors duration-300 ${isHero ? 'text-sm md:text-base' : 'text-sm'}`}>
                        {service.description}
                      </p>
                      {/* Hover arrow */}
                      <div className="flex items-center gap-2 mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: business.accentColor }}>Learn more</span>
                        <ArrowRight className="h-3.5 w-3.5" style={{ color: business.accentColor }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Why Choose Us ──────────────────────────────────────────── */}
        <section id="why-us" className="py-20 md:py-32 bg-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" style={{ background: `radial-gradient(circle at 70% 30%, ${business.primaryColor}, transparent 60%)` }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6" style={{ color: business.primaryColor }}>
                  <Shield className="h-4 w-4" />
                  Why Choose Us
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  Safety, Quality &amp;<br />
                  <span style={{ color: business.primaryColor }}>Reliability</span> You Can Count On
                </h2>
                <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                  Since 2006, we&apos;ve been providing Cairns and Far North Queensland with professional scaffolding services. Our commitment to safety has made us the region&apos;s most trusted provider.
                </p>

                <div className="space-y-4 mb-10">
                  {business.certifications.map((cert, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ background: `${business.primaryColor}15` }}>
                        <CheckCircle className="h-4 w-4" style={{ color: business.primaryColor }} />
                      </div>
                      <span className="text-gray-700 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1"
                  style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})` }}
                >
                  Request Capability Statement
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {business.whyChooseUs.map((feature, i) => (
                  <div key={i} className="hover-lift bg-white rounded-3xl p-7 border border-gray-100 shadow-sm">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: `linear-gradient(135deg, ${business.primaryColor}15, ${business.accentColor}15)` }}
                    >
                      {getIcon(feature.icon, 'h-6 w-6')}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Image Gallery ──────────────────────────────────────────── */}
        <section id="gallery" ref={galleryView.setRef} className="py-20 md:py-32 bg-gray-950 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6 text-white/70">
                <Play className="h-4 w-4" />
                Our Work
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
                Project <span style={{ color: business.accentColor }}>Gallery</span>
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                A selection of our recent scaffolding projects across Cairns and Far North Queensland.
              </p>
            </div>

            {/* Masonry-style gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {business.gallery.map((img, i) => {
                const isLarge = i === 0 || i === 3;
                return (
                  <div
                    key={i}
                    className={`gallery-item relative rounded-2xl overflow-hidden cursor-pointer ${
                      isLarge ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[4/3]'
                    }`}
                    style={{
                      opacity: galleryView.inView ? 1 : 0,
                      transform: galleryView.inView ? 'translateY(0)' : 'translateY(40px)',
                      transition: `all 0.6s ease-out ${i * 0.1}s`,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 flex items-end p-5">
                      <p className="text-white font-semibold text-sm">{img.alt}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Testimonials ───────────────────────────────────────────── */}
        <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden" style={{ background: `linear-gradient(160deg, ${business.primaryColorDark} 0%, ${business.primaryColor}dd 100%)` }}>
          {/* Background accents */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${business.accentColor}, transparent 70%)` }} />
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${business.accentColor}, transparent 70%)` }} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6 text-white/70">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  Client Reviews
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                  Trusted by Builders<br />
                  <span style={{ color: business.accentColor }}>Across Cairns</span>
                </h2>
              </div>
              <div className="flex items-center gap-3 pb-2">
                <div className="flex -space-x-3">
                  {business.testimonials.map((t, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center text-white font-bold text-sm" style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})`, zIndex: 3 - i }}>
                      {t.author.charAt(0)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/50 text-xs">5.0 from verified clients</span>
                </div>
              </div>
            </div>

            {/* Featured testimonial + side cards */}
            <div className="grid lg:grid-cols-5 gap-5">
              {/* Featured card */}
              <div className="lg:col-span-3 relative rounded-3xl overflow-hidden bg-white/[0.07] backdrop-blur-xl border border-white/10 p-8 md:p-10 flex flex-col justify-between">
                {/* Large quote mark */}
                <div className="absolute top-6 right-8 text-[120px] font-serif leading-none select-none opacity-[0.07] text-white">
                  &ldquo;
                </div>
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(business.testimonials[0].rating)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 relative z-10 font-medium">
                    &ldquo;{business.testimonials[0].quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl" style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})` }}>
                    {business.testimonials[0].author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{business.testimonials[0].author}</div>
                    <div className="text-sm text-white/50">{business.testimonials[0].role}</div>
                  </div>
                </div>
              </div>

              {/* Stacked side cards */}
              <div className="lg:col-span-2 flex flex-col gap-5">
                {business.testimonials.slice(1).map((testimonial, i) => (
                  <div key={i} className="flex-1 rounded-3xl bg-white/[0.05] backdrop-blur-xl border border-white/10 p-6 md:p-7 flex flex-col justify-between hover:bg-white/[0.08] transition-colors duration-300">
                    <div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed mb-5 relative z-10">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})` }}>
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{testimonial.author}</div>
                        <div className="text-xs text-white/40">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Service Areas ──────────────────────────────────────────── */}
        <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${business.primaryColorDark}, ${business.primaryColor})` }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
              Proudly Serving<br />Far North Queensland
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
              From Cairns CBD to the Atherton Tablelands, we deliver scaffolding solutions across the region with national shipping available.
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {business.serviceAreas.map((area, i) => (
                <span key={i} className="glass text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white/15 transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Contact / CTA Section ──────────────────────────────────── */}
        <section id="contact" className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-green-50 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6 text-green-600">
                  <Phone className="h-4 w-4" />
                  Get In Touch
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5">
                  Ready to Start Your <span style={{ color: business.primaryColor }}>Project?</span>
                </h2>
                <p className="text-lg text-gray-500 max-w-xl mx-auto">
                  Contact us today for a free, no-obligation quote. Our friendly team is standing by.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-5 mb-12">
                <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="hover-lift flex flex-col items-center p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-sm group">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ background: `linear-gradient(135deg, ${business.primaryColor}15, ${business.accentColor}15)` }}>
                    <Phone className="h-7 w-7" style={{ color: business.primaryColor }} />
                  </div>
                  <div className="font-bold text-gray-900 text-lg mb-1">Call Us</div>
                  <div className="text-gray-500">{business.phone}</div>
                  <div className="text-gray-400 text-sm mt-1">or {business.phoneAlt}</div>
                </a>

                <a href={`mailto:${business.email}`} className="hover-lift flex flex-col items-center p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-sm group">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ background: `linear-gradient(135deg, ${business.primaryColor}15, ${business.accentColor}15)` }}>
                    <Mail className="h-7 w-7" style={{ color: business.primaryColor }} />
                  </div>
                  <div className="font-bold text-gray-900 text-lg mb-1">Email Us</div>
                  <div className="text-gray-500 text-sm break-all">{business.email}</div>
                </a>

                <div className="hover-lift flex flex-col items-center p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: `linear-gradient(135deg, ${business.primaryColor}15, ${business.accentColor}15)` }}>
                    <MapPin className="h-7 w-7" style={{ color: business.primaryColor }} />
                  </div>
                  <div className="font-bold text-gray-900 text-lg mb-1">Visit Us</div>
                  <div className="text-gray-500 text-center text-sm">{business.address}</div>
                </div>
              </div>

              {/* Big CTA */}
              <div className="relative rounded-3xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={business.gallery[1]?.src || business.heroImage} alt="Scaffolding" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${business.primaryColorDark}ee, ${business.primaryColor}dd)` }} />
                <div className="relative p-10 md:p-16 text-center text-white">
                  <h3 className="text-3xl md:text-4xl font-black mb-4">
                    Pick Up the Phone &amp; Call Today!
                  </h3>
                  <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg">
                    Get a free quote for your scaffolding project. Our expert team is ready to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={`tel:${business.phone.replace(/\s/g, '')}`}
                      className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-1"
                      style={{ color: business.primaryColor }}
                    >
                      <Phone className="h-5 w-5 group-hover:animate-bounce" />
                      {business.phone}
                    </a>
                    <a
                      href={`tel:${business.phoneAlt.replace(/\s/g, '')}`}
                      className="inline-flex items-center justify-center gap-3 glass text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:bg-white/15"
                    >
                      <Phone className="h-5 w-5" />
                      {business.phoneAlt}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Footer ─────────────────────────────────────────────────── */}
        <footer className="bg-gray-950 text-white pt-16 pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-10 mb-12">
              <div className="md:col-span-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={business.logoWhiteUrl} alt={business.name} className="h-12 w-auto mb-5" />
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  {business.tagline}. Providing professional scaffolding solutions across Cairns and Far North Queensland for over 15 years.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-gray-300">Quick Links</h4>
                <div className="space-y-3">
                  {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="block text-gray-500 hover:text-white text-sm transition-colors">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-gray-300">Contact</h4>
                <div className="space-y-4 text-sm text-gray-500">
                  <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-white transition-colors">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>{business.phone}</span>
                  </a>
                  <a href={`mailto:${business.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span>{business.email}</span>
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>{business.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
              </p>
              <p className="text-gray-700 text-xs">
                Demo concept by{' '}
                <a href="https://hansendev.com.au" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400 font-semibold transition-colors">
                  HansenDev
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

// ─── Static Generation ───────────────────────────────────────────────────────

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(demoBusinesses).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<DemoPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const business = demoBusinesses[slug];
  if (!business) return { notFound: true };
  return { props: { business, slug } };
};
