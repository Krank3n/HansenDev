import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    Bot,
    CheckCircle,
    ArrowRight,
    Zap,
    Brain,
    Users,
    TrendingUp,
    Clock,
    Target,
    MessageSquare,
    Settings
} from 'lucide-react';
import { BUSINESS_INFO, CONTACT_INFO, SERVICE_AREAS, PRICING_INFO, ONLINE_PRESENCE } from '../constants/business';

const AIIntegrationCairns: React.FC = () => {
    const features = [
        {
            icon: <MessageSquare className="h-6 w-6 text-brand-accent" />,
            title: "AI Chatbots",
            description: "24/7 customer support with intelligent chatbots that understand context and intent"
        },
        {
            icon: <Zap className="h-6 w-6 text-brand-accent" />,
            title: "Business Automation",
            description: "Automate repetitive tasks and workflows to free up your team's valuable time"
        },
        {
            icon: <Brain className="h-6 w-6 text-brand-accent" />,
            title: "Machine Learning",
            description: "Predictive analytics and data-driven insights to improve decision making"
        },
        {
            icon: <Target className="h-6 w-6 text-brand-accent" />,
            title: "Process Optimization",
            description: "Identify inefficiencies and implement AI solutions that boost productivity"
        },
        {
            icon: <Users className="h-6 w-6 text-brand-accent" />,
            title: "Customer Experience",
            description: "Personalized customer interactions powered by artificial intelligence"
        },
        {
            icon: <TrendingUp className="h-6 w-6 text-brand-accent" />,
            title: "ROI Focused",
            description: "Measurable results with solutions that deliver real business value"
        }
    ];

    const useCases = [
        {
            step: "1",
            title: "Customer Support",
            description: "AI chatbots that handle common inquiries and route complex issues to your team"
        },
        {
            step: "2",
            title: "Lead Qualification",
            description: "Automatically qualify and score leads based on behavior and engagement"
        },
        {
            step: "3",
            title: "Data Analysis",
            description: "Extract insights from large datasets to identify trends and opportunities"
        },
        {
            step: "4",
            title: "Scheduling & Booking",
            description: "Automated appointment scheduling that integrates with your calendar"
        },
        {
            step: "5",
            title: "Content Generation",
            description: "AI-assisted content creation for marketing and communications"
        },
        {
            step: "6",
            title: "Inventory Management",
            description: "Predictive inventory optimization based on sales patterns and trends"
        }
    ];

    const industries = [
        "Tourism & Hospitality",
        "Retail & E-commerce",
        "Healthcare & Medical",
        "Real Estate",
        "Professional Services",
        "Restaurants & Cafes",
        "Education & Training",
        "Financial Services"
    ];

    return (
        <>
            <Head>
                <title>AI Integration Cairns | Chatbots & Business Automation | {BUSINESS_INFO.shortName}</title>
                <meta name="description" content={`Expert AI integration in ${SERVICE_AREAS.primary}. AI chatbots, business automation, machine learning, and process optimization for ${SERVICE_AREAS.region} businesses. Transform your operations with AI.`} />
                <meta name="keywords" content={`AI integration cairns, chatbots cairns, business automation ${SERVICE_AREAS.primary}, machine learning cairns, AI chatbot development, process automation fnq, artificial intelligence ${CONTACT_INFO.address.state}`} />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href={`${ONLINE_PRESENCE.website.primary}/ai-integration-cairns`} />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${ONLINE_PRESENCE.website.primary}/ai-integration-cairns`} />
                <meta property="og:title" content={`AI Integration & Chatbots ${SERVICE_AREAS.primary} | ${BUSINESS_INFO.shortName}`} />
                <meta property="og:description" content={`Expert AI integration for ${SERVICE_AREAS.primary} businesses. Chatbots, automation, and machine learning solutions.`} />
                <meta property="og:locale" content="en_AU" />
                <meta property="og:image" content={`${ONLINE_PRESENCE.website.primary}/assets/HansenDevOg-1200x630.jpg`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`AI Integration ${SERVICE_AREAS.primary}`} />
                <meta name="twitter:description" content={`Expert AI integration for ${SERVICE_AREAS.primary} businesses.`} />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "AI Integration & Automation",
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
                            "description": `Professional AI integration services in ${SERVICE_AREAS.primary}. Chatbots, business automation, and machine learning solutions.`
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
                                    "name": "AI Integration",
                                    "item": `${ONLINE_PRESENCE.website.primary}/ai-integration-cairns`
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
                                <Bot className="h-4 w-4" />
                                <span>AI Integration & Automation</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                AI Chatbots & Business Automation for {SERVICE_AREAS.primary}
                            </h1>

                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Transform your business with intelligent automation and AI-powered solutions
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>Get Free AI Consultation</span>
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
                                Serving <strong className="text-white">{SERVICE_AREAS.primary}</strong> and <strong className="text-white">{SERVICE_AREAS.region}</strong> • <strong className="text-white">{PRICING_INFO.aiIntegration.starting}</strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">AI Integration Services</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Cutting-edge artificial intelligence solutions tailored for your business needs
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

                {/* Use Cases */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">AI Use Cases</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Practical AI applications that deliver measurable results for your business
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {useCases.map((item, index) => (
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

                {/* Industries Served */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Industries We Serve</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    AI solutions for businesses across {SERVICE_AREAS.region}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {industries.map((industry, index) => (
                                    <div key={index} className="glass-card p-6 transition-all duration-300 text-center">
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
                            <h3 className="text-xl font-bold text-white mb-6">AI Integration Across Far North Queensland</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {['Palm Cove', 'Port Douglas', 'Trinity Beach', 'Smithfield', 'Edge Hill', 'Redlynch', 'Gordonvale', 'Kuranda', 'Mareeba', 'Atherton', 'Innisfail', 'Mission Beach'].map((loc) => (
                                    <Link key={loc} href={`/services/ai-integration/${loc.toLowerCase().replace(/ /g, '-')}`} className="bg-white/5 text-dark-text-secondary px-4 py-2 rounded-lg text-sm hover:bg-brand-accent/20 hover:text-brand-accent transition-all duration-300">
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
                                Ready to Integrate AI Into Your Business?
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Let's discuss how AI and automation can transform your operations and boost efficiency
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
                                    <span>Custom Solutions</span>
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

export default AIIntegrationCairns;
