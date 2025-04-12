// neo-drachma-vite/src/components/Hero.jsx
import React from 'react'
import AnimatedHero from './AnimatedHero.jsx'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import { getText } from '../translations'

export default function Hero() {
    const { language } = useLanguage();
    
    return (
        <section id="hero" className="hero atomic-hero">
            <div className="container">
                <div className="vault-number blink-text">{getText(language, 'hero', 'projectTitle')}</div>
                <div className="classified-stamp">{getText(language, 'hero', 'topSecret')}</div>
                <p className="tagline retro-title">{getText(language, 'hero', 'tagline')}</p>
                <p className="subtitle terminal-text">{getText(language, 'hero', 'subtitle')}</p>

                {/* AnimatedHero is our React component for the animated meter */}
                <AnimatedHero />

                <div className="mission-header propaganda-poster">
                    <img src="/images/neodrachma_poster.png" alt="NeoDrachma Propaganda Poster" />
                    <div className="stamp-overlay">AUTHORIZED</div>
                    
                    {/* Greek translation of the poster - only visible when language is Greek */}
                    {language === 'gr' && (
                        <div className="poster-translation">
                            <p>Η ΝεοΔραχμή είναι κάτι περισσότερο από ένα απλό κρυπτονόμισμα. Είναι ένα κίνημα για την αποκατάσταση της οικονομικής κυριαρχίας του ελληνικού λαού. Γεννημένη από τους αγώνες των καθημερινών Ελλήνων που αντιμετωπίζουν οικονομικές δυσκολίες υπό το σύστημα του Ευρώ, η ΝεοΔραχμή στοχεύει στη δημιουργία ενός παράλληλου οικονομικού οικοσυστήματος που επιστρέφει τη δύναμη στα χέρια των απλών πολιτών.</p>
                        </div>
                    )}
                </div>

                {/* Updated Status Bar with "cooler" animated effects */}
                <div className="status-bar fallout-terminal">
                    <div className="status-item">
                        <span className="status-label">{getText(language, 'hero', 'stability')}</span>
                        <div className="status-meter red cooler">
                            <div className="progress-fill" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                    <div className="status-item">
                        <span className="status-label">{getText(language, 'hero', 'adoption')}</span>
                        <div className="status-meter yellow cooler">
                            <div className="progress-fill" style={{ width: '40%' }}></div>
                        </div>
                    </div>
                    <div className="status-item">
                        <span className="status-label">{getText(language, 'hero', 'euroResistance')}</span>
                        <div className="status-meter green cooler">
                            <div className="progress-fill" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="cta-buttons atomic-buttons">
                    <a href="#vision" className="btn primary atomic-btn">{getText(language, 'hero', 'learnMore')}</a>
                    <a href="#join" className="btn secondary nuka-btn">{getText(language, 'hero', 'joinMovement')}</a>
                </div>
            </div>
        </section>
    );
}
