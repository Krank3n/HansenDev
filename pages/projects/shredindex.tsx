import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    Mountain,
    Briefcase,
    Globe,
    Search,
    Star,
    TrendingUp,
    Users,
    MapPin,
    Filter,
    Award,
    Sparkles,
    ExternalLink,
    ChevronRight,
    CheckCircle,
    Target,
    Database,
    Zap
} from 'lucide-react';

const ShredIndex: React.FC = () => {
    return (
        <>
            <Head>
                <title>ShredIndex - World's Largest Ski Resort Index & Job Board | 6,239+ Resorts in 94 Countries</title>
                <meta name="description" content="Discover the world's most comprehensive ski resort database. ShredIndex features 6,239+ ski resorts across 94 countries, advanced filtering, lifestyle categories, and the largest ski resort job board. Find your perfect mountain and dream job today!" />

                {/* Enhanced SEO Meta Tags */}
                <meta name="keywords" content="ski resort database, ski resort index, ski resort jobs, snowboard resorts, ski resort finder, best ski resorts, ski resort reviews, ski jobs board, snowboard jobs, mountain resort careers, ski resort comparison, luxury ski resorts, family ski resorts, powder ski resorts, extreme skiing, ski resort search, worldwide ski resorts, ski resort employment, resort job listings, ski industry careers" />
                <meta name="author" content="Hansen Dev" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://hansendev.com.au/projects/shredindex" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hansendev.com.au/projects/shredindex" />
                <meta property="og:title" content="ShredIndex - World's Largest Ski Resort Index & Job Board" />
                <meta property="og:description" content="Explore 6,239+ ski resorts across 94 countries. Advanced search, lifestyle filtering, professional reviews, and the biggest ski resort job board." />
                <meta property="og:image" content="https://hansendev.com.au/assets/projects/shredindex-home.png" />
                <meta property="og:site_name" content="Hansen Dev" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://hansendev.com.au/projects/shredindex" />
                <meta name="twitter:title" content="ShredIndex - 6,239+ Ski Resorts & Job Board" />
                <meta name="twitter:description" content="The world's most comprehensive ski resort database with lifestyle filtering and career opportunities." />
                <meta name="twitter:image" content="https://hansendev.com.au/assets/projects/shredindex-home.png" />

                {/* JSON-LD Structured Data for Web Application */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebApplication",
                            "name": "ShredIndex",
                            "description": "The world's largest ski resort database featuring 6,239+ resorts across 94 countries with advanced filtering, lifestyle categories, professional reviews, and comprehensive job listings.",
                            "applicationCategory": "TravelApplication",
                            "operatingSystem": "Web Browser",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.8",
                                "ratingCount": "5000",
                                "bestRating": "5"
                            },
                            "author": {
                                "@type": "Organization",
                                "name": "ShredIndex",
                                "url": "https://www.shredindex.com"
                            },
                            "url": "https://www.shredindex.com",
                            "screenshot": "https://hansendev.com.au/assets/projects/shredindex-home.png",
                            "featureList": [
                                "6,239+ ski resorts database across 94 countries",
                                "Advanced filtering by lifestyle categories",
                                "Family, Luxury, Extreme, Powder, and Affordable categories",
                                "Professional athlete reviews and insights",
                                "Comprehensive ski resort job board",
                                "Quick view resort details and comparisons",
                                "Highlights and lowlights for each resort",
                                "Global coverage from Americas to Asia",
                                "Career opportunities in ski industry",
                                "Real traveler tips and experiences"
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
                                    "name": "ShredIndex",
                                    "item": "https://hansendev.com.au/projects/shredindex"
                                }
                            ]
                        })
                    }}
                />

                {/* FAQ Schema for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "How many ski resorts are on ShredIndex?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ShredIndex features 6,239+ ski resorts across 94 countries, making it the world's largest and most comprehensive ski resort database. This includes resorts from the Americas, Europe, Asia, and Oceania."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Does ShredIndex have ski resort jobs?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes! ShredIndex hosts the largest ski resort job board online, featuring career opportunities at ski resorts worldwide. Find jobs ranging from ski instructors to resort management positions across all major ski destinations."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What types of ski resorts can I find on ShredIndex?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ShredIndex categorizes resorts by lifestyle including Family Ski Resorts, Luxury Ski Resorts, Extreme Ski Resorts, Powder Ski Resorts, Helicopter Ski Resorts, and Affordable Ski Resorts. Each resort includes detailed highlights, lowlights, and professional reviews."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is ShredIndex free to use?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes! ShredIndex is completely free to use. Browse all 6,239+ ski resorts, use advanced filtering, read professional reviews, and search job listings without any cost or subscription."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Who provides the ski resort reviews on ShredIndex?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ShredIndex features insights from professional athletes, experienced travelers, and ski industry experts. Each resort listing includes highlights, lowlights, and real tips to help you make informed decisions about your next ski destination."
                                    }
                                }
                            ]
                        })
                    }}
                />

                {/* Organization Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "ShredIndex",
                            "url": "https://www.shredindex.com",
                            "logo": "https://www.shredindex.com/logo.png",
                            "description": "The world's largest ski resort database and job board",
                            "sameAs": [
                                "https://github.com/underflip/shredindex-frontend"
                            ]
                        })
                    }}
                />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Back Navigation */}
                <div className="border-b border-white/10">
                    <div className="container-custom py-6">
                        <Link href="/#portfolio" className="inline-flex items-center gap-2 px-4 py-2 text-dark-text-secondary hover:text-brand-accent transition-colors duration-300">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Portfolio</span>
                        </Link>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-5xl mx-auto text-center">
                            {/* Category Badge */}
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-6">
                                <Mountain className="h-4 w-4" />
                                <span>World's Largest Ski Resort Database</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                ShredIndex
                            </h1>

                            {/* Subtitle */}
                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Discover your perfect mountain from <span className="text-brand-accent font-bold">6,239+ ski resorts</span> across <span className="text-brand-accent font-bold">94 countries</span> — plus the web's largest ski resort job board
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <a
                                    href="https://www.shredindex.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                                >
                                    <Mountain className="h-6 w-6" />
                                    <span>Explore Resorts</span>
                                    <ExternalLink className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.shredindex.com/jobs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                                >
                                    <Briefcase className="h-6 w-6" />
                                    <span>Browse Ski Jobs</span>
                                </a>
                            </div>

                            <p className="text-sm text-dark-text-secondary">
                                <strong className="text-white">100% Free</strong> • No Registration Required • Updated Daily
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Banner */}
                <section className="py-12 bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-blue-500/20 border-y border-blue-500/30">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">6,239+</div>
                                <div className="text-dark-text-secondary">Ski Resorts</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">94</div>
                                <div className="text-dark-text-secondary">Countries</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">16.7</div>
                                <div className="text-dark-text-secondary">Years to Ski All</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">#1</div>
                                <div className="text-dark-text-secondary">Ski Job Board</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Why Skiers & Snowboarders Love ShredIndex</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    The most comprehensive ski resort discovery platform on the planet
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                                        <Globe className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Global Coverage</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Access data on 6,239+ ski resorts across 94 countries. From the Alps to the Rockies, Hokkaido to Patagonia — we've got them all.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                                        <Filter className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Lifestyle Filtering</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Find resorts that match your style: Family-friendly, Luxury, Extreme, Powder, Helicopter, or Affordable. Filter by what matters to you.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                                        <Award className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Pro Athlete Insights</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Get recommendations from professional skiers, snowboarders, and experienced mountain travelers who know these resorts inside out.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                                        <Briefcase className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Largest Job Board</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        The web's biggest ski resort job board. Find your dream job at the mountains — from instructors to managers, chefs to hospitality.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                                        <Search className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Advanced Search</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Powerful filtering and quick-view features let you compare resorts instantly. Find exactly what you're looking for in seconds.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                                        <Star className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Highlights & Lowlights</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Honest reviews showing both the best features and potential drawbacks of each resort. Make informed decisions with real insights.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resort Categories */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Explore By Lifestyle</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Find ski resorts that match your adventure style
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <a
                                    href="https://www.shredindex.com/categories/family"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                                >
                                    <Users className="h-8 w-8 text-blue-400 mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Family Resorts</h3>
                                    <p className="text-dark-text-secondary mb-4">Kid-friendly slopes, ski schools, and family activities for unforgettable mountain memories</p>
                                    <div className="flex items-center gap-2 text-blue-400 font-semibold">
                                        <span>Explore Family Resorts</span>
                                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </a>

                                <a
                                    href="https://www.shredindex.com/categories/luxury"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                                >
                                    <Sparkles className="h-8 w-8 text-blue-400 mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Luxury Resorts</h3>
                                    <p className="text-dark-text-secondary mb-4">5-star hotels, gourmet dining, spa services, and premium mountain experiences</p>
                                    <div className="flex items-center gap-2 text-blue-400 font-semibold">
                                        <span>Explore Luxury Resorts</span>
                                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </a>

                                <a
                                    href="https://www.shredindex.com/categories/extreme"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                                >
                                    <Target className="h-8 w-8 text-blue-400 mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Extreme Resorts</h3>
                                    <p className="text-dark-text-secondary mb-4">Steep terrain, big cliffs, and challenging runs for expert skiers and riders</p>
                                    <div className="flex items-center gap-2 text-blue-400 font-semibold">
                                        <span>Explore Extreme Resorts</span>
                                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </a>

                                <a
                                    href="https://www.shredindex.com/categories/powder"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                                >
                                    <Mountain className="h-8 w-8 text-blue-400 mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Powder Resorts</h3>
                                    <p className="text-dark-text-secondary mb-4">Deep snow, tree runs, and legendary powder conditions for the ultimate experience</p>
                                    <div className="flex items-center gap-2 text-blue-400 font-semibold">
                                        <span>Explore Powder Resorts</span>
                                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </a>

                                <a
                                    href="https://www.shredindex.com/categories/helicopter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                                >
                                    <Zap className="h-8 w-8 text-blue-400 mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Heli-Ski Operations</h3>
                                    <p className="text-dark-text-secondary mb-4">Access remote terrain and untouched powder via helicopter for the ultimate adventure</p>
                                    <div className="flex items-center gap-2 text-blue-400 font-semibold">
                                        <span>Explore Heli-Ski Resorts</span>
                                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </a>

                                <a
                                    href="https://www.shredindex.com/categories/affordable"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                                >
                                    <CheckCircle className="h-8 w-8 text-blue-400 mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Affordable Resorts</h3>
                                    <p className="text-dark-text-secondary mb-4">Budget-friendly mountains with great value for money and excellent skiing</p>
                                    <div className="flex items-center gap-2 text-blue-400 font-semibold">
                                        <span>Explore Affordable Resorts</span>
                                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Board Section */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-3xl p-12 border border-blue-500/20">
                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                            <Briefcase className="h-4 w-4" />
                                            <span>Largest Ski Job Board Online</span>
                                        </div>
                                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                            Turn Your Passion Into a Career
                                        </h2>
                                        <p className="text-xl text-dark-text-secondary mb-8 leading-relaxed">
                                            Browse hundreds of ski resort job opportunities worldwide. From seasonal positions to full-time careers, find your dream job in the mountains.
                                        </p>
                                        <ul className="space-y-4 mb-8">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                                                <span className="text-white text-lg">Ski & snowboard instructors</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                                                <span className="text-white text-lg">Resort management & operations</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                                                <span className="text-white text-lg">Hospitality & accommodation staff</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                                                <span className="text-white text-lg">F&B, retail, and support roles</span>
                                            </li>
                                        </ul>
                                        <a
                                            href="https://www.shredindex.com/jobs"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                                        >
                                            <Briefcase className="h-6 w-6" />
                                            <span>Browse Ski Jobs</span>
                                            <ExternalLink className="h-5 w-5" />
                                        </a>
                                    </div>
                                    <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                                        <h3 className="text-2xl font-bold text-white mb-6">Popular Job Categories</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                                                <span className="text-white font-semibold">Ski Instructors</span>
                                                <ChevronRight className="h-5 w-5 text-blue-400" />
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                                                <span className="text-white font-semibold">Resort Operations</span>
                                                <ChevronRight className="h-5 w-5 text-blue-400" />
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                                                <span className="text-white font-semibold">Hospitality</span>
                                                <ChevronRight className="h-5 w-5 text-blue-400" />
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                                                <span className="text-white font-semibold">Lift Operations</span>
                                                <ChevronRight className="h-5 w-5 text-blue-400" />
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                                                <span className="text-white font-semibold">Food & Beverage</span>
                                                <ChevronRight className="h-5 w-5 text-blue-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Built With Modern Technology</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Powering the world's largest ski resort database
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4">Core Technologies</h3>
                                        <ul className="space-y-2 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span>Next.js & React for blazing-fast performance</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span>TypeScript for type-safe development</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span>GraphQL API for efficient data queries</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span>Tailwind CSS for responsive design</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                                        <ul className="space-y-2 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span>CMS-driven content management</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span>Automated testing with Jest & Cypress</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span>Google Cloud deployment pipeline</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span>SEO-optimized architecture</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-500/10 via-blue-600/10 to-blue-500/10 border-y border-blue-500/20">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Start Your Next Mountain Adventure
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Explore 6,239+ ski resorts, read professional reviews, and find your dream job in the mountains — all completely free
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <a
                                    href="https://www.shredindex.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                                >
                                    <Mountain className="h-6 w-6" />
                                    <span>Visit ShredIndex.com</span>
                                    <ExternalLink className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://github.com/underflip/shredindex-frontend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                                >
                                    <Database className="h-6 w-6" />
                                    <span>View on GitHub</span>
                                </a>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark-text-secondary">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-blue-400" />
                                    <span>100% Free Forever</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-blue-400" />
                                    <span>No Registration Required</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-blue-400" />
                                    <span>Updated Daily</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-blue-400" />
                                    <span>Mobile Friendly</span>
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
                                ShredIndex is the world's most comprehensive ski resort database and job board. Built by <a href="/#contact" className="text-blue-400 hover:underline">Hansen Dev</a> to help skiers and snowboarders discover their perfect mountain and career opportunities worldwide.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ShredIndex;
