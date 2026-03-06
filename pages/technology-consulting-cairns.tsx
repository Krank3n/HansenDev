import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    Lightbulb,
    CheckCircle,
    ArrowRight,
    TrendingUp,
    Target,
    Users,
    Shield,
    Cloud,
    Database,
    Zap,
    Settings
} from 'lucide-react';
import { BUSINESS_INFO, CONTACT_INFO, SERVICE_AREAS, PRICING_INFO, ONLINE_PRESENCE } from '../constants/business';

const TechnologyConsultingCairns: React.FC = () => {
    const services = [
        {
            icon: <Target className="h-6 w-6 text-brand-accent" />,
            title: "IT Strategy & Planning",
            description: "Develop comprehensive technology roadmaps aligned with your business goals"
        },
        {
            icon: <Cloud className="h-6 w-6 text-brand-accent" />,
            title: "Cloud Migration",
            description: "Seamlessly transition to cloud platforms for improved scalability and cost savings"
        },
        {
            icon: <Shield className="h-6 w-6 text-brand-accent" />,
            title: "Cybersecurity Assessment",
            description: "Identify vulnerabilities and implement robust security strategies"
        },
        {
            icon: <Database className="h-6 w-6 text-brand-accent" />,
            title: "System Integration",
            description: "Connect disparate systems for streamlined operations and data flow"
        },
        {
            icon: <TrendingUp className="h-6 w-6 text-brand-accent" />,
            title: "Digital Transformation",
            description: "Guide your business through modern technology adoption and change management"
        },
        {
            icon: <Settings className="h-6 w-6 text-brand-accent" />,
            title: "Process Optimization",
            description: "Identify inefficiencies and implement technology solutions that boost productivity"
        }
    ];

    const benefits = [
        "Reduce IT costs by 30-50% through strategic planning",
        "Avoid costly technology mistakes and vendor lock-in",
        "Improve operational efficiency with the right tools",
        "Stay competitive with modern technology adoption",
        "Access expert knowledge without full-time hires",
        "Make data-driven technology investment decisions"
    ];

    const approach = [
        {
            step: "1",
            title: "Assessment",
            description: "Comprehensive review of your current technology landscape and business objectives"
        },
        {
            step: "2",
            title: "Strategy",
            description: "Develop tailored recommendations and implementation roadmap"
        },
        {
            step: "3",
            title: "Implementation",
            description: "Guide execution with vendor management and project oversight"
        },
        {
            step: "4",
            title: "Optimization",
            description: "Ongoing support to ensure maximum ROI from technology investments"
        }
    ];

    return (
        <>
            <Head>
                <title>Technology Consulting Cairns | IT Strategy & Digital Transformation | {BUSINESS_INFO.shortName}</title>
                <meta name="description" content={`Expert technology consulting in ${SERVICE_AREAS.primary}. IT strategy, digital transformation, cloud migration, and cybersecurity for ${SERVICE_AREAS.region} businesses. Get strategic guidance from local experts.`} />
                <meta name="keywords" content={`technology consulting cairns, IT consulting ${SERVICE_AREAS.primary}, digital transformation cairns, IT strategy fnq, technology advisor ${CONTACT_INFO.address.state}, cloud consulting cairns, cybersecurity consulting`} />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href={`${ONLINE_PRESENCE.website.primary}/technology-consulting-cairns`} />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${ONLINE_PRESENCE.website.primary}/technology-consulting-cairns`} />
                <meta property="og:title" content={`Technology Consulting ${SERVICE_AREAS.primary} | ${BUSINESS_INFO.shortName}`} />
                <meta property="og:description" content={`Expert technology consulting for ${SERVICE_AREAS.primary} businesses. Strategic IT guidance and digital transformation.`} />
                <meta property="og:locale" content="en_AU" />
                <meta property="og:image" content={`${ONLINE_PRESENCE.website.primary}/assets/HansenDevOg-1200x630.jpg`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Technology Consulting",
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
                            "description": `Professional technology consulting services in ${SERVICE_AREAS.primary}. IT strategy, digital transformation, and strategic technology guidance.`
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
                                    "name": "Technology Consulting",
                                    "item": `${ONLINE_PRESENCE.website.primary}/technology-consulting-cairns`
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
                                <Lightbulb className="h-4 w-4" />
                                <span>Technology Consulting</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Strategic Technology Consulting for {SERVICE_AREAS.primary} Businesses
                            </h1>

                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Make smarter technology decisions with expert guidance from local {SERVICE_AREAS.region} consultants
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>Book Consultation</span>
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
                                <strong className="text-white">{PRICING_INFO.consulting.starting}</strong> • Flexible engagement models
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Consulting Services</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Comprehensive technology guidance to help your business thrive in the digital age
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {services.map((service, index) => (
                                    <div key={index} className="glass-card p-8 transition-all duration-500">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center mb-6">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                        <p className="text-dark-text-secondary leading-relaxed">{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Benefits of Technology Consulting</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Strategic guidance that delivers measurable business value
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="glass-card p-6 transition-all duration-300 flex items-start gap-4">
                                        <CheckCircle className="h-6 w-6 text-brand-accent flex-shrink-0 mt-1" />
                                        <p className="text-white text-lg">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Approach */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Consulting Approach</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    A proven methodology for delivering strategic technology guidance
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {approach.map((item, index) => (
                                    <div key={index} className="glass-card p-6 transition-all duration-500">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                        <p className="text-dark-text-secondary leading-relaxed text-sm">{item.description}</p>
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
                            <h3 className="text-xl font-bold text-white mb-6">Technology Consulting Across Far North Queensland</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {['Palm Cove', 'Port Douglas', 'Trinity Beach', 'Smithfield', 'Edge Hill', 'Redlynch', 'Gordonvale', 'Kuranda', 'Mareeba', 'Atherton', 'Innisfail', 'Mission Beach'].map((loc) => (
                                    <Link key={loc} href={`/services/technology-consulting/${loc.toLowerCase().replace(/ /g, '-')}`} className="bg-white/5 text-dark-text-secondary px-4 py-2 rounded-lg text-sm hover:bg-brand-accent/20 hover:text-brand-accent transition-all duration-300">
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
                                Ready to Make Smarter Technology Decisions?
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Get expert guidance from local {SERVICE_AREAS.primary} consultants who understand your market
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>Schedule Free Consultation</span>
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                                <Link
                                    href="/#services"
                                    className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                                >
                                    <span>View All Services</span>
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark-text-secondary">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>No Obligation</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Local Expertise</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Proven Results</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TechnologyConsultingCairns;
