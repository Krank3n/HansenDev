import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    CheckCircle,
    ArrowRight,
    Globe,
    Bot,
    ShoppingCart,
    Smartphone,
    Code,
    Lightbulb,
    Palette,
    Search,
    Zap,
    Shield,
    TrendingUp,
    MessageSquare,
    Brain,
    Target,
    Users,
    Package,
    BarChart,
    Bell,
    Upload,
    Server,
    Layers,
    WifiOff,
    Settings,
    Link as LinkIcon,
    Map,
    ClipboardCheck,
    Cloud,
    DollarSign,
    MapPin,
    ChevronRight,
    Phone
} from 'lucide-react';
import { BUSINESS_INFO, CONTACT_INFO, SERVICE_AREAS, PRICING_INFO, ONLINE_PRESENCE } from '../../../constants/business';
import { SERVICES, getService, getAllServiceSlugs, Service } from '../../../data/seo/services';
import { LOCATIONS, getLocation, getAllLocationSlugs, Location } from '../../../data/seo/locations';

// Icon mapping for dynamic rendering
const ICON_MAP: Record<string, React.ReactNode> = {
    Globe: <Globe className="h-6 w-6 text-brand-accent" />,
    Bot: <Bot className="h-6 w-6 text-brand-accent" />,
    ShoppingCart: <ShoppingCart className="h-6 w-6 text-brand-accent" />,
    Smartphone: <Smartphone className="h-6 w-6 text-brand-accent" />,
    Code: <Code className="h-6 w-6 text-brand-accent" />,
    Lightbulb: <Lightbulb className="h-6 w-6 text-brand-accent" />,
    Palette: <Palette className="h-6 w-6 text-brand-accent" />,
    Search: <Search className="h-6 w-6 text-brand-accent" />,
    Zap: <Zap className="h-6 w-6 text-brand-accent" />,
    Shield: <Shield className="h-6 w-6 text-brand-accent" />,
    TrendingUp: <TrendingUp className="h-6 w-6 text-brand-accent" />,
    MessageSquare: <MessageSquare className="h-6 w-6 text-brand-accent" />,
    Brain: <Brain className="h-6 w-6 text-brand-accent" />,
    Target: <Target className="h-6 w-6 text-brand-accent" />,
    Users: <Users className="h-6 w-6 text-brand-accent" />,
    Package: <Package className="h-6 w-6 text-brand-accent" />,
    BarChart: <BarChart className="h-6 w-6 text-brand-accent" />,
    Bell: <Bell className="h-6 w-6 text-brand-accent" />,
    Upload: <Upload className="h-6 w-6 text-brand-accent" />,
    Server: <Server className="h-6 w-6 text-brand-accent" />,
    Layers: <Layers className="h-6 w-6 text-brand-accent" />,
    WifiOff: <WifiOff className="h-6 w-6 text-brand-accent" />,
    Settings: <Settings className="h-6 w-6 text-brand-accent" />,
    Link: <LinkIcon className="h-6 w-6 text-brand-accent" />,
    Map: <Map className="h-6 w-6 text-brand-accent" />,
    ClipboardCheck: <ClipboardCheck className="h-6 w-6 text-brand-accent" />,
    Cloud: <Cloud className="h-6 w-6 text-brand-accent" />,
    DollarSign: <DollarSign className="h-6 w-6 text-brand-accent" />,
};

const HERO_ICON_MAP: Record<string, React.ReactNode> = {
    Globe: <Globe className="h-4 w-4" />,
    Bot: <Bot className="h-4 w-4" />,
    ShoppingCart: <ShoppingCart className="h-4 w-4" />,
    Smartphone: <Smartphone className="h-4 w-4" />,
    Code: <Code className="h-4 w-4" />,
    Lightbulb: <Lightbulb className="h-4 w-4" />,
};

interface ServiceLocationPageProps {
    service: Service;
    location: Location;
    nearbyLocations: Location[];
    otherServices: Service[];
}

