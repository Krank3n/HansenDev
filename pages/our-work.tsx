import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Section from '../components/common/Section';
import { ExternalLink, Code2, Globe, Star, Zap, Users, TrendingUp, ArrowUpRight, CheckCircle2, Briefcase, Phone, Clock } from 'lucide-react';
import {
    BUSINESS_INFO,
    ONLINE_PRESENCE,
    SERVICE_AREAS,
} from '../constants/business';

interface Project {
    title: string;
    description: string;
    url: string;
    category: string;
    technologies: string[];
    highlight?: boolean;
    stats?: { label: string; value: string; icon: React.ReactNode }[];
    gradient: string;
    image: string;
    imageAlt: string;
}

interface CairnsProject {
    slug: string;
    name: string;
    tagline: string;
    template: string;
    url: string;
    demoUrl: string;
    originalUrl: string;
    image: string;
    imageAlt: string;
    improvements: string[];
}

const hansenDevProjects: Project[] = [
    {
        title: "ShredIndex",
        description: "The world's largest ski resort database with 6,239+ resorts across 94 countries. Features advanced filtering, lifestyle categories, professional athlete reviews, and the biggest ski resort job board online.",
        url: "/projects/shredindex",
        category: "Travel & Sports Platform",
        technologies: ["Next.js", "TypeScript", "GraphQL", "Tailwind CSS", "CMS Integration", "SEO Optimization"],
        highlight: true,
        gradient: "from-blue-500 via-cyan-500 to-blue-600",
        image: "/assets/projects/shredindex-home.png",
        imageAlt: "ShredIndex - World's largest ski resort database and job board",
        stats: [
            { label: "Ski Resorts", value: "6,239+", icon: <Globe className="h-4 w-4" /> },
            { label: "Countries", value: "94", icon: <Star className="h-4 w-4" /> }
        ]
    },
    {
        title: "WakeIndex",
        description: "Comprehensive wakepark index and management software platform. A specialized system for wakeboarding facilities to manage operations, track riders, and optimize park performance.",
        url: "https://wakeindex.com/",
        category: "Sports Management",
        technologies: ["Full-Stack Development", "Database Management", "Real-time Data", "User Management"],
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
        image: "/assets/projects/wakeindex-search.jpg",
        imageAlt: "WakeIndex platform dashboard",
        stats: [
            { label: "Active Users", value: "1K+", icon: <Users className="h-4 w-4" /> },
            { label: "Wakeparks", value: "50+", icon: <TrendingUp className="h-4 w-4" /> }
        ]
    },
    {
        title: "QuoteMate",
        description: "A modern quoting tool for Australian tradies with Bunnings Live API integration. Create professional quotes with smart job templates, AI-powered custom jobs, and auto-populated material pricing.",
        url: "/projects/quotemate",
        category: "Mobile App",
        technologies: ["React Native", "Expo", "TypeScript", "AI Integration", "OAuth 2.0", "PDF Generation"],
        highlight: true,
        gradient: "from-green-600 via-emerald-500 to-teal-500",
        image: "/assets/projects/quotemate-square.jpg",
        imageAlt: "QuoteMate mobile application interface",
        stats: [
            { label: "AI-Powered", value: "Custom Jobs", icon: <Star className="h-4 w-4" /> },
            { label: "API Integration", value: "Bunnings", icon: <Zap className="h-4 w-4" /> }
        ]
    },
    {
        title: "Call Katie",
        description: "AI receptionist for Australian service businesses. Answers calls 24/7, qualifies leads with natural conversation, and pushes structured jobs to QuoteMate, Jobber, HubSpot, or any webhook. Configurable greeting, tone, and questioning flow with full call transcripts and recordings.",
        url: "/projects/callkatie",
        category: "AI Voice Platform",
        technologies: ["Next.js", "TypeScript", "ElevenLabs", "Azure Voice", "Webhooks", "CRM Integration"],
        highlight: true,
        gradient: "from-pink-500 via-rose-500 to-fuchsia-500",
        image: "/assets/projects/callkatielogo.svg",
        imageAlt: "Call Katie logo",
        stats: [
            { label: "Always On", value: "24/7", icon: <Clock className="h-4 w-4" /> },
            { label: "Qualified Leads", value: "Auto-CRM", icon: <Phone className="h-4 w-4" /> }
        ]
    },
    {
        title: "ChatSpark",
        description: "Build social confidence through conversations. 145+ micro-missions across 7 difficulty levels with voice coaching and progress tracking. Privacy-focused app to overcome social anxiety one interaction at a time.",
        url: "/projects/chatspark",
        category: "Mobile App",
        technologies: ["React Native", "Expo", "SQLite", "Zustand", "Voice Coaching", "Mood Analytics"],
        highlight: true,
        gradient: "from-purple-600 via-pink-500 to-rose-500",
        image: "/assets/projects/chatspark-square.png",
        imageAlt: "ChatSpark social confidence app interface",
        stats: [
            { label: "Micro-Missions", value: "145+", icon: <Star className="h-4 w-4" /> },
            { label: "Privacy First", value: "100%", icon: <Users className="h-4 w-4" /> }
        ]
    },
    {
        title: "WebFaceLift",
        description: "AI-powered website reconstruction platform that transforms outdated business websites into modern designs in seconds. Paste any URL, and our AI scrapes the content, redesigns the structure, and renders a blueprint you can refine via chat.",
        url: "/projects/webfacelift",
        category: "AI SaaS Platform",
        technologies: ["Next.js", "TypeScript", "Claude AI", "Tailwind CSS", "Supabase", "Firecrawl"],
        highlight: true,
        gradient: "from-indigo-500 via-violet-500 to-purple-500",
        image: "/assets/projects/webfacelift-logo.png",
        imageAlt: "WebFaceLift AI website redesign platform",
        stats: [
            { label: "Redesign Time", value: "30s", icon: <Zap className="h-4 w-4" /> },
            { label: "Any Website", value: "Universal", icon: <Globe className="h-4 w-4" /> }
        ]
    },
];

