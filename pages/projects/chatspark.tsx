import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowLeft,
    Github,
    Download,
    MessageCircle,
    Heart,
    TrendingUp,
    Award,
    Users,
    Shield,
    Zap,
    Target,
    Brain,
    CheckCircle,
    BarChart3,
    Globe,
    Sparkles
} from 'lucide-react';

const ChatSpark: React.FC = () => {
    return (
        <>
            <Head>
                <title>ChatSpark - Build Confidence Through Conversations | Social Anxiety App</title>
                <meta name="description" content="Overcome social anxiety and build real-world confidence with ChatSpark. 145+ micro-missions, voice coaching, and progress tracking. Privacy-focused app to improve your social skills one conversation at a time." />

                {/* Enhanced SEO Meta Tags */}
                <meta name="keywords" content="social anxiety app, confidence building, conversation skills, social skills training, overcome shyness, communication practice, anxiety management, social confidence, micro-interactions, mental wellness" />
                <meta name="author" content="Hansen Dev" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://hansendev.com.au/projects/chatspark" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hansendev.com.au/projects/chatspark" />
                <meta property="og:title" content="ChatSpark - Build Confidence Through Conversations" />
                <meta property="og:description" content="Overcome social anxiety with 145+ conversation micro-missions. Build real-world confidence one small interaction at a time." />
                <meta property="og:image" content="https://hansendev.com.au/assets/projects/chatspark-app.png" />
                <meta property="og:site_name" content="Hansen Dev" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://hansendev.com.au/projects/chatspark" />
                <meta name="twitter:title" content="ChatSpark - Build Confidence Through Conversations" />
                <meta name="twitter:description" content="Overcome social anxiety with 145+ conversation micro-missions. Build real-world confidence." />
                <meta name="twitter:image" content="https://hansendev.com.au/assets/projects/chatspark-app.png" />

                {/* Mobile App Meta */}
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="application-name" content="ChatSpark" />
                <meta name="apple-mobile-web-app-title" content="ChatSpark" />

                {/* JSON-LD Structured Data for Software Application */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "MobileApplication",
                            "name": "ChatSpark",
                            "description": "Build social confidence through structured micro-interaction challenges. 145+ conversation missions across 7 difficulty levels with voice coaching and progress tracking.",
                            "applicationCategory": "HealthApplication",
                            "operatingSystem": ["iOS 13.0+", "Android 8.0+"],
                            "offers": {
                                "@type": "Offer",
                                "availability": "https://schema.org/InStock",
                                "price": "0",
                                "priceCurrency": "USD"
                            },
                            "author": {
                                "@type": "Organization",
                                "name": "Hansen Dev",
                                "url": "https://hansendev.com.au"
                            },
                            "downloadUrl": "https://github.com/Krank3n/ChatSpark",
                            "screenshot": "https://hansendev.com.au/assets/projects/chatspark-app.png",
                            "featureList": [
                                "145+ context-aware conversation micro-missions",
                                "7 difficulty levels from very easy to wild",
                                "Voice-guided coaching for every mission",
                                "Progress tracking with mood analytics",
                                "Adaptive difficulty system",
                                "100% offline with no data collection",
                                "Multi-language support (English and Spanish)",
                                "Export progress reports as PDF"
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
                                    "name": "ChatSpark",
                                    "item": "https://hansendev.com.au/projects/chatspark"
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
                                    "name": "How does ChatSpark help with social anxiety?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ChatSpark uses micro-missions - short 10-60 second interactions - to gradually build social confidence. By breaking down social interactions into small, manageable challenges across 7 difficulty levels, you can practice at your own pace and track your progress over time."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is ChatSpark free to use?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, ChatSpark is completely free and open-source. There are no subscriptions, in-app purchases, or hidden costs. The app is also privacy-focused with no ads or data collection."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Does ChatSpark work offline?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Absolutely! ChatSpark is offline-first, meaning all features work without an internet connection. Your progress is stored locally on your device, giving you complete privacy and accessibility anywhere."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What are micro-missions?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Micro-missions are short, structured social challenges lasting 10-60 seconds. Examples include asking for the time, complimenting someone's outfit, or ordering at a cafe. Each mission is designed to be achievable and helps build confidence gradually."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is my data private?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes! ChatSpark stores all data locally on your device. There's no backend server, no data collection, and no tracking. Your progress, mood entries, and personal information never leave your phone unless you choose to export a progress report."
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
                                <Heart className="h-4 w-4" />
                                <span>Social Confidence & Mental Wellness App</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Build Confidence<br />Through Conversations
                            </h1>

                            {/* Subtitle */}
                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Overcome social anxiety with <span className="text-brand-accent font-bold">145+ micro-missions</span> designed to help you grow one small interaction at a time
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <a
                                    href="https://github.com/Krank3n/ChatSpark"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Github className="h-6 w-6" />
                                    <span>View on GitHub</span>
                                </a>
                                <a
                                    href="https://github.com/Krank3n/ChatSpark/releases"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Download Free</span>
                                </a>
                            </div>

                            <p className="text-sm text-dark-text-secondary">
                                Available for <strong className="text-white">iPhone</strong> and <strong className="text-white">Android</strong> • No Ads • Privacy-Focused • Open Source
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Banner */}
                <section className="py-12 bg-gradient-to-r from-brand-accent/20 via-brand-primary/20 to-brand-accent/20 border-y border-brand-accent/30">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">145+</div>
                                <div className="text-dark-text-secondary">Conversation Missions</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">7</div>
                                <div className="text-dark-text-secondary">Difficulty Levels</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100%</div>
                                <div className="text-dark-text-secondary">Private & Offline</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">Open</div>
                                <div className="text-dark-text-secondary">Source</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Build Confidence in 3 Simple Steps</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    ChatSpark makes social growth approachable by breaking it down into small, achievable steps
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 mb-16">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <span className="text-4xl font-bold text-white">1</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Choose Your Mission</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Pick from 145+ context-aware missions based on where you are - cafes, parks, transit, shops. Start with "very easy" missions and progress at your own pace.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <span className="text-4xl font-bold text-white">2</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Get Voice Coaching</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Listen to voice-guided tips before each mission. Learn exactly what to say, how to approach people, and what to expect from the interaction.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <span className="text-4xl font-bold text-white">3</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Track Your Progress</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Complete missions, log your mood, and watch your confidence grow. View analytics, celebrate wins, and see how far you've come over time.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8 border border-brand-accent/20 text-center">
                                <p className="text-2xl text-white font-semibold mb-2">
                                    "Small conversations, big confidence gains"
                                </p>
                                <p className="text-dark-text-secondary">
                                    — ChatSpark Mission Philosophy
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why People Love It */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Why People Love ChatSpark</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Designed with empathy and backed by social psychology principles
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center border border-brand-accent/30 flex-shrink-0">
                                            <Target className="h-6 w-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Micro-Missions That Work</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Each mission takes just 10-60 seconds. No overwhelming challenges - just small, achievable interactions that build confidence gradually and sustainably.
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
                                            <h3 className="text-xl font-bold text-white mb-3">Adaptive Difficulty System</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Start where you're comfortable. Progress from "very easy" missions like asking for the time, all the way to "wild" challenges when you're ready. You control the pace.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center border border-brand-accent/30 flex-shrink-0">
                                            <MessageCircle className="h-6 w-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Voice-Guided Coaching</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Never feel unprepared. Every mission includes voice coaching to guide you through the interaction, offer encouragement, and help you succeed.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center border border-brand-accent/30 flex-shrink-0">
                                            <BarChart3 className="h-6 w-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Track Your Growth</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                See your progress with detailed mood analytics, completion stats, and exportable PDF reports. Celebrate every win and visualize your confidence journey.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center border border-brand-accent/30 flex-shrink-0">
                                            <Shield className="h-6 w-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">100% Private & Offline</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Your data stays on your device. No backend servers, no tracking, no data collection. Use ChatSpark anywhere with complete privacy and peace of mind.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center border border-brand-accent/30 flex-shrink-0">
                                            <Globe className="h-6 w-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Multi-Language Support</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Available in English and Spanish with more languages coming soon. Practice social confidence in your preferred language.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Examples */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Example Missions</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    From simple to challenging - progress at your own pace
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">VERY EASY</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">Ask for the Time</h3>
                                    <p className="text-dark-text-secondary text-sm">
                                        Approach someone and simply ask "Excuse me, do you have the time?" Perfect for absolute beginners.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full">EASY</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">Order at a Cafe</h3>
                                    <p className="text-dark-text-secondary text-sm">
                                        Order your coffee with a smile and add one extra question like "What's your most popular drink?"
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded-full">MEDIUM</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">Compliment a Stranger</h3>
                                    <p className="text-dark-text-secondary text-sm">
                                        Give someone a genuine compliment about their outfit, accessory, or something they're doing well.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full">HARD</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">Start a Park Conversation</h3>
                                    <p className="text-dark-text-secondary text-sm">
                                        Strike up a conversation with someone at a park. Ask about their day or comment on the weather.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full">VERY HARD</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">Ask to Join a Group</h3>
                                    <p className="text-dark-text-secondary text-sm">
                                        See people doing an activity? Ask if you can join them for a bit. Build connection through shared interests.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-full">WILD</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">Flash Mob Dance</h3>
                                    <p className="text-dark-text-secondary text-sm">
                                        Break out of your comfort zone completely! Start dancing in a public space and own your confidence.
                                    </p>
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
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Built with Modern Technology</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Open-source and built with React Native for iOS and Android
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4">Core Technologies</h3>
                                        <ul className="space-y-2 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                                <span>React Native with Expo</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                                <span>Zustand for state management</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                                <span>SQLite for local data storage</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                                <span>React Navigation</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                                        <ul className="space-y-2 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                                <span>expo-av for voice coaching</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                                <span>i18next for multi-language</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                                <span>react-native-chart-kit for analytics</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Sparkles className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                                <span>PDF export for progress reports</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy Section */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-4xl font-bold text-white mb-12">Your Privacy Matters</h2>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-8">
                                <p className="text-lg text-dark-text-secondary leading-relaxed">
                                    <strong className="text-white">100% Private:</strong> ChatSpark is built with privacy at its core. All your progress, mood entries, and personal data are stored locally on your device using SQLite. No backend servers, no data collection, no tracking. Your journey is yours alone. <Link href="/projects/chatspark-privacy" className="text-brand-accent hover:underline">Read our full privacy policy →</Link> | <Link href="/projects/chatspark-data-safety" className="text-brand-accent hover:underline">Data Safety disclosure →</Link>
                                </p>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-lg flex items-center justify-center border border-brand-accent/30">
                                                <Shield className="h-5 w-5 text-brand-accent" />
                                            </div>
                                            <h3 className="text-lg font-bold text-white">Local Storage</h3>
                                        </div>
                                        <p className="text-sm text-dark-text-secondary leading-relaxed">
                                            All data stored on your device with SQLite. Nothing uploaded to external servers.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-lg flex items-center justify-center border border-brand-accent/30">
                                                <Zap className="h-5 w-5 text-brand-accent" />
                                            </div>
                                            <h3 className="text-lg font-bold text-white">Offline First</h3>
                                        </div>
                                        <p className="text-sm text-dark-text-secondary leading-relaxed">
                                            Works completely offline. No internet required after download.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-lg flex items-center justify-center border border-brand-accent/30">
                                                <Brain className="h-5 w-5 text-brand-accent" />
                                            </div>
                                            <h3 className="text-lg font-bold text-white">No Tracking</h3>
                                        </div>
                                        <p className="text-sm text-dark-text-secondary leading-relaxed">
                                            Zero analytics, zero ads, zero tracking. Your progress is yours.
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
                                Ready to Build Your Confidence?
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Join people around the world who are overcoming social anxiety one small conversation at a time. Private, secure, and open-source.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <a
                                    href="https://github.com/Krank3n/ChatSpark"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Github className="h-6 w-6" />
                                    <span>View on GitHub</span>
                                </a>
                                <a
                                    href="https://github.com/Krank3n/ChatSpark/releases"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Download Free</span>
                                </a>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark-text-secondary">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>No Ads or Tracking</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>100% Private</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Works Offline</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Open Source</span>
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
                                ChatSpark is an open-source project built by <a href="/#contact" className="text-brand-accent hover:underline">Hansen Dev</a> to help people build real-world confidence through meaningful conversations.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ChatSpark;
