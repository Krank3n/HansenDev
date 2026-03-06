// _document.js
import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    // It's best practice to get your site's base URL from an environment variable
    // For development, you can fallback to localhost
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const ogImageUrl = `${siteUrl}/assets/HansenDevOg-1200x630.jpg`;

    // Organization Schema for LLM recognition
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "HansenDev PTY LTD",
        "alternateName": "HansenDev",
        "url": "https://hansendev.com.au",
        "logo": "https://hansendev.com.au/assets/hansendev-logo.png",
        "description": "Leading web development and AI integration services in Cairns, Queensland. Custom websites, mobile apps, and intelligent automation solutions.",
        "foundingDate": "2024",
        "founders": [{
            "@type": "Person",
            "name": "Thomas Andrew Hansen"
        }],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cairns",
            "addressRegion": "QLD",
            "addressCountry": "AU"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "availableLanguage": ["English"]
        },
        "sameAs": [
            "https://github.com/Krank3n",
            "https://www.linkedin.com/in/thomas-andrew-hansen"
        ]
    };

    // WebSite Schema with search capability
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "HansenDev",
        "url": "https://hansendev.com.au",
        "description": "Professional web development and AI integration services in Cairns, Queensland",
        "publisher": {
            "@type": "Organization",
            "name": "HansenDev PTY LTD"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://hansendev.com.au/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <Html lang="en" className="dark">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="author" content="HansenDev PTY LTD" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:image" content={ogImageUrl} />
                {/* You might also want to add specific dimensions for the image */}
                <meta property="og:image:width" content="1200" /> {/* Example width */}
                <meta property="og:image:height" content="630" /> {/* Example height */}
                <meta property="og:locale" content="en_AU" />
                <meta property="og:site_name" content="HansenDev PTY LTD" />

                <link rel="canonical" href={siteUrl} />

                {/* Global Organization Schema for LLM Recognition */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema)
                    }}
                />

                {/* WebSite Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteSchema)
                    }}
                />

            </Head>
            <body className="bg-dark-bg text-dark-text antialiased">
            {/* Google Tag Manager (noscript) */}
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWPRX6WL"
                    height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
            </noscript>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}