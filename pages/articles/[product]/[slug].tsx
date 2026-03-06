import React, { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
    ArrowLeft,
    Calendar,
    Clock,
    User,
    Tag,
    Share2,
    ChevronRight,
    CheckCircle,
    BookOpen,
    TrendingUp,
    MessageCircle
} from 'lucide-react';
import {
    getArticle,
    getAllArticlePaths,
    getRelatedArticles,
    getProductName,
    Article,
    ArticlePreview,
    FAQ
} from '../../../lib/articles';
import { BUSINESS_INFO, ONLINE_PRESENCE, CONTACT_INFO } from '../../../constants/business';
import AuthorBio from '../../../components/AuthorBio';

interface ArticlePageProps {
    article: Article;
    relatedArticles: ArticlePreview[];
    product: string;
}

// Add IDs to headings for TOC navigation
const addHeadingIds = (html: string): string => {
    let counter = 0;
    return html.replace(/<h([23])>(.*?)<\/h\1>/g, (match, level, text) => {
        const id = `section-${counter++}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
        return `<h${level} id="${id}">${text}</h${level}>`;
    });
};

// Extract headings for TOC
const extractHeadings = (html: string): { id: string; text: string; level: number }[] => {
    const headings: { id: string; text: string; level: number }[] = [];
    const regex = /<h([23]) id="([^"]+)">([^<]+)<\/h\1>/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
        const text = match[3];
        // Skip CTA-like headings
        if (text.toLowerCase().includes('ready to') && text.includes('?')) continue;
        headings.push({
            level: parseInt(match[1]),
            id: match[2],
            text: text
        });
    }
    return headings;
};

// Build FAQs for structured data - use article FAQs or generate default
const buildFAQs = (articleFaqs: FAQ[], title: string): FAQ[] => {
    if (articleFaqs.length > 0) {
        return articleFaqs;
    }

    // Fallback FAQ if none in article
    return [{
        question: `What will I learn from "${title}"?`,
        answer: `This comprehensive guide covers everything you need to know about ${title.toLowerCase().replace(/^\d+\s*/, '')}. You'll get actionable tips, practical advice, and expert insights to help you succeed.`
    }];
};

