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

// Import business constants
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

    // Determine privacy policy URL based on current page
    const isQuoteMatePage = router.pathname.includes('/projects/quotemate');
    const finalPrivacyUrl = privacyPolicyUrl || (isQuoteMatePage ? '/projects/quotemate-privacy' : '/privacy-policy');
    const finalTermsUrl = termsOfServiceUrl || '/terms-of-service';

    // Quick contact handler
    const handleQuickContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <footer className="bg-gradient-to-b from-dark-card to-dark-bg border-t border-gray-700/50 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-brand-accent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-primary rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    {/* Main footer content */}
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

                            {/* Company Information using constants */}
                            <div className="lg:col-span-1">
                                <div className="flex items-center mb-6">
                                    <Code className="h-8 w-8 mr-3 text-brand-accent" />
                                    <div>
                                        <h3 className="font-bold text-xl text-dark-text">{BUSINESS_INFO.shortName}</h3>
                                        <span className="text-xs text-dark-text-secondary">PTY LTD</span>
                                    </div>
                                </div>

                                <p className="text-dark-text-secondary mb-6 leading-relaxed text-sm">
                                    {SERVICE_AREAS.primary}' premier technology partner, helping {SERVICE_AREAS.region} businesses
                                    thrive with custom web development, AI integration, and innovative software solutions.
                                </p>

                                {/* Trust indicators using constants */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Shield className="h-4 w-4 text-green-400" />
                                        <span className="text-dark-text-secondary">Australian Business Registered</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Star className="h-4 w-4 text-yellow-400" />
                                        <span className="text-dark-text-secondary">
                                            {BUSINESS_METRICS.stats.averageRating} Rating • {BUSINESS_METRICS.stats.reviewCount} Reviews
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Award className="h-4 w-4 text-brand-accent" />
                                        <span className="text-dark-text-secondary">
                                            {BUSINESS_METRICS.stats.projectsCompleted} Successful Projects
                                        </span>
                                    </div>
                                </div>

                                {/* Social Media Links using constants */}
                                <div className="flex space-x-4">
                                    <a
                                        href={ONLINE_PRESENCE.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-dark-bg/50 hover:bg-brand-accent/20 rounded-lg transition-all duration-300 hover:scale-110"
                                        aria-label={`Follow ${BUSINESS_INFO.shortName} on LinkedIn`}
                                    >
                                        <Linkedin className="h-5 w-5 text-dark-text-secondary hover:text-brand-accent transition-colors duration-300" />
                                    </a>
                                    <a
                                        href={ONLINE_PRESENCE.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-dark-bg/50 hover:bg-brand-accent/20 rounded-lg transition-all duration-300 hover:scale-110"
                                        aria-label={`View ${BUSINESS_INFO.shortName} projects on GitHub`}
                                    >
                                        <Github className="h-5 w-5 text-dark-text-secondary hover:text-brand-accent transition-colors duration-300" />
                                    </a>
                                    {/*<a*/}
                                    {/*    href={ONLINE_PRESENCE.social.facebook}*/}
                                    {/*    target="_blank"*/}
                                    {/*    rel="noopener noreferrer"*/}
                                    {/*    className="p-2 bg-dark-bg/50 hover:bg-brand-accent/20 rounded-lg transition-all duration-300 hover:scale-110"*/}
                                    {/*    aria-label={`Follow ${BUSINESS_INFO.shortName} on Facebook`}*/}
                                    {/*>*/}
                                    {/*    <Facebook className="h-5 w-5 text-dark-text-secondary hover:text-brand-accent transition-colors duration-300" />*/}
                                    {/*</a>*/}
                                    {/*<a*/}
                                    {/*    href={ONLINE_PRESENCE.social.instagram}*/}
                                    {/*    target="_blank"*/}
                                    {/*    rel="noopener noreferrer"*/}
                                    {/*    className="p-2 bg-dark-bg/50 hover:bg-brand-accent/20 rounded-lg transition-all duration-300 hover:scale-110"*/}
                                    {/*    aria-label={`Follow ${BUSINESS_INFO.shortName} on Instagram`}*/}
                                    {/*>*/}
                                    {/*    <Instagram className="h-5 w-5 text-dark-text-secondary hover:text-brand-accent transition-colors duration-300" />*/}
                                    {/*</a>*/}
                                </div>
                            </div>

                            {/* Services using constants */}
                            <div>
                                <h4 className="font-semibold text-dark-text mb-6 text-lg">Our Services</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            href="/web-development-cairns"
                                            className="text-dark-text-secondary hover:text-brand-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                                        >
                                            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                                            Web Development {SERVICE_AREAS.primary}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/ai-integration-cairns"
                                            className="text-dark-text-secondary hover:text-brand-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                                        >
                                            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                                            AI Integration & Automation
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/custom-software-cairns"
                                            className="text-dark-text-secondary hover:text-brand-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                                        >
                                            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                                            Custom Software Development
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/technology-consulting-cairns"
                                            className="text-dark-text-secondary hover:text-brand-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                                        >
                                            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                                            Technology Consulting
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/e-commerce-development-cairns"
                                            className="text-dark-text-secondary hover:text-brand-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                                        >
                                            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                                            E-commerce Development
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/mobile-app-development-cairns"
                                            className="text-dark-text-secondary hover:text-brand-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                                        >
                                            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                                            Mobile App Development
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Service Areas & Industries using constants */}
                            <div>
                                <h4 className="font-semibold text-dark-text mb-6 text-lg">Service Areas</h4>
                                <div className="space-y-4">
                                    <div>
                                        <h5 className="text-sm font-medium text-brand-accent mb-2">Primary Areas:</h5>
                                        <ul className="space-y-1 text-sm text-dark-text-secondary">
                                            {SERVICE_AREAS.areas.slice(0, 4).map((area) => (
                                                <li key={area}>• {area}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-medium text-brand-primary mb-2">Industries We Serve:</h5>
                                        <ul className="space-y-1 text-sm text-dark-text-secondary">
                                            {SERVICES_OFFERED.industries.slice(0, 4).map((industry) => (
                                                <li key={industry}>• {industry}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information using constants */}
                            <div>
                                <h4 className="font-semibold text-dark-text mb-6 text-lg">Get In Touch</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-dark-text font-medium text-sm">
                                                {CONTACT_INFO.address.suburb}, {CONTACT_INFO.address.city}
                                            </p>
                                            <p className="text-dark-text-secondary text-xs">
                                                {CONTACT_INFO.address.state} {CONTACT_INFO.address.postcode}, {CONTACT_INFO.address.country}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 text-brand-accent flex-shrink-0" />
                                        <a
                                            href={`tel:${CONTACT_INFO.phone.primary}`}
                                            className="text-dark-text hover:text-brand-accent transition-colors duration-300 text-sm font-medium"
                                        >
                                            {getFormattedPhone()}
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Mail className="h-5 w-5 text-brand-accent flex-shrink-0" />
                                        <a
                                            href={`mailto:${CONTACT_INFO.email.primary}`}
                                            className="text-dark-text hover:text-brand-accent transition-colors duration-300 text-sm font-medium"
                                        >
                                            {CONTACT_INFO.email.primary}
                                        </a>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Clock className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-dark-text text-sm font-medium">Business Hours:</p>
                                            <p className="text-dark-text-secondary text-xs">{CONTACT_INFO.hours.business}</p>
                                            <p className="text-dark-text-secondary text-xs">{CONTACT_INFO.hours.support}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick contact CTA */}
                                <div className="mt-6">
                                    <button
                                        onClick={handleQuickContact}
                                        className="group inline-flex items-center gap-2 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25"
                                        aria-label={`Contact ${BUSINESS_INFO.shortName} for web development services in ${SERVICE_AREAS.primary}`}
                                    >
                                        <span>Get Free Quote</span>
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar using constants */}
                    <div className="border-t border-gray-700/50 bg-dark-bg/50">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                                {/* Copyright using constants */}
                                <div className="text-center md:text-left">
                                    <p className="text-dark-text-secondary text-sm">
                                        &copy; {currentYear} <span className="font-semibold text-dark-text">{BUSINESS_INFO.name}</span>. All rights reserved.
                                    </p>
                                    <p className="text-dark-text-secondary text-xs mt-1">
                                        ABN: {BUSINESS_INFO.abn} • {CONTACT_INFO.address.state}, {CONTACT_INFO.address.country}
                                    </p>
                                </div>

                                {/* Legal Links */}
                                <div className="flex flex-wrap justify-center gap-6 text-xs">
                                    <a
                                        href={finalPrivacyUrl}
                                        className="text-dark-text-secondary hover:text-brand-accent transition-colors duration-300"
                                    >
                                        Privacy Policy
                                    </a>
                                    <a
                                        href="/projects/quotemate-privacy"
                                        className="text-dark-text-secondary hover:text-brand-accent transition-colors duration-300"
                                    >
                                        QuoteMate Privacy
                                    </a>
                                    <a
                                        href={finalTermsUrl}
                                        className="text-dark-text-secondary hover:text-brand-accent transition-colors duration-300"
                                    >
                                        Terms of Service
                                    </a>
                                    <a
                                        href="/sitemap.xml"
                                        className="text-dark-text-secondary hover:text-brand-accent transition-colors duration-300 flex items-center gap-1"
                                    >
                                        <Globe className="h-3 w-3" />
                                        Sitemap
                                    </a>
                                </div>

                                {/* Made with love using constants */}
                                <div className="flex items-center gap-1 text-xs text-dark-text-secondary">
                                    <span>Made with</span>
                                    <Heart className="h-3 w-3 text-red-400 fill-current" />
                                    <span>in {CONTACT_INFO.address.city}, {CONTACT_INFO.address.country}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Local SEO benefit statement using constants */}
                    <div className="bg-gradient-to-r from-brand-accent/5 to-brand-primary/5 border-t border-brand-accent/10">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                            <p className="text-center text-dark-text-secondary text-xs leading-relaxed">
                                <strong className="text-brand-accent">{BUSINESS_INFO.name}</strong> - Your trusted technology partner in
                                <strong className="text-brand-primary"> {SERVICE_AREAS.primary}, {SERVICE_AREAS.region}</strong>.
                                Specializing in web development, AI integration, and custom software solutions for local businesses.
                                Serving {SERVICES_OFFERED.industries.slice(0, 4).join(', ').toLowerCase()}, and growing companies throughout the region.
                                <span className="block mt-1">
                                    <strong>Local Expertise • Global Technology • Proven Results</strong>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Hidden SEO content using constants */}
                <div className="sr-only">
                    <h2>{BUSINESS_INFO.name} - {SERVICE_AREAS.primary} Web Development and Technology Services</h2>
                    <p>
                        Professional web development, AI integration, and technology consulting services in {SERVICE_AREAS.primary}, {CONTACT_INFO.address.state}, {CONTACT_INFO.address.country}.
                        Serving businesses throughout {SERVICE_AREAS.region} including {SERVICE_AREAS.areas.slice(1, 5).join(', ')}, and surrounding areas.
                    </p>

                    <h3>Contact Information</h3>
                    <p>Address: {getFullAddress()}</p>
                    <p>Phone: {CONTACT_INFO.phone.primary}</p>
                    <p>Email: {CONTACT_INFO.email.primary}</p>
                    <p>Business Hours: {CONTACT_INFO.hours.business}</p>

                    <h3>Services Offered</h3>
                    <p>
                        Web development {SERVICE_AREAS.primary}, AI integration {SERVICE_AREAS.primary}, {SERVICES_OFFERED.primary.join(', ').toLowerCase()},
                        business automation, digital transformation, website design {SERVICE_AREAS.primary}, tourism website development, hospitality technology solutions.
                    </p>

                    <h3>Service Areas</h3>
                    <p>{SERVICE_AREAS.areas.join(', ')}, {SERVICE_AREAS.region}, {CONTACT_INFO.address.country}.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;