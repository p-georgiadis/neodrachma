// neo-drachma-vite/src/components/Footer.jsx
import React from 'react';

export default function Footer() {
    return (
        <footer className="atomic-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/images/neodrachma_logo.png" alt="NeoDrachma Logo" />
                        <div className="atomic-badge">EST. 2025</div>
                    </div>
                    <div className="footer-links">
                        <h4 className="retro-heading">Quick Links</h4>
                        <ul className="americana-list">
                            <li><a href="#vision">Vision</a></li>
                            <li><a href="#why">Why NeoDrachma</a></li>
                            <li><a href="#how">How It Works</a></li>
                            <li><a href="#join">Join Movement</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4 className="retro-heading">Connect</h4>
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
                    <p>&copy; 2025 NeoDrachma. All rights reserved.</p>
                    <p>Δημιουργήθηκε με υπερηφάνεια στην Ελλάδα</p>
                    <div className="atomic-disclaimer">FOR GREEK CITIZENS ONLY</div>
                </div>
            </div>
        </footer>
    );
}
