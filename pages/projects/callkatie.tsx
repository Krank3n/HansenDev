import React, { useCallback, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowLeft,
    ArrowUpRight,
    Bot,
    Calendar,
    CheckCircle,
    Clock,
    Headphones,
    MessageSquare,
    Phone,
    PhoneCall,
    PhoneIncoming,
    Play,
    Settings2,
    Sparkles,
    Users,
    Volume2,
    Webhook,
    Zap,
} from 'lucide-react';

const KatieVideo: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
    const [showPoster, setShowPoster] = useState(true);

    const startVideo = useCallback((muted = true) => {
        const video = videoRef.current;
        if (!video) return;
        video.currentTime = 0;
        video.muted = muted;
        setIsMuted(muted);

        const onReady = () => {
            video.removeEventListener('canplay', onReady);
            setShowPoster(false);
            setIsPlaying(true);
        };

        if (video.readyState >= 3) {
            setShowPoster(false);
            video.play().then(() => setIsPlaying(true)).catch(() => setShowPoster(true));
        } else {
            video.addEventListener('canplay', onReady);
            video.play().catch(() => {
                video.removeEventListener('canplay', onReady);
                setShowPoster(true);
            });
        }
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el || hasAutoPlayed) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAutoPlayed(true);
                    observer.unobserve(el);
                    setTimeout(() => startVideo(true), 600);
                }
            },
            { threshold: 0, rootMargin: '200px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [hasAutoPlayed, startVideo]);

    const handleEnded = () => {
        setIsPlaying(false);
        setIsMuted(true);
        setShowPoster(true);
    };

    const handleClick = () => {
        const video = videoRef.current;
        if (!video) return;

        if (showPoster) {
            startVideo(false);
        } else if (isPlaying && isMuted) {
            video.muted = false;
            setIsMuted(false);
        } else if (isPlaying) {
            video.pause();
            setIsPlaying(false);
        } else {
            video.play().then(() => setIsPlaying(true));
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-sm mx-auto rounded-3xl overflow-hidden group cursor-pointer shadow-2xl shadow-pink-500/20"
            onClick={handleClick}
        >
            <div className="relative w-full aspect-[9/16] bg-dark-card">
                <video
                    ref={videoRef}
                    onEnded={handleEnded}
                    playsInline
                    preload="none"
                    aria-label="Meet Katie — your AI receptionist"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showPoster ? 'opacity-0' : 'opacity-100'}`}
                >
                    <source src="/assets/video/CallKatie.mp4" type="video/mp4" />
                </video>

                <Image
                    src="/assets/video/CallKatie-poster.webp"
                    alt="Call Katie AI receptionist"
                    fill
                    className={`object-cover transition-opacity duration-500 ${showPoster ? 'opacity-100' : 'opacity-0'}`}
                    sizes="(max-width: 768px) 100vw, 400px"
                    loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />

                {showPoster && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-500/90 backdrop-blur-sm shadow-lg shadow-pink-500/40 group-hover:scale-110 transition-transform duration-300">
                            <Play className="h-7 w-7 text-white ml-1" fill="white" />
                        </div>
                    </div>
                )}

                {!showPoster && isMuted && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-dark-bg/70 backdrop-blur-sm text-white/90 text-xs px-3 py-1.5 rounded-full animate-pulse">
                        <Volume2 className="h-3 w-3" />
                        <span>Tap for sound</span>
                    </div>
                )}
            </div>
        </div>
    );
};

const CallKatie: React.FC = () => {
    return (
        <>
            <Head>
                <title>Call Katie - AI Receptionist for Service Businesses | HansenDev</title>
                <meta name="description" content="Call Katie is an AI receptionist that answers your business calls 24/7, qualifies leads in natural conversation, and pushes structured jobs into QuoteMate, Jobber, HubSpot, or any webhook. Built for Australian trades and service businesses." />

                <meta name="keywords" content="AI receptionist, AI phone answering, virtual receptionist Australia, 24/7 call answering, lead qualification AI, AI receptionist for tradies, plumber receptionist, electrician receptionist, after hours call answering, callkatie" />
                <meta name="author" content="HansenDev PTY LTD" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://hansendev.com.au/projects/callkatie" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hansendev.com.au/projects/callkatie" />
                <meta property="og:title" content="Call Katie - AI Receptionist for Service Businesses" />
                <meta property="og:description" content="An AI receptionist that doesn't sleep, forget, or take holidays. Answers calls 24/7, qualifies leads, and routes structured jobs into your CRM." />
                <meta property="og:image" content="https://hansendev.com.au/assets/projects/callkatie-square.png" />
                <meta property="og:site_name" content="HansenDev" />
                <meta property="og:locale" content="en_AU" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://hansendev.com.au/projects/callkatie" />
                <meta name="twitter:title" content="Call Katie - AI Receptionist for Service Businesses" />
                <meta name="twitter:description" content="Answer every call, qualify every lead, and push structured jobs straight into your CRM. From $149/mo AUD." />
                <meta name="twitter:image" content="https://hansendev.com.au/assets/projects/callkatie-square.png" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "Call Katie",
                            "url": "https://callkatie.ai",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Web",
                            "description": "AI receptionist for service-based businesses. Answers calls 24/7, qualifies leads in natural conversation, and integrates with QuoteMate, Jobber, HubSpot, and custom webhooks.",
                            "offers": {
                                "@type": "Offer",
                                "availability": "https://schema.org/InStock",
                                "price": "149",
                                "priceCurrency": "AUD",
                                "description": "From $149/mo AUD + usage. 14-day free trial, no credit card required."
                            },
                            "author": {
                                "@type": "Organization",
                                "name": "HansenDev PTY LTD",
                                "url": "https://hansendev.com.au"
                            },
                            "featureList": [
                                "24/7 call answering with natural conversation",
                                "Automatic lead qualification (name, phone, address, work, urgency)",
                                "CRM integration with QuoteMate, Jobber, HubSpot, and custom webhooks",
                                "Customisable greeting, tone, services, and questioning flow",
                                "Configurable voice models from ElevenLabs and Azure",
                                "Full call transcripts and recordings in dashboard"
                            ]
                        })
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hansendev.com.au" },
                                { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://hansendev.com.au/#portfolio" },
                                { "@type": "ListItem", "position": 3, "name": "Call Katie", "item": "https://hansendev.com.au/projects/callkatie" }
                            ]
                        })
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "What is Call Katie?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Call Katie is an AI receptionist that answers your business phone 24/7. It holds a natural conversation with the caller, qualifies the lead by capturing name, phone, address, required work and urgency, and pushes the structured lead straight into your CRM."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Which CRMs does Call Katie integrate with?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Call Katie pushes qualified leads into QuoteMate, Jobber, HubSpot, and any custom webhook endpoint, so jobs land in the system you already use without manual data entry."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Who is Call Katie built for?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Service-based businesses in Australia — plumbers, electricians, roofers, builders, cleaners, pest control, dental and veterinary clinics, and real estate agencies — where every missed call is a lost lead."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How much does Call Katie cost?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Plans start from $149/mo AUD plus usage, with a 14-day free trial that doesn't require a credit card."
                                    }
                                }
                            ]
                        })
                    }}
                />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                <div>
                    <div className="container-custom py-6">
                        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-dark-text-secondary hover:text-brand-accent transition-colors duration-300">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Portfolio</span>
                        </Link>
                    </div>
                </div>

                {/* Hero */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.18),transparent_50%)] pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(244,63,94,0.12),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="mb-8">
                                <Image
                                    src="/assets/projects/callkatielogo.svg"
                                    alt="Call Katie logo"
                                    width={180}
                                    height={180}
                                    className="mx-auto rounded-2xl"
                                    priority
                                />
                            </div>

                            <div className="inline-flex items-center gap-2 text-pink-400 text-sm font-medium uppercase tracking-wider mb-6">
                                <Sparkles className="h-4 w-4" />
                                <span>AI Receptionist Platform</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Every Missed Call<br />
                                <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
                                    Is a Lost Lead. Not Anymore.
                                </span>
                            </h1>

                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Katie is an <span className="text-pink-400 font-bold">AI receptionist</span> that answers your business phone 24/7, qualifies leads in natural conversation, and pushes the job straight into your CRM.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <a
                                    href="https://callkatie.ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 hover:-translate-y-0.5"
                                >
                                    <PhoneCall className="h-6 w-6" />
                                    <span>Start 14-Day Free Trial</span>
                                </a>
                                <a
                                    href="#how-it-works"
                                    className="inline-flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                                >
                                    <span>See How It Works</span>
                                    <ArrowUpRight className="h-6 w-6" />
                                </a>
                            </div>

                            <p className="text-sm text-dark-text-secondary">
                                From <strong className="text-white">$149/mo AUD</strong> + usage • <strong className="text-white">No credit card</strong> for trial • Built by <strong className="text-white">HansenDev</strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-12 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-fuchsia-500/20">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
                                <div className="text-dark-text-secondary">Always Answering</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">0s</div>
                                <div className="text-dark-text-secondary">Hold Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">5+</div>
                                <div className="text-dark-text-secondary">CRM Integrations</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">$149</div>
                                <div className="text-dark-text-secondary">From / month AUD</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Meet Katie video */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                <div className="order-2 lg:order-1">
                                    <div className="inline-flex items-center gap-2 text-pink-400 text-sm font-medium uppercase tracking-wider mb-4">
                                        <Sparkles className="h-4 w-4" />
                                        <span>Meet Katie</span>
                                    </div>
                                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                        Hear Her Pick Up the Phone
                                    </h2>
                                    <p className="text-xl text-dark-text-secondary leading-relaxed mb-6">
                                        This is what your customers hear at 2am, on a Sunday, or when your team is on the tools. Natural cadence, real conversation, and a qualified lead in your CRM by the time the call ends.
                                    </p>
                                    <p className="text-base text-dark-text-secondary/80">
                                        Tap the video for sound.
                                    </p>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <KatieVideo />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section id="how-it-works" className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">From Ringing Phone to Booked Job</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    A natural conversation, a qualified lead, and a job in your CRM — all without lifting a finger
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 mb-16">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <PhoneIncoming className="h-9 w-9 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Katie Picks Up</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Calls land with Katie any hour of the day or night — including weekends, holidays, and the moments your team is on the tools.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <MessageSquare className="h-9 w-9 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Natural Conversation</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        No phone trees. No robotic prompts. Katie holds a real conversation, captures name, phone, address, required work, and urgency.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <Webhook className="h-9 w-9 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Lead Lands in Your CRM</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Structured leads push automatically to QuoteMate, Jobber, HubSpot, or a custom webhook — ready for your team to action.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 rounded-2xl p-8 text-center">
                                <p className="text-2xl text-white font-semibold mb-2">
                                    &quot;A receptionist that doesn&apos;t sleep, forget, or take holidays.&quot;
                                </p>
                                <p className="text-dark-text-secondary">
                                    — The Call Katie philosophy
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Built for Trades and Service Businesses</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Every feature is tuned for businesses where responsiveness directly drives revenue
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Clock className="h-6 w-6 text-pink-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Always-On Availability</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Katie answers nights, weekends, public holidays, and the busy hours your team can&apos;t. Customers reach a real conversation, not a voicemail dead end.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-rose-500/20 to-fuchsia-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="h-6 w-6 text-rose-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Lead Qualification Built In</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Captures name, phone, address, work required, and urgency — every time. No more deciphering scribbled notes or chasing missing details.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Webhook className="h-6 w-6 text-fuchsia-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">CRM &amp; Webhook Integrations</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Push structured leads to <Link href="/projects/quotemate" className="text-pink-400 hover:text-pink-300 transition-colors">QuoteMate</Link>, Jobber, HubSpot, or any custom webhook. The job lands in the system you already use.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Settings2 className="h-6 w-6 text-amber-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Fully Customisable Prompts</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Edit the greeting, tone, services offered, and questioning flow. Katie sounds like part of your business — because you wrote her script.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Headphones className="h-6 w-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Configurable Voices</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Pick from voice models powered by ElevenLabs or Azure. Natural cadence, no uncanny valley, and an accent that suits your customer base.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Bot className="h-6 w-6 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">Transcripts &amp; Recordings</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Every call comes with a full transcript and recording in the dashboard. Audit conversations, train your team, and keep a clean paper trail.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Perfect For */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Built For</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    Service businesses where every call is a job on the line
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {[
                                    'Plumbers',
                                    'Electricians',
                                    'Roofers',
                                    'Builders',
                                    'Cleaners',
                                    'Pest Control',
                                    'Dental Clinics',
                                    'Veterinary Clinics',
                                    'Real Estate Agencies',
                                    'Landscapers',
                                    'Painters',
                                    'Locksmiths',
                                ].map((audience) => (
                                    <div
                                        key={audience}
                                        className="bg-white/5 rounded-xl p-4 transition-all duration-300 flex items-center gap-3"
                                    >
                                        <Phone className="h-5 w-5 text-pink-400" />
                                        <span className="text-sm font-medium text-white">{audience}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why It Matters */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Why It Matters</h2>
                                <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                    The numbers behind a missed call
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        icon: <Users className="h-6 w-6 text-pink-400" />,
                                        title: 'Lost Leads Add Up',
                                        description: 'Service customers rarely leave voicemails — they call the next number. Every unanswered call is a job another business is winning.',
                                    },
                                    {
                                        icon: <Calendar className="h-6 w-6 text-rose-400" />,
                                        title: 'Out of Hours Is Prime Time',
                                        description: "Burst pipes, blackouts, and emergencies don't respect business hours. Katie picks up at 2am the same way she picks up at 2pm.",
                                    },
                                    {
                                        icon: <Zap className="h-6 w-6 text-fuchsia-400" />,
                                        title: 'Speed Wins Jobs',
                                        description: 'A qualified lead in your CRM five minutes after the call closes a deal. A pink slip on your desk Monday morning closes nothing.',
                                    },
                                ].map((item) => (
                                    <div key={item.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 text-center">
                                        <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-6">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                        <p className="text-dark-text-secondary leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="relative bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 rounded-3xl p-12 lg:p-16 overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.1),transparent_50%)] pointer-events-none"></div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.08),transparent_50%)] pointer-events-none"></div>

                                <div className="relative text-center space-y-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-fuchsia-500 rounded-2xl">
                                        <PhoneCall className="h-8 w-8 text-white" />
                                    </div>

                                    <div className="space-y-4">
                                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                                            Stop Letting the Phone Cost You Jobs
                                        </h2>
                                        <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                            Try Katie free for 14 days. No credit card. Plug her into your number and watch qualified leads land in your CRM.
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <a
                                            href="https://callkatie.ai"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 hover:-translate-y-0.5"
                                        >
                                            <span>Start Free Trial</span>
                                            <ArrowUpRight className="h-5 w-5" />
                                        </a>
                                        <Link
                                            href="/#contact"
                                            className="inline-flex items-center justify-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                                        >
                                            <span>Talk to HansenDev</span>
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

export default CallKatie;