const cairnsProjects: CairnsProject[] = [
    {
        slug: 'instantalloy',
        name: 'Instant Alloy Scaffolding',
        tagline: "Cairns' Trusted Scaffolding Experts Since 2006",
        template: 'Industrial',
        demoUrl: '/demo/instantalloy',
        url: '/demo/instantalloy',
        originalUrl: 'https://instantalloyscaffolding.com.au/',
        image: 'https://instantalloyscaffolding.com.au/wp-content/uploads/2022/10/Gallery-1-scaled.jpg',
        imageAlt: 'Instant Alloy Scaffolding demo website',
        improvements: [
            'Replaced hundreds of KB of inline CSS with optimised Tailwind utility classes',
            'Removed heavy Elementor page builder overhead for faster load times',
            'Added proper image optimisation with Next.js Image component and lazy loading',
            'Improved mobile experience with a true mobile-first responsive layout',
            'Added structured JSON-LD data and proper meta tags for stronger local SEO',
            'Streamlined content hierarchy with clearer calls-to-action',
        ],
    },
{
        slug: 'cairnswakepark',
        name: 'Cairns Wake Park',
        tagline: 'Send It in the Tropics',
        template: 'Recreation',
        demoUrl: '/demo/cairnswakepark',
        url: '/demo/cairnswakepark',
        originalUrl: 'https://www.cairnswakepark.com/',
        image: 'https://static.wixstatic.com/media/100882_d385d8dc358a48c0a3f943181fea7b4d~mv2.jpg/v1/fill/w_1440,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/100882_d385d8dc358a48c0a3f943181fea7b4d~mv2.jpg',
        imageAlt: 'Cairns Wake Park demo website',
        improvements: [
            'Removed Wix platform dependency and 250KB+ of inline JavaScript overhead',
            'Built with Next.js for dramatically faster page loads and static generation',
            'Added clear pricing tables, session schedules, and booking CTAs front and centre',
            'Improved SEO with server-rendered content instead of client-side-only rendering',
            'Created dedicated sections for Wake Park, Aqua Park, and Kids Club',
            'Added structured data for local business discovery and Google rich results',
        ],
    },
    {
        slug: 'sailstructures',
        name: 'Sail Structures',
        tagline: 'Award-Winning Architectural Shade Solutions Since 1988',
        template: 'Industrial',
        demoUrl: '/demo/sailstructures',
        url: '/demo/sailstructures',
        originalUrl: 'https://www.sailstructures.com.au/',
        image: 'https://www.sailstructures.com.au/wp-content/uploads/2022/07/ReefMagic-1024x682.jpg',
        imageAlt: 'Sail Structures demo website',
        improvements: [
            'Eliminated 10,000+ lines of inline CSS and legacy WordPress/jQuery bloat',
            'Replaced heavy RevSlider carousel with lightweight, accessible image components',
            'Added dedicated service detail pages with in-depth descriptions and project galleries',
            'Built a filterable project portfolio showcasing 21 completed works',
            'Simplified complex nested navigation into a clean, mobile-friendly structure',
            'Improved accessibility with proper ARIA labels and semantic HTML throughout',
        ],
    },
    {
        slug: 'mcreative',
        name: 'MCreative',
        tagline: 'Bold Creative Agency with a Modern Digital Presence',
        template: 'Recreation',
        demoUrl: 'https://mcreative-web.vercel.app/',
        url: 'https://mcreative-web.vercel.app/',
        originalUrl: '',
        image: '/assets/projects/mcreative.jpg',
        imageAlt: 'MCreative website',
        improvements: [
            'Consulted on full website rebuild for modern performance and speed',
            'Optimised asset delivery with lazy loading and next-gen image formats',
            'Improved Core Web Vitals scores for faster first paint and interactivity',
            'Streamlined page structure for cleaner navigation and user flow',
            'Enhanced SEO with proper meta tags, structured data, and semantic HTML',
            'Implemented responsive mobile-first design for all screen sizes',
        ],
    },
    {
        slug: 'makawa',
        name: 'Makawa Dynamic Solutions',
        tagline: 'Modern Building & Construction Solutions',
        template: 'Industrial',
        demoUrl: 'https://makawa-dynamic-solutions-amtkc.ondigitalocean.app/',
        url: 'https://makawa-dynamic-solutions-amtkc.ondigitalocean.app/',
        originalUrl: '',
        image: '/assets/projects/makawa-solutions.jpg',
        imageAlt: 'Makawa Dynamic Solutions website',
        improvements: [
            'Custom-built from the ground up as a modern Next.js application',
            'Responsive design with mobile-first approach and optimised performance',
            'Professional project showcase highlighting completed construction work',
            'SEO-optimised with structured data for local business visibility',
        ],
    },
];

