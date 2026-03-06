import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { MenuIcon, XIcon, CodeIcon } from './icons/CustomIcons';

const navItems: NavItem[] = [
  { name: 'Our Work', href: '/our-work' },
  { name: 'QuoteMate', href: '/quote-tool' },
  { name: 'Articles', href: '/articles' },
  { name: 'Services', href: '/#services' },
  { name: 'About Us', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-500 ${
        scrolled
          ? 'bg-dark-bg/80 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      {/* Subtle bottom gradient line when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent"></div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          <a href="/" className="flex items-center space-x-2.5 text-2xl font-bold text-brand-accent hover:text-teal-400 transition-colors group">
            <CodeIcon className={`transition-all duration-300 group-hover:scale-110 ${scrolled ? 'h-9 w-9' : 'h-10 w-10'}`} />
            <span className={`transition-all duration-300 ${scrolled ? 'text-2xl' : 'text-[1.7rem]'}`}>HansenDev</span>
          </a>
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-dark-text-secondary/80 hover:text-white transition-colors duration-300 font-medium px-4 py-2 rounded-xl text-sm group hover:bg-white/[0.04]"
              >
                {item.name}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-brand-accent to-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
            <a
              href="/#contact"
              className="ml-3 inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white btn-gradient transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/15 hover:scale-105"
            >
              <span>Get Free Quote</span>
            </a>
          </nav>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-text-secondary hover:text-brand-accent focus:outline-none p-2 rounded-xl hover:bg-white/[0.04] transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute w-full bg-dark-bg/95 backdrop-blur-xl transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="gradient-line"></div>
        <nav className="px-4 pt-3 pb-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-dark-text-secondary hover:text-white hover:bg-white/[0.04] block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="block mx-2 mt-3 text-center px-5 py-3.5 rounded-xl text-base font-semibold text-white btn-gradient transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/15"
          >
            <span>Get Free Quote</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
