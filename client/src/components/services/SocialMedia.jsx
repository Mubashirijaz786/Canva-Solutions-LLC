import React from 'react';
import { 
    Share2, 
    MessageCircle, 
    BarChart, 
    Users, 
    TrendingUp, 
    CheckCircle2, 
    Zap,
    Heart
} from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. Import Link

import ServiceLayout from './ServiceLayout';
import PrimaryButton from '../common/PrimaryButton';

// ✅ IMPORT LOCAL IMAGE
import socialHero from '../../assets/images/Social.webp';

const SocialMedia = () => {
    
    // External Link
    const calendlyLink = "https://calendly.com/canvasolutions-info/";

    // 1. Social Services We Offer
    const offerings = [
        {
            title: "Strategy & Audit",
            desc: "We analyze your current presence and competitors to build a custom roadmap that aligns with your business goals.",
            icon: <TrendingUp size={32} />
        },
        {
            title: "Content Creation",
            desc: "Stop the scroll with high-quality visuals, reels, and captions designed to capture attention and spark conversation.",
            icon: <Share2 size={32} />
        },
        {
            title: "Community Management",
            desc: "We actively engage with your followers, responding to comments and DMs to build a loyal community around your brand.",
            icon: <Users size={32} />
        },
        {
            title: "Paid Advertising",
            desc: "Precision-targeted Facebook, Instagram, and LinkedIn ad campaigns that deliver high ROI and lower customer acquisition costs.",
            icon: <Zap size={32} />
        },
        {
            title: "Influencer Marketing",
            desc: "We connect you with authentic voices in your niche to amplify your message and reach new, trusted audiences.",
            icon: <Heart size={32} />
        },
        {
            title: "Analytics & Reporting",
            desc: "No vanity metrics. We provide detailed monthly reports on engagement rates, reach, and conversion to prove ROI.",
            icon: <BarChart size={32} />
        }
    ];

    // 2. Platforms We Master
    const platforms = [
        { name: "Instagram", icon: "📸" },
        { name: "LinkedIn", icon: "💼" },
        { name: "TikTok", icon: "🎵" },
        { name: "Facebook", icon: "👍" },
        { name: "Twitter / X", icon: "🐦" },
        { name: "YouTube", icon: "▶️" }
    ];

    return (
        <ServiceLayout>
            
            {/* --- 1. CUSTOM HERO SECTION --- */}
            <section className="relative pt-24 pb-32 px-6 lg:px-16 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-pink-600/5 blur-[150px] pointer-events-none"></div>
                
                <div className="container mx-auto max-w-[1400px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-bold uppercase tracking-wider mb-8">
                            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                            Social Media Growth
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-bold font-['Manrope'] mb-6 leading-[1.1] text-white">
                            Stop Posting. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-600">Start Growing.</span>
                        </h1>
                        
                        <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-xl">
                            We turn your social media channels into powerful sales engines. From viral reels to strategic ad campaigns, we help you dominate the feed.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            {/* LINK 1: Calendly */}
                            <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                                <PrimaryButton className="!px-8 !py-4 text-lg">
                                    Boost My Brand
                                </PrimaryButton>
                            </a>

                            {/* LINK 2: Portfolio */}
                            <Link to="/portfolio">
                                <button className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all">
                                    See Results
                                </button>
                            </Link>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
                            <div>
                                <h4 className="text-3xl font-bold text-white">5M+</h4>
                                <p className="text-gray-500 text-sm">Reach Generated</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">3x</h4>
                                <p className="text-gray-500 text-sm">Avg. Engagement</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="relative group">
                        {/* Glow Behind Image */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-pink-600/30 to-rose-600/30 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000"></div>
                        
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0f172a]">
                            
                            {/* ✅ USING LOCAL IMAGE */}
                            <img 
                                src={socialHero} 
                                alt="Social Media Dashboard" 
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            />
                            
                            {/* Floating Badge */}
                            <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-xl">
                                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-black">
                                    <MessageCircle size={24} fill="black" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-bold uppercase">Engagement</p>
                                    <p className="text-white text-xl font-bold">+280%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 2. PLATFORMS WE MASTER --- */}
            <section className="py-16 bg-[#0f172a] border-y border-white/5">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
                    <p className="text-center text-gray-400 font-medium mb-8">DOMINATING EVERY MAJOR PLATFORM</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {platforms.map((plat, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default group">
                                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{plat.icon}</span>
                                <h3 className="text-sm font-bold text-white text-center">{plat.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 3. WHAT WE OFFER (Grid) --- */}
            <section className="py-32 px-6 lg:px-16">
                <div className="container mx-auto max-w-[1400px]">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Full-Service Social Management</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We act as your in-house social team, handling everything from creative concepting to community management.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerings.map((item, idx) => (
                            <div key={idx} className="group p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 hover:border-pink-500/30 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-14 h-14 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. OUR PROCESS --- */}
            <section className="py-24 bg-gradient-to-b from-[#020617] to-[#0f172a] relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1200px] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl font-bold text-white mb-8">The "Viral" Formula</h2>
                            <div className="space-y-6">
                                {[
                                    { step: "Audit & Strategy", desc: "We identify where your audience lives and what content they crave." },
                                    { step: "Content Calendar", desc: "We plan a month ahead, ensuring consistent, high-quality posting." },
                                    { step: "Engagement & Growth", desc: "We interact daily to boost algorithm favorability and build loyalty." },
                                    { step: "Optimize & Scale", desc: "We double down on what works based on real-time data." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-full bg-pink-500 text-black font-bold flex items-center justify-center shrink-0">
                                                {i + 1}
                                            </div>
                                            {i !== 3 && <div className="w-0.5 h-full bg-white/10 my-2"></div>}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{item.step}</h4>
                                            <p className="text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2">
                            <div className="absolute inset-0 bg-pink-500/20 blur-[80px]"></div>
                            <div className="relative p-8 rounded-3xl bg-[#020617] border border-pink-500/30 shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-6">Why Consistency Matters</h3>
                                <ul className="space-y-5">
                                    {[
                                        "Algorithms favor frequent posting",
                                        "Keeps your brand top-of-mind",
                                        "Builds trust and authority",
                                        "Creates more opportunities for viral hits",
                                        "Directly impacts website traffic"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white font-medium">
                                            <CheckCircle2 className="text-pink-500 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 pt-8 border-t border-white/10">
                                    {/* Link 3: Calendly */}
                                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                                        <PrimaryButton className="w-full justify-center !py-4 text-lg">
                                            Get Your Content Calendar
                                        </PrimaryButton>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- 5. FAQ SECTION (UPDATED) --- */}
            <section className="py-24 px-6 lg:px-16">
                <div className="container mx-auto max-w-[1000px]">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { 
                                q: "What is social media management, and why do I need it?", 
                                a: "Social media management deals with the production, scheduling, analysis, and engagement of contents on platforms such as Instagram, Facebook, LinkedIn, and Twitter. It helps in building an online presence, connecting with your audience, and adding to the growth of your brand. Professional social media management ensures consistency, quality, and strategy, saving you time while maximizing results." 
                            },
                            { 
                                q: "What channels will my business utilize?", 
                                a: "The good ones differ depending on your target audience and industry. If your brand is more pictorial, like clothing or beauty, you’ll want to use Instagram. LinkedIn fits more B2B companies. TikTok is directed towards younger demographics. The role of a social media manager is to research your audience and goals to suggest the most fitting ones." 
                            },
                            { 
                                q: "How often will you post content?", 
                                a: "Consistency trumps frequency. Most platforms start at 3-5 postings per week, but depends on your goals and audience behavior. A social media manager will also create a posting schedule that supports the algorithms and will keep the audience interested." 
                            },
                            { 
                                q: "How do you measure the success of social media campaigns?", 
                                a: "There are performance metrics used, such as engagement: likes, comments, and shares, reach, growth of followers, and website traffic; and business-related conversion, lead generation, and return on investment. Regular reporting and analytics help track how things are moving, refine strategies, of course." 
                            }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                                <summary className="flex justify-between items-center p-6 cursor-pointer text-lg font-bold text-white hover:text-pink-400 transition-colors">
                                    {faq.q}
                                    <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

        </ServiceLayout>
    );
};

export default SocialMedia;