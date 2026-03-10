import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, CONTACT_INFO, ONLINE_PRESENCE } from '../../constants/business';

const EFFECTIVE_DATE = '2026-03-10';

const QuoteMateTerms: React.FC = () => {
    const canonicalUrl = `${ONLINE_PRESENCE.website.primary}/projects/quotemate-terms`;

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
                "name": "QuoteMate",
                "item": `${ONLINE_PRESENCE.website.primary}/projects/quotemate`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Terms & Conditions",
                "item": canonicalUrl
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Terms & Conditions | QuoteMate | {BUSINESS_INFO.shortName}</title>
                <meta name="description" content="Terms and Conditions for the QuoteMate mobile app on iOS and Android. Read our terms of service, user obligations, and usage policies." />
                <meta name="robots" content="noindex, follow" />
                <link rel="canonical" href={canonicalUrl} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
                />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb">
                    <div className="container-custom py-4">
                        <ol className="flex items-center gap-2 text-sm text-dark-text-secondary flex-wrap">
                            <li>
                                <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
                            </li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li>
                                <Link href="/projects/quotemate" className="hover:text-brand-accent transition-colors">QuoteMate</Link>
                            </li>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <li className="text-white" aria-current="page">Terms & Conditions</li>
                        </ol>
                    </div>
                </nav>

                {/* Header */}
                <header className="py-12 lg:py-16">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto">
                            <Link
                                href="/projects/quotemate"
                                className="inline-flex items-center gap-2 text-dark-text-secondary hover:text-brand-accent transition-colors mb-6"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                <span>Back to QuoteMate</span>
                            </Link>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                                Terms & Conditions
                            </h1>
                            <p className="text-lg text-dark-text-secondary">
                                QuoteMate Mobile Application — iOS & Android
                            </p>
                            <p className="text-sm text-dark-text-secondary mt-2">
                                Effective Date: {new Date(EFFECTIVE_DATE).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <section className="pb-16 lg:pb-24">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto prose prose-lg max-w-none">

                            <div className="space-y-10">
                                {/* 1. Acceptance */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        By downloading, installing, or using the QuoteMate mobile application (&quot;the App&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). The App is operated by {BUSINESS_INFO.name} (ABN {BUSINESS_INFO.abn}), located in {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}, {CONTACT_INFO.address.country}. If you do not agree with these Terms, do not use the App.
                                    </p>
                                </div>

                                {/* 2. Description */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        QuoteMate is a mobile quoting and invoicing application designed for tradespeople and small businesses in Australia. The App allows users to create quotes, invoices, track payments, manage clients, and generate professional PDF documents. The App is available on iOS (Apple App Store) and Android (Google Play Store).
                                    </p>
                                </div>

                                {/* 3. Eligibility */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">3. Eligibility</h2>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        You must be at least 18 years of age and have the legal capacity to enter into a binding agreement to use the App. By using the App, you represent and warrant that you meet these requirements.
                                    </p>
                                </div>

                                {/* 4. Accounts */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">4. User Accounts</h2>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorised use of your account. We reserve the right to suspend or terminate accounts that violate these Terms.
                                    </p>
                                </div>

                                {/* 5. Free Trial & Subscriptions */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">5. Free Trial & Subscriptions</h2>
                                    <p className="text-dark-text-secondary leading-relaxed mb-3">
                                        QuoteMate offers a free trial period (first 5 quotes) with full access to all features. After the trial, continued use requires a paid subscription. Subscription plans and pricing are displayed within the App.
                                    </p>
                                    <ul className="list-disc list-inside text-dark-text-secondary space-y-2">
                                        <li>Subscriptions are billed through the Apple App Store or Google Play Store, depending on your platform.</li>
                                        <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period.</li>
                                        <li>You can manage or cancel your subscription through your device&apos;s app store settings.</li>
                                        <li>Refunds are subject to the policies of the Apple App Store or Google Play Store.</li>
                                    </ul>
                                </div>

                                {/* 6. Acceptable Use */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">6. Acceptable Use</h2>
                                    <p className="text-dark-text-secondary leading-relaxed mb-3">
                                        You agree not to:
                                    </p>
                                    <ul className="list-disc list-inside text-dark-text-secondary space-y-2">
                                        <li>Use the App for any unlawful purpose or in violation of any applicable laws.</li>
                                        <li>Reverse engineer, decompile, or disassemble any part of the App.</li>
                                        <li>Attempt to gain unauthorised access to the App&apos;s systems or networks.</li>
                                        <li>Transmit any viruses, malware, or other harmful code through the App.</li>
                                        <li>Use the App to send spam, unsolicited communications, or misleading content.</li>
                                        <li>Reproduce, distribute, or create derivative works from the App without our written consent.</li>
                                    </ul>
                                </div>

                                {/* 7. Intellectual Property */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">7. Intellectual Property</h2>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        All intellectual property rights in the App, including but not limited to software, design, logos, trademarks, and content, are owned by {BUSINESS_INFO.name} or its licensors. You are granted a limited, non-exclusive, non-transferable, revocable licence to use the App for its intended purpose, subject to these Terms.
                                    </p>
                                </div>

                                {/* 8. User Data */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">8. User Data & Privacy</h2>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        You retain ownership of all data you enter into the App, including client information, quotes, and invoices. We collect and process personal information in accordance with the Australian Privacy Act 1988 and our Privacy Policy. By using the App, you consent to the collection and use of your data as described in our Privacy Policy.
                                    </p>
                                </div>

                                {/* 9. Third-Party Services */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">9. Third-Party Services</h2>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        The App may integrate with or reference third-party services, including pricing data providers (e.g., Bunnings product pricing). We do not guarantee the accuracy, availability, or reliability of third-party data. Third-party services are subject to their own terms and conditions.
                                    </p>
                                </div>

                                {/* 10. Disclaimers */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">10. Disclaimers</h2>
                                    <p className="text-dark-text-secondary leading-relaxed mb-3">
                                        The App is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the maximum extent permitted by Australian Consumer Law:
                                    </p>
                                    <ul className="list-disc list-inside text-dark-text-secondary space-y-2">
                                        <li>We do not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful components.</li>
                                        <li>We do not guarantee the accuracy of AI-generated estimates, pricing data, or calculations produced by the App. You are responsible for verifying all quotes and invoices before sending them to clients.</li>
                                        <li>The App is not a substitute for professional accounting, legal, or financial advice.</li>
                                    </ul>
                                </div>

                                {/* 11. Limitation of Liability */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">11. Limitation of Liability</h2>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        To the maximum extent permitted by law, {BUSINESS_INFO.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App. Our total liability to you for any claims arising under these Terms shall not exceed the amount you have paid to us in subscription fees in the twelve (12) months preceding the claim. Nothing in these Terms excludes or limits any guarantee, condition, or warranty implied by the Australian Consumer Law that cannot be excluded or limited by law.
                                    </p>
                                </div>

                                {/* 12. Indemnification */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">12. Indemnification</h2>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        You agree to indemnify and hold harmless {BUSINESS_INFO.name}, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising out of your use of the App, your violation of these Terms, or your infringement of any third-party rights.
                                    </p>
                                </div>

                                {/* 13. Termination */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">13. Termination</h2>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        We may suspend or terminate your access to the App at any time, with or without cause, and with or without notice. Upon termination, your right to use the App ceases immediately. You may export your data before termination where the App provides such functionality. Provisions that by their nature should survive termination (including intellectual property, disclaimers, and limitation of liability) shall survive.
                                    </p>
                                </div>

                                {/* 14. Changes to Terms */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">14. Changes to These Terms</h2>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        We reserve the right to modify these Terms at any time. Updated Terms will be posted within the App and on our website. Your continued use of the App after changes constitutes acceptance of the revised Terms. We encourage you to review these Terms periodically.
                                    </p>
                                </div>

                                {/* 15. Governing Law */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">15. Governing Law</h2>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        These Terms are governed by and construed in accordance with the laws of Queensland, Australia. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Queensland.
                                    </p>
                                </div>

                                {/* 16. Contact */}
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">16. Contact Us</h2>
                                    <p className="text-dark-text-secondary leading-relaxed mb-3">
                                        If you have any questions about these Terms, please contact us:
                                    </p>
                                    <ul className="text-dark-text-secondary space-y-1">
                                        <li><strong className="text-white">Business:</strong> {BUSINESS_INFO.name} (ABN {BUSINESS_INFO.abn})</li>
                                        <li><strong className="text-white">Email:</strong>{' '}
                                            <a href={`mailto:${CONTACT_INFO.email.support}`} className="text-brand-accent hover:underline">
                                                {CONTACT_INFO.email.support}
                                            </a>
                                        </li>
                                        <li><strong className="text-white">Location:</strong> {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}, {CONTACT_INFO.address.country}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default QuoteMateTerms;