interface ProfessionalProject {
    title: string;
    company: string;
    role: string;
    period: string;
    description: string;
    url: string;
    technologies: string[];
    logo?: string;
    logoAlt?: string;
    gradient: string;
    highlights: string[];
}

const professionalProjects: ProfessionalProject[] = [
    {
        title: 'Australian Retirement Trust',
        company: 'Australian Retirement Trust',
        role: 'Front End Engineering',
        period: 'Nov 2022 – Present',
        description: 'Delivered front end engineering for one of Australia\'s largest superannuation funds, managing retirement savings for over two million members. Focused on enterprise-wide relationship integration, advanced React component development, and WCAG accessibility compliance.',
        url: 'https://www.australianretirementtrust.com.au/',
        technologies: ['React', 'TypeScript', 'Accessibility (WCAG)', 'Dashboard Libraries', 'Enterprise Integration'],
        logo: '/assets/projects/australian_retirement_trust.jpg',
        logoAlt: 'Australian Retirement Trust platform',
        gradient: 'from-teal-500 to-emerald-600',
        highlights: [
            'Enterprise-wide relationship integration across platforms',
            'Built bot and advanced React component systems',
            'Developed reusable dashboard component library',
            'Implemented core and advanced WCAG accessibility standards',
        ],
    },
    {
        title: 'DXC / nabTrade',
        company: 'DXC Technology / nabTrade',
        role: 'Component Library & UI Development',
        period: 'Jan 2020 – Nov 2022',
        description: 'Delivered component library and UI development for Australia\'s leading online share trading platform serving hundreds of thousands of active investors. Led interface architecture and contributed to global financial mapping across product and engineering teams.',
        url: 'https://www.nabtrade.com.au/',
        technologies: ['React', 'JavaScript', 'TypeScript', 'Component Libraries', 'Financial APIs'],
        logo: '/assets/projects/nabTrade.png',
        logoAlt: 'nabTrade trading platform',
        gradient: 'from-red-500 to-red-700',
        highlights: [
            'Led the component library build for the nabTrade platform',
            'Global financial mapping across all trading interfaces',
            'Delivered 3 React/JS/TypeScript applications',
            'Embedded across product and engineering teams',
        ],
    },
    {
        title: 'Consultation Manager',
        company: 'Consultation Manager',
        role: 'Product Design & Front End Development',
        period: 'Jul 2020 – Jul 2023',
        description: 'Shaped product direction and built the front end for a stakeholder engagement platform used by government and enterprise organisations across Australia. Drove strategy, user research, and client-facing UI development.',
        url: 'https://www.consultationmanager.com/',
        technologies: ['React', 'TypeScript', 'Product Design', 'User Research', 'Agile'],
        logo: '/assets/projects/consultation_manager_logo_darker.png',
        logoAlt: 'Consultation Manager platform',
        gradient: 'from-blue-600 to-indigo-600',
        highlights: [
            'Product design and front end development',
            'Drove strategy and market direction',
            'Scaled up agile team culture and processes',
            'Led user research and client-facing UI initiatives',
        ],
    },
];

