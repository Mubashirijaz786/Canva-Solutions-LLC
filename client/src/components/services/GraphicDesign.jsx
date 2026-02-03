import React from 'react';
import { 
    PenTool, 
    Layers, 
    Monitor, 
    Image as ImageIcon, 
    Palette, 
    Printer, 
    CheckCircle2, 
    Zap
} from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. Import Link

import ServiceLayout from './ServiceLayout';
import PrimaryButton from '../common/PrimaryButton';

// ✅ IMPORT LOCAL IMAGE
import graphicHero from '../../assets/images/Graphic.webp';

const GraphicDesign = () => {
    
    // External Link
    const calendlyLink = "https://calendly.com/canvasolutions-info/";

    // 1. Design Services We Offer
    const offerings = [
        {
            title: "Logo & Branding",
            desc: "Memorable logos and comprehensive brand style guides (colors, typography, usage) that define your business identity.",
            icon: <Zap size={32} />
        },
        {
            title: "UI/UX Design",
            desc: "Intuitive, user-centric interfaces for websites and mobile apps. We prototype in Figma to ensure the perfect user flow.",
            icon: <Monitor size={32} />
        },
        {
            title: "Social Media Graphics",
            desc: "Scroll-stopping posts, banners, and stories for Instagram, LinkedIn, and Facebook that boost engagement.",
            icon: <ImageIcon size={32} />
        },
        {
            title: "Marketing Collateral",
            desc: "High-quality brochures, flyers, business cards, and pitch decks that leave a lasting impression on your clients.",
            icon: <Printer size={32} />
        },
        {
            title: "Packaging Design",
            desc: "Product packaging that stands out on the shelf and communicates quality before the customer even opens the box.",
            icon: <Layers size={32} />
        },
        {
            title: "Illustrations & Vector Art",
            desc: "Custom flat illustrations, icons, and infographics to simplify complex information and add character to your brand.",
            icon: <PenTool size={32} />
        }
    ];

    // 2. Tools We Master
    const tools = [
        { name: "Adobe Illustrator", icon: "🎨" },
        { name: "Adobe Photoshop", icon: "📷" },
        { name: "Figma", icon: "⚛️" },
        { name: "Adobe InDesign", icon: "📖" },
        { name: "After Effects", icon: "🎬" },
        { name: "Canva Pro", icon: "✨" }
    ];

    return (
        <ServiceLayout>
            
            {/* --- 1. CUSTOM HERO SECTION --- */}
            <section className="relative pt-24 pb-32 px-6 lg:px-16 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-orange-600/5 blur-[150px] pointer-events-none"></div>
                
                <div className="container mx-auto max-w-[1400px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold uppercase tracking-wider mb-8">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            Visual Identity Experts
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-bold font-['Manrope'] mb-6 leading-[1.1] text-white">
                            Visuals That Speak. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Designs That Convert.</span>
                        </h1>
                        
                        <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-xl">
                            Good design is good business. We create stunning visuals that capture attention, communicate your message, and elevate your brand above the noise.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            {/* LINK 1: Calendly */}
                            <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                                <PrimaryButton className="!px-8 !py-4 text-lg">
                                    Start Your Design
                                </PrimaryButton>
                            </a>

                            {/* LINK 2: Portfolio */}
                            <Link to="/portfolio">
                                <button className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all">
                                    View Portfolio
                                </button>
                            </Link>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
                            <div>
                                <h4 className="text-3xl font-bold text-white">1k+</h4>
                                <p className="text-gray-500 text-sm">Projects Delivered</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">100%</h4>
                                <p className="text-gray-500 text-sm">Satisfaction Rate</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="relative group">
                        {/* Glow Behind Image */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000"></div>
                        
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0f172a]">
                            
                            {/* ✅ USING LOCAL IMAGE */}
                            <img 
                                src={graphicHero} 
                                alt="Graphic Designer Workspace" 
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            />
                            
                            {/* Floating Badge */}
                            <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-xl">
                                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-black">
                                    <Palette size={24} fill="black" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-bold uppercase">Pixel Perfect</p>
                                    <p className="text-white text-xl font-bold">Creative Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 2. TOOLS WE USE --- */}
            <section className="py-16 bg-[#0f172a] border-y border-white/5">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
                    <p className="text-center text-gray-400 font-medium mb-8">CRAFTED WITH INDUSTRY STANDARD TOOLS</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {tools.map((tool, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default group">
                                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{tool.icon}</span>
                                <h3 className="text-sm font-bold text-white text-center">{tool.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 3. WHAT WE DESIGN (Grid) --- */}
            <section className="py-32 px-6 lg:px-16">
                <div className="container mx-auto max-w-[1400px]">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Design Solutions for Every Need</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Whether you're launching a new brand or refreshing an old one, we have the creative skills to bring your vision to life.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerings.map((item, idx) => (
                            <div key={idx} className="group p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 hover:border-orange-500/30 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. OUR CREATIVE PROCESS --- */}
            <section className="py-24 bg-gradient-to-b from-[#020617] to-[#0f172a] relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1200px] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Left: Process Steps */}
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-8">From Concept to Creation</h2>
                            <div className="space-y-6">
                                {[
                                    { step: "Discovery Phase", desc: "We research your audience, competitors, and brand values to find your unique angle." },
                                    { step: "Moodboarding & Sketches", desc: "We explore rough concepts and visual directions before touching any pixels." },
                                    { step: "Design & Iteration", desc: "We digitally craft the design, refining it based on your feedback until it's perfect." },
                                    { step: "Final Delivery", desc: "You receive all source files (AI, PSD, SVG, PNG) ready for print and web." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-full bg-orange-500 text-black font-bold flex items-center justify-center shrink-0">
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

                        {/* Right: Visual Box */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-orange-500/20 blur-[80px]"></div>
                            <div className="relative p-8 rounded-3xl bg-[#020617] border border-orange-500/30 shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-6">Why Professional Design Matters</h3>
                                <ul className="space-y-5">
                                    {[
                                        "First impressions are 94% design-related",
                                        "Consistent branding increases revenue by 23%",
                                        "Color improves brand recognition by 80%",
                                        "Good design builds immediate trust",
                                        "Stand out in a crowded marketplace"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white font-medium">
                                            <CheckCircle2 className="text-orange-500 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 pt-8 border-t border-white/10">
                                    {/* Link 3: Calendly */}
                                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                                        <PrimaryButton className="w-full justify-center !py-4 text-lg">
                                            Elevate Your Brand
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
                                q: "What is graphic design, and what will it do for my business?", 
                                a: "Graphic design is the art of creating visual content to effectively communicate messages. It includes logos, brochures, social media graphics, and much more. Fantastic graphic design for your brand identity will grab attention, create professionalism, and most importantly, instill trust with your viewers, which leads to engagement." 
                            },
                            { 
                                q: "Which graphic design services do you have? We offer a wide spectrum of services that include:", 
                                a: (
                                    <>
                                        <ul className="list-disc pl-5 space-y-2 mb-4">
                                            <li>Logo and branding</li>
                                            <li>Marketing materials such as flyers, brochures, posters</li>
                                            <li>Graphics for social media</li>
                                            <li>Website and app design</li>
                                            <li>Infographics and presentations</li>
                                        </ul>
                                        <p>Whatever are your needs, our designs will be according to what you want, addressing the business requirements as well as your audience’s preferences.</p>
                                    </>
                                )
                            },
                            { 
                                q: "How long does a typical graphic design project take?", 
                                a: "The time frame varies according to the project’s complexity and scope of work. For instance, a simple logo design would take about three working days to complete, whereas a full branding package or a website design would take weeks. We establish a clear timeline for you once we understand your requirements." 
                            },
                            { 
                                q: "Do you work with my existing branding, or do you create designs from scratch?", 
                                a: "Well, we can do that too! If you already have an existing brand identity, then we’ll be sure our designs fit within it. If you are just starting out, or rebranding, then we will work with you to create a new, unique brand identity that stands out." 
                            }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                                <summary className="flex justify-between items-center p-6 cursor-pointer text-lg font-bold text-white hover:text-orange-400 transition-colors">
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

export default GraphicDesign;