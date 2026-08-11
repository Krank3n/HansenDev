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
    Mic,
    Trash2,
    Youtube
} from 'lucide-react';

const TalkMyShizPrivacy: React.FC = () => {
    return (
        <>
            <Head>
                <title>TalkMyShiz Privacy Policy | What Leaves Your Phone, and When</title>
                <meta name="description" content="TalkMyShiz Privacy Policy: your video never leaves your phone. Only the audio track is uploaded for transcription, and it is deleted the moment the transcript comes back. No account, no tracking." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://hansendev.com.au/projects/talkmyshiz-privacy" />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://hansendev.com.au/projects/talkmyshiz-privacy" />
                <meta property="og:title" content="TalkMyShiz Privacy Policy - What Leaves Your Phone, and When" />
                <meta property="og:description" content="Your video stays on your device. Only the audio is uploaded to be transcribed, then deleted immediately. No account, no analytics, no ads." />
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
                                    <p className="text-dark-text-secondary mt-2">TalkMyShiz · Last updated: 12 August 2026</p>
                                </div>
                            </div>

                            {/* Trust Banner */}
                            <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8 mb-12">
                                <h2 className="text-2xl font-bold text-white mb-4">The short version</h2>
                                <p className="text-lg text-dark-text-secondary leading-relaxed">
                                    <strong className="text-white">Your video never leaves your phone.</strong> To write captions and find the bits worth cutting, TalkMyShiz needs a transcript, so it uploads the <em>audio track only</em> — never the video — has it transcribed, and deletes it the moment the transcript comes back. There is no sign-up, no email address, no profile, and nothing that tracks you.
                                </p>
                            </div>

                            {/* Quick Summary */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12">
                                <h2 className="text-2xl font-bold text-white mb-6">At a glance</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Eye className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Video stays local</h3>
                                            <p className="text-sm text-dark-text-secondary">Recording, editing and export all happen on your device. We never receive your footage.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Trash2 className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Audio deleted immediately</h3>
                                            <p className="text-sm text-dark-text-secondary">The uploaded audio is erased as soon as it has been transcribed. We do not keep a copy.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Lock className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">No account</h3>
                                            <p className="text-sm text-dark-text-secondary">No name, email or password. The app holds an anonymous ID used only for fair-use limits.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Shield className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">No analytics or ads</h3>
                                            <p className="text-sm text-dark-text-secondary">The app contains no analytics SDK, no advertising SDK and no third-party trackers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-12">
                                {/* 1 */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">1. What we collect</h2>
                                    <div className="space-y-6">
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            We do not ask you for personal information, and we have no way to identify you. What the app handles falls into three groups:
                                        </p>

                                        <div className="bg-white/5 rounded-xl p-6">
                                            <h3 className="text-xl font-bold text-white mb-3">Stays on your device, always</h3>
                                            <ul className="space-y-2 text-dark-text-secondary">
                                                <li>• Your recorded video, every take and retake, and the finished export.</li>
                                                <li>• Your scripts, your business document and your app settings.</li>
                                                <li>• Any API keys you choose to enter, held in the device keychain (iOS) or keystore (Android).</li>
                                                <li>• Your YouTube sign-in tokens, if you connect YouTube.</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/5 rounded-xl p-6">
                                            <h3 className="text-xl font-bold text-white mb-3">Sent to be processed, then deleted</h3>
                                            <ul className="space-y-2 text-dark-text-secondary">
                                                <li>• <strong className="text-white">The audio track</strong> extracted from your recording, uploaded so it can be transcribed. The video is never uploaded.</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/5 rounded-xl p-6">
                                            <h3 className="text-xl font-bold text-white mb-3">Sent when you ask for AI help</h3>
                                            <ul className="space-y-2 text-dark-text-secondary">
                                                <li>• The topic you type and your business document, when you ask the AI writer for a script.</li>
                                                <li>• Your transcript, when you generate titles, descriptions, tags or captions.</li>
                                            </ul>
                                            <p className="text-dark-text-secondary text-sm mt-4">
                                                Finding filler words, stumbles and long pauses is done entirely on your phone by ordinary code, not by an AI service. That step sends nothing anywhere.
                                            </p>
                                        </div>

                                        <div className="bg-white/5 rounded-xl p-6">
                                            <h3 className="text-xl font-bold text-white mb-3">What we store about you</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                One record, holding a randomly generated anonymous ID, the date, and a count of how many requests that ID has made today. It exists so one person cannot exhaust the service for everyone. It contains no name, email, device identifier, location or content.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* 2 */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">2. What happens to your audio</h2>
                                    <div className="bg-white/5 rounded-xl p-6 space-y-4">
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            When you ask TalkMyShiz to clean up a take, the app separates the speech track from the video and uploads only that audio to our server, hosted on Google Cloud in the United States. Our server passes it to Deepgram, receives the transcript with word-level timings, and <strong className="text-white">deletes the audio in the same operation</strong> — success or failure.
                                        </p>
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            As a safety net, the storage bucket also carries an automatic rule that deletes anything older than one day, so audio cannot survive even if a request is interrupted midway. Nothing in that bucket is intended to outlive a single request, and we do not build a library of your recordings.
                                        </p>
                                        <div className="flex items-start gap-3 pt-2">
                                            <Mic className="h-5 w-5 text-brand-accent flex-shrink-0 mt-1" />
                                            <p className="text-dark-text-secondary text-sm">
                                                If you would rather nothing left your device at all, you can skip the clean-up and caption steps. Recording and the teleprompter work with no network connection.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* 3 */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">3. Third-party services</h2>
                                    <div className="space-y-4">
                                        <div className="bg-white/5 rounded-xl p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">Google Firebase</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Provides the anonymous sign-in, the temporary audio storage and the servers that hold our API keys. Google processes this data as our infrastructure provider.
                                            </p>
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">Deepgram</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Receives your audio and returns the transcript with word timings. It is sent from our server, not from your phone.
                                            </p>
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">Anthropic (Claude)</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Receives the text you ask it to work with — your topic, your business document, or your transcript — and returns the script or publishing copy. It receives no audio and no video.
                                            </p>
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">YouTube (optional)</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Only if you connect it. Your finished video is uploaded from your device straight to YouTube under your own Google account. It does not pass through our servers, and your sign-in tokens never leave your device. You can disconnect at any time in Settings, or revoke access at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">myaccount.google.com/permissions</a>.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* 4 */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">4. Device permissions</h2>
                                    <div className="space-y-4">
                                        <div className="bg-white/5 rounded-xl p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">Camera &amp; microphone</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Used to record you reading your script. Recording only ever happens while you are on the record screen and have started a take.
                                            </p>
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">Photo library</h3>
                                            <p className="text-dark-text-secondary leading-relaxed">
                                                Used to save your finished video, if you have that option switched on. The app writes your export; it does not read or scan your existing photos.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* 5 */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">5. Data sharing &amp; disclosure</h2>
                                    <div className="bg-white/5 rounded-xl p-6">
                                        <p className="text-dark-text-secondary leading-relaxed mb-4">
                                            We do not sell your data, and we do not share it with anyone beyond the processors listed in section 3, each of which receives only what it needs to do its job. There is no advertising network involved and no data broker.
                                        </p>
                                        <div className="flex items-start gap-3">
                                            <Share2 className="h-5 w-5 text-brand-accent flex-shrink-0 mt-1" />
                                            <p className="text-dark-text-secondary text-sm">
                                                We would disclose data if compelled by Australian law. In practice there is very little to disclose: we hold no recordings, and the only record tied to you is an anonymous ID and a request count.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* 6 */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">6. Analytics &amp; tracking</h2>
                                    <div className="bg-white/5 rounded-xl p-6">
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            None. TalkMyShiz ships no analytics SDK, no crash-reporting SDK, no advertising SDK and no third-party trackers. We cannot see which features you use, and we do not build a profile of you.
                                        </p>
                                    </div>
                                </section>

                                {/* 7 */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">7. Security</h2>
                                    <div className="bg-white/5 rounded-xl p-6">
                                        <ul className="space-y-3 text-dark-text-secondary">
                                            <li>• All network traffic uses HTTPS.</li>
                                            <li>• API keys are held in the device keychain or keystore, never in ordinary app storage.</li>
                                            <li>• Our own API keys live in Google Secret Manager and are never sent to the app.</li>
                                            <li>• Storage rules permit a device to write only to its own upload path, and to read nothing back.</li>
                                            <li>• The usage records are not readable or writable by any app client.</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* 8 */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">8. Your rights &amp; control</h2>
                                    <div className="bg-white/5 rounded-xl p-6">
                                        <ul className="space-y-3 text-dark-text-secondary">
                                            <li>• <strong className="text-white">Delete everything:</strong> uninstalling the app removes your recordings, scripts, settings and keys, because they are only ever on your device.</li>
                                            <li>• <strong className="text-white">Opt out of uploads:</strong> skip the clean-up and caption steps and nothing leaves your phone.</li>
                                            <li>• <strong className="text-white">Disconnect YouTube:</strong> Settings → Publishing → Disconnect.</li>
                                            <li>• <strong className="text-white">Ask us:</strong> under the Australian Privacy Principles you may ask what we hold about you. Contact us below.</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* 9 */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">9. Children's privacy</h2>
                                    <div className="bg-white/5 rounded-xl p-6">
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            TalkMyShiz is a business tool and is not directed at children under 13. We do not knowingly collect information from children. As the app requires no account and collects no personal details, it holds nothing that would identify a child in any case.
                                        </p>
                                    </div>
                                </section>

                                {/* 10 */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">10. Changes to this policy</h2>
                                    <div className="bg-white/5 rounded-xl p-6">
                                        <p className="text-dark-text-secondary leading-relaxed">
                                            If we change how the app handles data, we will update this page and the date at the top of it. If a change is significant — anything that would mean more of your content leaving your device — we will say so in the app before it takes effect.
                                        </p>
                                    </div>
                                </section>

                                {/* Contact */}
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-6">11. Contact us</h2>
                                    <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8">
                                        <p className="text-dark-text-secondary leading-relaxed mb-6">
                                            Questions about this policy, or about how TalkMyShiz handles your recordings:
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <Mail className="h-5 w-5 text-brand-accent" />
                                                <a href="mailto:tom@hansendev.com.au" className="text-brand-accent hover:underline">tom@hansendev.com.au</a>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <AlertCircle className="h-5 w-5 text-brand-accent" />
                                                <a href="/#contact" className="text-brand-accent hover:underline">Contact form on HansenDev</a>
                                            </div>
                                        </div>
                                        <p className="text-dark-text-secondary text-sm mt-6">
                                            TalkMyShiz is made by HansenDev PTY LTD (ABN 22 661 796 201), Cairns, Queensland, Australia.
                                        </p>
                                    </div>
                                </section>
                            </div>

                            {/* Bottom CTA */}
                            <div className="mt-16 text-center">
                                <Link
                                    href="/our-work"
                                    className="inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-0.5"
                                >
                                    <Youtube className="h-5 w-5" />
                                    <span>Back to our work</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TalkMyShizPrivacy;
