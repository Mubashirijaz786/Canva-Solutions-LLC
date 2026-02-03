import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. Import Link
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';

// Images
import contactImage from '../../assets/images/contact.webp';

const FinalCTA = () => {
    return (
        <section className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16 max-w-[1400px] relative z-10">
                
                {/* --- MAIN CARD CONTAINER --- */}
                <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                    
                    {/* 1. BACKGROUND GRADIENT */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-[#0b1221] to-cyan-900"></div>
                    
                    {/* 2. CONTACT IMAGE */}
                    <div className="absolute inset-0 h-full w-full">
                        <img 
                            src={contactImage} 
                            alt="Contact" 
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* 3. CENTERED CONTENT */}
                    <div className="relative z-10 px-6 py-20 lg:py-32 flex flex-col items-center text-center bg-black/40">
                        
                        {/* Tag */}
                        <div className="inline-block border border-white/10 rounded-full px-5 py-2 text-xs font-medium text-blue-200 mb-8 bg-white/5 backdrop-blur-sm">
                            Your Product Could Be Next
                        </div>

                        {/* Headline */}
                        <h2 className="text-4xl lg:text-7xl font-bold text-white font-['Manrope'] tracking-tight leading-[1.1] mb-6 drop-shadow-lg max-w-4xl">
                            Ready to Transform <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Your Business?
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-blue-100/95 text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl drop-shadow-md font-medium">
                            Canva Solutions is where bold ideas become unstoppable brands. Let's build your future today.
                        </p>

                        {/* Buttons (Centered Row) */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                            
                            {/* Primary Button -> Internal Link to Services */}
                            <Link to="/services" className="w-full sm:w-auto">
                                <PrimaryButton className="w-full !px-8 !py-4 !text-base shadow-lg shadow-blue-500/20">
                                    Get Started Now
                                </PrimaryButton>
                            </Link>

                            {/* Secondary Button -> External Link to Calendly */}
                            <a 
                                href="https://calendly.com/canvasolutions-info/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-full sm:w-auto"
                            >
                                <SecondaryButton className="w-full !px-8 !py-4 !text-base flex items-center justify-center gap-2">
                                    <ArrowRight size={18} />
                                    Schedule a Demo
                                </SecondaryButton>
                            </a>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default FinalCTA;