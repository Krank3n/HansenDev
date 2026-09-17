import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowRight,
    ChevronRight,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Phone,
} from 'lucide-react';
import { AUTHOR, BUSINESS_INFO, CONTACT_INFO, ONLINE_PRESENCE, SERVICE_AREAS } from '../../constants/business';
import { getAllArticles, getProductName, ArticlePreview } from '../../lib/articles';

const PROFILES = { github: AUTHOR.github, linkedin: AUTHOR.linkedin };

const PRODUCTS = [
    { name: 'QuoteMate', href: '/projects/quotemate', blurb: 'Quoting and invoicing built for Australian tradies, with live Bunnings pricing and offline-first job sites.' },
    { name: 'Call Katie', href: '/projects/callkatie', blurb: 'An AI receptionist that answers the phone for service businesses after hours.' },
    { name: 'WebFaceLift', href: '/projects/webfacelift', blurb: 'Generates a redesign concept for an existing website in about thirty seconds.' },
    { name: 'ChatSpark', href: '/projects/chatspark', blurb: 'Conversation practice for people working on social confidence.' },
    { name: 'ShredIndex', href: '/projects/shredindex', blurb: 'Snow conditions and resort data for skiers and snowboarders worldwide.' },
];

interface AuthorPageProps {
    articles: ArticlePreview[];
    articleCount: number;
}

