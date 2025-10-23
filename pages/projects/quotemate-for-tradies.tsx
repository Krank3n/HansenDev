import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    Hammer,
    TreePine,
    Fence,
    HardHat,
    Wrench,
    Home,
    Brush,
    Truck,
    Clock,
    DollarSign,
    CheckCircle,
    Download,
    Star,
    TrendingUp,
    Target,
    Zap,
    Award,
    Users,
    BarChart3,
    MessageSquare,
    Smartphone
} from 'lucide-react';

const QuoteMateForTradies: React.FC = () => {
    const tradeTypes = [
        {
            icon: <Hammer className="h-10 w-10 text-brand-accent" />,
            trade: "Carpenters & Deck Builders",
            subtitle: "Build decks, pergolas & outdoor structures faster",
            timeSaved: "Save 3 hours per deck quote",
            painPoints: [
                "Calculating timber lengths and quantities",
                "Looking up H3 treated pine prices",
                "Working out post spacing and foundations",
                "Pricing Merbau vs treated pine options"
            ],
            howHelps: [
                "AI calculates exact timber quantities for any deck size",
                "Real-time Bunnings pricing for all timber types",
                "Auto-calculates posts needed based on span",
                "Templates for 2.4m, 3.6m, 4.8m standard decks"
            ],
            example: {
                job: "5x4m Merbau deck with 10 steps",
                oldWay: "2.5 hours: Measure, calculate joists, bearers, decking boards, screws, posts, concrete",
                newWay: "4 minutes: Type description → AI lists everything → Get Bunnings prices → Add labour → Send quote"
            },
            testimonial: {
                quote: "I used to spend half a day on deck quotes. Now I quote 3 decks in my lunch break. Game changer.",
                name: "Dave M.",
                location: "Deck Builder, Sydney"
            }
        },
        {
            icon: <Fence className="h-10 w-10 text-brand-accent" />,
            trade: "Fencers",
            subtitle: "Quote Colorbond, timber & pool fencing in minutes",
            timeSaved: "Quote 50m Colorbond in 4 minutes",
            painPoints: [
                "Calculating post quantities and spacing",
                "Working out rails needed for different heights",
                "Pricing different Colorbond colours",
                "Concrete bag calculations for post holes"
            ],
            howHelps: [
                "Auto-calculates posts at 2.4m spacing",
                "Knows exact rails needed for 1.8m vs 2.1m fences",
                "Real-time Colorbond sheet pricing by colour",
                "Templates for common fence jobs (Colorbond, paling, picket)"
            ],
            example: {
                job: "50m of 1.8m Colorbond fence in Surfmist",
                oldWay: "90 minutes: Count posts, calculate sheets, price rails, fixings, concrete bags",
                newWay: "4 minutes: Enter length & height → Select Colorbond colour → AI calculates everything → Send quote"
            },
            testimonial: {
                quote: "My quotes look professional now and I can do them on-site. I win more jobs because customers get the quote immediately.",
                name: "Tony R.",
                location: "Fencing Contractor, Melbourne"
            }
        },
        {
            icon: <TreePine className="h-10 w-10 text-brand-accent" />,
            trade: "Landscapers",
            subtitle: "Quote retaining walls, garden beds & outdoor projects",
            timeSaved: "Save 2 hours per landscaping quote",
            painPoints: [
                "Calculating sleeper quantities for retaining walls",
                "Working out soil, mulch and aggregate volumes",
                "Pricing pavers and pathway materials",
                "Complex multi-section garden projects"
            ],
            howHelps: [
                "Calculates sleepers & posts for any wall height",
                "Auto-works out cubic metres of soil/mulch needed",
                "Paver calculators with 10% waste included",
                "Multi-section quotes for complex landscaping jobs"
            ],
            example: {
                job: "15m retaining wall (1.2m high) with garden bed",
                oldWay: "2 hours: Calculate sleepers, posts, galvanised coach screws, soil volume, plants",
                newWay: "6 minutes: Describe project → AI calculates materials → Add plants/extras → Professional quote done"
            },
            testimonial: {
                quote: "The material calculations alone save me hours. And customers love the professional quotes with photos of the site attached.",
                name: "Sarah K.",
                location: "Landscape Gardener, Brisbane"
            }
        },
        {
            icon: <HardHat className="h-10 w-10 text-brand-accent" />,
            trade: "General Builders",
            subtitle: "Quote extensions, renovations & construction projects",
            timeSaved: "Save 4+ hours per renovation quote",
            painPoints: [
                "Complex multi-trade quotes (framing, plumbing, electrical)",
                "Tracking hundreds of different materials",
                "Keeping quotes organized across multiple jobs",
                "Following up on pending quotes"
            ],
            howHelps: [
                "Multi-section quotes: demolition, framing, finishing",
                "Add any Bunnings product to custom quotes",
                "Track all quotes: pending, accepted, rejected",
                "Customer database for repeat clients"
            ],
            example: {
                job: "Bathroom renovation - full strip and rebuild",
                oldWay: "4+ hours: List tiles, fixtures, plumbing, electrical, waterproofing, labour for each trade",
                newWay: "15 minutes: Build custom quote with multiple sections → Add materials → Price out trades → Professional PDF"
            },
            testimonial: {
                quote: "I can finally keep track of all my quotes in one place. And when Bunnings prices go up, I can update quotes instantly.",
                name: "James P.",
                location: "Builder, Gold Coast"
            }
        },
        {
            icon: <Wrench className="h-10 w-10 text-brand-accent" />,
            trade: "Handymen & Maintenance",
            subtitle: "Quote repairs, odd jobs & small projects quickly",
            timeSaved: "Quote any job in under 5 minutes",
            painPoints: [
                "Wide variety of different small jobs",
                "Pricing one-off materials you don't stock",
                "Looking professional for small jobs",
                "Justifying labour for 'simple' jobs"
            ],
            howHelps: [
                "Custom quote builder for any job type",
                "Quick access to entire Bunnings catalog",
                "Professional quotes even for small jobs",
                "Itemized breakdown shows value clearly"
            ],
            example: {
                job: "Replace deck boards, fix fence palings, paint pergola",
                oldWay: "60 minutes: Price each item separately, write up in Word, format, send",
                newWay: "5 minutes: Add each repair as line item → Bunnings prices auto-added → Send professional quote"
            },
            testimonial: {
                quote: "Even for small jobs, my quotes look professional now. Customers take me more seriously and don't question my prices.",
                name: "Mark T.",
                location: "Handyman, Perth"
            }
        },
        {
            icon: <Home className="h-10 w-10 text-brand-accent" />,
            trade: "Pergola & Outdoor Builders",
            subtitle: "Quote pergolas, gazebos & outdoor structures",
            timeSaved: "Save 2.5 hours per pergola quote",
            painPoints: [
                "Complex post and beam calculations",
                "Roofing materials (Colorbond, polycarbonate, timber)",
                "Different sizes and custom designs",
                "Council-compliant specifications"
            ],
            howHelps: [
                "Templates for common pergola sizes (3x3m, 4x4m, 5x4m)",
                "Calculates posts, beams, rafters, brackets",
                "Prices roofing options: Colorbond vs poly vs timber",
                "Add custom specs and attach engineering drawings"
            ],
            example: {
                job: "4x5m pergola with Colorbond roof",
                oldWay: "2.5 hours: Calculate structural timber, brackets, roofing sheets, flashing, fixings",
                newWay: "6 minutes: Select pergola template → Adjust size → Choose roof type → AI calculates everything"
            },
            testimonial: {
                quote: "I do 3-4 pergola quotes a week. QuoteMate has given me back a full day every week.",
                name: "Chris W.",
                location: "Pergola Specialist, Adelaide"
            }
        }
    ];

    const commonBenefits = [
        {
            icon: <Clock className="h-8 w-8 text-green-400" />,
            title: "Get Time Back for Real Work",
            description: "Stop spending hours on admin. Use that time for actual jobs, family, or winning more work.",
            stat: "5+ hours saved per week"
        },
        {
            icon: <DollarSign className="h-8 w-8 text-green-400" />,
            title: "Never Underquote Again",
            description: "Real-time Bunnings pricing means you're always accurate and competitive. No more losing money on outdated prices.",
            stat: "Always current prices"
        },
        {
            icon: <Target className="h-8 w-8 text-green-400" />,
            title: "Win More Jobs Faster",
            description: "Professional quotes make you look established and trustworthy. Quote on-site and close deals before you leave.",
            stat: "Win 30% more quotes"
        },
        {
            icon: <BarChart3 className="h-8 w-8 text-green-400" />,
            title: "Track & Follow Up",
            description: "Never lose a lead. See all your quotes in one place, know which are pending, and follow up at the right time.",
            stat: "Convert more leads"
        }
    ];

    const realResults = [
        {
            metric: "3 hours",
            description: "Average time saved per deck quote",
            trade: "Carpenters"
        },
        {
            metric: "4 mins",
            description: "To quote 50m of Colorbond fencing",
            trade: "Fencers"
        },
        {
            metric: "2 hours",
            description: "Saved on landscaping project quotes",
            trade: "Landscapers"
        },
        {
            metric: "15 mins",
            description: "For complex bathroom renovation quote",
            trade: "Builders"
        },
        {
            metric: "30%",
            description: "More quotes won with professional PDFs",
            trade: "All Trades"
        },
        {
            metric: "$0",
            description: "Cost for first 5 quotes - try free",
            trade: "Everyone"
        }
    ];

    return (
        <>
            <Head>
                <title>QuoteMate for Tradies - Carpenter, Fencer, Landscaper, Builder Quoting App | Save Hours on Quotes</title>
                <meta name="description" content="QuoteMate is built specifically for Australian tradies. Carpenters save 3hrs per deck quote. Fencers quote 50m Colorbond in 4mins. Landscapers, builders, handymen - see how QuoteMate helps your trade. Real Bunnings pricing, AI calculations, professional PDFs. Try free." />
                <meta name="keywords" content="carpenter quoting app, fencer quote app, landscaper estimating software, builder quote app, deck builder app, quoting app for carpenters, fencing quote calculator, landscaping estimator, tradie app by trade, trade specific quoting, Bunnings price app" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://hansendev.com.au/projects/quotemate-for-tradies" />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://hansendev.com.au/projects/quotemate-for-tradies" />
                <meta property="og:title" content="QuoteMate for Tradies - See How It Helps Your Trade" />
                <meta property="og:description" content="Carpenters, fencers, landscapers, builders - see exactly how QuoteMate saves you hours on quotes with trade-specific features and real Bunnings pricing." />
                <meta property="og:locale" content="en_AU" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="QuoteMate for Tradies - See How It Helps Your Trade" />
                <meta name="twitter:description" content="Trade-specific quoting features for carpenters, fencers, landscapers & builders. Save hours with AI + Bunnings pricing." />

                {/* Article Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": "QuoteMate for Australian Tradies: Trade-Specific Quoting Solutions",
                            "description": "Comprehensive guide showing how QuoteMate helps different trades save time on quotes: carpenters, deck builders, fencers, landscapers, builders, handymen and more. Real examples, time savings, and testimonials from tradies across Australia.",
                            "author": {
                                "@type": "Organization",
                                "name": "Hansen Dev"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Hansen Dev",
                                "url": "https://hansendev.com.au"
                            },
                            "datePublished": "2025-01-15",
                            "dateModified": "2025-01-15"
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
                                    "name": "How does QuoteMate help deck builders and carpenters?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "QuoteMate helps deck builders save 3+ hours per quote by automatically calculating timber quantities, post spacing, and foundations for any deck size. It provides real-time Bunnings pricing for all timber types (H3 treated pine, Merbau, etc.) and includes pre-built templates for standard deck sizes (2.4m, 3.6m, 4.8m). Simply describe your deck project and QuoteMate lists everything needed."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can fencers quote Colorbond fencing quickly with QuoteMate?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes! Fencers can quote 50m of Colorbond fencing in just 4 minutes. QuoteMate automatically calculates post quantities at 2.4m spacing, determines rails needed based on fence height (1.8m vs 2.1m), provides real-time Colorbond pricing by colour, and calculates concrete bags needed for post holes. Templates are available for Colorbond, timber paling, and picket fences."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What features does QuoteMate have for landscapers?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "QuoteMate helps landscapers quote retaining walls, garden beds, and outdoor projects by calculating sleeper and post quantities for walls of any height, automatically working out cubic metres of soil/mulch/aggregate needed, including paver calculators with 10% waste factor, and supporting multi-section quotes for complex landscaping projects. This saves landscapers an average of 2 hours per quote."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is QuoteMate suitable for general builders and renovation work?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Absolutely. QuoteMate is ideal for builders doing renovations and extensions. It supports multi-section quotes (demolition, framing, finishing), allows adding any Bunnings product for custom quotes, helps track all quotes (pending, accepted, rejected), and includes a customer database for repeat clients. Builders save 4+ hours on complex renovation quotes."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Does QuoteMate work for handymen doing various small jobs?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes! QuoteMate is perfect for handymen. The custom quote builder works for any job type, provides quick access to the entire Bunnings catalog for one-off materials, creates professional quotes even for small jobs, and shows itemized breakdowns that clearly demonstrate value to customers. Handymen can quote any job in under 5 minutes."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What makes QuoteMate better than Excel for tradies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Unlike Excel, QuoteMate provides AI-powered material calculations that understand tradie language, real-time Bunnings pricing (no manual updates needed), pre-built templates for common jobs, professional branded PDF generation, offline functionality for on-site quoting, and automatic GST calculations. Most tradies find QuoteMate 5-10x faster than Excel spreadsheets."
                                    }
                                }
                            ]
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
                                    "item": "https://hansendev.com.au"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "QuoteMate",
                                    "item": "https://hansendev.com.au/projects/quotemate"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "For Tradies",
                                    "item": "https://hansendev.com.au/projects/quotemate-for-tradies"
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
                        <Link href="/projects/quotemate" className="inline-flex items-center gap-2 px-4 py-2 text-dark-text-secondary hover:text-brand-accent transition-colors duration-300">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to QuoteMate</span>
                        </Link>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-6">
                                <Users className="h-4 w-4" />
                                <span>Built for Every Trade</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                See How QuoteMate<br />Helps Your Trade
                            </h1>

                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Whether you're a <span className="text-brand-accent font-bold">carpenter</span>, <span className="text-brand-accent font-bold">fencer</span>, <span className="text-brand-accent font-bold">landscaper</span>, or <span className="text-brand-accent font-bold">builder</span> - QuoteMate saves you hours every week
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="/quote-tool"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Try Free - First 5 Quotes</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Real Results Section */}
                <section className="py-12 bg-gradient-to-r from-brand-accent/20 via-brand-primary/20 to-brand-accent/20 border-y border-brand-accent/30">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-white mb-2">Real Results from Real Tradies</h2>
                                <p className="text-dark-text-secondary">See what tradies are achieving with QuoteMate</p>
                            </div>
                            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                                {realResults.map((result, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-3xl lg:text-4xl font-bold text-brand-accent mb-1">{result.metric}</div>
                                        <div className="text-sm text-dark-text-secondary mb-1">{result.description}</div>
                                        <div className="text-xs text-white/60">{result.trade}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trade-Specific Sections */}
                {tradeTypes.map((trade, index) => (
                    <section key={index} className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                        <div className="container-custom">
                            <div className="max-w-6xl mx-auto">
                                {/* Trade Header */}
                                <div className="text-center mb-12">
                                    <div className="flex justify-center mb-6">
                                        <div className="w-20 h-20 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-2xl flex items-center justify-center border border-brand-accent/30">
                                            {trade.icon}
                                        </div>
                                    </div>
                                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{trade.trade}</h2>
                                    <p className="text-xl text-dark-text-secondary mb-4">{trade.subtitle}</p>
                                    <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-accent px-6 py-3 rounded-full border border-brand-accent/30">
                                        <Clock className="h-5 w-5" />
                                        <span className="font-bold">{trade.timeSaved}</span>
                                    </div>
                                </div>

                                {/* Pain Points vs How QuoteMate Helps */}
                                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                                    <div className="bg-red-500/10 rounded-2xl p-8 border border-red-500/20">
                                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                            <span className="text-red-400">❌</span>
                                            <span>Common Pain Points</span>
                                        </h3>
                                        <ul className="space-y-4">
                                            {trade.painPoints.map((point, idx) => (
                                                <li key={idx} className="flex gap-3 text-dark-text-secondary">
                                                    <span className="text-red-400 flex-shrink-0">•</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-brand-accent/10 rounded-2xl p-8 border border-brand-accent/20">
                                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                            <span className="text-brand-accent">✅</span>
                                            <span>How QuoteMate Helps</span>
                                        </h3>
                                        <ul className="space-y-4">
                                            {trade.howHelps.map((help, idx) => (
                                                <li key={idx} className="flex gap-3 text-dark-text-secondary">
                                                    <CheckCircle className="h-6 w-6 text-brand-accent flex-shrink-0 mt-0.5" />
                                                    <span>{help}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Real Example */}
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10 mb-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Award className="h-8 w-8 text-brand-accent" />
                                        <h3 className="text-2xl font-bold text-white">Real Example: {trade.example.job}</h3>
                                    </div>
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div>
                                            <div className="text-lg font-bold text-red-400 mb-3">Old Way:</div>
                                            <p className="text-dark-text-secondary leading-relaxed">{trade.example.oldWay}</p>
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-brand-accent mb-3">QuoteMate Way:</div>
                                            <p className="text-dark-text-secondary leading-relaxed">{trade.example.newWay}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial */}
                                <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8 border border-brand-accent/20">
                                    <div className="flex items-start gap-4">
                                        <MessageSquare className="h-10 w-10 text-brand-accent flex-shrink-0" />
                                        <div>
                                            <p className="text-xl text-white font-semibold mb-4 italic">"{trade.testimonial.quote}"</p>
                                            <div className="flex items-center gap-3">
                                                <div className="flex gap-1">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="h-5 w-5 text-brand-accent fill-brand-accent" />
                                                    ))}
                                                </div>
                                                <div className="text-dark-text-secondary">
                                                    <span className="font-bold text-white">{trade.testimonial.name}</span> — {trade.testimonial.location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

                {/* Common Benefits for All Trades */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/5 via-brand-accent/5 to-brand-primary/5">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Benefits for Every Trade</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    No matter what trade you're in, these are the benefits every tradie gets with QuoteMate
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {commonBenefits.map((benefit, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-500">
                                        <div className="flex items-start gap-6">
                                            <div className="w-16 h-16 bg-green-400/10 rounded-xl flex items-center justify-center border border-green-400/20 flex-shrink-0">
                                                {benefit.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                                                <p className="text-dark-text-secondary leading-relaxed mb-4">{benefit.description}</p>
                                                <div className="inline-flex items-center gap-2 bg-green-400/20 text-green-400 px-4 py-2 rounded-lg text-sm font-bold">
                                                    <TrendingUp className="h-4 w-4" />
                                                    <span>{benefit.stat}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* More Trades Section */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-white mb-6">QuoteMate Works for More Trades Too</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Any Australian tradie who quotes materials and labour can benefit
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                    <div className="text-4xl mb-3">🔧</div>
                                    <h3 className="text-lg font-bold text-white mb-2">Plumbers</h3>
                                    <p className="text-dark-text-secondary text-sm">Quote pipe, fixtures, labour for bathroom & kitchen jobs</p>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                    <div className="text-4xl mb-3">⚡</div>
                                    <h3 className="text-lg font-bold text-white mb-2">Electricians</h3>
                                    <p className="text-dark-text-secondary text-sm">Price out switchboards, wiring, lights, power points</p>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                    <div className="text-4xl mb-3">🎨</div>
                                    <h3 className="text-lg font-bold text-white mb-2">Painters</h3>
                                    <p className="text-dark-text-secondary text-sm">Calculate paint quantities, prep materials, labour hours</p>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                    <div className="text-4xl mb-3">🪟</div>
                                    <h3 className="text-lg font-bold text-white mb-2">Window Installers</h3>
                                    <p className="text-dark-text-secondary text-sm">Quote windows, frames, installation for any project</p>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                    <div className="text-4xl mb-3">🏠</div>
                                    <h3 className="text-lg font-bold text-white mb-2">Roofing Contractors</h3>
                                    <p className="text-dark-text-secondary text-sm">Calculate roofing materials, flashing, guttering</p>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                    <div className="text-4xl mb-3">🧱</div>
                                    <h3 className="text-lg font-bold text-white mb-2">Bricklayers</h3>
                                    <p className="text-dark-text-secondary text-sm">Quote bricks, mortar, labour for walls & structures</p>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                    <div className="text-4xl mb-3">🚪</div>
                                    <h3 className="text-lg font-bold text-white mb-2">Door Installers</h3>
                                    <p className="text-dark-text-secondary text-sm">Price doors, frames, hardware, installation time</p>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                    <div className="text-4xl mb-3">🔨</div>
                                    <h3 className="text-lg font-bold text-white mb-2">Demolition</h3>
                                    <p className="text-dark-text-secondary text-sm">Quote demo work, skip bins, labour, disposal</p>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                    <div className="text-4xl mb-3">🏗️</div>
                                    <h3 className="text-lg font-bold text-white mb-2">Concreters</h3>
                                    <p className="text-dark-text-secondary text-sm">Calculate concrete volumes, reinforcement, labour</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Tradies Choose QuoteMate */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Why Tradies Choose QuoteMate</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Built by tradies who understand your pain points
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                                    <div className="flex items-start gap-4">
                                        <Zap className="h-8 w-8 text-brand-accent flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Actually Understands Tradie Language</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Say "50m of 1.8 Colorbond" or "5x4 Merbau deck" and QuoteMate knows exactly what you mean. No corporate jargon, no confusing menus - just simple, natural descriptions that work the way you talk.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                                    <div className="flex items-start gap-4">
                                        <DollarSign className="h-8 w-8 text-brand-accent flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Always Know You're Competitive</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Real-time Bunnings pricing means you're never too high or too low. You know your quotes are based on today's actual prices, so you can be confident you'll win jobs and still make good margin.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                                    <div className="flex items-start gap-4">
                                        <CheckCircle className="h-8 w-8 text-brand-accent flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Professional Without the Overhead</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                You don't need an office admin person or expensive quoting software. QuoteMate makes you look like a big, professional company for less than the cost of a Bunnings sausage sizzle. Your customers can't tell if you're a solo operator or a 50-person firm.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                                    <div className="flex items-start gap-4">
                                        <Smartphone className="h-8 w-8 text-brand-accent flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Works On-Site, Not Just at the Desk</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Most tradies hate desk work. With QuoteMate, you can create quotes on your phone while you're still at the job site. Take photos, add them to the quote, and send it to the customer before you even get back in the ute. Close more jobs on the spot.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                                    <div className="flex items-start gap-4">
                                        <Clock className="h-8 w-8 text-brand-accent flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Get Your Evenings and Weekends Back</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                No more spending Sunday night doing quotes for the week ahead. No more staying up late pricing out tomorrow's job. QuoteMate is so fast, you can knock out quotes during smoko breaks. Spend your free time with family, not spreadsheets.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Internal Links Section */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-white mb-4">Learn More About QuoteMate</h2>
                                <p className="text-dark-text-secondary">Explore features, pricing, and how to get started</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <Link href="/projects/quotemate-features" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 group">
                                    <Zap className="h-8 w-8 text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-bold text-white mb-2">See All Features</h3>
                                    <p className="text-dark-text-secondary text-sm">AI estimation, Bunnings pricing, PDF quotes & more</p>
                                </Link>

                                <Link href="/projects/quotemate-pricing" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 group">
                                    <DollarSign className="h-8 w-8 text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-bold text-white mb-2">Pricing & ROI</h3>
                                    <p className="text-dark-text-secondary text-sm">See pricing plans and calculate your time savings</p>
                                </Link>

                                <Link href="/projects/quotemate-getting-started" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 group">
                                    <Download className="h-8 w-8 text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-bold text-white mb-2">Getting Started</h3>
                                    <p className="text-dark-text-secondary text-sm">Step-by-step guide to your first quote in 2 minutes</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 border-y border-brand-accent/20">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Try QuoteMate Free for Your Trade
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                No matter what trade you're in, QuoteMate will save you hours. Get your first 5 quotes completely free - no credit card required. See the results yourself.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <a
                                    href="/quote-tool"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Download QuoteMate Free</span>
                                </Link>
                                <Link
                                    href="/projects/quotemate"
                                    className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                                >
                                    <span>Learn More</span>
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark-text-secondary">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>First 5 Quotes Free</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>All Features Included</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>No Credit Card</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>2 Minute Setup</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default QuoteMateForTradies;
