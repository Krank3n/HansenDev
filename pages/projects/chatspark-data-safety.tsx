import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    Shield,
    Database,
    Lock,
    Eye,
    CheckCircle,
    XCircle,
    Smartphone,
    HardDrive,
    Share2,
    AlertCircle
} from 'lucide-react';

const ChatSparkDataSafety: React.FC = () => {
    return (
        <>
            <Head>
                <title>ChatSpark Data Safety | Google Play Data Collection Disclosure</title>
                <meta name="description" content="ChatSpark Data Safety declaration: We collect ZERO data. No personal information, no analytics, no tracking. 100% offline app with complete privacy. Full transparency about our data practices." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://hansendev.com.au/projects/chatspark-data-safety" />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://hansendev.com.au/projects/chatspark-data-safety" />
                <meta property="og:title" content="ChatSpark Data Safety - Zero Data Collection" />
                <meta property="og:description" content="Complete transparency: ChatSpark collects ZERO data. No tracking, no analytics, no personal information collection." />
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
                                    <h1 className="text-4xl lg:text-5xl font-bold text-white">Data Safety</h1>
                                    <p className="text-dark-text-secondary mt-2">Google Play Data Collection Disclosure</p>
                                </div>
                            </div>

                            {/* Trust Banner */}
                            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20 mb-12">
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="h-8 w-8 text-green-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h2 className="text-2xl font-bold text-white mb-4">We Collect ZERO Data</h2>
                                        <p className="text-lg text-dark-text-secondary leading-relaxed">
                                            ChatSpark does not collect, transmit, or share any user data. Everything stays on your device. This page provides full transparency about our data practices in compliance with Google Play Store requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Summary */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
                                <h2 className="text-2xl font-bold text-white mb-6">Data Safety Summary</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                                        <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                                        <div>
                                            <p className="text-white font-semibold">No data collected</p>
                                            <p className="text-sm text-dark-text-secondary">The developer doesn't collect any data from this app</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                                        <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                                        <div>
                                            <p className="text-white font-semibold">Data not shared with third parties</p>
                                            <p className="text-sm text-dark-text-secondary">The developer doesn't share any data with third parties</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                                        <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                                        <div>
                                            <p className="text-white font-semibold">Data is encrypted in transit</p>
                                            <p className="text-sm text-dark-text-secondary">Your data is transferred over a secure connection (N/A - no data transmission occurs)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                                        <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                                        <div>
                                            <p className="text-white font-semibold">You can request data deletion</p>
                                            <p className="text-sm text-dark-text-secondary">You can delete all app data from device settings at any time</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Sections */}
                            <div className="space-y-12">
                                {/* Data Collection Section */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">1. Data Collection</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                        <div className="flex items-start gap-4 mb-6">
                                            <Database className="h-8 w-8 text-brand-accent flex-shrink-0" />
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-3">No Data Collected</h3>
                                                <p className="text-dark-text-secondary leading-relaxed mb-4">
                                                    ChatSpark does not collect any of the following data types:
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-3">
                                                <h4 className="font-bold text-white">Personal Information</h4>
                                                <ul className="space-y-2 text-dark-text-secondary text-sm">
                                                    <li className="flex items-center gap-2">
                                                        <XCircle className="h-4 w-4 text-red-400" />
                                                        <span>Name, email address, phone number</span>
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <XCircle className="h-4 w-4 text-red-400" />
                                                        <span>User IDs or account info</span>
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <XCircle className="h-4 w-4 text-red-400" />
                                                        <span>Address or physical location</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="space-y-3">
                                                <h4 className="font-bold text-white">Health & Fitness</h4>
                                                <ul className="space-y-2 text-dark-text-secondary text-sm">
                                                    <li className="flex items-center gap-2">
                                                        <XCircle className="h-4 w-4 text-red-400" />
                                                        <span>Health information</span>
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <XCircle className="h-4 w-4 text-red-400" />
                                                        <span>Fitness data</span>
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <XCircle className="h-4 w-4 text-red-400" />
                                                        <span>Mental health data</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="space-y-3">
                                                <h4 className="font-bold text-white">App Activity</h4>
                                                <ul className="space-y-2 text-dark-text-secondary text-sm">
                                                    <li className="flex items-center gap-2">
                                                        <XCircle className="h-4 w-4 text-red-400" />
                                                        <span>App interactions</span>
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <XCircle className="h-4 w-4 text-red-400" />
                                                        <span>In-app search history</span>
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <XCircle className="h-4 w-4 text-red-400" />
                                                        <span>Usage data or diagnostics</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="space-y-3">
                                                <h4 className="font-bold text-white">Device & Other IDs</h4>
                                                <ul className="space-y-2 text-dark-text-secondary text-sm">
                                                    <li className="flex items-center gap-2">
                                                        <XCircle className="h-4 w-4 text-red-400" />
                                                        <span>Device IDs</span>
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <XCircle className="h-4 w-4 text-red-400" />
                                                        <span>Advertising IDs</span>
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <XCircle className="h-4 w-4 text-red-400" />
                                                        <span>Other identifiers</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-6 p-4 bg-brand-accent/10 border border-brand-accent/30 rounded-xl">
                                            <p className="text-dark-text-secondary text-sm">
                                                <strong className="text-white">Why?</strong> ChatSpark is designed as an offline-first app. All your progress, mood entries, and personal information are stored locally on your device using SQLite. There is no backend server, no cloud storage, and no data transmission.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Data Sharing Section */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">2. Data Sharing</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                        <div className="flex items-start gap-4 mb-6">
                                            <Share2 className="h-8 w-8 text-brand-accent flex-shrink-0" />
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-3">No Data Shared</h3>
                                                <p className="text-dark-text-secondary leading-relaxed">
                                                    ChatSpark does not share any data with third parties because we don't collect any data in the first place. There is no:
                                                </p>
                                            </div>
                                        </div>

                                        <ul className="space-y-3 text-dark-text-secondary">
                                            <li className="flex items-center gap-3">
                                                <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                                                <span>Data sharing with advertisers or marketing companies</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                                                <span>Data sharing with analytics providers</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                                                <span>Data sharing with third-party service providers</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                                                <span>Data sharing with data brokers or other companies</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                                                <span>Data selling or renting to any party</span>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Security Practices Section */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">3. Security Practices</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                        <div className="flex items-start gap-4 mb-6">
                                            <Lock className="h-8 w-8 text-brand-accent flex-shrink-0" />
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-3">How We Protect Your Data</h3>
                                                <p className="text-dark-text-secondary leading-relaxed">
                                                    Even though we don't collect data, we implement the following security measures:
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="text-white font-semibold mb-1">Data is encrypted in transit</h4>
                                                    <p className="text-sm text-dark-text-secondary">Not applicable - the app doesn't transmit any data over the network. All data stays on your device.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="text-white font-semibold mb-1">You can request data deletion</h4>
                                                    <p className="text-sm text-dark-text-secondary">You can delete all app data at any time by clearing the app's data from your device settings or uninstalling the app.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="text-white font-semibold mb-1">Local encryption</h4>
                                                    <p className="text-sm text-dark-text-secondary">All data stored locally on your device is encrypted using SQLite database encryption.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="text-white font-semibold mb-1">Device-level security</h4>
                                                    <p className="text-sm text-dark-text-secondary">Your data is protected by your device's built-in security features (PIN, password, biometrics).</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Local Storage Section */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">4. What Data is Stored Locally</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                        <div className="flex items-start gap-4 mb-6">
                                            <HardDrive className="h-8 w-8 text-brand-accent flex-shrink-0" />
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-3">On-Device Storage Only</h3>
                                                <p className="text-dark-text-secondary leading-relaxed mb-4">
                                                    While ChatSpark doesn't collect or transmit data, it does store the following information locally on your device for app functionality:
                                                </p>
                                            </div>
                                        </div>

                                        <ul className="space-y-3 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <Smartphone className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                                <span><strong className="text-white">Mission Progress:</strong> Which missions you've completed and when</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Smartphone className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                                <span><strong className="text-white">Mood Ratings:</strong> Your self-reported mood before and after missions</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Smartphone className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                                <span><strong className="text-white">Personal Goals:</strong> Any notes or goals you set for yourself</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Smartphone className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                                <span><strong className="text-white">App Preferences:</strong> Language selection, notification settings, theme preferences</span>
                                            </li>
                                        </ul>

                                        <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                                            <div className="flex items-start gap-3">
                                                <AlertCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                                <p className="text-dark-text-secondary text-sm">
                                                    <strong className="text-white">Important:</strong> This data never leaves your device. It is stored in an encrypted SQLite database on your phone and is only accessible by the ChatSpark app on your device.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Permissions Section */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">5. App Permissions</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                        <p className="text-dark-text-secondary leading-relaxed mb-6">
                                            ChatSpark requests minimal permissions to provide functionality:
                                        </p>

                                        <div className="space-y-4">
                                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                                <div className="flex items-start gap-3 mb-2">
                                                    <span className="text-2xl">💾</span>
                                                    <h4 className="text-white font-semibold">Storage (Required)</h4>
                                                </div>
                                                <p className="text-sm text-dark-text-secondary ml-11">
                                                    Used to save your progress, missions, and settings locally on your device. No data is uploaded anywhere.
                                                </p>
                                            </div>

                                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                                <div className="flex items-start gap-3 mb-2">
                                                    <span className="text-2xl">🔔</span>
                                                    <h4 className="text-white font-semibold">Notifications (Optional)</h4>
                                                </div>
                                                <p className="text-sm text-dark-text-secondary ml-11">
                                                    Used to send local reminders to practice missions. All notifications are generated locally on your device.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* User Controls Section */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">6. Your Controls & Rights</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                        <p className="text-dark-text-secondary leading-relaxed mb-6">
                                            You have complete control over your data:
                                        </p>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <Eye className="h-5 w-5 text-brand-accent flex-shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="text-white font-semibold mb-1">View Your Data</h4>
                                                    <p className="text-sm text-dark-text-secondary">All your data is accessible within the app. You can view your progress, missions, and mood history at any time.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <Database className="h-5 w-5 text-brand-accent flex-shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="text-white font-semibold mb-1">Export Your Data</h4>
                                                    <p className="text-sm text-dark-text-secondary">You can export your progress as a PDF report that you control and can save or share as you choose.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <XCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="text-white font-semibold mb-1">Delete Your Data</h4>
                                                    <p className="text-sm text-dark-text-secondary">You can delete all app data from the app settings or by clearing app data in your device settings. Uninstalling the app also removes all data.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Contact Section */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">7. Questions or Concerns?</h2>
                                    <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8 border border-brand-accent/20">
                                        <p className="text-dark-text-secondary leading-relaxed mb-6">
                                            If you have questions about our data safety practices or need more information:
                                        </p>
                                        <div className="space-y-3">
                                            <div>
                                                <p className="text-white font-semibold mb-1">Review our Privacy Policy</p>
                                                <Link href="/projects/chatspark-privacy" className="text-brand-accent hover:underline">
                                                    Read the full ChatSpark Privacy Policy →
                                                </Link>
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold mb-1">Contact the Developer</p>
                                                <a href="/#contact" className="text-brand-accent hover:underline">
                                                    Contact Hansen Dev →
                                                </a>
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold mb-1">Open Source Code</p>
                                                <a href="https://github.com/Krank3n/ChatSpark" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
                                                    View source code on GitHub →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Last Updated */}
                                <section>
                                    <div className="text-center text-dark-text-secondary text-sm">
                                        <p>Last updated: January 15, 2025</p>
                                        <p className="mt-2">This data safety information is provided in compliance with Google Play Store requirements.</p>
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

export default ChatSparkDataSafety;
