import React from 'react';
import { Sparkles, Rocket, Box, Flame } from 'lucide-react';

// --- IMPORT IMAGE ---
import whyChooseUsImg from '../../assets/images/whychooseus.webp';

const WhyChooseUs = () => {
    
    const features = [
        {
            title: "AI-Enhanced Creativity",
            description: "We don't just follow trends, we anticipate them using data-backed insights.",
            icon: <Sparkles size={32} strokeWidth={1.5} /> 
        },
        {
            title: "All-in-One Agency",
            description: "Strategy, design, development, and marketing under one seamless roof.",
            icon: <Rocket size={32} strokeWidth={1.5} />
        },
        {
            title: "Proven Expertise",
            description: "Experience delivering results across startups, enterprises, and global brands.",
            icon: <Box size={32} strokeWidth={1.5} />
        },
        {
            title: "Growth-Driven",
            description: "Our success is measured strictly by your ROI and business growth.",
            icon: <Flame size={32} strokeWidth={1.5} />
        }
    ];

    return (
        <section className="relative py-2 lg:py-8 bg-[#020617] overflow-hidden">
            
            <div className="container mx-auto px-6 lg:px-16 max-w-[1600px] relative z-10"> 
                
                {/* --- HEADER --- */}
                <div className="text-center mb-24">
                    <div className="inline-block border border-white/10 rounded-full px-5 py-2 text-sm font-medium text-gray-400 mb-6 bg-white/5 backdrop-blur-sm">
                        Why Choose Us
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-semibold text-white font-['Manrope'] tracking-tight leading-tight">
                        Why Businesses Trust <br /> <span className="text-blue-400">Canva Solutions</span>
                    </h2>
                </div>

                {/* --- CONTENT GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                    
                    {/* LEFT COLUMN: IMAGE */}
                    <div className="hidden lg:block lg:col-span-5 relative group min-h-[700px] lg:h-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                        <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10"></div>
                        
                        {/* UPDATED IMAGE SOURCE */}
                        <img 
                            src={whyChooseUsImg} 
                            alt="Team working" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* RIGHT COLUMN: FEATURE GRID (BIG CARDS) */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} 
                                className="
                                    relative 
                                    p-10 lg:p-12 
                                    rounded-[1.5rem] 
                                    bg-white/5 
                                    border border-white/10 
                                    transition-all duration-500 
                                    group 
                                    overflow-hidden
                                    flex flex-col justify-between
                                    min-h-[340px] 
                                    
                                    hover:bg-white/10 
                                    hover:border-blue-500/40 
                                    hover:-translate-y-2
                                    hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)]
                                "
                            >
                                {/* Internal Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10 flex flex-col items-start h-full">
                                    
                                    {/* Icon Wrapper */}
                                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-auto group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                    
                                    <div className="mt-8">
                                        {/* Title */}
                                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                                            {feature.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-gray-400 text-lg leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;