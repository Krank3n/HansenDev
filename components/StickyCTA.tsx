import React, { useEffect, useState } from 'react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants/business';
import { trackCTA, trackWhatsApp, trackPhoneCall } from '../lib/gtag';

const sectionCTAs: Record<string, { text: string; href: string; waMessage: string }> = {
  founder: {
    text: 'Book a free chat with Tom',
    href: '#contact-chat',
    waMessage: "Hi Tom! I'd love to have a quick chat about how HansenDev could help my business.",
  },
  services: {
    text: 'Get a free quote',
    href: '#contact-quote',
    waMessage: "Hi! I'm interested in getting a quote for a project. Can we chat?",
  },
  portfolio: {
    text: 'Start your project',
    href: '#contact-project',
    waMessage: "Hi! I saw your portfolio and I'd love to discuss a similar project for my business.",
  },
  demos: {
    text: 'Get a free mockup',
    href: '#contact-demo',
    waMessage: "Hi! I'd love to see a demo of your AI tools and how they could work for my business.",
  },
  about: {
    text: 'Book a free consultation',
    href: '#contact-discovery',
    waMessage: "Hi! I'd like to book a free discovery session to find out where automation or a custom build could save my business the most time.",
  },
  faq: {
    text: 'Still have questions? Ask us',
    href: '#contact-question',
    waMessage: "Hi! I have a quick question about your services.",
  },
};

const whatsappUrl = (message: string) =>
  `https://wa.me/${CONTACT_INFO.phone.raw}?text=${encodeURIComponent(message)}`;

const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('founder');

  useEffect(() => {
    const sectionIds = ['contact', 'faq', 'about', 'demos', 'portfolio', 'services', 'founder', 'home'];
    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      const heroEl = document.getElementById('home');
      const contactEl = document.getElementById('contact');
      const heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : 0;
      const contactTop = contactEl ? contactEl.offsetTop - viewportHeight * 0.5 : Infinity;

      setVisible(!(scrollY < heroBottom - 100 || scrollY > contactTop));

      const center = scrollY + viewportHeight * 0.4;
      for (const id of sectionIds) {
        if (id === 'home' || id === 'contact') continue;
        const el = document.getElementById(id);
        if (el && el.offsetTop <= center) {
          setActiveSection(id);
          break;
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cta = sectionCTAs[activeSection] || sectionCTAs.founder;

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 transition-all duration-500 sm:bottom-6 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className={`flex items-center gap-1.5 rounded-full border border-hairline-strong bg-dark-bg/80 p-1.5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl ${visible ? 'pointer-events-auto' : ''}`}>
        {/* Mobile: WhatsApp primary, Call secondary */}
        <a
          href={whatsappUrl(cta.waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp(`sticky-mobile-${activeSection}`)}
          className="inline-flex items-center gap-2 rounded-full btn-gradient px-5 py-2.5 text-sm font-semibold text-white sm:hidden"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp us</span>
        </a>
        <a
          href={`tel:${CONTACT_INFO.phone.primary}`}
          onClick={() => trackPhoneCall('sticky-mobile')}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.06] sm:hidden"
          aria-label="Call HansenDev"
        >
          <Phone className="h-4 w-4" />
          <span>Call</span>
        </a>

        {/* Desktop: Contact form primary, WhatsApp secondary */}
        <a
          href={cta.href}
          onClick={() => trackCTA(cta.text, `sticky-${activeSection}`)}
          className="group hidden items-center gap-2 rounded-full btn-gradient px-5 py-2.5 text-sm font-semibold text-white sm:inline-flex"
        >
          <span>{cta.text}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
        <a
          href={whatsappUrl(cta.waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp(`sticky-desktop-${activeSection}`)}
          className="hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.06] sm:inline-flex"
          aria-label="Message on WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
