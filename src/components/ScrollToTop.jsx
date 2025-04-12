// ScrollToTop.jsx
import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-top-btn ${isVisible ? 'visible' : ''}`}
            aria-label="Scroll to top"
            title="Scroll to top"
        >
            <div className="scroll-atom" aria-hidden="true">
                <span className="scroll-arrow">↑</span>
                <div className="mini-orbit mini-orbit-1"></div>
                <div className="mini-orbit mini-orbit-2"></div>
            </div>
        </button>
    );
}
