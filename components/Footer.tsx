import React from 'react';
import { useRouter } from 'next/router';
import { MapPin, Phone, Mail, Clock, Star, Shield, Award, ArrowRight, Linkedin, Github } from 'lucide-react';
import { Logo } from './Navbar';

import {
    BUSINESS_INFO,
    CONTACT_INFO,
    ONLINE_PRESENCE,
    SERVICE_AREAS,
    SERVICES_OFFERED,
    BUSINESS_METRICS,
    getFormattedPhone,
} from '../constants/business';
import { trackCTA, trackOutboundLink, trackPhoneCall } from '../lib/gtag';

interface FooterProps {
    privacyPolicyUrl?: string;
    termsOfServiceUrl?: string;
}

const serviceLinks = [
    { href: '/web-development-cairns', label: `Web Development ${SERVICE_AREAS.primary}` },
    { href: '/ai-integration-cairns', label: 'AI Integration & Automation' },
    { href: '/custom-software-cairns', label: 'Custom Software Development' },
    { href: '/technology-consulting-cairns', label: 'Technology Consulting' },
    { href: '/e-commerce-development-cairns', label: 'E-commerce Development' },
    { href: '/mobile-app-development-cairns', label: 'Mobile App Development' },
];

const exploreLinks = [
    { href: '/services', label: 'Services by Location' },
    { href: '/tools', label: 'QuoteMate for Trades' },
    { href: '/solutions', label: 'AI Website Redesign by Industry' },
    { href: '/articles', label: 'Articles & Guides' },
    { href: '/our-work', label: 'Our Work' },
    { href: '/about/thomas-hansen', label: 'About Thomas Hansen' },
];

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="group inline-flex items-center gap-1.5 text-sm text-dark-text-secondary transition-colors duration-200 hover:text-white">
        {children}
        <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 text-brand-accent" />
    </a>
);

