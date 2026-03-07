import React, { useEffect, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants/business';

const sectionCTAs: Record<string, { text: string; href: string }> = {
  founder: { text: 'Book a Free Chat with Tom', href: '#contact-chat' },
  services: { text: 'Get a Free Quote', href: '#contact-quote' },
  portfolio: { text: 'Start Your Project', href: '#contact-project' },
  demos: { text: 'Try a Free Demo', href: '#contact-demo' },
  about: { text: 'Get Your Free Consultation', href: '#contact-discovery' },
  faq: { text: 'Still Have Questions? Ask Us', href: '#contact-question' },
};

const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('founder');

  useEffect(() => {
    const sectionIds = ['contact', 'faq', 'about', 'demos', 'portfolio', 'services', 'founder', 'home'];
    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Hide on hero or when contact section is in view
      const heroEl = document.getElementById('home');
      const contactEl = document.getElementById('contact');
      const heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : 0;
      const contactTop = contactEl ? contactEl.offsetTop - viewportHeight * 0.5 : Infinity;

      if (scrollY < heroBottom - 100 || scrollY > contactTop) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      // Find active section (first one whose top is above viewport center)
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
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-dark-bg/80 backdrop-blur-xl border-t border-white/[0.06]">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-3">
          <a
            href={cta.href}
            className="group inline-flex items-center justify-center gap-2 btn-gradient text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/20 hover:scale-[1.02]"
          >
            <span>{cta.text}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href={`tel:${CONTACT_INFO.phone.primary}`}
            className="inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] backdrop-blur-sm text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 sm:flex hidden"
            aria-label="Call HansenDev"
          >
            <Phone className="h-4 w-4" />
            <span>Call</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
