
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`glass-card p-6 hover-glow transition-all duration-500 flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
