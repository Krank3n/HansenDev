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
      className={`sticky top-0 z-50 backdrop-blur-md shadow-lg transition-all duration-300 ${
        scrolled ? 'bg-dark-card/95 shadow-xl' : 'bg-dark-card/80'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          <a href="/" className="flex items-center space-x-2.5 text-2xl font-bold text-brand-accent hover:text-teal-400 transition-colors">
            <CodeIcon className={`transition-all duration-300 ${scrolled ? 'h-9 w-9' : 'h-10 w-10'}`} />
            <span className={`transition-all duration-300 ${scrolled ? 'text-2xl' : 'text-[1.7rem]'}`}>HansenDev</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-dark-text-secondary hover:text-brand-accent transition-colors duration-300 font-medium px-3 py-2 rounded-md text-sm group"
              >
                {item.name}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </a>
            ))}
            <a
              href="/#contact"
              className="ml-2 inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent transition-all duration-300 shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 hover:scale-105"
            >
              Get Free Quote
            </a>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-text-secondary hover:text-brand-accent focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-card absolute w-full shadow-xl">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-dark-text-secondary hover:text-brand-accent hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block mx-3 mt-3 text-center px-5 py-3 rounded-lg text-base font-semibold text-white bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent transition-all duration-300 shadow-lg"
            >
              Get Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
