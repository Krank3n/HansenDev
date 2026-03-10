import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    Download,
    CheckCircle,
    ArrowRight,
    Smartphone,
    User,
    FileText,
    Camera,
    Send,
    Zap,
    Clock,
    AlertCircle,
    TrendingUp,
    Target,
    Star,
    Settings,
    Plus,
    Edit3,
    Share2,
    Award,
    Lightbulb,
    BookOpen,
    Users,
    DollarSign
} from 'lucide-react';

const QuoteMateGettingStarted: React.FC = () => {
    const steps = [
        {
            number: 1,
            title: "Download & Install QuoteMate",
            time: "30 seconds",
            icon: <Download className="h-10 w-10 text-brand-accent" />,
            description: "Get the app on your phone and open it up",
            details: [
                "Visit Google Play Store on your Android phone",
                "Search for 'QuoteMate' or use the download link",
                "Tap 'Install' and wait 10 seconds",
                "Open the app - no account signup required yet"
            ],
            tips: [
                "Works on Android 8.0 and newer",
                "Requires about 50MB of storage",
                "Grant camera and storage permissions when asked"
            ],
            common_mistakes: [
                "Forgetting to grant permissions - you'll need them for photos"
            ]
        },
        {
            number: 2,
            title: "Set Up Your Business Profile",
            time: "90 seconds",
            icon: <User className="h-10 w-10 text-brand-accent" />,
            description: "Add your business details so quotes look professional",
            details: [
                "Tap 'Set up profile' on the welcome screen",
                "Enter your business name (e.g., 'Smith Carpentry')",
                "Add your ABN (optional but recommended)",
                "Enter phone number and email",
                "Upload your logo (optional - can do later)",
                "Add your business address"
            ],
            tips: [
                "Your logo appears on all PDF quotes - makes you look pro",
                "Can skip logo for now and add it later in Settings",
                "All this info stays private on your phone only"
            ],
            common_mistakes: [
                "Skipping this step - your quotes won't have your branding",
                "Uploading a low-quality logo - use at least 500x500px"
            ]
        },
        {
            number: 3,
            title: "Create Your First Quote",
            time: "4 minutes",
            icon: <FileText className="h-10 w-10 text-brand-accent" />,
            description: "Let's create a real quote to see how fast it is",
            details: [
                "Tap the big '+' button on the home screen",
                "Choose 'AI Quick Quote' for fastest results",
                "Describe your job in plain English (e.g., '5x4m Merbau deck')",
                "Watch AI list all materials needed - amazing!",
                "Review materials, tap any to adjust quantity",
                "Tap 'Get Bunnings Prices' - wait 5 seconds",
                "Add your labour cost and markup percentage",
                "Enter customer name and details",
                "Tap 'Generate Quote' - done!"
            ],
            tips: [
                "Be specific: '50m of 1.8m Colorbond fence' works better than 'fence'",
                "AI understands tradie language - talk naturally",
                "You can edit any material AI suggests",
                "Start with a simple job for your first quote"
            ],
            common_mistakes: [
                "Being too vague: 'deck' instead of '5x4m deck with stairs'",
                "Forgetting to add labour - materials alone don't make a quote!",
                "Not reviewing AI suggestions - always double-check quantities"
            ]
        },
        {
            number: 4,
            title: "Attach Photos (Optional)",
            time: "30 seconds",
            icon: <Camera className="h-10 w-10 text-brand-accent" />,
            description: "Add job site photos to your quote for extra professionalism",
            details: [
                "While creating quote, tap 'Add Photos' button",
                "Take photos of the site or select from gallery",
                "Add up to 5 photos per quote",
                "Photos show up in the PDF you send customers",
                "Helps customers remember which job it's for"
            ],
            tips: [
                "Take 'before' photos to show what needs doing",
                "Wide shots show the full scope of work",
                "Photos can increase your quote acceptance rate"
            ],
            common_mistakes: [
                "Dark/blurry photos - use good lighting",
                "Photos of unrelated things - keep it relevant"
            ]
        },
        {
            number: 5,
            title: "Review & Send Quote",
            time: "30 seconds",
            icon: <Send className="h-10 w-10 text-brand-accent" />,
            description: "Preview your professional quote and send it",
            details: [
                "Tap 'Preview PDF' to see what customer sees",
                "Check all prices, quantities, and totals",
                "Make sure GST is calculated correctly",
                "Tap 'Send Quote' when ready",
                "Choose: Email, SMS, WhatsApp, or save to share later",
                "Customer receives beautiful professional PDF"
            ],
            tips: [
                "Always preview before sending",
                "Email is most professional but SMS is fastest",
                "You can save PDF and send multiple ways",
                "Quote is also saved in your quote history"
            ],
            common_mistakes: [
                "Sending without previewing - check for typos!",
                "Wrong customer email - double-check before hitting send"
            ]
        }
    ];

    const quickTips = [
        {
            icon: <Zap className="h-6 w-6 text-brand-accent" />,
            title: "Use Templates for Common Jobs",
            description: "After a few quotes, save your frequent jobs as templates. Next time you need a '3.6m deck' quote, select the template and it's 90% done."
        },
        {
            icon: <Clock className="h-6 w-6 text-brand-accent" />,
            title: "Work Offline on Job Sites",
            description: "QuoteMate works fully offline. Create quotes on-site without internet, then sync prices when back online. No excuses to delay quotes!"
        },
        {
            icon: <Edit3 className="h-6 w-6 text-brand-accent" />,
            title: "Adjust AI Suggestions",
            description: "AI is smart but you're the expert. If AI suggests 6 posts but you know you need 7, just tap and change it. You're always in control."
        },
        {
            icon: <Target className="h-6 w-6 text-brand-accent" />,
            title: "Set Your Default Markup",
            description: "Go to Settings and set your standard markup % (e.g., 30%). QuoteMate will auto-apply it to materials, saving you time on every quote."
        },
        {
            icon: <Camera className="h-6 w-6 text-brand-accent" />,
            title: "Take Photos While On-Site",
            description: "Don't wait until you're home. Take photos during the site visit and add them directly to the quote. Send the quote before you even leave!"
        },
        {
            icon: <Share2 className="h-6 w-6 text-brand-accent" />,
            title: "Send Quotes Immediately",
            description: "The faster you send, the more likely you win the job. Strike while the iron is hot - send quotes within hours, not days."
        }
    ];

    const firstQuoteExamples = [
        {
            trade: "Deck Builders",
            example: "5x4m Merbau deck with 10 steps and handrails",
            what_happens: "AI lists: Merbau decking boards, joists, bearers, posts, concrete, galv bolts, stairs timber, handrail posts & rails, screws. Gets Bunnings prices. You add labour. Done in 4 minutes."
        },
        {
            trade: "Fencers",
            example: "50m of 1.8m Colorbond fence in Monument",
            what_happens: "AI calculates: 21 posts, 63m of rails (top/bottom/mid), 25 Colorbond sheets, post mix concrete, tek screws, caps. Bunnings prices added. You add install cost. Quote ready."
        },
        {
            trade: "Landscapers",
            example: "12m retaining wall using 200x75 treated pine sleepers",
            what_happens: "AI works out: 36 sleepers (3 high), 12 H4 posts, galv coach screws, aggregate for drainage. Gets prices. You add earthworks labour. Professional quote done."
        },
        {
            trade: "Carpenters",
            example: "Replace 15m of fence palings on existing frame",
            what_happens: "AI calculates: 75 palings (150mm @ 200 spacing), galv nails, gate hardware if needed. Bunnings prices fetched. You add removal & install time. Send quote."
        }
    ];

    const nextSteps = [
        {
            title: "Start Your 7-Day Free Trial",
            description: "Use your free trial on real jobs. Get a feel for the app. See the time savings firsthand.",
            action: "Start quoting!"
        },
        {
            title: "Set Up Job Templates",
            description: "After your first few quotes, save common jobs as templates for even faster quoting.",
            action: "Save templates"
        },
        {
            title: "Explore Advanced Features",
            description: "Try custom quote builder, multi-section quotes, quote tracking, and customer database.",
            action: "Explore features"
        },
        {
            title: "Upgrade When Ready",
            description: "After your 7-day trial, upgrade to Pro for unlimited quotes at $29/month. Worth every cent.",
            action: "Upgrade to Pro"
        }
    ];

    const troubleshooting = [
        {
            problem: "Can't find a specific Bunnings product",
            solution: "Use the custom item feature to add any product manually. Enter name, price, and quantity. Or use the Bunnings search within the app."
        },
        {
            problem: "AI suggests wrong materials",
            solution: "AI is good but not perfect. Simply tap the material and change it, or delete it and add your own. You're always in control."
        },
        {
            problem: "Bunnings prices seem off",
            solution: "Prices are fetched real-time but can vary by location. You can override any price manually if needed. Check Bunnings website for your local store."
        },
        {
            problem: "Quote PDF looks wrong on preview",
            solution: "Make sure you've set up your business profile fully. Check logo size (should be square-ish). Tap 'Refresh Preview' to regenerate."
        },
        {
            problem: "Can't send quote via email",
            solution: "Check you have an email app set up on your phone. Alternatively, save PDF and attach it manually, or send via SMS/WhatsApp."
        },
        {
            problem: "App running slow",
            solution: "Close and reopen the app. Clear cache in Settings if needed. Make sure you have the latest version from Play Store."
        }
    ];

    return (
        <>
            <Head>
                <title>QuoteMate Getting Started Guide - Create Your First Quote in 2 Minutes | Step-by-Step Tutorial</title>
                <meta name="description" content="Complete getting started guide for QuoteMate. Download app (30sec), setup profile (90sec), create first quote (4min). Step-by-step tutorial with tips for carpenters, fencers, landscapers. Learn how to use AI estimation, add Bunnings prices, send professional PDFs. Start quoting in under 10 minutes total." />
                <meta name="keywords" content="quotemate tutorial, how to use quotemate, quotemate guide, getting started quotemate, quotemate walkthrough, first quote tutorial, quotemate setup, quotemate tips, learn quotemate" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://hansendev.com.au/projects/quotemate-getting-started" />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://hansendev.com.au/projects/quotemate-getting-started" />
                <meta property="og:title" content="QuoteMate Getting Started - Your First Quote in 2 Minutes" />
                <meta property="og:description" content="Step-by-step guide to creating your first professional quote with QuoteMate. From download to sending your first quote in under 10 minutes." />
                <meta property="og:locale" content="en_AU" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="QuoteMate Getting Started Guide" />
                <meta name="twitter:description" content="Create your first quote in 2 minutes. Complete step-by-step tutorial." />

                {/* HowTo Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            "name": "How to Create Your First Quote with QuoteMate",
                            "description": "Complete step-by-step guide to downloading QuoteMate, setting up your profile, and creating your first professional tradie quote in under 10 minutes.",
                            "totalTime": "PT10M",
                            "estimatedCost": {
                                "@type": "MonetaryAmount",
                                "currency": "AUD",
                                "value": "0"
                            },
                            "tool": [
                                {
                                    "@type": "HowToTool",
                                    "name": "Android smartphone"
                                },
                                {
                                    "@type": "HowToTool",
                                    "name": "QuoteMate app"
                                }
                            ],
                            "step": [
                                {
                                    "@type": "HowToStep",
                                    "position": 1,
                                    "name": "Download & Install QuoteMate",
                                    "text": "Visit Google Play Store, search for 'QuoteMate', tap Install, and open the app. Grant camera and storage permissions when requested.",
                                    "url": "https://hansendev.com.au/projects/quotemate-getting-started#step-1"
                                },
                                {
                                    "@type": "HowToStep",
                                    "position": 2,
                                    "name": "Set Up Your Business Profile",
                                    "text": "Enter your business name, ABN, phone, email, and optionally upload your logo. This information appears on all your quotes for a professional appearance.",
                                    "url": "https://hansendev.com.au/projects/quotemate-getting-started#step-2"
                                },
                                {
                                    "@type": "HowToStep",
                                    "position": 3,
                                    "name": "Create Your First Quote",
                                    "text": "Tap the '+' button, choose 'AI Quick Quote', describe your job in plain English (e.g., '5x4m Merbau deck'), let AI list materials, fetch Bunnings prices, add your labour cost, enter customer details, and generate the quote.",
                                    "url": "https://hansendev.com.au/projects/quotemate-getting-started#step-3"
                                },
                                {
                                    "@type": "HowToStep",
                                    "position": 4,
                                    "name": "Attach Photos",
                                    "text": "Optionally add up to 5 job site photos to your quote by tapping 'Add Photos'. This increases professionalism and helps customers remember the job.",
                                    "url": "https://hansendev.com.au/projects/quotemate-getting-started#step-4"
                                },
                                {
                                    "@type": "HowToStep",
                                    "position": 5,
                                    "name": "Review & Send Quote",
                                    "text": "Preview your PDF quote, check all details, then send via email, SMS, or WhatsApp. The customer receives a professional-looking quote with your branding.",
                                    "url": "https://hansendev.com.au/projects/quotemate-getting-started#step-5"
                                }
                            ]
                        })
                    }}
                />

                {/* Article Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": "QuoteMate Getting Started Guide: Your First Quote in 2 Minutes",
                            "description": "Comprehensive step-by-step tutorial for Australian tradies on how to download, set up, and create professional quotes using QuoteMate. Includes tips, examples, troubleshooting, and best practices.",
                            "author": {
                                "@type": "Organization",
                                "name": "Hansen Dev"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Hansen Dev",
                                "url": "https://hansendev.com.au"
                            },
                            "datePublished": "2025-01-15",
                            "dateModified": "2025-01-15"
                        })
                    }}
                />

                {/* FAQ Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "How long does it take to create my first quote with QuoteMate?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Your first quote takes about 4 minutes to create, plus 2 minutes for initial setup. Total time from downloading the app to sending your first quote is approximately 7-10 minutes. Subsequent quotes take under 5 minutes as you'll already be set up."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Do I need to create an account to use QuoteMate?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "No account is required to start using QuoteMate. Simply download the app and start creating quotes immediately. You only need to set up a basic business profile (name, phone, email) which takes 90 seconds. You get a 7-day free trial with unlimited quotes and no signup required."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What should I include in my first practice quote?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Start with a simple, real job you're familiar with. Examples: '5x4m Merbau deck' for carpenters, '50m of 1.8m Colorbond fence' for fencers, or '12m retaining wall' for landscapers. Being specific helps AI suggest accurate materials. You can practice on actual upcoming jobs to see real-world results."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can I edit the materials that AI suggests?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, absolutely! AI provides smart suggestions but you're always in control. Tap any material to adjust quantity, delete items you don't need, or add custom materials. You can also manually override any Bunnings price if needed. The AI is a helpful starting point, not a restriction."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What if I make a mistake on my first quote?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "No worries! You can edit quotes at any time before sending. After sending, you can create a revised quote and resend it. You have a full 7-day free trial, so use it to learn the app without pressure. It's impossible to mess up - worst case, you start a new quote."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Do I need internet connection to create quotes?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "QuoteMate works fully offline! You can create, edit, and save quotes without internet. You only need internet to fetch current Bunnings prices and to send quotes via email/SMS. This means you can quote on remote job sites and sync prices later when back online."
                                    }
                                }
                            ]
                        })
                    }}
                />

                {/* Breadcrumb Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://hansendev.com.au"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "QuoteMate",
                                    "item": "https://hansendev.com.au/projects/quotemate"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Getting Started",
                                    "item": "https://hansendev.com.au/projects/quotemate-getting-started"
                                }
                            ]
                        })
                    }}
                />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Back Navigation */}
                <div className="">
                    <div className="container-custom py-6">
                        <Link href="/projects/quotemate" className="inline-flex items-center gap-2 px-4 py-2 text-dark-text-secondary hover:text-brand-accent transition-colors duration-300">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to QuoteMate</span>
                        </Link>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-6">
                                <BookOpen className="h-4 w-4" />
                                <span>Complete Tutorial</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Your First Quote<br />in 2 Minutes
                            </h1>

                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                Simple step-by-step guide to getting started with QuoteMate. From download to your first professional quote in <span className="text-brand-accent font-bold">under 10 minutes</span> total.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link
                                    href="/quote-tool"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Download & Start Now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Overview */}
                <section className="py-12 bg-gradient-to-r from-brand-accent/20 via-brand-primary/20 to-brand-accent/20 ">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-5 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-brand-accent mb-2">Step 1</div>
                                    <div className="text-sm text-dark-text-secondary">Download<br />(30 sec)</div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <ArrowRight className="h-6 w-6 text-brand-accent" />
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-brand-accent mb-2">Step 2</div>
                                    <div className="text-sm text-dark-text-secondary">Setup Profile<br />(90 sec)</div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <ArrowRight className="h-6 w-6 text-brand-accent" />
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-brand-accent mb-2">Step 3</div>
                                    <div className="text-sm text-dark-text-secondary">First Quote<br />(4 min)</div>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full ">
                                    <Clock className="h-5 w-5 text-brand-accent" />
                                    <span className="text-white font-bold">Total Time: Under 10 Minutes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Steps */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Step-by-Step Guide</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Follow these simple steps to create your first professional quote
                                </p>
                            </div>

                            <div className="space-y-12">
                                {steps.map((step, index) => (
                                    <div key={index} id={`step-${step.number}`} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 ">
                                        {/* Step Header */}
                                        <div className="flex items-start gap-6 mb-8">
                                            <div className="w-20 h-20 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-2xl flex items-center justify-center  flex-shrink-0">
                                                {step.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <div className="text-3xl font-bold text-brand-accent">Step {step.number}</div>
                                                    <div className="flex items-center gap-2 bg-brand-accent/20 text-brand-accent px-4 py-1 rounded-full text-sm font-bold">
                                                        <Clock className="h-4 w-4" />
                                                        <span>{step.time}</span>
                                                    </div>
                                                </div>
                                                <h3 className="text-3xl font-bold text-white mb-3">{step.title}</h3>
                                                <p className="text-xl text-dark-text-secondary">{step.description}</p>
                                            </div>
                                        </div>

                                        {/* Detailed Instructions */}
                                        <div className="mb-8">
                                            <h4 className="text-lg font-bold text-white mb-4">What to Do:</h4>
                                            <div className="space-y-3">
                                                {step.details.map((detail, didx) => (
                                                    <div key={didx} className="flex items-start gap-3">
                                                        <CheckCircle className="h-6 w-6 text-brand-accent flex-shrink-0 mt-0.5" />
                                                        <span className="text-dark-text-secondary">{detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tips & Common Mistakes */}
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div className="bg-green-400/10 rounded-xl p-6 ">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Lightbulb className="h-5 w-5 text-green-400" />
                                                    <h4 className="font-bold text-white">Pro Tips:</h4>
                                                </div>
                                                <ul className="space-y-2">
                                                    {step.tips.map((tip, tidx) => (
                                                        <li key={tidx} className="text-sm text-dark-text-secondary flex gap-2">
                                                            <span className="text-green-400">•</span>
                                                            <span>{tip}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-yellow-500/10 rounded-xl p-6 ">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                                                    <h4 className="font-bold text-white">Avoid These Mistakes:</h4>
                                                </div>
                                                <ul className="space-y-2">
                                                    {step.common_mistakes.map((mistake, midx) => (
                                                        <li key={midx} className="text-sm text-dark-text-secondary flex gap-2">
                                                            <span className="text-yellow-500">•</span>
                                                            <span>{mistake}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* First Quote Examples */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Example First Quotes by Trade</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    See what happens when you create your first quote
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {firstQuoteExamples.map((example, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 ">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Award className="h-8 w-8 text-brand-accent" />
                                            <h3 className="text-2xl font-bold text-white">{example.trade}</h3>
                                        </div>

                                        <div className="bg-brand-accent/10 rounded-xl p-6  mb-6">
                                            <div className="text-sm text-brand-accent font-semibold mb-2">YOU TYPE:</div>
                                            <div className="text-white font-mono">{example.example}</div>
                                        </div>

                                        <div>
                                            <div className="text-sm font-semibold text-white mb-3">What Happens:</div>
                                            <p className="text-dark-text-secondary text-sm leading-relaxed">{example.what_happens}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Tips */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Quick Tips for Success</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Get the most out of QuoteMate from day one
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {quickTips.map((tip, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6   transition-all duration-500">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center ">
                                                {tip.icon}
                                            </div>
                                            <h3 className="text-lg font-bold text-white">{tip.title}</h3>
                                        </div>
                                        <p className="text-dark-text-secondary text-sm leading-relaxed">{tip.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Troubleshooting */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Troubleshooting Common Issues</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Quick solutions to common first-time problems
                                </p>
                            </div>

                            <div className="space-y-6">
                                {troubleshooting.map((item, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 ">
                                        <div className="flex items-start gap-4 mb-4">
                                            <AlertCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-white mb-3">{item.problem}</h3>
                                                <div className="bg-green-400/10 rounded-xl p-4 ">
                                                    <div className="text-sm font-semibold text-green-400 mb-2">SOLUTION:</div>
                                                    <p className="text-dark-text-secondary text-sm leading-relaxed">{item.solution}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8  text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">Still Need Help?</h3>
                                <p className="text-dark-text-secondary mb-6">
                                    Our Australian support team is here to help. Contact us via the app or at support@quotemate.app
                                </p>
                                <div className="flex items-center justify-center gap-2 text-brand-accent">
                                    <Users className="h-5 w-5" />
                                    <span className="font-semibold">Real Aussie support team who understand tradie work</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Next Steps */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">What to Do Next</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Your journey with QuoteMate has just begun
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {nextSteps.map((step, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 ">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                                {index + 1}
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                        </div>
                                        <p className="text-dark-text-secondary mb-4 leading-relaxed">{step.description}</p>
                                        <div className="text-brand-accent font-semibold flex items-center gap-2">
                                            <ArrowRight className="h-4 w-4" />
                                            <span>{step.action}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Internal Links */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-white mb-4">Learn More About QuoteMate</h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <Link href="/projects/quotemate-features" className="bg-white/5 backdrop-blur-sm rounded-xl p-6   transition-all duration-300 group">
                                    <Zap className="h-8 w-8 text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-bold text-white mb-2">All Features</h3>
                                    <p className="text-dark-text-secondary text-sm">Explore every feature in detail</p>
                                </Link>

                                <Link href="/projects/quotemate-pricing" className="bg-white/5 backdrop-blur-sm rounded-xl p-6   transition-all duration-300 group">
                                    <DollarSign className="h-8 w-8 text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-bold text-white mb-2">Pricing & ROI</h3>
                                    <p className="text-dark-text-secondary text-sm">See plans and calculate savings</p>
                                </Link>

                                <Link href="/projects/quotemate-for-tradies" className="bg-white/5 backdrop-blur-sm rounded-xl p-6   transition-all duration-300 group">
                                    <Users className="h-8 w-8 text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-bold text-white mb-2">For Your Trade</h3>
                                    <p className="text-dark-text-secondary text-sm">Trade-specific features & examples</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 ">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Create Your First Quote?
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Download QuoteMate now and have your first professional quote ready in under 10 minutes. 7-day free trial with unlimited quotes.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <Link
                                    href="/quote-tool"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Download QuoteMate Free</span>
                                </Link>
                                <Link
                                    href="/projects/quotemate"
                                    className="inline-flex items-center justify-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 "
                                >
                                    <span>Learn More</span>
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark-text-secondary">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>7-Day Free Trial</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>2 Minute Setup</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>No Credit Card</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Works Offline</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default QuoteMateGettingStarted;
