// neo-drachma-vite/src/components/MascotProfile.jsx
import React from 'react';

export default function MascotProfile() {
    return (
        <section className="mascot-profile americana-profile">
            <div className="container">
                <div className="vintage-card">
                    {/* Row that contains both mugshot and dossier */}
                    <div className="info-row">
                        <div className="mugshot">
                            <img
                                src="/images/neodrachma_hero.png"
                                alt="Leon Damaris - The Defender of the Drachma"
                            />
                            <div className="security-stamp">CLEARANCE LEVEL: ΑΛΦΑ</div>
                            <div className="classified-overlay" aria-hidden="true"></div>
                        </div>
                        <div className="dossier">
                            <h2 className="codename">CODEX: NEO-300</h2>
                            <div className="file-stamp">RESTRICTED</div>
                            <h3 className="alias">
                                LEON 'NEO' DAMARIS <br />
                                "The Defender of the Drachma"
                            </h3>
                            <div className="typewriter-text">
                                <p className="classification">[CLASSIFIED PROFILE]</p>
                                <p>
                                    Born in the shadow of the Acropolis, son of a history teacher and grocer.
                                    Witnessed family struggles during Greek debt crisis. Now leads the charge for
                                    economic sovereignty through NeoDrachma.
                                </p>
                                <p>Subject exhibits:</p>
                                <ul className="traits">
                                    <li>Δυναμισμός (Dynamic Vision)</li>
                                    <li>Παιδεία (Scholarly Resolve)</li>
                                    <li>Πατριωτισμός (Patriotic Fervor)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Mission Statement placed outside the info-row */}
                    <div className="mission-statement-container">
                        <div className="mission-statement">
                            <p>
                                "The old Drachma was stolen from us - not just the coin, but the pride behind it.
                                NeoDrachma is not a step back. It's a leap forward - on our own terms."
                            </p>
                            <div className="signature">- Leon Damaris</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
