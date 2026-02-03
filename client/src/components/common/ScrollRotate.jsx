import React, { useEffect, useRef } from 'react';

const ScrollRotate = ({ 
    children, 
    rotationSpeed = 0.08, // Default rotation speed
    scaleSpeed = 0.0002,  // Default zoom speed
    className = "" 
}) => {
    const elementRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // Cancel any pending animation frame
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            
            // Use requestAnimationFrame to batch DOM updates
            rafRef.current = requestAnimationFrame(() => {
                if (elementRef.current) {
                    const scrollY = window.scrollY;
                    
                    // Calculate logic
                    const rotation = scrollY * rotationSpeed;
                    const scale = 1 + (scrollY * scaleSpeed);

                    // Apply transform (no reflow triggered - only transform is changed)
                    elementRef.current.style.transform = `rotate(${rotation}deg) scale(${scale})`;
                }
            });
        };

        // Add event listener with passive flag for better scroll performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Trigger once on mount to set initial state
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [rotationSpeed, scaleSpeed]);

    return (
        <div 
            ref={elementRef} 
            className={`will-change-transform transition-transform duration-75 ease-out ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollRotate;