import React, { useEffect, useRef, useState } from 'react';
import Section from './common/Section';
import { ArrowRight, Users, Clock, Shield, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

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
                poster={isMobile ? '/assets/video/HansenDevMobile-poster.jpg' : '/assets/video/HansenDev-poster.jpg'}
                className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={isMobile ? '/assets/video/HansenDevMobile.mp4' : '/assets/video/HansenDev.mp4'} type="video/mp4" />
            </video>
          </div>
          {/* Scrim + blur — keeps video vibe but recedes detail so text pops */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(17,24,39,0.55)_0%,_rgba(17,24,39,0.72)_55%,_rgba(17,24,39,0.88)_100%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Geometric Network Grid Overlay */}
        <div className="absolute inset-0 geo-grid pointer-events-none"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 pb-28 sm:pb-20">
          {/* SEO-Optimized Main Headline with increased hierarchy */}
          <div className="space-y-10 mb-14">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block text-white leading-tight">
                Cairns Web Development &
              </span>
              <span className="block ai-shimmer animate-shimmer leading-tight">
                AI Integration Experts
              </span>
            </h1>

            {/* Subtext — broken into two shorter lines for readability */}
            <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Transform your <span className="text-brand-accent font-semibold">Cairns business</span> with custom web apps,
              <br className="hidden sm:block" />
              {' '}intelligent AI automation & cutting-edge software.
            </p>
            <p className="text-white/70 font-medium text-sm sm:text-base tracking-wide">
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
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-8">
            <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent/30 hover:-translate-y-1 hover:scale-[1.03] w-full sm:w-auto"
                aria-label="Get your free consultation for web development in Cairns"
            >
              <span>Get FREE Cairns Consultation</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>

            <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-10 py-5 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                aria-label="View our portfolio of Cairns web development projects"
            >
              <span>View Our Work</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Trust signals — subtle text below CTAs */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-brand-primary" />
              100% Satisfaction
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-brand-accent" />
              24/7 Support
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-green-400" />
              10+ Years Experience
            </span>
          </div>

        </div>

        {/* Floating Trust Bar — fixed at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 px-4 py-3 bg-dark-bg/60 backdrop-blur-sm border-t border-b border-white/5">
            {[
              'ABN Registered',
              'Local Cairns References',
              'Queensland Government Approved',
              'Free Initial Consultation',
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                {item}
              </span>
            ))}
          </div>
        </div>

      </Section>
  );
};

export default Hero;