const AuthorPage: React.FC<AuthorPageProps> = ({ articles, articleCount }) => {
    const canonicalUrl = `${ONLINE_PRESENCE.website.primary}/about/thomas-hansen`;
    const pageTitle = `Thomas Hansen — Founder & Lead Developer | ${BUSINESS_INFO.shortName}`;
    const pageDescription = `Thomas Hansen founded HansenDev in Cairns after engineering trading software for nabtrade at NAB and enterprise systems at DXC Technology. He writes every article on this site.`;
    const photoUrl = `${ONLINE_PRESENCE.website.primary}/assets/thomas-hansen-founder.webp`;

    const personStructuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": AUTHOR.id,
        "name": AUTHOR.legalName,
        "alternateName": BUSINESS_INFO.founder.name,
        "url": canonicalUrl,
        "image": {
            "@type": "ImageObject",
            "url": photoUrl,
            "width": 669,
            "height": 1200,
        },
        "jobTitle": BUSINESS_INFO.founder.title,
        "description": pageDescription,
        "email": `mailto:${CONTACT_INFO.email}`,
        "telephone": CONTACT_INFO.phone.primary,
        "worksFor": {
            "@type": "Organization",
            "@id": `${ONLINE_PRESENCE.website.primary}/#organization`,
            "name": BUSINESS_INFO.name,
            "url": ONLINE_PRESENCE.website.primary,
        },
        "alumniOf": [
            { "@type": "Organization", "name": "DXC Technology" },
            { "@type": "Organization", "name": "National Australia Bank (nabtrade)" },
        ],
        "knowsAbout": [
            "Web development",
            "AI integration",
            "Custom software development",
            "Mobile app development",
            "Financial trading systems",
            "Small business automation",
            "Far North Queensland business technology",
        ],
        "homeLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": CONTACT_INFO.address.city,
                "addressRegion": CONTACT_INFO.address.state,
                "addressCountry": CONTACT_INFO.address.countryCode,
            },
        },
        "sameAs": [PROFILES.linkedin, PROFILES.github],
    };

    const profilePageStructuredData = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${canonicalUrl}#profilepage`,
        "url": canonicalUrl,
        "name": pageTitle,
        "mainEntity": { "@id": AUTHOR.id },
        "inLanguage": "en-AU",
    };

    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": ONLINE_PRESENCE.website.primary },
            { "@type": "ListItem", "position": 2, "name": "About", "item": `${ONLINE_PRESENCE.website.primary}/about/thomas-hansen` },
        ],
    };

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={canonicalUrl} />

                <meta httpEquiv="content-language" content="en-AU" />
                <meta name="geo.region" content="AU-QLD" />
                <meta name="geo.placename" content={CONTACT_INFO.address.city} />

                <meta property="og:type" content="profile" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={photoUrl} />
                <meta property="profile:first_name" content="Thomas" />
                <meta property="profile:last_name" content="Hansen" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={photoUrl} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageStructuredData) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                <nav aria-label="Breadcrumb">
                    <div className="container-custom py-4">
                        <ol className="flex items-center gap-2 text-sm text-dark-text-secondary">
                            <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li className="text-white" aria-current="page">Thomas Hansen</li>
                        </ol>
                    </div>
                </nav>

                {/* Identity */}
                <section className="py-12 lg:py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(20,184,166,0.1),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
                            <div className="lg:col-span-2">
                                <div className="relative aspect-[669/800] rounded-3xl overflow-hidden">
                                    <Image
                                        src="/assets/thomas-hansen-founder.webp"
                                        alt="Thomas Hansen, founder and lead developer of HansenDev, in Kamerunga, Cairns"
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="lg:col-span-3">
                                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 leading-tight">
                                    Thomas Hansen
                                </h1>
                                <p className="text-xl text-brand-accent font-medium mb-6">
                                    {BUSINESS_INFO.founder.title}, {BUSINESS_INFO.name}
                                </p>

                                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-dark-text-secondary mb-8">
                                    <span className="inline-flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-brand-accent" />
                                        {CONTACT_INFO.address.suburb}, {CONTACT_INFO.address.city} {CONTACT_INFO.address.state}
                                    </span>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="inline-flex items-center gap-2 hover:text-brand-accent transition-colors">
                                        <Mail className="h-4 w-4 text-brand-accent" />
                                        {CONTACT_INFO.email}
                                    </a>
                                    <a href={`tel:${CONTACT_INFO.phone.raw}`} className="inline-flex items-center gap-2 hover:text-brand-accent transition-colors">
                                        <Phone className="h-4 w-4 text-brand-accent" />
                                        {CONTACT_INFO.phone.display}
                                    </a>
                                </div>

                                <div className="space-y-4 text-lg text-dark-text-secondary leading-relaxed">
                                    <p>
                                        I founded {BUSINESS_INFO.shortName} to give {SERVICE_AREAS.region} businesses the same calibre of
                                        software that large enterprises take for granted.
                                    </p>
                                    <p>
                                        Before that I spent my career on high-stakes systems: enterprise engineering at{' '}
                                        <strong className="text-white">DXC Technology</strong>, and the trading platform behind{' '}
                                        <strong className="text-white">nabtrade</strong> at one of Australia&apos;s Big Four banks. Code that
                                        executes live financial trades has no tolerance for error, and that standard is the one I still build to.
                                    </p>
                                    <p>
                                        These days that means custom applications for local trades and tourism operators &mdash; a quoting app
                                        wired into the Bunnings API, a booking system for a reef operator that understands weather. Same
                                        engineering, smaller businesses, considerably better weather.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 mt-8">
                                    <a
                                        href={PROFILES.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer me"
                                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] transition-colors text-sm font-medium"
                                    >
                                        <Linkedin className="h-4 w-4 text-brand-accent" />
                                        LinkedIn
                                    </a>
                                    <a
                                        href={PROFILES.github}
                                        target="_blank"
                                        rel="noopener noreferrer me"
                                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] transition-colors text-sm font-medium"
                                    >
                                        <Github className="h-4 w-4 text-brand-accent" />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Background */}
                <section className="py-12 lg:py-16 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Background</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                <div className="glass-card p-6">
                                    <h3 className="text-lg font-bold text-white mb-2">nabtrade, National Australia Bank</h3>
                                    <p className="text-dark-text-secondary text-sm leading-relaxed">
                                        Engineering on the trading platform &mdash; systems handling live financial transactions, where
                                        correctness and uptime are the whole job.
                                    </p>
                                </div>
                                <div className="glass-card p-6">
                                    <h3 className="text-lg font-bold text-white mb-2">DXC Technology</h3>
                                    <p className="text-dark-text-secondary text-sm leading-relaxed">
                                        Complex software for a global IT services company, working to enterprise standards for security,
                                        scale and maintainability.
                                    </p>
                                </div>
                                <div className="glass-card p-6">
                                    <h3 className="text-lg font-bold text-white mb-2">HansenDev, Cairns</h3>
                                    <p className="text-dark-text-secondary text-sm leading-relaxed">
                                        Founded to serve {SERVICE_AREAS.region} businesses directly &mdash; web development, AI integration
                                        and custom software, plus a handful of my own products.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products — the strongest evidence of first-hand experience */}
                <section className="py-12 lg:py-16">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Things I&apos;ve built</h2>
                            <p className="text-dark-text-secondary mb-8 max-w-2xl">
                                I run these, not just build them. Most of what I write about quoting, automation and small business
                                software comes out of operating them.
                            </p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {PRODUCTS.map((product) => (
                                    <Link key={product.name} href={product.href} className="glass-card p-5 group">
                                        <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors mb-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-dark-text-secondary leading-relaxed">{product.blurb}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Writing */}
                <section className="py-12 lg:py-16 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="flex items-baseline justify-between gap-4 mb-8 flex-wrap">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                    Writing <span className="text-dark-text-secondary font-normal text-xl">({articleCount} articles)</span>
                                </h2>
                                <Link href="/articles" className="inline-flex items-center gap-2 text-brand-accent hover:text-teal-400 transition-colors font-medium">
                                    <span>All articles</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {articles.map((article) => (
                                    <Link
                                        key={`${article.frontmatter.product}/${article.frontmatter.slug}`}
                                        href={`/articles/${article.frontmatter.product}/${article.frontmatter.slug}`}
                                        className="glass-card p-5 group"
                                    >
                                        <span className="text-xs uppercase tracking-wider text-brand-accent font-medium">
                                            {getProductName(article.frontmatter.product)}
                                        </span>
                                        <h3 className="text-base font-bold text-white group-hover:text-brand-accent transition-colors mt-2 mb-2 leading-snug">
                                            {article.frontmatter.title}
                                        </h3>
                                        <p className="text-sm text-dark-text-secondary">{article.frontmatter.readingTime}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Working on something?</h2>
                            <p className="text-xl text-dark-text-secondary mb-8">
                                I take on a small number of projects at a time. Tell me what you&apos;re trying to fix and I&apos;ll tell you
                                whether it&apos;s worth building.
                            </p>
                            <a
                                href="/#contact"
                                className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                            >
                                <span>Get in touch</span>
                                <ArrowRight className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const all = getAllArticles();
    return {
        props: {
            articles: all.slice(0, 6),
            articleCount: all.length,
        },
    };
};

export default AuthorPage;
