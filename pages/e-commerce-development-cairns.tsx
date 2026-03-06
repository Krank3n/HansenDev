import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    ShoppingCart,
    CheckCircle,
    ArrowRight,
    Zap,
    Shield,
    CreditCard,
    TrendingUp,
    Package,
    Users,
    BarChart,
    Settings
} from 'lucide-react';
import { BUSINESS_INFO, CONTACT_INFO, SERVICE_AREAS, PRICING_INFO, ONLINE_PRESENCE } from '../constants/business';

const EcommerceDevelopmentCairns: React.FC = () => {
    const features = [
        {
            icon: <ShoppingCart className="h-6 w-6 text-brand-accent" />,
            title: "Custom Design",
            description: "Beautiful online stores that showcase your products and brand identity"
        },
        {
            icon: <CreditCard className="h-6 w-6 text-brand-accent" />,
            title: "Secure Payments",
            description: "Multiple payment gateways with PCI-compliant security standards"
        },
        {
            icon: <Package className="h-6 w-6 text-brand-accent" />,
            title: "Inventory Management",
            description: "Real-time stock tracking and automated inventory updates"
        },
        {
            icon: <Zap className="h-6 w-6 text-brand-accent" />,
            title: "Fast Performance",
            description: "Optimized checkout process to maximize conversions and sales"
        },
        {
            icon: <BarChart className="h-6 w-6 text-brand-accent" />,
            title: "Analytics & Reports",
            description: "Detailed insights into sales, customers, and business performance"
        },
        {
            icon: <TrendingUp className="h-6 w-6 text-brand-accent" />,
            title: "SEO Optimized",
            description: "Built-in SEO features to help customers find your products online"
        }
    ];

    const platforms = [
        {
            step: "1",
            title: "Shopify",
            description: "All-in-one platform perfect for small to medium businesses"
        },
        {
            step: "2",
            title: "WooCommerce",
            description: "Flexible WordPress solution with extensive customization options"
        },
        {
            step: "3",
            title: "Custom Solutions",
            description: "Fully bespoke e-commerce platforms tailored to your needs"
        },
        {
            step: "4",
            title: "Magento",
            description: "Enterprise-grade platform for large-scale online stores"
        },
        {
            step: "5",
            title: "Marketplace Integration",
            description: "Connect to eBay, Amazon, and other marketplaces"
        },
        {
            step: "6",
            title: "B2B Portals",
            description: "Wholesale and trade platforms with custom pricing tiers"
        }
    ];

    const integrations = [
        "Payment Gateways (Stripe, PayPal)",
        "Shipping Providers (Australia Post)",
        "Accounting Software (Xero, MYOB)",
        "Email Marketing (Mailchimp)",
        "CRM Systems",
        "Point of Sale (POS)",
        "Social Media Platforms",
        "Google Analytics & Ads"
    ];

    return (
        <>
            <Head>
                <title>E-commerce Development Cairns | Online Store Development | {BUSINESS_INFO.shortName}</title>
                <meta name="description" content={`Professional e-commerce development in ${SERVICE_AREAS.primary}. Online stores, Shopify, WooCommerce, and custom shopping carts for ${SERVICE_AREAS.region} businesses. Start selling online today.`} />
                <meta name="keywords" content={`ecommerce development cairns, online store ${SERVICE_AREAS.primary}, shopify developer cairns, woocommerce cairns, shopping cart development, online shop fnq, ecommerce ${CONTACT_INFO.address.state}`} />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href={`${ONLINE_PRESENCE.website.primary}/e-commerce-development-cairns`} />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${ONLINE_PRESENCE.website.primary}/e-commerce-development-cairns`} />
                <meta property="og:title" content={`E-commerce Development ${SERVICE_AREAS.primary} | ${BUSINESS_INFO.shortName}`} />
                <meta property="og:description" content={`Professional e-commerce development for ${SERVICE_AREAS.primary} businesses. Build your online store with local experts.`} />
                <meta property="og:locale" content="en_AU" />
                <meta property="og:image" content={`${ONLINE_PRESENCE.website.primary}/assets/HansenDevOg-1200x630.jpg`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`E-commerce Development ${SERVICE_AREAS.primary}`} />
                <meta name="twitter:description" content={`Professional e-commerce development for ${SERVICE_AREAS.primary} businesses.`} />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "E-commerce Development",
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
                            "description": `Professional e-commerce development services in ${SERVICE_AREAS.primary}. Online stores, Shopify, WooCommerce, and custom shopping solutions.`
                        })
                    }}
                />

                {/* Breadcrumb Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": ONLINE_PRESENCE.website.primary
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Services",
                                    "item": `${ONLINE_PRESENCE.website.primary}/#services`
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "E-commerce Development",
                                    "item": `${ONLINE_PRESENCE.website.primary}/e-commerce-development-cairns`
                                }
                            ]
                        })
                    }}
                />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Back Navigation */}
                <div className="">
                    <div className="container-custom py-6">
                        <Link href="/#services" className="inline-flex items-center gap-2 text-dark-text-secondary hover:text-brand-accent transition-colors duration-300">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Services</span>
                        </Link>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-6">
                                <ShoppingCart className="h-4 w-4" />
                                <span>E-commerce Development</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                E-commerce Development for {SERVICE_AREAS.primary} Businesses
                            </h1>

                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Professional online stores that sell 24/7 and grow your business
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>Start Your Online Store</span>
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                                <a
                                    href={`tel:${CONTACT_INFO.phone.primary}`}
                                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                                >
                                    <span>Call {CONTACT_INFO.phone.display}</span>
                                </a>
                            </div>

                            <p className="text-sm text-dark-text-secondary">
                                Serving <strong className="text-white">{SERVICE_AREAS.primary}</strong> and <strong className="text-white">{SERVICE_AREAS.region}</strong> • <strong className="text-white">{PRICING_INFO.webDevelopment.starting}</strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">E-commerce Features</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Everything you need to run a successful online store
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {features.map((feature, index) => (
                                    <div key={index} className="glass-card p-8 transition-all duration-500">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center mb-6">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                        <p className="text-dark-text-secondary leading-relaxed">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Platforms */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">E-commerce Platforms</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    We work with all major e-commerce platforms and can build custom solutions
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {platforms.map((item, index) => (
                                    <div key={index} className="glass-card p-6 transition-all duration-500">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                                {item.step}
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

                {/* Integrations */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Integrations & Add-ons</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Connect your store with the tools you already use
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {integrations.map((integration, index) => (
                                    <div key={index} className="glass-card p-6 transition-all duration-300 text-center">
                                        <CheckCircle className="h-6 w-6 text-brand-accent mx-auto mb-3" />
                                        <p className="text-white font-semibold">{integration}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Also Available In */}
                <section className="py-12 lg:py-16">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h3 className="text-xl font-bold text-white mb-6">E-Commerce Development Across Far North Queensland</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {['Palm Cove', 'Port Douglas', 'Trinity Beach', 'Smithfield', 'Edge Hill', 'Redlynch', 'Gordonvale', 'Kuranda', 'Mareeba', 'Atherton', 'Innisfail', 'Mission Beach'].map((loc) => (
                                    <Link key={loc} href={`/services/e-commerce/${loc.toLowerCase().replace(/ /g, '-')}`} className="bg-white/5 text-dark-text-secondary px-4 py-2 rounded-lg text-sm hover:bg-brand-accent/20 hover:text-brand-accent transition-all duration-300">
                                        {loc}
                                    </Link>
                                ))}
                                <Link href="/services" className="bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-lg text-sm hover:bg-brand-accent/20 transition-all duration-300 font-medium">
                                    All 25 locations →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Launch Your Online Store?
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Let's build an e-commerce platform that drives sales and grows your business
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>Get Free Quote</span>
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                                <Link
                                    href="/#portfolio"
                                    className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                                >
                                    <span>View Our Stores</span>
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark-text-secondary">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Free Consultation</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Payment Gateway Setup</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Training & Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default EcommerceDevelopmentCairns;
