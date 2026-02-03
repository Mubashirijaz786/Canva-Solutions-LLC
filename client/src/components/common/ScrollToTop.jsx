import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionOffsetRef = useRef(null);

    useEffect(() => {
        // Cache the offset position once (avoid repeated reflow queries)
        const trustedSection = document.getElementById('trusted-section');
        if (trustedSection) {
            sectionOffsetRef.current = trustedSection.offsetTop - 100;
        } else {
            sectionOffsetRef.current = 500; // Fallback
        }
    }, []); // Only run once on mount

    useEffect(() => {
        const toggleVisibility = () => {
            // Use cached offset, only compare scroll position
            const threshold = sectionOffsetRef.current || 500;
            setIsVisible(window.scrollY > threshold);
        };

        // Use passive listener for better scroll performance
        window.addEventListener('scroll', toggleVisibility, { passive: true });

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed bottom-8 right-8 z-[100]
                w-12 h-12 rounded-xl
                bg-gradient-to-r from-blue-500 to-cyan-500
                text-white shadow-lg shadow-blue-500/30
                flex items-center justify-center
                transition-all duration-500 transform
                hover:scale-110 hover:shadow-blue-500/50
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
            `}
            aria-label="Scroll to top"
        >
            <ChevronUp size={24} strokeWidth={3} />
        </button>
    );
};

export default ScrollToTop;