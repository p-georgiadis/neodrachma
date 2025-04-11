// neo-drachma-vite/src/components/Hero.jsx
import React from 'react'
import AnimatedHero from './AnimatedHero.jsx'

export default function Hero() {
    return (
        <section id="hero" className="hero atomic-hero">
            <div className="container">
                <div className="vault-number blink-text">PROJECT NEODRACHMA</div>
                <div className="classified-stamp">TOP SECRET</div>
                <p className="tagline retro-title">ECONOMIC REVIVAL INITIATIVE</p>
                <p className="subtitle terminal-text">ΕΛΕΥΘΕΡΙΑ ΜΈΣΩ ΟΙΚΟΝΟΜΙΚΉΣ ΑΝΕΞΑΡΤΗΣΊΑΣ</p>

                {/* AnimatedHero is our React component for the animated meter */}
                <AnimatedHero />

                <div className="mission-header propaganda-poster">
                    <img src="/images/neodrachma_poster.png" alt="NeoDrachma Propaganda Poster" />
                    <div className="stamp-overlay">AUTHORIZED</div>
                </div>

                {/* Updated Status Bar with "cooler" animated effects */}
                <div className="status-bar fallout-terminal">
                    <div className="status-item">
                        <span className="status-label">STABILITY</span>
                        <div className="status-meter red cooler">
                            <div className="progress-fill" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                    <div className="status-item">
                        <span className="status-label">ADOPTION</span>
                        <div className="status-meter yellow cooler">
                            <div className="progress-fill" style={{ width: '40%' }}></div>
                        </div>
                    </div>
                    <div className="status-item">
                        <span className="status-label">EURO RESISTANCE</span>
                        <div className="status-meter green cooler">
                            <div className="progress-fill" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="cta-buttons atomic-buttons">
                    <a href="#vision" className="btn primary atomic-btn">Learn More</a>
                    <a href="#join" className="btn secondary nuka-btn">Join Movement</a>
                </div>
            </div>
        </section>
    );
}
