import React from 'react';
import { SectionProps } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * Standard page section: consistent vertical rhythm + an editorial header
 * (eyebrow → title → subtitle). Header is omitted when no title/subtitle given.
 */
const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  eyebrow,
  align = 'center',
  aside,
  children,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) => {
  const { ref, isVisible } = useScrollReveal();
  const hasHeader = Boolean(title || subtitle || eyebrow);
  const isLeft = align === 'left';

  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {hasHeader && (
          <div
            ref={ref}
            className={`mb-12 md:mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            } ${isLeft ? 'lg:flex lg:items-end lg:justify-between lg:gap-12' : 'text-center'}`}
          >
            <div className={isLeft ? 'max-w-2xl' : 'max-w-3xl mx-auto'}>
              {eyebrow && <span className={`eyebrow mb-4 ${isLeft ? '' : 'justify-center'}`}>{eyebrow}</span>}
              {title && (
                <h2
                  className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tightest text-white ${titleClassName}`}
                >
                  {title}
                </h2>
              )}
              {subtitle && (
                <p
                  className={`mt-5 text-base sm:text-lg leading-relaxed text-dark-text-secondary ${
                    isLeft ? 'max-w-xl' : 'max-w-2xl mx-auto'
                  } ${subtitleClassName}`}
                >
                  {subtitle}
                </p>
              )}
            </div>
            {isLeft && aside && <div className="mt-6 lg:mt-0 lg:flex-shrink-0">{aside}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
