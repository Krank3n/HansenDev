import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    Settings,
    CheckCircle,
    ArrowRight,
    Zap,
    Clock,
    RefreshCw,
    Mail,
    CalendarCheck,
    FileText,
    Link2,
    BarChart3
} from 'lucide-react';
import { BUSINESS_INFO, CONTACT_INFO, SERVICE_AREAS, PRICING_INFO, ONLINE_PRESENCE } from '../constants/business';

const AutomationServicesCairns: React.FC = () => {
    const features = [
        {
            icon: <RefreshCw className="h-6 w-6 text-brand-accent" />,
            title: "Workflow Automation",
            description: "Automate repetitive business processes so your team can focus on high-value work"
        },
        {
            icon: <Mail className="h-6 w-6 text-brand-accent" />,
            title: "CRM & Email Automation",
            description: "Automated follow-ups, lead nurturing, and customer communications that run on autopilot"
        },
        {
            icon: <CalendarCheck className="h-6 w-6 text-brand-accent" />,
            title: "Booking & Scheduling",
            description: "Online booking systems with automated confirmations, reminders, and calendar sync"
        },
        {
            icon: <FileText className="h-6 w-6 text-brand-accent" />,
            title: "Invoice & Quoting",
            description: "Automated quoting, invoicing, and payment tracking to speed up your cash flow"
        },
        {
            icon: <Link2 className="h-6 w-6 text-brand-accent" />,
            title: "Integration & APIs",
            description: "Connect your existing tools and platforms so data flows seamlessly between systems"
        },
        {
            icon: <BarChart3 className="h-6 w-6 text-brand-accent" />,
            title: "Reporting & Dashboards",
            description: "Automated reports and live dashboards that give you real-time business insights"
        }
    ];

    const useCases = [
        {
            step: "1",
            title: "Trades & Services",
            description: "Automated job quoting, scheduling, invoicing, and follow-up for tradies and service businesses"
        },
        {
            step: "2",
            title: "Tourism Operators",
            description: "Online booking with automated confirmations, reminders, review requests, and seasonal pricing"
        },
        {
            step: "3",
            title: "Retail & E-commerce",
            description: "Inventory management, order processing, shipping notifications, and customer re-engagement"
        },
        {
            step: "4",
            title: "Professional Services",
            description: "Client onboarding workflows, appointment reminders, document generation, and billing"
        },
        {
            step: "5",
            title: "Restaurants & Cafes",
            description: "Reservation systems, order management, supplier ordering, and loyalty program automation"
        },
        {
            step: "6",
            title: "Healthcare Practices",
            description: "Patient appointment reminders, intake forms, follow-up scheduling, and compliance tracking"
        }
    ];

    const industries = [
        "Trades & Services",
        "Tourism & Hospitality",
        "Retail & E-commerce",
        "Professional Services",
        "Healthcare & Medical",
        "Restaurants & Cafes",
        "Real Estate",
        "Non-Profits"
    ];

    return (
        <>
            <Head>
                <title>Automation Services Cairns | Workflow & Business Automation | {BUSINESS_INFO.shortName}</title>
                <meta name="description" content={`Business automation services in ${SERVICE_AREAS.primary}. Workflow automation, CRM integration, booking systems, and invoice automation for ${SERVICE_AREAS.region} businesses. Stop doing admin manually.`} />
                <meta name="keywords" content={`automation services cairns, business automation ${SERVICE_AREAS.primary}, workflow automation cairns, CRM automation fnq, booking system cairns, invoice automation ${CONTACT_INFO.address.state}, process automation cairns`} />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href={`${ONLINE_PRESENCE.website.primary}/automation-services-cairns`} />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${ONLINE_PRESENCE.website.primary}/automation-services-cairns`} />
                <meta property="og:title" content={`Automation Services ${SERVICE_AREAS.primary} | ${BUSINESS_INFO.shortName}`} />
                <meta property="og:description" content={`Business automation for ${SERVICE_AREAS.primary} businesses. Workflows, bookings, invoicing, and CRM — all on autopilot.`} />
                <meta property="og:locale" content="en_AU" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Automation Services ${SERVICE_AREAS.primary}`} />
                <meta name="twitter:description" content={`Business automation for ${SERVICE_AREAS.primary} businesses.`} />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Business Automation Services",
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
                            "description": `Professional business automation services in ${SERVICE_AREAS.primary}. Workflow automation, CRM integration, booking systems, and more.`
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
                                    "name": "Automation Services",
                                    "item": `${ONLINE_PRESENCE.website.primary}/automation-services-cairns`
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
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-6">
                                <Settings className="h-4 w-4" />
                                <span>Automation Services</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Business Automation for {SERVICE_AREAS.primary}
                            </h1>

                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Stop doing manually what your systems should handle for you
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>Get Free Automation Audit</span>
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
                                Serving <strong className="text-white">{SERVICE_AREAS.primary}</strong> and <strong className="text-white">{SERVICE_AREAS.region}</strong> &bull; <strong className="text-white">{PRICING_INFO.automation.starting}</strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Problem */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Your Team Deserves Better Than Busywork</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto leading-relaxed">
                                    If you&apos;re still manually sending follow-up emails, copying data between spreadsheets, or chasing invoices — there&apos;s a better way.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                                    <Clock className="h-10 w-10 text-brand-accent mx-auto mb-4" />
                                    <div className="text-3xl font-bold text-white mb-2">10-20 hrs</div>
                                    <p className="text-dark-text-secondary">Average weekly hours lost to manual admin tasks</p>
                                </div>
                                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                                    <Zap className="h-10 w-10 text-brand-accent mx-auto mb-4" />
                                    <div className="text-3xl font-bold text-white mb-2">80%</div>
                                    <p className="text-dark-text-secondary">Of repetitive tasks can be fully automated</p>
                                </div>
                                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                                    <RefreshCw className="h-10 w-10 text-brand-accent mx-auto mb-4" />
                                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                                    <p className="text-dark-text-secondary">Your automations work around the clock, even when you don&apos;t</p>
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
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">What We Automate</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Practical automation solutions that save real time and money for {SERVICE_AREAS.primary} businesses
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

                {/* Use Cases by Industry */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Automation by Industry</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Tailored automation solutions for the businesses that power {SERVICE_AREAS.region}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {useCases.map((item, index) => (
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
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Industries We Automate</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Automation solutions for businesses across {SERVICE_AREAS.region}
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

                {/* CTA Section */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 border-y border-brand-accent/20">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Automate Your Business?
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Get a free automation audit and find out how much time and money you could save
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>Get Free Automation Audit</span>
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
                                    <span>Free Automation Audit</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Custom Built Solutions</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Local {SERVICE_AREAS.primary} Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AutomationServicesCairns;
