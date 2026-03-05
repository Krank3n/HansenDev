import React from 'react';
import Section from './common/Section';
import { ArrowRight, ExternalLink, Zap, Stethoscope, Building2, Waves, HardHat } from 'lucide-react';

const demos = [
    {
        name: 'Instant Alloy Scaffolding',
        industry: 'Construction',
        icon: <HardHat className="h-5 w-5" />,
        url: '/demo/instantalloy',
        color: 'text-orange-400',
        bg: 'bg-orange-500/10 border-orange-500/20',
    },
    {
        name: 'Barrier Reef Business Brokers',
        industry: 'Corporate',
        icon: <Building2 className="h-5 w-5" />,
        url: '/demo/brbb',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10 border-blue-500/20',
    },
    {
        name: 'Beaches Family Practice',
        industry: 'Medical',
        icon: <Stethoscope className="h-5 w-5" />,
        url: '/demo/beachesfp',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
        name: 'Cairns Wake Park',
        industry: 'Recreation',
        icon: <Waves className="h-5 w-5" />,
        url: '/demo/cairnswakepark',
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
        name: 'Sail Structures',
        industry: 'Industrial',
        icon: <HardHat className="h-5 w-5" />,
        url: '/demo/sailstructures',
        color: 'text-amber-400',
        bg: 'bg-amber-500/10 border-amber-500/20',
    },
];

const DemoShowcase: React.FC = () => {
    return (
        <Section
            id="demos"
            title="See What Your Site Could Look Like"
            subtitle="We rebuilt these real Cairns business websites to show what's possible. Click any demo to see the full redesign."
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {demos.map((demo) => (
                    <a
                        key={demo.name}
                        href={demo.url}
                        className={`group flex items-center gap-4 p-5 rounded-xl border ${demo.bg} hover:scale-[1.02] transition-all duration-300`}
                    >
                        <div className={`flex-shrink-0 ${demo.color}`}>
                            {demo.icon}
                        </div>
                        <div className="min-w-0">
                            <p className="text-white font-semibold text-sm truncate">{demo.name}</p>
                            <p className="text-dark-text-secondary text-xs">{demo.industry}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-dark-text-secondary group-hover:text-white group-hover:translate-x-1 transition-all duration-300 ml-auto flex-shrink-0" />
                    </a>
                ))}
                <a
                    href="/our-work"
                    className="group flex items-center gap-4 p-5 rounded-xl border border-brand-accent/20 bg-brand-accent/5 hover:scale-[1.02] transition-all duration-300"
                >
                    <div className="flex-shrink-0 text-brand-accent">
                        <Zap className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-brand-accent font-semibold text-sm">View All Case Studies</p>
                        <p className="text-dark-text-secondary text-xs">Full portfolio & improvements</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-brand-accent group-hover:translate-x-1 transition-all duration-300 ml-auto flex-shrink-0" />
                </a>
            </div>

            <div className="text-center bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8 border border-brand-accent/20">
                <p className="text-xl font-bold text-white mb-2">
                    Is your website outdated?
                </p>
                <p className="text-dark-text-secondary mb-6 max-w-xl mx-auto">
                    We'll show you exactly what a modern rebuild looks like for your business — no cost, no commitment.
                </p>
                <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/30 hover:-translate-y-1"
                >
                    <span>Get a Free Mockup of Your Site</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
            </div>
        </Section>
    );
};

export default DemoShowcase;
