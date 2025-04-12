// neo-drachma-vite/src/components/Footer.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { getText } from '../translations';


export default function Footer() {
    const { language } = useLanguage();
    
    return (
        <footer className="atomic-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/images/neodrachma_logo.png" alt="NeoDrachma Logo" />
                        <div className="atomic-badge">{getText(language, 'footer', 'est')}</div>
                    </div>
                    <div className="footer-links">
                        <h4 className="retro-heading">{getText(language, 'footer', 'quickLinks')}</h4>
                        <ul className="americana-list">
                            <li><a href="#vision">{getText(language, 'nav', 'vision')}</a></li>
                            <li><a href="#why">{getText(language, 'nav', 'why')}</a></li>
                            <li><a href="#how">{getText(language, 'nav', 'how')}</a></li>
                            <li><a href="#join">{getText(language, 'nav', 'join')}</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4 className="retro-heading">{getText(language, 'footer', 'connect')}</h4>
                        <div className="social-icons atomic-social">
                            <a href="#" className="social-icon" aria-label="Twitter">
                                <div className="atom-icon">T</div>
                            </a>
                            <a href="#" className="social-icon" aria-label="Facebook">
                                <div className="atom-icon">F</div>
                            </a>
                            <a href="#" className="social-icon" aria-label="Instagram">
                                <div className="atom-icon">I</div>
                            </a>
                            <a href="#" className="social-icon" aria-label="Discord">
                                <div className="atom-icon">D</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>{getText(language, 'footer', 'rights')}</p>
                    <p>{getText(language, 'footer', 'madeIn')}</p>
                    <div className="atomic-disclaimer">{getText(language, 'footer', 'forGreeks')}</div>
                </div>
            </div>
        </footer>
    );
}
