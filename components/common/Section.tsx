
import React from 'react';
import { SectionProps } from '../../types';

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '', titleClassName = '', subtitleClassName = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight text-dark-text ${titleClassName}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`mt-4 max-w-2xl mx-auto text-lg text-dark-text-secondary ${subtitleClassName}`}>
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
