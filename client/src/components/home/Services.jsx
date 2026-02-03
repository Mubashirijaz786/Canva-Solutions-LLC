import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../common/PrimaryButton'; 

// --- IMPORT CENTRALIZED DATA ---
import { servicesData } from '../../data/servicesData';

const Services = () => {

    return (
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] overflow-hidden">

            {/* Background Radial Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>

            {/* --- HEADER --- */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center mb-12 lg:mb-16">
                <div className="inline-block border border-white/10 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-400 mb-6 bg-white/5 backdrop-blur-sm">
                    Our Services
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white mb-4 lg:mb-6 font-['Manrope'] tracking-tight leading-[1.1]">
                    Here’s What We Do Best
                </h2>

                <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto">
                    Canva Solutions Expert Digital Services
                </p>
            </div>

            {/* --- INFINITE SCROLL SLIDER --- */}
            <div className="relative w-full">

                {/* Fade Masks - Adjusted for mobile visibility */}
                <div className="absolute top-0 left-0 w-12 sm:w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-12 sm:w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none"></div>

                {/* Sliding Track */}
                <div className="flex w-full overflow-hidden">
                    <div className="flex animate-loop-scroll hover:pause"> 

                        {/* MAPPING FROM CENTRALIZED DATA (Doubled for Loop) */}
                        {[...servicesData, ...servicesData].map((service, index) => (
                            <Link
                                key={index}
                                to={service.link}
                                className="
                                    flex flex-col items-start justify-between
                                    flex-shrink-0 
                                    w-[85vw] sm:w-[400px] md:w-[500px] 
                                    px-8 py-10 sm:px-12 sm:py-16 lg:px-16 lg:py-24 
                                    border-r border-white/10 
                                    group 
                                    hover:bg-white/5 
                                    active:scale-[0.98] 
                                    transition-all duration-300
                                "
                            >
                                <div>
                                    {/* Icon - Scaled for mobile */}
                                    <div className="mb-8 lg:mb-10 text-blue-400 group-hover:text-cyan-300 transition-all duration-500 group-hover:scale-110 transform origin-left scale-90 sm:scale-100">
                                        {service.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6 leading-tight font-['Manrope']">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-base sm:text-lg lg:text-2xl leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity line-clamp-4 sm:line-clamp-none">
                                        {service.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- BOTTOM CTA --- */}
            <div className="mt-16 lg:mt-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center md:text-left relative z-10 px-4">
                <p className="text-2xl sm:text-3xl text-white font-medium">
                    Got a bold idea? We’ll make it real.
                </p>

                {/* Link to Contact Page */}
                <Link to="/contact" className="w-full sm:w-auto">
                    <PrimaryButton className="w-full justify-center !px-8 !py-4 sm:!px-12 sm:!py-5 text-lg sm:text-xl">
                        Get in Touch
                    </PrimaryButton>
                </Link>
            </div>

        </section>
    );
};

export default Services;