import React from 'react';
import { useRouter } from 'next/router';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Star,
    Globe,
    Shield,
    Award,
    ExternalLink,
    ArrowRight,
    Heart,
    Linkedin,
    Github,
    Facebook,
    Instagram,
    Code
} from 'lucide-react';

import {
    BUSINESS_INFO,
    CONTACT_INFO,
    ONLINE_PRESENCE,
    SERVICE_AREAS,
    SERVICES_OFFERED,
    BUSINESS_METRICS,
    getFullAddress,
    getFormattedPhone,
    getBusinessName
} from '../constants/business';
import { trackCTA, trackOutboundLink, trackPhoneCall } from '../lib/gtag';

interface FooterProps {
    privacyPolicyUrl?: string;
    termsOfServiceUrl?: string;
}

const Footer: React.FC<FooterProps> = ({
    privacyPolicyUrl,
    termsOfServiceUrl
}) => {
    const currentYear = new Date().getFullYear();
    const router = useRouter();

    const isQuoteMatePage = router.pathname.includes('/projects/quotemate');
    const finalPrivacyUrl = privacyPolicyUrl || (isQuoteMatePage ? '/projects/quotemate-privacy' : '/privacy-policy');
    const finalTermsUrl = termsOfServiceUrl || '/terms-of-service';

    const handleQuickContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <footer className="relative overflow-hidden bg-dark-bg">
                {/* Top gradient line instead of border */}
                <div className="gradient-line"></div>

                {/* Background orbs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="orb orb-teal w-[300px] h-[300px] top-10 left-10 opacity-20"></div>
                    <div className="orb orb-primary w-[400px] h-[400px] bottom-10 right-10 opacity-15"></div>
                </div>

                <div className="relative z-10">
                    {/* Main footer content */}
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

                            {/* Company Information */}
                            <div className="lg:col-span-1">
                                <div className="flex items-center mb-6">
                                    <Code className="h-8 w-8 mr-3 text-brand-accent" />
                                    <div>
                                        <h3 className="font-bold text-xl text-dark-text">{BUSINESS_INFO.shortName}</h3>
                                        <span className="text-xs text-dark-text-secondary/70">PTY LTD</span>
                                    </div>
                                </div>

                                <p className="text-dark-text-secondary/70 mb-6 leading-relaxed text-sm">
                                    {SERVICE_AREAS.primary}' premier technology partner, helping {SERVICE_AREAS.region} businesses
                                    thrive with custom web development, AI integration, and innovative software solutions.
                                </p>

                                {/* Trust indicators */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Shield className="h-4 w-4 text-green-400/70" />
                                        <span className="text-dark-text-secondary/80">Australian Business Registered</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Star className="h-4 w-4 text-yellow-400/70" />
                                        <span className="text-dark-text-secondary/80">
                                            {BUSINESS_METRICS.stats.averageRating} Rating &bull; {BUSINESS_METRICS.stats.reviewCount} Reviews
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Award className="h-4 w-4 text-brand-accent/70" />
                                        <span className="text-dark-text-secondary/80">
                                            {BUSINESS_METRICS.stats.projectsCompleted} Successful Projects
                                        </span>
                                    </div>
                                </div>

                                {/* Social Media Links */}
                                <div className="flex space-x-3">
                                    <a
                                        href={ONLINE_PRESENCE.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => trackOutboundLink(ONLINE_PRESENCE.social.linkedin, 'LinkedIn')}
                                        className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-brand-accent/10 transition-all duration-300 hover:scale-110 group"
                                        aria-label={`Follow ${BUSINESS_INFO.shortName} on LinkedIn`}
                                    >
                                        <Linkedin className="h-4 w-4 text-dark-text-secondary/70 group-hover:text-brand-accent transition-colors duration-300" />
                                    </a>
                                    <a
                                        href={ONLINE_PRESENCE.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => trackOutboundLink(ONLINE_PRESENCE.social.github, 'GitHub')}
                                        className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-brand-accent/10 transition-all duration-300 hover:scale-110 group"
                                        aria-label={`View ${BUSINESS_INFO.shortName} projects on GitHub`}
                                    >
                                        <Github className="h-4 w-4 text-dark-text-secondary/70 group-hover:text-brand-accent transition-colors duration-300" />
                                    </a>
                                </div>
                            </div>

                            {/* Services */}
                            <div>
                                <h4 className="font-semibold text-dark-text mb-6 text-lg">Our Services</h4>
                                <ul className="space-y-3">
                                    {[
                                        { href: '/web-development-cairns', label: `Web Development ${SERVICE_AREAS.primary}` },
                                        { href: '/ai-integration-cairns', label: 'AI Integration & Automation' },
                                        { href: '/custom-software-cairns', label: 'Custom Software Development' },
                                        { href: '/technology-consulting-cairns', label: 'Technology Consulting' },
                                        { href: '/e-commerce-development-cairns', label: 'E-commerce Development' },
                                        { href: '/mobile-app-development-cairns', label: 'Mobile App Development' },
                                    ].map((item) => (
                                        <li key={item.href}>
                                            <a
                                                href={item.href}
                                                className="text-dark-text-secondary/80 hover:text-brand-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                                            >
                                                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Explore */}
                            <div>
                                <h4 className="font-semibold text-dark-text mb-6 text-lg">Explore</h4>
                                <ul className="space-y-3">
                                    {[
                                        { href: '/services', label: 'Services by Location' },
                                        { href: '/tools', label: 'QuoteMate for Trades' },
                                        { href: '/solutions', label: 'WebFaceLift by Industry' },
                                        { href: '/articles', label: 'Articles & Guides' },
                                    ].map((item) => (
                                        <li key={item.href}>
                                            <a
                                                href={item.href}
                                                className="text-dark-text-secondary/80 hover:text-brand-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                                            >
                                                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-5">
                                    <h5 className="text-sm font-medium gradient-text mb-2">Service Areas:</h5>
                                    <ul className="space-y-1 text-sm text-dark-text-secondary/70">
                                        {SERVICE_AREAS.areas.slice(0, 4).map((area) => (
                                            <li key={area}>&bull; {area}</li>
                                        ))}
                                        <li>
                                            <a href="/services" className="text-brand-accent/80 hover:text-brand-accent text-xs transition-colors">
                                                + {SERVICE_AREAS.areas.length - 4} more areas
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div>
                                <h4 className="font-semibold text-dark-text mb-6 text-lg">Get In Touch</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-4 w-4 text-brand-accent/60 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-dark-text/80 font-medium text-sm">
                                                {CONTACT_INFO.address.suburb}, {CONTACT_INFO.address.city}
                                            </p>
                                            <p className="text-dark-text-secondary/70 text-xs">
                                                {CONTACT_INFO.address.state} {CONTACT_INFO.address.postcode}, {CONTACT_INFO.address.country}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Phone className="h-4 w-4 text-brand-accent/60 flex-shrink-0" />
                                        <a
                                            href={`tel:${CONTACT_INFO.phone.primary}`}
                                            onClick={() => trackPhoneCall('footer')}
                                            className="text-dark-text/80 hover:text-brand-accent transition-colors duration-300 text-sm font-medium"
                                        >
                                            {getFormattedPhone()}
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Mail className="h-4 w-4 text-brand-accent/60 flex-shrink-0" />
                                        <a
                                            href={`mailto:${CONTACT_INFO.email.primary}`}
                                            className="text-dark-text/80 hover:text-brand-accent transition-colors duration-300 text-sm font-medium"
                                        >
                                            {CONTACT_INFO.email.primary}
                                        </a>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Clock className="h-4 w-4 text-brand-accent/60 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-dark-text/80 text-sm font-medium">Business Hours:</p>
                                            <p className="text-dark-text-secondary/70 text-xs">{CONTACT_INFO.hours.business}</p>
                                            <p className="text-dark-text-secondary/70 text-xs">{CONTACT_INFO.hours.support}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick contact CTA */}
                                <div className="mt-6">
                                    <button
                                        onClick={() => { trackCTA('Get Free Quote', 'footer'); handleQuickContact(); }}
                                        className="group inline-flex items-center gap-2 btn-gradient text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/15"
                                        aria-label={`Contact ${BUSINESS_INFO.shortName} for web development services in ${SERVICE_AREAS.primary}`}
                                    >
                                        <span>Get Free Quote</span>
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="gradient-line"></div>
                    <div className="bg-white/[0.01]">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                                <div className="text-center md:text-left">
                                    <p className="text-dark-text-secondary/70 text-sm">
                                        &copy; {currentYear} <span className="font-semibold text-dark-text/70">{BUSINESS_INFO.name}</span>. All rights reserved.
                                    </p>
                                    <p className="text-dark-text-secondary/60 text-xs mt-1">
                                        ABN: {BUSINESS_INFO.abn} &bull; {CONTACT_INFO.address.state}, {CONTACT_INFO.address.country}
                                    </p>
                                </div>

                                {/* Legal Links */}
                                <div className="flex flex-wrap justify-center gap-6 text-xs">
                                    {[
                                        { href: finalPrivacyUrl, label: 'Privacy Policy' },
                                        { href: '/projects/quotemate-privacy', label: 'QuoteMate Privacy' },
                                        { href: finalTermsUrl, label: 'Terms of Service' },
                                    ].map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="text-dark-text-secondary/70 hover:text-brand-accent transition-colors duration-300"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    <a
                                        href="/sitemap.xml"
                                        className="text-dark-text-secondary/70 hover:text-brand-accent transition-colors duration-300 flex items-center gap-1"
                                    >
                                        <Globe className="h-3 w-3" />
                                        Sitemap
                                    </a>
                                </div>

                                <div className="flex items-center gap-1 text-xs text-dark-text-secondary/60">
                                    <span>Made with</span>
                                    <Heart className="h-3 w-3 text-red-400/50 fill-current" />
                                    <span>in {CONTACT_INFO.address.city}, {CONTACT_INFO.address.country}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Local SEO benefit statement */}
                    <div className="bg-gradient-to-r from-brand-accent/[0.03] to-brand-primary/[0.03]">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                            <p className="text-center text-dark-text-secondary/60 text-xs leading-relaxed">
                                <strong className="text-brand-accent/70">{BUSINESS_INFO.name}</strong> - Your trusted technology partner in
                                <strong className="text-brand-primary/70"> {SERVICE_AREAS.primary}, {SERVICE_AREAS.region}</strong>.
                                Specializing in web development, AI integration, and custom software solutions for local businesses.
                                Serving {SERVICES_OFFERED.industries.slice(0, 4).join(', ').toLowerCase()}, and growing companies throughout the region.
                                <span className="block mt-1 text-dark-text-secondary/50">
                                    <strong>Local Expertise &bull; Global Technology &bull; Proven Results</strong>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
};

export default Footer;
