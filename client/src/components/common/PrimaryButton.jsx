import React from 'react';
import { ArrowRight } from 'lucide-react';

const PrimaryButton = ({ 
    children, 
    onClick, 
    className = "", 
    icon = true, 
    ...props 
}) => {
    return (
        <button
            onClick={onClick}
            className={`
                px-8 py-4 
                rounded-lg 
                text-base font-semibold 
                min-w-[200px] 
                flex items-center justify-center gap-2 
                border border-transparent /* Start with an invisible border */

                /* Default State (Blue Gradient) */
                bg-gradient-to-r from-blue-500 to-cyan-500 
                text-white 
                shadow-xl shadow-blue-500/20 

                /* --- HOVER STATES --- */
                hover:bg-white           /* 1. Change background to white */
                hover:text-black     /* 2. Change text to blue for contrast */
                hover:border-blue-600    /* 3. Make border visible */
                hover:shadow-blue-500/40 
                
                /* Animation */
                hover-slide-right
                transition-all duration-300 
                
                ${className} 
            `}
            {...props}
        >
            {icon && <ArrowRight size={18} />}
            {children}
        </button>
    );
};

export default PrimaryButton;