import React, { useState, useEffect, FormEvent } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Phone, Mail, MapPin, CheckCircle, ArrowRight, Star,
  Menu, X, ChevronDown, Play, Zap, Shield, Send, Loader2, ExternalLink,
} from 'lucide-react';
import { DemoBusiness, DemoStat } from '../../types';
import { getIcon } from '../../iconMap';
import { useCountUp, useInView } from '../../hooks';
import DemoBanner from '../shared/DemoBanner';
import DemoFooter from '../shared/DemoFooter';

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

interface IndustrialTemplateProps {
  business: DemoBusiness;
}

export default function IndustrialTemplate({ business }: IndustrialTemplateProps) {
  const router = useRouter();
  const demoSlug = router.query.slug as string;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const heroRef = React.useRef<HTMLElement>(null);
  const contactRef = React.useRef<HTMLElement>(null);
  const statsView = useInView(0.3);
  const servicesView = useInView(0.1);
  const whyUsView = useInView(0.15);
  const credentialsView = useInView(0.2);
  const galleryView = useInView(0.1);
  const testimonialsView = useInView(0.1);
  const serviceAreasView = useInView(0.15);
  const contactView = useInView(0.1);

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    setFormStatus('sending');
    setFormError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Phone: ${formData.phone || 'Not provided'}\n\nBusiness Demo: ${business.name}\n\n${formData.message}`,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send message');
      }
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setFormStatus('error');
      setFormError(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const heroEl = heroRef.current;
    const contactEl = contactRef.current;
    if (!heroEl || !contactEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroEl) setPastHero(!entry.isIntersecting);
          if (entry.target === contactEl) setContactVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(heroEl);
    observer.observe(contactEl);
    return () => observer.disconnect();
  }, []);

  const navLinks = business.navLinks || [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Projects', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const initials = business.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 3);

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
        <DemoBanner business={business} />

        {/* ─── Navigation ─────────────────────────────────────────────── */}
        <nav className={`sticky top-0 z-40 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5' : 'bg-white/80 backdrop-blur-md'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <a href="#home" className="flex items-center gap-2 group">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-105 transition-transform"
                  style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})` }}
                >
                  {initials}
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
        <section id="home" ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Image / Video */}
          <div className="absolute inset-0">
            {business.custom?.heroVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={business.heroImage}
                className="w-full h-full object-cover"
              >
                <source src={business.custom.heroVideo} type="video/mp4" />
              </video>
            ) : (
              <Image src={business.heroImage!} alt="Hero background" fill sizes="100vw" className="object-cover" unoptimized />
            )}
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
                <span className="text-sm font-medium text-white/80">{business.custom?.heroBadge || 'Trusted Scaffolding Since 2006'}</span>
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
                {(business.custom?.trustBadges || ['$20M Insured', 'Safety First', 'Australian Standards']).map((badge: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
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
        <section id="services" ref={servicesView.setRef} className="py-20 md:py-32 bg-gray-950 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 blur-3xl rounded-full" style={{ background: `radial-gradient(circle, ${business.primaryColor}, transparent 70%)` }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div
              className="text-center mb-16 md:mb-20"
              style={{
                opacity: servicesView.inView ? 1 : 0,
                transform: servicesView.inView ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s ease-out',
              }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6 text-white/70">
                <Zap className="h-4 w-4" />
                What We Offer
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
                Our <span style={{ color: business.accentColor }}>Services</span>
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                {business.custom?.servicesSubtitle || 'Comprehensive scaffolding solutions for every project, from residential repairs to large-scale industrial work.'}
              </p>
            </div>

            {/* Bento grid layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px]">
              {business.services.map((service, i) => {
                const isHero = i < 2;
                const isWide = i === 2;
                const cardContent = (
                  <>
                    <Image
                      src={service.image!}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="service-image object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:via-black/40 transition-all duration-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl" style={{ boxShadow: `inset 0 0 80px ${business.primaryColor}30` }} />

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
                      <div className="flex items-center gap-2 mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: business.accentColor }}>Learn more</span>
                        <ArrowRight className="h-3.5 w-3.5" style={{ color: business.accentColor }} />
                      </div>
                    </div>
                  </>
                );

                const cardClass = `service-card group relative rounded-2xl md:rounded-3xl overflow-hidden ${
                  isHero ? 'row-span-2' : ''
                } ${isWide ? 'lg:col-span-2' : ''}`;

                const cardStyle = {
                  opacity: servicesView.inView ? 1 : 0,
                  transform: servicesView.inView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.92)',
                  transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15}s`,
                };

                return service.id ? (
                  <Link
                    key={service.id}
                    href={`/demo/${demoSlug}/services/${service.id}`}
                    className={cardClass}
                    style={cardStyle}
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <div key={i} className={cardClass} style={cardStyle}>
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Why Choose Us ──────────────────────────────────────────── */}
        <section id="why-us" ref={whyUsView.setRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" style={{ background: `radial-gradient(circle at 70% 30%, ${business.primaryColor}, transparent 60%)` }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div
                style={{
                  opacity: whyUsView.inView ? 1 : 0,
                  transform: whyUsView.inView ? 'translateX(0)' : 'translateX(-50px)',
                  transition: 'all 0.8s ease-out',
                }}
              >
                <div className="inline-flex items-center gap-2 bg-blue-50 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6" style={{ color: business.primaryColor }}>
                  <Shield className="h-4 w-4" />
                  Why Choose Us
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  {business.custom?.whyUsHeading || 'Safety, Quality &'}<br />
                  <span style={{ color: business.primaryColor }}>{business.custom?.whyUsHighlight || 'Reliability'}</span> {business.custom?.whyUsTagline || 'You Can Count On'}
                </h2>
                <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                  {business.custom?.whyUsSubtitle || 'Since 2006, we\'ve been providing Cairns and Far North Queensland with professional scaffolding services. Our commitment to safety has made us the region\'s most trusted provider.'}
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
                  <div
                    key={i}
                    className="hover-lift bg-white rounded-3xl p-7 border border-gray-100 shadow-sm"
                    style={{
                      opacity: whyUsView.inView ? 1 : 0,
                      transform: whyUsView.inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                      transition: `all 0.6s ease-out ${0.2 + i * 0.1}s`,
                    }}
                  >
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

        {/* ─── Credentials / Accreditations ─────────────────────────────── */}
        {business.custom?.credentialLogos && business.custom.credentialLogos.length > 0 && (
          <section ref={credentialsView.setRef} className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className="text-center mb-12"
                style={{
                  opacity: credentialsView.inView ? 1 : 0,
                  transform: credentialsView.inView ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out',
                }}
              >
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
                  {business.custom?.credentialsTitle || 'Industry'} <span style={{ color: business.primaryColor }}>{business.custom?.credentialsHighlight || 'Accreditations'}</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  {business.custom?.credentialsSubtitle || 'Trusted and certified by leading industry bodies.'}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
                {business.custom.credentialLogos.map((logo: { src: string; alt: string }, i: number) => (
                  <div
                    key={i}
                    className="flex items-center justify-center px-4 py-3 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    style={{
                      opacity: credentialsView.inView ? 0.7 : 0,
                      transform: credentialsView.inView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                      transition: `all 0.5s ease-out ${0.2 + i * 0.15}s`,
                    }}
                  >
                    <Image src={logo.src} alt={logo.alt} width={160} height={64} className="h-12 md:h-16 w-auto object-contain" unoptimized />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── Image Gallery ──────────────────────────────────────────── */}
        {business.gallery && business.gallery.length > 0 && (
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
                  {business.custom?.gallerySubtitle || 'A selection of our recent scaffolding projects across Cairns and Far North Queensland.'}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {business.gallery.slice(0, 8).map((img, i) => {
                  const isLarge = i === 0 || i === 3;
                  const isExternal = img.link?.startsWith('http');
                  const Wrapper = img.link ? 'a' : 'div';
                  const linkProps = img.link
                    ? isExternal
                      ? { href: img.link, target: '_blank' as const, rel: 'noopener noreferrer' }
                      : { href: img.link }
                    : {};
                  return (
                    <Wrapper
                      key={i}
                      {...linkProps}
                      className={`gallery-item group/gallery relative rounded-2xl overflow-hidden cursor-pointer block ${
                        isLarge ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[4/3]'
                      }`}
                      style={{
                        opacity: galleryView.inView ? 1 : 0,
                        transform: galleryView.inView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.92)',
                        transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15}s`,
                      }}
                    >
                      <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" unoptimized />
                      <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 flex flex-col justify-end p-5">
                        <p className="text-white font-semibold text-sm">{img.alt}</p>
                        {img.link && (
                          <div className="flex items-center gap-1.5 mt-2">
                            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: business.accentColor }}>View Project</span>
                            {isExternal ? (
                              <ExternalLink className="h-3 w-3" style={{ color: business.accentColor }} />
                            ) : (
                              <ArrowRight className="h-3 w-3" style={{ color: business.accentColor }} />
                            )}
                          </div>
                        )}
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* View All Projects Link */}
              {business.custom?.projects?.length > 0 && (
                <div className="text-center mt-12">
                  <a
                    href={`/demo/${demoSlug}/projects`}
                    className="group inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:shadow-xl hover:-translate-y-0.5"
                    style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})` }}
                  >
                    View All Projects
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ─── Testimonials ───────────────────────────────────────────── */}
        <section id="testimonials" ref={testimonialsView.setRef} className="py-20 md:py-32 relative overflow-hidden" style={{ background: `linear-gradient(160deg, ${business.primaryColorDark} 0%, ${business.primaryColor}dd 100%)` }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${business.accentColor}, transparent 70%)` }} />
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${business.accentColor}, transparent 70%)` }} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
              style={{
                opacity: testimonialsView.inView ? 1 : 0,
                transform: testimonialsView.inView ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s ease-out',
              }}
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6 text-white/70">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  Client Reviews
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                  {business.custom?.testimonialsHeading || 'Trusted by Builders'}<br />
                  <span style={{ color: business.accentColor }}>{business.custom?.testimonialsHighlight || 'Across Cairns'}</span>
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

            <div className="grid lg:grid-cols-5 gap-5">
              <div
                className="lg:col-span-3 relative rounded-3xl overflow-hidden bg-white/[0.07] backdrop-blur-xl border border-white/10 p-8 md:p-10 flex flex-col justify-between"
                style={{
                  opacity: testimonialsView.inView ? 1 : 0,
                  transform: testimonialsView.inView ? 'translateX(0)' : 'translateX(-40px)',
                  transition: 'all 0.8s ease-out 0.15s',
                }}
              >
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

              <div className="lg:col-span-2 flex flex-col gap-5">
                {business.testimonials.slice(1).map((testimonial, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-3xl bg-white/[0.05] backdrop-blur-xl border border-white/10 p-6 md:p-7 flex flex-col justify-between hover:bg-white/[0.08] transition-colors duration-300"
                    style={{
                      opacity: testimonialsView.inView ? 1 : 0,
                      transform: testimonialsView.inView ? 'translateX(0)' : 'translateX(40px)',
                      transition: `all 0.6s ease-out ${0.25 + i * 0.12}s`,
                    }}
                  >
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
        <section ref={serviceAreasView.setRef} className="py-20 md:py-28 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${business.primaryColorDark}, ${business.primaryColor})` }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2
              className="text-4xl sm:text-5xl font-black text-white mb-5"
              style={{
                opacity: serviceAreasView.inView ? 1 : 0,
                transform: serviceAreasView.inView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out',
              }}
            >
              {(business.custom?.serviceAreasHeading || 'Proudly Serving\nFar North Queensland').split('\n').map((line: string, i: number) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            <p
              className="text-white/60 text-lg mb-12 max-w-2xl mx-auto"
              style={{
                opacity: serviceAreasView.inView ? 1 : 0,
                transform: serviceAreasView.inView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out 0.1s',
              }}
            >
              {business.custom?.serviceAreasSubtitle || 'From Cairns CBD to the Atherton Tablelands, we deliver scaffolding solutions across the region with national shipping available.'}
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {business.serviceAreas.map((area, i) => (
                <span
                  key={i}
                  className="glass text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white/15 transition-colors cursor-default"
                  style={{
                    opacity: serviceAreasView.inView ? 1 : 0,
                    transform: serviceAreasView.inView ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.9)',
                    transition: `all 0.4s ease-out ${0.2 + i * 0.05}s`,
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Contact / CTA Section ──────────────────────────────────── */}
        <section id="contact" ref={contactRef} className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={contactView.setRef} className="max-w-6xl mx-auto">
              <div
                className="text-center mb-16"
                style={{
                  opacity: contactView.inView ? 1 : 0,
                  transform: contactView.inView ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'all 0.8s ease-out',
                }}
              >
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

              <div className="grid lg:grid-cols-5 gap-8">
                {/* Contact Info Cards */}
                <div
                  className="lg:col-span-2 flex flex-col gap-5"
                  style={{
                    opacity: contactView.inView ? 1 : 0,
                    transform: contactView.inView ? 'translateX(0)' : 'translateX(-40px)',
                    transition: 'all 0.8s ease-out 0.15s',
                  }}
                >
                  <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="hover-lift flex items-center gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm group">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ background: `linear-gradient(135deg, ${business.primaryColor}15, ${business.accentColor}15)` }}>
                      <Phone className="h-6 w-6" style={{ color: business.primaryColor }} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-0.5">Call Us</div>
                      <div className="text-gray-500 text-sm">{business.phone}</div>
                      <div className="text-gray-400 text-xs">or {business.phoneAlt}</div>
                    </div>
                  </a>

                  <a href={`mailto:${business.email}`} className="hover-lift flex items-center gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm group">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ background: `linear-gradient(135deg, ${business.primaryColor}15, ${business.accentColor}15)` }}>
                      <Mail className="h-6 w-6" style={{ color: business.primaryColor }} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-0.5">Email Us</div>
                      <div className="text-gray-500 text-sm break-all">{business.email}</div>
                    </div>
                  </a>

                  <div className="hover-lift flex items-center gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(135deg, ${business.primaryColor}15, ${business.accentColor}15)` }}>
                      <MapPin className="h-6 w-6" style={{ color: business.primaryColor }} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-0.5">Visit Us</div>
                      <div className="text-gray-500 text-sm">{business.address}</div>
                    </div>
                  </div>

                  {/* Quick CTA */}
                  <div className="relative rounded-2xl overflow-hidden mt-auto">
                    <Image src={business.gallery?.[1]?.src || business.heroImage || '/placeholder.jpg'} alt="Background" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" unoptimized />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${business.primaryColorDark}ee, ${business.primaryColor}dd)` }} />
                    <div className="relative p-7 text-white">
                      <h3 className="text-xl font-black mb-2">Prefer to Talk?</h3>
                      <p className="text-white/70 text-sm mb-5">
                        {business.custom?.ctaSubtitle || 'Get a free quote for your project. Our expert team is ready to help.'}
                      </p>
                      <a
                        href={`tel:${business.phone.replace(/\s/g, '')}`}
                        className="group inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:shadow-xl hover:-translate-y-0.5"
                        style={{ color: business.primaryColor }}
                      >
                        <Phone className="h-4 w-4" />
                        {business.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div
                  className="lg:col-span-3"
                  style={{
                    opacity: contactView.inView ? 1 : 0,
                    transform: contactView.inView ? 'translateX(0)' : 'translateX(40px)',
                    transition: 'all 0.8s ease-out 0.25s',
                  }}
                >
                  <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
                    <h3 className="text-2xl font-black text-gray-900 mb-2">Send Us a Message</h3>
                    <p className="text-gray-500 text-sm mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

                    {formStatus === 'success' ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: `linear-gradient(135deg, ${business.primaryColor}15, ${business.accentColor}15)` }}>
                          <CheckCircle className="h-8 w-8 text-green-500" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                        <p className="text-gray-500 mb-6">Thank you for your enquiry. We&apos;ll be in touch shortly.</p>
                        <button
                          onClick={() => setFormStatus('idle')}
                          className="text-sm font-semibold transition-colors hover:underline"
                          style={{ color: business.primaryColor }}
                        >
                          Send another message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                            <input
                              id="contact-name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                              placeholder="John Smith"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-shadow"
                              style={{ '--tw-ring-color': `${business.primaryColor}40` } as React.CSSProperties}
                            />
                          </div>
                          <div>
                            <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                            <input
                              id="contact-email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                              placeholder="john@example.com"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-shadow"
                              style={{ '--tw-ring-color': `${business.primaryColor}40` } as React.CSSProperties}
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                          <input
                            id="contact-phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            placeholder="0412 345 678"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-shadow"
                            style={{ '--tw-ring-color': `${business.primaryColor}40` } as React.CSSProperties}
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                          <textarea
                            id="contact-message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                            placeholder="Tell us about your project..."
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-shadow resize-none"
                            style={{ '--tw-ring-color': `${business.primaryColor}40` } as React.CSSProperties}
                          />
                        </div>

                        {formStatus === 'error' && (
                          <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-xl text-sm">
                            <X className="h-4 w-4 flex-shrink-0" />
                            <span>{formError || 'Something went wrong. Please try again.'}</span>
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={formStatus === 'sending'}
                          className="group w-full inline-flex items-center justify-center gap-3 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                          style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})` }}
                        >
                          {formStatus === 'sending' ? (
                            <>
                              <Loader2 className="h-5 w-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              {business.custom?.mapEmbedUrl && (
                <div className="mt-10 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                  <iframe
                    src={business.custom.mapEmbedUrl}
                    className="w-full h-80 md:h-96 border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${business.name} Location`}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── Footer ─────────────────────────────────────────────────── */}
        <DemoFooter business={business} />

        {/* ─── Sticky Bottom CTA ────────────────────────────────────────── */}
        <div
          className="fixed bottom-0 left-0 right-0 z-50 transition-all duration-500"
          style={{
            opacity: pastHero && !contactVisible ? 1 : 0,
            transform: pastHero && !contactVisible ? 'translateY(0)' : 'translateY(100%)',
            pointerEvents: pastHero && !contactVisible ? 'auto' : 'none',
          }}
        >
          <div className="backdrop-blur-xl border-t" style={{ background: `${business.primaryColorDark}ee`, borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 md:h-[4.5rem] gap-4">
                <div className="hidden sm:flex items-center gap-3 min-w-0">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-xs flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})` }}
                  >
                    {initials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-bold text-sm truncate">{business.ctaText}</div>
                    <div className="text-white/50 text-xs truncate">Contact us today for a free, no-obligation quote</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0 sm:ml-auto w-full sm:w-auto">
                  <a
                    href={`tel:${business.phone.replace(/\s/g, '')}`}
                    className="hidden md:inline-flex items-center gap-2 text-white/80 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {business.phone}
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
                    style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})` }}
                  >
                    {business.ctaText}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
