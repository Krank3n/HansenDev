import React, { useEffect, useRef, useState } from 'react';
import Section from './common/Section';
import LogoBanner from './LogoBanner';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (bgRef.current) {
            bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section
      id="home"
      title=""
      className="min-h-screen flex items-center justify-center relative overflow-hidden !pt-0 !pb-0"
    >
      {/* SVG gradient definition for icon shimmer */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="shimmer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14B8A6">
              <animate attributeName="stop-color" values="#14B8A6;#5eead4;#99f6e4;#5eead4;#14B8A6" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#99f6e4">
              <animate attributeName="stop-color" values="#99f6e4;#14B8A6;#5eead4;#99f6e4;#99f6e4" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#14B8A6">
              <animate attributeName="stop-color" values="#14B8A6;#99f6e4;#14B8A6;#5eead4;#14B8A6" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
      </svg>

      {/* Background Video with Parallax */}
      <div className="absolute inset-0">
        <div ref={bgRef} className="absolute inset-0 parallax-bg" style={{ top: '-10%', bottom: '-10%' }}>
          <video
            key={isMobile ? 'mobile' : 'desktop'}
            autoPlay
            loop
            muted
            playsInline
            poster={isMobile ? '/assets/video/HansenDevMobile-poster.webp' : '/assets/video/HansenDevCassowary-poster.webp'}
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Background video showing HansenDev web development work"
          >
            <source src={isMobile ? '/assets/video/HansenDevMobile.mp4' : '/assets/video/HansenDevCassowary.mp4'} type="video/mp4" />
            <track kind="captions" src="" label="No dialogue" default />
          </video>
        </div>
        {/* Deep gradient overlay - more immersive */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/70 via-dark-bg/50 to-dark-bg"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,15,26,0.6)_70%)]"></div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-teal w-[500px] h-[500px] top-[10%] left-[15%] animate-float opacity-60"></div>
        <div className="orb orb-primary w-[600px] h-[600px] bottom-[10%] right-[10%] animate-float-slow opacity-40"></div>
        <div className="orb orb-teal w-[300px] h-[300px] top-[50%] left-[60%] animate-float-slower opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 pb-28 sm:pb-20">
        <div className="space-y-10 mb-14">
          {/* Headline with staggered entrance */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span
              className={`block text-white leading-tight transition-all duration-1000 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Less Admin.
            </span>
            <span
              className={`block ai-shimmer animate-shimmer leading-tight transition-all duration-1000 delay-200 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              More Scaling. <TrendingUp className="inline h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 [stroke:url(#shimmer-gradient)]" />
            </span>
          </h1>

          {/* Subtext */}
          <p
            className={`max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-300/90 leading-relaxed transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Ditch the messy spreadsheets and lost quotes. We build the custom apps and AI that do the heavy lifting, so you can get your evenings back.
          </p>
        </div>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-5 justify-center items-center mb-8 transition-all duration-1000 delay-[900ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#contact-discovery"
            className="group relative inline-flex items-center justify-center gap-3 btn-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-brand-accent/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 w-full sm:w-auto"
            aria-label="Book a free discovery session to find your business bottleneck"
          >
            <span>Find Your Bottleneck</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </a>

          <a
            href="#portfolio"
            className="group inline-flex items-center justify-center gap-3 bg-white/[0.04] backdrop-blur-sm rounded-2xl px-10 py-5 text-white font-bold text-lg hover:bg-white/[0.08] transition-all duration-500 w-full sm:w-auto"
            aria-label="See what we've built for businesses like yours"
          >
            <span>See What We&apos;ve Built</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

      </div>

      {/* Floating Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="gradient-line" />
        <div className="flex flex-col items-center gap-1 py-3 bg-dark-bg/80 backdrop-blur-md">
          <span className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">
            Engineered by developers with experience building for
          </span>
          <div className="w-full">
            <LogoBanner />
          </div>
        </div>
      </div>

    </Section>
  );
};

export default Hero;
