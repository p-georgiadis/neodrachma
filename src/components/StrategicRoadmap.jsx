// neo-drachma-vite/src/components/StrategicRoadmap.jsx
import React, { useState } from 'react';

export default function StrategicRoadmap() {
    const [activePhase, setActivePhase] = useState(0);

    const phases = [
        {
            title: "FOUNDATION",
            date: "CURRENT",
            description: "Establishing the infrastructure and community for NeoDrachma's launch.",
            items: [
                "Token launch and distribution to early Greek adopters",
                "Community building across major Greek cities",
                "Initial exchange listings on decentralized platforms",
                "Educational outreach programs across Greece"
            ],
            icon: "🏛️"
        },
        {
            title: "ADOPTION",
            date: "Q3 2025",
            description: "Expanding NeoDrachma usage throughout Greek commerce and daily transactions.",
            items: [
                "Merchant onboarding program in tourist regions",
                "Mobile wallet upgrades with offline transaction capabilities",
                "Strategic partnerships with Greek businesses and cooperatives",
                "Local community events and trade networks in major Greek cities"
            ],
            icon: "🔄"
        },
        {
            title: "EXPANSION",
            date: "Q1 2026",
            description: "Integrating NeoDrachma into broader economic systems and governance.",
            items: [
                "NeoDrachma payment card accepted throughout Greece",
                "Integration with tourism sector for visitor adoption",
                "Governance DAO for community-driven economic decisions",
                "Development fund for Greek entrepreneurs and innovators"
            ],
            icon: "📈"
        },
        {
            title: "MATURITY",
            date: "Q4 2026",
            description: "Achieving a self-sustaining economic ecosystem powered by NeoDrachma.",
            items: [
                "Complete financial ecosystem independent of Euro restrictions",
                "International recognition and trade partnerships",
                "Strategic integration with traditional finance when beneficial",
                "Economic development initiatives throughout Greek territories"
            ],
            icon: "⚡"
        }
    ];

    return (
        <section id="roadmap" className="section atomic-section roadmap-section">
            <div className="section-header">
                <div className="classified-header">CLASSIFIED</div>
                <h2 className="atomic-title">STRATEGIC TIMELINE</h2>
                <div className="subtitle-bar">OPERATION NEODRACHMA: PROSPERITY PROTOCOL</div>
            </div>

            <div className="timeline-navigation" role="tablist">
                {phases.map((phase, index) => (
                    <div
                        key={index}
                        className={`timeline-nav-item ${activePhase === index ? 'active' : ''}`}
                        onClick={() => setActivePhase(index)}
                        role="tab"
                        tabIndex={activePhase === index ? 0 : -1}
                        aria-selected={activePhase === index}
                        id={`phase-tab-${index}`}
                        aria-controls={`phase-content-${index}`}
                    >
                        <span className="timeline-icon" aria-hidden="true">{phase.icon}</span>
                        <span className="timeline-nav-title">{phase.title}</span>
                        <span className="timeline-date">{phase.date}</span>
                    </div>
                ))}
            </div>

            <div className="roadmap-container">
                {phases.map((phase, index) => (
                    <div
                        key={index}
                        id={`phase-content-${index}`}
                        role="tabpanel"
                        aria-labelledby={`phase-tab-${index}`}
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
                                MISSION PROGRESS: {Math.round((index / (phases.length - 1)) * 100)}%
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
