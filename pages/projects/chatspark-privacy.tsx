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
    AlertCircle,
    Mail,
    Smartphone,
    HardDrive
} from 'lucide-react';

const ChatSparkPrivacy: React.FC = () => {
    return (
        <>
            <Head>
                <title>ChatSpark Privacy Policy | Your Data Stays Private</title>
                <meta name="description" content="ChatSpark Privacy Policy: We never collect, store, or share your data. All information stays on your device. 100% private and secure social confidence app." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://hansendev.com.au/projects/chatspark-privacy" />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://hansendev.com.au/projects/chatspark-privacy" />
                <meta property="og:title" content="ChatSpark Privacy Policy - Your Data Stays Private" />
                <meta property="og:description" content="100% private: All your progress and personal data stay on your device. We never see, store, or share your information." />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Back Navigation */}
                <div className="border-b border-white/10">
                    <div className="container-custom py-6">
                        <Link href="/projects/chatspark" className="inline-flex items-center gap-2 text-dark-text-secondary hover:text-brand-accent transition-colors duration-300">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to ChatSpark</span>
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
                            <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8 border border-brand-accent/20 mb-12">
                                <h2 className="text-2xl font-bold text-white mb-4">Your Privacy is Sacred</h2>
                                <p className="text-lg text-dark-text-secondary leading-relaxed">
                                    ChatSpark is built with privacy as the foundation. <strong className="text-white">We don't collect, store, or share any of your data.</strong> Everything stays on your device. This isn't marketing - it's how the app is architecturally designed.
                                </p>
                            </div>

                            {/* Quick Summary */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
                                <h2 className="text-2xl font-bold text-white mb-6">Privacy Policy Summary</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center border border-green-500/30 flex-shrink-0">
                                            <Shield className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Zero Data Collection</h3>
                                            <p className="text-sm text-dark-text-secondary">We don't collect any personal information or usage data</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center border border-green-500/30 flex-shrink-0">
                                            <Database className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Local Storage Only</h3>
                                            <p className="text-sm text-dark-text-secondary">All data stored on your device, never on our servers</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center border border-green-500/30 flex-shrink-0">
                                            <Share2 className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">No Sharing</h3>
                                            <p className="text-sm text-dark-text-secondary">We never share or sell your data to anyone</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center border border-green-500/30 flex-shrink-0">
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
                                            <strong className="text-white">Short answer: Nothing.</strong>
                                        </p>
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            ChatSpark does not collect, transmit, or store any personal information on external servers. We have no backend infrastructure, no cloud databases, and no tracking systems.
                                        </p>
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            All information you enter into ChatSpark (mission completions, mood entries, progress data, personal goals, settings) is stored locally on your device using encrypted SQLite database storage. This data never leaves your device unless you explicitly choose to export a progress report PDF.
                                        </p>
                                    </div>
                                </section>

                                {/* Local Data Storage */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">2. How Your Data is Stored</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <h3 className="text-xl font-bold text-white mb-4">Local Device Storage (SQLite)</h3>
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            ChatSpark stores the following information locally on your device:
                                        </p>
                                        <ul className="space-y-3 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Mission Progress:</strong> Which missions you've completed, when you completed them, and your difficulty progression</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Mood Data:</strong> Your mood ratings before and after missions to help track emotional progress</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Personal Goals:</strong> Any personal goals or notes you've set for yourself</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Statistics:</strong> Aggregated data about your progress (completion rates, difficulty levels achieved, etc.)</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">App Settings:</strong> Your preferences for language, notifications, and app behavior</span>
                                            </li>
                                        </ul>
                                        <div className="mt-6 p-4 bg-brand-accent/10 border border-brand-accent/30 rounded-xl">
                                            <p className="text-dark-text-secondary text-sm">
                                                <strong className="text-white">Important:</strong> This data is stored using SQLite on your device only. It is never transmitted to external servers because we don't have any servers. You maintain complete control and can delete all data at any time from the app settings.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* No Third-Party Services */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">3. Third-Party Services</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <p className="text-lg text-dark-text-secondary leading-relaxed mb-4">
                                            <strong className="text-white">ChatSpark does not use any third-party services that access your data.</strong>
                                        </p>
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            We do not integrate with:
                                        </p>
                                        <ul className="space-y-2 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1">✗</span>
                                                <span>Cloud storage or backup services</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1">✗</span>
                                                <span>Analytics or tracking platforms</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1">✗</span>
                                                <span>Advertising networks</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1">✗</span>
                                                <span>Social media platforms</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1">✗</span>
                                                <span>External APIs or services</span>
                                            </li>
                                        </ul>
                                        <p className="text-dark-text-secondary leading-relaxed mt-4">
                                            ChatSpark is completely self-contained. All features work entirely offline with no external dependencies.
                                        </p>
                                    </div>
                                </section>

                                {/* Device Permissions */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">4. Device Permissions</h2>
                                    <p className="text-dark-text-secondary leading-relaxed mb-6">
                                        ChatSpark requests minimal device permissions to provide functionality. Here's what we use and why:
                                    </p>

                                    <div className="space-y-4">
                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center border border-brand-accent/30 flex-shrink-0">
                                                    <span className="text-2xl">💾</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-white mb-2">Storage Access</h3>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">Purpose:</strong> Save mission data, progress, and settings locally to your device</p>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">What we do:</strong> All data is encrypted and stored in a local SQLite database. Nothing is uploaded anywhere</p>
                                                    <p className="text-dark-text-secondary text-sm"><strong className="text-white">Required:</strong> Storage access is necessary for the app to function and save your progress</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center border border-brand-accent/30 flex-shrink-0">
                                                    <span className="text-2xl">🔊</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-white mb-2">Audio Access</h3>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">Purpose:</strong> Play voice-guided coaching for missions</p>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">What we do:</strong> Audio files are stored locally in the app and played on your device. No recording or transmission occurs</p>
                                                    <p className="text-dark-text-secondary text-sm"><strong className="text-white">Optional:</strong> You can use the app without audio, though voice coaching is a helpful feature</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center border border-brand-accent/30 flex-shrink-0">
                                                    <span className="text-2xl">🔔</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-white mb-2">Notification Access</h3>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">Purpose:</strong> Send reminders to practice missions and stay consistent</p>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">What we do:</strong> Local notifications are scheduled on your device. No data is sent externally</p>
                                                    <p className="text-dark-text-secondary text-sm"><strong className="text-white">Optional:</strong> You can disable notifications at any time from device or app settings</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Data Sharing */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">5. Data Sharing & Disclosure</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            <strong className="text-white">We do not share, sell, rent, or trade your data with anyone. Ever.</strong>
                                        </p>
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            Since we don't collect your data in the first place, there's nothing for us to share. The only time your information leaves your device is when <strong className="text-white">you</strong> explicitly choose to:
                                        </p>
                                        <ul className="space-y-2 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span>Export a PDF progress report (which you control and can share manually)</span>
                                            </li>
                                        </ul>
                                        <p className="text-dark-text-secondary leading-relaxed mt-4">
                                            When you export a progress report, <strong className="text-white">you</strong> are in complete control of what happens with that PDF. We never see, access, or track these exports.
                                        </p>
                                    </div>
                                </section>

                                {/* Analytics & Tracking */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">6. Analytics & Tracking</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <p className="text-lg text-dark-text-secondary leading-relaxed mb-4">
                                            <strong className="text-white">ChatSpark does not use any analytics or tracking whatsoever.</strong>
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
                                            <li className="flex items-start gap-3">
                                                <span className="text-red-400 mt-1">✗</span>
                                                <span>A/B testing or experimentation platforms</span>
                                            </li>
                                        </ul>
                                        <p className="text-dark-text-secondary leading-relaxed mt-4">
                                            Your journey with ChatSpark is completely private. We have no visibility into how you use the app, which missions you complete, or how often you practice.
                                        </p>
                                    </div>
                                </section>

                                {/* Data Security */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">7. Data Security</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            Your data security is ensured through:
                                        </p>
                                        <ul className="space-y-3 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <Lock className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
                                                <span><strong className="text-white">Encrypted Local Database:</strong> All data stored in SQLite with encryption enabled</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Lock className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
                                                <span><strong className="text-white">Offline-First Architecture:</strong> No internet connection means no possibility of data leaks or breaches</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Lock className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
                                                <span><strong className="text-white">No Cloud Storage:</strong> The best security is not storing your data remotely. Since everything stays on your device, there's no cloud server to hack</span>
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
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            You have complete control over your data:
                                        </p>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Access Your Data</h4>
                                                <p className="text-dark-text-secondary text-sm">All your data is accessible directly in the app. View your progress, mood history, and statistics at any time.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Delete Your Data</h4>
                                                <p className="text-dark-text-secondary text-sm">You can delete individual mission entries, clear all progress, or reset the app entirely from the Settings menu. You can also uninstall the app to remove everything.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Export Your Data</h4>
                                                <p className="text-dark-text-secondary text-sm">Export your progress as a PDF report that you can save, print, or share with therapists or coaches if you choose.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Manage Permissions</h4>
                                                <p className="text-dark-text-secondary text-sm">Revoke storage or notification permissions at any time through your device settings. The app functionality may be limited but will continue to work.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Children's Privacy */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">9. Children's Privacy</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            ChatSpark is designed for individuals 13 years and older. We do not knowingly collect information from children under 13. If you believe a child has used ChatSpark, please contact us, though rest assured no data would have been collected from our end as the app has no data collection capabilities.
                                        </p>
                                    </div>
                                </section>

                                {/* Changes to Policy */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">10. Changes to This Privacy Policy</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
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
                                            However, our core principle will never change: <strong className="text-white">your data stays on your device, and we never collect or share it.</strong>
                                        </p>
                                    </div>
                                </section>

                                {/* Open Source */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">11. Open Source Transparency</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            ChatSpark is completely open-source. You can verify every privacy claim we make by reviewing the source code on GitHub. There are no hidden tracking mechanisms, no secret API calls, and no backdoors.
                                        </p>
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            If you're technically inclined, we encourage you to audit the code yourself. Transparency is a core value of this project.
                                        </p>
                                    </div>
                                </section>

                                {/* Contact */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">12. Contact Us</h2>
                                    <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8 border border-brand-accent/20">
                                        <p className="text-dark-text-secondary leading-relaxed mb-6">
                                            If you have any questions about this privacy policy or ChatSpark's privacy practices, please contact us:
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <Mail className="h-5 w-5 text-brand-accent" />
                                                <a href="/#contact" className="text-brand-accent hover:underline">Contact Form on Hansen Dev</a>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <AlertCircle className="h-5 w-5 text-brand-accent" />
                                                <a href="https://github.com/Krank3n/ChatSpark/issues" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">GitHub Issues</a>
                                            </div>
                                        </div>
                                        <p className="text-dark-text-secondary text-sm mt-6">
                                            ChatSpark is an open-source project maintained by Hansen Dev. The source code is publicly available, so you can verify our privacy claims yourself.
                                        </p>
                                    </div>
                                </section>
                            </div>

                            {/* Bottom CTA */}
                            <div className="mt-16 text-center">
                                <Link
                                    href="/projects/chatspark"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Shield className="h-5 w-5" />
                                    <span>Back to ChatSpark</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ChatSparkPrivacy;
