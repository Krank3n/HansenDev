import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from './common/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight, ArrowRight, Globe, Star, Zap, Phone, Clock, Lightbulb, Scissors, Video, Camera } from 'lucide-react';
import { trackCTA, trackOutboundLink } from '../lib/gtag';

interface Project {
    title: string;
    description: string;
    url: string;
    category: string;
    technologies: string[];
    stats?: { label: string; value: string; icon: React.ReactNode }[];
    gradient: string;
    image: string;
    imageAlt: string;
    /** object-fit for the artwork */
    fit?: 'cover' | 'contain';
    /** padding around contained artwork */
    pad?: string;
}

const ownProducts: Project[] = [
    {
        title: 'QuoteMate',
        description: 'A modern quoting tool for Australian tradies with Bunnings Live API integration. Professional quotes with smart job templates, AI-powered custom jobs, and auto-populated material pricing.',
        url: '/projects/quotemate',
        category: 'Mobile App',
        technologies: ['React Native', 'Expo', 'TypeScript', 'AI Integration', 'OAuth 2.0', 'PDF Generation'],
        gradient: 'from-green-600 via-emerald-500 to-teal-500',
        image: '/assets/projects/quotemate-app.webp',
        imageAlt: 'QuoteMate app home screen showing quote stats and a recent quote',
        fit: 'contain',
        stats: [
            { label: 'AI-powered', value: 'Custom jobs', icon: <Star className="h-4 w-4" /> },
            { label: 'API integration', value: 'Bunnings', icon: <Zap className="h-4 w-4" /> }
        ]
    },
    {
        title: 'Call Katie',
        description: 'An AI receptionist that answers business calls 24/7, qualifies leads in natural conversation, and pushes structured jobs straight into QuoteMate, Jobber, HubSpot, or any webhook. Every missed call is a lost lead.',
        url: '/projects/callkatie',
        category: 'AI Voice Platform',
        technologies: ['Next.js', 'TypeScript', 'ElevenLabs', 'Azure Voice', 'Webhooks', 'CRM Integration'],
        gradient: 'from-cyan-400 via-teal-500 to-cyan-600',
        image: '/assets/projects/callkatie-banner.webp',
        imageAlt: 'Call Katie, the AI receptionist that books your jobs, built for Australian trades',
        fit: 'contain',
        pad: 'p-3',
        stats: [
            { label: 'Always on', value: '24/7', icon: <Clock className="h-4 w-4" /> },
            { label: 'Qualified leads', value: 'Auto-CRM', icon: <Phone className="h-4 w-4" /> }
        ]
    },
    {
        title: 'ShredIndex',
        description: "The world's largest ski resort database with 6,239+ resorts across 94 countries. Advanced filtering, lifestyle categories, professional athlete reviews, and the biggest ski resort job board online.",
        url: '/projects/shredindex',
        category: 'Travel & Sports Platform',
        technologies: ['Next.js', 'TypeScript', 'GraphQL', 'Tailwind CSS', 'CMS Integration', 'SEO'],
        gradient: 'from-blue-500 via-cyan-500 to-blue-600',
        image: '/assets/projects/shredindex-home.webp',
        imageAlt: 'ShredIndex homepage: live your best adventure lifestyle, find resorts that match your style',
        stats: [
            { label: 'Ski resorts', value: '6,239+', icon: <Globe className="h-4 w-4" /> },
            { label: 'Countries', value: '94', icon: <Star className="h-4 w-4" /> }
        ]
    },
    {
        title: 'TalkMyShiz',
        description: 'Teleprompter, auto-editor and publishing tool in one app. Read your script beside the lens, cut the filler words and long pauses automatically, burn in karaoke-style captions, and publish straight to YouTube. Your video never leaves your phone.',
        url: '/projects/talkmyshiz',
        category: 'Creator Video App',
        technologies: ['React Native', 'Expo', 'FFmpeg', 'On-device Processing', 'AI Script Writer', 'YouTube API'],
        gradient: 'from-violet-500 via-indigo-500 to-purple-600',
        image: '/assets/projects/talkmyshiz-teleprompter.webp',
        imageAlt: 'TalkMyShiz teleprompter screen with the script scrolling beside the camera',
        fit: 'contain',
        stats: [
            { label: 'Filler words', value: 'Auto-cut', icon: <Scissors className="h-4 w-4" /> },
            { label: 'Publishing', value: '1-tap YouTube', icon: <Video className="h-4 w-4" /> }
        ]
    },
    {
        title: 'Sell My Shiz',
        description: 'AI-powered marketplace listings in seconds. Take a photo and the AI writes the title, description, category and condition, prices it from real market data, cleans up the photos, then cross-posts to eBay, Facebook Marketplace and more in one tap.',
        url: 'https://sellmyshiz.com',
        category: 'AI Marketplace App',
        technologies: ['React Native', 'Expo', 'Next.js', 'Firebase', 'Stripe Connect', 'AI Vision'],
        gradient: 'from-fuchsia-500 via-violet-500 to-purple-600',
        image: '/assets/projects/sellmyshiz-logo.webp',
        imageAlt: 'Sell My Shiz: photograph an item and let AI write and price the listing',
        stats: [
            { label: 'Photo to listing', value: '60 sec', icon: <Camera className="h-4 w-4" /> },
            { label: 'Cross-post', value: '1 tap', icon: <Zap className="h-4 w-4" /> }
        ]
    },
];

