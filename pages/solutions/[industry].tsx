import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowRight,
    CheckCircle,
    ChevronRight,
    Clock,
    ExternalLink,
    FileJson,
    Globe,
    Layers,
    MessageSquare,
    Monitor,
    Paintbrush,
    Sparkles,
    Zap,
    Wrench,
} from 'lucide-react';
import { BUSINESS_INFO, ONLINE_PRESENCE } from '../../constants/business';
import { INDUSTRIES, getIndustry, Industry } from '../../data/seo/industries';

interface IndustryPageProps {
    industry: Industry;
    otherIndustries: Pick<Industry, 'slug' | 'name' | 'plural'>[];
}

const IndustryRedesignPage: React.FC<IndustryPageProps> = ({ industry, otherIndustries }) => {
    const canonicalUrl = `${ONLINE_PRESENCE.website.primary}/solutions/ai-website-redesign-for-${industry.slug}`;
    const pageTitle = `AI Website Redesign for ${industry.plural} | WebFaceLift by ${BUSINESS_INFO.shortName}`;
    const pageDescription = `Modernise your ${industry.name.toLowerCase()} website in 30 seconds with AI. WebFaceLift scrapes your content, redesigns everything, and lets you refine via chat. Try free - no account required.`;

    const appStructuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "WebFaceLift",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "AUD",
            "description": "Free demo mode, no account required",
        },
        "description": `AI-powered website redesign tool for ${industry.plural.toLowerCase()}. Paste your URL and get a modern redesign in 30 seconds.`,
        "url": "https://webfacelift.app",
    };

    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": ONLINE_PRESENCE.website.primary },
            { "@type": "ListItem", "position": 2, "name": "WebFaceLift", "item": `${ONLINE_PRESENCE.website.primary}/projects/webfacelift` },
            { "@type": "ListItem", "position": 3, "name": `AI Website Redesign for ${industry.plural}`, "item": canonicalUrl },
        ],
    };

    const faqItems = [
        {
            question: `How does WebFaceLift work for ${industry.name.toLowerCase()} websites?`,
            answer: `Paste your ${industry.name.toLowerCase()} website URL into WebFaceLift. Our AI scrapes all your content, images, and structure, then generates a complete modern redesign in about 30 seconds. You can then chat with the AI to refine the design - "make it warmer", "add a booking section", etc.`,
        },
        {
            question: `Do I need any design or coding skills?`,
            answer: `No, WebFaceLift is designed for ${industry.businessOwner}s with zero technical knowledge. Everything is done through a simple chat interface. Just tell the AI what you want in plain English and watch the design update in real-time.`,
        },
        {
            question: `Can WebFaceLift handle ${industry.name.toLowerCase()}-specific pages?`,
            answer: `Yes. WebFaceLift generates ${industry.commonPages.slice(0, 4).join(', ')} pages and more. The AI understands ${industry.name.toLowerCase()} websites and creates appropriate sections like ${industry.designPriorities.slice(0, 2).join(' and ').toLowerCase()}.`,
        },
        {
            question: `What happens after I get my redesign?`,
            answer: `You get a complete component-based blueprint that any web developer can build. You can also export the JSON structure, share the preview with stakeholders, or contact ${BUSINESS_INFO.shortName} to have the design professionally built.`,
        },
        {
            question: `Is WebFaceLift free for ${industry.plural.toLowerCase()}?`,
            answer: `Yes, the demo mode is completely free with no account required. Paste your ${industry.name.toLowerCase()} website URL, get your redesign, and chat with the AI to refine it. No credit card, no sign-up.`,
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
                <meta name="keywords" content={`AI website redesign ${industry.plural.toLowerCase()}, ${industry.name.toLowerCase()} website design, modernise ${industry.name.toLowerCase()} website, ${industry.name.toLowerCase()} web design, AI website builder ${industry.plural.toLowerCase()}, website makeover ${industry.name.toLowerCase()}`} />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href={canonicalUrl} />

                <meta httpEquiv="content-language" content="en-AU" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={`AI Website Redesign for ${industry.plural} | WebFaceLift`} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:locale" content="en_AU" />
                <meta property="og:site_name" content={BUSINESS_INFO.name} />
                <meta property="og:image" content={`${ONLINE_PRESENCE.website.primary}/assets/HansenDevOg-1200x630.jpg`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`AI Website Redesign for ${industry.plural}`} />
                <meta name="twitter:description" content={pageDescription} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appStructuredData) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Breadcrumb */}
                <nav className="" aria-label="Breadcrumb">
                    <div className="container-custom py-4">
                        <ol className="flex items-center gap-2 text-sm text-dark-text-secondary flex-wrap">
                            <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li><Link href="/projects/webfacelift" className="hover:text-brand-accent transition-colors">WebFaceLift</Link></li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li className="text-white" aria-current="page">AI Redesign for {industry.plural}</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-6">
                                <Sparkles className="h-4 w-4" />
                                <span>WebFaceLift for {industry.plural}</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                AI Website Redesign for {industry.plural}
                            </h1>

                            <p className="text-xl sm:text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Paste your {industry.name.toLowerCase()} website URL and get a complete modern redesign in 30 seconds. Refine it with chat.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <a
                                    href="https://webfacelift.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-violet-600 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
                                >
                                    <span>Try Free &mdash; No Sign Up</span>
                                    <ExternalLink className="h-5 w-5" />
                                </a>
                                <Link
                                    href="/projects/webfacelift"
                                    className="inline-flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                                >
                                    <span>Learn More</span>
                                </Link>
                            </div>

                            <p className="text-sm text-dark-text-secondary">
                                <strong className="text-white">100% free demo</strong> &bull; No account required &bull; Results in ~30 seconds
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Outdated */}
                <section className="py-16 lg:py-24 bg-white/[0.02] ">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    Why Most {industry.name} Websites Need a Redesign
                                </h2>
                            </div>

                            <div className="glass-card p-8 mb-8">
                                <p className="text-lg text-dark-text-secondary leading-relaxed">
                                    {industry.whyOutdated}
                                </p>
                            </div>

                            <div className="glass-card p-8">
                                <h3 className="text-xl font-bold text-white mb-4">The competitive reality</h3>
                                <p className="text-dark-text-secondary leading-relaxed">
                                    {industry.competitorPressure}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    How It Works for {industry.plural}
                                </h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Three steps from outdated to modern &mdash; no design skills required
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="glass-card p-8 transition-all duration-500 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                                        1
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Paste Your URL</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Enter your current {industry.name.toLowerCase()} website URL. WebFaceLift scrapes all your content, images, and structure automatically.
                                    </p>
                                </div>

                                <div className="glass-card p-8 transition-all duration-500 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                                        2
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">AI Redesigns Everything</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Claude AI analyses your content and generates a modern {industry.name.toLowerCase()} website blueprint with appropriate sections in ~30 seconds.
                                    </p>
                                </div>

                                <div className="glass-card p-8 transition-all duration-500 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                                        3
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Refine with Chat</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Tell the AI what to change in plain English: &ldquo;add a booking section&rdquo;, &ldquo;make it warmer&rdquo;, &ldquo;show the menu first&rdquo;. Iterate until it&apos;s perfect.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Priorities */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    What a Modern {industry.name} Website Needs
                                </h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    WebFaceLift generates designs that include these {industry.name.toLowerCase()}-specific priorities
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {industry.designPriorities.map((priority, index) => (
                                    <div key={index} className="glass-card p-6 flex items-start gap-4">
                                        <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0 ">
                                            <CheckCircle className="h-5 w-5 text-indigo-400" />
                                        </div>
                                        <p className="text-dark-text-secondary leading-relaxed">{priority}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common Pages */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    Pages WebFaceLift Generates for {industry.plural}
                                </h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    The AI understands {industry.name.toLowerCase()} websites and creates all the pages you need
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {industry.commonPages.map((page, index) => (
                                    <div key={index} className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-5 hover:bg-white/[0.06] transition-all duration-300 text-center">
                                        <Globe className="h-6 w-6 text-indigo-400 mx-auto mb-3" />
                                        <p className="text-white font-semibold text-sm">{page}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conversion Goals */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    What Your {industry.name} Website Should Achieve
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {industry.conversionGoals.map((goal, index) => (
                                    <div key={index} className="glass-card p-6 flex items-start gap-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold">
                                            {index + 1}
                                        </div>
                                        <p className="text-dark-text-secondary leading-relaxed">{goal}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    WebFaceLift Features
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    { icon: <Clock className="h-6 w-6 text-indigo-400" />, title: '30-Second Redesign', desc: `Paste your ${industry.name.toLowerCase()} website URL and get a complete modern redesign in about 30 seconds. No waiting for designers.` },
                                    { icon: <MessageSquare className="h-6 w-6 text-indigo-400" />, title: 'Chat to Refine', desc: 'Tell the AI what to change in plain English. "Make the hero bigger", "add testimonials", "use a warmer colour scheme".' },
                                    { icon: <Paintbrush className="h-6 w-6 text-indigo-400" />, title: '4 Design Styles', desc: 'Choose from Glass, Bold, Minimal, or Vibrant design styles. Each creates a different aesthetic for your redesign.' },
                                    { icon: <Layers className="h-6 w-6 text-indigo-400" />, title: '13+ Component Types', desc: 'Hero, services, testimonials, pricing, gallery, FAQ, contact forms, and more. All generated automatically.' },
                                    { icon: <Monitor className="h-6 w-6 text-indigo-400" />, title: 'Live Preview', desc: 'See your redesigned website rendered in real-time. Toggle between desktop and mobile views.' },
                                    { icon: <FileJson className="h-6 w-6 text-indigo-400" />, title: 'Export & Build', desc: 'Export the component-based JSON structure. Share with your developer or contact us to build it professionally.' },
                                ].map((feature, index) => (
                                    <div key={index} className="glass-card p-8 transition-all duration-500">
                                        <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 ">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                        <p className="text-dark-text-secondary leading-relaxed">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    FAQs for {industry.plural}
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {faqItems.map((faq, index) => (
                                    <div key={index} className="glass-card p-6">
                                        <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                                        <p className="text-dark-text-secondary leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Industries */}
                <section className="py-16 lg:py-24 ">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    WebFaceLift for Other Industries
                                </h2>
                                <p className="text-lg text-dark-text-secondary">
                                    WebFaceLift works for any website &mdash; explore industry-specific guides
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {otherIndustries.map((other) => (
                                    <Link
                                        key={other.slug}
                                        href={`/solutions/ai-website-redesign-for-${other.slug}`}
                                        className="bg-white/[0.03] rounded-xl p-4 hover:bg-white/[0.06] transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                                            <span className="text-white font-medium group-hover:text-indigo-400 transition-colors text-sm">
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
                <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-600/10 via-violet-600/10 to-indigo-600/10 ">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Modernise Your {industry.name} Website?
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                See what your {industry.name.toLowerCase()} website could look like with a modern redesign. It takes 30 seconds and it&apos;s completely free.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <a
                                    href="https://webfacelift.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-violet-600 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
                                >
                                    <span>Try WebFaceLift Free</span>
                                    <ExternalLink className="h-5 w-5" />
                                </a>
                                <Link
                                    href="/projects/webfacelift"
                                    className="inline-flex items-center justify-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                                >
                                    <span>Learn More About WebFaceLift</span>
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark-text-secondary">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-indigo-400" />
                                    <span>100% Free Demo</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-indigo-400" />
                                    <span>No Account Required</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-indigo-400" />
                                    <span>Results in 30 Seconds</span>
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
    const paths = INDUSTRIES.map(industry => ({
        params: { industry: `ai-website-redesign-for-${industry.slug}` },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const rawSlug = params?.industry as string;
    const industrySlug = rawSlug.replace('ai-website-redesign-for-', '');
    const industry = getIndustry(industrySlug);

    if (!industry) {
        return { notFound: true };
    }

    const otherIndustries = INDUSTRIES
        .filter(i => i.slug !== industry.slug)
        .map(({ slug, name, plural }) => ({ slug, name, plural }));

    return {
        props: { industry, otherIndustries },
    };
};

export default IndustryRedesignPage;
