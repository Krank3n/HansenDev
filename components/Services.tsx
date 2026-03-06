import React from 'react';
import Link from 'next/link';
import Section from './common/Section';
import Card from './common/Card';
import { ServiceCardProps } from '../types';
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
} from 'lucide-react';

// Import business constants
import {
  BUSINESS_INFO,
  CONTACT_INFO,
  SERVICE_AREAS,
  SERVICES_OFFERED,
  BUSINESS_METRICS,
  PRICING_INFO,
} from '../constants/business';

// Enhanced service data with local SEO focus using constants
const servicesData: (ServiceCardProps & { learnMoreUrl: string })[] = [
  {
    icon: <Code className="h-12 w-12 text-brand-accent service-icon-code" />,
    title: `Custom Web Development ${SERVICE_AREAS.primary}`,
    description: `Transform your ${SERVICE_AREAS.primary} business with professional websites and web applications that drive results. From tourism operators to local retailers, we create responsive, high-performance websites that attract customers and boost revenue throughout ${SERVICE_AREAS.region}.`,
    longDescription: `Our ${SERVICE_AREAS.primary}-based web development team specializes in creating stunning, conversion-focused websites for local businesses. Whether you're a tourism operator showcasing the Great Barrier Reef, a local restaurant, or a professional service provider, we build custom web solutions that capture your unique brand and drive real business results.`,
    keywords: [
      `Web Development ${SERVICE_AREAS.primary}`,
      `Website Design ${SERVICE_AREAS.primary}`,
      `E-commerce ${SERVICE_AREAS.primary}`,
      'Tourism Websites',
      'React Development',
      `Next.js ${SERVICE_AREAS.primary}`,
      'Responsive Design',
      'Local SEO',
      `${SERVICE_AREAS.region} Web`
    ],
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
    keywords: [
      `AI Integration ${SERVICE_AREAS.primary}`,
      'Business Automation',
      `Chatbots ${SERVICE_AREAS.primary}`,
      'Machine Learning',
      'Customer Service AI',
      'Tourism AI',
      'Process Automation',
      'Data Analytics',
      `AI ${SERVICE_AREAS.primary} ${CONTACT_INFO.address.state}`
    ],
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
    keywords: [
      `Automation ${SERVICE_AREAS.primary}`,
      `Business Automation ${SERVICE_AREAS.primary}`,
      `Workflow Automation ${SERVICE_AREAS.region}`,
      'CRM Automation',
      'Booking System Automation',
      'Invoice Automation',
      `Process Automation ${CONTACT_INFO.address.state}`,
      'Zapier Integration',
      'API Integration'
    ],
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
    keywords: [
      `Tech Consulting ${SERVICE_AREAS.primary}`,
      'Digital Transformation',
      `IT Strategy ${SERVICE_AREAS.primary}`,
      'Business Technology',
      'Solution Architecture',
      `${SERVICE_AREAS.primary} IT Consultant`,
      'Technology Planning',
      `Digital Strategy ${CONTACT_INFO.address.state}`
    ],
    features: SERVICES_OFFERED.categories.consulting.services,
    priceRange: PRICING_INFO.consulting.starting,
    deliveryTime: PRICING_INFO.consulting.timeline,
    businessTypes: ['Growing Businesses', 'Established Companies', 'Non-Profits', 'Government Agencies', 'Educational Institutions', 'Healthcare Organizations'],
    learnMoreUrl: '/technology-consulting-cairns'
  },
];

