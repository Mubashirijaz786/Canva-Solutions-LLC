import React, { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, duration = 2000, trigger = false }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;

        let startTimestamp = null;
        
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Ease-out function (starts fast, slows down at the end)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [trigger, end, duration]);

    return <span>{count}</span>;
};

export default AnimatedCounter;