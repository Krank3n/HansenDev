import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from './common/Section';
import { ExternalLink, Code2, Globe, Star, Zap, Users, ArrowUpRight, ArrowRight } from 'lucide-react';

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

const Portfolio: React.FC = () => {
    const projects: Project[] = [
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
            image: "/assets/projects/quotemate-square.jpg",
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
        {
            title: "Makawa Dynamic Solutions",
            description: "Modern building and construction company website featuring responsive design, project showcases, and professional service presentation for the construction industry.",
            url: "https://makawa-dynamic-solutions-amtkc.ondigitalocean.app/",
            category: "Construction & Business",
            technologies: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
            highlight: true,
            gradient: "from-orange-500 via-red-500 to-pink-500",
            image: "/assets/projects/makawa-solutions.jpg",
            imageAlt: "Makawa Dynamic Solutions website homepage",
            stats: [
                { label: "Performance", value: "95+", icon: <Zap className="h-4 w-4" /> },
                { label: "Mobile Ready", value: "100%", icon: <Users className="h-4 w-4" /> }
            ]
        },
    ];

    return (
        <Section
            id="portfolio"
            title="Our Work"
            subtitle="Showcasing innovative solutions and successful partnerships"
        >
            <div className="space-y-16">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative"
                    >
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-brand-accent/30 transition-all duration-700 hover:bg-white/[0.07]">
                            <div className="grid lg:grid-cols-2 gap-0">
                                {/* Content Side */}
                                <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                                    <div className="space-y-6">
                                        {/* Category */}
                                        <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider">
                                            <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                                            {project.category}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-lg text-dark-text-secondary leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Stats */}
                                        {project.stats && (
                                            <div className="grid grid-cols-2 gap-4">
                                                {project.stats.map((stat, statIndex) => (
                                                    <div key={statIndex} className="space-y-1">
                                                        <div className="flex items-center gap-2 text-brand-accent">
                                                            {stat.icon}
                                                            <span className="text-sm font-medium">{stat.label}</span>
                                                        </div>
                                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="bg-white/10 text-dark-text px-3 py-1.5 rounded-full text-sm border border-white/20 hover:border-brand-accent/50 hover:text-brand-accent transition-all duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Project Link */}
                                        <div className="pt-4">
                                            <a
                                                href={project.url}
                                                target={project.url.startsWith('/') ? '_self' : '_blank'}
                                                rel={project.url.startsWith('/') ? undefined : 'noopener noreferrer'}
                                                className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                            >
                                                <span>View Project</span>
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                            {!project.url.startsWith('/') && (
                                                <div className="mt-3 text-sm text-dark-text-secondary font-mono">
                                                    {new URL(project.url).hostname}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div className="relative p-8 lg:p-12 order-1 lg:order-2">
                                    <div className="relative aspect-[4/3] group/image">
                                        {/* Simple clean image container */}
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-dark-card border border-white/10 group-hover:border-brand-accent/30 transition-all duration-500">
                                            <Image
                                                src={project.image}
                                                alt={project.imageAlt}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            {/* Subtle overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                        </div>

                                        {/* Floating action button */}
                                        <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                            <div className="bg-brand-accent text-white p-3 rounded-full shadow-lg">
                                                <ExternalLink className="h-5 w-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Our Work Button */}
            <div className="mt-16 text-center">
                <Link
                    href="/our-work"
                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-brand-accent/50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
                >
                    <span>View All Our Work</span>
                    <ArrowRight className="h-5 w-5" />
                </Link>
            </div>

            {/* Call to Action */}
            <div className="mt-24">
                <div className="relative bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-3xl p-12 lg:p-16 border border-brand-accent/20 overflow-hidden">
                    {/* Background decoration */}
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
                                Every exceptional project begins with a conversation. Let's discuss your vision and create a digital solution that exceeds your expectations.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                            >
                                <span>Start Your Project</span>
                                <ArrowUpRight className="h-5 w-5" />
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-brand-accent/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
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