const Services: React.FC = () => {
  return (
      <>
        {/* Service Schema Markup using constants */}
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
            title={`Technology Services for ${SERVICE_AREAS.primary} Businesses`}
            subtitle={`Empowering ${SERVICE_AREAS.region} enterprises with cutting-edge web development, AI integration, and strategic technology solutions.`}
            className="bg-gradient-to-b from-gray-800/20 to-gray-900/40 relative overflow-hidden"
        >
          {/* Subtle geometric grid background */}
          <div className="absolute inset-0 geo-grid-subtle pointer-events-none"></div>

          {/* The "Cairns Edge" — why local businesses need us */}
          <div className="relative mb-12 max-w-3xl mx-auto text-center">
            <p className="text-dark-text-secondary text-base sm:text-lg leading-relaxed italic border-l-4 border-brand-accent/40 pl-6 text-left">
              In a coastal economy, generic tech doesn&apos;t cut it. We build solutions that handle local tourism surges,
              automate repetitive admin for FNQ trades, and put AI to work where it actually impacts your bottom line.
            </p>
          </div>

          {/* Trust indicators for local businesses using constants */}
          <div className="relative mb-16 text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-dark-card/50 px-4 py-2 rounded-full">
                <MapPin className="h-5 w-5 text-brand-accent" />
                <span className="text-sm text-dark-text">Serving {SERVICE_AREAS.primary} & FNQ</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-card/50 px-4 py-2 rounded-full">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-sm text-dark-text">{BUSINESS_METRICS.stats.averageRating} Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-card/50 px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm text-dark-text">Australian Registered</span>
              </div>
            </div>

            <p className="text-dark-text-secondary max-w-3xl mx-auto leading-relaxed">
              Trusted by tourism operators, local retailers, professional services, and growing businesses
              throughout <span className="text-brand-accent font-semibold">{SERVICE_AREAS.primary} and {SERVICE_AREAS.region}</span>.
              We understand the unique challenges and opportunities of the local market.
            </p>
          </div>

          {/* Enhanced service cards using constants */}
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {servicesData.map((service, index) => (
                <Card key={service.title} className="group hover:border-brand-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/10 hover:-translate-y-2">
                  <div className="relative">
                    {/* Service icon with enhanced styling */}
                    <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/10 rounded-2xl mb-6 group-hover:bg-brand-accent/20 transition-colors duration-300">
                      {service.icon}
                    </div>

                    {/* Popular service badge */}
                    {index === 0 && (
                        <div className="absolute -top-2 -right-2 bg-brand-accent text-white text-xs px-3 py-1 rounded-full font-bold">
                          Most Popular
                        </div>
                    )}

                    <h3 className="text-2xl font-bold text-dark-text mb-4 group-hover:text-brand-accent transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-dark-text-secondary mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-dark-text mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="text-sm text-dark-text-secondary flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing and timing using constants */}
                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-dark-bg/50 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-brand-accent">{service.priceRange}</div>
                        <div className="text-xs text-dark-text-secondary">Starting Price</div>
                      </div>
                      <div className="text-center relative timeline-trigger">
                        <div className="text-lg font-bold text-brand-primary inline-flex items-center gap-1.5">
                          {service.deliveryTime}
                          <Info className="h-3.5 w-3.5 text-dark-text-secondary/60 cursor-help" />
                        </div>
                        <div className="text-xs text-dark-text-secondary">Timeline</div>
                        <div className="timeline-tooltip">
                          Includes discovery, design, development &amp; local QA testing
                        </div>
                      </div>
                    </div>

                    {/* Target business types — deep slate tag style */}
                    <div className="mb-6">
                      <p className="text-xs text-dark-text-secondary mb-2">Perfect for:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.businessTypes.slice(0, 3).map((type) => (
                            <span key={type} className="bg-slate-700/60 text-gray-300 px-2.5 py-1 rounded text-xs font-medium border border-slate-600/40">
                        {type}
                      </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto pt-4 space-y-3">
                      <a
                          href="#contact"
                          className="group/btn inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25"
                          aria-label={`Get free consultation for ${service.title} in ${SERVICE_AREAS.primary}`}
                      >
                        <span>Get Free Quote</span>
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                      <a
                          href={service.learnMoreUrl}
                          className="group/link inline-flex items-center justify-center gap-2 w-full text-dark-text-secondary hover:text-brand-accent text-sm font-medium transition-colors duration-300"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>

                    {/* SEO Keywords (hidden) */}
                    <div className="sr-only">
                      <h4>Service Keywords:</h4>
                      <p>{service.keywords.join(', ')}</p>
                    </div>
                  </div>
                </Card>
            ))}
          </div>

          {/* Why Choose HansenDev section using constants */}
          <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8 border border-brand-accent/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-dark-text mb-4">
                Why {SERVICE_AREAS.primary} Businesses Choose {BUSINESS_INFO.shortName}
              </h3>
              <p className="text-dark-text-secondary max-w-2xl mx-auto">
                We're not just another tech company. We're your local partners who understand the
                {SERVICE_AREAS.region} market and are committed to your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-dark-card/50 rounded-xl hover:bg-dark-card/70 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-xl mb-4 mx-auto">
                  <MapPin className="h-6 w-6 text-brand-accent" />
                </div>
                <h4 className="font-semibold text-dark-text mb-2">Local Expertise</h4>
                <p className="text-sm text-dark-text-secondary">Deep understanding of {SERVICE_AREAS.primary} business environment and customer needs</p>
              </div>

              <div className="text-center p-4 bg-dark-card/50 rounded-xl hover:bg-dark-card/70 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-brand-primary/20 rounded-xl mb-4 mx-auto">
                  <Clock className="h-6 w-6 text-brand-primary" />
                </div>
                <h4 className="font-semibold text-dark-text mb-2">Fast Response</h4>
                <p className="text-sm text-dark-text-secondary">{BUSINESS_METRICS.stats.responseTime} support and rapid project turnaround for urgent needs</p>
              </div>

              <div className="text-center p-4 bg-dark-card/50 rounded-xl hover:bg-dark-card/70 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-xl mb-4 mx-auto">
                  <Award className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="font-semibold text-dark-text mb-2">Proven Results</h4>
                <p className="text-sm text-dark-text-secondary">Track record of successful projects and satisfied clients across FNQ</p>
              </div>

              <div className="text-center p-4 bg-dark-card/50 rounded-xl hover:bg-dark-card/70 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-xl mb-4 mx-auto">
                  <Zap className="h-6 w-6 text-yellow-400" />
                </div>
                <h4 className="font-semibold text-dark-text mb-2">Future-Ready</h4>
                <p className="text-sm text-dark-text-secondary">Cutting-edge technology solutions that grow with your business</p>
              </div>
            </div>
          </div>

          {/* Local service areas using constants */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-dark-text mb-4">
              Serving Businesses Throughout {SERVICE_AREAS.region}
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {SERVICE_AREAS.areas.map((area) => (
                  <span key={area} className="bg-dark-card/60 text-dark-text px-3 py-2 rounded-full text-sm hover:bg-brand-accent/20 hover:text-brand-accent transition-all duration-300 cursor-default">
                {area}
              </span>
              ))}
            </div>
            <p className="text-dark-text-secondary text-sm mb-4">
              {SERVICE_AREAS.onSiteRange} • {SERVICE_AREAS.remoteService} •
              Specialized expertise in tourism and hospitality industries
            </p>
            <Link href="/services" className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors text-sm font-medium">
              Browse all services by location →
            </Link>
          </div>

          {/* Final CTA using constants */}
          <div className="mt-16 text-center bg-dark-card/30 rounded-2xl p-8 border border-brand-accent/20">
            <h3 className="text-2xl font-bold text-dark-text mb-4">
              Ready to Transform Your {SERVICE_AREAS.primary} Business?
            </h3>
            <p className="text-dark-text-secondary mb-6 max-w-2xl mx-auto">
              Join {BUSINESS_METRICS.stats.projectsCompleted} successful {SERVICE_AREAS.primary} businesses who've enhanced their digital presence and grown their revenue with {BUSINESS_INFO.shortName}'s technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/30 hover:-translate-y-1"
                  aria-label={`Get free consultation for technology services in ${SERVICE_AREAS.primary}`}
              >
                <span>Get FREE Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                  href={`tel:${CONTACT_INFO.phone.primary}`}
                  className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-brand-accent/50 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                  aria-label={`Call ${BUSINESS_INFO.shortName} for immediate assistance`}
              >
                <span>Call Now</span>
                <span className="text-brand-accent">📞</span>
              </a>
            </div>
          </div>

          {/* Hidden SEO Content using constants */}
          <div className="sr-only">
            <h2>Professional Technology Services in {SERVICE_AREAS.primary}, {CONTACT_INFO.address.state}</h2>
            <p>
              {BUSINESS_INFO.name} provides comprehensive web development, AI integration, and technology consulting services
              to businesses throughout {SERVICE_AREAS.primary} and {SERVICE_AREAS.region}. Our local expertise combined with cutting-edge technology
              helps tourism operators, retailers, professional services, and growing businesses succeed in the digital marketplace.
            </p>

            <h3>Web Development Services {SERVICE_AREAS.primary}</h3>
            <p>
              Custom website design and development for {SERVICE_AREAS.primary} businesses, including tourism operators, hotels, restaurants,
              retail stores, and professional services. Responsive design, e-commerce integration, and local SEO optimization.
            </p>

            <h3>AI Integration and Business Automation {SERVICE_AREAS.primary}</h3>
            <p>
              Artificial intelligence solutions for {SERVICE_AREAS.primary} businesses including chatbots, automated customer service,
              booking systems, inventory management, and process automation to improve efficiency and customer experience.
            </p>

            <h3>Business Automation Services {SERVICE_AREAS.primary}</h3>
            <p>
              Custom automation solutions for {SERVICE_AREAS.primary} businesses including workflow automation, CRM integration,
              booking systems, invoice automation, and API connectivity to streamline operations and reduce manual tasks.
            </p>

            <h3>Technology Consulting {SERVICE_AREAS.region}</h3>
            <p>
              Strategic technology planning and digital transformation consulting for businesses in {SERVICE_AREAS.areas.slice(0, 3).join(', ')},
              and throughout {SERVICE_AREAS.region}. IT strategy, software selection, and technology implementation.
            </p>

            <h4>Business Information</h4>
            <p>Company: {BUSINESS_INFO.name}</p>
            <p>ABN: {BUSINESS_INFO.abn}</p>
            <p>Founder: {BUSINESS_INFO.founder.name}</p>
            <p>Location: {CONTACT_INFO.address.full}</p>
            <p>Phone: {CONTACT_INFO.phone.primary}</p>
            <p>Email: {CONTACT_INFO.email.primary}</p>
            <p>Service Areas: {SERVICE_AREAS.areas.join(', ')}</p>
            <p>Industries Served: {SERVICES_OFFERED.industries.join(', ')}</p>
          </div>
        </Section>
      </>
  );
};

export default Services;