import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../common/PrimaryButton';

// Import logos from data file
import { logoImages } from '../../data/logosData';

import loopBackground from '../../assets/images/loop-background.webp';
import loopImage from '../../assets/images/loop.webp';

const TrustedBy = () => {
    return (
        <section className="relative py-16 lg:py-24 overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src={loopBackground}
                    alt="Background texture"
                    className="w-full h-full object-cover scale-105"
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
            </div>

            {/* --- FULL SCREEN WIDTH LOGO SLIDER --- */}
            <div className="relative z-10 w-full mb-16 lg:mb-24">
                <div className="text-center container mx-auto px-4">
                    <p className="text-gray-400 text-sm sm:text-base font-medium mb-8 lg:mb-12 tracking-wide uppercase">
                        More than 100+ companies trust us worldwide
                    </p>
                </div>

                {/* Slider wrapper */}
                <div className="relative flex overflow-hidden w-full">
                    
                    {/* Fading Edge Overlays */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505]/95 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505]/95 to-transparent z-20 pointer-events-none"></div>

                    {/* Sliding Track - Double the array for seamless loop */}
                    <div className="flex w-fit animate-loop-scroll items-center py-4 hover:pause">
                        {[...logoImages, ...logoImages].map((logo, index) => (
                            <div key={index} className="mx-4 lg:mx-6 shrink-0">
                                {/* Logo Card with border and rounded corners */}
                                <div className="bg-white border border-white rounded-2xl p-4 lg:p-4 shadow-sm">
                                    <img 
                                        src={logo} 
                                        alt={`Partner Brand ${index + 1}`} 
                                        className="h-12 lg:h-20 w-auto object-contain cursor-default"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* BOTTOM CONTENT SECTION (Contained in max-width) */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1200px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column: Static Image */}
                    <div className="relative flex justify-center lg:justify-start group order-2 lg:order-1">
                        <div className="relative z-10 w-3/4 sm:w-full max-w-[350px] lg:max-w-[450px]">
                            <img
                                src={loopImage}
                                alt="Abstract 3D Loop"
                                className="w-full h-auto object-contain drop-shadow-2xl opacity-90 brightness-110 contrast-125"
                            />
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="text-center lg:text-left pl-0 lg:pl-10 order-1 lg:order-2">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] sm:text-xs font-medium text-gray-300 mb-6 lg:mb-8">
                            More About Our Company
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 font-['Manrope'] leading-[1.2] lg:leading-[1.15] tracking-tight">
                            All-in-One Service Provider <br className="hidden sm:block" />
                            Think It. Design It. Achieve It. <br className="hidden sm:block" />
                            From ideas to execution
                        </h2>

                        <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start">
                            <Link to="/services">
                                <PrimaryButton className="w-full sm:w-auto justify-center px-8 py-3 text-lg">
                                    Find Out More
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustedBy;