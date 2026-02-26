import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Section from './common/Section';
import Sunrise from '@/public/assets/Sunrise esplanade.jpg';
import { ArrowRight, Play, MapPin, Users, Award, Clock, Shield, User, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

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
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div ref={bgRef} className="absolute inset-0 parallax-bg" style={{ top: '-10%', bottom: '-10%' }}>
            <Image
                src={Sunrise}
                alt="Stunning sunrise over Cairns Esplanade showcasing the beautiful tropical North Queensland landscape where HansenDev provides web development and AI integration services"
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="100vw"
            />
          </div>
          {/* Radial gradient overlay — lighter behind center text, darker at edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(17,24,39,0.55)_0%,_rgba(17,24,39,0.85)_55%,_rgba(17,24,39,0.95)_100%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Enhanced Location Badge with Local Trust Signals */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 hover:bg-white/15 transition-all duration-300">
            <MapPin className="h-5 w-5 text-brand-accent" />
            <span className="text-sm font-semibold text-white">Proudly Serving Cairns & Far North Queensland</span>
            <Award className="h-4 w-4 text-yellow-400 ml-2" />
          </div>

          {/* SEO-Optimized Main Headline with increased hierarchy */}
          <div className="space-y-8 mb-12">
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
              intelligent AI automation & cutting-edge software.
            </p>
            <p className="text-brand-primary font-medium text-sm sm:text-base tracking-wide">
              Local expertise &bull; Global technology &bull; Proven results in FNQ
            </p>
          </div>

          {/* Trust Badges — Glassmorphism Cards with Fade-Up Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16 max-w-3xl mx-auto">
            <div className="glass-card px-6 py-6 text-center group hover:scale-105 hover:border-brand-primary/30 transition-all duration-300 fade-up-init animate-fade-up">
              <div className="flex items-center justify-center w-14 h-14 bg-brand-primary/20 rounded-xl mb-3 mx-auto group-hover:bg-brand-primary/30 transition-colors duration-300">
                <Users className="h-7 w-7 text-brand-primary" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-gray-400">Local Satisfaction</div>
            </div>
            <div className="glass-card px-6 py-6 text-center group hover:scale-105 hover:border-brand-accent/30 transition-all duration-300 fade-up-init animate-fade-up-delay-1">
              <div className="flex items-center justify-center w-14 h-14 bg-brand-accent/20 rounded-xl mb-3 mx-auto group-hover:bg-brand-accent/30 transition-colors duration-300">
                <Clock className="h-7 w-7 text-brand-accent" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
            <div className="glass-card px-6 py-6 text-center group hover:scale-105 hover:border-green-500/30 transition-all duration-300 fade-up-init animate-fade-up-delay-2">
              <div className="flex items-center justify-center w-14 h-14 bg-green-500/20 rounded-xl mb-3 mx-auto group-hover:bg-green-500/30 transition-colors duration-300">
                <Shield className="h-7 w-7 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">10+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
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

          {/* CTA Buttons — Primary solid + Secondary ghost/outline */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto sm:max-w-none mb-10">
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
                className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-brand-accent text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 w-full sm:w-auto hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg hover:shadow-brand-accent/10"
                aria-label="View our portfolio of Cairns web development projects"
            >
              <Play className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              <span>View Local Projects</span>
            </a>
          </div>

          {/* Local Service Areas — subtle teal outline chips */}
          <div className="mb-10">
            <p className="text-gray-400 text-sm mb-3">Serving businesses across:</p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              {['Cairns CBD', 'Cairns Beaches', 'Port Douglas', 'Atherton Tablelands', 'Palm Cove', 'Mission Beach', 'Mareeba', 'Kuranda'].map((area) => (
                <span key={area} className="border border-brand-accent/30 bg-brand-accent/5 text-gray-300 px-3 py-1 rounded-full hover:bg-brand-accent/10 transition-colors duration-300">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial — with avatar and serif font */}
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="flex items-start gap-4 max-w-2xl">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center mt-1">
                <User className="h-5 w-5 text-brand-accent" />
              </div>
              <div>
                <p className="text-gray-200 text-base leading-relaxed italic" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  &ldquo;HansenDev transformed our local Cairns business with an amazing website and AI chatbot.
                  Professional, reliable, and understands the Far North Queensland market perfectly.&rdquo;
                </p>
                <p className="text-brand-accent font-medium text-sm mt-2">— Local Cairns Business Owner</p>
              </div>
            </div>
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
