import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    Download,
    CheckCircle,
    X,
    Clock,
    DollarSign,
    Zap,
    FileText,
    TrendingUp,
    AlertTriangle,
    Target,
    Award,
    BarChart3,
    Smartphone,
    Shield,
    Users,
    ArrowRight,
    Star,
    MessageSquare,
    ThumbsUp,
    ThumbsDown
} from 'lucide-react';

const QuoteMateVsTraditional: React.FC = () => {
    const comparisonTable = [
        {
            feature: "Time per Quote",
            manual: "2-3 hours",
            excel: "1-2 hours",
            quotemate: "Under 5 minutes",
            winner: "quotemate"
        },
        {
            feature: "Material Calculations",
            manual: "Manual calculations, easy errors",
            excel: "Manual formulas, time-consuming",
            quotemate: "AI calculates instantly",
            winner: "quotemate"
        },
        {
            feature: "Price Accuracy",
            manual: "Outdated, need to check Bunnings",
            excel: "Manual updates required",
            quotemate: "Real-time Bunnings pricing",
            winner: "quotemate"
        },
        {
            feature: "Professional Appearance",
            manual: "Handwritten or basic Word doc",
            excel: "Spreadsheet look, not branded",
            quotemate: "Branded professional PDFs",
            winner: "quotemate"
        },
        {
            feature: "Works On-Site",
            manual: "Notepad only",
            excel: "Need laptop",
            quotemate: "Phone app, fully offline",
            winner: "quotemate"
        },
        {
            feature: "Quote Tracking",
            manual: "Paper files or memory",
            excel: "Manual spreadsheet tracking",
            quotemate: "Auto-organized, searchable",
            winner: "quotemate"
        },
        {
            feature: "Learning Curve",
            manual: "Easy but slow",
            excel: "Moderate - need spreadsheet skills",
            quotemate: "Simple - AI does the work",
            winner: "quotemate"
        },
        {
            feature: "Cost",
            manual: "Free (but costs your time)",
            excel: "Free or $9/month (Office 365)",
            quotemate: "$29/month after 7-day free trial",
            winner: "tie"
        },
        {
            feature: "Customization",
            manual: "Unlimited but manual",
            excel: "High if you know Excel",
            quotemate: "High with templates + custom",
            winner: "tie"
        },
        {
            feature: "GST Calculation",
            manual: "Manual calculator",
            excel: "Formula needed",
            quotemate: "Automatic",
            winner: "quotemate"
        }
    ];

    const vsOtherApps = [
        {
            app: "Generic Invoicing Apps",
            pros: ["Simple to use", "Cheap or free"],
            cons: ["No tradie-specific features", "No material calculations", "No Bunnings pricing", "Can't estimate jobs"],
            verdict: "Good for invoicing completed work, useless for quoting construction jobs with materials."
        },
        {
            app: "BuilderTrend / CoConstruct",
            pros: ["Feature-rich", "Project management", "Client portals"],
            cons: ["$99-299/month - very expensive", "Overkill for solo tradies", "Steep learning curve", "Desktop-focused"],
            verdict: "Built for large builders with multiple crews. Way too complex and expensive for most tradies who just need quotes."
        },
        {
            app: "Tradify / Fergus",
            pros: ["Job management", "Scheduling", "Invoicing"],
            cons: ["$49-89/month - expensive", "Complex setup required", "No AI estimation", "No Bunnings integration"],
            verdict: "Good all-in-one for established businesses, but overkill if you only need better quoting. QuoteMate is 1/3 the price."
        },
        {
            app: "Excel / Google Sheets",
            pros: ["Free or cheap", "Unlimited customization", "You own your data"],
            cons: ["Huge time investment to build", "Manual price updates", "No mobile optimization", "No AI help", "Looks unprofessional"],
            verdict: "Works but wastes hours. If you value your time at $60/hr, Excel costs you $120+ per quote in labour."
        }
    ];

    const commonObjections = [
        {
            objection: "\"I'm fine with Excel, I've been using it for years\"",
            response: "That's fair! Excel works. But ask yourself: How much time do you spend updating prices, calculating materials, and formatting? If you do 5 quotes/week, QuoteMate saves you 10+ hours. That's 520 hours per year - 13 full work weeks. What could you do with an extra 13 weeks?",
            realExample: "Dave (deck builder) used Excel for 8 years. 'I thought I was fast. Then I timed myself: 90 minutes per deck quote. Now with QuoteMate it's 4 minutes. I wish I'd switched years ago.'"
        },
        {
            objection: "\"I only do 2-3 quotes per week, not worth paying for an app\"",
            response: "Let's do the math: 3 quotes/week × 2 hours saved per quote = 6 hours saved weekly. That's 24 hours (3 full days) saved per month. At $60/hr, that's $1,440 in time savings vs $29/month cost. That's a 50x return on investment. Even ONE quote per month pays for itself 4x over.",
            realExample: "Sarah (landscaper): 'I only quote 2 jobs a week. But those quotes took me all Sunday night. Now I do them Friday arvo in 10 minutes total. I get my whole weekend back.'"
        },
        {
            objection: "\"Customers don't care about fancy quotes, they just want the price\"",
            response: "True, price matters most. But when you're competing against another tradie at similar prices, professional presentation wins. Studies show professional quotes increase acceptance rates by 30%. Plus, QuoteMate ensures your prices are accurate (real-time Bunnings pricing), so you're competitive AND professional.",
            realExample: "Tony (fencer): 'I lost 3 jobs to competitors with fancier quotes. Now with QuoteMate, customers tell me my quotes look more 'established' than the other guys. I win more now.'"
        },
        {
            objection: "\"I don't have time to learn new software\"",
            response: "QuoteMate takes 2 minutes to set up and your first quote takes 5 minutes. That's 7 minutes total investment. Compare that to the 2+ hours you'll save on that first quote. You've already saved 113 minutes. It's literally the fastest ROI possible.",
            realExample: "Mark (handyman): 'I'm 58 and not tech-savvy. If I can figure out QuoteMate in 10 minutes, anyone can. It's way simpler than Excel ever was.'"
        },
        {
            objection: "\"What if Bunnings prices are wrong or change?\"",
            response: "QuoteMate fetches real-time prices from Bunnings, so they're as current as possible. If you spot an error, you can manually override any price. But compare this to Excel where YOUR prices are weeks or months old. At least with QuoteMate, you're starting with today's actual prices.",
            realExample: "Prices do change, but QuoteMate updates them in real-time. Much better than my 6-month-old price list in Excel that cost me $800 on an underquoted deck job.' - James, Builder"
        },
        {
            objection: "\"I prefer doing quotes on my laptop, not my phone\"",
            response: "That's fine! QuoteMate works great on tablets too (larger screen). But here's the thing: being able to quote on your phone means you can create quotes ON-SITE while with the customer. No 'I'll send it through later' - you close deals on the spot. That alone wins you more jobs.",
            realExample: "Chris (pergola builder): 'I still use my laptop at home. But when I'm on-site, I can quote on my phone and email it to them before I leave. Customers love it and I close 50% more jobs on the spot.'"
        },
        {
            objection: "\"$29/month adds up over a year...\"",
            response: "$348/year sounds like a lot until you realize it saves you 250+ hours per year. That's $15,000 worth of your time (at $60/hr). You're paying $348 to get $15,000 back. That's a 43x return. Plus it's tax-deductible as a business expense.",
            realExample: "I spend $348/year on QuoteMate and save $15K worth of my time. I spend $2,000/year on coffee and get... fat. QuoteMate is the best $29/month I spend.' - Dave, Carpenter"
        },
        {
            objection: "\"What happens to my quotes if I stop paying?\"",
            response: "All your quotes stay on your phone forever, even if you cancel. You own your data. You can export quotes as PDFs anytime. QuoteMate just stops you creating NEW quotes after your subscription ends. Your old quotes never disappear.",
            realExample: "I cancelled for 2 months when work was slow. All my old quotes were still there. Re-subscribed when work picked up. No data lost.' - Sarah, Landscaper"
        }
    ];

    const timeComparison = [
        {
            task: "Looking up material prices",
            manual: "30 min (drive to Bunnings or call)",
            excel: "20 min (search Bunnings website)",
            quotemate: "5 seconds (automatic)"
        },
        {
            task: "Calculating material quantities",
            manual: "20 min (calculator, notes)",
            excel: "15 min (build formulas)",
            quotemate: "Instant (AI calculates)"
        },
        {
            task: "Creating quote document",
            manual: "40 min (Word doc, formatting)",
            excel: "30 min (spreadsheet formatting)",
            quotemate: "30 sec (auto-generated PDF)"
        },
        {
            task: "Adding business branding",
            manual: "10 min (find logo, insert, format)",
            excel: "10 min (header setup)",
            quotemate: "0 min (saved in profile)"
        },
        {
            task: "Calculating GST",
            manual: "5 min (calculator)",
            excel: "2 min (check formula)",
            quotemate: "0 min (automatic)"
        },
        {
            task: "Sending to customer",
            manual: "10 min (save as PDF, email)",
            excel: "10 min (save as PDF, email)",
            quotemate: "10 sec (one tap)"
        }
    ];

    const accuracyComparison = [
        {
            scenario: "Material quantity calculation",
            manualError: "High risk - mental math errors common",
            excelError: "Medium risk - formula errors possible",
            quotemateError: "Low risk - AI + professional algorithms",
            realCost: "Underquote by 10% = lose $300+ per job"
        },
        {
            scenario: "Pricing accuracy",
            manualError: "High risk - outdated prices",
            excelError: "High risk - manual updates needed",
            quotemateError: "Very low - real-time Bunnings prices",
            realCost: "Outdated prices = $150-500 loss per job"
        },
        {
            scenario: "GST calculation",
            manualError: "Medium risk - calculator mistakes",
            excelError: "Low risk if formula correct",
            quotemateError: "Very low - automated",
            realCost: "GST error = ATO penalties + embarrassment"
        },
        {
            scenario: "Missing materials",
            manualError: "High risk - easy to forget items",
            excelError: "Medium risk - template dependent",
            quotemateError: "Low risk - AI suggests everything",
            realCost: "Forgot item = eat the cost or awkward call"
        }
    ];

    const professionalismFactors = [
        {
            factor: "Visual Presentation",
            impact: "First impression matters - professional quotes signal established business",
            manual: "❌ Handwritten or basic Word doc",
            excel: "⚠️ Obvious spreadsheet, no branding",
            quotemate: "✅ Branded PDF like big companies use"
        },
        {
            factor: "Itemization",
            impact: "Detailed breakdowns build trust and justify pricing",
            manual: "❌ Usually just total price",
            excel: "✅ Can be detailed if built properly",
            quotemate: "✅ Automatically itemized and clear"
        },
        {
            factor: "Speed of Delivery",
            impact: "Fast quotes win more jobs - strike while iron is hot",
            manual: "❌ Days later (get home, write up)",
            excel: "⚠️ Evening/next day typically",
            quotemate: "✅ On-site or within hours"
        },
        {
            factor: "Consistency",
            impact: "Every quote should look professional, not rushed",
            manual: "❌ Varies by how tired you are",
            excel: "⚠️ Depends on template quality",
            quotemate: "✅ Always consistent and branded"
        },
        {
            factor: "Photos",
            impact: "Site photos help customer remember scope of work",
            manual: "❌ Hard to include",
            excel: "❌ Very difficult",
            quotemate: "✅ Tap to add photos from phone"
        }
    ];

    return (
        <>
            <Head>
                <title>QuoteMate vs Manual Quotes, Excel & Other Apps - Honest Comparison | Time, Cost & Accuracy</title>
                <meta name="description" content="Honest comparison: QuoteMate vs manual quoting, Excel spreadsheets, and other tradie apps. See time savings (5min vs 2hrs), accuracy comparison, cost analysis, and real ROI. Address common objections: 'I'm fine with Excel', 'Only do 2 quotes/week', 'Don't need fancy quotes'. Includes comparison tables, real tradie testimonials, and decision guide." />
                <meta name="keywords" content="quotemate vs excel, manual quoting vs app, quotemate comparison, best tradie quoting app, excel vs quoting software, tradie app comparison, quotemate vs tradify, quotemate vs buildertrend, time comparison quotes, quote accuracy" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://hansendev.com.au/projects/quotemate-vs-traditional" />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://hansendev.com.au/projects/quotemate-vs-traditional" />
                <meta property="og:title" content="QuoteMate vs Traditional Quoting - Honest Comparison" />
                <meta property="og:description" content="See how QuoteMate compares to manual quotes, Excel, and other apps. Real time savings, accuracy, and ROI analysis." />
                <meta property="og:locale" content="en_AU" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="QuoteMate vs Traditional Quoting - Comparison" />
                <meta name="twitter:description" content="5 min vs 2 hrs per quote. Real-time Bunnings prices vs outdated lists. See the difference." />

                {/* Article Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": "QuoteMate vs Traditional Quoting Methods: Comprehensive Comparison",
                            "description": "Detailed comparison of QuoteMate against manual quoting, Excel spreadsheets, and other tradie apps. Includes time analysis, cost comparison, accuracy comparison, and addresses common objections with real tradie testimonials.",
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

                {/* Comparison Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ComparisonPage",
                            "name": "QuoteMate vs Traditional Quoting Comparison",
                            "description": "Compare QuoteMate to manual quoting and Excel for Australian tradies"
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
                                    "name": "Is QuoteMate better than Excel for tradie quotes?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "QuoteMate is significantly faster than Excel (5 minutes vs 1-2 hours per quote) and includes features Excel doesn't have: AI material calculations, real-time Bunnings pricing, professional branded PDFs, and mobile-optimized interface. While Excel is free, QuoteMate saves 250+ hours yearly, worth $15,000+ of your time for a $180/year cost."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How much time does QuoteMate save compared to manual quoting?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Manual quoting typically takes 2-3 hours per quote. QuoteMate reduces this to under 5 minutes - a 95%+ time savings. For tradies doing 5 quotes per week, this saves 12+ hours weekly (over 600 hours yearly). At $60/hour labour rate, that's $36,000+ in annual time savings."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What if I'm already fast with Excel?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Even experienced Excel users spend 1-2 hours per quote: looking up prices, calculating quantities, formatting, and creating PDFs. QuoteMate reduces this to under 5 minutes with AI calculations and real-time pricing. Most 'fast' Excel users are shocked when they time themselves vs QuoteMate. Plus, Excel requires manual price updates while QuoteMate always has current Bunnings prices."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How does QuoteMate compare to other tradie apps like Tradify or Fergus?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Tradify and Fergus are full job management systems costing $49-89/month - good for established businesses needing scheduling, job management, and team coordination. QuoteMate is focused solely on quoting at $29/month, making it ideal for solo tradies or small teams who just need better quotes. QuoteMate has unique AI estimation and Bunnings integration that other apps lack."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is QuoteMate worth it if I only do 2-3 quotes per week?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes! Even at 2 quotes/week (8/month), QuoteMate saves 16 hours monthly. At $60/hr, that's $960 in time savings vs $29 cost - a 33x ROI. Plus professional quotes help win more jobs, potentially increasing your quote volume. It's also tax-deductible as a business expense."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What happens to my data if I stop using QuoteMate?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "All your quotes stay on your phone forever, even if you cancel. You can export quotes as PDFs anytime. You own your data completely. Cancelling only prevents creating new quotes - your historical quotes remain accessible and exportable."
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
                                    "name": "Comparisons",
                                    "item": "https://hansendev.com.au/projects/quotemate-vs-traditional"
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
                                <BarChart3 className="h-4 w-4" />
                                <span>Honest Comparison</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                QuoteMate vs<br />Everything Else
                            </h1>

                            <p className="text-2xl lg:text-3xl text-dark-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                                See how QuoteMate compares to <span className="text-brand-accent font-bold">manual quotes</span>, <span className="text-brand-accent font-bold">Excel</span>, and <span className="text-brand-accent font-bold">other apps</span>. Real numbers, no BS.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link
                                    href="/quote-tool"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Try QuoteMate Free</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="py-12 bg-gradient-to-r from-brand-accent/20 via-brand-primary/20 to-brand-accent/20 ">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-brand-accent mb-2">2hrs → 5min</div>
                                <div className="text-dark-text-secondary">Time Savings Per Quote</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-brand-accent mb-2">95% Faster</div>
                                <div className="text-dark-text-secondary">Than Manual/Excel</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-brand-accent mb-2">$15,000+</div>
                                <div className="text-dark-text-secondary">Annual Time Value Saved</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Comparison Table */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Feature-by-Feature Comparison</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    See how QuoteMate stacks up against traditional methods
                                </p>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full bg-white/5 backdrop-blur-sm rounded-2xl  overflow-hidden">
                                    <thead>
                                        <tr className="bg-white/10">
                                            <th className="text-left p-6 text-white font-bold">Feature</th>
                                            <th className="text-center p-6 text-white font-bold">Manual/Word</th>
                                            <th className="text-center p-6 text-white font-bold">Excel</th>
                                            <th className="text-center p-6 text-brand-accent font-bold">QuoteMate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comparisonTable.map((row, index) => (
                                            <tr key={index} className="">
                                                <td className="p-6 font-semibold text-white">{row.feature}</td>
                                                <td className="p-6 text-center text-dark-text-secondary text-sm">{row.manual}</td>
                                                <td className="p-6 text-center text-dark-text-secondary text-sm">{row.excel}</td>
                                                <td className={`p-6 text-center text-sm font-semibold ${
                                                    row.winner === 'quotemate' ? 'text-brand-accent' : 'text-dark-text-secondary'
                                                }`}>
                                                    {row.winner === 'quotemate' && <CheckCircle className="h-5 w-5 inline-block mr-2" />}
                                                    {row.quotemate}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Time Breakdown */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Time Breakdown: Where Every Minute Goes</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    See exactly where QuoteMate saves you time
                                </p>
                            </div>

                            <div className="space-y-6">
                                {timeComparison.map((item, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 ">
                                        <h3 className="text-xl font-bold text-white mb-6">{item.task}</h3>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="bg-red-500/10 rounded-xl p-6 ">
                                                <div className="text-red-400 font-semibold mb-2">Manual/Word</div>
                                                <div className="text-2xl font-bold text-white">{item.manual}</div>
                                            </div>
                                            <div className="bg-yellow-500/10 rounded-xl p-6 ">
                                                <div className="text-yellow-500 font-semibold mb-2">Excel</div>
                                                <div className="text-2xl font-bold text-white">{item.excel}</div>
                                            </div>
                                            <div className="bg-brand-accent/10 rounded-xl p-6 ">
                                                <div className="text-brand-accent font-semibold mb-2 flex items-center gap-2">
                                                    <CheckCircle className="h-5 w-5" />
                                                    <span>QuoteMate</span>
                                                </div>
                                                <div className="text-2xl font-bold text-brand-accent">{item.quotemate}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8 ">
                                <div className="flex items-start gap-4">
                                    <Clock className="h-12 w-12 text-brand-accent flex-shrink-0" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4">Total Time Per Quote</h3>
                                        <div className="grid md:grid-cols-3 gap-6 mb-4">
                                            <div>
                                                <div className="text-sm text-dark-text-secondary mb-1">Manual:</div>
                                                <div className="text-3xl font-bold text-white">~2.5 hours</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-dark-text-secondary mb-1">Excel:</div>
                                                <div className="text-3xl font-bold text-white">~1.5 hours</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-dark-text-secondary mb-1">QuoteMate:</div>
                                                <div className="text-3xl font-bold text-brand-accent">~4 minutes</div>
                                            </div>
                                        </div>
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            <span className="text-brand-accent font-bold">QuoteMate is 95% faster than manual</span> and <span className="text-brand-accent font-bold">96% faster than Excel</span>. Do 5 quotes per week and you save <span className="text-white font-bold">12+ hours weekly</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Accuracy Comparison */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Accuracy Matters: Cost of Mistakes</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Quoting errors cost you money - here's how each method compares
                                </p>
                            </div>

                            <div className="space-y-6">
                                {accuracyComparison.map((item, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 ">
                                        <div className="flex items-start gap-4 mb-6">
                                            <AlertTriangle className="h-8 w-8 text-yellow-500 flex-shrink-0" />
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-white mb-2">{item.scenario}</h3>
                                                <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm font-bold">
                                                    <DollarSign className="h-4 w-4" />
                                                    <span>Potential Cost: {item.realCost}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-red-500/10 rounded-xl p-4 ">
                                                <div className="text-red-400 font-semibold mb-2 text-sm">Manual Risk</div>
                                                <div className="text-white text-sm">{item.manualError}</div>
                                            </div>
                                            <div className="bg-yellow-500/10 rounded-xl p-4 ">
                                                <div className="text-yellow-500 font-semibold mb-2 text-sm">Excel Risk</div>
                                                <div className="text-white text-sm">{item.excelError}</div>
                                            </div>
                                            <div className="bg-green-400/10 rounded-xl p-4 ">
                                                <div className="text-green-400 font-semibold mb-2 text-sm">QuoteMate Risk</div>
                                                <div className="text-white text-sm">{item.quotemateError}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-gradient-to-r from-green-400/10 to-brand-accent/10 rounded-2xl p-8 ">
                                <div className="flex items-start gap-4">
                                    <Shield className="h-12 w-12 text-green-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4">The Accuracy Advantage</h3>
                                        <p className="text-xl text-dark-text-secondary leading-relaxed mb-4">
                                            Just <span className="text-white font-bold">one underquoted job</span> due to outdated prices or calculation errors can cost you <span className="text-brand-accent font-bold">$300-800</span> in lost profit. That's 20-50 months of QuoteMate subscription.
                                        </p>
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            QuoteMate's real-time Bunnings pricing and AI calculations dramatically reduce quoting errors, paying for itself many times over by preventing costly mistakes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Professionalism Comparison */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Professional Presentation = More Jobs Won</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    How your quotes look affects your win rate
                                </p>
                            </div>

                            <div className="space-y-6">
                                {professionalismFactors.map((factor, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 ">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-white mb-2">{factor.factor}</h3>
                                            <p className="text-dark-text-secondary">{factor.impact}</p>
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white/5 rounded-xl p-4 ">
                                                <div className="font-semibold text-white mb-2">Manual/Word</div>
                                                <div className="text-dark-text-secondary text-sm">{factor.manual}</div>
                                            </div>
                                            <div className="bg-white/5 rounded-xl p-4 ">
                                                <div className="font-semibold text-white mb-2">Excel</div>
                                                <div className="text-dark-text-secondary text-sm">{factor.excel}</div>
                                            </div>
                                            <div className="bg-brand-accent/10 rounded-xl p-4 ">
                                                <div className="font-semibold text-brand-accent mb-2">QuoteMate</div>
                                                <div className="text-white text-sm">{factor.quotemate}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8 ">
                                <div className="flex items-start gap-4">
                                    <Award className="h-12 w-12 text-brand-accent flex-shrink-0" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4">The Professional Edge</h3>
                                        <p className="text-xl text-dark-text-secondary leading-relaxed mb-4">
                                            Studies show professional quotes increase acceptance rates by <span className="text-brand-accent font-bold">30%</span>. When two tradies quote similar prices, the one with the professional-looking quote usually wins.
                                        </p>
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            QuoteMate makes you look like an established business, even if you're a solo operator. Customers can't tell if you're a one-person show or a 50-person company.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vs Other Apps */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">QuoteMate vs Other Tradie Apps</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    How does QuoteMate compare to other solutions?
                                </p>
                            </div>

                            <div className="space-y-8">
                                {vsOtherApps.map((app, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 ">
                                        <h3 className="text-3xl font-bold text-white mb-8">{app.app}</h3>

                                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                                            <div className="bg-green-400/10 rounded-2xl p-6 ">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <ThumbsUp className="h-6 w-6 text-green-400" />
                                                    <h4 className="text-lg font-bold text-white">Pros</h4>
                                                </div>
                                                <ul className="space-y-2">
                                                    {app.pros.map((pro, pidx) => (
                                                        <li key={pidx} className="flex items-start gap-2 text-dark-text-secondary">
                                                            <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>{pro}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-red-500/10 rounded-2xl p-6 ">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <ThumbsDown className="h-6 w-6 text-red-400" />
                                                    <h4 className="text-lg font-bold text-white">Cons</h4>
                                                </div>
                                                <ul className="space-y-2">
                                                    {app.cons.map((con, cidx) => (
                                                        <li key={cidx} className="flex items-start gap-2 text-dark-text-secondary">
                                                            <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                                                            <span>{con}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-brand-accent/10 rounded-2xl p-6 ">
                                            <div className="text-sm font-semibold text-brand-accent mb-2">VERDICT:</div>
                                            <p className="text-white leading-relaxed">{app.verdict}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Objections */}
                <section className="py-16 lg:py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">"But I'm Fine With..." - Addressing Objections</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Let's tackle the common reasons tradies hesitate to switch
                                </p>
                            </div>

                            <div className="space-y-8">
                                {commonObjections.map((objection, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 ">
                                        <div className="flex items-start gap-4 mb-6">
                                            <MessageSquare className="h-10 w-10 text-brand-accent flex-shrink-0" />
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-4">{objection.objection}</h3>
                                                <div className="bg-brand-accent/10 rounded-xl p-6  mb-6">
                                                    <div className="text-sm font-semibold text-brand-accent mb-2">RESPONSE:</div>
                                                    <p className="text-white leading-relaxed">{objection.response}</p>
                                                </div>

                                                <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 rounded-xl p-6 ">
                                                    <div className="flex items-start gap-3">
                                                        <Star className="h-5 w-5 text-brand-accent flex-shrink-0 mt-1" />
                                                        <div>
                                                            <div className="text-sm font-semibold text-brand-accent mb-2">REAL TRADIE:</div>
                                                            <p className="text-dark-text-secondary italic leading-relaxed">{objection.realExample}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Decision Guide */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Should You Switch to QuoteMate?</h2>
                                <p className="text-xl text-dark-text-secondary">
                                    Here's an honest decision guide
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-green-400/10 rounded-3xl p-8 ">
                                    <div className="flex items-center gap-3 mb-6">
                                        <CheckCircle className="h-10 w-10 text-green-400" />
                                        <h3 className="text-2xl font-bold text-white">QuoteMate is Perfect If You...</h3>
                                    </div>
                                    <ul className="space-y-4 text-dark-text-secondary">
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-400">•</span>
                                            <span>Do 2+ quotes per week</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-400">•</span>
                                            <span>Spend 1+ hours per quote currently</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-400">•</span>
                                            <span>Want more time for actual work/family</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-400">•</span>
                                            <span>Use Bunnings for materials regularly</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-400">•</span>
                                            <span>Want professional-looking quotes</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-400">•</span>
                                            <span>Quote on-site sometimes</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-400">•</span>
                                            <span>Value accuracy (avoid underquoting)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-yellow-500/10 rounded-3xl p-8 ">
                                    <div className="flex items-center gap-3 mb-6">
                                        <AlertTriangle className="h-10 w-10 text-yellow-500" />
                                        <h3 className="text-2xl font-bold text-white">Maybe Stick With Excel If You...</h3>
                                    </div>
                                    <ul className="space-y-4 text-dark-text-secondary">
                                        <li className="flex items-start gap-3">
                                            <span className="text-yellow-500">•</span>
                                            <span>Do less than 1 quote per month</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-yellow-500">•</span>
                                            <span>Have unlimited time for admin</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-yellow-500">•</span>
                                            <span>Don't use Bunnings materials</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-yellow-500">•</span>
                                            <span>Quote highly custom/unique work only</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-yellow-500">•</span>
                                            <span>Don't own a smartphone</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-yellow-500">•</span>
                                            <span>Excel setup already perfect & fast</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-yellow-500">•</span>
                                            <span>Genuinely enjoy spreadsheet work</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8  text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">Still Not Sure? Try It Risk-Free</h3>
                                <p className="text-xl text-dark-text-secondary mb-6">
                                    Try free for 7 days to see the difference yourself. No credit card. No commitment. If it doesn't save you massive time, don't subscribe. Simple.
                                </p>
                                <Link
                                    href="/quote-tool"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Start 7-Day Free Trial</span>
                                </Link>
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
                                    <p className="text-dark-text-secondary text-sm">See every feature in detail</p>
                                </Link>

                                <Link href="/projects/quotemate-pricing" className="bg-white/5 backdrop-blur-sm rounded-xl p-6   transition-all duration-300 group">
                                    <DollarSign className="h-8 w-8 text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-bold text-white mb-2">Pricing & ROI</h3>
                                    <p className="text-dark-text-secondary text-sm">Calculate your savings</p>
                                </Link>

                                <Link href="/projects/quotemate-getting-started" className="bg-white/5 backdrop-blur-sm rounded-xl p-6   transition-all duration-300 group">
                                    <Download className="h-8 w-8 text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-bold text-white mb-2">Getting Started</h3>
                                    <p className="text-dark-text-secondary text-sm">First quote in 2 minutes</p>
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
                                See the Difference Yourself
                            </h2>
                            <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                                Download QuoteMate and create your first quote. Time how long it takes. Compare it to your current method. The difference will shock you.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <Link
                                    href="/quote-tool"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Try QuoteMate Free</span>
                                </Link>
                                <Link
                                    href="/projects/quotemate"
                                    className="inline-flex items-center justify-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 "
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark-text-secondary">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>7-Day Free Trial</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>No Credit Card</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>30-Day Money-Back</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-brand-accent" />
                                    <span>Cancel Anytime</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default QuoteMateVsTraditional;
