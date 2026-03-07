import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from './common/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLink, Code2, Globe, Star, Zap, Users, ArrowUpRight, ArrowRight, Lightbulb } from 'lucide-react';

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

const clientProjects: Project[] = [
    {
        title: "Makawa Dynamic Solutions",
        description: "Modern building and construction company website featuring responsive design, project showcases, and professional service presentation for the construction industry.",
        url: "https://makawa-dynamic-solutions-amtkc.ondigitalocean.app/",
        category: "Construction & Business",
        technologies: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
        highlight: true,
        gradient: "from-orange-500 via-red-500 to-pink-500",
        image: "/assets/projects/makawa-solutions.webp",
        imageAlt: "Makawa Dynamic Solutions website homepage",
        stats: [
            { label: "Performance", value: "95+", icon: <Zap className="h-4 w-4" /> },
            { label: "Mobile Ready", value: "100%", icon: <Users className="h-4 w-4" /> }
        ]
    },
];

const ownProducts: Project[] = [
    {
        title: "ShredIndex",
        description: "The world's largest ski resort database with 6,239+ resorts across 94 countries. Features advanced filtering, lifestyle categories, professional athlete reviews, and the biggest ski resort job board online.",
        url: "/projects/shredindex",
        category: "Travel & Sports Platform",
        technologies: ["Next.js", "TypeScript", "GraphQL", "Tailwind CSS", "CMS Integration", "SEO Optimization"],
        highlight: true,
        gradient: "from-blue-500 via-cyan-500 to-blue-600",
        image: "/assets/projects/shredindex-info.webp",
        imageAlt: "ShredIndex - World's largest ski resort database and job board",
        stats: [
            { label: "Ski Resorts", value: "6,239+", icon: <Globe className="h-4 w-4" /> },
            { label: "Countries", value: "94", icon: <Star className="h-4 w-4" /> }
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
        image: "/assets/projects/quotemate-square.webp",
        imageAlt: "QuoteMate mobile application interface",
        stats: [
            { label: "AI-Powered", value: "Custom Jobs", icon: <Star className="h-4 w-4" /> },
            { label: "API Integration", value: "Bunnings", icon: <Zap className="h-4 w-4" /> }
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
        image: "/assets/projects/webfacelift-logo.webp",
        imageAlt: "WebFaceLift AI website redesign platform",
        stats: [
            { label: "Redesign Time", value: "30s", icon: <Zap className="h-4 w-4" /> },
            { label: "Any Website", value: "Universal", icon: <Globe className="h-4 w-4" /> }
        ]
    },
];

const ProjectCard: React.FC<{ project: Project; badge?: string }> = ({ project, badge }) => (
    <div className="group relative">
        <div className="glass-card overflow-hidden hover-glow transition-all duration-700 hover:bg-white/[0.05]">
            <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                                <span className="gradient-text">{project.category}</span>
                            </div>
                            {badge && (
                                <span className="inline-flex items-center gap-1 bg-brand-primary/10 text-brand-primary px-2.5 py-0.5 rounded-full text-xs font-medium">
                                    <Lightbulb className="h-3 w-3" />
                                    {badge}
                                </span>
                            )}
                        </div>

                        <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                            {project.title}
                        </h3>

                        <p className="text-lg text-dark-text-secondary leading-relaxed">
                            {project.description}
                        </p>

                        {project.stats && (
                            <div className="grid grid-cols-2 gap-4">
                                {project.stats.map((stat, statIndex) => (
                                    <div key={statIndex} className="space-y-1">
                                        <div className="flex items-center gap-2 text-brand-accent/80">
                                            {stat.icon}
                                            <span className="text-sm font-medium">{stat.label}</span>
                                        </div>
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="bg-white/[0.04] text-dark-text/80 px-3 py-1.5 rounded-full text-sm hover:bg-brand-accent/10 hover:text-brand-accent transition-all duration-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="pt-4">
                            <a
                                href={project.url}
                                target={project.url.startsWith('/') ? '_self' : '_blank'}
                                rel={project.url.startsWith('/') ? undefined : 'noopener noreferrer'}
                                className="inline-flex items-center gap-3 btn-gradient text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/15 hover:-translate-y-0.5"
                            >
                                <span>View Project</span>
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                            {!project.url.startsWith('/') && (
                                <div className="mt-3 text-sm text-dark-text-secondary/50 font-mono">
                                    {new URL(project.url).hostname}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Image Side */}
                <div className="relative p-8 lg:p-12 order-1 lg:order-2">
                    <div className="relative aspect-[4/3] group/image">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.imageAlt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/30 via-transparent to-transparent"></div>
                        </div>

                        <div className="absolute -bottom-3 -right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                            <div className="bg-gradient-to-br from-brand-accent to-brand-primary text-white p-3 rounded-full shadow-lg shadow-brand-accent/20">
                                <ExternalLink className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Portfolio: React.FC = () => {
    const { ref: clientRef, isVisible: clientVisible } = useScrollReveal();
    const { ref: productsRef, isVisible: productsVisible } = useScrollReveal();
    const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

    return (
        <Section
            id="portfolio"
            title="Our Work"
            subtitle="From local client projects to our own global platforms"
            className="relative overflow-hidden"
        >
            {/* Background orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="orb orb-teal w-[400px] h-[400px] top-[20%] right-[-5%] animate-float-slow opacity-30"></div>
                <div className="orb orb-primary w-[300px] h-[300px] bottom-[30%] left-[-5%] animate-float-slower opacity-20"></div>
            </div>

            {/* Client Success Stories */}
            <div className="relative mb-8">
                <h3 className="text-2xl font-bold text-dark-text mb-2">Client Success Stories</h3>
                <p className="text-dark-text-secondary">Real businesses we've helped grow with modern web technology</p>
            </div>

            <div
                ref={clientRef}
                className={`space-y-12 stagger-children ${clientVisible ? 'revealed' : ''}`}
            >
                {clientProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            {/* Link to more demos */}
            <div className="mt-8 mb-20 text-center">
                <a
                    href="#demos"
                    className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors text-sm font-medium"
                >
                    See more local business redesigns below
                    <ArrowRight className="h-3.5 w-3.5" />
                </a>
            </div>

            {/* Our Innovation Lab */}
            <div className="relative mb-8">
                <h3 className="text-2xl font-bold text-dark-text mb-2">Our Innovation Lab</h3>
                <p className="text-dark-text-secondary">
                    We build our own products too — the same engineering behind these platforms powers every client project.
                </p>
            </div>

            <div
                ref={productsRef}
                className={`space-y-12 stagger-children ${productsVisible ? 'revealed' : ''}`}
            >
                {ownProducts.map((project, index) => (
                    <ProjectCard key={index} project={project} badge="In-House Product" />
                ))}
            </div>

            {/* View All Work */}
            <div className="mt-16 text-center">
                <Link
                    href="/our-work"
                    className="inline-flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 backdrop-blur-sm hover:-translate-y-0.5 hover-glow"
                >
                    <span>View All Our Work</span>
                    <ArrowRight className="h-5 w-5" />
                </Link>
            </div>

            {/* CTA */}
            <div
                ref={ctaRef}
                className={`mt-24 transition-all duration-700 ${
                    ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
                <div className="relative rounded-3xl p-12 lg:p-16 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.08] via-transparent to-brand-accent/[0.08]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.08),transparent_50%)] pointer-events-none"></div>

                    <div className="relative text-center max-w-4xl mx-auto space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl shadow-lg shadow-brand-accent/20">
                                <Code2 className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-white">
                                Ready to Create Something Amazing?
                            </h3>
                            <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
                                Every exceptional project begins with a conversation. Let's discuss your vision and create a digital solution that exceeds your expectations.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-3 btn-gradient text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/15 hover:-translate-y-0.5"
                            >
                                <span>Start Your Project</span>
                                <ArrowUpRight className="h-5 w-5" />
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-500 backdrop-blur-sm"
                            >
                                <span>View Services</span>
                                <Code2 className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Portfolio;
