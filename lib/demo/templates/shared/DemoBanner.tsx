import React from 'react';
import { DemoBusiness } from '../../types';

interface DemoBannerProps {
  business: DemoBusiness;
}

export default function DemoBanner({ business }: DemoBannerProps) {
  return (
    <div
      className="text-white text-center py-2.5 px-4 text-sm relative z-50 animate-gradient"
      style={{
        background: `linear-gradient(135deg, ${business.primaryColorDark}, ${business.primaryColor}, ${business.accentColor})`,
        backgroundSize: '200% 200%',
      }}
    >
      <span className="opacity-90">Demo landing page concept by </span>
      <a
        href="https://hansendev.com.au"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold underline decoration-2 underline-offset-2 hover:opacity-80 transition-opacity"
      >
        HansenDev
      </a>
      <span className="opacity-90"> — </span>
      <a
        href="https://hansendev.com.au/#contact"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold bg-white/20 px-3 py-0.5 rounded-full hover:bg-white/30 transition-colors ml-1"
      >
        Get yours built today &rarr;
      </a>
    </div>
  );
}
