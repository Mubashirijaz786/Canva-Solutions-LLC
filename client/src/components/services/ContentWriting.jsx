import React from 'react';
import { 
    PenTool, 
    FileText, 
    Search, 
    MessageSquare, 
    Mail, 
    CheckCircle2, 
    Zap
} from 'lucide-react';
import { Link } from 'react-router-dom'; // Imported Link

import ServiceLayout from '../../components/services/ServiceLayout';
import PrimaryButton from '../../components/common/PrimaryButton';

// ✅ IMPORT LOCAL IMAGE
import contentHero from '../../assets/images/Content-Writing.webp';

const ContentWriting = () => {
    
    // External Link
    const calendlyLink = "https://calendly.com/canvasolutions-info/";

    // 1. Content Services We Offer
    const offerings = [
        {
            title: "SEO Blog Writing",
            desc: "Long-form articles backed by keyword research that rank high on Google and establish your brand as an industry thought leader.",
            icon: <Search size={32} />
        },
        {
            title: "Website Copywriting",
            desc: "Persuasive landing page copy, 'About Us' pages, and service descriptions designed to guide visitors into your sales funnel.",
            icon: <LayoutGridIcon size={32} /> 
        },
        {
            title: "Technical Writing",
            desc: "Clear, concise documentation, white papers, and user manuals that simplify complex technical concepts for your audience.",
            icon: <FileText size={32} />
        },
        {
            title: "Email Marketing Sequences",
            desc: "High-converting drip campaigns and newsletters that nurture leads and turn subscribers into loyal paying customers.",
            icon: <Mail size={32} />
        },
        {
            title: "Social Media Captions",
            desc: "Engaging, on-brand captions for LinkedIn, Instagram, and Twitter that spark conversations and increase engagement.",
            icon: <MessageSquare size={32} />
        },
        {
            title: "Brand Storytelling",
            desc: "We define your unique Brand Voice Guidelines to ensure every piece of content sounds distinctly like *you*.",
            icon: <PenTool size={32} />
        }
    ];

    return (
        <ServiceLayout>
            
            {/* --- 1. CUSTOM HERO SECTION --- */}
            <section className="relative pt-24 pb-32 px-6 lg:px-16 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-600/5 blur-[150px] pointer-events-none"></div>
                
                <div className="container mx-auto max-w-[1400px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold uppercase tracking-wider mb-8">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                            Content Marketing
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-bold font-['Manrope'] mb-6 leading-[1.1] text-white">
                            Words That Rank. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Stories That Sell.</span>
                        </h1>
                        
                        <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-xl">
                            We don't just fill pages with text. We craft strategic, SEO-optimized content that engages your audience and drives measurable conversions.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            {/* LINK 1: Calendly */}
                            <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                                <PrimaryButton className="!px-8 !py-4 text-lg">
                                    Order Content
                                </PrimaryButton>
                            </a>

                            {/* LINK 2: Portfolio */}
                            <Link to="/portfolio">
                                <button className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all">
                                    View Samples
                                </button>
                            </Link>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
                            <div>
                                <h4 className="text-3xl font-bold text-white">5M+</h4>
                                <p className="text-gray-500 text-sm">Words Written</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">10x</h4>
                                <p className="text-gray-500 text-sm">Avg. ROI</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="relative group">
                        {/* Glow Behind Image */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000"></div>
                        
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0f172a]">
                            
                            {/* ✅ USING LOCAL IMAGE */}
                            <img 
                                src={contentHero} 
                                alt="Content Writing Workspace" 
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            />
                            
                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-xl">
                                <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black">
                                    <Zap size={24} fill="black" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-bold uppercase">Readability Score</p>
                                    <p className="text-white text-xl font-bold">Grade A+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 2. THE POWER OF WORDS --- */}
            <section className="py-16 bg-[#0f172a] border-y border-white/5">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <h3 className="text-4xl font-bold text-white mb-2">Authority</h3>
                            <p className="text-gray-400">Establish trust with expert-level, well-researched articles.</p>
                        </div>
                        <div className="p-6 border-y md:border-y-0 md:border-x border-white/10">
                            <h3 className="text-4xl font-bold text-white mb-2">Visibility</h3>
                            <p className="text-gray-400">Rank for high-intent keywords that bring ready-to-buy traffic.</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-4xl font-bold text-white mb-2">Loyalty</h3>
                            <p className="text-gray-400">Turn casual readers into brand advocates with a unique voice.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. WHAT WE WRITE (Grid) --- */}
            <section className="py-32 px-6 lg:px-16">
                <div className="container mx-auto max-w-[1400px]">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Content That Covers Every Stage</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            From awareness to consideration to decision. We create the right content for the right moment in the buyer's journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerings.map((item, idx) => (
                            <div key={idx} className="group p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 hover:border-cyan-500/30 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. OUR WRITING PROCESS --- */}
            <section className="py-24 bg-gradient-to-b from-[#020617] to-[#0f172a] relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1200px] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute inset-0 bg-cyan-500/20 blur-[80px]"></div>
                            <div className="relative p-8 rounded-3xl bg-[#020617] border border-cyan-500/30 shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-6">The "Perfect Post" Checklist</h3>
                                <ul className="space-y-5">
                                    {[
                                        "Keyword Research & Search Intent Analysis",
                                        "Competitor Content Gap Analysis",
                                        "Compelling Headlines (H1) & Hooks",
                                        "Scannable Formatting (H2, H3, Bullet Points)",
                                        "Internal & External Linking Strategy",
                                        "Final Polish (Grammar, Tone, Plagiarism Check)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white font-medium">
                                            <CheckCircle2 className="text-cyan-500 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 pt-8 border-t border-white/10">
                                    {/* Link 3: Calendly */}
                                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                                        <PrimaryButton className="w-full justify-center !py-4 text-lg">
                                            Start Your Content Strategy
                                        </PrimaryButton>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold text-white mb-8">Why "Generic" Content Fails</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="text-red-400 font-bold text-xl">01</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">AI-Generated Fluff</h4>
                                        <p className="text-gray-400 text-sm">Google penalizes unoriginal, robotic content. We write for humans first, algorithms second.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="text-red-400 font-bold text-xl">02</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Keyword Stuffing</h4>
                                        <p className="text-gray-400 text-sm">Jamming keywords into sentences hurts readability. We weave them in naturally.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="text-red-400 font-bold text-xl">03</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Boring Tone</h4>
                                        <p className="text-gray-400 text-sm">If your content sounds like a textbook, people bounce. We inject personality.</p>
                                    </div>
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
                            { 
                                q: "What does make content SEO-friendly?", 
                                a: "This results in SEO-friendly content that is aligned with optimized keywords, structured headings, meta descriptions, and internal links. Carefully balanced integration of keywords with natural readability, we create valuable relevant content that ranks well for search engines but very important to provide a great user experience." 
                            },
                            { 
                                q: "What is content writing, and why should we care?", 
                                a: "Content writing refers to creating original written content for articles, blogs, websites, marketing materials, and other literary works focused on reaching the audience. Why? Good quality content attracts and retains visitors, establishes brand authority, and converts users. Using good quality content improves Search Engine Optimization thus also making the business easier to find online." 
                            },
                            { 
                                q: "How do you align the content with my brand voice?", 
                                a: "Start by setting tone, values, and target audience and getting deep into research on the brand. Professional, casual, or playful, our content will sound like you, but reach your audience." 
                            },
                            { 
                                q: "What types of content can you create? ", 
                                // ✅ FORMATTED AS A LIST
                                a: (
                                    <> 
                                    <p>We specialize in a wide range of content, including:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-4">
                                            <li>Blog posts and articles</li>
                                            <li>Website and landing page copy</li>
                                            <li>Product descriptions</li>
                                            <li>Social media posts</li>
                                            <li>Email newsletters</li>
                                            <li>Case studies and whitepapers</li>
                                        </ul>
                                        <p>We shape every piece to your goals and audience, whatever the need for content is.</p>
                                    </>
                                )
                            }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                                <summary className="flex justify-between items-center p-6 cursor-pointer text-lg font-bold text-white hover:text-cyan-400 transition-colors">
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

// Helper for Layout Grid Icon if missing in main import
const LayoutGridIcon = ({ size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="7" height="7" x="3" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="14" rx="1" />
    <rect width="7" height="7" x="3" y="14" rx="1" />
  </svg>
);

export default ContentWriting;