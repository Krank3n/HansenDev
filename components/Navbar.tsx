import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { MenuIcon, XIcon, CodeIcon } from './icons/CustomIcons';
import { ArrowRight } from 'lucide-react';
import { trackCTA } from '../lib/gtag';

const navItems: NavItem[] = [
  { name: 'Services', href: '/#services' },
  { name: 'Our Work', href: '/our-work' },
  { name: 'QuoteMate', href: 'https://quotemateapp.au/' },
  { name: 'Articles', href: '/articles' },
  { name: 'About', href: '/#about' },
];

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <a href="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="HansenDev home">
    <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent to-brand-primary shadow-glow-sm transition-transform duration-300 group-hover:scale-105">
      <CodeIcon className="h-5 w-5 text-white" strokeWidth={2} />
    </span>
    <span className="font-display text-[1.35rem] font-bold tracking-tight text-white">
      Hansen<span className="text-brand-accent">Dev</span>
    </span>
  </a>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className={`transition-all duration-500 ${scrolled ? 'pt-3 px-3 sm:px-4' : 'pt-0 px-0'}`}>
        <div
          className={`mx-auto transition-all duration-500 ${
            scrolled
              ? 'max-w-6xl rounded-2xl border border-hairline bg-dark-bg/75 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl'
              : 'max-w-none border border-transparent bg-transparent'
          }`}
        >
          <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-14 px-4 sm:px-5' : 'h-20 px-4 sm:px-6 lg:px-8 container mx-auto'}`}>
            <Logo />

            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-dark-text-secondary transition-colors duration-200 hover:bg-white/[0.05] hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => trackCTA('Book a free chat', 'navbar')}
                className="group ml-3 inline-flex items-center gap-2 rounded-xl btn-gradient px-4 py-2.5 text-sm font-semibold text-white"
              >
                <span>Book a free chat</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden rounded-xl p-2 text-dark-text-secondary transition-colors hover:bg-white/[0.05] hover:text-white"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-0 z-40 h-[100dvh] transition-all duration-400 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="absolute inset-0 bg-dark-bg/95 backdrop-blur-2xl" onClick={() => setIsOpen(false)} />
        <div className={`relative flex h-full flex-col px-6 pt-24 pb-10 transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-4'}`}>
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${i * 40}ms` }}
                className="flex items-center justify-between rounded-xl px-4 py-4 font-display text-2xl font-semibold text-white transition-colors hover:bg-white/[0.05]"
              >
                {item.name}
                <ArrowRight className="h-5 w-5 text-dark-muted" />
              </a>
            ))}
          </nav>
          <div className="mt-auto">
            <a
              href="/#contact"
              onClick={() => { setIsOpen(false); trackCTA('Book a free chat', 'navbar-mobile'); }}
              className="flex w-full items-center justify-center gap-2 rounded-xl btn-gradient px-5 py-4 text-base font-semibold text-white"
            >
              <span>Book a free chat</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-4 text-center text-xs text-dark-muted">Cairns, Far North Queensland</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
