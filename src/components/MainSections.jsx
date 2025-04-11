// neo-drachma-vite/src/components/MainSections.jsx
import React from 'react';

export default function MainSections() {
    return (
        <main>
            {/* Vision Section */}
            <section id="vision" className="section atomic-section">
                <div className="container">
                    <h2 className="atomic-title">ECONOMIC PRESERVATION PROGRAM</h2>
                    <p className="propaganda-text">
                        <strong>DIRECTIVE 300:</strong> ESTABLISH AUTONOMOUS FINANCIAL INFRASTRUCTURE TO PRESERVE HELLENIC ECONOMIC INTERESTS. NEO-DRACHMA PROTOCOL AUTHORIZED FOR CITIZEN IMPLEMENTATION.
                    </p>
                </div>
            </section>

            {/* Why NeoDrachma Section */}
            <section id="why" className="section americana-section">
                <div className="container">
                    <h2 className="atomic-title">Why NeoDrachma?</h2>
                    <div className="grid-2col">
                        <div className="feature-box">
                            <h3>The Euro Challenge</h3>
                            <p>Since Greece adopted the Euro in 2001, many citizens have experienced:</p>
                            <ul className="phase-list">
                                <li>Harsh austerity measures</li>
                                <li>Reduced purchasing power</li>
                                <li>Loss of monetary sovereignty</li>
                                <li>Economic policies that favor other European economies at Greece's expense</li>
                                <li>Decreased competitiveness in key sectors like tourism and agriculture</li>
                            </ul>
                        </div>
                        <div className="feature-box">
                            <h3>The People's Alternative</h3>
                            <p>NeoDrachma offers:</p>
                            <ul className="phase-list">
                                <li>A decentralized financial system built by Greeks, for Greeks</li>
                                <li>Freedom from external financial control</li>
                                <li>Community governance through transparent blockchain technology</li>
                                <li>Protection against inflation and economic uncertainty</li>
                                <li>Support for local businesses and the Greek economy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How NeoDrachma Works Section */}
            <section id="how" className="section atomic-section">
                <div className="container">
                    <h2 className="atomic-title">How NeoDrachma Works</h2>
                    <div className="grid-2col">
                        <div className="feature-box">
                            <h3>Technical Foundation</h3>
                            <p>NeoDrachma is built on a secure, energy-efficient blockchain that allows for:</p>
                            <ul className="phase-list">
                                <li>Fast transactions with minimal fees</li>
                                <li>Simple mobile payments anywhere in Greece</li>
                                <li>Secure storage of value outside traditional banking systems</li>
                                <li>Transparent operation with community oversight</li>
                                <li>Smart contracts to enable new forms of local commerce</li>
                            </ul>
                        </div>
                        <div className="feature-box">
                            <h3>Economic Model</h3>
                            <p>Our tokenomics are designed specifically to address Greece's unique needs:</p>
                            <ul className="phase-list">
                                <li>Total Supply: 300 billion NeoDrachma (symbolizing the 300 Spartans who defended Greek freedom)</li>
                                <li>Initial distribution focused on Greek citizens and businesses</li>
                                <li>Anti-whale mechanisms to prevent market manipulation</li>
                                <li>Liquidity pools paired with Euro and other major currencies</li>
                                <li>Deflationary model to ensure long-term value preservation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Section */}
            <section id="join" className="section vault-section">
                <div className="container">
                    <h2 className="atomic-title">ENLIST NOW</h2>
                    <div className="propaganda-poster">
                        <div className="vault-border">
                            <h3 className="propaganda-text">FOR THE NEW GREECE</h3>
                            <p className="propaganda-subtext">ACQUIRE NEO-DRACHMA TODAY</p>
                            <div className="purchase-terminal">
                                <div className="terminal-screen">
                                    <span className="blinking-cursor" aria-hidden="true">_</span> INITIALIZING TRANSACTION...
                                </div>
                                <div className="platform-cards">
                                    <div className="terminal-option">
                                        <div className="option-number">[1]</div>
                                        <div className="option-content">
                                            <img src="/images/pumpfun-logo.png" alt="Pump.fun Platform" />
                                            <a href="https://pump.fun" className="btn terminal-btn">INITIATE PURCHASE</a>
                                        </div>
                                    </div>
                                    <div className="terminal-option">
                                        <div className="option-number">[2]</div>
                                        <div className="option-content">
                                            <img src="/images/dexscreener-logo.png" alt="DexScreener Platform" />
                                            <a href="https://dexscreener.com" className="btn terminal-btn">MONITOR PROGRESS</a>
                                        </div>
                                    </div>
                                </div>
                                <p className="terminal-note">SELECT OPTION USING SOLANA-BASED INTERFACE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* These divs were originally used as mounting points for additional React components.
          You can either incorporate RetroTerminal, StrategicRoadmap, and IntelligenceFAQ
          as components (like we did earlier) or leave them as placeholders.
          For simplicity, here they are as plain divs. */}
            <div id="retro-terminal" style={{ margin: "40px 0" }}></div>
            <div id="strategic-roadmap" style={{ margin: "40px 0" }}></div>
            <div id="intel-faq" style={{ margin: "40px 0" }}></div>
        </main>
    );
}
