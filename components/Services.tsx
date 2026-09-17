import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Section from './common/Section';
import { ServiceCardProps } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { trackCTA } from '../lib/gtag';
import {
  ArrowRight,
  Check,
  Code,
  Bot,
  Lightbulb,
  Info,
  Settings,
  Palmtree,
  Wrench,
  Building2,
  Smartphone,
  RefreshCw,
} from 'lucide-react';

import {
  BUSINESS_INFO,
  CONTACT_INFO,
  SERVICE_AREAS,
  SERVICES_OFFERED,
  PRICING_INFO,
} from '../constants/business';

const servicesData: (ServiceCardProps & { learnMoreUrl: string; shortTitle: string })[] = [
  {
    icon: <Code className="h-5 w-5 service-icon-code" />,
    title: `Custom Web Development ${SERVICE_AREAS.primary}`,
    shortTitle: 'Custom web development',
    description: `Responsive, high-performance websites and web apps that attract customers and boost revenue, from tourism operators to local retailers.`,
    longDescription: `Our ${SERVICE_AREAS.primary}-based web development team specializes in creating stunning, conversion-focused websites for local businesses.`,
    features: SERVICES_OFFERED.categories.webDevelopment.services.concat([
      `Local SEO optimization for ${SERVICE_AREAS.primary} search results`,
      'Tourism industry expertise'
    ]),
    priceRange: PRICING_INFO.webDevelopment.starting,
    deliveryTime: PRICING_INFO.webDevelopment.timeline,
    businessTypes: SERVICES_OFFERED.industries.slice(0, 6),
    learnMoreUrl: '/web-development-cairns'
  },
  {
    icon: <Bot className="h-5 w-5 service-icon-bot" />,
    title: 'AI Integration & Business Automation',
    shortTitle: 'AI integration',
    description: `Customer-service chatbots, automated booking systems and machine learning that reduce costs and answer enquiries while you sleep.`,
    longDescription: `Stay ahead of the competition with our AI integration services designed specifically for ${SERVICE_AREAS.primary} businesses.`,
    features: SERVICES_OFFERED.categories.aiIntegration.services,
    priceRange: PRICING_INFO.aiIntegration.starting,
    deliveryTime: PRICING_INFO.aiIntegration.timeline,
    businessTypes: ['Tourism Operators', 'Hotels & Accommodation', 'Restaurants', 'Retail Stores', 'Professional Services', 'Healthcare Practices'],
    learnMoreUrl: '/ai-integration-cairns'
  },
  {
    icon: <Settings className="h-5 w-5 service-icon-settings" />,
    title: `Business Automation ${SERVICE_AREAS.primary}`,
    shortTitle: 'Business automation',
    description: `Automated quoting, invoicing, booking and CRM workflows that strip the repetitive admin out of your week.`,
    longDescription: `Our automation solutions are purpose-built for ${SERVICE_AREAS.primary} businesses that want to scale without scaling their admin workload.`,
    features: SERVICES_OFFERED.categories.automation.services,
    priceRange: PRICING_INFO.automation.starting,
    deliveryTime: PRICING_INFO.automation.timeline,
    businessTypes: ['Trades & Services', 'Tourism Operators', 'Retail Stores', 'Professional Services', 'Restaurants & Cafes', 'Healthcare Practices'],
    learnMoreUrl: '/automation-services-cairns'
  },
  {
    icon: <Lightbulb className="h-5 w-5 service-icon-lightbulb" />,
    title: 'Strategic Technology Consulting',
    shortTitle: 'Technology consulting',
    description: `Roadmaps, audits and architecture advice so your technology spend actually pays off and keeps you competitive.`,
    longDescription: `As your trusted technology partner in ${SERVICE_AREAS.primary}, we provide strategic guidance to help your business leverage technology for growth.`,
    features: SERVICES_OFFERED.categories.consulting.services,
    priceRange: PRICING_INFO.consulting.starting,
    deliveryTime: PRICING_INFO.consulting.timeline,
    businessTypes: ['Growing Businesses', 'Established Companies', 'Non-Profits', 'Government Agencies', 'Educational Institutions', 'Healthcare Organizations'],
    learnMoreUrl: '/technology-consulting-cairns'
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: `Mobile App Development ${SERVICE_AREAS.primary}`,
    shortTitle: 'Mobile app development',
    description: `Native iOS and Android apps built with React Native, designed for real-world conditions including patchy FNQ reception.`,
    longDescription: `We specialize in cross-platform mobile apps built with React Native and Expo.`,
    features: SERVICES_OFFERED.categories.mobileApps.services,
    priceRange: PRICING_INFO.mobileApps.starting,
    deliveryTime: PRICING_INFO.mobileApps.timeline,
    businessTypes: ['Trades & Services', 'Tourism Operators', 'Retail Stores', 'Field Services', 'Healthcare Practices', 'Hospitality'],
    learnMoreUrl: '/mobile-app-development-cairns'
  },
  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: `Website Redesign & Migration`,
    shortTitle: 'Redesign & migration',
    description: `Still on a clunky WordPress or Wix site from 2015? We modernise and migrate without losing your rankings, content or customers.`,
    longDescription: `Our redesign process starts with a full audit of your existing site, preserving what works and rebuilding what doesn't.`,
    features: SERVICES_OFFERED.categories.websiteRedesign.services,
    priceRange: PRICING_INFO.websiteRedesign.starting,
    deliveryTime: PRICING_INFO.websiteRedesign.timeline,
    businessTypes: ['Any Existing Business', 'Tourism Operators', 'Professional Services', 'Retail & E-commerce', 'Restaurants & Cafes', 'Healthcare Practices'],
    learnMoreUrl: '/website-redesign-cairns'
  },
];

