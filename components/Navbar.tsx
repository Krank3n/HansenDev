import React, { useState } from 'react';
import { NavItem } from '../types';
import { MenuIcon, XIcon, CodeIcon } from './icons/CustomIcons';


const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-dark-card/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center space-x-2 text-2xl font-bold text-brand-accent hover:text-teal-400 transition-colors">
            <CodeIcon className="h-8 w-8" />
            <span>HansenDev</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-dark-text-secondary hover:text-brand-accent transition-colors duration-300 font-medium px-3 py-2 rounded-md text-sm"
              >
                {item.name}
              </a>
            ))}
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