const ServiceLocationPage: React.FC<ServiceLocationPageProps> = ({
    service,
    location,
    nearbyLocations,
    otherServices,
}) => {
    const canonicalUrl = `${ONLINE_PRESENCE.website.primary}/services/${service.slug}/${location.slug}`;
    const pageTitle = `${service.name} ${location.name} | ${BUSINESS_INFO.shortName}`;
    const pageDescription = `Professional ${service.name.toLowerCase()} for ${location.name} businesses. ${service.description}. Local ${SERVICE_AREAS.region} expertise with ${BUSINESS_INFO.shortName}.`;

    // Structured Data - Service
    const serviceStructuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.name,
        "provider": {
            "@type": "LocalBusiness",
            "name": BUSINESS_INFO.name,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": CONTACT_INFO.address.city,
                "addressRegion": CONTACT_INFO.address.state,
                "addressCountry": CONTACT_INFO.address.countryCode,
            },
            "telephone": CONTACT_INFO.phone.primary,
            "url": ONLINE_PRESENCE.website.primary,
        },
        "areaServed": {
            "@type": "Place",
            "name": location.name,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": location.name,
                "addressRegion": CONTACT_INFO.address.state,
                "postalCode": location.postcode,
                "addressCountry": "AU",
            },
        },
        "description": pageDescription,
        "url": canonicalUrl,
    };

    // Structured Data - Breadcrumb
    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": ONLINE_PRESENCE.website.primary },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": `${ONLINE_PRESENCE.website.primary}/#services` },
            { "@type": "ListItem", "position": 3, "name": service.name, "item": `${ONLINE_PRESENCE.website.primary}/services/${service.slug}` },
            { "@type": "ListItem", "position": 4, "name": location.name, "item": canonicalUrl },
        ],
    };

    // Structured Data - FAQ
    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
        })),
    };

    const pricing = PRICING_INFO[service.pricingKey];

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content={`${service.name.toLowerCase()} ${location.name.toLowerCase()}, ${service.slug} ${location.slug}, ${location.name.toLowerCase()} ${service.shortName.toLowerCase()}, ${SERVICE_AREAS.region.toLowerCase()} ${service.name.toLowerCase()}`} />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href={canonicalUrl} />

                <meta httpEquiv="content-language" content="en-AU" />
                <meta name="geo.region" content="AU-QLD" />
                <meta name="geo.placename" content={`${location.name}, Queensland`} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={`${service.name} in ${location.name} | ${BUSINESS_INFO.shortName}`} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:locale" content="en_AU" />
                <meta property="og:site_name" content={BUSINESS_INFO.name} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${service.name} in ${location.name}`} />
                <meta name="twitter:description" content={pageDescription} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Breadcrumb Navigation */}
                <nav className="border-b border-white/10" aria-label="Breadcrumb">
                    <div className="container-custom py-4">
                        <ol className="flex items-center gap-2 text-sm text-dark-text-secondary flex-wrap">
                            <li>
                                <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
                            </li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li>
                                <Link href="/#services" className="hover:text-brand-accent transition-colors">Services</Link>
                            </li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li>
                                <span className="hover:text-brand-accent transition-colors">{service.name}</span>
                            </li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li className="text-white" aria-current="page">{location.name}</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-6">
                                {HERO_ICON_MAP[service.icon]}
                                <span>{service.name} &mdash; {location.name}</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                {service.name} for {location.name} Businesses
                            </h1>

                            <p className="text-xl sm:text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                {service.heroSubtitle}
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <a
                                    href="/#contact"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>{service.ctaText}</span>
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                                <a
                                    href={`tel:${CONTACT_INFO.phone.primary}`}
                                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>Call {CONTACT_INFO.phone.display}</span>
                                </a>
                            </div>

                            <p className="text-sm text-dark-text-secondary">
                                Serving <strong className="text-white">{location.name}</strong> and <strong className="text-white">{SERVICE_AREAS.region}</strong> &bull; <strong className="text-white">{pricing.starting}</strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Local Context Section */}
                <section className="py-12 lg:py-16 border-y border-white/10 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-brand-accent/30">
                                    <MapPin className="h-6 w-6 text-brand-accent" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-3">
                                        {service.name} in {location.name}, {location.region}
                                    </h2>
                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        {location.context}
                                    </p>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        {BUSINESS_INFO.shortName} provides professional {service.name.toLowerCase()} services tailored to the unique needs of {location.name} businesses. Whether you&apos;re in {location.industries.slice(0, 3).join(', ')}, or another local industry, we understand the {location.region} market and deliver solutions that drive real results.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    Why {location.name} Businesses Choose Us
                                </h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    {service.description} &mdash; built with local expertise
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {service.features.map((feature, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center mb-6 border border-brand-accent/30">
                                            {ICON_MAP[feature.icon] || <Zap className="h-6 w-6 text-brand-accent" />}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                        <p className="text-dark-text-secondary leading-relaxed">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Offered */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    {service.name} Services in {location.name}
                                </h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Comprehensive {service.name.toLowerCase()} solutions for {location.region} businesses
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {service.offerings.map((item, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                                {index + 1}
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                        </div>
                                        <p className="text-dark-text-secondary leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Local Industries */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    Key Industries in {location.name}
                                </h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    We work with businesses across these {location.name} industries
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {location.industries.map((industry, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 text-center">
                                        <CheckCircle className="h-6 w-6 text-brand-accent mx-auto mb-3" />
                                        <p className="text-white font-semibold text-sm">{industry}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technologies */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Technologies We Use</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Modern tech stack for building fast, secure, and scalable solutions
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {service.technologies.map((tech, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 text-center">
                                        <Code className="h-6 w-6 text-brand-accent mx-auto mb-3" />
                                        <p className="text-white font-semibold">{tech}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Common questions about {service.name.toLowerCase()} in {location.name}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {service.faqs.map((faq, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                                        <p className="text-dark-text-secondary leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Internal Links - Nearby Locations */}
                {nearbyLocations.length > 0 && (
                    <section className="py-16 lg:py-24 bg-white/[0.02] border-t border-white/10">
                        <div className="container-custom">
                            <div className="max-w-5xl mx-auto">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                        {service.name} in Nearby Areas
                                    </h2>
                                    <p className="text-lg text-dark-text-secondary">
                                        We also serve businesses in these {SERVICE_AREAS.region} locations
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {nearbyLocations.map((nearby) => (
                                        <Link
                                            key={nearby.slug}
                                            href={`/services/${service.slug}/${nearby.slug}`}
                                            className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 group"
                                        >
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-brand-accent flex-shrink-0" />
                                                <span className="text-white font-medium group-hover:text-brand-accent transition-colors text-sm">
                                                    {nearby.name}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Internal Links - Other Services */}
                <section className="py-16 lg:py-24 border-t border-white/10">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    Other Services in {location.name}
                                </h2>
                                <p className="text-lg text-dark-text-secondary">
                                    Explore our full range of technology services for {location.name} businesses
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {otherServices.map((other) => (
                                    <Link
                                        key={other.slug}
                                        href={`/services/${other.slug}/${location.slug}`}
                                        className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            {ICON_MAP[other.icon] || <Zap className="h-6 w-6 text-brand-accent" />}
                                            <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">
                                                {other.name}
                                            </h3>
                                        </div>
                                        <p className="text-dark-text-secondary text-sm leading-relaxed">
                                            {other.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 border-y border-brand-accent/20">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                {service.ctaQuestion}
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Get in touch for a free consultation about {service.name.toLowerCase()} for your {location.name} business
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <a
                                    href="/#contact"
                                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>{service.ctaText}</span>
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                                <Link
                                    href="/our-work"
                                    className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                                >
                                    <span>View Our Work</span>
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark-text-secondary">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Free Consultation</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Fixed Price Quotes</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Local {location.region} Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const serviceSlugs = getAllServiceSlugs();
    const locationSlugs = getAllLocationSlugs();

    const paths = serviceSlugs.flatMap(service =>
        locationSlugs.map(location => ({
            params: { service, location },
        }))
    );

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const serviceSlug = params?.service as string;
    const locationSlug = params?.location as string;

    const service = getService(serviceSlug);
    const location = getLocation(locationSlug);

    if (!service || !location) {
        return { notFound: true };
    }

    // Get nearby locations (exclude current, limit to 8)
    const nearbyLocations = LOCATIONS
        .filter(l => l.slug !== location.slug)
        .slice(0, 8);

    // Get other services (exclude current)
    const otherServices = SERVICES.filter(s => s.slug !== service.slug);

    return {
        props: {
            service,
            location,
            nearbyLocations,
            otherServices,
        },
    };
};

export default ServiceLocationPage;
