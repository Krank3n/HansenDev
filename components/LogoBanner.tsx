import React, { memo } from 'react';
import Image from 'next/image';

const logos: { src: string; alt: string; width: number; height: number; imgClass?: string; href: string }[] = [
  { src: '/assets/companies/nabTradeLogo.png', alt: 'nabtrade', width: 140, height: 30, href: 'https://www.nabtrade.com.au/' },
  { src: '/assets/companies/dxclogo.svg', alt: 'DXC Technology', width: 120, height: 28, href: 'https://dxc.com/' },
  { src: '/assets/companies/australian-retirement-trust.svg', alt: 'Australian Retirement Trust', width: 140, height: 36, href: 'https://www.australianretirementtrust.com.au/' },
  { src: '/assets/companies/ShredIndex.png', alt: 'ShredIndex', width: 160, height: 40, imgClass: '!h-8', href: 'https://shredindex.com/' },
  { src: '/assets/projects/quote-mate-transparent.png', alt: 'QuoteMate', width: 160, height: 40, imgClass: '!h-8', href: 'https://quotemateapp.au/' },
  { src: '/assets/projects/consultation-manager-logo-white.png', alt: 'Consultation Manager', width: 180, height: 40, href: 'https://www.consultationmanager.com/' },
];

const LogoBanner: React.FC = memo(() => (
  <div className="logo-marquee-wrapper" aria-hidden="true">
    <div className="logo-marquee-track">
      {logos.map((logo, i) => (
        <a key={`a-${i}`} href={logo.href} target="_blank" rel="noopener noreferrer" className="logo-marquee-item">
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={`logo-marquee-img ${logo.imgClass || ''}`} />
        </a>
      ))}
    </div>
    <div className="logo-marquee-track" aria-hidden="true">
      {logos.map((logo, i) => (
        <a key={`b-${i}`} href={logo.href} target="_blank" rel="noopener noreferrer" className="logo-marquee-item">
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={`logo-marquee-img ${logo.imgClass || ''}`} />
        </a>
      ))}
    </div>
  </div>
));

LogoBanner.displayName = 'LogoBanner';

export default LogoBanner;
