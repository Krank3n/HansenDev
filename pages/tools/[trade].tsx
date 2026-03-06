import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowRight,
    CheckCircle,
    ChevronRight,
    DollarSign,
    FileText,
    Hammer,
    Send,
    Shield,
    Star,
    WifiOff,
    Wrench,
    Zap,
    Code,
    Phone,
} from 'lucide-react';
import { BUSINESS_INFO, ONLINE_PRESENCE, CONTACT_INFO } from '../../constants/business';
import { TRADES, getTrade, Trade } from '../../data/seo/trades';

interface TradePageProps {
    trade: Trade;
    otherTrades: Pick<Trade, 'slug' | 'name' | 'plural'>[];
}

const TradeQuotingPage: React.FC<TradePageProps> = ({ trade, otherTrades }) => {
    const canonicalUrl = `${ONLINE_PRESENCE.website.primary}/tools/quoting-app-for-${trade.slug}`;
    const pageTitle = `Quoting App for ${trade.plural} | QuoteMate by ${BUSINESS_INFO.shortName}`;
    const pageDescription = `The best quoting app for Australian ${trade.plural.toLowerCase()}. Create professional quotes in under 5 minutes with AI-powered estimation and real-time Bunnings pricing. Try free.`;

    const appStructuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "QuoteMate",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "iOS, Android",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "AUD",
            "description": "First 5 quotes free, no credit card required",
        },
        "description": `Quoting app for Australian ${trade.plural.toLowerCase()}. Create professional quotes with AI-powered estimation and real-time Bunnings pricing.`,
        "url": `${ONLINE_PRESENCE.website.primary}/projects/quotemate`,
    };

    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": ONLINE_PRESENCE.website.primary },
            { "@type": "ListItem", "position": 2, "name": "QuoteMate", "item": `${ONLINE_PRESENCE.website.primary}/projects/quotemate` },
            { "@type": "ListItem", "position": 3, "name": `Quoting App for ${trade.plural}`, "item": canonicalUrl },
        ],
    };

    const faqItems = [
        {
            question: `Is QuoteMate suitable for ${trade.plural.toLowerCase()}?`,
            answer: `Yes, QuoteMate is purpose-built for Australian ${trade.plural.toLowerCase()}. It handles ${trade.commonJobs.slice(0, 3).join(', ')} and more. The AI estimation understands ${trade.name.toLowerCase()} work and generates accurate material lists with real-time pricing.`,
        },
        {
            question: `How does QuoteMate help with ${trade.name.toLowerCase()} quotes?`,
            answer: `Just describe the job in plain English (e.g. "${trade.commonJobs[0]} - ${trade.commonJobs[1]}") and QuoteMate's AI generates a detailed quote with materials, quantities, and current Bunnings prices. You can customise everything before sending a professional PDF to your client.`,
        },
        {
            question: `Does QuoteMate work offline on job sites?`,
            answer: `Yes, QuoteMate works fully offline so you can create and edit quotes on-site even without mobile reception. Your data syncs automatically when you reconnect. Perfect for ${trade.plural.toLowerCase()} working in areas with patchy coverage.`,
        },
        {
            question: `How much does QuoteMate cost for ${trade.plural.toLowerCase()}?`,
            answer: `Your first 5 quotes are completely free with no credit card required. After that, QuoteMate offers affordable plans designed for individual ${trade.plural.toLowerCase()} and small teams. Most ${trade.plural.toLowerCase()} save 5+ hours per week on admin.`,
        },
        {
            question: `Can I add my own ${trade.name.toLowerCase()} materials and pricing?`,
            answer: `Absolutely. While QuoteMate includes real-time Bunnings pricing, you can add custom materials, set your own prices, adjust labour rates, and create templates for your most common ${trade.name.toLowerCase()} jobs.`,
        },
    ];

    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
        })),
    };

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content={`quoting app ${trade.plural.toLowerCase()}, ${trade.name.toLowerCase()} quote app, ${trade.name.toLowerCase()} estimating software, tradie quoting app, ${trade.name.toLowerCase()} invoice app, quote builder ${trade.plural.toLowerCase()}, Australia`} />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href={canonicalUrl} />

                <meta httpEquiv="content-language" content="en-AU" />
                <meta name="geo.region" content="AU" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={`Best Quoting App for ${trade.plural} | QuoteMate`} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:locale" content="en_AU" />
                <meta property="og:site_name" content={BUSINESS_INFO.name} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Quoting App for ${trade.plural}`} />
                <meta name="twitter:description" content={pageDescription} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appStructuredData) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Breadcrumb */}
                <nav className="border-b border-white/10" aria-label="Breadcrumb">
                    <div className="container-custom py-4">
                        <ol className="flex items-center gap-2 text-sm text-dark-text-secondary flex-wrap">
                            <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li><Link href="/projects/quotemate" className="hover:text-brand-accent transition-colors">QuoteMate</Link></li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li className="text-white" aria-current="page">Quoting App for {trade.plural}</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-6">
                                <Wrench className="h-4 w-4" />
                                <span>QuoteMate for {trade.plural}</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                The Quoting App Built for Australian {trade.plural}
                            </h1>

                            <p className="text-xl sm:text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Create professional {trade.name.toLowerCase()} quotes in under 5 minutes with AI-powered estimation and real-time Bunnings pricing
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <Link
                                    href="/quote-tool"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>Try Free &mdash; No Sign Up</span>
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="/projects/quotemate"
                                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                                >
                                    <span>Learn More</span>
                                </Link>
                            </div>

                            <p className="text-sm text-dark-text-secondary">
                                <strong className="text-white">First 5 quotes free</strong> &bull; No credit card required &bull; Works on iPhone &amp; Android
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pain Points */}
                <section className="py-16 lg:py-24 bg-white/[0.02] border-y border-white/10">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    Why {trade.plural} Struggle with Quoting
                                </h2>
                                <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
                                    {trade.quoteComplexity}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {trade.painPoints.map((point, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex items-start gap-4">
                                        <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-500/30">
                                            <span className="text-red-400 font-bold">{index + 1}</span>
                                        </div>
                                        <p className="text-dark-text-secondary leading-relaxed">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* How QuoteMate Solves It */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    How QuoteMate Helps {trade.plural}
                                </h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Purpose-built features that make {trade.name.toLowerCase()} quoting fast, accurate, and professional
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center mb-6 border border-brand-accent/30">
                                        <Zap className="h-6 w-6 text-brand-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">AI-Powered Estimation</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Describe the {trade.name.toLowerCase()} job in plain English and let AI generate a detailed material list with quantities. Works for {trade.commonJobs.slice(0, 3).join(', ')}, and more.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center mb-6 border border-brand-accent/30">
                                        <DollarSign className="h-6 w-6 text-brand-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Real-Time Bunnings Pricing</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        {trade.bunningsRelevance}
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center mb-6 border border-brand-accent/30">
                                        <FileText className="h-6 w-6 text-brand-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Professional PDF Quotes</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Send branded, professional PDF quotes that make you stand out from other {trade.plural.toLowerCase()}. Add your logo, terms, and ABN automatically.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center mb-6 border border-brand-accent/30">
                                        <WifiOff className="h-6 w-6 text-brand-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Works Offline</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Create and edit quotes on-site without internet. Perfect for {trade.plural.toLowerCase()} working in areas with no mobile coverage. Syncs when you reconnect.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center mb-6 border border-brand-accent/30">
                                        <Shield className="h-6 w-6 text-brand-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">GST Calculated Automatically</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        GST is calculated and displayed automatically on every quote. Show or hide GST breakdowns depending on your client. ABN included on all documents.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center mb-6 border border-brand-accent/30">
                                        <Send className="h-6 w-6 text-brand-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Send via Email, SMS or WhatsApp</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Share quotes instantly via email, SMS, or WhatsApp. Your client gets a professional PDF while you track which quotes have been viewed and accepted.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common Jobs */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    Quote Any {trade.name} Job in Minutes
                                </h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    QuoteMate handles all common {trade.name.toLowerCase()} jobs &mdash; from simple repairs to complex projects
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {trade.commonJobs.map((job, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 text-center">
                                        <Hammer className="h-6 w-6 text-brand-accent mx-auto mb-3" />
                                        <p className="text-white font-semibold text-sm">{job}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-dark-text-secondary">
                                    Typical quote range: <strong className="text-white">{trade.averageQuoteRange}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Materials */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    Real-Time Pricing on {trade.name} Materials
                                </h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    QuoteMate automatically pulls current Bunnings prices for the materials {trade.plural.toLowerCase()} use every day
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {trade.materials.map((material, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0" />
                                        <p className="text-white font-medium text-sm">{material}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Proof */}
                <section className="py-16 lg:py-24 bg-white/[0.02] border-y border-white/10">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div>
                                    <div className="text-4xl lg:text-5xl font-bold text-brand-accent mb-2">5 min</div>
                                    <p className="text-dark-text-secondary">Average time to create a professional quote</p>
                                </div>
                                <div>
                                    <div className="text-4xl lg:text-5xl font-bold text-brand-accent mb-2">5+ hrs</div>
                                    <p className="text-dark-text-secondary">Saved per week on quoting &amp; admin</p>
                                </div>
                                <div>
                                    <div className="flex justify-center gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-8 w-8 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-dark-text-secondary">Rated by Australian tradies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    FAQs for {trade.plural}
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {faqItems.map((faq, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                                        <p className="text-dark-text-secondary leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Trades */}
                <section className="py-16 lg:py-24 bg-white/[0.02] border-t border-white/10">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    QuoteMate for Other Trades
                                </h2>
                                <p className="text-lg text-dark-text-secondary">
                                    QuoteMate works for all Australian trades &mdash; not just {trade.plural.toLowerCase()}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {otherTrades.map((other) => (
                                    <Link
                                        key={other.slug}
                                        href={`/tools/quoting-app-for-${other.slug}`}
                                        className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Wrench className="h-4 w-4 text-brand-accent flex-shrink-0" />
                                            <span className="text-white font-medium group-hover:text-brand-accent transition-colors text-sm">
                                                {other.plural}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 border-y border-brand-accent/20">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Save Hours on {trade.name} Quotes?
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Join Australian {trade.plural.toLowerCase()} who&apos;ve switched to QuoteMate for faster, more accurate, and more professional quotes
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <Link
                                    href="/quote-tool"
                                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <span>Try QuoteMate Free</span>
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="/projects/quotemate"
                                    className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                                >
                                    <span>See All Features</span>
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark-text-secondary">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>First 5 Quotes Free</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>No Credit Card Required</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Works Offline</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = TRADES.map(trade => ({
        params: { trade: `quoting-app-for-${trade.slug}` },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const rawSlug = params?.trade as string;
    const tradeSlug = rawSlug.replace('quoting-app-for-', '');
    const trade = getTrade(tradeSlug);

    if (!trade) {
        return { notFound: true };
    }

    const otherTrades = TRADES
        .filter(t => t.slug !== trade.slug)
        .map(({ slug, name, plural }) => ({ slug, name, plural }));

    return {
        props: { trade, otherTrades },
    };
};

export default TradeQuotingPage;
