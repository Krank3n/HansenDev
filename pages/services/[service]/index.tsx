import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowRight,
    ArrowRightLeft,
    BarChart,
    Bell,
    Bot,
    Brain,
    CheckCircle,
    ChevronRight,
    ClipboardCheck,
    Cloud,
    Code,
    DollarSign,
    FileText,
    Globe,
    Layers,
    Lightbulb,
    Link as LinkIcon,
    Map,
    MapPin,
    MessageSquare,
    Package,
    Palette,
    Phone,
    RefreshCw,
    Search,
    Server,
    Settings,
    Shield,
    ShoppingCart,
    Smartphone,
    Target,
    TrendingUp,
    Upload,
    Users,
    WifiOff,
    Zap,
} from 'lucide-react';
import { BUSINESS_INFO, CONTACT_INFO, SERVICE_AREAS, PRICING_INFO, ONLINE_PRESENCE } from '../../../constants/business';
import { SERVICES, getService, getAllServiceSlugs, hasLocationPages, Service } from '../../../data/seo/services';
import { LOCATIONS, Location } from '../../../data/seo/locations';
import RelatedArticles from '../../../components/RelatedArticles';
import { getArticlesByProduct, ArticlePreview } from '../../../lib/articles';

const ICON_MAP: Record<string, React.ReactNode> = {
    ArrowRightLeft: <ArrowRightLeft className="h-6 w-6 text-brand-accent" />,
    BarChart: <BarChart className="h-6 w-6 text-brand-accent" />,
    Bell: <Bell className="h-6 w-6 text-brand-accent" />,
    Bot: <Bot className="h-6 w-6 text-brand-accent" />,
    Brain: <Brain className="h-6 w-6 text-brand-accent" />,
    ClipboardCheck: <ClipboardCheck className="h-6 w-6 text-brand-accent" />,
    Cloud: <Cloud className="h-6 w-6 text-brand-accent" />,
    Code: <Code className="h-6 w-6 text-brand-accent" />,
    DollarSign: <DollarSign className="h-6 w-6 text-brand-accent" />,
    FileText: <FileText className="h-6 w-6 text-brand-accent" />,
    Globe: <Globe className="h-6 w-6 text-brand-accent" />,
    Layers: <Layers className="h-6 w-6 text-brand-accent" />,
    Lightbulb: <Lightbulb className="h-6 w-6 text-brand-accent" />,
    Link: <LinkIcon className="h-6 w-6 text-brand-accent" />,
    Map: <Map className="h-6 w-6 text-brand-accent" />,
    MapPin: <MapPin className="h-6 w-6 text-brand-accent" />,
    MessageSquare: <MessageSquare className="h-6 w-6 text-brand-accent" />,
    Package: <Package className="h-6 w-6 text-brand-accent" />,
    Palette: <Palette className="h-6 w-6 text-brand-accent" />,
    RefreshCw: <RefreshCw className="h-6 w-6 text-brand-accent" />,
    Search: <Search className="h-6 w-6 text-brand-accent" />,
    Server: <Server className="h-6 w-6 text-brand-accent" />,
    Settings: <Settings className="h-6 w-6 text-brand-accent" />,
    Shield: <Shield className="h-6 w-6 text-brand-accent" />,
    ShoppingCart: <ShoppingCart className="h-6 w-6 text-brand-accent" />,
    Smartphone: <Smartphone className="h-6 w-6 text-brand-accent" />,
    Target: <Target className="h-6 w-6 text-brand-accent" />,
    TrendingUp: <TrendingUp className="h-6 w-6 text-brand-accent" />,
    Upload: <Upload className="h-6 w-6 text-brand-accent" />,
    Users: <Users className="h-6 w-6 text-brand-accent" />,
    WifiOff: <WifiOff className="h-6 w-6 text-brand-accent" />,
    Zap: <Zap className="h-6 w-6 text-brand-accent" />,
};

// Six of the eight services also have a hand-written Cairns landing page. Those pages
// own the "<service> Cairns" query; this hub is the location directory that sits above
// the 25 suburb pages, so it points at them rather than competing with them.
const CAIRNS_PAGE: Record<string, string> = {
    'web-development': '/web-development-cairns',
    'ai-integration': '/ai-integration-cairns',
    'e-commerce': '/e-commerce-development-cairns',
    'mobile-app-development': '/mobile-app-development-cairns',
    'custom-software': '/custom-software-cairns',
    'technology-consulting': '/technology-consulting-cairns',
};

