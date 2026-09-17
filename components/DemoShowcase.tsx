import React from 'react';
import Section from './common/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, ArrowUpRight, Sparkles, Waves, HardHat, Tent } from 'lucide-react';
import { trackDemoView, trackCTA } from '../lib/gtag';

const demos = [
    {
        name: 'Instant Alloy Scaffolding',
        industry: 'Construction',
        icon: <HardHat className="h-5 w-5" />,
        url: '/demo/instantalloy',
    },
    {
        name: 'Cairns Wake Park',
        industry: 'Recreation',
        icon: <Waves className="h-5 w-5" />,
        url: '/demo/cairnswakepark',
    },
    {
        name: 'Sail Structures',
        industry: 'Industrial',
        icon: <Tent className="h-5 w-5" />,
        url: '/demo/sailstructures',
    },
];

const DemoShowcase: React.FC = () => {
    const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();
    const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

    return (
        <Section
            id="demos"
            eyebrow="Free redesign demos"
            title="See what your site could look like."
            subtitle="We rebuilt these real Cairns business websites to show what's possible. Open any demo to explore the full redesign."
            className="relative overflow-hidden bg-dark-surface/60"
        >
            <div className="absolute inset-0 gradient-mesh pointer-events-none opacity-60" />

            <div
                ref={gridRef}
                className={`relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 stagger-children ${gridVisible ? 'revealed' : ''}`}
            >
                {demos.map((demo) => (
                    <a
                        key={demo.name}
                        href={demo.url}
                        onClick={() => trackDemoView(demo.name)}
                        className="glass-card hover-glow group flex flex-col p-6"
                    >
                        <div className="flex items-start justify-between">
                            <span className="icon-tile h-11 w-11">{demo.icon}</span>
                            <ArrowUpRight className="h-5 w-5 text-dark-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-accent" />
                        </div>
                        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-dark-muted">{demo.industry}</p>
                        <p className="mt-1 font-semibold leading-snug text-white">{demo.name}</p>
                        <p className="mt-4 text-xs text-brand-accent">View the redesign</p>
                    </a>
                ))}
                <a
                    href="/our-work"
                    className="group flex flex-col justify-between rounded-2xl border border-brand-accent/25 bg-gradient-to-br from-brand-accent/[0.12] to-brand-primary/[0.04] p-6 transition-all duration-400 hover:border-brand-accent/50 hover:from-brand-accent/[0.18]"
                >
                    <span className="icon-tile h-11 w-11"><Sparkles className="h-5 w-5" /></span>
                    <div>
                        <p className="font-semibold text-white">All case studies</p>
                        <p className="mt-1 text-sm text-dark-text-secondary">Full portfolio, before-and-after improvements.</p>
                        <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-brand-soft">
                            Browse <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </p>
                    </div>
                </a>
            </div>

            {/* Offer */}
            <div
                ref={ctaRef}
                className={`panel relative mt-8 transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
                <div className="noise-overlay absolute inset-0" />
                <div className="relative flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-xl">
                        <h3 className="text-2xl font-bold text-white sm:text-3xl">Is your website outdated?</h3>
                        <p className="mt-2 text-dark-text-secondary">
                            We&apos;ll show you exactly what a modern rebuild looks like for your business. No cost, no commitment.
                        </p>
                    </div>
                    <a
                        href="#contact-demo"
                        onClick={() => trackCTA('Get a Free Mockup', 'demo-showcase')}
                        className="group inline-flex flex-shrink-0 items-center justify-center gap-2.5 rounded-xl btn-gradient px-7 py-4 font-semibold text-white"
                    >
                        <span>Get a free mockup of your site</span>
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default DemoShowcase;
