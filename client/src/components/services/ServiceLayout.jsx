import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import FinalCTA from '../home/FinalCTA'; 
import WhatsAppButton from '../common/WhatsAppButton';
import ScrollToTop from '../common/ScrollToTop';

const ServiceLayout = ({ children, title, subtitle }) => {
    return (
        <div className="w-full relative bg-[#020617] min-h-screen text-white selection:bg-blue-500/30">
            
           <div className="relative w-full flex items-center justify-center p-2 sm:p-4 z-50">
              
                <div className="relative z-10 w-full lg:w-[98%] bg-transparent border border-transparent flex flex-col px-4 sm:px-10 lg:px-16 pt-4">
                    <Navbar />
                </div>
            </div>

            {title && (
                <section className="relative pt-20 pb-32 px-6 lg:px-16 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-blue-600/10 blur-[100px] pointer-events-none"></div>
                    
                    <div className="container mx-auto max-w-[1200px] relative z-10 text-center">
                        <h1 className="text-5xl lg:text-7xl font-bold font-['Manrope'] mb-8 leading-tight">
                            {title}
                        </h1>
                        
                        {subtitle && (
                            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </section>
            )}

            {/* 3. The Page Specific Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* 4. Common Bottom Sections */}
            <FinalCTA />
            <Footer />

            {/* 5. Floating Buttons */}
            <WhatsAppButton />
            <ScrollToTop />
        </div>
    );
};

export default ServiceLayout;