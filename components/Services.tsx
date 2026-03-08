import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Section from './common/Section';
import Card from './common/Card';
import { ServiceCardProps } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { trackCTA, trackPhoneCall } from '../lib/gtag';
import {
  ArrowRight,
  Star,
  CheckCircle,
  MapPin,
  Zap,
  Shield,
  Clock,
  Award,
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
  BUSINESS_METRICS,
  PRICING_INFO,
} from '../constants/business';

const servicesData: (ServiceCardProps & { learnMoreUrl: string })[] = [
  {
    icon: <Code className="h-12 w-12 text-brand-accent service-icon-code" />,
    title: `Custom Web Development ${SERVICE_AREAS.primary}`,
    description: `Transform your ${SERVICE_AREAS.primary} business with professional websites and web applications that drive results. From tourism operators to local retailers, we create responsive, high-performance websites that attract customers and boost revenue throughout ${SERVICE_AREAS.region}.`,
    longDescription: `Our ${SERVICE_AREAS.primary}-based web development team specializes in creating stunning, conversion-focused websites for local businesses. Whether you're a tourism operator showcasing the Great Barrier Reef, a local restaurant, or a professional service provider, we build custom web solutions that capture your unique brand and drive real business results.`,
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
    icon: <Bot className="h-12 w-12 text-brand-accent service-icon-bot" />,
    title: 'AI Integration & Business Automation',
    description: `Revolutionize your ${SERVICE_AREAS.primary} business with intelligent AI solutions. From customer service chatbots to automated booking systems, we help ${SERVICE_AREAS.region} businesses reduce costs, improve efficiency, and provide exceptional customer experiences through cutting-edge artificial intelligence.`,
    longDescription: `Stay ahead of the competition with our AI integration services designed specifically for ${SERVICE_AREAS.primary} businesses. We implement intelligent chatbots for tourism operators, automated customer service systems, predictive analytics for inventory management, and machine learning solutions that grow your business while you sleep.`,
    features: SERVICES_OFFERED.categories.aiIntegration.services,
    priceRange: PRICING_INFO.aiIntegration.starting,
    deliveryTime: PRICING_INFO.aiIntegration.timeline,
    businessTypes: ['Tourism Operators', 'Hotels & Accommodation', 'Restaurants', 'Retail Stores', 'Professional Services', 'Healthcare Practices'],
    learnMoreUrl: '/ai-integration-cairns'
  },
  {
    icon: <Settings className="h-12 w-12 text-brand-accent service-icon-settings" />,
    title: `Business Automation ${SERVICE_AREAS.primary}`,
    description: `Stop wasting hours on repetitive tasks. We build custom automation systems for ${SERVICE_AREAS.primary} businesses — from automated quoting and invoicing to booking systems and CRM workflows. Spend less time on admin and more time growing your ${SERVICE_AREAS.region} business.`,
    longDescription: `Our automation solutions are purpose-built for ${SERVICE_AREAS.primary} businesses that want to scale without scaling their admin workload. We connect your tools, automate your workflows, and build systems that handle the busywork so your team can focus on what matters.`,
    features: SERVICES_OFFERED.categories.automation.services,
    priceRange: PRICING_INFO.automation.starting,
    deliveryTime: PRICING_INFO.automation.timeline,
    businessTypes: ['Trades & Services', 'Tourism Operators', 'Retail Stores', 'Professional Services', 'Restaurants & Cafes', 'Healthcare Practices'],
    learnMoreUrl: '/automation-services-cairns'
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-brand-accent service-icon-lightbulb" />,
    title: 'Strategic Technology Consulting',
    description: `Navigate the digital transformation journey with confidence. Our ${SERVICE_AREAS.primary}-based technology consultants help ${SERVICE_AREAS.region} businesses identify opportunities, implement the right solutions, and maximize ROI from technology investments while staying competitive in today's digital marketplace.`,
    longDescription: `As your trusted technology partner in ${SERVICE_AREAS.primary}, we provide strategic guidance to help your business leverage technology for growth. From digital transformation roadmaps to technology audits, we ensure your IT investments align with your business goals and deliver measurable results.`,
    features: SERVICES_OFFERED.categories.consulting.services,
    priceRange: PRICING_INFO.consulting.starting,
    deliveryTime: PRICING_INFO.consulting.timeline,
    businessTypes: ['Growing Businesses', 'Established Companies', 'Non-Profits', 'Government Agencies', 'Educational Institutions', 'Healthcare Organizations'],
    learnMoreUrl: '/technology-consulting-cairns'
  },
  {
    icon: <Smartphone className="h-12 w-12 text-brand-accent service-icon-smartphone" />,
    title: `Mobile App Development ${SERVICE_AREAS.primary}`,
    description: `Turn your business idea into a native mobile app. From tradie tools with offline mode to customer-facing booking apps, we build React Native applications that work on both iOS and Android — designed for real-world conditions, including patchy FNQ reception.`,
    longDescription: `We specialize in cross-platform mobile apps built with React Native and Expo. Whether you need a quoting tool hooked into supplier APIs, a field service app that works offline, or a customer loyalty platform, we deliver production-ready apps to both app stores.`,
    features: SERVICES_OFFERED.categories.mobileApps.services,
    priceRange: PRICING_INFO.mobileApps.starting,
    deliveryTime: PRICING_INFO.mobileApps.timeline,
    businessTypes: ['Trades & Services', 'Tourism Operators', 'Retail Stores', 'Field Services', 'Healthcare Practices', 'Hospitality'],
    learnMoreUrl: '/mobile-app-development-cairns'
  },
  {
    icon: <RefreshCw className="h-12 w-12 text-brand-accent service-icon-refresh" />,
    title: `Website Redesign & Migration`,
    description: `Still on a clunky WordPress or Wix site from 2015? We migrate and modernise outdated business websites into fast, mobile-first platforms — without losing your SEO rankings, content, or customers during the switch.`,
    longDescription: `Our redesign process starts with a full audit of your existing site, preserving what works and rebuilding what doesn't. We handle platform migrations (WordPress, Wix, Squarespace, Drupal), content transfer, SEO redirect mapping, and performance optimisation so your new site launches without a hitch.`,
    features: SERVICES_OFFERED.categories.websiteRedesign.services,
    priceRange: PRICING_INFO.websiteRedesign.starting,
    deliveryTime: PRICING_INFO.websiteRedesign.timeline,
    businessTypes: ['Any Existing Business', 'Tourism Operators', 'Professional Services', 'Retail & E-commerce', 'Restaurants & Cafes', 'Healthcare Practices'],
    learnMoreUrl: '/website-redesign-cairns'
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <Card className="group hover:-translate-y-2 transition-all duration-500 h-full">
        <div className="relative">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-gradient-to-br from-brand-accent/10 to-brand-primary/5 group-hover:from-brand-accent/20 group-hover:to-brand-primary/10 transition-all duration-500">
            {service.icon}
          </div>
          {index === 0 && (
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-brand-accent to-brand-primary text-white text-xs px-3 py-1 rounded-full font-bold">
              Most Popular
            </div>
          )}
          <h3 className="text-2xl font-bold text-dark-text mb-4 group-hover:text-brand-accent transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-dark-text-secondary mb-6 leading-relaxed">
            {service.description}
          </p>
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-dark-text mb-3 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-accent" />
              What&apos;s Included:
            </h4>
            <ul className="space-y-2">
              {service.features.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="text-sm text-dark-text-secondary flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-brand-accent/60 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
            <div className="text-center">
              <div className="text-lg font-bold gradient-text">{service.priceRange}</div>
              <div className="text-xs text-dark-text-secondary/70">Starting Price</div>
            </div>
            <div className="text-center relative timeline-trigger">
              <div className="text-lg font-bold text-brand-primary inline-flex items-center gap-1.5">
                {service.deliveryTime}
                <Info className="h-3.5 w-3.5 text-dark-text-secondary/40 cursor-help" />
              </div>
              <div className="text-xs text-dark-text-secondary/70">Timeline</div>
              <div className="timeline-tooltip">
                Includes discovery, design, development &amp; local QA testing
              </div>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-xs text-dark-text-secondary/60 mb-2">Perfect for:</p>
            <div className="flex flex-wrap gap-1.5">
              {service.businessTypes.slice(0, 3).map((type) => (
                <span key={type} className="bg-white/[0.04] text-gray-400 px-2.5 py-1 rounded-lg text-xs font-medium">
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-auto pt-4 space-y-3">
            <a
              href="#contact"
              onClick={() => trackCTA('Get Free Quote', `service-${service.title}`)}
              className="group/btn inline-flex items-center justify-center gap-2 w-full btn-gradient text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/15"
              aria-label={`Get free consultation for ${service.title} in ${SERVICE_AREAS.primary}`}
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href={service.learnMoreUrl}
              className="group/link inline-flex items-center justify-center gap-2 w-full text-dark-text-secondary hover:text-brand-accent text-sm font-medium transition-colors duration-300"
            >
              <span>Learn More About {service.title.replace(` ${SERVICE_AREAS.primary}`, '')}</span>
              <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

const Services: React.FC = () => {
  const { ref: whyRef, isVisible: whyVisible } = useScrollReveal();
  const { ref: areasRef, isVisible: areasVisible } = useScrollReveal();

  return (
    <>
      {/* Service Schema Markup */}
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
              "areaServed": {
                "@type": "City",
                "name": SERVICE_AREAS.primary
              },
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
        title="Custom Tech Built for the Tropics."
        subtitle="Generic software doesn't survive in a coastal economy. We build the systems that actually run your FNQ business."
        className="relative overflow-hidden"
      >
        {/* Background gradient mesh */}
        <div className="absolute inset-0 gradient-mesh pointer-events-none"></div>

        {/* Intro copy */}
        <div className="relative mb-12 max-w-3xl mx-auto text-center">
          <p className="text-dark-text-secondary text-base sm:text-lg leading-relaxed">
            In Far North Queensland, you need technology designed for how we actually work. We don&apos;t just build basic websites — we engineer the custom automation, AI, and software that strips away your daily admin so you can get back to the actual job.
          </p>
        </div>

        {/* Industry cards */}
        <div className="relative grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Palmtree className="h-6 w-6" />,
              gradient: 'from-emerald-500/20 to-emerald-500/5',
              iconColor: 'text-emerald-400',
              label: 'For Tourism Operators',
              description: 'Booking systems designed to handle massive traffic surges during the high season without crashing.',
            },
            {
              icon: <Wrench className="h-6 w-6" />,
              gradient: 'from-orange-500/20 to-orange-500/5',
              iconColor: 'text-orange-400',
              label: 'For Local Tradies',
              description: 'Automated quoting, invoicing, and API integrations (like Bunnings) so you aren\'t stuck doing admin at 9 PM.',
            },
            {
              icon: <Building2 className="h-6 w-6" />,
              gradient: 'from-blue-500/20 to-blue-500/5',
              iconColor: 'text-blue-400',
              label: 'For Retail & Services',
              description: 'AI chatbots and customer portals that turn late-night inquiries into booked jobs while you sleep.',
            },
          ].map((item) => (
            <div key={item.label} className="glass-card p-6 hover-glow transition-all duration-500 group">
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className={item.iconColor}>{item.icon}</span>
              </div>
              <h3 className="font-bold text-dark-text text-lg mb-2">{item.label}</h3>
              <p className="text-sm text-dark-text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="relative mb-16">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center gap-2 bg-white/[0.04] backdrop-blur-sm px-5 py-2.5 rounded-full">
              <MapPin className="h-4 w-4 text-brand-accent" />
              <span className="text-sm text-dark-text/80">Local to {SERVICE_AREAS.primary}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.04] backdrop-blur-sm px-5 py-2.5 rounded-full">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-dark-text/80">{BUSINESS_METRICS.stats.averageRating} Average Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.04] backdrop-blur-sm px-5 py-2.5 rounded-full">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-sm text-dark-text/80">100% Australian Registered</span>
            </div>
          </div>
        </div>

        {/* Service cards - each animates independently on scroll */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Why Choose HansenDev - gradient card, no borders */}
        <div
          ref={whyRef}
          className={`rounded-3xl p-8 relative overflow-hidden transition-all duration-700 ${
            whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/[0.07] via-transparent to-brand-primary/[0.07]"></div>
          <div className="absolute inset-0 noise-overlay"></div>

          <div className="relative text-center mb-8">
            <h3 className="text-3xl font-bold text-dark-text mb-4">
              Why {SERVICE_AREAS.primary} Businesses Choose {BUSINESS_INFO.shortName}
            </h3>
            <p className="text-dark-text-secondary max-w-2xl mx-auto">
              We're not just another tech company. We're your local partners who understand the
              {SERVICE_AREAS.region} market and are committed to your success.
            </p>
          </div>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <MapPin className="h-6 w-6" />, color: 'from-brand-accent/20 to-brand-accent/5', iconColor: 'text-brand-accent', title: 'Local Expertise', desc: `Deep understanding of ${SERVICE_AREAS.primary} business environment and customer needs` },
              { icon: <Clock className="h-6 w-6" />, color: 'from-brand-primary/20 to-brand-primary/5', iconColor: 'text-brand-primary', title: 'Fast Response', desc: `${BUSINESS_METRICS.stats.responseTime} support and rapid project turnaround for urgent needs` },
              { icon: <Award className="h-6 w-6" />, color: 'from-green-500/20 to-green-500/5', iconColor: 'text-green-400', title: 'Proven Results', desc: 'Track record of successful projects and satisfied clients across FNQ' },
              { icon: <Zap className="h-6 w-6" />, color: 'from-yellow-500/20 to-yellow-500/5', iconColor: 'text-yellow-400', title: 'Future-Ready', desc: 'Cutting-edge technology solutions that grow with your business' },
            ].map((item) => (
              <div key={item.title} className="text-center p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 group">
                <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <span className={item.iconColor}>{item.icon}</span>
                </div>
                <h4 className="font-semibold text-dark-text mb-2">{item.title}</h4>
                <p className="text-sm text-dark-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service areas */}
        <div
          ref={areasRef}
          className={`mt-16 text-center transition-all duration-700 ${
            areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold text-dark-text mb-4">
            Serving Businesses Throughout {SERVICE_AREAS.region}
          </h3>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {SERVICE_AREAS.areas.map((area) => (
              <span key={area} className="bg-white/[0.04] text-dark-text/70 px-4 py-2 rounded-full text-sm hover:bg-brand-accent/10 hover:text-brand-accent transition-all duration-300 cursor-default">
                {area}
              </span>
            ))}
          </div>
          <p className="text-dark-text-secondary text-sm mb-4">
            {SERVICE_AREAS.onSiteRange} &bull; {SERVICE_AREAS.remoteService} &bull;
            Specialized expertise in tourism and hospitality industries
          </p>
          <Link href="/services" className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors text-sm font-medium">
            Browse all services by location <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Final CTA - full gradient glow */}
        <div className="mt-16 text-center rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/[0.08] via-brand-primary/[0.04] to-brand-accent/[0.08]"></div>
          <div className="relative">
            <h3 className="text-2xl font-bold text-dark-text mb-4">
              Ready to Transform Your {SERVICE_AREAS.primary} Business?
            </h3>
            <p className="text-dark-text-secondary mb-6 max-w-2xl mx-auto">
              Join {BUSINESS_METRICS.stats.projectsCompleted} successful {SERVICE_AREAS.primary} businesses who've enhanced their digital presence and grown their revenue with {BUSINESS_INFO.shortName}'s technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <a
                href="#contact"
                onClick={() => trackCTA('Get FREE Consultation', 'services-bottom')}
                className="group inline-flex items-center justify-center gap-3 btn-gradient text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-brand-accent/20 hover:-translate-y-1 transition-all duration-500"
                aria-label={`Get free consultation for technology services in ${SERVICE_AREAS.primary}`}
              >
                <span>Get FREE Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone.primary}`}
                onClick={() => trackPhoneCall('services-bottom')}
                className="group inline-flex items-center justify-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500"
                aria-label={`Call ${BUSINESS_INFO.shortName} for immediate assistance`}
              >
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

      </Section>
    </>
  );
};

export default Services;