const Footer: React.FC<FooterProps> = ({ privacyPolicyUrl, termsOfServiceUrl }) => {
    const currentYear = new Date().getFullYear();
    const router = useRouter();

    const isQuoteMatePage = router.pathname.includes('/projects/quotemate');
    const finalPrivacyUrl = privacyPolicyUrl || (isQuoteMatePage ? '/projects/quotemate-privacy' : '/privacy-policy');
    const finalTermsUrl = termsOfServiceUrl || '/terms-of-service';

    const handleQuickContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
        else router.push('/#contact');
    };

    return (
        <footer className="relative overflow-hidden border-t border-hairline bg-dark-bg">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />
            <div className="orb orb-primary right-[-10%] top-[-20%] h-[420px] w-[420px] opacity-30" />

            <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <Logo />
                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-dark-text-secondary">
                            Custom web development, AI integration and software for {SERVICE_AREAS.region} businesses.
                            Enterprise-grade engineering, built and supported from {CONTACT_INFO.address.suburb}, {SERVICE_AREAS.primary}.
                        </p>

                        <ul className="mt-6 space-y-2.5 text-sm text-dark-text-secondary">
                            <li className="flex items-center gap-2.5"><Shield className="h-4 w-4 text-brand-accent" />Australian business registered</li>
                            <li className="flex items-center gap-2.5"><Star className="h-4 w-4 text-brand-accent" />{BUSINESS_METRICS.stats.averageRating} rating from {BUSINESS_METRICS.stats.reviewCount} reviews</li>
                            <li className="flex items-center gap-2.5"><Award className="h-4 w-4 text-brand-accent" />{BUSINESS_METRICS.stats.projectsCompleted} successful projects</li>
                        </ul>

                        <div className="mt-6 flex gap-2">
                            <a
                                href={ONLINE_PRESENCE.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackOutboundLink(ONLINE_PRESENCE.social.linkedin, 'LinkedIn')}
                                className="chip !p-2.5"
                                aria-label={`Follow ${BUSINESS_INFO.shortName} on LinkedIn`}
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a
                                href={ONLINE_PRESENCE.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackOutboundLink(ONLINE_PRESENCE.social.github, 'GitHub')}
                                className="chip !p-2.5"
                                aria-label={`View ${BUSINESS_INFO.shortName} projects on GitHub`}
                            >
                                <Github className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dark-muted">Services</h4>
                        <ul className="mt-5 space-y-3">
                            {serviceLinks.map((item) => (
                                <li key={item.href}><FooterLink href={item.href}>{item.label}</FooterLink></li>
                            ))}
                        </ul>
                    </div>

                    {/* Explore */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dark-muted">Explore</h4>
                        <ul className="mt-5 space-y-3">
                            {exploreLinks.map((item) => (
                                <li key={item.href}><FooterLink href={item.href}>{item.label}</FooterLink></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4">
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dark-muted">Get in touch</h4>
                        <ul className="mt-5 space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent" />
                                <div>
                                    <p className="font-medium text-white">{CONTACT_INFO.address.suburb}, {CONTACT_INFO.address.city}</p>
                                    <p className="text-dark-text-secondary">{CONTACT_INFO.address.state} {CONTACT_INFO.address.postcode}, {CONTACT_INFO.address.country}</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 flex-shrink-0 text-brand-accent" />
                                <a href={`tel:${CONTACT_INFO.phone.primary}`} onClick={() => trackPhoneCall('footer')} className="font-medium text-white transition-colors hover:text-brand-soft">
                                    {getFormattedPhone()}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 flex-shrink-0 text-brand-accent" />
                                <a href={`mailto:${CONTACT_INFO.email}`} className="font-medium text-white transition-colors hover:text-brand-soft">
                                    {CONTACT_INFO.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent" />
                                <div className="text-dark-text-secondary">
                                    <p>{CONTACT_INFO.hours.business}</p>
                                    <p>{CONTACT_INFO.hours.support}</p>
                                </div>
                            </li>
                        </ul>

                        <button
                            onClick={() => { trackCTA('Get Free Quote', 'footer'); handleQuickContact(); }}
                            className="group mt-6 inline-flex items-center gap-2 rounded-xl btn-gradient px-5 py-3 text-sm font-semibold text-white"
                            aria-label={`Contact ${BUSINESS_INFO.shortName} for web development services in ${SERVICE_AREAS.primary}`}
                        >
                            <span>Get a free quote</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </button>

                        <div className="mt-6">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dark-muted">Service areas</p>
                            <p className="mt-2 text-sm leading-relaxed text-dark-text-secondary">
                                {SERVICE_AREAS.areas.slice(0, 6).join(' · ')}{' '}
                                <a href="/services" className="text-brand-accent transition-colors hover:text-brand-soft">+ {SERVICE_AREAS.areas.length - 6} more</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="relative border-t border-hairline">
                <div className="container mx-auto flex flex-col gap-4 px-4 py-6 text-xs text-dark-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                    <p>
                        &copy; {currentYear} <span className="text-dark-text-secondary">{BUSINESS_INFO.name}</span>. All rights reserved. ABN {BUSINESS_INFO.abn}.
                    </p>
                    <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Legal">
                        <a href={finalPrivacyUrl} className="transition-colors hover:text-white">Privacy Policy</a>
                        <a href="/projects/quotemate-privacy" className="transition-colors hover:text-white">QuoteMate Privacy</a>
                        <a href={finalTermsUrl} className="transition-colors hover:text-white">Terms of Service</a>
                        <a href="/sitemap.xml" className="transition-colors hover:text-white">Sitemap</a>
                    </nav>
                    <p>Made in {CONTACT_INFO.address.city}, {SERVICE_AREAS.region}</p>
                </div>
                <div className="container mx-auto px-4 pb-6 sm:px-6 lg:px-8">
                    <p className="text-[11px] leading-relaxed text-dark-muted/80">
                        {BUSINESS_INFO.name} provides web development, AI integration and custom software for businesses in {SERVICE_AREAS.primary} and {SERVICE_AREAS.region},
                        including {SERVICES_OFFERED.industries.slice(0, 4).join(', ').toLowerCase()} and growing companies throughout the region.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
