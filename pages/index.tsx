import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';

// Import business constants
import {
    BUSINESS_INFO,
    CONTACT_INFO,
    ONLINE_PRESENCE,
    SERVICE_AREAS,
    SERVICES_OFFERED,
    BUSINESS_METRICS,
    SEO_CONSTANTS,
    getFullAddress,
    getServiceAreasString,
    getKeywordsString
} from '../constants/business';

const HomePage: React.FC = () => {
    // Structured data for local business using constants
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": BUSINESS_INFO.name,
        "description": BUSINESS_INFO.description,
        "founder": {
            "@type": "Person",
            "name": BUSINESS_INFO.founder.name
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": CONTACT_INFO.address.city,
            "addressRegion": CONTACT_INFO.address.state,
            "addressCountry": CONTACT_INFO.address.countryCode,
            "postalCode": CONTACT_INFO.address.postcode
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": CONTACT_INFO.coordinates.latitude,
            "longitude": CONTACT_INFO.coordinates.longitude
        },
        "url": ONLINE_PRESENCE.website.primary,
        "telephone": CONTACT_INFO.phone.primary,
        "email": CONTACT_INFO.email.primary,
        "priceRange": "$$",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "currenciesAccepted": "AUD",
        "areaServed": SERVICE_AREAS.areas.map(area => ({
            "@type": "City",
            "name": area
        })),
        "serviceType": SERVICES_OFFERED.primary,
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "HansenDev Services",
            "itemListElement": SERVICES_OFFERED.primary.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": service,
                    "description": `Professional ${service.toLowerCase()} services for Cairns businesses`
                }
            }))
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": BUSINESS_METRICS.stats.averageRating,
            "ratingCount": "25",
            "bestRating": "5"
        },
        "sameAs": [
            ONLINE_PRESENCE.social.linkedin,
            ONLINE_PRESENCE.social.github
        ]
    };

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Web Development & AI Integration Cairns | {BUSINESS_INFO.name}</title>
                <meta name="title" content={`Web Development & AI Integration Cairns | ${BUSINESS_INFO.name}`} />
                <meta name="description" content={`Leading web development and AI integration services in ${SERVICE_AREAS.primary}, ${CONTACT_INFO.address.state}. ${BUSINESS_INFO.shortName} helps local businesses grow with custom websites, intelligent automation, and cutting-edge software solutions. Free consultation available.`} />
                <meta name="keywords" content={getKeywordsString()} />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="author" content={`${BUSINESS_INFO.founder.name}, ${BUSINESS_INFO.name}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Geographic Meta Tags */}
                <meta name="geo.region" content={SERVICE_AREAS.geoTags.region} />
                <meta name="geo.placename" content={SERVICE_AREAS.geoTags.placename} />
                <meta name="geo.position" content={`${CONTACT_INFO.coordinates.latitude};${CONTACT_INFO.coordinates.longitude}`} />
                <meta name="ICBM" content={SERVICE_AREAS.geoTags.icbm} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`Web Development & AI Integration Cairns | ${BUSINESS_INFO.name}`} />
                <meta property="og:description" content={`Leading web development and AI integration services in ${SERVICE_AREAS.primary}, ${CONTACT_INFO.address.state}. Custom websites, intelligent automation, and software solutions for local businesses.`} />
                <meta property="og:image" content="/assets/hansendev-cairns-web-development-og.jpg" />
                <meta property="og:url" content={ONLINE_PRESENCE.website.primary} />
                <meta property="og:site_name" content={BUSINESS_INFO.name} />
                <meta property="og:locale" content="en_AU" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={`Web Development & AI Integration Cairns | ${BUSINESS_INFO.name}`} />
                <meta property="twitter:description" content={`Leading web development and AI integration services in ${SERVICE_AREAS.primary}, ${CONTACT_INFO.address.state}. Custom websites, intelligent automation, and software solutions for local businesses.`} />
                <meta property="twitter:image" content="/assets/hansendev-cairns-web-development-twitter.jpg" />

                {/* Additional SEO Meta Tags */}
                <meta name="theme-color" content="#6366f1" />
                <meta name="msapplication-TileColor" content="#6366f1" />
                <link rel="canonical" href={ONLINE_PRESENCE.website.primary} />

                {/* Local Business Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData)
                    }}
                />

                {/* Additional Structured Data for Professional Services */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            "name": BUSINESS_INFO.name,
                            "image": "/assets/hansendev-cairns-team.jpg",
                            "description": BUSINESS_INFO.description,
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": CONTACT_INFO.address.street,
                                "addressLocality": CONTACT_INFO.address.city,
                                "addressRegion": CONTACT_INFO.address.stateCode,
                                "postalCode": CONTACT_INFO.address.postcode,
                                "addressCountry": CONTACT_INFO.address.countryCode
                            },
                            "serviceArea": {
                                "@type": "GeoCircle",
                                "geoMidpoint": {
                                    "@type": "GeoCoordinates",
                                    "latitude": CONTACT_INFO.coordinates.latitude,
                                    "longitude": CONTACT_INFO.coordinates.longitude
                                },
                                "geoRadius": "50000"
                            },
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Web Development & AI Services",
                                "itemListElement": Object.values(SERVICES_OFFERED.categories).map(category => ({
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": category.name,
                                        "category": category.name,
                                        "description": `Professional ${category.name.toLowerCase()} for ${SERVICE_AREAS.primary} businesses`,
                                        "provider": {
                                            "@type": "Organization",
                                            "name": BUSINESS_INFO.name
                                        }
                                    }
                                }))
                            }
                        })
                    }}
                />

                {/* FAQ Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": `Do you provide web development services in ${SERVICE_AREAS.primary}?`,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": `Yes, ${BUSINESS_INFO.shortName} provides comprehensive web development services throughout ${SERVICE_AREAS.primary} and ${SERVICE_AREAS.region}. We specialize in custom websites, web applications, and e-commerce solutions for local businesses.`
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What AI integration services do you offer?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": `We offer AI chatbots, machine learning integration, business process automation, predictive analytics, and custom AI solutions tailored to your business needs in ${SERVICE_AREAS.primary} and throughout ${CONTACT_INFO.address.state}.`
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": `How much does a custom website cost in ${SERVICE_AREAS.primary}?`,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": `Website costs vary based on complexity and requirements. We offer free consultations to provide accurate quotes for ${SERVICE_AREAS.primary} businesses. Contact us for a personalized estimate based on your specific needs.`
                                    }
                                }
                            ]
                        })
                    }}
                />

                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PWPRX6WL');`
                    }}
                />
            </Head>

            {/* Google Tag Manager (noscript) */}
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWPRX6WL"
                    height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
            </noscript>

            <Hero />
            <Services />
            <Portfolio />
            <About />
            <Contact />

            {/* Privacy Policy Link Section */}
            <div className="py-8 border-t border-white/10">
                <div className="container-custom text-center">
                    <p className="text-dark-text-secondary text-sm">
                        <a
                            href="/projects/quotemate-privacy"
                            className="text-brand-accent hover:text-brand-primary transition-colors underline"
                        >
                            QuoteMate Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default HomePage;