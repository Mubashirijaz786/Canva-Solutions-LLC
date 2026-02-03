import React from 'react';

const SecondaryButton = ({ 
    children, 
    onClick, 
    className = "", 
    ...props 
}) => {
    return (
        <button
            onClick={onClick}
            className={`
                justify-center 
                border border-white/30 
                text-white 
                hover:bg-white hover:text-black 
                px-8 py-4 
                rounded-lg 
                font-semibold text-base 
                flex items-center gap-2 
                backdrop-blur-sm 
                hover-slide-right 
                min-w-[200px] 
                transition-all duration-300
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
};

export default SecondaryButton;