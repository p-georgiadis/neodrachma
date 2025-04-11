// neo-drachma-vite/src/components/AnimatedHero.jsx
import React, { useState, useEffect } from 'react';

export default function AnimatedHero() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => (prevCount + 1) % 100);
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="atomic-hero-animation">
            <div
                className="atomic-meter"
                role="progressbar"
                aria-valuenow={count}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div className="meter-label">POWER LEVEL</div>
                <div className="meter-progress" style={{ width: `${count}%` }}></div>
                <div className="meter-value">{count}%</div>
            </div>
            <div className="atomic-symbol" aria-hidden="true">
                <div className="nucleus"></div>
                <div className="orbit orbit-1"></div>
                <div className="orbit orbit-2"></div>
                <div className="orbit orbit-3"></div>
            </div>
            <div className="atomic-text">ATOMIC AGE ECONOMY</div>
        </div>
    );
}
