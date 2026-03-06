import React, { useEffect, useRef, useState } from 'react';
import Section from './common/Section';
import { ArrowRight, Users, Clock, Shield, CheckCircle } from 'lucide-react';

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
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
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
      {/* Background Video with Parallax */}
      <div className="absolute inset-0">
        <div ref={bgRef} className="absolute inset-0 parallax-bg" style={{ top: '-10%', bottom: '-10%' }}>
          <video
            key={isMobile ? 'mobile' : 'desktop'}
            autoPlay
            loop
            muted
            playsInline
            poster={isMobile ? '/assets/video/HansenDevMobile-poster.webp' : '/assets/video/HansenDev-poster.webp'}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={isMobile ? '/assets/video/HansenDevMobile.mp4' : '/assets/video/HansenDev.mp4'} type="video/mp4" />
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
              Cairns Web Development &
            </span>
            <span
              className={`block ai-shimmer animate-shimmer leading-tight transition-all duration-1000 delay-200 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              AI Integration Experts
            </span>
          </h1>

          {/* Subtext */}
          <p
            className={`max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-300/90 leading-relaxed transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Transform your <span className="gradient-text font-semibold">Cairns business</span> with custom web apps,
            <br className="hidden sm:block" />
            {' '}intelligent AI automation & cutting-edge software.
          </p>

          <p
            className={`text-white/50 font-medium text-sm sm:text-base tracking-widest uppercase transition-all duration-1000 delay-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Local expertise &bull; Global technology &bull; Proven results in FNQ
          </p>
        </div>

        {/* Service Keywords for SEO */}
        <div className="hidden">
          <h2>Web Development Services Cairns</h2>
          <h3>AI Integration Cairns Queensland</h3>
          <h3>Custom Software Development Far North Queensland</h3>
          <h3>Business Automation Cairns</h3>
          <h3>Machine Learning Solutions Queensland</h3>
          <h3>E-commerce Development Cairns</h3>
          <h3>Mobile App Development Cairns</h3>
          <h3>Website Design Cairns</h3>
        </div>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-5 justify-center items-center mb-8 transition-all duration-1000 delay-[900ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-3 btn-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-brand-accent/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 w-full sm:w-auto"
            aria-label="Get your free consultation for web development in Cairns"
          >
            <span>Get FREE Cairns Consultation</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </a>

          <a
            href="#portfolio"
            className="group inline-flex items-center justify-center gap-3 bg-white/[0.04] backdrop-blur-sm rounded-2xl px-10 py-5 text-white font-bold text-lg hover:bg-white/[0.08] transition-all duration-500 w-full sm:w-auto"
            aria-label="View our portfolio of Cairns web development projects"
          >
            <span>View Our Work</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Trust signals */}
        <div
          className={`flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-gray-500 transition-all duration-1000 delay-[1100ms] ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-brand-primary/70" />
            100% Satisfaction
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-brand-accent/70" />
            24/7 Support
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-green-500/70" />
            10+ Years Experience
          </span>
        </div>
      </div>

      {/* Floating Trust Bar - minimal gradient fade instead of borders */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="gradient-line" />
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 px-4 py-4 bg-dark-bg/80 backdrop-blur-md">
          {[
            'ABN Registered',
            'Local Cairns References',
            'Queensland Government Approved',
            'Free Initial Consultation',
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 text-xs text-gray-500">
              <CheckCircle className="h-3.5 w-3.5 text-brand-accent/50" />
              {item}
            </span>
          ))}
        </div>
      </div>

    </Section>
  );
};

export default Hero;
