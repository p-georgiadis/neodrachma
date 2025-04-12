// neo-drachma-vite/src/components/MascotProfile.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { getText } from '../translations';


export default function MascotProfile() {
    const { language } = useLanguage();
    
    return (
        <section className="mascot-profile americana-profile">
            <div className="container">
                <div className="vintage-card">
                    {/* Row that contains both mugshot and dossier */}
                    <div className="info-row" aria-label="Mascot profile information">
                        <div className="mugshot">
                            <img
                                src="/images/neodrachma_hero.png"
                                alt="Leon Damaris - The Defender of the Drachma"
                            />
                            <div className="security-stamp">{getText(language, 'mascot', 'clearanceLevel')}</div>
                            <div className="classified-overlay" aria-hidden="true"></div>
                        </div>
                        <div className="dossier">
                            <h2 className="codename">{getText(language, 'mascot', 'codex')}</h2>
                            <div className="file-stamp">{getText(language, 'mascot', 'restricted')}</div>
                            <h3 className="alias">
                                {getText(language, 'mascot', 'name')} <br />
                                "{getText(language, 'mascot', 'title')}"
                            </h3>
                            <div className="typewriter-text">
                                <p className="classification">{getText(language, 'mascot', 'classifiedProfile')}</p>
                                <p>
                                    {getText(language, 'mascot', 'bio')}
                                </p>
                                <p>{getText(language, 'mascot', 'traits')}</p>
                                <ul className="traits">
                                    <li>{getText(language, 'mascot', 'trait1')}</li>
                                    <li>{getText(language, 'mascot', 'trait2')}</li>
                                    <li>{getText(language, 'mascot', 'trait3')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Mission Statement placed outside the info-row */}
                    <div className="mission-statement-container">
                        <div className="mission-statement">
                            <p>
                                {getText(language, 'mascot', 'quote')}
                            </p>
                            <div className="signature">{getText(language, 'mascot', 'signature')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
