import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    Zap,
    Bot,
    DollarSign,
    FileText,
    Clock,
    CheckCircle,
    Smartphone,
    Camera,
    Share2,
    BarChart3,
    Shield,
    Cloud,
    Download,
    Edit3,
    Calculator,
    TrendingUp
} from 'lucide-react';

const QuoteMateFeatures: React.FC = () => {
    const coreFeatures = [
        {
            icon: <Bot className="h-8 w-8 text-brand-accent" />,
            title: "AI-Powered Job Estimation",
            description: "Simply describe your job in plain English and watch AI magic happen",
            benefits: [
                "No more manual material calculations",
                "Understands tradie language naturally",
                "Learns from thousands of common jobs",
                "Suggests materials you might have missed"
            ],
            example: "Type: '5x4m deck with 10 steps' → AI lists all timber, screws, posts, concrete needed"
        },
        {
            icon: <DollarSign className="h-8 w-8 text-brand-accent" />,
            title: "Real-Time Bunnings Pricing",
            description: "Always get the latest prices without leaving your phone",
            benefits: [
                "Current prices fetched in seconds",
                "No more outdated price lists",
                "Never underquote again",
                "Includes GST automatically"
            ],
            example: "90x45mm H3 Treated Pine 2.4m → $18.50 (updated today)"
        },
        {
            icon: <FileText className="h-8 w-8 text-brand-accent" />,
            title: "Professional PDF Quotes",
            description: "Generate beautiful, branded quotes that win you more jobs",
            benefits: [
                "Add your logo and business details",
                "Customizable quote templates",
                "Itemized material breakdowns",
                "Professional formatting automatically"
            ],
            example: "One tap creates a 2-page PDF ready to send to customers"
        },
        {
            icon: <Clock className="h-8 w-8 text-brand-accent" />,
            title: "Smart Job Templates",
            description: "Pre-built templates for common tradie jobs",
            benefits: [
                "Deck builders: 2.4m, 3.6m, 4.8m deck options",
                "Fencers: Colorbond, timber paling, picket",
                "Landscapers: Retaining walls, garden beds",
                "Save your own custom templates"
            ],
            example: "Select '3.6m Merbau Deck' template → 80% of quote done instantly"
        },
        {
            icon: <Calculator className="h-8 w-8 text-brand-accent" />,
            title: "Automatic Material Calculations",
            description: "Never worry about quantities again",
            benefits: [
                "Calculates post spacing automatically",
                "Adds 10% waste factor",
                "Suggests fasteners & adhesives",
                "Rounds up to standard pack sizes"
            ],
            example: "15m fence → Auto calculates 6 posts, rails, palings, cement bags needed"
        },
        {
            icon: <Edit3 className="h-8 w-8 text-brand-accent" />,
            title: "Custom Job Builder",
            description: "Create completely custom quotes for unique projects",
            benefits: [
                "Add any material from Bunnings catalog",
                "Manual price override if needed",
                "Multiple job sections (demolition, build, finish)",
                "Attach site photos to quotes"
            ],
            example: "Build a custom bathroom reno with tiling, plumbing, electrical sections"
        }
    ];

    const productivityFeatures = [
        {
            icon: <Smartphone className="h-6 w-6 text-green-400" />,
            title: "Works Offline",
            description: "Create quotes on-site without internet",
            detail: "Full functionality offline. Sync prices when back online."
        },
        {
            icon: <Camera className="h-6 w-6 text-green-400" />,
            title: "Job Site Photos",
            description: "Attach photos directly to quotes",
            detail: "Take photos of the site and add them to your quote for customer reference."
        },
        {
            icon: <Share2 className="h-6 w-6 text-green-400" />,
            title: "Instant Sending",
            description: "Email, SMS, or WhatsApp quotes",
            detail: "Send quotes while still on-site. No 'I'll send it later' excuses."
        },
        {
            icon: <BarChart3 className="h-6 w-6 text-green-400" />,
            title: "Quote Tracking",
            description: "See all quotes in one place",
            detail: "Pending, accepted, rejected - never lose track of a lead again."
        },
        {
            icon: <Cloud className="h-6 w-6 text-green-400" />,
            title: "Cloud Backup",
            description: "Never lose your quotes",
            detail: "Automatic backup to your private cloud storage (optional)."
        },
        {
            icon: <Shield className="h-6 w-6 text-green-400" />,
            title: "Customer Database",
            description: "Save customer details",
            detail: "Re-use customer info for future quotes. Build your client list."
        }
    ];

    return (
        <>
            <Head>
                <title>QuoteMate Features - Complete Guide to Tradie Quoting App Features | AI, Bunnings Pricing & More</title>
                <meta name="description" content="Explore all QuoteMate features: AI job estimation, real-time Bunnings pricing, professional PDF quotes, offline mode, job templates & more. See how QuoteMate saves tradies 5+ hours per week on quotes." />
                <meta name="keywords" content="quotemate features, tradie app features, ai quoting, bunnings price integration, quote builder features, tradie estimating software, professional quote app, construction estimating app, builder quote software" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://hansendev.com.au/projects/quotemate-features" />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://hansendev.com.au/projects/quotemate-features" />
                <meta property="og:title" content="QuoteMate Features - Complete Feature Guide for Tradies" />
                <meta property="og:description" content="AI estimation, real-time Bunnings pricing, PDF quotes & more. See all the features that save tradies 5+ hours per week." />
                <meta property="og:locale" content="en_AU" />

                {/* Article Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": "QuoteMate Features: Complete Guide to Professional Tradie Quoting",
                            "description": "Comprehensive guide to QuoteMate's features including AI-powered estimation, real-time Bunnings pricing, professional PDF generation, and productivity tools designed specifically for Australian tradies.",
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
                                    "name": "What is QuoteMate's AI-powered estimation feature?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "QuoteMate's AI estimation allows you to describe jobs in plain English (like '5x4m deck with 10 steps'), and the AI automatically calculates all required materials, quantities, and suggests items you might have missed. It understands tradie language naturally and learns from thousands of common construction jobs."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How does real-time Bunnings pricing work in QuoteMate?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "QuoteMate fetches current Bunnings prices in real-time from their product catalog. When you add materials to your quote, the app retrieves today's prices automatically, ensuring your quotes are always accurate and competitive. No more outdated price lists or manual lookups required."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can QuoteMate work without internet connection?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes! QuoteMate is fully functional offline. You can create, edit, and save quotes on job sites without internet. When you're back online, you can sync updated Bunnings prices and send quotes to customers. This makes it perfect for remote job sites."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What job templates does QuoteMate include?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "QuoteMate includes pre-built templates for common jobs: various deck sizes (2.4m, 3.6m, 4.8m), different fence types (Colorbond, timber paling, picket), retaining walls, pergolas, and more. You can also create and save your own custom templates for jobs you do frequently."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How professional do QuoteMate PDFs look?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "QuoteMate generates professional, branded PDF quotes with your logo, business details, itemized material breakdowns, labor costs, and professional formatting. The quotes look like they came from a $10M company, helping you win more jobs even as a solo operator."
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
                                    "name": "Features",
                                    "item": "https://hansendev.com.au/projects/quotemate-features"
                                }
                            ]
                        })
                    }}
                />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Back Navigation */}
                <div className="">
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
                                <Zap className="h-4 w-4" />
                                <span>Complete Feature Guide</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Every Feature Built to<br />Save You Time
                            </h1>

                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Discover how QuoteMate's powerful features help tradies create professional quotes in <span className="text-brand-accent font-bold">under 5 minutes</span>
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link
                                    href="https://quotemateapp.au/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Try Free for 7 Days</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Features */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Core Features That Matter</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    The features that actually save you time and win you more jobs
                                </p>
                            </div>

                            <div className="space-y-12">
                                {coreFeatures.map((feature, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12   transition-all duration-500">
                                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                                            <div>
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="w-16 h-16 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-2xl flex items-center justify-center ">
                                                        {feature.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                                                    </div>
                                                </div>
                                                <p className="text-xl text-dark-text-secondary mb-8 leading-relaxed">
                                                    {feature.description}
                                                </p>
                                                <div className="bg-brand-accent/10 rounded-xl p-6  mb-6">
                                                    <p className="text-sm font-semibold text-brand-accent mb-2">EXAMPLE:</p>
                                                    <p className="text-white">{feature.example}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-bold text-white mb-4">Key Benefits:</h4>
                                                {feature.benefits.map((benefit, bidx) => (
                                                    <div key={bidx} className="flex items-start gap-3">
                                                        <CheckCircle className="h-6 w-6 text-brand-accent flex-shrink-0 mt-0.5" />
                                                        <span className="text-dark-text-secondary text-lg">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Productivity Features */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Productivity Features</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Extra tools that make your life easier
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {productivityFeatures.map((feature, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8   transition-all duration-500">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-green-400/10 rounded-xl flex items-center justify-center ">
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                                        </div>
                                        <p className="text-dark-text-secondary mb-3 leading-relaxed">{feature.description}</p>
                                        <p className="text-sm text-dark-text-secondary/80 italic">{feature.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Time Savings Breakdown */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">How QuoteMate Saves You 5+ Hours Per Week</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Here's exactly where the time savings come from
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-red-500/10 rounded-2xl p-8 ">
                                    <h3 className="text-2xl font-bold text-white mb-6">❌ Old Way (2-3 hours per quote)</h3>
                                    <ul className="space-y-4 text-dark-text-secondary">
                                        <li className="flex gap-3">
                                            <span className="text-red-400">•</span>
                                            <span>45 min: Manually calculating materials & quantities</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-red-400">•</span>
                                            <span>30 min: Looking up Bunnings prices or driving to store</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-red-400">•</span>
                                            <span>30 min: Creating quote in Word or Excel</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-red-400">•</span>
                                            <span>15 min: Formatting and fixing layout</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-red-400">•</span>
                                            <span>15 min: Sending quote and following up</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-brand-accent/10 rounded-2xl p-8 ">
                                    <h3 className="text-2xl font-bold text-white mb-6">✅ QuoteMate Way (Under 5 minutes)</h3>
                                    <ul className="space-y-4 text-dark-text-secondary">
                                        <li className="flex gap-3">
                                            <span className="text-brand-accent">•</span>
                                            <span>1 min: AI calculates materials from your description</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-brand-accent">•</span>
                                            <span>30 sec: Bunnings prices auto-fetched</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-brand-accent">•</span>
                                            <span>1 min: Add your labour & markup</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-brand-accent">•</span>
                                            <span>30 sec: Professional PDF generated</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-brand-accent">•</span>
                                            <span>30 sec: Send via email/SMS - done!</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6 pt-6 ">
                                        <p className="text-brand-accent font-bold text-xl">Total saved: 2+ hours per quote</p>
                                        <p className="text-dark-text-secondary text-sm mt-2">Do 3 quotes/week = Save 6+ hours weekly!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 ">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Try Every Feature Free
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Try free for 7 days with unlimited quotes - no credit card required. Experience how QuoteMate transforms your quoting process.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <Link
                                    href="https://quotemateapp.au/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Download QuoteMate Free</span>
                                </Link>
                                <Link
                                    href="/projects/quotemate"
                                    className="inline-flex items-center justify-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                                >
                                    <span>Learn More About QuoteMate</span>
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark-text-secondary">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>7-Day Free Trial</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>All Features Included</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>No Credit Card</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default QuoteMateFeatures;
