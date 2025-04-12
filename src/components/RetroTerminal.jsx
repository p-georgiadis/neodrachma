// neo-drachma-vite/src/components/RetroTerminal.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { getText } from '../translations';


export default function RetroTerminal() {
    const { language } = useLanguage();
    const [text, setText] = useState('');
    
    // Get translated messages based on current language
    const getMessages = () => [
        getText(language, 'terminal', 'initializing'),
        getText(language, 'terminal', 'scanning'),
        getText(language, 'terminal', 'analysis'),
        getText(language, 'terminal', 'solution'),
        getText(language, 'terminal', 'prepare')
    ];
    

    useEffect(() => {
        let currentIndex = 0;
        let charIndex = 0;
        let typewriterTimerId = null;
        const messages = getMessages();

        // Reset text when language changes
        setText('');
        
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
    }, [language]); // Include language as dependency to restart effect when language changes

    return (
        <div className="purchase-terminal">
            <div className="terminal-header">
                <div className="terminal-title">{getText(language, 'terminal', 'neodrachmaCommand')}</div>
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
                    <span className="option-text">{getText(language, 'terminal', 'financial')}</span>
                </div>
                <div className="terminal-option" role="button" tabIndex="0">
                    <span className="option-number">02</span>
                    <span className="option-text">{getText(language, 'terminal', 'euro')}</span>
                </div>
                <button className="terminal-btn">{getText(language, 'terminal', 'execute')}</button>
            </div>
        </div>
    );
}
