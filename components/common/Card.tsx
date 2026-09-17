import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Adds the hover lift + teal ring treatment */
  interactive?: boolean;
  /** Padding scale */
  padding?: 'sm' | 'md' | 'lg';
}

const paddings = { sm: 'p-5', md: 'p-6 sm:p-7', lg: 'p-8 sm:p-10' };

const Card: React.FC<CardProps> = ({ children, className = '', interactive = true, padding = 'md' }) => {
  return (
    <div className={`glass-card ${interactive ? 'hover-glow' : ''} ${paddings[padding]} flex flex-col ${className}`}>
      {children}
    </div>
  );
};

export default Card;
