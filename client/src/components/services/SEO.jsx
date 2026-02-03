import React from 'react';
import { 
    Search, 
    BarChart2, 
    Globe, 
    Target, 
    Link as LinkIcon, 
    MapPin, 
    TrendingUp,
    FileText
} from 'lucide-react';
import { Link } from 'react-router-dom'; // Ensure Link is imported

import ServiceLayout from '../../components/services/ServiceLayout';
import PrimaryButton from '../../components/common/PrimaryButton';

// ✅ IMPORT YOUR LOCAL IMAGE HERE
import seoHero from '../../assets/images/SEO.webp'; 

const SEO = () => {
    
    // External Link
    const calendlyLink = "https://calendly.com/canvasolutions-info/";

    // 1. Key Features Data
    const features = [
        {
            title: "Comprehensive SEO Audits",
            desc: "We dive deep into your site's architecture to find technical errors, broken links, and speed issues that are holding you back.",
            icon: <Search size={32} />
        },
        {
            title: "Keyword Dominance",
            desc: "We don't just guess. We identify high-intent keywords that your customers are actually searching for and target them aggressively.",
            icon: <Target size={32} />
        },
        {
            title: "On-Page Optimization",
            desc: " optimizing meta tags, headers, content structure, and internal linking to make your pages irresistible to Google.",
            icon: <FileText size={32} />
        },
        {
            title: "Authority Link Building",
            desc: "We secure high-quality backlinks from reputable industry websites to boost your domain authority and trustworthiness.",
            icon: <LinkIcon size={32} />
        },
        {
            title: "Local SEO & GMB",
            desc: "Dominate your local market. We optimize your Google My Business profile to ensure you show up in the 'Map Pack'.",
            icon: <MapPin size={32} />
        },
        {
            title: "Technical SEO",
            desc: "Fixing Core Web Vitals, schema markup, mobile usability, and crawlability issues to ensure search engines love your code.",
            icon: <Globe size={32} />
        }
    ];

    // 2. SEO Tools We Use
    const tools = [
        { name: "Google Analytics 4", logo: "📊" },
        { name: "Ahrefs", logo: "🟧" },
        { name: "SEMrush", logo: "🦁" },
        { name: "Screaming Frog", logo: "🐸" },
        { name: "Google Search Console", logo: "🔍" },
        { name: "Moz Pro", logo: "Ⓜ️" }
    ];

    return (
        <ServiceLayout>
            
            {/* --- 1. CUSTOM HERO SECTION --- */}
            <section className="relative pt-24 pb-32 px-6 lg:px-16 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-yellow-600/5 blur-[150px] pointer-events-none"></div>
                
                <div className="container mx-auto max-w-[1400px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-bold uppercase tracking-wider mb-8">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            Search Engine Optimization
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-bold font-['Manrope'] mb-6 leading-[1.1] text-white">
                            Dominate Search. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Drive Traffic.</span>
                        </h1>
                        
                        <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-xl">
                            Stop engaging in "guessing games" with Google. We use data-driven strategies to rank your brand #1 for keywords that actually generate revenue.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            {/* LINK 1: Calendly */}
                            <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                                <PrimaryButton className="!px-8 !py-4 text-lg">
                                    Get Free Audit
                                </PrimaryButton>
                            </a>

                            {/* LINK 2: Portfolio (UPDATED) */}
                            <Link to="/portfolio">
                                <button className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all">
                                    View Portfolio
                                </button>
                            </Link>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
                            <div>
                                <h4 className="text-3xl font-bold text-white">#1</h4>
                                <p className="text-gray-500 text-sm">Rankings Achieved</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">300%</h4>
                                <p className="text-gray-500 text-sm">Avg. Traffic Increase</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="relative group">
                        {/* Glow Behind Image */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-yellow-600/30 to-orange-600/30 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000"></div>
                        
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0f172a]">
                            
                            {/* ✅ USING YOUR LOCAL IMAGE VARIABLE HERE */}
                            <img 
                                src={seoHero} 
                                alt="SEO Analytics and Strategy" 
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            />
                            
                            {/* Floating Badge */}
                            <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-xl">
                                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black">
                                    <TrendingUp size={24} fill="black" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-bold uppercase">Organic Traffic</p>
                                    <p className="text-white text-xl font-bold">Exponential Growth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 2. TOOLS WE USE --- */}
            <section className="py-16 bg-[#0f172a] border-y border-white/5">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
                    <p className="text-center text-gray-400 font-medium mb-8">POWERED BY INDUSTRY-LEADING DATA</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {tools.map((tool, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                                <span className="text-3xl mb-3">{tool.logo}</span>
                                <h3 className="text-sm font-bold text-white text-center">{tool.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 3. OUR SEO STRATEGY (Grid) --- */}
            <section className="py-32 px-6 lg:px-16">
                <div className="container mx-auto max-w-[1400px]">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">The 360° SEO Ecosystem</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            SEO isn't just about keywords. It's about technical health, user experience, and authority. We cover it all.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((item, idx) => (
                            <div key={idx} className="group p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 hover:border-yellow-500/30 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-14 h-14 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. THE ROADMAP TO #1 --- */}
            <section className="py-24 bg-gradient-to-b from-[#020617] to-[#0f172a] relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1200px] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-8">Why Most SEO Campaigns Fail</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <div className="text-red-500 mt-1">✕</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Focusing on Vanity Metrics</h4>
                                        <p className="text-gray-400 text-sm">Ranking for keywords that don't bring sales is useless. We focus on ROI.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <div className="text-red-500 mt-1">✕</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Ignoring Technical Debt</h4>
                                        <p className="text-gray-400 text-sm">Great content won't rank on a slow, broken website. We fix the foundation first.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <div className="text-red-500 mt-1">✕</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Black Hat Tactics</h4>
                                        <p className="text-gray-400 text-sm">Spammy links get you penalized. We only use white-hat, sustainable strategies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-yellow-500/20 blur-[80px]"></div>
                            <div className="relative p-8 rounded-3xl bg-[#020617] border border-yellow-500/30 shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-6">Our 4-Step Methodology</h3>
                                <ul className="space-y-6">
                                    {[
                                        { step: "01. Audit & Discovery", txt: "Deep dive into your current site health and competitor landscape." },
                                        { step: "02. Strategy & Fixes", txt: "Repair technical issues and map out a keyword content plan." },
                                        { step: "03. Content & Optimization", txt: "Create high-value content and optimize existing pages." },
                                        { step: "04. Authority Building", txt: "Digital PR and outreach to build powerful backlinks." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-white">
                                            <div className="shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold text-sm">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h5 className="font-bold">{item.step}</h5>
                                                <p className="text-gray-400 text-sm">{item.txt}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 pt-8 border-t border-white/10">
                                    {/* LINK 3: Calendly */}
                                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                                        <PrimaryButton className="w-full justify-center !py-4 text-lg">
                                            Start Ranking Higher
                                        </PrimaryButton>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 5. FAQ SECTION --- */}
            <section className="py-24 px-6 lg:px-16">
                <div className="container mx-auto max-w-[1000px]">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "What is SEO and why?", a: "SEO stands for Search Engine Optimization. Basically, it’s the act of optimizing a website to rank high in Google search engines. Optimizing your web pages toward keywords appropriate to your website will make it appear more prominent. Additionally, improving technical performance would lead a user to submit organic traffic by enhancing branding. Without optimizing your website, it will most likely be unsuccessful in realizing its maximum potential online." },
                            { q: "How quickly can one see the impact of SEO?", a: "SEO is a long term strategy, but many notice tangible effects of SEO in 3-6 months. That’s based on several factors such as competition, keyword difficulty, and the situation and landscape of your website at the moment of investment. But the returns from SEO build long-term traffic in the long run and pay for themselves over time." },
                            { q: "What's the difference between SEO and paid ads?", a: "SEO helps you optimize your site for search engine ratings and really focuses on organic search rankings that give you traffic without the constant cost. Paid ads, like Google Ads, are a great way to keep your site visible, sometimes seeing immediate results. Essentially, it’s like a balance thing; SEO gives you that long-term benefit, and the paid ads maintain that short-term visibility." },
                            { q: "Can I do my own SEO?", a: "While most of the basic SEO practices-range from quality content building to setting up the right meta tags and testing the mobile-friendliness of the website-can be done in-house, advanced SEO activities, such as technical audits, backlink building, and competition studies, usually require an extra set of skills and tools." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                                <summary className="flex justify-between items-center p-6 cursor-pointer text-lg font-bold text-white hover:text-yellow-400 transition-colors">
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

export default SEO;