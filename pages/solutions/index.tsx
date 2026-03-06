import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowRight,
    ChevronRight,
    ExternalLink,
    Globe,
    Sparkles,
} from 'lucide-react';
import { BUSINESS_INFO, ONLINE_PRESENCE } from '../../constants/business';
import { INDUSTRIES } from '../../data/seo/industries';

const SolutionsIndex: React.FC = () => {
    const canonicalUrl = `${ONLINE_PRESENCE.website.primary}/solutions`;

    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": ONLINE_PRESENCE.website.primary },
            { "@type": "ListItem", "position": 2, "name": "WebFaceLift Solutions", "item": canonicalUrl },
        ],
    };

    return (
        <>
            <Head>
                <title>AI Website Redesign for Every Industry | WebFaceLift by {BUSINESS_INFO.shortName}</title>
                <meta name="description" content={`WebFaceLift modernises websites for ${INDUSTRIES.length} industries including restaurants, dental practices, gyms, law firms, and more. Paste your URL, get a modern redesign in 30 seconds. Free.`} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={`AI Website Redesign by Industry | WebFaceLift`} />
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
                            <li><Link href="/projects/webfacelift" className="hover:text-brand-accent transition-colors">WebFaceLift</Link></li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li className="text-white" aria-current="page">All Industries</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium uppercase tracking-wider mb-6">
                                <Sparkles className="h-4 w-4" />
                                <span>WebFaceLift by Industry</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                AI Website Redesign for Every Industry
                            </h1>

                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                WebFaceLift transforms outdated websites into modern designs in 30 seconds. Find your industry below and see what your website could look like.
                            </p>

                            <a
                                href="https://webfacelift.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-violet-600 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
                            >
                                <span>Try WebFaceLift Free</span>
                                <ExternalLink className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Industries Grid */}
                <section className="py-16 lg:py-24 bg-white/[0.02] border-t border-white/10">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {INDUSTRIES.map((industry) => (
                                    <Link
                                        key={industry.slug}
                                        href={`/solutions/ai-website-redesign-for-${industry.slug}`}
                                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center border border-indigo-500/30">
                                                <Globe className="h-6 w-6 text-indigo-400" />
                                            </div>
                                            <h2 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                                {industry.plural}
                                            </h2>
                                        </div>
                                        <p className="text-dark-text-secondary text-sm leading-relaxed mb-4">
                                            {industry.description.slice(0, 120)}...
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {industry.designPriorities.slice(0, 2).map((priority, i) => (
                                                <span key={i} className="text-xs bg-white/10 text-dark-text-secondary px-2 py-1 rounded-md">
                                                    {priority.length > 35 ? priority.slice(0, 35) + '...' : priority}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium">
                                            <span>See guide</span>
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-600/10 via-violet-600/10 to-indigo-600/10 border-y border-indigo-500/20">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                Your Industry Not Listed?
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                WebFaceLift works for any website in any industry. Paste your URL and the AI adapts to your specific content and business type.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://webfacelift.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-violet-600 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                                >
                                    <span>Try Free &mdash; Any Website</span>
                                    <ExternalLink className="h-5 w-5" />
                                </a>
                                <Link
                                    href="/projects/webfacelift"
                                    className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                                >
                                    Learn More About WebFaceLift
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SolutionsIndex;
