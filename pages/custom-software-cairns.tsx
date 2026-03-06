import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    Code,
    CheckCircle,
    ArrowRight,
    Zap,
    Shield,
    Users,
    TrendingUp,
    Clock,
    Target,
    Database,
    Settings
} from 'lucide-react';
import { BUSINESS_INFO, CONTACT_INFO, SERVICE_AREAS, PRICING_INFO, ONLINE_PRESENCE } from '../constants/business';

const CustomSoftwareCairns: React.FC = () => {
    const features = [
        {
            icon: <Target className="h-6 w-6 text-brand-accent" />,
            title: "Tailored Solutions",
            description: "Software designed specifically for your business processes and requirements"
        },
        {
            icon: <Zap className="h-6 w-6 text-brand-accent" />,
            title: "Scalable Architecture",
            description: "Built to grow with your business, from startup to enterprise"
        },
        {
            icon: <Shield className="h-6 w-6 text-brand-accent" />,
            title: "Secure & Reliable",
            description: "Enterprise-grade security and 99.9% uptime guarantee"
        },
        {
            icon: <Database className="h-6 w-6 text-brand-accent" />,
            title: "Data Integration",
            description: "Seamless integration with your existing systems and databases"
        },
        {
            icon: <Users className="h-6 w-6 text-brand-accent" />,
            title: "User-Friendly",
            description: "Intuitive interfaces that your team will love to use"
        },
        {
            icon: <TrendingUp className="h-6 w-6 text-brand-accent" />,
            title: "ROI Focused",
            description: "Solutions that deliver measurable business value and efficiency gains"
        }
    ];

    const process = [
        { step: "1", title: "Discovery", description: "We understand your business challenges and goals" },
        { step: "2", title: "Planning", description: "Create detailed specifications and project roadmap" },
        { step: "3", title: "Development", description: "Build your custom solution with regular updates" },
        { step: "4", title: "Testing", description: "Rigorous quality assurance and user testing" },
        { step: "5", title: "Deployment", description: "Launch with full training and documentation" },
        { step: "6", title: "Support", description: "Ongoing maintenance and feature enhancements" }
    ];

    const industries = [
        "Tourism & Hospitality",
        "Healthcare & Medical",
        "Retail & E-commerce",
        "Professional Services",
        "Education & Training",
        "Real Estate",
        "Manufacturing",
        "Non-Profit Organizations"
    ];

    return (
        <>
            <Head>
                <title>Custom Software Development Cairns | Bespoke Solutions | {BUSINESS_INFO.shortName}</title>
                <meta name="description" content={`Expert custom software development in ${SERVICE_AREAS.primary}. We build tailored business solutions, CRM systems, automation tools, and enterprise software for ${SERVICE_AREAS.region} businesses. Free consultation available.`} />
                <meta name="keywords" content={`custom software cairns, bespoke software development, business software ${SERVICE_AREAS.primary}, crm development, enterprise software cairns, software solutions fnq, custom applications ${CONTACT_INFO.address.state}`} />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href={`${ONLINE_PRESENCE.website.primary}/custom-software-cairns`} />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${ONLINE_PRESENCE.website.primary}/custom-software-cairns`} />
                <meta property="og:title" content={`Custom Software Development ${SERVICE_AREAS.primary} | ${BUSINESS_INFO.shortName}`} />
                <meta property="og:description" content={`Expert custom software development for ${SERVICE_AREAS.primary} businesses. Tailored solutions that streamline operations and drive growth.`} />
                <meta property="og:locale" content="en_AU" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Custom Software Development ${SERVICE_AREAS.primary}`} />
                <meta name="twitter:description" content={`Expert custom software development for ${SERVICE_AREAS.primary} businesses.`} />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Custom Software Development",
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
                            "description": `Professional custom software development services in ${SERVICE_AREAS.primary}. We build bespoke business solutions tailored to your unique requirements.`
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
                                    "name": "Custom Software Development",
                                    "item": `${ONLINE_PRESENCE.website.primary}/custom-software-cairns`
                                }
                            ]
                        })
                    }}
                />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Back Navigation */}
                <div className="border-b border-white/10">
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
                                <Code className="h-4 w-4" />
                                <span>Custom Software Development</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Bespoke Software Solutions for {SERVICE_AREAS.primary} Businesses
                            </h1>

                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Transform your business with custom software designed specifically for your unique needs and workflows
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>Get Free Consultation</span>
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                                <a
                                    href={`tel:${CONTACT_INFO.phone.primary}`}
                                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                                >
                                    <span>Call {CONTACT_INFO.phone.display}</span>
                                </a>
                            </div>

                            <p className="text-sm text-dark-text-secondary">
                                Serving <strong className="text-white">{SERVICE_AREAS.primary}</strong> and <strong className="text-white">{SERVICE_AREAS.region}</strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Why Choose Custom Software?</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Off-the-shelf software can't solve every problem. Our custom solutions are built for your exact requirements.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {features.map((feature, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center mb-6 border border-brand-accent/30">
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

                {/* Development Process */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Development Process</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    A proven methodology that delivers quality software on time and within budget
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {process.map((item, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
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

                {/* Industries Served */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Industries We Serve</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Custom software solutions for businesses across {SERVICE_AREAS.region}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {industries.map((industry, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 text-center">
                                        <CheckCircle className="h-6 w-6 text-brand-accent mx-auto mb-3" />
                                        <p className="text-white font-semibold">{industry}</p>
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
                            <h3 className="text-xl font-bold text-white mb-6">Custom Software Development Across Far North Queensland</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {['Palm Cove', 'Port Douglas', 'Trinity Beach', 'Smithfield', 'Edge Hill', 'Redlynch', 'Gordonvale', 'Kuranda', 'Mareeba', 'Atherton', 'Innisfail', 'Mission Beach'].map((loc) => (
                                    <Link key={loc} href={`/services/custom-software/${loc.toLowerCase().replace(/ /g, '-')}`} className="bg-white/5 text-dark-text-secondary px-4 py-2 rounded-lg text-sm hover:bg-brand-accent/20 hover:text-brand-accent transition-all duration-300 border border-white/10">
                                        {loc}
                                    </Link>
                                ))}
                                <Link href="/services" className="bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-lg text-sm hover:bg-brand-accent/20 transition-all duration-300 border border-brand-accent/30 font-medium">
                                    All 25 locations →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 border-y border-brand-accent/20">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Build Your Custom Solution?
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Let's discuss your project and create software that gives you a competitive advantage
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>Get Free Quote</span>
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                                <Link
                                    href="/#portfolio"
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
                                    <span>Local Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CustomSoftwareCairns;
