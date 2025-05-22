import React from 'react';
import Image from 'next/image';
import Section from './common/Section';
import Sunrise from '@/public/assets/Sunrise esplanade.jpg';

const Hero: React.FC = () => {
  return (
    <Section id="home" title="" className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden !pt-0 !pb-0">
      <div className="absolute inset-0 opacity-20"> {/* Increased opacity slightly for better visibility with next/image */}
        <Image
          src={Sunrise}
          alt="Sunrise over the Cairns Esplanade, representing HansenDev's local expertise."
          layout="fill"
          objectFit="cover"
          priority // Important for LCP
          className="z-0" // Ensure image is behind content
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="block text-dark-text">Innovate & Grow:</span>
          <span className="block text-brand-accent">Custom Web & AI Solutions in Cairns</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-lg sm:text-xl text-dark-text-secondary md:max-w-2xl">
          HansenDev empowers businesses with cutting-edge web applications and intelligent AI integrations, tailored for success in Far North Queensland.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
            <a
              href="#contact"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-primary hover:bg-brand-secondary transition-transform transform hover:scale-105 shadow-lg md:py-4 md:text-lg md:px-10"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