const templateColors: Record<string, string> = {
    Industrial: 'from-orange-500 to-amber-500',
    Recreation: 'from-cyan-500 to-sky-500',
};

const OurWorkPage: React.FC = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": `Our Work | ${BUSINESS_INFO.name}`,
        "description": `Explore the full portfolio of ${BUSINESS_INFO.name} — from local client success stories to our own global platforms and apps.`,
        "url": `${ONLINE_PRESENCE.website.primary}/our-work`,
        "isPartOf": {
            "@type": "WebSite",
            "name": BUSINESS_INFO.name,
            "url": ONLINE_PRESENCE.website.primary,
        },
    };

    return (
        <>
            <Head>
                <title>Our Work — Projects & Demos | {BUSINESS_INFO.name}</title>
                <meta name="description" content={`Browse ${BUSINESS_INFO.name}'s full portfolio — local client success stories, web apps, SaaS platforms, and mobile apps.`} />
                <meta name="keywords" content={`HansenDev portfolio, web development projects, Cairns web design, demo websites, ${SERVICE_AREAS.primary}`} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`Our Work | ${BUSINESS_INFO.name}`} />
                <meta property="og:description" content={`Explore the full portfolio of ${BUSINESS_INFO.name} — local client success stories and our own global platforms.`} />
                <meta property="og:url" content={`${ONLINE_PRESENCE.website.primary}/our-work`} />
                <meta property="og:image" content="/assets/hansendev-cairns-web-development-og.jpg" />
                <meta property="og:locale" content="en_AU" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={`Our Work | ${BUSINESS_INFO.name}`} />
                <meta property="twitter:description" content={`Browse ${BUSINESS_INFO.name}'s full portfolio of projects and demos.`} />
                <link rel="canonical" href={`${ONLINE_PRESENCE.website.primary}/our-work`} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>

            {/* Hero */}
            <div className="pt-12 pb-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Our <span className="text-brand-accent">Work</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-dark-text-secondary max-w-3xl mx-auto">
                        From local client projects to our own global platforms — here&apos;s everything we&apos;ve built.
                    </p>
                </div>
            </div>

            {/* ─── Client Success Stories ─── */}
            <Section
                id="cairns-demos"
                title="Client Success Stories"
                subtitle="Real Cairns businesses we've redesigned with modern web technology — see how we improve performance, SEO, and user experience"
            >
                <div className="space-y-6">
                    {cairnsProjects.map((project, index) => (
                        <div key={project.slug} className="group relative">
                            <div className="glass-card overflow-hidden hover-glow transition-all duration-500 hover:bg-white/[0.05]">
                                <div className="grid lg:grid-cols-5 gap-0">
                                    {/* Content Side */}
                                    <div className={`p-5 lg:p-8 flex flex-col justify-center lg:col-span-3 ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}`}>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white bg-gradient-to-r ${templateColors[project.template] || 'from-gray-500 to-gray-600'}`}>
                                                    {project.template}
                                                </span>
                                                {project.originalUrl && (
                                                    <a
                                                        href={project.originalUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[11px] text-dark-text-secondary hover:text-brand-accent transition-colors underline underline-offset-2"
                                                    >
                                                        View Original
                                                    </a>
                                                )}
                                            </div>

                                            <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                                                {project.name}
                                            </h3>
                                            <p className="text-sm text-dark-text-secondary leading-relaxed">
                                                {project.tagline}
                                            </p>

                                            {/* Improvements List */}
                                            <div className="space-y-1.5">
                                                <h4 className="text-xs font-semibold text-brand-accent uppercase tracking-wider">Key Improvements</h4>
                                                <ul className="space-y-1">
                                                    {project.improvements.map((improvement, i) => (
                                                        <li key={i} className="flex items-start gap-1.5 text-xs text-dark-text-secondary">
                                                            <CheckCircle2 className="h-3 w-3 text-brand-accent shrink-0 mt-0.5" />
                                                            <span>{improvement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Action Button */}
                                            <div className="pt-1">
                                                <a
                                                    href={project.demoUrl}
                                                    target={project.demoUrl.startsWith('/') ? '_self' : '_blank'}
                                                    rel={project.demoUrl.startsWith('/') ? undefined : 'noopener noreferrer'}
                                                    className="inline-flex items-center gap-2 btn-gradient text-white px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                                >
                                                    <span>{project.demoUrl.startsWith('/') ? 'View Demo' : 'Visit Site'}</span>
                                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Side */}
                                    <div className={`relative p-4 lg:p-6 lg:col-span-2 ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}`}>
                                        <div className="relative aspect-[16/10] group/image">
                                            <div className="relative w-full h-full rounded-xl overflow-hidden bg-dark-card transition-all duration-500">
                                                <Image
                                                    src={project.image}
                                                    alt={project.imageAlt}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                                                    sizes="(max-width: 768px) 100vw, 40vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* ─── Professional Experience ─── */}
            <Section
                id="professional-experience"
                title="Professional Experience"
                subtitle="Enterprise platforms and products we've contributed to as part of leading Australian and international teams"
            >
                <div className="space-y-6">
                    {professionalProjects.map((project, index) => (
                        <div key={index} className="group relative">
                            <div className="glass-card overflow-hidden hover-glow transition-all duration-500 hover:bg-white/[0.05]">
                                <div className="grid lg:grid-cols-5 gap-0">
                                    {/* Content Side */}
                                    <div className={`p-5 lg:p-8 flex flex-col justify-center lg:col-span-3 ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}`}>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 flex-wrap">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white bg-gradient-to-r ${project.gradient}`}>
                                                    {project.role}
                                                </span>
                                                <span className="text-xs text-dark-text-secondary">{project.period}</span>
                                            </div>
                                            <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-dark-text-secondary leading-relaxed">
                                                {project.description}
                                            </p>
                                            {project.highlights.length > 0 && (
                                                <div className="space-y-1.5">
                                                    <h4 className="text-xs font-semibold text-brand-accent uppercase tracking-wider">Key Contributions</h4>
                                                    <ul className="space-y-1">
                                                        {project.highlights.map((h, i) => (
                                                            <li key={i} className="flex items-start gap-1.5 text-xs text-dark-text-secondary">
                                                                <CheckCircle2 className="h-3 w-3 text-brand-accent shrink-0 mt-0.5" />
                                                                <span>{h}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="bg-white/10 text-dark-text px-2.5 py-1 rounded-full text-xs">{tech}</span>
                                                ))}
                                            </div>
                                            <div className="pt-1">
                                                <a href={project.url} target="_blank" rel="noopener noreferrer"
                                                   className="inline-flex items-center gap-2 text-brand-accent hover:text-white text-sm font-medium transition-colors">
                                                    <span>Visit {project.company}</span>
                                                    <ExternalLink className="h-3.5 w-3.5" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Side */}
                                    <div className={`relative p-4 lg:p-6 lg:col-span-2 ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}`}>
                                        <div className="relative aspect-[16/10] group/image">
                                            <div className="relative w-full h-full rounded-xl overflow-hidden bg-dark-card transition-all duration-500">
                                                {project.logo ? (
                                                    <Image
                                                        src={project.logo}
                                                        alt={project.logoAlt || project.company}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                                                        sizes="(max-width: 768px) 100vw, 40vw"
                                                    />
                                                ) : (
                                                    <div className="flex items-center justify-center w-full h-full">
                                                        <Briefcase className="h-16 w-16 text-dark-text-secondary" />
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* ─── Our Innovation Lab ─── */}
            <Section
                id="innovation-lab"
                title="Our Innovation Lab"
                subtitle="Platforms and apps we've built from the ground up — the same engineering powers every client project"
            >
                <div className="space-y-6">
                    {hansenDevProjects.map((project, index) => (
                        <div key={index} className="group relative">
                            <div className="glass-card overflow-hidden hover-glow transition-all duration-500 hover:bg-white/[0.05]">
                                <div className="grid lg:grid-cols-5 gap-0">
                                    <div className={`p-5 lg:p-8 flex flex-col justify-center lg:col-span-3 ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}`}>
                                        <div className="space-y-3">
                                            <div className="inline-flex items-center gap-2 text-brand-accent text-xs font-medium uppercase tracking-wider">
                                                <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                                                {project.category}
                                            </div>
                                            <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-dark-text-secondary leading-relaxed">
                                                {project.description}
                                            </p>
                                            {project.stats && (
                                                <div className="flex gap-6">
                                                    {project.stats.map((stat, statIndex) => (
                                                        <div key={statIndex} className="flex items-center gap-2">
                                                            <div className="text-brand-accent">{stat.icon}</div>
                                                            <span className="text-lg font-bold text-white">{stat.value}</span>
                                                            <span className="text-xs text-dark-text-secondary">{stat.label}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="bg-white/10 text-dark-text px-2.5 py-1 rounded-full text-xs"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="pt-1">
                                                <a
                                                    href={project.url}
                                                    target={project.url.startsWith('/') ? '_self' : '_blank'}
                                                    rel={project.url.startsWith('/') ? undefined : 'noopener noreferrer'}
                                                    className="inline-flex items-center gap-2 btn-gradient text-white px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                                >
                                                    <span>View Project</span>
                                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`relative p-4 lg:p-6 lg:col-span-2 ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}`}>
                                        <div className="relative aspect-[16/10] group/image">
                                            <div className="relative w-full h-full rounded-xl overflow-hidden bg-dark-card transition-all duration-500">
                                                <Image
                                                    src={project.image}
                                                    alt={project.imageAlt}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                                                    sizes="(max-width: 768px) 100vw, 40vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
                <div className="relative bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-2xl p-8 lg:p-12 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.1),transparent_50%)] pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(13,148,136,0.1),transparent_50%)] pointer-events-none"></div>
                    <div className="relative text-center max-w-4xl mx-auto space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl">
                                <Code2 className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-white">
                                Ready to Create Something Amazing?
                            </h3>
                            <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                Every exceptional project begins with a conversation. Let&apos;s discuss your vision and create a digital solution that exceeds your expectations.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                            >
                                <span>Start Your Project</span>
                                <ArrowUpRight className="h-5 w-5" />
                            </a>
                            <a
                                href="/#services"
                                className="inline-flex items-center justify-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                            >
                                <span>View Services</span>
                                <Code2 className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurWorkPage;
