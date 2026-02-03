import React from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from '../common/AnimatedCounter'; 

const Stats = () => {
    const statsData = [
        {
            value: 120,
            suffix: "+",
            description: "Brands trusted us to rewrite their digital story"
        },
        {
            value: 300,
            suffix: "%",
            description: "Average growth boost after our AI-driven campaigns"
        },
        {
            value: 48,
            suffix: " hrs",
            description: "Fastest product launch we pulled off (with zero sleep)"
        },
        {
            value: 97,
            suffix: "%",
            description: "Clients who stayed with us after the first project"
        }
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section ref={ref} className="relative w-full">
            
            {/* Full Width Gradient Background */}
            <div className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 py-16 lg:py-24">
                
                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-black/5 mix-blend-overlay pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
                    
                    {/* GRID SETUP: 
                        1 col (mobile) -> 2 cols (medium/tablet) -> 4 cols (desktop) 
                    */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center lg:text-left">
                        
                        {statsData.map((stat, index) => (
                            <div 
                                key={index} 
                                className={`
                                    flex flex-col justify-center px-8 py-8 lg:py-0
                                    border-white/20
                                    
                                    /* --- MOBILE BORDERS (Vertical Stack) --- */
                                    ${index !== statsData.length - 1 ? 'border-b' : ''}

                                    /* --- MEDIUM BORDERS (2x2 Grid) --- */
                                    /* 1. Reset Mobile Bottom Border */
                                    md:border-b-0 
                                    
                                    /* 2. Add Right Border to LEFT column (Index 0 & 2) */
                                    ${index % 2 === 0 ? 'md:border-r' : 'md:border-r-0'}
                                    
                                    /* 3. Add Bottom Border to TOP row (Index 0 & 1) */
                                    ${index < 2 ? 'md:border-b' : ''}

                                    /* --- DESKTOP BORDERS (Horizontal Strip) --- */
                                    /* 1. Reset Medium Bottom Border */
                                    lg:border-b-0
                                    
                                    /* 2. Add Right Border to all except the very last item */
                                    ${index !== statsData.length - 1 ? 'lg:border-r' : 'lg:border-r-0'}
                                `}
                            >
                                {/* Number Display */}
                                <div className="text-5xl lg:text-7xl font-semibold text-white mb-4 font-['Manrope'] tracking-tight">
                                    <AnimatedCounter end={stat.value} trigger={inView} />
                                    {stat.suffix}
                                </div>
                                
                                {/* Description */}
                                <p className="text-blue-100/80 text-sm lg:text-base leading-relaxed font-medium max-w-xs mx-auto lg:mx-0">
                                    {stat.description}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;