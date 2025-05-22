
import React from 'react';

export interface NavItem {
  name: string;
  href: string;
}

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  keywords: string[];
}

export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}
