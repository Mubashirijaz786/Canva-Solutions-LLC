import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// --- IMPORT CENTRALIZED DATA ---
import { servicesData } from '../data/servicesData';
import ServiceLayout from '../components/services/ServiceLayout';
import MetaData from '../components/common/MetaData'; // ✅ Imported MetaData

const Services = () => {
    return (
        <ServiceLayout>
            
            {/* ✅ SEO META TAGS FOR SERVICES PAGE */}
            <MetaData 
                title="Services – Canva Solutions
" 
                description="Explore our full range of digital services including custom web development, mobile apps, SEO, graphic design, and software solutions. We build scalable technology for growing businesses."
                keywords="web development services, mobile app development, SEO agency, graphic design services, custom software, digital marketing solutions, ecommerce development"
            />

            {/* 1. HERO SECTION */}
            <main id="main-content">
            <section className="relative pt-20 pb-32 px-6 lg:px-16 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-blue-600/10 blur-[120px] pointer-events-none"></div>
                
                <div className="container mx-auto max-w-[1200px] relative z-10 text-center">
                    <div className="inline-block border border-white/10 rounded-full px-5 py-2 text-sm font-medium text-gray-400 mb-8 bg-white/5 backdrop-blur-sm">
                        Our Expertise
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold font-['Manrope'] mb-8 leading-[1.1] text-white tracking-tight">
                        World-Class Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">Services & Solutions</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                        From code to content, we provide the full spectrum of digital services to help your business scale effortlessly.
                    </p>
                </div>
            </section>

            {/* 2. SERVICES GRID */}
            <section className="pb-32 pt-10 px-6 lg:px-16 relative z-10">
                <div className="container mx-auto max-w-[1500px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* MAPPING FROM CENTRALIZED DATA */}
                        {servicesData.map((service) => (
                            <Link 
                                key={service.id} 
                                to={service.link} 
                                className="
                                    group 
                                    relative 
                                    p-10 
                                    bg-white/5 
                                    border border-white/10 
                                    rounded-[2.5rem] 
                                    overflow-hidden 
                                    flex flex-col
                                    min-h-[420px]
                                    transition-all duration-500
                                    hover:bg-white/10 
                                    hover:border-blue-500/30 
                                    hover:-translate-y-2 
                                    hover:shadow-2xl 
                                "
                            >
                                {/* Dynamic Glow Effect based on color */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                                        {/* RESIZING ICON TO 40px FOR THIS PAGE */}
                                        {React.cloneElement(service.icon, { size: 40 })}
                                    </div>
                                    
                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors font-['Manrope']">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-grow">
                                        {service.desc}
                                    </p>
                                    
                                    {/* CTA Arrow */}
                                    <div className="flex items-center text-blue-400 font-bold group-hover:gap-2 transition-all mt-auto">
                                        Learn More <ArrowRight size={18} className="ml-2" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            </main>

        </ServiceLayout>
    );
};

export default Services;