import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { DemoBusiness } from '../../types';

interface DemoFooterProps {
  business: DemoBusiness;
}

export default function DemoFooter({ business }: DemoFooterProps) {
  const navLinks = business.navLinks || [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Image src={business.logoWhiteUrl} alt={business.name} width={120} height={48} className="h-12 w-auto mb-5" unoptimized />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              {business.tagline}. {business.description.split('.')[0]}.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-gray-300">Quick Links</h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="block text-gray-500 hover:text-white text-sm transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-gray-300">Contact</h4>
            <div className="space-y-4 text-sm text-gray-500">
              <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{business.phone}</span>
              </a>
              <a href={`mailto:${business.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>{business.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{business.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Demo concept by{' '}
            <a href="https://hansendev.com.au" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400 font-semibold transition-colors">
              HansenDev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
