import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Section from './common/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Shield, Rocket, Settings, Play, Volume2, MapPin } from 'lucide-react';
import { trackVideoPlay } from '../lib/gtag';

const differentiators = [
    {
        icon: <Shield className="h-5 w-5" />,
        title: 'Bank-level security',
        description: 'Customer data, payment gateways and client portals built to the standards required by major financial institutions.',
    },
    {
        icon: <Rocket className="h-5 w-5" />,
        title: 'Zero-crash scalability',
        description: 'Infrastructure that handles intense traffic, so your site never drops out during a massive FNQ tourism surge.',
    },
    {
        icon: <Settings className="h-5 w-5" />,
        title: 'True custom logic',
        description: "We don't just glue apps together. If your business needs a purpose-built piece of software, we code it from the ground up.",
    },
];

const MeetFounder: React.FC = () => {
    const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
    const { ref: diffRef, isVisible: diffVisible } = useScrollReveal();

    const videoRef = useRef<HTMLVideoElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
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
        const el = videoContainerRef.current;
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

    const handleVideoEnded = () => {
        setIsPlaying(false);
        setIsMuted(true);
        setShowPoster(true);
    };

    const handleClick = () => {
        const video = videoRef.current;
        if (!video) return;
        if (showPoster) {
            trackVideoPlay('founder-intro');
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
        <Section
            id="founder"
            eyebrow="Meet the founder"
            title="Big-tech engineering. Local FNQ focus."
            subtitle="The same calibre of software that runs Australia's biggest financial platforms, built for businesses in Cairns and the Far North."
            align="left"
            className="relative overflow-hidden"
        >
            <div
                ref={contentRef}
                className={`grid items-start gap-10 lg:grid-cols-12 lg:gap-16 transition-all duration-700 ${
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
                {/* Video / Photo */}
                <div className="lg:col-span-5 lg:sticky lg:top-28">
                    <div
                        ref={videoContainerRef}
                        className="glass-card hover-glow group relative cursor-pointer overflow-hidden !rounded-3xl !p-0"
                        onClick={handleClick}
                    >
                        <div className="relative aspect-[4/5] w-full">
                            <video
                                ref={videoRef}
                                onEnded={handleVideoEnded}
                                playsInline
                                preload="none"
                                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${showPoster ? 'opacity-0' : 'opacity-100'}`}
                            >
                                <source src="/assets/video/TomSays-compressed.mp4" type="video/mp4" />
                            </video>

                            <Image
                                src="/assets/thomas-hansen-founder.webp"
                                alt="Thomas Hansen, Founder and Lead Developer of HansenDev, based in Kamerunga, Cairns"
                                fill
                                className={`object-cover transition-all duration-700 group-hover:scale-[1.03] ${showPoster ? 'opacity-100' : 'opacity-0'}`}
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/10 to-transparent" />

                            {showPoster && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110">
                                        <Play className="ml-1 h-6 w-6 text-white" fill="white" />
                                    </div>
                                </div>
                            )}

                            {!showPoster && isMuted && (
                                <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-dark-bg/70 px-3 py-1.5 text-xs text-white/90 backdrop-blur-sm animate-pulse">
                                    <Volume2 className="h-3 w-3" />
                                    <span>Tap for sound</span>
                                </div>
                            )}

                            <div className="absolute inset-x-0 bottom-0 p-5">
                                <p className="font-display text-lg font-semibold text-white">Thomas Hansen</p>
                                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-dark-text-secondary">
                                    <MapPin className="h-3 w-3 text-brand-accent" />
                                    Founder &amp; Lead Developer &middot; Kamerunga, Cairns
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Story */}
                <div className="lg:col-span-7">
                    <p className="font-display text-2xl font-semibold leading-snug text-white sm:text-[1.7rem]">
                        &ldquo;Local businesses shouldn&apos;t have to choose between a basic template site and a faceless agency down south that charges a fortune.&rdquo;
                    </p>

                    <div className="mt-8 space-y-5 text-[1.03rem] leading-relaxed text-dark-text-secondary">
                        <p>
                            Hi, I&apos;m <strong className="font-semibold text-white">Thomas Hansen</strong>. I founded HansenDev with a simple goal: to give Far North Queensland businesses access to the exact same calibre of technology used by top-tier enterprises.
                        </p>
                        <p>
                            Before building for local trades and tourism operators, I spent my career engineering high-stakes software for global IT leaders like <strong className="font-semibold text-white">DXC Technology</strong> and financial platforms including <strong className="font-semibold text-white">nabtrade (NAB)</strong>. When you write the code that handles live trades for one of Australia&apos;s Big Four banks, there is zero room for error. Everything has to be bulletproof, fast, and built to scale.
                        </p>
                        <p>
                            Today I operate out of <strong className="font-semibold text-white">Kamerunga</strong>, bringing that enterprise-level engineering to your business. Whether it&apos;s a tradie app hooked into the Bunnings API or an automated booking system for a reef operator, I build digital assets that become the most reliable part of your business.
                        </p>
                    </div>

                    <div className="mt-8 flex items-center gap-5 border-t border-hairline pt-6">
                        <p className="font-signature text-3xl italic text-brand-accent">Thomas Hansen</p>
                        <p className="text-sm text-dark-muted">Lead Developer, HansenDev PTY LTD</p>
                    </div>
                </div>
            </div>

            {/* The HansenDev difference */}
            <div
                ref={diffRef}
                className={`mt-16 grid gap-5 md:grid-cols-3 stagger-children ${diffVisible ? 'revealed' : ''}`}
            >
                {differentiators.map((item) => (
                    <div key={item.title} className="glass-card hover-glow group p-6">
                        <span className="icon-tile mb-5 h-11 w-11">{item.icon}</span>
                        <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-dark-text-secondary">{item.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default MeetFounder;
