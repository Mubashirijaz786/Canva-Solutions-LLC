import React from 'react';
import { Link } from 'react-router-dom';
import { 
    ShoppingCart, 
    Search, 
    PenTool, 
    Palette, 
    Share2, 
    Smartphone, 
    Monitor, 
    Cpu 
} from 'lucide-react';

const ServicesDropdown = () => {
    
    const services = [
        { name: "E-Commerce", path: "/services/e-commerce", icon: ShoppingCart },
        { name: "SEO Services", path: "/services/seo", icon: Search },
        { name: "Content Writing", path: "/services/content-writing", icon: PenTool },
        { name: "Graphic Designing", path: "/services/graphic-design", icon: Palette },
        { name: "Social Media", path: "/services/social-media", icon: Share2 },
        { name: "Mobile App Dev", path: "/services/app-development", icon: Smartphone },
        { name: "Web Development", path: "/services/web-development", icon: Monitor },
        { name: "Custom Software", path: "/services/custom-software", icon: Cpu },
    ];

    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4 z-50">
            
            {/* Tiny Arrow at top */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0f172a] border-t border-l border-white/10 rotate-45 z-0"></div>

            {/* Main Container */}
            <div className="relative bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-10">
                
                {/* Gradient Top Line */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                <div className="p-2 flex flex-col">
                    {services.map((service, index) => (
                        <React.Fragment key={index}>
                            <Link 
                                to={service.path}
                                className="group/item flex items-center gap-4 px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                            >
                                {/* Icon Box */}
                                <div className="p-2 rounded-lg bg-white/5 text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-colors duration-300">
                                    <service.icon size={18} />
                                </div>

                                {/* Text */}
                                <span className="font-medium group-hover/item:translate-x-1 transition-transform duration-300">
                                    {service.name}
                                </span>
                            </Link>

                            {/* Separator Line (except for last item) */}
                            {index < services.length - 1 && (
                                <div className="h-px w-[90%] mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesDropdown;