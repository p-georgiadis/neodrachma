// Navigation.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { getText } from '../translations';


export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const { language, toggleLanguage } = useLanguage();
    
    // Track scroll position and update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                'hero', 'vision', 'why', 'how', 'join', 'roadmap', 'faq'
            ];
            
            const currentPosition = window.scrollY + 200; // Offset for better UX
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    const offset = element.offsetTop;
                    
                    if (currentPosition >= offset && 
                        currentPosition < (offset + element.offsetHeight)) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('.navbar')) {
                setMenuOpen(false);
            }
        };
        
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuOpen]);
    
    // Close menu when a menu item is clicked
    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };
    
    // Toggle menu open/closed
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="navbar atomic-nav">
            <div className="container">
                <a href="#hero" className="logo atomic-logo">
                    <img src="/images/neodrachma_coin.png" alt="NeoDrachma Logo" />
                    <div className="atom-orbit" aria-hidden="true">
                        <div className="electron-wrapper electron-wrapper-1">
                            <div className="electron"></div>
                        </div>
                        <div className="electron-wrapper electron-wrapper-2">
                            <div className="electron"></div>
                        </div>
                        <div className="electron-wrapper electron-wrapper-3">
                            <div className="electron"></div>
                        </div>
                    </div>
                </a>
                <button 
                    className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`} 
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className={`nav-links retro-menu ${menuOpen ? 'active' : ''}`}>
                    <li>
                        <a 
                            href="#vision" 
                            className={`atomic-btn ${activeSection === 'vision' ? 'active-section' : ''}`} 
                            onClick={handleMenuItemClick}
                        >
                            {getText(language, 'nav', 'vision')}
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#why" 
                            className={`atomic-btn ${activeSection === 'why' ? 'active-section' : ''}`} 
                            onClick={handleMenuItemClick}
                        >
                            {getText(language, 'nav', 'why')}
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#how" 
                            className={`atomic-btn ${activeSection === 'how' ? 'active-section' : ''}`} 
                            onClick={handleMenuItemClick}
                        >
                            {getText(language, 'nav', 'how')}
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#join" 
                            className={`atomic-btn ${activeSection === 'join' ? 'active-section' : ''}`} 
                            onClick={handleMenuItemClick}
                        >
                            {getText(language, 'nav', 'join')}
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#roadmap" 
                            className={`atomic-btn ${activeSection === 'roadmap' ? 'active-section' : ''}`} 
                            onClick={handleMenuItemClick}
                        >
                            {getText(language, 'nav', 'roadmap')}
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#faq" 
                            className={`atomic-btn ${activeSection === 'faq' ? 'active-section' : ''}`} 
                            onClick={handleMenuItemClick}
                        >
                            {getText(language, 'nav', 'faq')}
                        </a>
                    </li>
                    <li>
                        <button 
                            className="atomic-btn language-toggle" 
                            onClick={toggleLanguage}
                            aria-label={`Switch to ${language === 'en' ? 'Greek' : 'English'} language`}
                        >
                            {getText(language, 'nav', 'language')}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
