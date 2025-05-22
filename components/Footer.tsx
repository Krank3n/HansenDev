
import React from 'react';
import { CodeIcon } from './icons/CustomIcons'; // Assuming CodeIcon is available

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-dark-text-secondary">
        <div className="flex justify-center items-center mb-4">
           <CodeIcon className="h-6 w-6 mr-2 text-brand-accent" />
           <span className="font-semibold text-dark-text">HansenDev PTY LTD</span>
        </div>
        <p className="text-sm">
          &copy; {currentYear} HansenDev PTY LTD. All Rights Reserved.
        </p>
        <p className="text-sm mt-1">
          Custom Web Design & AI Solutions in Cairns, Australia.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Proudly serving businesses in Far North Queensland.
        </p>
        {/* Optional: Add social media icons here */}
      </div>
    </footer>
  );
};

export default Footer;
