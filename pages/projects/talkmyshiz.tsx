import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowLeft,
    Download,
    Shield,
    Youtube,
    Mic,
    Scissors,
    Captions,
    PenLine,
    Video,
    CheckCircle,
    Lock,
    Sparkles,
    Smartphone
} from 'lucide-react';

const TalkMyShiz: React.FC = () => {
    return (
        <>
            <Head>
                <title>TalkMyShiz - Teleprompter, Auto-Editing and Captions for Talking-Head Video</title>
                <meta name="description" content="TalkMyShiz is a teleprompter, editor and publishing tool in one app. Read your script beside the lens, cut the filler words automatically, burn in captions, and publish straight to YouTube. Your video never leaves your phone." />

                <meta name="keywords" content="teleprompter app, talking head video, filler word remover, automatic captions, video editor for phone, business video, youtube publishing app, script writer" />
                <meta name="author" content="Hansen Dev" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://hansendev.com.au/projects/talkmyshiz" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hansendev.com.au/projects/talkmyshiz" />
                <meta property="og:title" content="TalkMyShiz - Teleprompter, Auto-Editing and Captions" />
                <meta property="og:description" content="Record talking-head video without losing your place, then ship it. Teleprompter, automatic filler-word removal, karaoke captions and one-tap YouTube publishing." />
                <meta property="og:image" content="https://hansendev.com.au/assets/projects/talkmyshiz-teleprompter.png" />
                <meta property="og:site_name" content="Hansen Dev" />
                <meta property="og:locale" content="en_AU" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://hansendev.com.au/projects/talkmyshiz" />
                <meta name="twitter:title" content="TalkMyShiz - Teleprompter, Auto-Editing and Captions" />
                <meta name="twitter:description" content="Read to camera, not off it. Then cut the ums, caption it, and publish it." />
                <meta name="twitter:image" content="https://hansendev.com.au/assets/projects/talkmyshiz-teleprompter.png" />

                <meta name="application-name" content="TalkMyShiz" />
                <meta name="apple-mobile-web-app-title" content="TalkMyShiz" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "MobileApplication",
                            "name": "TalkMyShiz",
                            "description": "A teleprompter, editor and publishing tool in one app, built for people who make business video on a phone. Records to a scrolling script, removes filler words and long pauses, burns in word-by-word captions, and publishes to YouTube.",
                            "applicationCategory": "MultimediaApplication",
                            "operatingSystem": ["Android 7.0+"],
                            "offers": {
                                "@type": "Offer",
                                "availability": "https://schema.org/InStock",
                                "price": "0",
                                "priceCurrency": "USD"
                            },
                            "author": {
                                "@type": "Organization",
                                "name": "HansenDev PTY LTD",
                                "url": "https://hansendev.com.au"
                            },
                            "downloadUrl": "https://play.google.com/store/apps/details?id=com.talkmyshiz.app",
                            "privacyPolicy": "https://hansendev.com.au/projects/talkmyshiz-privacy",
                            "screenshot": "https://hansendev.com.au/assets/projects/talkmyshiz-teleprompter.png",
                            "featureList": [
                                "Teleprompter that scrolls beside the lens at your reading pace",
                                "AI script writing from a topic, tone and length",
                                "Automatic removal of filler words, false starts and long pauses",
                                "Broadcast-loudness audio cleanup with presets",
                                "Word-by-word karaoke captions burnt in, or exported as SRT",
                                "Publish straight to YouTube from inside the app"
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
                                { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://hansendev.com.au/our-work" },
                                { "@type": "ListItem", "position": 3, "name": "TalkMyShiz", "item": "https://hansendev.com.au/projects/talkmyshiz" }
                            ]
                        })
                    }}
                />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Back Navigation */}
                <div className="">
                    <div className="container-custom py-6">
                        <Link href="/our-work" className="inline-flex items-center gap-2 text-dark-text-secondary hover:text-brand-accent transition-colors duration-300">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to our work</span>
                        </Link>
                    </div>
                </div>

                {/* Hero */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,92,255,0.18),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-6">
                                <Video className="h-4 w-4" />
                                <span>Teleprompter &amp; Video Editing App</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Read to camera,<br />not off it
                            </h1>

                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                TalkMyShiz is a teleprompter, an editor and a publishing tool in one app, built for people who make <span className="text-brand-accent font-bold">business video on a phone</span>
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center mb-8">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.talkmyshiz.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Get it on Google Play</span>
                                </a>
                                <Link
                                    href="/projects/talkmyshiz-privacy"
                                    className="inline-flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                                >
                                    <Shield className="h-6 w-6" />
                                    <span>Privacy Policy</span>
                                </Link>
                            </div>

                            <p className="text-sm text-dark-text-secondary">
                                <strong className="text-white">Android</strong> • Recording and the teleprompter are free and unlimited • No ads, no analytics, no trackers
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Banner */}
                <section className="py-12 bg-gradient-to-r from-brand-accent/20 via-brand-primary/20 to-brand-accent/20">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">0</div>
                                <div className="text-dark-text-secondary">Frames of video uploaded</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">Free</div>
                                <div className="text-dark-text-secondary">Teleprompter &amp; recording, forever</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">1 tap</div>
                                <div className="text-dark-text-secondary">From finished cut to YouTube</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">None</div>
                                <div className="text-dark-text-secondary">Analytics or ad SDKs</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What it does */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">What the app does</h2>
                            <p className="text-xl text-dark-text-secondary mb-14 text-center max-w-3xl mx-auto">
                                One pass from a blank page to a published video, without leaving your phone.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: <Mic className="h-6 w-6" />,
                                        title: 'Read without losing your place',
                                        body: 'Your script scrolls in a band beside the lens at your reading pace, so your eyes stay where the viewer expects them. Blank lines split the script into beats and the prompter pauses on each one, so you can retake a single beat instead of the whole video.'
                                    },
                                    {
                                        icon: <PenLine className="h-6 w-6" />,
                                        title: 'Let the writer draft it',
                                        body: 'Give it a topic, a tone and a length and it writes the script. Save your business document once and every script draws its facts from your own material instead of guessing.'
                                    },
                                    {
                                        icon: <Scissors className="h-6 w-6" />,
                                        title: 'Cut the ums without an editor',
                                        body: 'After a take, TalkMyShiz transcribes what you said with word-level timing, then finds the filler words, the repeated false starts and the long pauses. You see every proposed cut and approve them one at a time. Your original recording is never modified.'
                                    },
                                    {
                                        icon: <Captions className="h-6 w-6" />,
                                        title: 'Captions that keep up',
                                        body: 'Word-by-word karaoke captions burnt into the video, with size, position and case under your control. Or export an SRT and keep the pixels clean.'
                                    }
                                ].map((f) => (
                                    <div key={f.title} className="bg-white/[0.03] rounded-2xl p-8 hover:bg-white/[0.05] transition-colors duration-300">
                                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-accent/15 text-brand-accent mb-5">
                                            {f.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">{f.title}</h3>
                                        <p className="text-dark-text-secondary leading-relaxed">{f.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Screenshots */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-14 text-center">Inside the app</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    { src: '/assets/projects/talkmyshiz-teleprompter.png', alt: 'TalkMyShiz teleprompter scrolling over a live camera feed', caption: 'The prompter, over the live camera' },
                                    { src: '/assets/projects/talkmyshiz-ai-writer.png', alt: 'TalkMyShiz AI script writer screen', caption: 'The script writer' },
                                    { src: '/assets/projects/talkmyshiz-auto-edit.png', alt: 'TalkMyShiz automatic editing screen showing proposed cuts', caption: 'Every cut, proposed and approved' }
                                ].map((s) => (
                                    <figure key={s.src}>
                                        <div className="rounded-2xl overflow-hidden bg-black/40">
                                            <Image
                                                src={s.src}
                                                alt={s.alt}
                                                width={1080}
                                                height={2400}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                        <figcaption className="text-center text-sm text-dark-text-secondary mt-4">{s.caption}</figcaption>
                                    </figure>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* YouTube publishing — this section exists for people deciding whether to connect
                    their Google account, and for Google's own OAuth reviewers. Keep it accurate. */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-medium uppercase tracking-wider mb-6">
                                <Youtube className="h-5 w-5" />
                                <span>Publishing to YouTube</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Connecting your YouTube account
                            </h2>

                            <p className="text-xl text-dark-text-secondary mb-8 leading-relaxed">
                                TalkMyShiz can upload a finished video straight to your own YouTube channel, so the
                                last step of making a video does not mean moving the file to a computer. Connecting
                                YouTube is entirely optional — every other part of the app works without it.
                            </p>

                            <div className="bg-white/[0.03] rounded-2xl p-8 mb-8">
                                <h3 className="text-xl font-bold text-white mb-5">What the app asks for, and why</h3>
                                <div className="space-y-5">
                                    <div className="flex gap-4">
                                        <CheckCircle className="h-5 w-5 text-brand-accent shrink-0 mt-1" />
                                        <div>
                                            <p className="text-white font-semibold mb-1">
                                                One scope: <code className="text-brand-accent font-mono text-sm">youtube.upload</code>
                                            </p>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                It is the narrowest scope that allows an upload. It permits the app to upload
                                                a video to your channel and nothing else — it cannot read your videos, your
                                                analytics, your comments or your subscribers, and it cannot delete anything.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <CheckCircle className="h-5 w-5 text-brand-accent shrink-0 mt-1" />
                                        <div>
                                            <p className="text-white font-semibold mb-1">The upload goes device to YouTube</p>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Your finished video is sent from your phone straight to YouTube under your own
                                                Google account. It does not pass through our servers, and we never hold a copy.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <CheckCircle className="h-5 w-5 text-brand-accent shrink-0 mt-1" />
                                        <div>
                                            <p className="text-white font-semibold mb-1">Your tokens stay on your device</p>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                The sign-in tokens are held in the Android keystore on your phone. They are never
                                                sent to us and never stored on our servers.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <CheckCircle className="h-5 w-5 text-brand-accent shrink-0 mt-1" />
                                        <div>
                                            <p className="text-white font-semibold mb-1">You can disconnect at any time</p>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Settings → Publishing → Disconnect inside the app, or revoke access from your
                                                Google account at{' '}
                                                <a
                                                    href="https://myaccount.google.com/permissions"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-brand-accent hover:underline"
                                                >
                                                    myaccount.google.com/permissions
                                                </a>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-dark-text-secondary leading-relaxed">
                                The full detail of what the app handles, what leaves your device and what is deleted is
                                set out in the{' '}
                                <Link href="/projects/talkmyshiz-privacy" className="text-brand-accent hover:underline font-semibold">
                                    TalkMyShiz Privacy Policy
                                </Link>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Privacy */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-6">
                                <Lock className="h-4 w-4" />
                                <span>Privacy</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Your footage stays yours</h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { title: 'Video never leaves the phone', body: 'Recording, editing and export all happen on your device. We never receive your footage.' },
                                    { title: 'Only the audio is uploaded', body: 'To build a transcript the app uploads the audio track alone, and it is deleted the moment the transcript comes back.' },
                                    { title: 'No account required', body: 'No name, email or password. The app holds an anonymous ID used only for fair-use limits.' },
                                    { title: 'No analytics, no ads', body: 'The app ships no analytics SDK, no advertising SDK and no third-party trackers.' }
                                ].map((p) => (
                                    <div key={p.title} className="bg-white/[0.03] rounded-2xl p-6">
                                        <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                                        <p className="text-dark-text-secondary leading-relaxed">{p.body}</p>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/projects/talkmyshiz-privacy"
                                className="inline-flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                            >
                                <Shield className="h-5 w-5" />
                                <span>Read the full privacy policy</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Plans */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">Plans</h2>
                            <p className="text-xl text-dark-text-secondary mb-14 text-center max-w-3xl mx-auto">
                                Recording and the teleprompter cost us nothing and stay free forever. Everything metered
                                maps to something we are actually billed for.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        name: 'Free',
                                        price: '$0',
                                        period: '',
                                        features: ['Teleprompter and recording, unlimited', '5 AI script writes per month', '2 finished videos per month', '1 brand']
                                    },
                                    {
                                        name: 'Pro',
                                        price: '$19.99',
                                        period: '/ month, or $119.99 / year',
                                        highlight: true,
                                        features: ['Everything in Free', '300 AI writes per day', '30 finished videos per day', '20 minutes of cloud voice per month', 'Publish to YouTube', '1 brand']
                                    },
                                    {
                                        name: 'Studio',
                                        price: '$49.99',
                                        period: '/ month, or $349.99 / year',
                                        features: ['Everything in Pro', '600 AI writes per day', '60 finished videos per day', '90 minutes of cloud voice per month', 'Unlimited brands']
                                    }
                                ].map((tier) => (
                                    <div
                                        key={tier.name}
                                        className={`rounded-2xl p-8 ${tier.highlight ? 'bg-brand-accent/10 ring-1 ring-brand-accent/40' : 'bg-white/[0.03]'}`}
                                    >
                                        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                                        <div className="mb-1">
                                            <span className="text-4xl font-bold text-white">{tier.price}</span>
                                        </div>
                                        <p className="text-sm text-dark-text-secondary mb-6">{tier.period || 'forever'}</p>
                                        <ul className="space-y-3">
                                            {tier.features.map((f) => (
                                                <li key={f} className="flex gap-3 text-dark-text-secondary">
                                                    <CheckCircle className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm text-dark-text-secondary mt-8 text-center">
                                Yearly plans include a 7-day free trial. Prices shown in USD; Google Play converts to your
                                local currency at checkout.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-24 bg-gradient-to-r from-brand-accent/20 via-brand-primary/20 to-brand-accent/20">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 mb-6">
                                <Image
                                    src="/assets/projects/talkmyshiz-icon.png"
                                    alt="TalkMyShiz app icon"
                                    width={64}
                                    height={64}
                                    className="rounded-2xl"
                                />
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Make the video you keep putting off
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8">
                                Free to install. The teleprompter and recording stay free and unlimited.
                            </p>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.talkmyshiz.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                            >
                                <Smartphone className="h-6 w-6" />
                                <span>Get it on Google Play</span>
                            </a>
                            <p className="text-sm text-dark-text-secondary mt-6">
                                Made by HansenDev PTY LTD, Cairns, Queensland.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TalkMyShiz;
