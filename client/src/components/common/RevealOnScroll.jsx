import React from 'react';
import { useInView } from 'react-intersection-observer';

const RevealOnScroll = ({ children, threshold = 0.1, delay = 0 }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only animate once
        threshold: threshold, // Start when 10% of the component is visible
    });

    return (
        <div
            ref={ref}
            // Tailwind classes for the transition
            className={`
                transition-all duration-1000 ease-out transform
                ${inView 
                    ? 'opacity-100 translate-y-0'  // Final State: Visible & Reset Position
                    : 'opacity-0 translate-y-12'   // Initial State: Invisible & Moved Down
                }
            `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;