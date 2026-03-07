import React, { memo } from 'react';
import Image from 'next/image';

const logos: { src: string; alt: string; width: number; height: number; imgClass?: string }[] = [
  { src: '/assets/companies/nabTradeLogo.png', alt: 'nabtrade', width: 140, height: 30 },
  { src: '/assets/companies/dxclogo.svg', alt: 'DXC Technology', width: 120, height: 28 },
  { src: '/assets/companies/australian-retirement-trust.svg', alt: 'Australian Retirement Trust', width: 140, height: 36 },
  { src: '/assets/companies/ShredIndex.png', alt: 'ShredIndex', width: 160, height: 40, imgClass: '!h-8' },
];

const LogoBanner: React.FC = memo(() => (
  <div className="logo-marquee-wrapper" aria-hidden="true">
    <div className="logo-marquee-track">
      {logos.map((logo, i) => (
        <span key={`a-${i}`} className="logo-marquee-item">
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={`logo-marquee-img ${logo.imgClass || ''}`} />
        </span>
      ))}
    </div>
    <div className="logo-marquee-track" aria-hidden="true">
      {logos.map((logo, i) => (
        <span key={`b-${i}`} className="logo-marquee-item">
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={`logo-marquee-img ${logo.imgClass || ''}`} />
        </span>
      ))}
    </div>
  </div>
));

LogoBanner.displayName = 'LogoBanner';

export default LogoBanner;
