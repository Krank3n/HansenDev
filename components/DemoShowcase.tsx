import React from 'react';
import Section from './common/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Zap, Stethoscope, Building2, Waves, HardHat } from 'lucide-react';
import { trackDemoView, trackCTA } from '../lib/gtag';

const demos = [
    {
        name: 'Instant Alloy Scaffolding',
        industry: 'Construction',
        icon: <HardHat className="h-5 w-5" />,
        url: '/demo/instantalloy',
        gradient: 'from-orange-500/20 to-orange-500/5',
        iconColor: 'text-orange-400',
    },
    {
        name: 'Barrier Reef Business Brokers',
        industry: 'Corporate',
        icon: <Building2 className="h-5 w-5" />,
        url: '/demo/brbb',
        gradient: 'from-blue-500/20 to-blue-500/5',
        iconColor: 'text-blue-400',
    },
    {
        name: 'Beaches Family Practice',
        industry: 'Medical',
        icon: <Stethoscope className="h-5 w-5" />,
        url: '/demo/beachesfp',
        gradient: 'from-emerald-500/20 to-emerald-500/5',
        iconColor: 'text-emerald-400',
    },
    {
        name: 'Cairns Wake Park',
        industry: 'Recreation',
        icon: <Waves className="h-5 w-5" />,
        url: '/demo/cairnswakepark',
        gradient: 'from-cyan-500/20 to-cyan-500/5',
        iconColor: 'text-cyan-400',
    },
    {
        name: 'Sail Structures',
        industry: 'Industrial',
        icon: <HardHat className="h-5 w-5" />,
        url: '/demo/sailstructures',
        gradient: 'from-amber-500/20 to-amber-500/5',
        iconColor: 'text-amber-400',
    },
];

const DemoShowcase: React.FC = () => {
    const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

    return (
        <Section
            id="demos"
            title="See What Your Site Could Look Like"
            subtitle="We rebuilt these real Cairns business websites to show what's possible. Click any demo to see the full redesign."
            className="relative overflow-hidden"
        >
            <div className="absolute inset-0 gradient-mesh pointer-events-none opacity-50"></div>

            <div
                ref={gridRef}
                className={`relative grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10 stagger-children ${gridVisible ? 'revealed' : ''}`}
            >
                {demos.map((demo) => (
                    <a
                        key={demo.name}
                        href={demo.url}
                        onClick={() => trackDemoView(demo.name)}
                        className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] hover:scale-[1.02] transition-all duration-500 hover-glow"
                    >
                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${demo.gradient} flex items-center justify-center ${demo.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                            {demo.icon}
                        </div>
                        <div className="min-w-0">
                            <p className="text-white font-semibold text-sm truncate">{demo.name}</p>
                            <p className="text-dark-text-secondary/60 text-xs">{demo.industry}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-dark-text-secondary/40 group-hover:text-brand-accent group-hover:translate-x-1 transition-all duration-300 ml-auto flex-shrink-0" />
                    </a>
                ))}
                <a
                    href="/our-work"
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-brand-accent/[0.06] to-brand-primary/[0.03] hover:from-brand-accent/[0.12] hover:to-brand-primary/[0.06] hover:scale-[1.02] transition-all duration-500"
                >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-accent/20 to-brand-primary/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-300">
                        <Zap className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-brand-accent font-semibold text-sm">View All Case Studies</p>
                        <p className="text-dark-text-secondary/60 text-xs">Full portfolio & improvements</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-brand-accent/60 group-hover:translate-x-1 transition-all duration-300 ml-auto flex-shrink-0" />
                </a>
            </div>

            <div className="relative text-center rounded-3xl p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/[0.06] via-brand-primary/[0.04] to-brand-accent/[0.06]"></div>
                <div className="relative">
                    <p className="text-xl font-bold text-white mb-2">
                        Is your website outdated?
                    </p>
                    <p className="text-dark-text-secondary mb-6 max-w-xl mx-auto">
                        We'll show you exactly what a modern rebuild looks like for your business — no cost, no commitment.
                    </p>
                    <a
                        href="#contact"
                        onClick={() => trackCTA('Get a Free Mockup', 'demo-showcase')}
                        className="group inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-2xl font-bold transition-all duration-500 hover:shadow-xl hover:shadow-brand-accent/20 hover:-translate-y-1"
                    >
                        <span>Get a Free Mockup of Your Site</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default DemoShowcase;