const ArticlePage: React.FC<ArticlePageProps> = ({ article, relatedArticles, product }) => {
    const router = useRouter();
    const { frontmatter, htmlContent, faqs: articleFaqs } = article;
    const productName = getProductName(product);
    const canonicalUrl = `${ONLINE_PRESENCE.website.primary}/articles/${product}/${frontmatter.slug}`;

    // Process content
    const processedHtml = addHeadingIds(htmlContent);
    const headings = extractHeadings(processedHtml);
    const faqs = buildFAQs(articleFaqs, frontmatter.title);

    // Calculate word count
    const wordCount = htmlContent.replace(/<[^>]*>/g, '').split(/\s+/).length;

    // Article structured data (2026 enhanced)
    const articleStructuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": frontmatter.title,
        "description": frontmatter.description,
        "image": {
            "@type": "ImageObject",
            "url": frontmatter.featuredImage
                ? `${ONLINE_PRESENCE.website.primary}${frontmatter.featuredImage}`
                : `${ONLINE_PRESENCE.website.primary}/og-default.png`,
            "width": 1200,
            "height": 630
        },
        "author": {
            "@type": "Person",
            "@id": `${ONLINE_PRESENCE.website.primary}/#author`,
            "name": frontmatter.author,
            "url": ONLINE_PRESENCE.website.primary,
            "jobTitle": BUSINESS_INFO.founder.title,
            "worksFor": {
                "@type": "Organization",
                "name": BUSINESS_INFO.name
            },
            "sameAs": [
                ONLINE_PRESENCE.social.linkedin,
                ONLINE_PRESENCE.social.github
            ]
        },
        "publisher": {
            "@type": "Organization",
            "@id": `${ONLINE_PRESENCE.website.primary}/#organization`,
            "name": BUSINESS_INFO.name,
            "url": ONLINE_PRESENCE.website.primary,
            "logo": {
                "@type": "ImageObject",
                "url": `${ONLINE_PRESENCE.website.primary}/logo.png`
            }
        },
        "datePublished": frontmatter.publishDate,
        "dateModified": frontmatter.publishDate,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
        },
        "keywords": frontmatter.keywords.join(', '),
        "articleSection": productName,
        "wordCount": wordCount,
        "inLanguage": "en-AU",
        "isAccessibleForFree": true,
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["article h1", "article h2", "article p"]
        }
    };

    // Breadcrumb structured data
    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": ONLINE_PRESENCE.website.primary
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Articles",
                "item": `${ONLINE_PRESENCE.website.primary}/articles`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": productName,
                "item": `${ONLINE_PRESENCE.website.primary}/articles/${product}`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": frontmatter.title,
                "item": canonicalUrl
            }
        ]
    };

    // FAQ structured data
    const faqStructuredData = faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    // WebPage structured data
    const webPageStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "name": frontmatter.title,
        "description": frontmatter.description,
        "isPartOf": {
            "@type": "WebSite",
            "@id": `${ONLINE_PRESENCE.website.primary}/#website`,
            "name": BUSINESS_INFO.name,
            "url": ONLINE_PRESENCE.website.primary
        },
        "about": {
            "@type": "Thing",
            "name": productName
        },
        "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": frontmatter.featuredImage
                ? `${ONLINE_PRESENCE.website.primary}${frontmatter.featuredImage}`
                : `${ONLINE_PRESENCE.website.primary}/og-default.png`
        },
        "breadcrumb": {
            "@id": `${canonicalUrl}#breadcrumb`
        },
        "inLanguage": "en-AU",
        "potentialAction": {
            "@type": "ReadAction",
            "target": canonicalUrl
        }
    };

    const handleShare = async () => {
        const shareData = {
            title: frontmatter.title,
            text: frontmatter.description,
            url: canonicalUrl
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                // User cancelled or error
            }
        } else {
            navigator.clipboard.writeText(canonicalUrl);
            alert('Link copied to clipboard!');
        }
    };

    // Scroll to section handler
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <Head>
                {/* Primary Meta Tags - Optimized for 2026 */}
                <title>{frontmatter.title} | {productName} | {BUSINESS_INFO.shortName}</title>
                <meta name="title" content={`${frontmatter.title} | ${productName}`} />
                <meta name="description" content={frontmatter.description} />
                <meta name="keywords" content={frontmatter.keywords.join(', ')} />
                <meta name="author" content={frontmatter.author} />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href={canonicalUrl} />

                {/* Language and Region */}
                <meta httpEquiv="content-language" content="en-AU" />
                <meta name="geo.region" content="AU" />
                <meta name="geo.placename" content={CONTACT_INFO.address.city} />

                {/* Open Graph / Facebook - Enhanced */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={frontmatter.title} />
                <meta property="og:description" content={frontmatter.description} />
                <meta property="og:image" content={frontmatter.featuredImage ? `${ONLINE_PRESENCE.website.primary}${frontmatter.featuredImage}` : `${ONLINE_PRESENCE.website.primary}/og-default.png`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={frontmatter.title} />
                <meta property="og:site_name" content={BUSINESS_INFO.name} />
                <meta property="og:locale" content="en_AU" />
                <meta property="article:published_time" content={`${frontmatter.publishDate}T00:00:00+10:00`} />
                <meta property="article:modified_time" content={`${frontmatter.publishDate}T00:00:00+10:00`} />
                <meta property="article:author" content={frontmatter.author} />
                <meta property="article:section" content={productName} />
                {frontmatter.keywords.slice(0, 6).map((keyword, index) => (
                    <meta key={index} property="article:tag" content={keyword} />
                ))}

                {/* Twitter Card - Enhanced */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={canonicalUrl} />
                <meta name="twitter:title" content={frontmatter.title} />
                <meta name="twitter:description" content={frontmatter.description} />
                <meta name="twitter:image" content={frontmatter.featuredImage ? `${ONLINE_PRESENCE.website.primary}${frontmatter.featuredImage}` : `${ONLINE_PRESENCE.website.primary}/og-default.png`} />
                <meta name="twitter:image:alt" content={frontmatter.title} />
                <meta name="twitter:creator" content="@hansendev" />
                <meta name="twitter:site" content="@hansendev" />
                <meta name="twitter:label1" content="Reading time" />
                <meta name="twitter:data1" content={frontmatter.readingTime} />
                <meta name="twitter:label2" content="Written by" />
                <meta name="twitter:data2" content={frontmatter.author} />

                {/* Additional SEO Meta */}
                <meta name="article:published_time" content={frontmatter.publishDate} />
                <meta name="article:author" content={frontmatter.author} />
                <meta name="rating" content="General" />
                <meta name="coverage" content="Worldwide" />
                <meta name="distribution" content="Global" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageStructuredData) }}
                />
                {faqStructuredData && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
                    />
                )}
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Breadcrumb Navigation */}
                <nav className="" aria-label="Breadcrumb">
                    <div className="container-custom py-4">
                        <ol className="flex items-center gap-2 text-sm text-dark-text-secondary flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
                            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                <Link href="/" className="hover:text-brand-accent transition-colors" itemProp="item">
                                    <span itemProp="name">Home</span>
                                </Link>
                                <meta itemProp="position" content="1" />
                            </li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                <Link href="/articles" className="hover:text-brand-accent transition-colors" itemProp="item">
                                    <span itemProp="name">Articles</span>
                                </Link>
                                <meta itemProp="position" content="2" />
                            </li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                <Link href={`/articles/${product}`} className="hover:text-brand-accent transition-colors" itemProp="item">
                                    <span itemProp="name">{productName}</span>
                                </Link>
                                <meta itemProp="position" content="3" />
                            </li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li className="text-white truncate max-w-[200px]" aria-current="page" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                <span itemProp="name">{frontmatter.title}</span>
                                <meta itemProp="position" content="4" />
                                <meta itemProp="item" content={canonicalUrl} />
                            </li>
                        </ol>
                    </div>
                </nav>

                {/* Article Header */}
                <header className="py-12 lg:py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.1),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-4xl mx-auto">
                            {/* Back Link */}
                            <Link
                                href={`/articles/${product}`}
                                className="inline-flex items-center gap-2 text-dark-text-secondary hover:text-brand-accent transition-colors mb-6"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                <span>Back to {productName} Articles</span>
                            </Link>

                            {/* Category Badge */}
                            <div className="flex items-center gap-3 mb-4">
                                <Link
                                    href={`/articles/${product}`}
                                    className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider hover:underline"
                                >
                                    <Tag className="h-4 w-4" />
                                    <span>{productName}</span>
                                </Link>
                                <span className="text-dark-text-secondary">|</span>
                                <span className="text-sm text-dark-text-secondary">{frontmatter.readingTime}</span>
                            </div>

                            {/* Title - H1 for SEO */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                {frontmatter.title}
                            </h1>

                            {/* Meta Description visible for users */}
                            <p className="text-lg sm:text-xl text-dark-text-secondary leading-relaxed mb-8">
                                {frontmatter.description}
                            </p>

                            {/* Author & Meta Info */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 glass-card">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center text-white font-bold">
                                        TH
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white">{frontmatter.author}</div>
                                        <div className="text-sm text-dark-text-secondary flex items-center gap-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                <time dateTime={frontmatter.publishDate}>
                                                    {new Date(frontmatter.publishDate).toLocaleDateString('en-AU', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </time>
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                {frontmatter.readingTime}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={handleShare}
                                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
                                    aria-label="Share this article"
                                >
                                    <Share2 className="h-4 w-4" />
                                    <span>Share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                {frontmatter.featuredImage && (
                    <div className="container-custom pb-8">
                        <div className="max-w-4xl mx-auto">
                            <figure className="relative aspect-video rounded-2xl overflow-hidden">
                                <Image
                                    src={frontmatter.featuredImage}
                                    alt={frontmatter.title}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                                />
                            </figure>
                        </div>
                    </div>
                )}

                {/* Main Content Area */}
                <div className="container-custom pb-16 lg:pb-24">
                    <div className="max-w-4xl mx-auto">
                        <div className="lg:flex lg:gap-8">
                            {/* Table of Contents - Sticky Sidebar on Desktop */}
                            {headings.length >= 3 && (
                                <aside className="lg:w-64 flex-shrink-0 mb-8 lg:mb-0">
                                    <nav className="lg:sticky lg:top-8 glass-card p-5" aria-label="Table of contents">
                                        <div className="flex items-center gap-2 text-white font-semibold mb-4">
                                            <BookOpen className="h-5 w-5 text-brand-accent" />
                                            <span>Contents</span>
                                        </div>
                                        <ol className="space-y-2 text-sm">
                                            {headings.filter(h => h.level === 2).slice(0, 8).map((heading) => (
                                                <li key={heading.id}>
                                                    <button
                                                        onClick={() => scrollToSection(heading.id)}
                                                        className="flex items-start gap-2 text-dark-text-secondary hover:text-brand-accent transition-colors text-left w-full"
                                                    >
                                                        <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                                        <span className="line-clamp-2">{heading.text}</span>
                                                    </button>
                                                </li>
                                            ))}
                                        </ol>
                                    </nav>
                                </aside>
                            )}

                            {/* Article Content */}
                            <article className="flex-1 min-w-0">
                                <div
                                    className="prose prose-lg max-w-none"
                                    dangerouslySetInnerHTML={{ __html: processedHtml }}
                                />
                            </article>
                        </div>
                    </div>
                </div>

                {/* Author Bio Section - E-E-A-T Signal */}
                <section className="py-12 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-xl font-bold text-white mb-6">About the Author</h2>
                            <AuthorBio />
                        </div>
                    </div>
                </section>

                {/* Keywords/Tags */}
                <section className="py-8">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-sm font-medium text-dark-text-secondary uppercase tracking-wider mb-4">
                                Topics Covered
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {frontmatter.keywords.map((keyword, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-white/5 rounded-full text-sm text-dark-text-secondary transition-colors"
                                    >
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <section className="py-16 bg-white/[0.02]">
                        <div className="container-custom">
                            <div className="max-w-4xl mx-auto">
                                <div className="flex items-center gap-2 mb-8">
                                    <TrendingUp className="h-6 w-6 text-brand-accent" />
                                    <h2 className="text-2xl font-bold text-white">
                                        More {productName} Articles
                                    </h2>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {relatedArticles.map((related, index) => (
                                        <Link
                                            key={index}
                                            href={`/articles/${product}/${related.frontmatter.slug}`}
                                            className="group glass-card overflow-hidden transition-all duration-300"
                                        >
                                            {related.frontmatter.featuredImage && (
                                                <div className="relative aspect-video overflow-hidden">
                                                    <Image
                                                        src={related.frontmatter.featuredImage}
                                                        alt={related.frontmatter.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            )}
                                            <div className="p-4">
                                                <h3 className="font-semibold text-white group-hover:text-brand-accent transition-colors mb-2 line-clamp-2">
                                                    {related.frontmatter.title}
                                                </h3>
                                                <div className="flex items-center gap-3 text-xs text-dark-text-secondary">
                                                    <span>{related.frontmatter.readingTime}</span>
                                                    <span>{new Date(related.frontmatter.publishDate).toLocaleDateString('en-AU')}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 ">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium mb-4">
                                <MessageCircle className="h-4 w-4" />
                                <span>Found this helpful?</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Explore More {productName} Resources
                            </h2>
                            <p className="text-lg text-dark-text-secondary mb-8">
                                Discover more articles, guides, and tips to help you get the most out of {productName}.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={`/articles/${product}`}
                                    className="inline-flex items-center justify-center gap-2 btn-gradient text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25"
                                >
                                    Browse All Articles
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href={product === 'hansendev' ? '/' : `/projects/${product}`}
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                >
                                    Learn About {productName}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllArticlePaths();

    return {
        paths: paths.map(({ product, slug }) => ({
            params: { product, slug }
        })),
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const product = params?.product as string;
    const slug = params?.slug as string;

    const article = await getArticle(product, slug);

    if (!article) {
        return { notFound: true };
    }

    const relatedArticles = getRelatedArticles(product, slug, 3);

    return {
        props: {
            article,
            relatedArticles,
            product
        }
    };
};

export default ArticlePage;
