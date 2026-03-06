import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowRight,
    CheckCircle,
    ChevronRight,
    Hammer,
    Wrench,
} from 'lucide-react';
import { BUSINESS_INFO, ONLINE_PRESENCE } from '../../constants/business';
import { TRADES } from '../../data/seo/trades';

const ToolsIndex: React.FC = () => {
    const canonicalUrl = `${ONLINE_PRESENCE.website.primary}/tools`;

    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": ONLINE_PRESENCE.website.primary },
            { "@type": "ListItem", "position": 2, "name": "QuoteMate for Trades", "item": canonicalUrl },
        ],
    };

    return (
        <>
            <Head>
                <title>QuoteMate Quoting App for Every Trade | {BUSINESS_INFO.shortName}</title>
                <meta name="description" content={`QuoteMate is the quoting app built for Australian tradies. Find trade-specific guides for ${TRADES.length} trades including carpenters, builders, electricians, plumbers, and more. Try free.`} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={`QuoteMate for Every Trade | ${BUSINESS_INFO.shortName}`} />
                <meta property="og:locale" content="en_AU" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Breadcrumb */}
                <nav className="border-b border-white/10" aria-label="Breadcrumb">
                    <div className="container-custom py-4">
                        <ol className="flex items-center gap-2 text-sm text-dark-text-secondary">
                            <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li><Link href="/projects/quotemate" className="hover:text-brand-accent transition-colors">QuoteMate</Link></li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li className="text-white" aria-current="page">All Trades</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-6">
                                <Wrench className="h-4 w-4" />
                                <span>QuoteMate for Tradies</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Quoting App for Every Australian Trade
                            </h1>

                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                QuoteMate helps {TRADES.length} different trades create professional quotes in under 5 minutes. Find your trade below and see how QuoteMate can save you hours every week.
                            </p>

                            <Link
                                href="/quote-tool"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                            >
                                <span>Try QuoteMate Free</span>
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Trades Grid */}
                <section className="py-16 lg:py-24 bg-white/[0.02] border-t border-white/10">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {TRADES.map((trade) => (
                                    <Link
                                        key={trade.slug}
                                        href={`/tools/quoting-app-for-${trade.slug}`}
                                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-brand-accent/30 transition-all duration-500 group"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center border border-brand-accent/30">
                                                <Hammer className="h-6 w-6 text-brand-accent" />
                                            </div>
                                            <h2 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">
                                                {trade.plural}
                                            </h2>
                                        </div>
                                        <p className="text-dark-text-secondary text-sm leading-relaxed mb-4">
                                            {trade.description.slice(0, 120)}...
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {trade.commonJobs.slice(0, 3).map((job, i) => (
                                                <span key={i} className="text-xs bg-white/10 text-dark-text-secondary px-2 py-1 rounded-md">
                                                    {job}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 text-brand-accent text-sm font-medium">
                                            <span>Learn more</span>
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                Your Trade Not Listed?
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                QuoteMate works for any trade or service business. The AI adapts to any job type &mdash; just describe the work and get a professional quote.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/quote-tool"
                                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                                >
                                    <span>Try Free &mdash; No Sign Up</span>
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="/projects/quotemate"
                                    className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                                >
                                    See All Features
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ToolsIndex;
