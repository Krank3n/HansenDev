import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  Phone, Mail, MapPin, Menu, X, Star, ChevronDown,
  Zap, Users, Shield, Award, Sun, Clock,
  Instagram, Facebook, Play, ArrowRight,
} from 'lucide-react';
import { DemoBusiness } from '../../types';
import { useCountUp, useInView } from '../../hooks';
import DemoBanner from '../shared/DemoBanner';

// ─── Water wave SVG divider ──────────────────────────────────────────────
function WaveDivider({ flip, color = '#0f172a' }: { flip?: boolean; color?: string }) {
  return (
    <div className={`wave-divider relative w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`} style={{ marginTop: '-1px', marginBottom: '-1px' }}>
      <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="w-[200%] h-[60px] md:h-[80px]">
        <path
          d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 C1400,120 1600,0 1800,60 C2000,120 2200,0 2400,60 L2400,120 L0,120 Z"
          fill={color}
          fillOpacity="0.15"
        />
        <path
          d="M0,80 C150,30 350,100 600,80 C850,60 1050,110 1200,80 C1350,50 1550,100 1800,80 C2050,60 2250,110 2400,80 L2400,120 L0,120 Z"
          fill={color}
          fillOpacity="0.08"
        />
      </svg>
    </div>
  );
}

// ─── Splash / droplet particles ─────────────────────────────────────────
function SplashParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Water droplets */}
      {[10, 25, 45, 70, 88].map((left, i) => (
        <div
          key={`drop-${i}`}
          className="droplet absolute top-0 w-2 h-3 rounded-full bg-sky-400/30"
          style={{ left: `${left}%` }}
        />
      ))}
      {/* Rising bubbles */}
      {[15, 35, 60, 82].map((left, i) => (
        <div
          key={`bubble-${i}`}
          className="bubble absolute bottom-0 w-3 h-3 rounded-full border border-sky-400/20"
          style={{ left: `${left}%` }}
        />
      ))}
    </div>
  );
}

// ─── Ripple rings (for CTA areas) ───────────────────────────────────────
function RippleRings({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="ripple-circle absolute inset-0 rounded-full border border-sky-400/20"
        />
      ))}
    </div>
  );
}

// ─── Park open/closed based on AEST time ────────────────────────────────
function useParkStatus() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Australia/Brisbane' }));
      const hour = now.getHours();
      setIsOpen(hour >= 10 && hour < 18); // 10am - 6pm every day
    };
    check();
    const interval = setInterval(check, 60_000);
    return () => clearInterval(interval);
  }, []);

  return isOpen;
}

