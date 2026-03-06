import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowRight,
    Bot,
    ChevronRight,
    Code,
    Globe,
    Lightbulb,
    MapPin,
    ShoppingCart,
    Smartphone,
} from 'lucide-react';
import { BUSINESS_INFO, ONLINE_PRESENCE, SERVICE_AREAS, CONTACT_INFO } from '../../constants/business';
import { SERVICES } from '../../data/seo/services';
import { LOCATIONS } from '../../data/seo/locations';

const ICON_MAP: Record<string, React.ReactNode> = {
    Globe: <Globe className="h-8 w-8 text-brand-accent" />,
    Bot: <Bot className="h-8 w-8 text-brand-accent" />,
    ShoppingCart: <ShoppingCart className="h-8 w-8 text-brand-accent" />,
    Smartphone: <Smartphone className="h-8 w-8 text-brand-accent" />,
    Code: <Code className="h-8 w-8 text-brand-accent" />,
    Lightbulb: <Lightbulb className="h-8 w-8 text-brand-accent" />,
};

const ServicesIndex: React.FC = () => {
    const canonicalUrl = `${ONLINE_PRESENCE.website.primary}/services`;

    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": ONLINE_PRESENCE.website.primary },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": canonicalUrl },
        ],
    };

    return (
        <>
            <Head>
                <title>Services by Location | Web Development, AI & Software across {SERVICE_AREAS.region} | {BUSINESS_INFO.shortName}</title>
                <meta name="description" content={`Professional web development, AI integration, e-commerce, mobile apps, custom software, and technology consulting across ${SERVICE_AREAS.region}. Find services in your area.`} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={`Services by Location | ${BUSINESS_INFO.shortName}`} />
                <meta property="og:locale" content="en_AU" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Breadcrumb */}
                <nav className="border-b border-white/10" aria-label="Breadcrumb">
                    <div className="container-custom py-4">
                        <ol className="flex items-center gap-2 text-sm text-dark-text-secondary">
                            <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li className="text-white" aria-current="page">Services</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.1),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Technology Services Across {SERVICE_AREAS.region}
                            </h1>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Professional web development, AI integration, and software solutions for businesses in {LOCATIONS.length} locations across {SERVICE_AREAS.region}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid with Location Links */}
                {SERVICES.map((service) => (
                    <section key={service.slug} className="py-12 lg:py-16 border-t border-white/10 even:bg-white/[0.02]">
                        <div className="container-custom">
                            <div className="max-w-6xl mx-auto">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-2xl flex items-center justify-center border border-brand-accent/30">
                                        {ICON_MAP[service.icon]}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-white">{service.name}</h2>
                                        <p className="text-dark-text-secondary">{service.description}</p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h3 className="text-sm font-medium text-dark-text-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-brand-accent" />
                                        Available in {LOCATIONS.length} locations
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                        {LOCATIONS.map((location) => (
                                            <Link
                                                key={location.slug}
                                                href={`/services/${service.slug}/${location.slug}`}
                                                className="bg-white/5 rounded-lg px-4 py-3 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 group text-center"
                                            >
                                                <span className="text-white text-sm font-medium group-hover:text-brand-accent transition-colors">
                                                    {location.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

                {/* CTA */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 border-y border-brand-accent/20">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                Don&apos;t See Your Area?
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                We serve all of {SERVICE_AREAS.region} and work remotely with businesses across Australia. Get in touch for a free consultation.
                            </p>
                            <a
                                href="/#contact"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                            >
                                <span>Get Free Consultation</span>
                                <ArrowRight className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ServicesIndex;
