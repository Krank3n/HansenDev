import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    Smartphone,
    CheckCircle,
    ArrowRight,
    Zap,
    Shield,
    Users,
    TrendingUp,
    Layers,
    Code,
    RefreshCw,
    Settings
} from 'lucide-react';
import { BUSINESS_INFO, CONTACT_INFO, SERVICE_AREAS, PRICING_INFO, ONLINE_PRESENCE } from '../constants/business';

const MobileAppDevelopmentCairns: React.FC = () => {
    const features = [
        {
            icon: <Layers className="h-6 w-6 text-brand-accent" />,
            title: "Cross-Platform",
            description: "Build once, deploy everywhere - iOS and Android from a single codebase"
        },
        {
            icon: <Users className="h-6 w-6 text-brand-accent" />,
            title: "Native Experience",
            description: "Smooth, responsive apps that feel native on every platform"
        },
        {
            icon: <Zap className="h-6 w-6 text-brand-accent" />,
            title: "Fast Performance",
            description: "Optimized for speed with minimal load times and smooth animations"
        },
        {
            icon: <Shield className="h-6 w-6 text-brand-accent" />,
            title: "Secure & Private",
            description: "Built-in security features to protect user data and privacy"
        },
        {
            icon: <RefreshCw className="h-6 w-6 text-brand-accent" />,
            title: "Offline Capable",
            description: "Apps that work seamlessly even without internet connection"
        },
        {
            icon: <TrendingUp className="h-6 w-6 text-brand-accent" />,
            title: "Scalable",
            description: "Architecture designed to grow with your user base and features"
        }
    ];

    const appTypes = [
        {
            step: "1",
            title: "Business Apps",
            description: "Internal tools and employee apps to streamline operations"
        },
        {
            step: "2",
            title: "E-commerce Apps",
            description: "Mobile shopping experiences with payment integration"
        },
        {
            step: "3",
            title: "Social & Community",
            description: "Connect users with messaging, feeds, and social features"
        },
        {
            step: "4",
            title: "Booking & Scheduling",
            description: "Appointment booking and reservation systems for service businesses"
        },
        {
            step: "5",
            title: "Entertainment & Media",
            description: "Content streaming, gaming, and multimedia apps"
        },
        {
            step: "6",
            title: "Education & Training",
            description: "Learning platforms and educational content delivery"
        }
    ];

    const platforms = [
        "iOS (iPhone & iPad)",
        "Android",
        "React Native",
        "Progressive Web Apps",
        "Flutter",
        "Native Development",
        "App Store Publishing",
        "Backend Integration"
    ];

    return (
        <>
            <Head>
                <title>Mobile App Development Cairns | iOS & Android Apps | {BUSINESS_INFO.shortName}</title>
                <meta name="description" content={`Professional mobile app development in ${SERVICE_AREAS.primary}. iOS and Android apps, React Native, cross-platform development for ${SERVICE_AREAS.region} businesses. Build your app with local experts.`} />
                <meta name="keywords" content={`mobile app development cairns, app developer ${SERVICE_AREAS.primary}, iOS app cairns, android app development, react native cairns, cross platform apps fnq, mobile apps ${CONTACT_INFO.address.state}`} />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href={`${ONLINE_PRESENCE.website.primary}/mobile-app-development-cairns`} />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${ONLINE_PRESENCE.website.primary}/mobile-app-development-cairns`} />
                <meta property="og:title" content={`Mobile App Development ${SERVICE_AREAS.primary} | ${BUSINESS_INFO.shortName}`} />
                <meta property="og:description" content={`Professional mobile app development for ${SERVICE_AREAS.primary} businesses. iOS and Android apps built by local experts.`} />
                <meta property="og:locale" content="en_AU" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Mobile App Development ${SERVICE_AREAS.primary}`} />
                <meta name="twitter:description" content={`Professional mobile app development for ${SERVICE_AREAS.primary} businesses.`} />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Mobile App Development",
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
                            "description": `Professional mobile app development services in ${SERVICE_AREAS.primary}. iOS and Android apps with React Native and cross-platform development.`
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
                                    "name": "Mobile App Development",
                                    "item": `${ONLINE_PRESENCE.website.primary}/mobile-app-development-cairns`
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
                                <Smartphone className="h-4 w-4" />
                                <span>Mobile App Development</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Mobile App Development for {SERVICE_AREAS.primary} Businesses
                            </h1>

                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Custom iOS and Android apps that engage users and drive business growth
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>Get Free App Quote</span>
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
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Mobile App Features</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Professional mobile apps built with modern technologies and best practices
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

                {/* App Types */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Types of Apps We Build</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    From simple utilities to complex enterprise applications
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {appTypes.map((item, index) => (
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

                {/* Platforms & Technologies */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Platforms & Technologies</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    We develop for all major mobile platforms and app stores
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {platforms.map((platform, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 text-center">
                                        <Code className="h-6 w-6 text-brand-accent mx-auto mb-3" />
                                        <p className="text-white font-semibold">{platform}</p>
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
                            <h3 className="text-xl font-bold text-white mb-6">Mobile App Development Across Far North Queensland</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {['Palm Cove', 'Port Douglas', 'Trinity Beach', 'Smithfield', 'Edge Hill', 'Redlynch', 'Gordonvale', 'Kuranda', 'Mareeba', 'Atherton', 'Innisfail', 'Mission Beach'].map((loc) => (
                                    <Link key={loc} href={`/services/mobile-app-development/${loc.toLowerCase().replace(/ /g, '-')}`} className="bg-white/5 text-dark-text-secondary px-4 py-2 rounded-lg text-sm hover:bg-brand-accent/20 hover:text-brand-accent transition-all duration-300 border border-white/10">
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
                                Ready to Build Your Mobile App?
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Let's create a mobile app that delights your users and grows your business
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>Start Your App Project</span>
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
                                    <span>App Store Support</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Ongoing Maintenance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default MobileAppDevelopmentCairns;
