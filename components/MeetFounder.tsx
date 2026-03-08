import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Section from './common/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Shield, Rocket, Settings, Play } from 'lucide-react';
import { trackVideoPlay } from '../lib/gtag';

const differentiators = [
    {
        icon: <Shield className="h-6 w-6" />,
        gradient: 'from-brand-accent/20 to-brand-accent/5',
        iconColor: 'text-brand-accent',
        title: 'Bank-Level Security',
        description: 'Your customer data, payment gateways, and client portals are built with the same rigorous security standards required by major financial institutions.',
    },
    {
        icon: <Rocket className="h-6 w-6" />,
        gradient: 'from-brand-primary/20 to-brand-primary/5',
        iconColor: 'text-brand-primary',
        title: 'Zero-Crash Scalability',
        description: 'We build infrastructure designed to handle intense traffic — ensuring your site never drops out during a massive FNQ tourism surge.',
    },
    {
        icon: <Settings className="h-6 w-6" />,
        gradient: 'from-violet-500/20 to-violet-500/5',
        iconColor: 'text-violet-400',
        title: 'True Custom Logic',
        description: "We don't just connect basic apps together. If your business needs a completely custom piece of software to run efficiently, we code it from the ground up.",
    },
];

const MeetFounder: React.FC = () => {
    const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
    const { ref: diffRef, isVisible: diffVisible } = useScrollReveal();

    const videoRef = useRef<HTMLVideoElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
    const [showPoster, setShowPoster] = useState(true);

    const playVideo = useCallback((userInitiated = false) => {
        const video = videoRef.current;
        if (!video) return;
        setShowPoster(false);
        video.currentTime = 0;
        video.muted = !userInitiated;
        video.play().then(() => {
            setIsPlaying(true);
        }).catch(() => {
            setShowPoster(true);
        });
    }, []);

    // Auto-play once when video container scrolls into view
    useEffect(() => {
        const el = videoContainerRef.current;
        if (!el || hasAutoPlayed) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAutoPlayed(true);
                    observer.unobserve(el);
                    setTimeout(() => playVideo(), 600);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [hasAutoPlayed, playVideo]);

    // When video ends, show poster with replay button
    const handleVideoEnded = () => {
        setIsPlaying(false);
        setShowPoster(true);
    };

    // Click to replay (with audio)
    const handleClick = () => {
        if (!isPlaying) {
            trackVideoPlay('founder-intro');
            playVideo(true);
        }
    };

    return (
        <Section
            id="founder"
            title=""
            className="relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/[0.02] to-transparent pointer-events-none"></div>

            <div
                ref={contentRef}
                className={`grid lg:grid-cols-5 gap-12 lg:gap-16 items-start transition-all duration-700 ${
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
                {/* Video / Photo Side */}
                <div className="lg:col-span-2 lg:sticky lg:top-24">
                    <div
                        ref={videoContainerRef}
                        className="relative rounded-3xl overflow-hidden group hover-glow cursor-pointer"
                        onClick={handleClick}
                    >
                        <div className="relative w-full aspect-[540/940]">
                            {/* Video */}
                            <video
                                ref={videoRef}
                                onEnded={handleVideoEnded}
                                playsInline
                                preload="none"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showPoster ? 'opacity-0' : 'opacity-100'}`}
                            >
                                <source src="/assets/video/TomSays-compressed.mp4" type="video/mp4" />
                            </video>

                            {/* Poster image (visible before/after video) */}
                            <Image
                                src="/assets/thomas-hansen-founder.webp"
                                alt="Thomas Hansen — Founder and Lead Developer of HansenDev, based in Kamerunga, Cairns"
                                fill
                                className={`object-cover transition-opacity duration-500 ${showPoster ? 'opacity-100' : 'opacity-0'}`}
                                sizes="(max-width: 768px) 100vw, 40vw"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/70 via-transparent to-transparent"></div>

                            {/* Play button overlay */}
                            {showPoster && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/90 backdrop-blur-sm shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform duration-300">
                                        <Play className="h-7 w-7 text-white ml-1" fill="white" />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 bg-dark-bg/60 backdrop-blur-md rounded-xl p-4">
                            <p className="text-white text-sm font-medium">Thomas Hansen</p>
                            <p className="text-gray-400 text-xs">Founder & Lead Developer, Kamerunga</p>
                        </div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="lg:col-span-3 space-y-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Big Tech Firepower.{' '}
                        <span className="gradient-text">Local FNQ Focus.</span>
                    </h2>

                    <div className="space-y-5 text-dark-text-secondary leading-relaxed">
                        <p>
                            Hi, I'm <strong className="text-white">Thomas Hansen</strong>. I founded HansenDev with a simple goal: to give Far North Queensland businesses access to the exact same calibre of technology used by top-tier enterprises.
                        </p>

                        <p>
                            Local businesses usually have to make a frustrating choice. You either settle for a basic, off-the-shelf website that doesn't actually solve your admin problems, or you hire a massive, faceless agency down south that charges a fortune and doesn't understand the FNQ market. I bridge that gap.
                        </p>

                        <p>
                            Before building solutions for local trades and tourism operators, I spent my career engineering complex, high-stakes software for global IT leaders like <strong className="text-white">DXC Technology</strong> and major financial platforms including <strong className="text-white">nabtrade (NAB)</strong>. When you write the code that handles live financial trades for one of Australia's Big Four banks, there is zero room for error. Everything has to be bulletproof, lightning-fast, and built to scale.
                        </p>

                        <p>
                            Today, I operate right here out of <strong className="gradient-text">Kamerunga</strong>, bringing that exact same enterprise-level engineering to your business. Whether I'm building custom tradie applications hooked into the Bunnings API, or automating a booking system for a local reef operator, I build digital assets that become the strongest, most reliable part of your business.
                        </p>
                    </div>

                    {/* Signature */}
                    <div className="pt-4 pb-2">
                        <p className="font-signature text-3xl text-brand-accent italic">Thomas Hansen</p>
                        <p className="text-sm text-dark-text-secondary/70 mt-1">Lead Developer, HansenDev PTY LTD</p>
                    </div>
                </div>
            </div>

            {/* The HansenDev Difference */}
            <div
                ref={diffRef}
                className={`mt-20 transition-all duration-700 ${
                    diffVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
                <h3 className="text-2xl font-bold text-dark-text mb-8 text-center">
                    The HansenDev Difference
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                    {differentiators.map((item) => (
                        <div
                            key={item.title}
                            className="glass-card p-6 hover-glow transition-all duration-500 group"
                        >
                            <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <span className={item.iconColor}>{item.icon}</span>
                            </div>
                            <h4 className="font-bold text-dark-text text-lg mb-2">{item.title}</h4>
                            <p className="text-sm text-dark-text-secondary leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default MeetFounder;
