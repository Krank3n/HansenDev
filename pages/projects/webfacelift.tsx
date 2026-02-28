import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    ExternalLink,
    Zap,
    Globe,
    MessageSquare,
    Paintbrush,
    Clock,
    Sparkles,
    CheckCircle,
    Code2,
    Layers,
    ArrowUpRight,
    Monitor,
    Smartphone,
    Bot,
    Image as ImageIcon,
    FileJson,
    Users,
} from 'lucide-react';

const WebFaceLift: React.FC = () => {
    return (
        <>
            <Head>
                <title>WebFaceLift - AI Website Redesign in Seconds | HansenDev</title>
                <meta name="description" content="Transform any outdated website into a modern design in 30 seconds. WebFaceLift uses AI to scrape, analyse, and reconstruct websites with conversational editing. Try it free." />

                {/* Enhanced SEO Meta Tags */}
                <meta name="keywords" content="AI website redesign, website reconstruction, AI web design tool, modernise website, website makeover, automated web design, AI website builder, webfacelift, website facelift, outdated website fix" />
                <meta name="author" content="HansenDev PTY LTD" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://hansendev.com.au/projects/webfacelift" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hansendev.com.au/projects/webfacelift" />
                <meta property="og:title" content="WebFaceLift - AI Website Redesign in Seconds" />
                <meta property="og:description" content="Paste any outdated website URL. Our AI scrapes the content, redesigns the structure, and renders a modern blueprint you can iterate on via chat." />
                <meta property="og:image" content="https://webfacelift.app/og-image.png" />
                <meta property="og:site_name" content="HansenDev" />
                <meta property="og:locale" content="en_AU" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://hansendev.com.au/projects/webfacelift" />
                <meta name="twitter:title" content="WebFaceLift - AI Website Redesign in Seconds" />
                <meta name="twitter:description" content="Transform any outdated website into a modern design in 30 seconds with AI-powered reconstruction." />
                <meta name="twitter:image" content="https://webfacelift.app/og-image.png" />

                {/* JSON-LD Structured Data for Software Application */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "WebFaceLift",
                            "url": "https://webfacelift.app",
                            "applicationCategory": "DesignApplication",
                            "operatingSystem": "Web",
                            "description": "AI-powered website reconstruction tool that transforms outdated business websites into modern designs in seconds. Paste a URL, get a complete redesign powered by Claude AI.",
                            "offers": {
                                "@type": "Offer",
                                "availability": "https://schema.org/InStock",
                                "price": "0",
                                "priceCurrency": "AUD",
                                "description": "Free demo available — no account required"
                            },
                            "author": {
                                "@type": "Organization",
                                "name": "HansenDev PTY LTD",
                                "url": "https://hansendev.com.au"
                            },
                            "screenshot": "https://webfacelift.app/og-image.png",
                            "featureList": [
                                "AI-powered website redesign in 30 seconds",
                                "Instant URL scraping and content analysis",
                                "Conversational design editing via chat",
                                "Multiple design templates (Glass, Bold, Minimal, Vibrant)",
                                "Niche-specific layouts for restaurants, fitness, water sports",
                                "Real-time live preview",
                                "Component-based JSON output",
                                "Multi-page website support"
                            ]
                        })
                    }}
                />

                {/* Breadcrumb Navigation Schema */}
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
                                    "item": "https://hansendev.com.au"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Projects",
                                    "item": "https://hansendev.com.au/#portfolio"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "WebFaceLift",
                                    "item": "https://hansendev.com.au/projects/webfacelift"
                                }
                            ]
                        })
                    }}
                />

                {/* FAQ Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "What is WebFaceLift?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "WebFaceLift is an AI-powered website reconstruction platform. Paste any outdated website URL and our AI scrapes all the content, redesigns the entire structure, and generates a modern blueprint you can refine through a conversational chat interface — all in about 30 seconds."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How does WebFaceLift work?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "WebFaceLift works in three steps: (1) Paste any website URL and we scrape all content, images, and structure. (2) Claude AI analyses the content and generates a complete modern blueprint with hero sections, service grids, testimonials, and CTAs. (3) Chat with the AI to refine the design in real-time — say 'Make it blue' or 'Add a contact form' and watch the site update instantly."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is WebFaceLift free to use?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, WebFaceLift offers a free demo mode that lets you try the platform without creating an account. Simply paste a URL and see the AI reconstruction in action."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What types of websites can WebFaceLift redesign?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "WebFaceLift works with any website — local plumbers, law firms, restaurants, SaaS companies, tourism operators, fitness centres, and more. If it has a URL, we can reconstruct it. The platform also has niche-specific templates for industries like water sports, restaurants, and fitness."
                                    }
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
                        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-dark-text-secondary hover:text-brand-accent transition-colors duration-300">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Portfolio</span>
                        </Link>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-5xl mx-auto text-center">
                            {/* Category Badge */}
                            <div className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium uppercase tracking-wider mb-6">
                                <Sparkles className="h-4 w-4" />
                                <span>AI-Powered SaaS Platform</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                More Than a Facelift.<br />
                                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                                    We Reconstruct the Bones.
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Paste any outdated website URL. Get a <span className="text-indigo-400 font-bold">complete modern redesign</span> in 30 seconds.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <a
                                    href="https://webfacelift.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-violet-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
                                >
                                    <Zap className="h-6 w-6" />
                                    <span>Try It Free</span>
                                </a>
                                <a
                                    href="#how-it-works"
                                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                                >
                                    <span>See How It Works</span>
                                    <ArrowUpRight className="h-6 w-6" />
                                </a>
                            </div>

                            <p className="text-sm text-dark-text-secondary">
                                No account required to try <strong className="text-white">demo mode</strong> • Powered by <strong className="text-white">Claude AI</strong> • Built by <strong className="text-white">HansenDev</strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Banner */}
                <section className="py-12 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20 border-y border-indigo-500/30">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">30s</div>
                                <div className="text-dark-text-secondary">Full Redesign</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">4</div>
                                <div className="text-dark-text-secondary">Design Styles</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">13+</div>
                                <div className="text-dark-text-secondary">Component Types</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">Any</div>
                                <div className="text-dark-text-secondary">Website URL</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section id="how-it-works" className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Three Steps. Zero Design Skills.</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    From outdated to outstanding in under a minute
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 mb-16">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <span className="text-4xl font-bold text-white">1</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Paste the URL</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Enter any business website. We scrape and analyse every piece of content, structure, images, and media automatically.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <span className="text-4xl font-bold text-white">2</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">AI Reconstructs</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Claude AI generates a complete modern blueprint — hero sections, service grids, testimonials, CTAs — all built from your existing content.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <span className="text-4xl font-bold text-white">3</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Iterate via Chat</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Tell the AI what to change. &quot;Make it blue.&quot; &quot;Add a contact form.&quot; &quot;Change the hero text.&quot; Watch the site update in real-time.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-2xl p-8 border border-indigo-500/20 text-center">
                                <p className="text-2xl text-white font-semibold mb-2">
                                    &quot;Stop polishing. Start rebuilding.&quot;
                                </p>
                                <p className="text-dark-text-secondary">
                                    — The WebFaceLift philosophy
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Built for Speed, Not Perfection Theatre</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Every feature is designed to get you from &quot;that old site&quot; to &quot;that looks incredible&quot; in minutes
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-xl flex items-center justify-center border border-indigo-500/30 flex-shrink-0">
                                            <Zap className="h-6 w-6 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Instant Blueprint Generation</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Scrape, analyse, and rebuild an entire website in under 30 seconds. Content extraction, design analysis, and blueprint construction happen automatically.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-violet-500/30 flex-shrink-0">
                                            <MessageSquare className="h-6 w-6 text-violet-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Conversational Editing</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Chat with the AI to refine your design. No drag-and-drop builders or design skills needed — just describe what you want and watch it happen.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30 flex-shrink-0">
                                            <Globe className="h-6 w-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Works With Any Website</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Local plumber, law firm, restaurant, or SaaS — if it has a URL, we can reconstruct it. Handles Wix, WordPress, custom HTML, and any other platform.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-xl flex items-center justify-center border border-pink-500/30 flex-shrink-0">
                                            <Paintbrush className="h-6 w-6 text-pink-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">4 Design Styles</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Choose from Glass (frosted panels), Bold (high contrast), Minimal (clean whitespace), or Vibrant (warm gradients) — each with consistent visual language.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border border-amber-500/30 flex-shrink-0">
                                            <Layers className="h-6 w-6 text-amber-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Niche-Specific Templates</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Intelligent detection routes businesses to specialised layouts — water sports with booking integration, restaurants with menus, fitness centres with class schedules.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30 flex-shrink-0">
                                            <FileJson className="h-6 w-6 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Component-Based Output</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Hero sections, service grids, testimonials, pricing tables, galleries, FAQs, and more — all rendered from a clean JSON schema you can export and use.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Generation Pipeline */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">What Happens Under the Hood</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    A four-stage AI pipeline that delivers results in about 30 seconds
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    {
                                        stage: 'Scraping',
                                        time: '~12s',
                                        icon: <Globe className="h-6 w-6 text-cyan-400" />,
                                        description: 'Connect to the target site, extract HTML, images, videos, and internal links using Firecrawl.',
                                    },
                                    {
                                        stage: 'Analysing',
                                        time: '~10s',
                                        icon: <Bot className="h-6 w-6 text-violet-400" />,
                                        description: 'Catalogue all content, identify business type and niche, extract contact info, social links, and booking URLs.',
                                    },
                                    {
                                        stage: 'Design Consultation',
                                        time: '~6s',
                                        icon: <Paintbrush className="h-6 w-6 text-pink-400" />,
                                        description: 'Evaluate visual patterns, select typography, define colour palette, and choose the best template style.',
                                    },
                                    {
                                        stage: 'Blueprint Building',
                                        time: '~17s',
                                        icon: <Code2 className="h-6 w-6 text-indigo-400" />,
                                        description: 'Map content to components, construct the full JSON blueprint, and render the live preview.',
                                    },
                                ].map((step, index) => (
                                    <div key={step.stage} className="flex items-start gap-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <div className="flex-shrink-0 w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                                            {step.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-lg font-bold text-white">{step.stage}</h3>
                                                <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">{step.time}</span>
                                            </div>
                                            <p className="text-dark-text-secondary">{step.description}</p>
                                        </div>
                                        {index < 3 && (
                                            <div className="hidden sm:block flex-shrink-0 self-center text-white/20">
                                                <ArrowUpRight className="h-5 w-5" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Component Types */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">13+ Component Types</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Every section a modern website needs, auto-selected based on your content
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {[
                                    { name: 'Navbar', icon: <Monitor className="h-5 w-5" /> },
                                    { name: 'Hero', icon: <Sparkles className="h-5 w-5" /> },
                                    { name: 'Service Grid', icon: <Layers className="h-5 w-5" /> },
                                    { name: 'Content Split', icon: <Code2 className="h-5 w-5" /> },
                                    { name: 'Testimonials', icon: <MessageSquare className="h-5 w-5" /> },
                                    { name: 'Contact CTA', icon: <ExternalLink className="h-5 w-5" /> },
                                    { name: 'Pricing Grid', icon: <CheckCircle className="h-5 w-5" /> },
                                    { name: 'Stats Bar', icon: <Zap className="h-5 w-5" /> },
                                    { name: 'Gallery', icon: <ImageIcon className="h-5 w-5" /> },
                                    { name: 'FAQ', icon: <MessageSquare className="h-5 w-5" /> },
                                    { name: 'Team Grid', icon: <Users className="h-5 w-5" /> },
                                    { name: 'Logo Bar', icon: <Globe className="h-5 w-5" /> },
                                    { name: 'Footer', icon: <Smartphone className="h-5 w-5" /> },
                                ].map((component) => (
                                    <div
                                        key={component.name}
                                        className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 flex items-center gap-3"
                                    >
                                        <span className="text-indigo-400">{component.icon}</span>
                                        <span className="text-sm font-medium text-white">{component.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Technology Stack</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Built with modern, production-grade tools
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <Monitor className="h-5 w-5 text-indigo-400" />
                                        Frontend
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Lucide Icons'].map((tech) => (
                                            <span key={tech} className="bg-white/10 text-dark-text px-3 py-1.5 rounded-full text-sm border border-white/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <Bot className="h-5 w-5 text-violet-400" />
                                        Backend & AI
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['Claude AI (Opus)', 'Firecrawl', 'Supabase', 'Next.js Server Actions', 'Gemini API'].map((tech) => (
                                            <span key={tech} className="bg-white/10 text-dark-text px-3 py-1.5 rounded-full text-sm border border-white/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Perfect For */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Perfect For</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Anyone who needs a better website, fast
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: 'Small Business Owners',
                                        description: 'Get a modern website without hiring a designer or spending months waiting. Paste your current site and see the transformation instantly.',
                                        icon: <Users className="h-6 w-6 text-indigo-400" />,
                                    },
                                    {
                                        title: 'Freelancers & Agencies',
                                        description: 'Generate professional mockups for client pitches in seconds. Show businesses what their site could look like before they commit.',
                                        icon: <Code2 className="h-6 w-6 text-violet-400" />,
                                    },
                                    {
                                        title: 'Web Developers',
                                        description: 'Use the JSON blueprint output as a starting point. Skip the design phase and jump straight into building with clean, structured data.',
                                        icon: <FileJson className="h-6 w-6 text-emerald-400" />,
                                    },
                                ].map((audience) => (
                                    <div key={audience.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 text-center">
                                        <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                                            {audience.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{audience.title}</h3>
                                        <p className="text-dark-text-secondary leading-relaxed">{audience.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="relative bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-3xl p-12 lg:p-16 border border-indigo-500/20 overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)] pointer-events-none"></div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.08),transparent_50%)] pointer-events-none"></div>

                                <div className="relative text-center space-y-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl">
                                        <Zap className="h-8 w-8 text-white" />
                                    </div>

                                    <div className="space-y-4">
                                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                                            Your Clients Deserve Better Than 2014
                                        </h2>
                                        <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                            Give them a modern web presence in minutes, not months. Try WebFaceLift free — no account required.
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <a
                                            href="https://webfacelift.app"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-violet-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
                                        >
                                            <span>Try WebFaceLift Free</span>
                                            <ArrowUpRight className="h-5 w-5" />
                                        </a>
                                        <Link
                                            href="/#contact"
                                            className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-indigo-500/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                                        >
                                            <span>Ask Us About It</span>
                                            <MessageSquare className="h-5 w-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default WebFaceLift;
