import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    DollarSign,
    Clock,
    CheckCircle,
    X,
    Download,
    TrendingUp,
    Calculator,
    Zap,
    Shield,
    Award,
    Target,
    ArrowRight,
    CreditCard,
    Smartphone,
    BarChart3,
    FileText,
    Users,
    AlertCircle
} from 'lucide-react';

const QuoteMatePricing: React.FC = () => {
    const pricingTiers = [
        {
            name: "Free Trial",
            price: "$0",
            period: "First 5 quotes",
            description: "Try QuoteMate risk-free before you commit",
            features: [
                "5 complete quotes free",
                "All features unlocked",
                "AI-powered estimation",
                "Real-time Bunnings pricing",
                "Professional PDF generation",
                "Offline functionality",
                "No credit card required",
                "No time limit on trial"
            ],
            cta: "Start Free Trial",
            highlighted: false,
            popular: false
        },
        {
            name: "Pro Monthly",
            price: "$15",
            period: "per month",
            description: "Perfect for tradies doing regular quotes",
            features: [
                "Unlimited quotes",
                "All features included",
                "AI-powered estimation",
                "Real-time Bunnings pricing",
                "Professional PDF quotes",
                "Your logo & branding",
                "Offline mode",
                "Quote tracking & history",
                "Customer database",
                "Priority support",
                "Cancel anytime"
            ],
            cta: "Start with Free Trial",
            highlighted: true,
            popular: true,
            savings: "Most popular - Best for active tradies"
        },
        {
            name: "Pro Yearly",
            price: "$144",
            period: "per year",
            description: "Save 20% with annual billing",
            features: [
                "Everything in Monthly",
                "Save $36 per year",
                "That's $12/month",
                "Unlimited quotes",
                "All features unlocked",
                "Priority support",
                "Annual billing only",
                "Cancel anytime"
            ],
            cta: "Start with Free Trial",
            highlighted: false,
            popular: false,
            savings: "Save 20% - Only $12/month"
        }
    ];

    const roiCalculations = [
        {
            scenario: "You do 5 quotes per month",
            oldTime: "2.5 hrs × 5 quotes = 12.5 hours/month",
            newTime: "5 min × 5 quotes = 25 minutes/month",
            timeSaved: "12 hours saved per month",
            labourValue: "12 hrs × $60/hr = $720 saved",
            cost: "$15/month",
            roi: "$705 saved vs $15 cost = 47x ROI",
            costPerQuote: "$3 per quote"
        },
        {
            scenario: "You do 10 quotes per month",
            oldTime: "2.5 hrs × 10 quotes = 25 hours/month",
            newTime: "5 min × 10 quotes = 50 minutes/month",
            timeSaved: "24 hours saved per month",
            labourValue: "24 hrs × $60/hr = $1,440 saved",
            cost: "$15/month",
            roi: "$1,425 saved vs $15 cost = 95x ROI",
            costPerQuote: "$1.50 per quote"
        },
        {
            scenario: "You do 20 quotes per month",
            oldTime: "2.5 hrs × 20 quotes = 50 hours/month",
            newTime: "5 min × 20 quotes = 1.7 hours/month",
            timeSaved: "48 hours saved per month",
            labourValue: "48 hrs × $60/hr = $2,880 saved",
            cost: "$15/month",
            roi: "$2,865 saved vs $15 cost = 191x ROI",
            costPerQuote: "$0.75 per quote"
        }
    ];

    const costComparisons = [
        {
            item: "QuoteMate Subscription",
            cost: "$15/month",
            frequency: "Monthly",
            yearly: "$180/year"
        },
        {
            item: "Bunnings Sausage Sizzle",
            cost: "$3.50",
            frequency: "Once",
            yearly: "4 sausages = 1 month subscription"
        },
        {
            item: "Tradie Coffee",
            cost: "$5.50",
            frequency: "Daily",
            yearly: "$2,000/year (3 days = 1 month)"
        },
        {
            item: "One Lost Quote (Outdated Price)",
            cost: "$150-500",
            frequency: "Once",
            yearly: "1 mistake = 10-33 months of QuoteMate"
        },
        {
            item: "Admin Person (3hrs/week)",
            cost: "$30/hr × 12hrs",
            frequency: "Monthly",
            yearly: "$4,320/year"
        },
        {
            item: "Your Time (2hrs saved/quote)",
            cost: "$60/hr × 2hrs",
            frequency: "Per quote",
            yearly: "$120 saved per quote"
        }
    ];

    const guarantees = [
        {
            icon: <Shield className="h-8 w-8 text-green-400" />,
            title: "30-Day Money-Back Guarantee",
            description: "Try QuoteMate for a month. If you don't save time, get a full refund. No questions asked."
        },
        {
            icon: <CreditCard className="h-8 w-8 text-green-400" />,
            title: "No Lock-In Contracts",
            description: "Cancel anytime. No cancellation fees, no penalties. Your subscription ends immediately."
        },
        {
            icon: <Smartphone className="h-8 w-8 text-green-400" />,
            title: "Keep Your Data",
            description: "Even if you cancel, your quotes stay on your phone. Export anytime, keep forever."
        },
        {
            icon: <Users className="h-8 w-8 text-green-400" />,
            title: "Australian Support",
            description: "Real Aussie support team who understand tradie work. Get help when you need it."
        }
    ];

    const commonObjections = [
        {
            objection: "\"I only do 2-3 quotes per week, is it worth it?\"",
            answer: "Yes! Even 2 quotes/week = 8 quotes/month. At 2 hours saved per quote, that's 16 hours saved for $15. That's basically 94 cents per hour to not do admin. Plus you'll likely win more jobs with professional quotes, so you might end up doing more quotes anyway."
        },
        {
            objection: "\"I'm pretty fast with Excel already...\"",
            answer: "That's great! But even if you're fast, you still need to: look up current prices, update your spreadsheet, format it nicely, save as PDF, and email it. QuoteMate does all that automatically. Most tradies who thought they were 'fast enough' were shocked at how much faster QuoteMate is."
        },
        {
            objection: "\"$15/month seems expensive for an app...\"",
            answer: "It's less than 2 Bunnings snags! But seriously: if QuoteMate saves you 2 hours on just ONE quote per month, that's $120 of your time (at $60/hr) for a $15 cost. That's an 8x return. Every other quote that month is pure time savings."
        },
        {
            objection: "\"I might not use it enough to justify the cost...\"",
            answer: "That's why we give you 5 free quotes to start! Try it on real jobs. See how much time it actually saves YOU. If you don't think it's worth it after 5 quotes, don't subscribe. But 97% of tradies who finish the trial immediately subscribe."
        },
        {
            objection: "\"Can't I just keep using pen & paper / Word / Excel?\"",
            answer: "Of course you can! QuoteMate isn't mandatory. But ask yourself: How much is your time worth? If you're spending 2-3 hours per quote, that's time you could spend on actual paid work, or with family. QuoteMate buys you back that time for less than a coffee."
        },
        {
            objection: "\"What if Bunnings prices change and quotes are wrong?\"",
            answer: "That's actually WHY you need QuoteMate! We fetch real-time prices, so your quotes are always current. With Excel or old price lists, you might quote based on outdated prices from 3 months ago and lose money on the job."
        }
    ];

    return (
        <>
            <Head>
                <title>QuoteMate Pricing - Free Trial + $15/month for Unlimited Quotes | See ROI Calculator</title>
                <meta name="description" content="QuoteMate pricing: First 5 quotes FREE, then $15/month for unlimited quotes. Save 12+ hours/month. ROI calculator shows you save $705+/month vs $15 cost. 30-day money-back guarantee. No lock-in contract. See cost comparison & savings." />
                <meta name="keywords" content="quotemate cost, quotemate pricing, tradie app price, quote app cost, how much is quotemate, tradie app subscription, quote builder pricing, roi calculator, cost vs savings, free trial" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://hansendev.com.au/projects/quotemate-pricing" />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://hansendev.com.au/projects/quotemate-pricing" />
                <meta property="og:title" content="QuoteMate Pricing - Try Free, Then $15/month" />
                <meta property="og:description" content="First 5 quotes free. Then $15/month for unlimited quotes. See ROI calculator showing you save $705+/month. 30-day money-back guarantee." />
                <meta property="og:locale" content="en_AU" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="QuoteMate Pricing - Try Free, Then $15/month" />
                <meta name="twitter:description" content="Save 12+ hours/month for $15. First 5 quotes free. See the ROI calculator." />

                {/* Article Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": "QuoteMate Pricing: Cost, Plans, and ROI for Australian Tradies",
                            "description": "Complete pricing guide for QuoteMate including free trial, monthly and yearly plans, ROI calculations, cost comparisons, and answers to common pricing questions. See how tradies save 12+ hours per month and achieve 47-191x ROI.",
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

                {/* Product Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Product",
                            "name": "QuoteMate Pro",
                            "description": "Professional quoting app for Australian tradies with AI estimation and real-time Bunnings pricing",
                            "brand": {
                                "@type": "Brand",
                                "name": "QuoteMate"
                            },
                            "offers": [
                                {
                                    "@type": "Offer",
                                    "price": "0",
                                    "priceCurrency": "AUD",
                                    "description": "First 5 quotes free",
                                    "availability": "https://schema.org/InStock"
                                },
                                {
                                    "@type": "Offer",
                                    "price": "15",
                                    "priceCurrency": "AUD",
                                    "priceSpecification": {
                                        "@type": "UnitPriceSpecification",
                                        "price": "15",
                                        "priceCurrency": "AUD",
                                        "unitText": "MONTH"
                                    },
                                    "description": "Pro Monthly - Unlimited quotes",
                                    "availability": "https://schema.org/InStock"
                                },
                                {
                                    "@type": "Offer",
                                    "price": "144",
                                    "priceCurrency": "AUD",
                                    "priceSpecification": {
                                        "@type": "UnitPriceSpecification",
                                        "price": "144",
                                        "priceCurrency": "AUD",
                                        "unitText": "YEAR"
                                    },
                                    "description": "Pro Yearly - Save 20%",
                                    "availability": "https://schema.org/InStock"
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
                                    "name": "How much does QuoteMate cost?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "QuoteMate offers your first 5 quotes completely free with no credit card required. After that, it's $15 per month for unlimited quotes, or $144 per year (saving 20%). Both plans include all features: AI estimation, real-time Bunnings pricing, professional PDFs, and offline functionality."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What is the ROI of using QuoteMate?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "If you do 5 quotes per month, QuoteMate saves you approximately 12 hours. At $60/hour labour rate, that's $720 in time savings vs $15/month cost - a 47x return on investment. For 10 quotes per month, you save 24 hours ($1,440) for a 95x ROI. Most tradies see their subscription pay for itself with just the first quote of the month."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is there a free trial for QuoteMate?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes! QuoteMate gives you your first 5 complete quotes absolutely free. All features are unlocked during the trial - AI estimation, Bunnings pricing, professional PDFs, everything. No credit card required to start. There's no time limit on the trial; you can take as long as you need to complete your 5 free quotes."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can I cancel QuoteMate anytime?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Absolutely. There are no lock-in contracts. Cancel anytime from within the app with one tap. No cancellation fees, no penalties. Your subscription ends immediately and you won't be charged again. Plus, we offer a 30-day money-back guarantee if you're not satisfied."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How does QuoteMate compare to Excel or manual quoting?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Manual quoting typically takes 2-3 hours per quote. QuoteMate reduces this to under 5 minutes. For $15/month, if you save 2 hours on just one quote, that's $120 in time savings (at $60/hr) vs $15 cost. Unlike Excel, QuoteMate provides real-time Bunnings pricing, AI-powered material calculations, automatic PDF generation, and works offline on your phone."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is $15/month worth it if I only do a few quotes?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Even if you only do 2 quotes per week (8 per month), saving 2 hours per quote equals 16 hours saved monthly. At $60/hour, that's $960 in time savings for a $15 cost - a 64x ROI. Plus, professional quotes help you win more jobs, so you'll likely do more quotes. And it's less than 2 Bunnings sausages!"
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
                                    "name": "Pricing",
                                    "item": "https://hansendev.com.au/projects/quotemate-pricing"
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
                                <DollarSign className="h-4 w-4" />
                                <span>Transparent Pricing</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Simple Pricing That<br />Makes Sense
                            </h1>

                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Try free, then <span className="text-brand-accent font-bold">$15/month</span> for unlimited quotes. That's less than 2 Bunnings sausages to save <span className="text-brand-accent font-bold">12+ hours per month</span>
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link
                                    href="/quote-tool"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Start Free Trial - 5 Quotes</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Tiers */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Choose Your Plan</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    All plans include every feature. Start free, upgrade when ready.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {pricingTiers.map((tier, index) => (
                                    <div
                                        key={index}
                                        className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 ${
                                            tier.highlighted
                                                ? 'shadow-lg shadow-brand-accent/10 lg:-translate-y-4'
                                                : ''
                                        }`}
                                    >
                                        {tier.popular && (
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                                <div className="bg-gradient-to-r from-brand-accent to-brand-primary text-white px-6 py-2 rounded-full text-sm font-bold">
                                                    MOST POPULAR
                                                </div>
                                            </div>
                                        )}

                                        <div className="text-center mb-8">
                                            <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                                            <div className="flex items-baseline justify-center gap-2 mb-4">
                                                <span className="text-5xl font-bold text-brand-accent">{tier.price}</span>
                                                <span className="text-dark-text-secondary">/{tier.period}</span>
                                            </div>
                                            <p className="text-dark-text-secondary text-sm">{tier.description}</p>
                                            {tier.savings && (
                                                <div className="mt-4">
                                                    <div className="inline-flex items-center gap-2 bg-green-400/20 text-green-400 px-4 py-2 rounded-lg text-sm font-bold">
                                                        <TrendingUp className="h-4 w-4" />
                                                        <span>{tier.savings}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-4 mb-8">
                                            {tier.features.map((feature, fidx) => (
                                                <div key={fidx} className="flex items-start gap-3">
                                                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                                                    <span className="text-dark-text-secondary text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href="/quote-tool"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`block text-center px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                                                tier.highlighted
                                                    ? 'btn-gradient text-white shadow-lg hover:shadow-brand-accent/25'
                                                    : 'bg-white/[0.04] hover:bg-white/[0.08] text-white '
                                            }`}
                                        >
                                            {tier.cta}
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 text-center">
                                <p className="text-dark-text-secondary">
                                    All plans include: <span className="text-white font-semibold">30-day money-back guarantee</span> • <span className="text-white font-semibold">Cancel anytime</span> • <span className="text-white font-semibold">Australian support</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ROI Calculator Section */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-4">
                                    <Calculator className="h-4 w-4" />
                                    <span>ROI Calculator</span>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">See Your Return on Investment</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Here's the actual math showing how QuoteMate pays for itself many times over
                                </p>
                            </div>

                            <div className="space-y-8">
                                {roiCalculations.map((calc, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 ">
                                        <div className="mb-8">
                                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{calc.scenario}</h3>
                                            <div className="h-1 w-20 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full"></div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                                            <div className="space-y-4">
                                                <div>
                                                    <div className="text-sm text-dark-text-secondary mb-1">Old way (manual/Excel):</div>
                                                    <div className="text-lg text-white font-semibold">{calc.oldTime}</div>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-dark-text-secondary mb-1">QuoteMate way:</div>
                                                    <div className="text-lg text-brand-accent font-semibold">{calc.newTime}</div>
                                                </div>
                                                <div className="pt-4 ">
                                                    <div className="text-sm text-dark-text-secondary mb-1">Time saved:</div>
                                                    <div className="text-xl text-white font-bold">{calc.timeSaved}</div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <div className="text-sm text-dark-text-secondary mb-1">Value of your time saved:</div>
                                                    <div className="text-lg text-white font-semibold">{calc.labourValue}</div>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-dark-text-secondary mb-1">QuoteMate cost:</div>
                                                    <div className="text-lg text-white font-semibold">{calc.cost}</div>
                                                </div>
                                                <div className="pt-4 ">
                                                    <div className="text-sm text-dark-text-secondary mb-1">Your ROI:</div>
                                                    <div className="text-xl text-brand-accent font-bold">{calc.roi}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-r from-brand-accent/20 to-brand-primary/20 rounded-xl p-6 ">
                                            <div className="flex items-center gap-4">
                                                <BarChart3 className="h-10 w-10 text-brand-accent flex-shrink-0" />
                                                <div>
                                                    <div className="text-white font-bold text-lg mb-1">Cost per quote: {calc.costPerQuote}</div>
                                                    <div className="text-dark-text-secondary text-sm">
                                                        That means every quote costs you less than a cup of coffee, while saving you 2+ hours of work.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-gradient-to-r from-green-400/10 to-brand-accent/10 rounded-2xl p-8 ">
                                <div className="flex items-start gap-4">
                                    <Target className="h-12 w-12 text-green-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4">The Bottom Line</h3>
                                        <p className="text-xl text-dark-text-secondary leading-relaxed mb-4">
                                            If you do just <span className="text-white font-bold">ONE quote in your first month</span>, QuoteMate has already paid for itself <span className="text-brand-accent font-bold">8 times over</span> (based on 2hrs saved × $60/hr = $120 vs $15 cost).
                                        </p>
                                        <p className="text-lg text-dark-text-secondary leading-relaxed">
                                            Every other quote that month is <span className="text-white font-bold">pure time savings</span>. Time you can spend on actual work, winning more jobs, or being with family.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cost Comparison Section */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Put the Cost in Perspective</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Here's what $15/month really means
                                </p>
                            </div>

                            <div className="space-y-4">
                                {costComparisons.map((comparison, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 ">
                                        <div className="grid md:grid-cols-4 gap-4 items-center">
                                            <div className="md:col-span-2">
                                                <div className="font-bold text-white mb-1">{comparison.item}</div>
                                                <div className="text-sm text-dark-text-secondary">{comparison.frequency}</div>
                                            </div>
                                            <div className="text-brand-accent font-bold text-xl">{comparison.cost}</div>
                                            <div className="text-dark-text-secondary text-sm">{comparison.yearly}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 grid md:grid-cols-2 gap-8">
                                <div className="bg-red-500/10 rounded-2xl p-8 ">
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <X className="h-8 w-8 text-red-400" />
                                        <span>Without QuoteMate</span>
                                    </h3>
                                    <ul className="space-y-3 text-dark-text-secondary">
                                        <li>• Spend 2-3 hours per quote</li>
                                        <li>• Risk outdated pricing (lose money)</li>
                                        <li>• Unprofessional Word/Excel quotes</li>
                                        <li>• Work evenings & weekends on quotes</li>
                                        <li>• Lose track of pending quotes</li>
                                        <li>• Can't quote on-site (lose jobs)</li>
                                    </ul>
                                    <div className="mt-6 pt-6 ">
                                        <div className="text-red-400 font-bold text-lg">Cost: Your time & lost opportunities</div>
                                    </div>
                                </div>

                                <div className="bg-brand-accent/10 rounded-2xl p-8 ">
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <CheckCircle className="h-8 w-8 text-brand-accent" />
                                        <span>With QuoteMate</span>
                                    </h3>
                                    <ul className="space-y-3 text-dark-text-secondary">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                                            <span>5 minutes per quote (12+ hrs saved/month)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                                            <span>Always current Bunnings prices</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                                            <span>Professional branded PDFs</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                                            <span>Free time for family & real work</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                                            <span>All quotes organized & tracked</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                                            <span>Quote on-site & close faster</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6 pt-6 ">
                                        <div className="text-brand-accent font-bold text-lg">Cost: $15/month (less than 2 snags)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Guarantees Section */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Try Risk-Free with Our Guarantees</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    We're confident you'll love QuoteMate. Here's our promise to you.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {guarantees.map((guarantee, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8   transition-all duration-500">
                                        <div className="flex items-start gap-6">
                                            <div className="w-16 h-16 bg-green-400/10 rounded-xl flex items-center justify-center  flex-shrink-0">
                                                {guarantee.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-3">{guarantee.title}</h3>
                                                <p className="text-dark-text-secondary leading-relaxed">{guarantee.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common Objections / FAQ */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Common Questions About Pricing</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Let's address the elephant in the room
                                </p>
                            </div>

                            <div className="space-y-6">
                                {commonObjections.map((item, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 ">
                                        <div className="flex items-start gap-4 mb-4">
                                            <AlertCircle className="h-6 w-6 text-brand-accent flex-shrink-0 mt-1" />
                                            <h3 className="text-xl font-bold text-white">{item.objection}</h3>
                                        </div>
                                        <div className="pl-10">
                                            <p className="text-dark-text-secondary leading-relaxed">{item.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Internal Links */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-white mb-4">Learn More About QuoteMate</h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <Link href="/projects/quotemate-features" className="bg-white/5 backdrop-blur-sm rounded-xl p-6   transition-all duration-300 group">
                                    <Zap className="h-8 w-8 text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-bold text-white mb-2">See All Features</h3>
                                    <p className="text-dark-text-secondary text-sm">AI estimation, Bunnings pricing, PDF quotes & more</p>
                                </Link>

                                <Link href="/projects/quotemate-for-tradies" className="bg-white/5 backdrop-blur-sm rounded-xl p-6   transition-all duration-300 group">
                                    <Users className="h-8 w-8 text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-bold text-white mb-2">For Your Trade</h3>
                                    <p className="text-dark-text-secondary text-sm">See how QuoteMate helps carpenters, fencers, landscapers</p>
                                </Link>

                                <Link href="/projects/quotemate-getting-started" className="bg-white/5 backdrop-blur-sm rounded-xl p-6   transition-all duration-300 group">
                                    <Download className="h-8 w-8 text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-bold text-white mb-2">Getting Started</h3>
                                    <p className="text-dark-text-secondary text-sm">Step-by-step guide to your first quote</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 ">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Start Your Free Trial Today
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                5 free quotes to see the time savings yourself. No credit card. No commitment. Just results.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <Link
                                    href="/quote-tool"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Download QuoteMate Free</span>
                                </Link>
                                <Link
                                    href="/projects/quotemate"
                                    className="inline-flex items-center justify-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 "
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark-text-secondary">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>5 Free Quotes</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>All Features Unlocked</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>No Credit Card</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>30-Day Money-Back</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default QuoteMatePricing;
