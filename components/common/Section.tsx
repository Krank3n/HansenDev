
import React from 'react';
import { SectionProps } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '', titleClassName = '', subtitleClassName = '' }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div
            ref={ref}
            className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {title && (
              <>
                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-dark-text ${titleClassName}`}>
                  {title}
                </h2>
                <div className="gradient-line w-24 mx-auto mt-4" />
              </>
            )}
            {subtitle && (
              <p className={`mt-6 max-w-2xl mx-auto text-lg text-dark-text-secondary ${subtitleClassName}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