const industries = [
  {
    icon: <Palmtree className="h-5 w-5" />,
    label: 'Tourism operators',
    description: 'Booking systems that survive the high-season traffic surge without crashing.',
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    label: 'Local tradies',
    description: "Automated quoting, invoicing and Bunnings integrations, so you aren't doing admin at 9 pm.",
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    label: 'Retail & services',
    description: 'AI chat and customer portals that turn late-night enquiries into booked jobs.',
  },
];

const ServiceCard: React.FC<{ service: (typeof servicesData)[number]; index: number }> = ({ service, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: '0px 0px -6% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 70}ms` }}
      className={`h-full transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <article className="glass-card hover-glow group flex h-full flex-col p-6 sm:p-7">
        <div className="mb-5 flex items-start justify-between">
          <span className="icon-tile h-12 w-12">{service.icon}</span>
          {index === 0 && (
            <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-soft">
              Most popular
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-brand-soft">
          {service.shortTitle}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-dark-text-secondary">{service.description}</p>

        <ul className="mt-5 space-y-2">
          {service.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-dark-text-secondary">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent" strokeWidth={2.5} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid grid-cols-2 divide-x divide-white/[0.07] rounded-xl border border-hairline bg-white/[0.02]">
          <div className="px-4 py-3">
            <p className="text-[11px] uppercase tracking-wider text-dark-muted">From</p>
            <p className="font-display text-base font-semibold text-white">{service.priceRange}</p>
          </div>
          <div className="timeline-trigger relative px-4 py-3">
            <p className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-dark-muted">
              Timeline <Info className="h-3 w-3 cursor-help" />
            </p>
            <p className="font-display text-base font-semibold text-white">{service.deliveryTime}</p>
            <div className="timeline-tooltip">Includes discovery, design, development &amp; local QA</div>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <a href={service.learnMoreUrl} className="btn-ghost text-sm">
            Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact-quote"
            onClick={() => trackCTA('Get Free Quote', `service-${service.title}`)}
            className="btn-secondary px-4 py-2 text-sm"
            aria-label={`Get a free quote for ${service.title}`}
          >
            Get a quote
          </a>
        </div>
      </article>
    </div>
  );
};

const Services: React.FC = () => {
  const { ref: indRef, isVisible: indVisible } = useScrollReveal();
  const { ref: areasRef, isVisible: areasVisible } = useScrollReveal();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": `${BUSINESS_INFO.shortName} Technology Services`,
            "description": `Professional web development, AI integration, and technology consulting services in ${SERVICE_AREAS.primary}, ${CONTACT_INFO.address.state}`,
            "itemListElement": servicesData.map((service, index) => ({
              "@type": "Service",
              "position": index + 1,
              "name": service.title,
              "description": service.description,
              "provider": {
                "@type": "LocalBusiness",
                "name": BUSINESS_INFO.name,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": CONTACT_INFO.address.city,
                  "addressRegion": CONTACT_INFO.address.state,
                  "addressCountry": CONTACT_INFO.address.countryCode
                }
              },
              "areaServed": { "@type": "City", "name": SERVICE_AREAS.primary },
              "serviceType": service.title,
              "offers": {
                "@type": "Offer",
                "priceRange": service.priceRange,
                "availability": "https://schema.org/InStock"
              }
            }))
          })
        }}
      />

      <Section
        id="services"
        eyebrow="What we build"
        title="Custom tech built for the tropics."
        subtitle="Generic software doesn't survive a coastal economy. We engineer the automation, AI and apps that actually run an FNQ business."
        align="left"
        aside={
          <Link href="/services" className="btn-ghost text-sm">
            Browse services by location <ArrowRight className="h-4 w-4" />
          </Link>
        }
        className="relative overflow-hidden bg-dark-surface/60"
      >
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div className="orb orb-primary right-[-10%] top-[20%] h-[480px] w-[480px] opacity-50" />

        {/* Built for */}
        <div
          ref={indRef}
          className={`relative mb-6 grid gap-4 md:grid-cols-3 stagger-children ${indVisible ? 'revealed' : ''}`}
        >
          {industries.map((item) => (
            <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-hairline bg-white/[0.02] p-5">
              <span className="icon-tile h-10 w-10 flex-shrink-0">{item.icon}</span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dark-muted">Built for</p>
                <h3 className="mt-0.5 font-semibold text-white">{item.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-dark-text-secondary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Service areas */}
        <div
          ref={areasRef}
          className={`relative mt-14 flex flex-col gap-5 rounded-2xl border border-hairline bg-white/[0.02] p-6 transition-all duration-700 lg:flex-row lg:items-center lg:justify-between ${
            areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="lg:max-w-xs">
            <h3 className="font-semibold text-white">Serving businesses across {SERVICE_AREAS.region}</h3>
            <p className="mt-1 text-sm text-dark-text-secondary">
              {SERVICE_AREAS.onSiteRange} &middot; {SERVICE_AREAS.remoteService}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREAS.areas.map((area) => (
              <Link key={area} href="/services" className="chip">{area}</Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Services;
