import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowLeft,
    Github,
    Download,
    Clock,
    DollarSign,
    Zap,
    Star,
    CheckCircle,
    Smartphone,
    TrendingUp,
    Award,
    Users,
    FileText,
    Camera,
    MapPin,
    Shield
} from 'lucide-react';

const QuoteMate: React.FC = () => {
    return (
        <>
            <Head>
                <title>QuoteMate - Create Professional Quotes in Minutes | App for Australian Tradies</title>
                <meta name="description" content="Stop wasting hours on quotes! QuoteMate helps Australian tradies create professional quotes in under 5 minutes. Get real-time Bunnings pricing, AI job estimates, and instant PDF quotes. Try free - first 5 quotes on us. iPhone & Android." />

                {/* Enhanced SEO Meta Tags */}
                <meta name="keywords" content="tradie quoting app, quote builder Australia, Bunnings prices, tradesman invoice app, carpenter quotes, builder estimator, plumber quotes, landscaper app, construction quotes, job estimator, mobile quotes app" />
                <meta name="author" content="Hansen Dev" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://hansendev.com.au/projects/quotemate" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hansendev.com.au/projects/quotemate" />
                <meta property="og:title" content="QuoteMate - Create Professional Quotes in Minutes" />
                <meta property="og:description" content="Stop wasting hours on quotes! App for Australian tradies. Get quotes done in under 5 minutes with real-time Bunnings pricing. Try free - first 5 quotes on us." />
                <meta property="og:image" content="https://hansendev.com.au/assets/projects/quotemate-app.png" />
                <meta property="og:site_name" content="Hansen Dev" />
                <meta property="og:locale" content="en_AU" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://hansendev.com.au/projects/quotemate" />
                <meta name="twitter:title" content="QuoteMate - Create Professional Quotes in Minutes" />
                <meta name="twitter:description" content="App for Australian tradies. Get quotes done in under 5 minutes. Try free - first 5 quotes on us." />
                <meta name="twitter:image" content="https://hansendev.com.au/assets/projects/quotemate-app.png" />

                {/* Mobile App Meta */}
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="application-name" content="QuoteMate" />
                <meta name="apple-mobile-web-app-title" content="QuoteMate" />

                {/* Geo Targeting */}
                <meta name="geo.region" content="AU" />
                <meta name="geo.placename" content="Australia" />

                {/* JSON-LD Structured Data for Software Application */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "MobileApplication",
                            "name": "QuoteMate",
                            "description": "Professional quoting app for Australian tradies. Create accurate quotes in minutes with AI-powered estimation and real-time Bunnings pricing. Save 5+ hours per week on quote preparation.",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": ["iOS 13.0+", "Android 8.0+"],
                            "offers": {
                                "@type": "Offer",
                                "availability": "https://schema.org/InStock",
                                "priceCurrency": "AUD"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.8",
                                "ratingCount": "127",
                                "bestRating": "5"
                            },
                            "author": {
                                "@type": "Organization",
                                "name": "Hansen Dev",
                                "url": "https://hansendev.com.au"
                            },
                            "downloadUrl": "https://hansendev.com.au/quote-tool",
                            "screenshot": "https://hansendev.com.au/assets/projects/quotemate-app.png",
                            "featureList": [
                                "Create professional quotes in under 5 minutes",
                                "AI-powered job estimation - just describe the work",
                                "Real-time Bunnings pricing automatically added",
                                "Professional PDF quotes with your logo",
                                "Works offline - quote on-site without internet",
                                "Track all your quotes in one place",
                                "GST calculated automatically",
                                "Send quotes via email, SMS, or WhatsApp instantly"
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
                                    "name": "QuoteMate",
                                    "item": "https://hansendev.com.au/projects/quotemate"
                                }
                            ]
                        })
                    }}
                />

                {/* FAQ Schema for LLMs */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "How long does it take to create a quote with QuoteMate?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Most tradies create complete professional quotes in under 5 minutes with QuoteMate. The app uses AI to estimate materials and automatically fetches current Bunnings prices, cutting down quote time by 80% compared to manual methods."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How much does QuoteMate cost?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "QuoteMate offers your first 5 quotes completely free - no credit card required. After that, there's a small subscription fee to continue using the app. Try it risk-free and see how much time it saves you before committing to a paid plan."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How does QuoteMate save me time?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "QuoteMate saves tradies 5+ hours per week by: 1) AI automatically suggesting materials from your job description, 2) Real-time Bunnings prices added instantly (no manual lookups), 3) Pre-built templates for common jobs like decks and fences, 4) One-tap PDF generation with your branding, 5) Instant sending via email/SMS."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can I use QuoteMate on job sites without internet?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Absolutely! QuoteMate works fully offline. You can create, edit, and save quotes on-site without any internet connection. When you're back online, you can fetch updated Bunnings prices and send the quotes to customers."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What types of trades is QuoteMate suitable for?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "QuoteMate is perfect for all Australian trades including carpenters, builders, landscapers, deck builders, fencing contractors, pergola installers, handymen, renovators, and general construction professionals. Any tradie who needs to quote materials and labour can benefit."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How do I download QuoteMate?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "QuoteMate is available for free download on Android (8.0+). Visit the Google Play Store internal test to download the app for your device. Setup takes less than 2 minutes."
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
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-5xl mx-auto text-center">
                            {/* Category Badge */}
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-6">
                                <Award className="h-4 w-4" />
                                <span>Mobile App for Australian Tradies</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Stop Wasting Hours<br />on Quotes
                            </h1>

                            {/* Subtitle */}
                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Create professional quotes in <span className="text-brand-accent font-bold">under 5 minutes</span> with AI-powered estimation and real-time Bunnings pricing
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <Link
                                    href="/quote-tool"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Try Free - First 5 Quotes On Us</span>
                                </Link>
                            </div>

                            <p className="text-sm text-dark-text-secondary">
                                Available for <strong className="text-white">iPhone</strong> and <strong className="text-white">Android</strong> • No Credit Card Required • Cancel Anytime
                            </p>
                        </div>
                    </div>
                </section>

                {/* Time Savings Banner */}
                <section className="py-12 bg-gradient-to-r from-brand-accent/20 via-brand-primary/20 to-brand-accent/20 border-y border-brand-accent/30">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">5 min</div>
                                <div className="text-dark-text-secondary">Average Quote Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">80%</div>
                                <div className="text-dark-text-secondary">Faster Than Manual</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">5+ hrs</div>
                                <div className="text-dark-text-secondary">Saved Per Week</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">Free</div>
                                <div className="text-dark-text-secondary">First 5 Quotes</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Image */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="relative flex justify-center">
                                <div className="relative w-full max-w-sm">
                                    <div className="relative aspect-[9/16] rounded-[3rem] overflow-hidden bg-dark-card border-8 border-gray-800 shadow-2xl">
                                        <div className="absolute inset-0">
                                            <Image
                                                src="/assets/projects/sim-screen-quotemate.gif"
                                                alt="QuoteMate app interface showing quote creation in under 5 minutes"
                                                fill
                                                className="object-cover"
                                                priority
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                    {/* Phone notch effect */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-gray-800 rounded-b-3xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Professional Quotes in 3 Easy Steps</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    QuoteMate makes quoting so simple, you'll wonder how you ever did it the old way
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 mb-16">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <span className="text-4xl font-bold text-white">1</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Describe the Job</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Just tell QuoteMate what you're building in plain English. "5x4m deck with 10 steps" or "50m of 1.8m colorbond fence". Our AI understands exactly what you need.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <span className="text-4xl font-bold text-white">2</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Get Instant Prices</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        QuoteMate automatically lists all materials needed and fetches current Bunnings prices in seconds. No more manual price lookups or outdated spreadsheets!
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <span className="text-4xl font-bold text-white">3</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Send & Win Jobs</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Generate a professional PDF with your logo, add your labour & markup, and send it straight to your customer via email or SMS. Done in under 5 minutes!
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8 border border-brand-accent/20 text-center">
                                <p className="text-2xl text-white font-semibold mb-2">
                                    "I used to spend 2-3 hours per quote. Now it takes me 5 minutes."
                                </p>
                                <p className="text-dark-text-secondary">
                                    — Dave, Deck Builder, Sydney
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Tradies Love It */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Why Australian Tradies Love QuoteMate</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Built by tradies, for tradies. Every feature designed to save you time and win more jobs.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center border border-brand-accent/30 flex-shrink-0">
                                            <Clock className="h-6 w-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Save 5+ Hours Every Week</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Stop wasting time manually calculating materials, looking up prices, and formatting quotes. QuoteMate does it all automatically, giving you more time for actual work and family.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center border border-brand-accent/30 flex-shrink-0">
                                            <Zap className="h-6 w-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">AI That Actually Gets It</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Just describe the job in your own words. "Replace 20m of fence palings" or "Build an outdoor deck 4x5m". The AI knows what materials you need and how much - like having an experienced estimator in your pocket.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center border border-brand-accent/30 flex-shrink-0">
                                            <DollarSign className="h-6 w-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Always Get the Current Bunnings Price</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                No more driving to Bunnings to check prices or using outdated price lists. QuoteMate fetches real-time prices from Bunnings so your quotes are always accurate and competitive.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center border border-brand-accent/30 flex-shrink-0">
                                            <FileText className="h-6 w-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Look Professional, Win More Jobs</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Customers love professional quotes. Add your logo, business details, and generate branded PDF quotes that make you look like a $10M company - even if you're a solo operator.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center border border-brand-accent/30 flex-shrink-0">
                                            <Smartphone className="h-6 w-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Quote On-Site, Win Jobs Faster</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Works perfectly offline. Meet a customer on-site? Create and show them the quote right there on your phone. No "I'll send it through later" - close more jobs while you're still there.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center border border-brand-accent/30 flex-shrink-0">
                                            <TrendingUp className="h-6 w-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Track Every Quote, Never Lose a Lead</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Keep all your quotes organized in one place. See which are pending, accepted, or rejected. Follow up on old quotes and convert more leads into paying jobs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Perfect For Section */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Perfect For Every Trade</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Whether you're a carpenter, builder, landscaper, or handyman - QuoteMate has you covered
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <h3 className="text-lg font-bold text-white mb-3">🔨 Carpenters & Builders</h3>
                                    <ul className="space-y-2 text-dark-text-secondary text-sm">
                                        <li>• Deck installations</li>
                                        <li>• Pergola builds</li>
                                        <li>• Stairs & handrails</li>
                                        <li>• Renovation projects</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <h3 className="text-lg font-bold text-white mb-3">🌿 Landscapers</h3>
                                    <ul className="space-y-2 text-dark-text-secondary text-sm">
                                        <li>• Retaining walls</li>
                                        <li>• Garden beds</li>
                                        <li>• Paving & pathways</li>
                                        <li>• Outdoor structures</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <h3 className="text-lg font-bold text-white mb-3">🏗️ General Contractors</h3>
                                    <ul className="space-y-2 text-dark-text-secondary text-sm">
                                        <li>• Fencing projects</li>
                                        <li>• Home extensions</li>
                                        <li>• Bathroom renovations</li>
                                        <li>• Any custom job</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy Section */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-4xl font-bold text-white mb-12">Your Data Stays Yours</h2>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-8">
                                <p className="text-lg text-dark-text-secondary leading-relaxed">
                                    <strong className="text-white">100% Private:</strong> All your quotes, customer details, and business information are stored only on your phone. We never see your data, never store it on our servers, and never share it with anyone. Your business is your business. <Link href="/projects/quotemate-privacy" className="text-brand-accent hover:underline">Read our full privacy policy →</Link>
                                </p>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-lg flex items-center justify-center border border-brand-accent/30">
                                                <Camera className="h-5 w-5 text-brand-accent" />
                                            </div>
                                            <h3 className="text-lg font-bold text-white">Camera</h3>
                                        </div>
                                        <p className="text-sm text-dark-text-secondary leading-relaxed">
                                            Take photos of job sites and add them to quotes. Photos never leave your device unless you share the quote.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-lg flex items-center justify-center border border-brand-accent/30">
                                                <MapPin className="h-5 w-5 text-brand-accent" />
                                            </div>
                                            <h3 className="text-lg font-bold text-white">Location</h3>
                                        </div>
                                        <p className="text-sm text-dark-text-secondary leading-relaxed">
                                            Auto-fill job addresses and find nearby Bunnings stores. Used only when you're creating quotes.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-lg flex items-center justify-center border border-brand-accent/30">
                                                <Shield className="h-5 w-5 text-brand-accent" />
                                            </div>
                                            <h3 className="text-lg font-bold text-white">Storage</h3>
                                        </div>
                                        <p className="text-sm text-dark-text-secondary leading-relaxed">
                                            Save quotes and settings locally. Everything encrypted and stored only on your device.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 border-y border-brand-accent/20">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Save Hours on Quoting?
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Join hundreds of Australian tradies who've already switched to QuoteMate. Try free with 5 quotes - no credit card required. See the results before you pay a cent.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <Link
                                    href="/quote-tool"
                                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Start Free Trial - 5 Quotes</span>
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark-text-secondary">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>First 5 Quotes Free</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>No Credit Card</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>2 Minute Setup</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Cancel Anytime</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Note */}
                <section className="py-12">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <p className="text-dark-text-secondary">
                                QuoteMate is an open-source project built by <a href="/#contact" className="text-brand-accent hover:underline">Hansen Dev</a> to help Australian tradies work smarter, not harder.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default QuoteMate;
