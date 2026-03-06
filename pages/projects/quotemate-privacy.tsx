import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    Shield,
    Lock,
    Eye,
    Database,
    Share2,
    UserCheck,
    AlertCircle,
    Mail
} from 'lucide-react';

const QuoteMatePrivacy: React.FC = () => {
    return (
        <>
            <Head>
                <title>QuoteMate Privacy Policy | Your Data Stays Private</title>
                <meta name="description" content="QuoteMate Privacy Policy: We never collect, store, or share your data. All information stays on your device. 100% private and secure quoting app for Australian tradies." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://hansendev.com.au/projects/quotemate-privacy" />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://hansendev.com.au/projects/quotemate-privacy" />
                <meta property="og:title" content="QuoteMate Privacy Policy - Your Data Stays Private" />
                <meta property="og:description" content="100% private: All your quotes and customer data stay on your device. We never see, store, or share your information." />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Back Navigation */}
                <div className="">
                    <div className="container-custom py-6">
                        <Link href="/projects/quotemate" className="inline-flex items-center gap-2 text-dark-text-secondary hover:text-brand-accent transition-colors duration-300">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to QuoteMate</span>
                        </Link>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl flex items-center justify-center">
                                    <Shield className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-4xl lg:text-5xl font-bold text-white">Privacy Policy</h1>
                                    <p className="text-dark-text-secondary mt-2">Last updated: January 15, 2025</p>
                                </div>
                            </div>

                            {/* Trust Banner */}
                            <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8  mb-12">
                                <h2 className="text-2xl font-bold text-white mb-4">Your Privacy is Our Priority</h2>
                                <p className="text-lg text-dark-text-secondary leading-relaxed">
                                    QuoteMate is built with privacy at its core. <strong className="text-white">We don't collect, store, or share any of your data.</strong> Everything stays on your device. This isn't just a policy - it's how the app is designed.
                                </p>
                            </div>

                            {/* Quick Summary */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8  mb-12">
                                <h2 className="text-2xl font-bold text-white mb-6">Privacy Policy Summary</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center  flex-shrink-0">
                                            <Shield className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">No Data Collection</h3>
                                            <p className="text-sm text-dark-text-secondary">We don't collect any personal information or usage data</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center  flex-shrink-0">
                                            <Database className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Local Storage Only</h3>
                                            <p className="text-sm text-dark-text-secondary">All data stored on your device, never on our servers</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center  flex-shrink-0">
                                            <Share2 className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">No Sharing</h3>
                                            <p className="text-sm text-dark-text-secondary">We never share or sell your data to anyone</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center  flex-shrink-0">
                                            <Eye className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">No Tracking</h3>
                                            <p className="text-sm text-dark-text-secondary">No analytics, no cookies, no user tracking</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Policy */}
                            <div className="space-y-12">
                                {/* Information We Collect */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">1. Information We Collect</h2>
                                    <div className="prose prose-invert max-w-none">
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            <strong className="text-white">Short answer: None.</strong>
                                        </p>
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            QuoteMate does not collect, transmit, or store any personal information on our servers. We have no servers, databases, or cloud storage that contains your information.
                                        </p>
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            All information you enter into QuoteMate (customer details, quotes, business information, photos, settings) is stored locally on your device using encrypted local storage (AsyncStorage). This data never leaves your device unless you explicitly choose to share a quote via email, SMS, or other sharing methods.
                                        </p>
                                    </div>
                                </section>

                                {/* Local Data Storage */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">2. How Your Data is Stored</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <h3 className="text-xl font-bold text-white mb-4">Local Device Storage</h3>
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            QuoteMate stores the following information locally on your device:
                                        </p>
                                        <ul className="space-y-3 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Business Information:</strong> Your company name, logo, ABN, contact details, default labor rates, and markup percentages</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Customer Data:</strong> Customer names, phone numbers, email addresses, and job site addresses you enter for quotes</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Quote Information:</strong> All quotes you create including materials, pricing, labor calculations, and quote status</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Photos:</strong> Any job site photos you take or attach to quotes</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">App Settings:</strong> Your preferences for the app's appearance and behavior</span>
                                            </li>
                                        </ul>
                                        <div className="mt-6 p-4 bg-brand-accent/10  rounded-xl">
                                            <p className="text-dark-text-secondary text-sm">
                                                <strong className="text-white">Important:</strong> This data is stored using encrypted local storage on your device only. It is never transmitted to our servers because we don't have any servers. You maintain complete control and can delete all data at any time from the app settings.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Third-Party Services */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">3. Third-Party Services</h2>
                                    <div className="space-y-6">
                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Bunnings API</h3>
                                            <p className="text-dark-text-secondary leading-relaxed mb-3">
                                                When you use the "Fetch Bunnings Prices" feature, QuoteMate makes requests to the Bunnings Live API to retrieve current product pricing. This connection:
                                            </p>
                                            <ul className="space-y-2 text-dark-text-secondary">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Only sends product names/codes to search for prices</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Does NOT send your customer information, business details, or quote data</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Uses OAuth 2.0 secure authentication</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Subject to Bunnings' own privacy policy</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Claude AI (Anthropic)</h3>
                                            <p className="text-dark-text-secondary leading-relaxed mb-3">
                                                When you use the AI-powered custom job estimation feature, QuoteMate sends your job description to Claude AI to generate material suggestions. This:
                                            </p>
                                            <ul className="space-y-2 text-dark-text-secondary">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Only sends the job description text you provide (e.g., "5x4m deck with stairs")</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Does NOT send customer names, addresses, or any personal information</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>This feature is entirely optional - you can create quotes without using AI</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Subject to Anthropic's privacy policy</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                {/* Device Permissions */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">4. Device Permissions</h2>
                                    <p className="text-dark-text-secondary leading-relaxed mb-6">
                                        QuoteMate requests certain device permissions to provide full functionality. Here's what we use and why:
                                    </p>

                                    <div className="space-y-4">
                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center  flex-shrink-0">
                                                    <span className="text-2xl">📷</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-white mb-2">Camera Access</h3>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">Purpose:</strong> Take photos of job sites, materials, or add your company logo</p>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">What we do:</strong> Photos are stored locally on your device and only included in quotes if you choose to add them</p>
                                                    <p className="text-dark-text-secondary text-sm"><strong className="text-white">Optional:</strong> You can decline camera access and manually upload photos from your gallery</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center  flex-shrink-0">
                                                    <span className="text-2xl">📍</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-white mb-2">Location Access</h3>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">Purpose:</strong> Auto-fill job site addresses and find nearby Bunnings stores</p>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">What we do:</strong> Location is used only when creating quotes to suggest addresses. We never track your location or store location history</p>
                                                    <p className="text-dark-text-secondary text-sm"><strong className="text-white">Optional:</strong> You can manually enter addresses if you prefer not to grant location access</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center  flex-shrink-0">
                                                    <span className="text-2xl">💾</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-white mb-2">Storage Access</h3>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">Purpose:</strong> Save quotes, settings, and exported PDF files to your device</p>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">What we do:</strong> All data is encrypted and stored locally. Nothing is uploaded to external servers</p>
                                                    <p className="text-dark-text-secondary text-sm"><strong className="text-white">Required:</strong> Storage access is necessary for the app to function</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Data Sharing */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">5. Data Sharing & Disclosure</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            <strong className="text-white">We do not share, sell, rent, or trade your data with anyone. Period.</strong>
                                        </p>
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            Since we don't collect your data in the first place, there's nothing for us to share. The only time your quote information leaves your device is when <strong className="text-white">you</strong> choose to share a quote with a customer via:
                                        </p>
                                        <ul className="space-y-2 text-dark-text-secondary mb-4">
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span>Email (using your device's email app)</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span>SMS/Text message (using your device's messaging app)</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span>WhatsApp, Messenger, or other sharing apps you choose</span>
                                            </li>
                                        </ul>
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            When you share a quote, you are in complete control of what information is shared and with whom. We never see, access, or track these shares.
                                        </p>
                                    </div>
                                </section>

                                {/* Analytics & Tracking */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">6. Analytics & Tracking</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <p className="text-lg text-dark-text-secondary leading-relaxed mb-4">
                                            <strong className="text-white">QuoteMate does not use any analytics or tracking.</strong>
                                        </p>
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            We don't use:
                                        </p>
                                        <ul className="space-y-2 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1">✗</span>
                                                <span>Google Analytics or any analytics services</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1">✗</span>
                                                <span>Crash reporting or error tracking services</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1">✗</span>
                                                <span>User behavior tracking or heatmaps</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1">✗</span>
                                                <span>Cookies or similar tracking technologies</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1">✗</span>
                                                <span>Advertising networks or trackers</span>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Data Security */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">7. Data Security</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            Your data security is ensured through:
                                        </p>
                                        <ul className="space-y-3 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <Lock className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
                                                <span><strong className="text-white">Encrypted Local Storage:</strong> All data stored on your device is encrypted using industry-standard encryption</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Lock className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
                                                <span><strong className="text-white">Secure API Connections:</strong> All connections to Bunnings API use HTTPS and OAuth 2.0 authentication</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Lock className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
                                                <span><strong className="text-white">No Cloud Storage:</strong> The best security is not storing your data at all. Since everything stays on your device, there's no cloud server to hack</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Lock className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
                                                <span><strong className="text-white">Device-Level Security:</strong> Your data is protected by your device's own security (PIN, password, biometrics)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Your Rights */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">8. Your Rights & Control</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            You have complete control over your data:
                                        </p>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Access Your Data</h4>
                                                <p className="text-dark-text-secondary text-sm">All your data is accessible directly in the app. You can view, edit, or export any information at any time.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Delete Your Data</h4>
                                                <p className="text-dark-text-secondary text-sm">You can delete individual quotes, customer records, or all app data from the Settings menu. You can also uninstall the app to remove everything.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Export Your Data</h4>
                                                <p className="text-dark-text-secondary text-sm">All quotes can be exported as PDF files, which you can save, back up, or share as needed.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Manage Permissions</h4>
                                                <p className="text-dark-text-secondary text-sm">You can revoke camera or location permissions at any time through your device settings. The app will continue to work with limited functionality.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Children's Privacy */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">9. Children's Privacy</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            QuoteMate is designed for professional tradies and is not intended for use by children under 13. We do not knowingly collect information from children. If you believe a child has used QuoteMate, please contact us, though rest assured no data would have been collected from our end.
                                        </p>
                                    </div>
                                </section>

                                {/* Changes to Policy */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">10. Changes to This Privacy Policy</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            We may update this privacy policy from time to time. We will notify you of any changes by:
                                        </p>
                                        <ul className="space-y-2 text-dark-text-secondary mb-4">
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span>Posting the new privacy policy on this page</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span>Updating the "Last updated" date at the top of this policy</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span>Displaying an in-app notification (for significant changes)</span>
                                            </li>
                                        </ul>
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            We encourage you to review this privacy policy periodically. However, our core principle will never change: <strong className="text-white">your data stays on your device, and we never collect or share it.</strong>
                                        </p>
                                    </div>
                                </section>

                                {/* Contact */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">11. Contact Us</h2>
                                    <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8 ">
                                        <p className="text-dark-text-secondary leading-relaxed mb-6">
                                            If you have any questions about this privacy policy or QuoteMate's privacy practices, please contact us:
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <Mail className="h-5 w-5 text-brand-accent" />
                                                <a href="/#contact" className="text-brand-accent hover:underline">Contact Form on Hansen Dev</a>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <AlertCircle className="h-5 w-5 text-brand-accent" />
                                                <a href="https://github.com/Krank3n/QuoteMate/issues" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">GitHub Issues</a>
                                            </div>
                                        </div>
                                        <p className="text-dark-text-secondary text-sm mt-6">
                                            QuoteMate is an open-source project maintained by Hansen Dev. The source code is publicly available, so you can verify our privacy claims yourself.
                                        </p>
                                    </div>
                                </section>
                            </div>

                            {/* Bottom CTA */}
                            <div className="mt-16 text-center">
                                <Link
                                    href="/projects/quotemate"
                                    className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Shield className="h-5 w-5" />
                                    <span>Back to QuoteMate</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default QuoteMatePrivacy;
