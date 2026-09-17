// _document.js
import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
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
        "@id": "https://hansendev.com.au/#organization",
        "founder": {
            "@type": "Person",
            "@id": "https://hansendev.com.au/about/thomas-hansen#person",
            "name": "Thomas Andrew Hansen",
            "url": "https://hansendev.com.au/about/thomas-hansen"
        },
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
                <link rel="icon" href="/favicon.ico" sizes="32x32" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <meta charSet="UTF-8" />

                {/*
                  Nothing page-scoped belongs in here. _document's Head is separate from
                  next/head and does not dedupe against it, so a canonical, og:url, og:image
                  or robots tag placed here is emitted a second time on every page. Defaults
                  that pages may override live in _app.tsx; canonicals are per-page only.
                */}

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
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}