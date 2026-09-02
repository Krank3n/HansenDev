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
                                    <p className="text-dark-text-secondary mt-2">Last updated: September 2, 2026</p>
                                </div>
                            </div>

                            {/* Trust Banner */}
                            <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8  mb-12">
                                <h2 className="text-2xl font-bold text-white mb-4">Plain-English Summary</h2>
                                <p className="text-lg text-dark-text-secondary leading-relaxed">
                                    QuoteMate is made by Hansen Dev. To run the app we store your account, business details, customers, quotes, invoices and photos in the cloud (Google Firebase), and we pass job details to a handful of services that generate quotes, send emails and take payments. <strong className="text-white">We never sell your data and we never use it for advertising.</strong> This policy sets out exactly what we collect, who touches it and how you can delete it. It is written to meet the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles.
                                </p>
                            </div>

                            {/* Quick Summary */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8  mb-12">
                                <h2 className="text-2xl font-bold text-white mb-6">Privacy Policy Summary</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center  flex-shrink-0">
                                            <UserCheck className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Your data, your business</h3>
                                            <p className="text-sm text-dark-text-secondary">Your quotes, customers and job details belong to you. We use them to run the app for you and for nothing else.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center  flex-shrink-0">
                                            <Database className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Stored securely in the cloud (Firebase)</h3>
                                            <p className="text-sm text-dark-text-secondary">Your account data lives in Google Firebase, encrypted in transit and at rest, so it syncs between your devices and survives a lost phone.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center  flex-shrink-0">
                                            <Share2 className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Never sold</h3>
                                            <p className="text-sm text-dark-text-secondary">We do not sell, rent or trade your data, and we do not use it for advertising. It only goes to the services listed in this policy.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center  flex-shrink-0">
                                            <Eye className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Delete any time</h3>
                                            <p className="text-sm text-dark-text-secondary">Delete your account from Settings, disconnect any integration with one tap, or ask us to erase everything we hold about you.</p>
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
                                            We collect the information you give us to run your quoting, plus a small amount of technical data needed to keep the app working. Nothing in this section is collected without you signing in.
                                        </p>
                                    </div>
                                    <div className="space-y-6 mt-6">
                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Account information</h3>
                                            <ul className="space-y-3 text-dark-text-secondary">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Your email address and display name, and which sign-in method you used (email and password, Google, or Apple). Sign-in is handled by Firebase Authentication. If you use a password, Firebase stores it in hashed form; we never see it.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Your subscription status and trial dates, and where you subscribed (web, App Store or Google Play). We do not hold your card number; see Third-Party Services below.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Your referral code and referral earnings if you take part in the referral program.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Business information</h3>
                                            <ul className="space-y-3 text-dark-text-secondary">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Business name, ABN, trade, phone, email, address, logo and any brand images you put on your documents</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Labour rates, markup percentages, quote and invoice numbering, and document preferences</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Payment details you choose to print on invoices: bank account name, BSB and account number, PayID or BPAY details</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Customer and job data you enter</h3>
                                            <ul className="space-y-3 text-dark-text-secondary">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Customer names, phone numbers, email addresses and job site addresses</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Job descriptions, quotes, invoices, materials lists, prices, labour, notes, schedule dates, payments you record, and the status of each job</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>When you search for a customer, the app also looks through the contacts on your phone (with your permission) and shows matches. A phone contact only becomes part of your QuoteMate data when you add it to a quote or your customer list.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Photos, plans, documents and voice you provide</h3>
                                            <ul className="space-y-3 text-dark-text-secondary">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Site photos, plan drawings and PDF plans you attach to a job</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Supplier price lists and invoices you photograph or upload so the app can read prices from them</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Microphone audio while you dictate a job description or talk to Mate, the in-app assistant, and the transcripts of your Mate conversations</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Device and usage data</h3>
                                            <ul className="space-y-3 text-dark-text-secondary">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Usage events (for example "quote started", "send sheet opened", "paywall viewed") with the platform they came from. These are written to your own account record, not to a third-party analytics service.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>A push notification token, a device identifier, the platform and your timezone, if you allow notifications</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Crash reports containing the error, a stack trace, and device, operating system and app version details</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>A log of the emails we send you and that you send through us (recipient, subject, category, delivery status, opens and clicks)</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>On the web version only, standard Google Analytics data (pages, events, browser type, approximate location from IP address)</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Integration tokens</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                If you connect Google Calendar, Square, Xero or Reece, we store the access token or customer token that service issues to QuoteMate, together with the account or merchant identifier it belongs to. These are held server-side only and are deleted when you disconnect.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* How We Use Your Information */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">2. How We Use Your Information</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <ul className="space-y-3 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Running the app:</strong> creating, storing and syncing your quotes, invoices, jobs, customers and settings between your devices</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Quote generation:</strong> turning your job description, photos and plans into a materials list, quantities and prices, and powering the Mate assistant</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Sending documents for you:</strong> emailing or texting quotes, invoices, payment links and receipts to your customers, and showing them the quote on a web page where they can accept it</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Integrations you turn on:</strong> putting jobs in your Google Calendar, taking payments through Square, sending accepted quotes to Xero, and looking up or ordering products from Reece</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Billing:</strong> starting, checking and cancelling your subscription</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Keeping you informed:</strong> account and billing emails, reminders about unsent quotes and overdue invoices, and push notifications about your jobs. Marketing-style emails carry an unsubscribe link.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Support and improvement:</strong> answering your questions, fixing crashes, and reviewing usage events and Mate transcripts to find where quotes come out wrong and fix the cause</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Security:</strong> rate limiting, checking payment webhooks are genuine, and detecting abuse</span>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Where and How Your Data Is Stored */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">3. Where and How Your Data Is Stored</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <h3 className="text-xl font-bold text-white mb-4">Google Firebase (Google Cloud)</h3>
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            QuoteMate stores your data in Google Firebase:
                                        </p>
                                        <ul className="space-y-3 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Firebase Authentication</strong> holds your sign-in credentials.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Cloud Firestore</strong> holds your business settings, customers, quotes, invoices, jobs, usage events, Mate transcripts, push tokens and integration tokens, all under a record keyed to your account.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Firebase Storage</strong> holds your logo, brand images, site photos and plan PDFs. These files are served from unguessable links so they can appear in the quotes, emails and PDFs you send to customers.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Cloud Functions</strong> run our server-side code (quote generation, email sending, payments, integrations) in the United States (us-central1).</span>
                                            </li>
                                        </ul>
                                        <div className="mt-6 p-4 bg-brand-accent/10  rounded-xl">
                                            <p className="text-dark-text-secondary text-sm">
                                                <strong className="text-white">Access rules:</strong> Firestore and Storage security rules only allow your own signed-in account to read or write the records under your account (uploading files also requires a verified email address). Our server code and the admin tools we use for support can also read them.
                                            </p>
                                        </div>
                                        <div className="mt-4 p-4 bg-brand-accent/10  rounded-xl">
                                            <p className="text-dark-text-secondary text-sm">
                                                <strong className="text-white">Encryption:</strong> all traffic between the app, our servers and the services below uses HTTPS/TLS. Google encrypts Firebase data at rest.
                                            </p>
                                        </div>
                                        <div className="mt-4 p-4 bg-brand-accent/10  rounded-xl">
                                            <p className="text-dark-text-secondary text-sm">
                                                <strong className="text-white">On your device:</strong> the app keeps a local copy of your quotes, settings and customers so it opens quickly and works with a poor signal. This copy is cleared when you sign out or delete your account. Integration tokens and our service API keys are never stored on your device.
                                            </p>
                                        </div>
                                        <div className="mt-4 p-4 bg-brand-accent/10  rounded-xl">
                                            <p className="text-dark-text-secondary text-sm">
                                                <strong className="text-white">Overseas disclosure:</strong> Google, Anthropic, OpenAI, ElevenLabs, Stripe, Sentry, Expo and Brevo are based outside Australia, mainly in the United States and Europe. By using QuoteMate you agree that the data described in this policy is processed by them there.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Google Calendar */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">4. Google Calendar (optional)</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <p className="text-dark-text-secondary leading-relaxed mb-6">
                                            QuoteMate can put your scheduled jobs into your Google Calendar. This is optional and stays off until you connect it yourself. If you never connect it, QuoteMate does not touch your Google Calendar at all.
                                        </p>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-bold text-white mb-2">What we ask for</h4>
                                                <p className="text-dark-text-secondary text-sm">When you go to Settings → Google Calendar and tap Connect, Google asks you to let QuoteMate "view and edit events on your calendars" (the https://www.googleapis.com/auth/calendar.events scope). QuoteMate asks for no other calendar permission.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">What we use it for</h4>
                                                <p className="text-dark-text-secondary text-sm">When you schedule a job in QuoteMate, a server function creates a matching event in your primary Google Calendar. When you reschedule the job, it updates that event. When you clear the schedule, it deletes the event. Sync is one-way, from QuoteMate to your calendar. Nothing you do in Google Calendar changes anything in QuoteMate.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">What we access</h4>
                                                <p className="text-dark-text-secondary text-sm">QuoteMate only reads back the events it created itself, so it can update or delete them later. It does not read, store or analyse any other events on your calendar.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">What we store and where</h4>
                                                <p className="text-dark-text-secondary text-sm mb-3">So the connection keeps working without asking you to sign in every time, QuoteMate stores:</p>
                                                <ul className="space-y-2 text-dark-text-secondary text-sm">
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-brand-accent mt-1">•</span>
                                                        <span>An OAuth refresh token for the Google account you connected</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-brand-accent mt-1">•</span>
                                                        <span>The email address of that Google account</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-brand-accent mt-1">•</span>
                                                        <span>The ID of each calendar event QuoteMate creates, so it can find that event again to update or delete it</span>
                                                    </li>
                                                </ul>
                                                <p className="text-dark-text-secondary text-sm mt-3">These are stored server-side in Firestore (Google Cloud). None of it is stored on your device.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Sharing</h4>
                                                <p className="text-dark-text-secondary text-sm">Your Google data is never sold, shared with third parties or used for advertising. It is never used to develop, improve or train generalised artificial intelligence or machine learning models.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Disconnecting</h4>
                                                <p className="text-dark-text-secondary text-sm">Go to Settings → Google Calendar → Disconnect. QuoteMate calls Google's token revocation endpoint and deletes the stored refresh token. You can also remove QuoteMate's access at any time from your Google Account at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">https://myaccount.google.com/permissions</a>.</p>
                                            </div>
                                        </div>
                                        <div className="mt-6 p-4 bg-brand-accent/10  rounded-xl">
                                            <p className="text-dark-text-secondary text-sm">
                                                QuoteMate's use of information received from Google APIs adheres to the Google API Services User Data Policy (<a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">https://developers.google.com/terms/api-services-user-data-policy</a>), including the Limited Use requirements.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Third-Party Services */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">5. Third-Party Services</h2>
                                    <p className="text-dark-text-secondary leading-relaxed mb-6">
                                        These are the services that receive your data, what each one receives and why. Each is bound by its own privacy policy. We do not send your data to any service not listed here.
                                    </p>
                                    <div className="space-y-6">
                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Google Firebase and Google Cloud</h3>
                                            <p className="text-dark-text-secondary leading-relaxed mb-3">
                                                Sign-in, database, file storage and our server code, as described in section 3. Receives everything in section 1.
                                            </p>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Language-model providers: Anthropic (Claude) and Google (Gemini)</h3>
                                            <p className="text-dark-text-secondary leading-relaxed mb-3">
                                                Quote generation and the Mate assistant run on Anthropic's Claude models, with Google's Gemini models used for some tasks and as a fallback when Claude is unavailable. Depending on the feature, they receive:
                                            </p>
                                            <ul className="space-y-2 text-dark-text-secondary">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Your job description, and the site photos, plan drawings, PDF plans, supplier price lists or invoices you attach, to work out materials, quantities and prices</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Product names, to search the web for prices from suppliers we cannot look up directly</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Your Mate conversation, your business profile, and the customer, quote and contact details Mate needs for what you asked it to do</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>The quote or invoice details when the app drafts an email to your customer for you</span>
                                                </li>
                                            </ul>
                                            <p className="text-dark-text-secondary text-sm mt-3">
                                                All of these calls go through our servers; the providers' API keys are never on your device. The data is processed to provide the feature, subject to each provider's privacy policy and API data terms.
                                            </p>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Voice providers: ElevenLabs, OpenAI and Google</h3>
                                            <p className="text-dark-text-secondary leading-relaxed mb-3">
                                                When you talk to Mate by voice, your microphone audio streams to a voice service that transcribes it, runs the conversation and speaks the reply. Our server picks the service for each session from ElevenLabs (conversational agent), OpenAI (Realtime) or Google (Gemini Live). The service receives your voice, the conversation history and the same business, customer and quote details as text Mate. Nothing streams until you start a voice session.
                                            </p>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Apple and Google speech recognition (dictation)</h3>
                                            <p className="text-dark-text-secondary leading-relaxed mb-3">
                                                The voice-to-text button on the job description screen uses your phone's built-in speech recognition (Apple on iOS, Google on Android). Audio is handled by that platform service under its own terms; only the resulting text reaches QuoteMate.
                                            </p>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Brevo (email delivery)</h3>
                                            <p className="text-dark-text-secondary leading-relaxed mb-3">
                                                All email leaves through Brevo: account and billing emails to you, reminders, and the quotes, invoices, payment links and receipts you send to customers. Brevo receives the recipient address, subject and content, and reports delivery, bounces, opens and clicks back to us. Customer-facing emails show your business name as the sender and route replies to your email address.
                                            </p>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Expo push service (notifications)</h3>
                                            <p className="text-dark-text-secondary leading-relaxed mb-3">
                                                If you allow notifications, Expo's push service relays them to Apple and Google. It receives your push token and the notification text (for example that a quote was accepted or an invoice was paid).
                                            </p>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Sentry (crash reporting)</h3>
                                            <p className="text-dark-text-secondary leading-relaxed mb-3">
                                                When the app crashes, Sentry receives the error, a stack trace, and device, operating system and app version details. Sentry's default personal-data collection is switched off, performance tracing is off and no screen recording is used.
                                            </p>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Stripe, Apple App Store and Google Play (subscriptions)</h3>
                                            <p className="text-dark-text-secondary leading-relaxed mb-3">
                                                On the web, subscriptions are billed by Stripe. You enter card details on Stripe's own checkout; we send Stripe your QuoteMate user ID so the payment can be matched to your account, and Stripe tells us the subscription status. On iOS and Android, subscriptions are billed by Apple or Google through in-app purchase; we receive purchase receipts from them to confirm your plan. We never see your card number.
                                            </p>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Square (optional, take payments)</h3>
                                            <p className="text-dark-text-secondary leading-relaxed mb-3">
                                                If you connect your Square account (Settings → Square), Square asks you to grant QuoteMate permission to read your merchant profile and to create and read payments, including in-person payments. We then:
                                            </p>
                                            <ul className="space-y-2 text-dark-text-secondary">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Store your Square access token, merchant ID and location ID server-side so you do not have to reconnect each time</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Send Square the invoice number, job name and amount when you create a payment link (and, where tap to pay is enabled for your account, when you take an in-person payment). Your customer pays through Square, so their card details go to Square, not to us.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Record the resulting payment against the invoice in your account. QuoteMate's platform fee is deducted from the payment by Square.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-brand-accent mt-1">•</span>
                                                    <span>Revoke the token with Square and delete it when you tap Disconnect</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Xero (optional, accounting)</h3>
                                            <p className="text-dark-text-secondary leading-relaxed mb-3">
                                                If you connect Xero (Settings → Xero), QuoteMate asks for permission to manage quotes and invoices, contacts and payments and to read your organisation settings. When a customer accepts a quote, we send Xero the quote lines and the customer's name, email, phone and job address so it can create or match the contact and create the quote in Xero. Tokens are stored server-side and are revoked with Xero and deleted when you disconnect.
                                            </p>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Reece (optional, plumbing supplies)</h3>
                                            <p className="text-dark-text-secondary leading-relaxed mb-3">
                                                If you link your Reece trade account, we store the customer token Reece issues, server-side only, and use it to search products, fetch your prices and check branch stock. Product searches send only the material name. If you place an order through the app, Reece also receives the order lines and, for delivery, the contact name and delivery address you enter. Disconnecting deletes the stored token.
                                            </p>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Bunnings pricing</h3>
                                            <p className="text-dark-text-secondary leading-relaxed mb-3">
                                                To price materials, our server looks up products on bunnings.com.au using only the product search term. No account is linked and no customer, business or quote data is sent.
                                            </p>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <h3 className="text-xl font-bold text-white mb-4">Google Analytics (web version only)</h3>
                                            <p className="text-dark-text-secondary leading-relaxed mb-3">
                                                The web version at quotemateapp.au/app loads Google Analytics, the same property as the marketing site. See section 8. The iOS and Android apps do not include Google Analytics or any third-party analytics SDK.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Device Permissions */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">6. Device Permissions</h2>
                                    <p className="text-dark-text-secondary leading-relaxed mb-6">
                                        QuoteMate asks for these permissions only when you use the feature that needs them. Every one is optional; the app keeps working without it. QuoteMate does not ask for your location.
                                    </p>

                                    <div className="space-y-4">
                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center  flex-shrink-0">
                                                    <span className="text-2xl">📷</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-white mb-2">Camera and Photo Library</h3>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">Purpose:</strong> Take or pick site photos, plans, supplier price lists and invoices for a job, and capture your logo</p>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">What we do:</strong> Photos and plans you attach are uploaded to your account in Firebase Storage and, when you ask for a materials list, sent to the language-model providers in section 5. We only access the photos you pick.</p>
                                                    <p className="text-dark-text-secondary text-sm"><strong className="text-white">Optional:</strong> You can type a job description instead</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center  flex-shrink-0">
                                                    <span className="text-2xl">🎙️</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-white mb-2">Microphone and Speech Recognition</h3>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">Purpose:</strong> Dictate a job description, and talk to Mate by voice</p>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">What we do:</strong> Dictation uses your phone's speech recognition. Voice chat with Mate streams audio to the voice provider for that session (section 5). The microphone is only live while you are dictating or in a voice session.</p>
                                                    <p className="text-dark-text-secondary text-sm"><strong className="text-white">Optional:</strong> You can type to Mate and type job descriptions instead</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center  flex-shrink-0">
                                                    <span className="text-2xl">👤</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-white mb-2">Contacts</h3>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">Purpose:</strong> Fill in customer details from your phone's address book when you search for a customer</p>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">What we do:</strong> Contacts are read on the device to show matches. Only a contact you add to a quote or your customer list is saved to your account. We do not upload your address book.</p>
                                                    <p className="text-dark-text-secondary text-sm"><strong className="text-white">Optional:</strong> You can type customer details in by hand</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-xl flex items-center justify-center  flex-shrink-0">
                                                    <span className="text-2xl">🔔</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-white mb-2">Notifications</h3>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">Purpose:</strong> Tell you when a customer opens, accepts or declines a quote or pays an invoice, and remind you about expiring quotes, overdue invoices and unfinished drafts</p>
                                                    <p className="text-dark-text-secondary text-sm mb-2"><strong className="text-white">What we do:</strong> Store a push token for your device in your account. Customer and payment events are delivered whenever notifications are on; reminders are also held back during quiet hours in your timezone and capped at one a day.</p>
                                                    <p className="text-dark-text-secondary text-sm"><strong className="text-white">Optional:</strong> Turn notifications off in your device settings at any time</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Data Sharing */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">7. Data Sharing & Disclosure</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            <strong className="text-white">We do not sell, rent or trade your data, and we do not share it with advertisers.</strong>
                                        </p>
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            Your data is disclosed only:
                                        </p>
                                        <ul className="space-y-2 text-dark-text-secondary mb-4">
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">To the service providers in section 5,</strong> to the extent each one needs to do its job</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">To your customers, when you send them something.</strong> A quote, invoice, receipt or payment link you send shows your business details and the document contents. If you email it through the app, it goes via Brevo; if you text or share it, it goes through your phone's messaging or share sheet. A customer who opens a quote link sees the quote on a web page and can accept it there, and we record when they open it and when they accept.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">To integrations you connect</strong> (Google Calendar, Square, Xero, Reece), as described above, and only while they are connected</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Where the law requires it,</strong> for example a court order or a lawful request from a regulator</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">If QuoteMate changes hands.</strong> If the business is sold or merged, your data would pass to the new owner under this policy, and we would tell you first.</span>
                                            </li>
                                        </ul>
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            Hansen Dev staff can see your data when you ask for support, when reviewing crashes, and when reviewing Mate transcripts and usage events to improve quoting accuracy.
                                        </p>
                                    </div>
                                </section>

                                {/* Analytics, Crash Reporting & Cookies */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">8. Analytics, Crash Reporting & Cookies</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <ul className="space-y-3 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Usage events (all platforms):</strong> the app records which features you use as events in your own account record in Firestore. We use them to see where people get stuck. They are not sent to an analytics company.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Google Analytics (web version and marketing site only):</strong> sets cookies to measure visits, sign-ups and which page brought you here. Block or clear it with your browser's cookie controls.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Crash reporting:</strong> Sentry, as described in section 5.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Email tracking:</strong> emails sent through Brevo record delivery, opens and clicks so we can see what arrives and stop sending to addresses that bounce.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Mate transcript review:</strong> every Mate conversation is saved under your account and we review transcripts to find where quotes go wrong. This is on by default.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span><strong className="text-white">Cookies:</strong> the iOS and Android apps use no cookies. The web version uses browser storage to keep you signed in and the Google Analytics cookies above. No advertising cookies or trackers are used in the app.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Data Security */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">9. Data Security</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            What we do to protect your data:
                                        </p>
                                        <ul className="space-y-3 text-dark-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <Lock className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
                                                <span><strong className="text-white">Encryption:</strong> HTTPS/TLS for every connection; Google encrypts stored data at rest</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Lock className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
                                                <span><strong className="text-white">Per-account access rules:</strong> Firestore and Storage rules restrict your records to your own signed-in account</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Lock className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
                                                <span><strong className="text-white">Secrets stay on the server:</strong> API keys for the language-model, voice, email and payment services, and the tokens for your integrations, live only in our Cloud Functions and Firestore, never in the app on your device</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Lock className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
                                                <span><strong className="text-white">Verified webhooks and rate limits:</strong> payment notifications from Stripe and Square are signature-checked before we act on them, and our endpoints are rate limited</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Lock className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
                                                <span><strong className="text-white">Device security:</strong> the local copy on your phone is protected by your device's own lock (PIN, password, biometrics)</span>
                                            </li>
                                        </ul>
                                        <p className="text-dark-text-secondary text-sm mt-4">
                                            No system is perfectly secure. If we become aware of a data breach that is likely to cause you serious harm, we will notify you and the OAIC as the Privacy Act requires.
                                        </p>
                                    </div>
                                </section>

                                {/* Data Retention & Deletion */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">10. Data Retention & Deletion</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-bold text-white mb-2">How long we keep it</h4>
                                                <p className="text-dark-text-secondary text-sm">We keep your data for as long as your account exists so your quotes, invoices and customer history stay available to you. Payment and subscription records are kept as long as tax and accounting law requires.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Deleting individual items</h4>
                                                <p className="text-dark-text-secondary text-sm">You can delete quotes, invoices, customers and photos from inside the app at any time.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Disconnecting integrations</h4>
                                                <p className="text-dark-text-secondary text-sm">Disconnecting Google Calendar, Square or Xero revokes the token with that service and deletes it from our servers. Disconnecting Reece deletes the stored token.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Deleting your account</h4>
                                                <p className="text-dark-text-secondary text-sm">Go to Settings → Account → Delete Account. This removes your sign-in straight away and clears the app's data on that device. To have the records held under your account on our servers (quotes, customers, photos, usage events, Mate transcripts, integration tokens) removed as well, contact us using the details in section 14 and we will delete them. We keep only what the law requires us to keep, such as payment records and our log of emails sent.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Your Rights */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">11. Your Rights</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            Under the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles you can:
                                        </p>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Access your data</h4>
                                                <p className="text-dark-text-secondary text-sm">Everything you have entered is visible in the app, and every quote and invoice can be exported as a PDF. Ask us for a copy of anything else we hold about you.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Correct it</h4>
                                                <p className="text-dark-text-secondary text-sm">Edit your business details, customers and documents in the app, or ask us to correct anything you cannot change yourself.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Delete it</h4>
                                                <p className="text-dark-text-secondary text-sm">Delete items in the app, delete your account, or ask us to erase your records, as set out in section 10.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Opt out of messages</h4>
                                                <p className="text-dark-text-secondary text-sm">Marketing and re-engagement emails carry an unsubscribe link. Push notifications can be switched off in your device settings. Account, billing and security emails still go out because the service needs them.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Manage permissions</h4>
                                                <p className="text-dark-text-secondary text-sm">Revoke camera, photo, microphone, contacts or notification access at any time in your device settings. The app keeps working without them.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Complain</h4>
                                                <p className="text-dark-text-secondary text-sm">Contact us first and we will respond within 30 days. If you are not satisfied, you can complain to the Office of the Australian Information Commissioner at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">www.oaic.gov.au</a>.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Children's Privacy */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">12. Children's Privacy</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            QuoteMate is a business tool for tradies and is not intended for anyone under 18. We do not knowingly collect information from children. If you believe a child has created an account, contact us and we will delete it.
                                        </p>
                                    </div>
                                </section>

                                {/* Changes to Policy */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">13. Changes to This Policy</h2>
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            We update this policy when the app changes what it collects or who it shares with. When we do, we will:
                                        </p>
                                        <ul className="space-y-2 text-dark-text-secondary mb-4">
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span>Post the new policy on this page</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span>Update the "Last updated" date at the top</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-brand-accent mt-1">•</span>
                                                <span>Email account holders about significant changes, such as a new service that receives your data</span>
                                            </li>
                                        </ul>
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            Continuing to use QuoteMate after a change means you accept the updated policy.
                                        </p>
                                    </div>
                                </section>

                                {/* Contact */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">14. Contact Us</h2>
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
