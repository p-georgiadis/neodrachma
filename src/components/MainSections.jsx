// neo-drachma-vite/src/components/MainSections.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { getText } from '../translations';


export default function MainSections() {
    const { language } = useLanguage();
    
    return (
        <main>
            {/* Vision Section */}
            <section id="vision" className="section atomic-section">
                <div className="container">
                    <h2 className="atomic-title">{getText(language, 'sections', 'economic')}</h2>
                    <p className="propaganda-text" dangerouslySetInnerHTML={{ __html: getText(language, 'sections', 'directive') }}></p>
                </div>
            </section>

            {/* Why NeoDrachma Section */}
            <section id="why" className="section americana-section">
                <div className="container">
                    <h2 className="atomic-title">{getText(language, 'sections', 'whyTitle')}</h2>
                    <div className="grid-2col">
                        <div className="feature-box">
                            <h3>{getText(language, 'sections', 'euroChallenge')}</h3>
                            <p>{getText(language, 'sections', 'euroIssues')}</p>
                            <ul className="phase-list">
                                <li>{getText(language, 'sections', 'euroIssue1')}</li>
                                <li>{getText(language, 'sections', 'euroIssue2')}</li>
                                <li>{getText(language, 'sections', 'euroIssue3')}</li>
                                <li>{getText(language, 'sections', 'euroIssue4')}</li>
                                <li>{getText(language, 'sections', 'euroIssue5')}</li>
                            </ul>
                        </div>
                        <div className="feature-box">
                            <h3>{getText(language, 'sections', 'peoplesAlternative')}</h3>
                            <p>{getText(language, 'sections', 'neodrachmaOffers')}</p>
                            <ul className="phase-list">
                                <li>{getText(language, 'sections', 'offer1')}</li>
                                <li>{getText(language, 'sections', 'offer2')}</li>
                                <li>{getText(language, 'sections', 'offer3')}</li>
                                <li>{getText(language, 'sections', 'offer4')}</li>
                                <li>{getText(language, 'sections', 'offer5')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How NeoDrachma Works Section */}
            <section id="how" className="section atomic-section">
                <div className="container">
                    <h2 className="atomic-title">{getText(language, 'sections', 'howItWorks')}</h2>
                    <div className="grid-2col">
                        <div className="feature-box">
                            <h3>{getText(language, 'sections', 'technical')}</h3>
                            <p>{getText(language, 'sections', 'technicalDetails')}</p>
                            <ul className="phase-list">
                                <li>{getText(language, 'sections', 'tech1')}</li>
                                <li>{getText(language, 'sections', 'tech2')}</li>
                                <li>{getText(language, 'sections', 'tech3')}</li>
                                <li>{getText(language, 'sections', 'tech4')}</li>
                                <li>{getText(language, 'sections', 'tech5')}</li>
                            </ul>
                        </div>
                        <div className="feature-box">
                            <h3>{getText(language, 'sections', 'economicModel')}</h3>
                            <p>{getText(language, 'sections', 'economicDetails')}</p>
                            <ul className="phase-list">
                                <li>{getText(language, 'sections', 'econ1')}</li>
                                <li>{getText(language, 'sections', 'econ2')}</li>
                                <li>{getText(language, 'sections', 'econ3')}</li>
                                <li>{getText(language, 'sections', 'econ4')}</li>
                                <li>{getText(language, 'sections', 'econ5')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Section */}
            <section id="join" className="section vault-section">
                <div className="container">
                    <h2 className="atomic-title">{getText(language, 'sections', 'enlist')}</h2>
                    <div className="propaganda-poster">
                        <div className="vault-border">
                            <h3 className="propaganda-text">{getText(language, 'sections', 'forNewGreece')}</h3>
                            <p className="propaganda-subtext">{getText(language, 'sections', 'acquire')}</p>
                            <div className="purchase-terminal">
                                <div className="terminal-screen">
                                    <span className="blinking-cursor" aria-hidden="true">_</span> {getText(language, 'sections', 'initializing')}
                                </div>
                                <div className="platform-cards">
                                    <div className="terminal-option">
                                        <div className="option-number">[1]</div>
                                        <div className="option-content">
                                            <img src="/images/pumpfun-logo.png" alt="Pump.fun Platform" />
                                            <a href="https://pump.fun" className="btn terminal-btn">{getText(language, 'sections', 'initiatePurchase')}</a>
                                        </div>
                                    </div>
                                    <div className="terminal-option">
                                        <div className="option-number">[2]</div>
                                        <div className="option-content">
                                            <img src="/images/dexscreener-logo.png" alt="DexScreener Platform" />
                                            <a href="https://dexscreener.com" className="btn terminal-btn">{getText(language, 'sections', 'monitorProgress')}</a>
                                        </div>
                                    </div>
                                </div>
                                <p className="terminal-note">{getText(language, 'sections', 'select')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
