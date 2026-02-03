import React from 'react';
import { Sparkles } from 'lucide-react';

const ScrollingTicker = () => {
    // Content for the scrolling text
    const items = [
        "Web & App Development",
        "Creative UX/UI Design",
        "Data-Driven Marketing",
        "Automation & Growth",
        "Brand Strategy",
        "AI Integration"
    ];

    // Quadruple content for smoother loop
    const marqueeContent = [...items, ...items, ...items, ...items];

    return (
        <section className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden flex flex-col justify-center items-center min-h-[400px]">
            
            {/* --- STRIP 1: BLUE GRADIENT (Slides Right to Left) --- */}
            {/* MOBILE FIXES:
                1. -rotate-6 (Steeper angle on mobile to clearly show 'X') -> lg:-rotate-3 (Flatter on desktop)
                2. w-[200%] (Wider bars on mobile to prevent edges showing) -> lg:w-[120%]
                3. Centered perfectly with top-1/2 left-1/2 transform
            */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] lg:w-[120%] -rotate-6 lg:-rotate-3 bg-gradient-to-r from-blue-600 to-cyan-500 py-4 lg:py-5 shadow-2xl shadow-blue-900/30 z-10 origin-center">
                <div className="flex w-max animate-scroll-left items-center">
                    {marqueeContent.map((item, index) => (
                        <div key={`blue-${index}`} className="flex items-center mx-4 lg:mx-8 gap-3 lg:gap-6">
                            <span className="text-lg lg:text-3xl font-bold text-white uppercase tracking-widest font-['Manrope'] whitespace-nowrap drop-shadow-md">
                                {item}
                            </span>
                            <Sparkles className="w-4 h-4 lg:w-6 lg:h-6 text-blue-200 fill-white" />
                        </div>
                    ))}
                </div>
            </div>

            {/* --- STRIP 2: GREY (Slides Left to Right) --- */}
            {/* MOBILE FIXES:
                1. rotate-6 (Steeper angle) -> lg:rotate-3
                2. Matches Blue bar positioning exactly
            */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] lg:w-[120%] rotate-6 lg:rotate-3 bg-white/5 border-y border-white/5 backdrop-blur-sm py-4 lg:py-5 z-0 hover:bg-white/10 transition-colors duration-300 origin-center">
                <div className="flex w-max animate-scroll-right items-center">
                    {marqueeContent.map((item, index) => (
                        <div key={`grey-${index}`} className="flex items-center mx-4 lg:mx-8 gap-3 lg:gap-6 opacity-60">
                            <span className="text-lg lg:text-3xl font-bold text-gray-300 uppercase tracking-widest font-['Manrope'] whitespace-nowrap">
                                {item}
                            </span>
                            <Sparkles className="w-4 h-4 lg:w-6 lg:h-6 text-gray-500 fill-gray-500" />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default ScrollingTicker;