const ProjectCard: React.FC<{ project: Project; badge?: string; flip?: boolean }> = ({ project, badge, flip = false }) => {
    const external = !project.url.startsWith('/');
    return (
        <article className="glass-card hover-glow group overflow-hidden !rounded-3xl">
            <div className="grid lg:grid-cols-2">
                {/* Copy */}
                <div className={`flex flex-col justify-center p-7 sm:p-10 lg:p-12 ${flip ? 'lg:order-2' : ''}`}>
                    <div className="flex flex-wrap items-center gap-2.5">
                        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-accent">
                            <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                            {project.category}
                        </span>
                        {badge && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-hairline bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-medium text-dark-text-secondary">
                                <Lightbulb className="h-3 w-3 text-brand-accent" />
                                {badge}
                            </span>
                        )}
                    </div>

                    <h3 className="mt-4 text-3xl font-bold leading-tight text-white lg:text-4xl">{project.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-dark-text-secondary lg:text-[1.05rem]">{project.description}</p>

                    {project.stats && (
                        <dl className="mt-7 grid grid-cols-2 gap-4 border-y border-hairline py-5">
                            {project.stats.map((stat) => (
                                <div key={stat.label}>
                                    <dt className="flex items-center gap-1.5 text-xs text-dark-text-secondary">
                                        <span className="text-brand-accent">{stat.icon}</span>
                                        {stat.label}
                                    </dt>
                                    <dd className="mt-1 font-display text-2xl font-semibold text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    )}

                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="chip">{tech}</span>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a
                            href={project.url}
                            target={external ? '_blank' : '_self'}
                            rel={external ? 'noopener noreferrer' : undefined}
                            onClick={() => external ? trackOutboundLink(project.url, project.title) : trackCTA(`View ${project.title}`, 'portfolio')}
                            className="inline-flex items-center gap-2 rounded-xl btn-gradient px-5 py-3 text-sm font-semibold text-white"
                        >
                            <span>View project</span>
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        {external && (
                            <span className="font-mono text-xs text-dark-muted">{new URL(project.url).hostname}</span>
                        )}
                    </div>
                </div>

                {/* Artwork */}
                <div className={`relative min-h-[260px] p-6 sm:p-8 lg:p-10 ${flip ? 'lg:order-1' : ''}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.10] transition-opacity duration-700 group-hover:opacity-[0.16]`} />
                    <div className="absolute inset-0 bg-dots opacity-[0.12]" />
                    <div className="relative h-full min-h-[220px] overflow-hidden rounded-2xl border border-hairline-strong bg-dark-bg/60 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
                        <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            className={`${project.fit === 'contain' ? `object-contain ${project.pad || 'p-10'}` : 'object-cover'} transition-transform duration-700 group-hover:scale-[1.03]`}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
};

const Portfolio: React.FC = () => {
    const { ref: productsRef, isVisible: productsVisible } = useScrollReveal();

    return (
        <Section
            id="portfolio"
            eyebrow="Our products"
            title="Software we build, ship and run ourselves."
            subtitle="Apps and platforms engineered from scratch in Cairns, used by tradies, creators and sellers every day. The same code quality goes into every client project."
            align="left"
            aside={
                <Link href="/our-work" className="btn-ghost text-sm">
                    View all our work <ArrowRight className="h-4 w-4" />
                </Link>
            }
            className="relative overflow-hidden"
        >
            <div className="orb orb-teal right-[-8%] top-[15%] h-[420px] w-[420px] opacity-40 animate-float-slow" />

            <div ref={productsRef} className={`relative space-y-6 stagger-children ${productsVisible ? 'revealed' : ''}`}>
                {ownProducts.map((project, index) => (
                    <ProjectCard key={project.title} project={project} badge="In-house product" flip={index % 2 === 1} />
                ))}
            </div>

            <div className="relative mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <a href="#demos" className="btn-ghost text-sm">
                    See local business redesigns below <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <Link href="/our-work" className="btn-ghost text-sm">
                    Client work and case studies <ArrowRight className="h-3.5 w-3.5" />
                </Link>
            </div>
        </Section>
    );
};

export default Portfolio;