// ─── Animated stat counter ──────────────────────────────────────────────
function StatNumber({ value, suffix, start }: { value: string; suffix?: string; start: boolean }) {
  const num = parseFloat(value.replace(/,/g, ''));
  const count = useCountUp(num, 2000, start);
  const display = num >= 1000 ? count.toLocaleString() : num % 1 !== 0 ? count.toFixed(1) : count;
  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

// ─── Stats bar with in-view trigger ─────────────────────────────────────
function StatsBar({ stats }: { stats: { value: string; label: string; suffix?: string }[] }) {
  const { setRef, inView } = useInView(0.3);
  return (
    <section ref={setRef} className={`py-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                <StatNumber value={stat.value} suffix={stat.suffix} start={inView} />
              </div>
              <div className="text-slate-400 text-sm uppercase tracking-wider mt-2 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section wrapper with fade-in ───────────────────────────────────────
function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const { setRef, inView } = useInView(0.1);
  return (
    <section
      ref={setRef}
      id={id}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </section>
  );
}

// ─── Quick action card ──────────────────────────────────────────────────
function QuickActionCard({
  icon: Icon,
  title,
  description,
  href,
  image,
}: {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-sky-400/50 hover:bg-white/10 transition-all duration-300"
    >
      {image && (
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
          <Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" unoptimized />
        </div>
      )}
      <div className="relative p-6 flex flex-col gap-3">
        <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
          <Icon className="w-6 h-6 text-sky-400" />
        </div>
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        <span className="text-sky-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn more <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </a>
  );
}

// ─── Pricing card ───────────────────────────────────────────────────────
function PricingCard({
  name,
  price,
  features,
  highlight,
  ctaHref,
}: {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
  ctaHref: string;
}) {
  return (
    <div
      className={`relative rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] ${
        highlight
          ? 'border-sky-400/50 bg-gradient-to-br from-sky-500/10 to-cyan-500/10 shadow-lg shadow-sky-500/10'
          : 'border-white/10 bg-white/5'
      }`}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
          Most Popular
        </div>
      )}
      <h3 className="text-white font-bold text-xl mb-2">{name}</h3>
      <div className="text-3xl font-black text-sky-400 mb-4">{price}</div>
      <ul className="space-y-2 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
            <span className="text-sky-400 mt-0.5">&#10003;</span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href={ctaHref}
        className={`block text-center py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all ${
          highlight
            ? 'bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 hover:shadow-lg hover:shadow-sky-500/25'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        Book Now
      </a>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════
// MAIN TEMPLATE
// ═════════════════════════════════════════════════════════════════════════
export default function WakeParkTemplate({ business }: { business: DemoBusiness }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(40);
  const parkOpen = useParkStatus();
  const videoRef = useRef<HTMLVideoElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  const custom = business.custom || {};
  const bookingUrl = custom.bookingUrl || '#';

  useEffect(() => {
    const measureBanner = () => {
      if (bannerRef.current) {
        setBannerHeight(bannerRef.current.offsetHeight);
      }
    };
    measureBanner();
    window.addEventListener('resize', measureBanner);

    const onScroll = () => setScrolled(window.scrollY > (bannerRef.current?.offsetHeight ?? 40));
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measureBanner);
    };
  }, []);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  };

  return (
    <>
      <Head>
        <title>{business.name} | {business.tagline}</title>
        <meta name="description" content={business.description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        .cwp-body { font-family: 'Inter', sans-serif; }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(14, 165, 233, 0.3); }
          50% { box-shadow: 0 0 40px rgba(14, 165, 233, 0.6); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .skew-section {
          clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
          padding-top: 6rem;
          padding-bottom: 6rem;
        }
        .skew-section-reverse {
          clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
          padding-top: 6rem;
          padding-bottom: 6rem;
        }
        @media (max-width: 768px) {
          .skew-section, .skew-section-reverse {
            clip-path: polygon(0 2%, 100% 0, 100% 98%, 0 100%);
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
        }
        /* ── Water / Splash animations ─────────────────────────── */
        @keyframes wave-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes droplet-fall {
          0% { transform: translateY(-20px) scale(1); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(60px) scale(0.5); opacity: 0; }
        }
        @keyframes splash-up {
          0% { transform: translateY(0) scaleY(1); opacity: 0.8; }
          50% { transform: translateY(-30px) scaleY(1.3); opacity: 0.5; }
          100% { transform: translateY(-50px) scaleY(0.5); opacity: 0; }
        }
        @keyframes bubble-rise {
          0% { transform: translateY(0) scale(1); opacity: 0.4; }
          100% { transform: translateY(-80px) scale(0.3); opacity: 0; }
        }
        .wave-divider svg {
          animation: wave-move 8s linear infinite;
        }
        .ripple-circle {
          animation: ripple 3s ease-out infinite;
        }
        .ripple-circle:nth-child(2) { animation-delay: 1s; }
        .ripple-circle:nth-child(3) { animation-delay: 2s; }
        .droplet {
          animation: droplet-fall 2s ease-in infinite;
        }
        .droplet:nth-child(2) { animation-delay: 0.4s; left: 20%; }
        .droplet:nth-child(3) { animation-delay: 0.8s; left: 50%; }
        .droplet:nth-child(4) { animation-delay: 1.2s; left: 75%; }
        .droplet:nth-child(5) { animation-delay: 1.6s; left: 90%; }
        .splash-particle {
          animation: splash-up 2.5s ease-out infinite;
        }
        .splash-particle:nth-child(2) { animation-delay: 0.3s; }
        .splash-particle:nth-child(3) { animation-delay: 0.6s; }
        .splash-particle:nth-child(4) { animation-delay: 0.9s; }
        .bubble {
          animation: bubble-rise 3s ease-out infinite;
        }
        .bubble:nth-child(2) { animation-delay: 0.7s; left: 30%; }
        .bubble:nth-child(3) { animation-delay: 1.4s; left: 60%; }
        .bubble:nth-child(4) { animation-delay: 2.1s; left: 85%; }
      `}</style>

      <div className="cwp-body bg-slate-950 text-white min-h-screen">
        {/* ── DEMO BANNER ────────────────────────────────────────── */}
        <div ref={bannerRef}>
          <DemoBanner business={business} />
        </div>

        {/* ── GLASSMORPHISM HEADER ───────────────────────────────── */}
        <header
          className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
            scrolled
              ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
              : 'bg-transparent'
          }`}
          style={{ top: scrolled ? 0 : bannerHeight }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <a href="#" className="flex-shrink-0">
                <Image
                  src={business.logoUrl}
                  alt={business.name}
                  width={120}
                  height={48}
                  className="h-10 md:h-12 w-auto brightness-0 invert"
                  unoptimized
                />
              </a>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-8">
                {business.navLinks?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 hover:after:w-full after:transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Park Status + CTA */}
              <div className="hidden md:flex items-center gap-4">
                <div className={`flex items-center gap-2 rounded-full px-4 py-1.5 border ${parkOpen ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
                  <span className={`w-2 h-2 rounded-full ${parkOpen ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
                  <span className={`text-xs font-bold uppercase tracking-wider ${parkOpen ? 'text-emerald-400' : 'text-red-400'}`}>{parkOpen ? 'Park Open' : 'Park Closed'}</span>
                </div>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 px-5 py-2.5 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-sky-500/25 transition-all"
                >
                  BOOK NOW
                </a>
              </div>

              {/* Mobile menu toggle */}
              <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="md:hidden bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 mb-4 p-6 space-y-4">
                {business.navLinks?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-slate-200 hover:text-sky-400 font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex items-center gap-2 pt-2">
                  <span className={`w-2 h-2 rounded-full ${parkOpen ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
                  <span className={`text-xs font-bold uppercase ${parkOpen ? 'text-emerald-400' : 'text-red-400'}`}>{parkOpen ? 'Park Open' : 'Park Closed'}</span>
                </div>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 px-5 py-3 rounded-xl text-sm font-bold"
                >
                  BOOK YOUR SESSION
                </a>
              </div>
            )}
          </div>
        </header>

        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Video / Image Background */}
          <div className="absolute inset-0">
            {custom.heroVideoUrl ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                poster={business.heroImage}
                className="w-full h-full object-cover"
              >
                <source src={custom.heroVideoUrl} type="video/mp4" />
              </video>
            ) : (
              business.heroImage && (
                <Image src={business.heroImage} alt="" fill sizes="100vw" className="object-cover" unoptimized />
              )
            )}
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
            <div className="max-w-4xl">
              {/* Park status badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
                <span className={`w-2 h-2 rounded-full ${parkOpen ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
                <span className="text-slate-300 text-sm">
                  {parkOpen ? 'Open Now' : 'Currently Closed'} &bull; {custom.hours || '10am - 6pm'}
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 tracking-tight">
                <span className="block text-white">{business.heroTitle}</span>
                <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  {business.heroHighlight}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
                {business.heroSubtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 px-8 py-4 rounded-2xl text-lg font-black uppercase tracking-wider hover:shadow-2xl hover:shadow-sky-500/25 transition-all hover:scale-105"
                >
                  {business.ctaText}
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                {custom.heroVideoUrl && !videoPlaying && (
                  <button
                    onClick={handlePlayVideo}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-2xl text-white font-bold hover:bg-white/20 transition-all"
                  >
                    <Play className="w-5 h-5 text-sky-400" />
                    Watch Video
                  </button>
                )}
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
              <ChevronDown className="w-8 h-8 text-sky-400/50" />
            </div>
          </div>
        </section>

        {/* ── QUICK ACTIONS DASHBOARD ────────────────────────────── */}
        <Section className="relative -mt-20 z-10 pb-20" id="wakepark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <QuickActionCard
                icon={Zap}
                title="Wake Park"
                description="Cable wakeboarding for all levels. Gear included."
                href="#wakepark-info"
                image={business.services[0]?.image}
              />
              <QuickActionCard
                icon={() => (
                  <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M2 12c1-3 4-6 10-6s9 3 10 6c-1 3-4 6-10 6S3 15 2 12z" />
                    <path d="M3 18c2-1 5.5-2 9-2s7 1 9 2" />
                  </svg>
                )}
                title="Aqua Park"
                description="Giant inflatable waterpark. Ages 6+. Supervised."
                href="#aquapark"
                image={business.services[1]?.image}
              />
              <QuickActionCard
                icon={Users}
                title="Kids Club"
                description="Special sessions for young riders ages 6-12."
                href="#kids"
              />
              <QuickActionCard
                icon={() => (
                  <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                )}
                title="Parties & Events"
                description="Birthday packages, corporate days & group functions."
                href="#pricing"
              />
            </div>
          </div>
        </Section>

        {/* ── STATS BAR ──────────────────────────────────────────── */}
        <StatsBar stats={business.stats} />

        {/* ── WAKE PARK SECTION ──────────────────────────────────── */}
        <section className="skew-section bg-gradient-to-br from-slate-900 to-slate-800" id="wakepark-info">
          <Section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-1.5 mb-6">
                    <Zap className="w-4 h-4 text-sky-400" />
                    <span className="text-sky-400 text-xs font-bold uppercase tracking-wider">Wake Park</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
                    Cable{' '}
                    <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                      Wakeboarding
                    </span>
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    {business.services[0]?.description} Our cable system is beginner-friendly and our experienced team will have you up and riding in no time. Suitable for ages 10+.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Shield, text: 'All gear included' },
                      { icon: Clock, text: 'Open 10am - 6pm daily' },
                      { icon: Users, text: 'Ages 10 and up' },
                      { icon: Award, text: 'Expert coaches' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-300">
                        <item.icon className="w-5 h-5 text-sky-400 flex-shrink-0" />
                        <span className="text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-sky-500/25 transition-all"
                  >
                    Book a Wake Session <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden border border-white/10">
                    {custom.heroVideoUrl ? (
                      <video autoPlay muted loop playsInline className="w-full aspect-video object-cover">
                        <source src={custom.heroVideoUrl} type="video/mp4" />
                      </video>
                    ) : (
                      business.services[0]?.image && (
                        <div className="relative w-full aspect-video">
                          <Image src={business.services[0].image} alt="Wake Park" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" unoptimized />
                        </div>
                      )
                    )}
                  </div>
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-sky-500/10 rounded-3xl blur-2xl -z-10" />
                </div>
              </div>
            </div>
          </Section>
        </section>

        {/* ── AQUA PARK SECTION ──────────────────────────────────── */}
        <section className="skew-section-reverse bg-gradient-to-br from-cyan-900/30 to-slate-900" id="aquapark">
          <Section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="rounded-2xl overflow-hidden border border-white/10">
                    {custom.aquaParkVideoUrl ? (
                      <video autoPlay muted loop playsInline className="w-full aspect-video object-cover">
                        <source src={custom.aquaParkVideoUrl} type="video/mp4" />
                      </video>
                    ) : (
                      business.services[1]?.image && (
                        <div className="relative w-full aspect-video">
                          <Image src={business.services[1].image} alt="Aqua Park" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" unoptimized />
                        </div>
                      )
                    )}
                  </div>
                  <div className="absolute -inset-4 bg-cyan-500/10 rounded-3xl blur-2xl -z-10" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-6">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M2 12c1-3 4-6 10-6s9 3 10 6c-1 3-4 6-10 6S3 15 2 12z" />
                    </svg>
                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Aqua Park</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
                    Giant Inflatable{' '}
                    <span className="bg-gradient-to-r from-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                      Water Park
                    </span>
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    {business.services[1]?.description} Perfect for birthdays, family fun, and school holiday adventures. Bookings recommended.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Shield, text: 'Life jackets included' },
                      { icon: Clock, text: '50 min sessions' },
                      { icon: Users, text: 'Ages 6 and up' },
                      { icon: Sun, text: 'Full-time supervision' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-300">
                        <item.icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                  >
                    Book Aqua Park <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </Section>
        </section>

        {/* ── PRICING SECTION ────────────────────────────────────── */}
        <Section className="py-24" id="pricing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black mb-4">
                Session{' '}
                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                All gear included in every session. Just bring your swimmers and a towel.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <PricingCard
                name="Aqua Park"
                price="$15"
                features={['50 min session', 'Ages 6+', 'Life jacket included', 'Double session: $20']}
                ctaHref={bookingUrl}
              />
              <PricingCard
                name="Wake Session"
                price="$39"
                features={['1 hour cable session', 'Ages 10+', 'All gear included', '2hr Backpacker: $45']}
                ctaHref={bookingUrl}
              />
              <PricingCard
                name="H2O Combo"
                price="$50"
                features={['Wake Park 1hr session', 'Aqua Park session', 'Best of both parks', 'Child rate: $45']}
                highlight
                ctaHref={bookingUrl}
              />
              <PricingCard
                name="All Day Pass"
                price="$99"
                features={['Unlimited Wake Park', 'Unlimited Aqua Park', 'Full day access', 'Child rate: $89']}
                ctaHref={bookingUrl}
              />
            </div>

            {/* Memberships callout */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-white">Membership Deals</h3>
                <p className="text-slate-400 mb-6">
                  Unlimited riding from just <span className="text-sky-400 font-bold">$19.95/week</span>. Monthly passes available at $199/month including basic gear.
                </p>
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call us for membership info
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* ── SPECIAL SESSIONS ───────────────────────────────────── */}
        <section className="skew-section bg-gradient-to-br from-slate-900 to-slate-800" id="kids">
          <Section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-black mb-4">
                  Special{' '}
                  <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                    Sessions
                  </span>
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                  Something for everyone — from kids to dads to ladies-only sessions.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {(custom.specialSessions || []).map(
                  (session: { name: string; day: string; time: string }, i: number) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-sky-400/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center mb-4">
                        {i === 0 ? (
                          <Users className="w-5 h-5 text-sky-400" />
                        ) : i === 1 ? (
                          <Star className="w-5 h-5 text-sky-400" />
                        ) : i === 2 ? (
                          <Award className="w-5 h-5 text-sky-400" />
                        ) : (
                          <Zap className="w-5 h-5 text-sky-400" />
                        )}
                      </div>
                      <h3 className="text-white font-bold text-lg mb-1">{session.name}</h3>
                      <p className="text-sky-400 text-sm font-semibold mb-1">{session.day}</p>
                      <p className="text-slate-400 text-sm">{session.time}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </Section>
        </section>

        {/* ── PRO SHOP & GIFT CARDS ──────────────────────────────── */}
        <Section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Pro Shop */}
              <a
                href={custom.proShopUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-8 hover:border-sky-400/50 transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-sky-500/10 transition-colors" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-sky-500/20 flex items-center justify-center mb-6 group-hover:bg-sky-500/30 transition-colors">
                    <svg className="w-7 h-7 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Pro Shop</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Top brands in wakeboards, life jackets, helmets, ropes & accessories. Gear for all ages and abilities.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sky-400 font-bold group-hover:gap-3 transition-all">
                    Shop Online <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>

              {/* Gift Cards */}
              <a
                href={custom.giftCardsUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-8 hover:border-cyan-400/50 transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-colors" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-colors">
                    <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Gift Cards</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    The perfect gift for any occasion. Wake Park and Aqua Park gift cards available to purchase online.
                  </p>
                  <span className="inline-flex items-center gap-2 text-cyan-400 font-bold group-hover:gap-3 transition-all">
                    Buy a Gift Card <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </Section>

        {/* ── GALLERY ────────────────────────────────────────────── */}
        {business.gallery && business.gallery.length > 0 && (
          <Section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-black mb-4">
                  The{' '}
                  <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                    Vibe
                  </span>
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {business.gallery.map((img, i) => (
                  <div
                    key={i}
                    className={`group relative overflow-hidden rounded-2xl border border-white/10 hover:border-sky-400/30 transition-all ${
                      i === 0 ? 'col-span-2 row-span-2' : ''
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* ── WHY CHOOSE US ──────────────────────────────────────── */}
        <section className="skew-section-reverse bg-gradient-to-br from-sky-950/50 to-slate-900">
          <Section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-black mb-4">
                  Why{' '}
                  <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                    Cairns Wake Park
                  </span>
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {business.whyChooseUs.map((feature, i) => {
                  const icons = [Shield, Users, Sun, Award, Zap, Star];
                  const Icon = icons[i] || Zap;
                  return (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-sky-400/30 hover:bg-white/10 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-sky-400" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Section>
        </section>

        {/* ── TESTIMONIALS ───────────────────────────────────────── */}
        <Section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-black mb-4">
                What Riders{' '}
                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  Say
                </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {business.testimonials.map((t, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-sky-400/30 transition-all"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <div className="text-white font-bold">{t.author}</div>
                    <div className="text-sky-400 text-sm">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── CONTACT / LOCATION ─────────────────────────────────── */}
        <section className="skew-section bg-gradient-to-br from-slate-900 to-slate-800" id="contact">
          <Section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-4xl sm:text-5xl font-black mb-6">
                    Find{' '}
                    <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                      Us
                    </span>
                  </h2>
                  <p className="text-slate-300 text-lg mb-8">
                    Located in Smithfield, just 15 minutes north of Cairns CBD. Easy to get to, hard to leave.
                  </p>

                  <div className="space-y-6">
                    <a
                      href={`tel:${business.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
                        <Phone className="w-5 h-5 text-sky-400" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm">Phone</div>
                        <div className="text-white font-bold">{business.phone}</div>
                      </div>
                    </a>

                    <a href={`mailto:${business.email}`} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
                        <Mail className="w-5 h-5 text-sky-400" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm">Email</div>
                        <div className="text-white font-bold">{business.email}</div>
                      </div>
                    </a>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-sky-400" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm">Address</div>
                        <div className="text-white font-bold">{business.address}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-sky-400" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm">Hours</div>
                        <div className="text-white font-bold">{custom.hours || 'Open Every Day, 10am - 6pm'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Socials */}
                  <div className="flex gap-4 mt-8">
                    {custom.facebook && (
                      <a
                        href={custom.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-sky-500/20 hover:border-sky-400/30 border border-white/10 transition-all"
                      >
                        <Facebook className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {custom.instagram && (
                      <a
                        href={custom.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-sky-500/20 hover:border-sky-400/30 border border-white/10 transition-all"
                      >
                        <Instagram className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Map embed placeholder */}
                <div className="rounded-2xl overflow-hidden border border-white/10 h-80 lg:h-auto relative bg-slate-800">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.8!2d145.68!3d-16.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUwJzI0LjAiUyAxNDXCsDQwJzQ4LjAiRQ!5e0!3m2!1sen!2sau!4v1"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    title="Cairns Wake Park Location"
                  />
                </div>
              </div>
            </div>
          </Section>
        </section>

        {/* ── FINAL CTA ──────────────────────────────────────────── */}
        <Section className="py-24 relative overflow-hidden">
          <SplashParticles />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-4xl sm:text-6xl font-black mb-6">
              Ready to{' '}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Send It?
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
              Book your session online and get straight onto the water. All gear included, all skill levels welcome.
            </p>
            <div className="relative inline-block">
              <RippleRings className="-inset-8 md:-inset-12" />
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 px-10 py-5 rounded-2xl text-xl font-black uppercase tracking-wider hover:shadow-2xl hover:shadow-sky-500/25 transition-all hover:scale-105 animate-pulse-glow"
              >
                {business.ctaText}
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </Section>

        {/* ── FOOTER ─────────────────────────────────────────────── */}
        <footer className="border-t border-white/10 bg-slate-950 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <Image
                  src={business.logoUrl}
                  alt={business.name}
                  width={120}
                  height={48}
                  className="h-12 w-auto brightness-0 invert mb-4"
                  unoptimized
                />
                <p className="text-slate-500 text-sm">{business.description.split('.')[0]}.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Quick Links</h4>
                <div className="space-y-2">
                  {business.navLinks?.map((link) => (
                    <a key={link.href} href={link.href} className="block text-slate-500 hover:text-white text-sm transition-colors">
                      {link.label}
                    </a>
                  ))}
                  {custom.proShopUrl && (
                    <a href={custom.proShopUrl} target="_blank" rel="noopener noreferrer" className="block text-slate-500 hover:text-white text-sm transition-colors">
                      Pro Shop
                    </a>
                  )}
                  {custom.giftCardsUrl && (
                    <a href={custom.giftCardsUrl} target="_blank" rel="noopener noreferrer" className="block text-slate-500 hover:text-white text-sm transition-colors">
                      Gift Cards
                    </a>
                  )}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Contact</h4>
                <div className="space-y-2 text-slate-500 text-sm">
                  <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" /> {business.phone}
                  </a>
                  <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" /> {business.email}
                  </a>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5" /> {business.address}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-600 text-sm">
                &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
              </p>
              <p className="text-slate-700 text-xs">
                Demo concept by{' '}
                <a
                  href="https://hansendev.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:text-sky-400 font-semibold transition-colors"
                >
                  HansenDev
                </a>
              </p>
            </div>
          </div>
        </footer>

        {/* ── STICKY BOTTOM BOOKING BAR ──────────────────────────── */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-t border-white/10 py-3 px-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="hidden sm:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${parkOpen ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
                <span className={`text-sm font-bold ${parkOpen ? 'text-emerald-400' : 'text-red-400'}`}>{parkOpen ? 'OPEN NOW' : 'CLOSED'}</span>
              </div>
              <span className="text-slate-500 text-sm">&bull;</span>
              <span className="text-slate-400 text-sm">{custom.hours || '10am - 6pm'}</span>
              <span className="text-slate-500 text-sm">&bull;</span>
              <a
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1"
              >
                <Phone className="w-3 h-3" /> {business.phone}
              </a>
            </div>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 px-8 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-sky-500/25 transition-all animate-pulse-glow"
            >
              BOOK YOUR SESSION
            </a>
          </div>
        </div>

        {/* Bottom spacer for sticky bar */}
        <div className="h-16" />
      </div>
    </>
  );
}
