import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react'; 
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.webp';
import PrimaryButton from '../common/PrimaryButton';
import ServicesDropdown from './ServicesDropdown';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const calendlyLink = "https://calendly.com/canvasolutions-info/";

    return (
        <nav className="relative z-50 mb-8 lg:mb-16 w-full px-2 sm:px-0">
            
            {/* ✅ FIXED ALIGNMENT:
               1. lg:w-[calc(100%+4rem)] / xl:w-[calc(100%+6rem)]: Navbar ko container se bara kiya.
               2. lg:left-1/2 lg:-translate-x-1/2: Navbar ko exact center mein rakha taake dono sides barabar hon.
            */}
            <div className="flex items-center justify-between w-full lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:w-[calc(100%+4rem)] xl:w-[calc(100%+6rem)] px-6 lg:px-8 xl:px-12 py-5 lg:py-6 border border-white/10 rounded-2xl bg-black/20 backdrop-blur-md shadow-lg transition-all">

                {/* Logo Section */}
                <Link to="/" className="cursor-pointer shrink-0">
                    <img
                        src={logo}
                        alt="Canva Solutions"
                        className="h-8 lg:h-12 xl:h-16 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center lg:gap-6 xl:gap-14 font-medium text-gray-200">
                    <Link to="/" className="hover:text-white transition-colors text-sm xl:text-base whitespace-nowrap">Home</Link>
                    
                    <div className="relative group">
                        <Link 
                            to="/Services" 
                            className="flex items-center gap-1 hover:text-white transition-colors py-2 text-sm xl:text-base whitespace-nowrap"
                        >
                            Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300"/>
                        </Link>
                        <ServicesDropdown />
                    </div>

                    <Link to="/Portfolio" className="hover:text-white transition-colors text-sm xl:text-base whitespace-nowrap">Portfolio</Link>
                    <Link to="/Blog" className="hover:text-white transition-colors text-sm xl:text-base whitespace-nowrap">Blogs</Link>
                    <Link to="/About" className="hover:text-white transition-colors text-sm xl:text-base whitespace-nowrap">About</Link>
                    <Link to="/Contact" className="hover:text-white transition-colors text-sm xl:text-base whitespace-nowrap">Contacts</Link>
                </div>

                {/* Desktop Button */}
                <div className="hidden lg:block shrink-0 min-w-fit">
                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                        <PrimaryButton className="!px-6 xl:!px-10 !py-3.5 xl:!py-4 !text-sm xl:!text-base whitespace-nowrap">
                            Get Started
                        </PrimaryButton>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full mt-3 p-5 border border-white/10 rounded-2xl bg-[#020617]/95 backdrop-blur-2xl lg:hidden flex flex-col gap-4 z-[60] shadow-2xl animate-in fade-in slide-in-from-top-4">
                    {['Home', 'Services', 'Portfolio', 'Blogs', 'About', 'Contacts'].map((item) => (
                        <Link 
                            key={item}
                            to={item === 'Home' ? '/' : `/${item}`} 
                            className="text-gray-300 hover:text-white text-base font-medium py-3 px-2 rounded-xl hover:bg-white/5 transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="pt-2" onClick={() => setIsOpen(false)}>
                        <PrimaryButton className="w-full justify-center py-4 text-base">
                            Get Started
                        </PrimaryButton>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;