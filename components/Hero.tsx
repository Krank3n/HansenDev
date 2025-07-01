import React from 'react';
import Image from 'next/image';
import Section from './common/Section';
import Sunrise from '@/public/assets/Sunrise esplanade.jpg';
import { ArrowRight, Play, Star, MapPin, Code, Zap, Users, Award, Clock, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
      <Section
          id="home"
          title=""
          className="min-h-screen flex items-center justify-center relative overflow-hidden !pt-0 !pb-0"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
              src={Sunrise}
              alt="Stunning sunrise over Cairns Esplanade showcasing the beautiful tropical North Queensland landscape where HansenDev provides web development and AI integration services"
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
          />
          {/* Enhanced Gradient Overlays for better contrast and readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-bg/85 via-dark-bg/70 to-dark-bg/85"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

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

          {/* SEO-Optimized Main Headline with H1 tag */}
          <div className="space-y-6 mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-white leading-tight">
                Cairns Web Development &
              </span>
              <span className="block bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent bg-clip-text text-transparent leading-tight">
                AI Integration Experts
              </span>
            </h1>

            {/* Enhanced value proposition with local focus */}
            <p className="max-w-4xl mx-auto text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed">
              Transform your <span className="text-brand-accent font-semibold">Cairns business</span> with custom web applications,
              intelligent AI automation, and cutting-edge software solutions.
              <span className="block mt-2 text-brand-primary font-medium">
                Local expertise • Global technology • Proven results in Far North Queensland
              </span>
            </p>
          </div>

          {/* Enhanced Trust Indicators with Local Context */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-brand-primary/20 rounded-xl mb-3 mx-auto group-hover:bg-brand-primary/30 transition-colors duration-300">
                <Users className="h-8 w-8 text-brand-primary" />
              </div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-300">Local Satisfaction</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-3 mx-auto group-hover:bg-brand-accent/30 transition-colors duration-300">
                <Clock className="h-8 w-8 text-brand-accent" />
              </div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-xl mb-3 mx-auto group-hover:bg-green-500/30 transition-colors duration-300">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
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

          {/* Enhanced CTA Buttons with Local Appeal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto sm:max-w-none mb-8">
            <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/30 hover:-translate-y-2 w-full sm:w-auto"
                aria-label="Get your free consultation for web development in Cairns"
            >
              <span>Get FREE Cairns Consultation</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>

            <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-brand-accent/50 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 w-full sm:w-auto hover:shadow-lg"
                aria-label="View our portfolio of Cairns web development projects"
            >
              <Play className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              <span>View Local Projects</span>
            </a>
          </div>

          {/* Local Service Areas */}
          <div className="mb-8">
            <p className="text-gray-300 text-sm mb-2">Serving businesses across:</p>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <span className="bg-white/10 px-3 py-1 rounded-full text-white">Cairns CBD</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-white">Cairns Beaches</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-white">Port Douglas</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-white">Atherton Tablelands</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-white">Palm Cove</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-white">Mission Beach</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-white">Mareeba</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-white">Kuranda</span>
            </div>
          </div>

          {/* Enhanced Trust Indicators with Customer Reviews Preview */}
          <div className="flex flex-col items-center space-y-4">
            {/*<div className="flex items-center gap-2 text-yellow-400">*/}
            {/*  {[...Array(5)].map((_, i) => (*/}
            {/*      <Star key={i} className="h-6 w-6 fill-current" />*/}
            {/*  ))}*/}
            {/*  <span className="text-white ml-2 font-semibold">5.0 from 25+ Cairns businesses</span>*/}
            {/*</div>*/}
            <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
              "HansenDev transformed our local Cairns business with an amazing website and AI chatbot.
              Professional, reliable, and understands the Far North Queensland market perfectly."
              <span className="text-brand-accent font-medium">- Local Cairns Business Owner</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <span>✓ Australian Business Number (ABN) Registered</span>
              <span>✓ Local Cairns References Available</span>
              <span>✓ Queensland Government Approved</span>
              <span>✓ Free Initial Consultation</span>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center cursor-pointer hover:border-brand-accent/60 transition-colors duration-300">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xs text-white/70 mt-2 text-center">Scroll to explore</p>
        </div>
      </Section>
  );
};

export default Hero;