// neo-drachma-vite/src/components/RetroTerminal.jsx
import React, { useState, useEffect } from 'react';

export default function RetroTerminal() {
    const [text, setText] = useState('');
    const messages = [
        "INITIALIZING NEODRACHMA PROTOCOL...",
        "SCANNING EURO VULNERABILITIES...",
        "GREEK ECONOMY ANALYSIS COMPLETE",
        "SOLUTION FOUND: NEODRACHMA IMPLEMENTATION",
        "CITIZENS: PREPARE FOR ECONOMIC FREEDOM"
    ];

    useEffect(() => {
        let currentIndex = 0;
        let charIndex = 0;
        let typewriterTimerId = null;

        const typeWriter = () => {
            if (currentIndex < messages.length) {
                if (charIndex < messages[currentIndex].length) {
                    setText(prev => prev + messages[currentIndex][charIndex]);
                    charIndex++;
                    typewriterTimerId = setTimeout(typeWriter, 50);
                } else {
                    setText(prev => prev + '\n');
                    currentIndex++;
                    charIndex = 0;
                    typewriterTimerId = setTimeout(typeWriter, 1000);
                }
            }
        };

        typeWriter();

        return () => {
            if (typewriterTimerId) {
                clearTimeout(typewriterTimerId);
            }
        };
    }, []);

    return (
        <div className="purchase-terminal">
            <div className="terminal-header">
                <div className="terminal-title">NEODRACHMA CENTRAL COMMAND</div>
                <div className="terminal-controls" aria-hidden="true">
                    <span className="control"></span>
                    <span className="control"></span>
                    <span className="control"></span>
                </div>
            </div>
            <div className="terminal-screen" role="region" aria-label="Terminal output">
                <pre>{text}</pre>
                <span className="blinking-cursor" aria-hidden="true">_</span>
            </div>
            <div className="terminal-options">
                <div className="terminal-option" role="button" tabIndex="0">
                    <span className="option-number">01</span>
                    <span className="option-text">INITIATE FINANCIAL FREEDOM</span>
                </div>
                <div className="terminal-option" role="button" tabIndex="0">
                    <span className="option-number">02</span>
                    <span className="option-text">OVERTHROW EURO DEPENDENCY</span>
                </div>
                <button className="terminal-btn">EXECUTE PROTOCOL</button>
            </div>
        </div>
    );
}