interface ServiceHubPageProps {
    service: Service;
    articles: ArticlePreview[];
    // Empty for services that have no suburb pages - the directory section is then
    // skipped and the hub is simply the page for that service.
    locations: Location[];
    otherServices: Service[];
}

const ServiceHubPage: React.FC<ServiceHubPageProps> = ({ service, locations, otherServices, articles }) => {
    const canonicalUrl = `${ONLINE_PRESENCE.website.primary}/services/${service.slug}`;
    const pageTitle = `${service.name} in ${SERVICE_AREAS.region} | ${BUSINESS_INFO.shortName}`;
    const hasDirectory = locations.length > 0;
    const pageDescription = hasDirectory
        ? `${service.description}. Serving ${locations.length} towns and suburbs across ${SERVICE_AREAS.region}, from ${SERVICE_AREAS.primary} to Port Douglas and the Tablelands. ${PRICING_INFO[service.pricingKey].starting}.`
        : `${service.description}. Serving businesses across ${SERVICE_AREAS.region} and remotely Australia-wide. ${PRICING_INFO[service.pricingKey].starting}.`;
    const cairnsPage = CAIRNS_PAGE[service.slug];

    // Group the location list by region so the directory reads as geography rather
    // than an undifferentiated wall of links.
    const byRegion = locations.reduce<Record<string, Location[]>>((acc, loc) => {
        (acc[loc.region] = acc[loc.region] || []).push(loc);
        return acc;
    }, {});

    const serviceStructuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.name,
        "name": `${service.name} — ${SERVICE_AREAS.region}`,
        "description": pageDescription,
        "url": canonicalUrl,
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
        "areaServed": hasDirectory
            ? locations.map(loc => ({
                "@type": "Place",
                "name": loc.name,
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": loc.name,
                    "addressRegion": CONTACT_INFO.address.state,
                    "postalCode": loc.postcode,
                    "addressCountry": "AU",
                },
            }))
            : [{
                "@type": "Place",
                "name": SERVICE_AREAS.region,
                "address": {
                    "@type": "PostalAddress",
                    "addressRegion": CONTACT_INFO.address.state,
                    "addressCountry": "AU",
                },
            }],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `${service.name} services`,
            "itemListElement": service.offerings.map((offering, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                    "@type": "Service",
                    "name": offering.title,
                    "description": offering.description,
                },
            })),
        },
    };

    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": ONLINE_PRESENCE.website.primary },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": `${ONLINE_PRESENCE.website.primary}/services` },
            { "@type": "ListItem", "position": 3, "name": service.name, "item": canonicalUrl },
        ],
    };

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
                <link rel="canonical" href={canonicalUrl} />

                <meta property="og:image" content="https://hansendev.com.au/assets/HansenDevOg-1200x630.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta httpEquiv="content-language" content="en-AU" />
                <meta name="geo.region" content="AU-QLD" />
                <meta name="geo.placename" content={`${SERVICE_AREAS.primary}, Queensland`} />

                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb">
                    <div className="container-custom py-4">
                        <ol className="flex items-center gap-2 text-sm text-dark-text-secondary flex-wrap">
                            <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li><Link href="/services" className="hover:text-brand-accent transition-colors">Services</Link></li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li className="text-white" aria-current="page">{service.name}</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.1),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                {service.name} Across {SERVICE_AREAS.region}
                            </h1>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                {service.heroSubtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="/#contact"
                                    className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>{service.ctaText}</span>
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                                <a
                                    href={`tel:${CONTACT_INFO.phone.primary}`}
                                    className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-medium text-dark-text-secondary hover:text-brand-accent transition-colors"
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>{CONTACT_INFO.phone.primary}</span>
                                </a>
                            </div>
                            <p className="mt-6 text-sm text-dark-text-secondary">
                                {hasDirectory
                                    ? <>Serving <strong className="text-white">{locations.length} towns and suburbs</strong></>
                                    : <>Serving all of <strong className="text-white">{SERVICE_AREAS.region}</strong></>}
                                {' '}&bull; <strong className="text-white">{pricing.starting}</strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Locations directory — the reason this page exists, where there is one */}
                {hasDirectory && (
                <section className="py-12 lg:py-16 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Find {service.name} in Your Area
                            </h2>
                            <p className="text-dark-text-secondary mb-10 max-w-2xl">
                                Every town below has its own page covering the local business mix and what {service.name.toLowerCase()} looks like there.
                                {cairnsPage ? ' Based in Cairns? Start with the main Cairns page below.' : ''}
                            </p>

                            {cairnsPage && (
                                <Link
                                    href={cairnsPage}
                                    className="glass-card flex items-center justify-between gap-4 p-5 mb-10 group"
                                >
                                    <div>
                                        <span className="text-white font-bold text-lg group-hover:text-brand-accent transition-colors">
                                            {service.name} in {SERVICE_AREAS.primary}
                                        </span>
                                        <p className="text-sm text-dark-text-secondary mt-1">
                                            Our main {SERVICE_AREAS.primary} page — pricing, process, and recent local work.
                                        </p>
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-brand-accent flex-shrink-0" />
                                </Link>
                            )}

                            <div className="space-y-8">
                                {Object.entries(byRegion).map(([region, regionLocations]) => (
                                    <div key={region}>
                                        <h3 className="text-sm font-medium text-dark-text-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-brand-accent" />
                                            {region}
                                        </h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                            {regionLocations.map((location) => (
                                                <Link
                                                    key={location.slug}
                                                    href={`/services/${service.slug}/${location.slug}`}
                                                    className="bg-white/[0.03] rounded-lg px-4 py-3 hover:bg-white/[0.06] transition-all duration-300 group text-center"
                                                >
                                                    <span className="block text-white text-sm font-medium group-hover:text-brand-accent transition-colors">
                                                        {location.name}
                                                    </span>
                                                    <span className="block text-xs text-dark-text-secondary/70 mt-0.5">
                                                        {location.postcode}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                )}

                {/* What's included */}
                <section className="py-12 lg:py-16">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                What {service.name} Includes
                            </h2>
                            <p className="text-dark-text-secondary mb-10 max-w-2xl">{service.description}</p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {service.offerings.map((item) => (
                                    <div key={item.title} className="glass-card p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0" />
                                            <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                        </div>
                                        <p className="text-dark-text-secondary text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why us */}
                <section className="py-12 lg:py-16 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
                                Why {SERVICE_AREAS.region} Businesses Choose Us
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {service.features.map((feature) => (
                                    <div key={feature.title} className="glass-card p-6">
                                        <div className="mb-4">{ICON_MAP[feature.icon] || <CheckCircle className="h-6 w-6 text-brand-accent" />}</div>
                                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-dark-text-secondary text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technologies */}
                <section className="py-12 lg:py-16">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Technologies We Use</h2>
                            <div className="flex flex-wrap justify-center gap-3">
                                {service.technologies.map((tech) => (
                                    <span key={tech} className="bg-white/[0.04] text-dark-text-secondary px-4 py-2 rounded-lg text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-12 lg:py-16 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
                                {service.name} Questions
                            </h2>
                            <div className="space-y-4">
                                {service.faqs.map((faq) => (
                                    <div key={faq.question} className="glass-card p-6">
                                        <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                                        <p className="text-dark-text-secondary leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other services */}
                <section className="py-12 lg:py-16">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Other Services</h2>
                            <p className="text-dark-text-secondary mb-10">
                                Everything else we build for {SERVICE_AREAS.region} businesses.
                            </p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {otherServices.map((other) => (
                                    <Link key={other.slug} href={`/services/${other.slug}`} className="glass-card p-5 group">
                                        <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors mb-2">
                                            {other.name}
                                        </h3>
                                        <p className="text-sm text-dark-text-secondary">{other.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <RelatedArticles
                    articles={articles}
                    product="hansendev"
                    heading="Worth reading first"
                    intro="What this costs, how long it takes, and what to ask before you commit."
                />

                {/* CTA */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                {service.ctaQuestion}
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Free consultation, no obligation. We work across {SERVICE_AREAS.region} and remotely Australia-wide.
                            </p>
                            <a
                                href="/#contact"
                                className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                            >
                                <span>{service.ctaText}</span>
                                <ArrowRight className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: getAllServiceSlugs().map(service => ({ params: { service } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const serviceSlug = params?.service as string;
    const service = getService(serviceSlug);

    if (!service) {
        return { notFound: true };
    }

    return {
        props: {
            service,
            locations: hasLocationPages(service) ? LOCATIONS : [],
            otherServices: SERVICES.filter(s => s.slug !== service.slug),
            articles: getArticlesByProduct('hansendev').slice(0, 3),
        },
    };
};

export default ServiceHubPage;
