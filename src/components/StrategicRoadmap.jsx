// neo-drachma-vite/src/components/StrategicRoadmap.jsx
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { getText } from '../translations';


export default function StrategicRoadmap() {
    const [activePhase, setActivePhase] = useState(0);
    const { language } = useLanguage();
    
    // Function to get phase data with translations
    const getPhases = () => [
        {
            title: getText(language, 'roadmap', 'foundation'),
            date: getText(language, 'roadmap', 'current'),
            description: getText(language, 'roadmap', 'foundationDesc'),
            items: [
                getText(language, 'roadmap', 'f1'),
                getText(language, 'roadmap', 'f2'),
                getText(language, 'roadmap', 'f3'),
                getText(language, 'roadmap', 'f4')
            ],
            icon: "🏛️"
        },
        {
            title: getText(language, 'roadmap', 'adoption'),
            date: getText(language, 'roadmap', 'adoptionDate'),
            description: getText(language, 'roadmap', 'adoptionDesc'),
            items: [
                getText(language, 'roadmap', 'a1'),
                getText(language, 'roadmap', 'a2'),
                getText(language, 'roadmap', 'a3'),
                getText(language, 'roadmap', 'a4')
            ],
            icon: "🔄"
        },
        {
            title: getText(language, 'roadmap', 'expansion'),
            date: getText(language, 'roadmap', 'expansionDate'),
            description: getText(language, 'roadmap', 'expansionDesc'),
            items: [
                getText(language, 'roadmap', 'e1'),
                getText(language, 'roadmap', 'e2'),
                getText(language, 'roadmap', 'e3'),
                getText(language, 'roadmap', 'e4')
            ],
            icon: "📈"
        },
        {
            title: getText(language, 'roadmap', 'maturity'),
            date: getText(language, 'roadmap', 'maturityDate'),
            description: getText(language, 'roadmap', 'maturityDesc'),
            items: [
                getText(language, 'roadmap', 'm1'),
                getText(language, 'roadmap', 'm2'),
                getText(language, 'roadmap', 'm3'),
                getText(language, 'roadmap', 'm4')
            ],
            icon: "⚡"
        }
    ];
    
    const phases = getPhases();

    return (
        <section id="roadmap" className="section atomic-section roadmap-section">
            <div className="section-header">
                <div className="classified-header">{getText(language, 'roadmap', 'classified')}</div>
                <h2 className="atomic-title">{getText(language, 'roadmap', 'timeline')}</h2>
                <div className="subtitle-bar">{getText(language, 'roadmap', 'protocol')}</div>
            </div>

            {/* Desktop Layout */}
            <div className="desktop-timeline-navigation" role="tablist">
                {phases.map((phase, index) => (
                    <div
                        key={`desktop-${index}`}
                        className={`timeline-nav-item ${activePhase === index ? 'active' : ''}`}
                        onClick={() => setActivePhase(index)}
                        role="tab"
                        tabIndex={activePhase === index ? 0 : -1}
                        aria-selected={activePhase === index}
                        id={`phase-tab-desktop-${index}`}
                        aria-controls={`phase-content-${index}`}
                    >
                        <span className="timeline-icon" aria-hidden="true">{phase.icon}</span>
                        <span className="timeline-nav-title">{phase.title}</span>
                        <span className="timeline-date">{phase.date}</span>
                    </div>
                ))}
            </div>

            {/* Mobile-optimized layout with nav items followed by their content */}
            <div className="mobile-timeline-section">
                {phases.map((phase, index) => (
                    <div key={`mobile-${index}`} className="timeline-nav-content-wrapper">
                        <div
                            className={`timeline-nav-item ${activePhase === index ? 'active' : ''}`}
                            onClick={() => setActivePhase(index)}
                            role="tab"
                            tabIndex={activePhase === index ? 0 : -1}
                            aria-selected={activePhase === index}
                            id={`phase-tab-mobile-${index}`}
                            aria-controls={`phase-content-mobile-${index}`}
                        >
                            <span className="timeline-icon" aria-hidden="true">{phase.icon}</span>
                            <span className="timeline-nav-title">{phase.title}</span>
                            <span className="timeline-date">{phase.date}</span>
                        </div>
                        
                        <div
                            id={`phase-content-mobile-${index}`}
                            role="tabpanel"
                            aria-labelledby={`phase-tab-mobile-${index}`}
                            className={`roadmap-phase atomic-phase ${activePhase === index ? 'active-phase' : 'hidden-phase'} ${activePhase !== index ? 'inactive-mobile' : ''}`}
                            hidden={activePhase !== index}
                        >
                            <div className="phase-header">
                                <h3>{phase.title}</h3>
                                <span className="phase-date atomic-date">{phase.date}</span>
                            </div>
                            <div className="phase-description">
                                {phase.description}
                            </div>
                            <ul className="phase-list atomic-list">
                                {phase.items.map((item, i) => (
                                    <li key={i} className="atomic-item">{item}</li>
                                ))}
                            </ul>
                            <div className="phase-progress">
                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{ width: `${(index / (phases.length - 1)) * 100}%` }}
                                    ></div>
                                </div>
                                <div className="progress-label">
                                {getText(language, 'roadmap', 'progress')}: {Math.round((index / (phases.length - 1)) * 100)}%
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Shared content section for desktop view */}
            <div className="roadmap-container">
                {phases.map((phase, index) => (
                    <div
                        key={`desktop-content-${index}`}
                        id={`phase-content-${index}`}
                        role="tabpanel"
                        aria-labelledby={`phase-tab-desktop-${index}`}
                        className={`roadmap-phase atomic-phase ${activePhase === index ? 'active-phase' : 'hidden-phase'}`}
                        hidden={activePhase !== index}
                    >
                        <div className="phase-header">
                            <h3>{phase.title}</h3>
                            <span className="phase-date atomic-date">{phase.date}</span>
                        </div>
                        <div className="phase-description">
                            {phase.description}
                        </div>
                        <ul className="phase-list atomic-list">
                            {phase.items.map((item, i) => (
                                <li key={i} className="atomic-item">{item}</li>
                            ))}
                        </ul>
                        <div className="phase-progress">
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${(index / (phases.length - 1)) * 100}%` }}
                                ></div>
                            </div>
                            <div className="progress-label">
                            {getText(language, 'roadmap', 'progress')}: {Math.round((index / (phases.length - 1)) * 100)}%
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
