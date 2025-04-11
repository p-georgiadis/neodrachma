// Navigation.jsx
import React from 'react';

export default function Navigation() {
    return (
        <nav className="navbar atomic-nav">
            <div className="container">
                <a href="#hero" className="logo atomic-logo">
                    <img src="/images/neodrachma_coin.png" alt="NeoDrachma Logo" />
                    <div className="atom-orbit" aria-hidden="true">
                        <div className="electron-wrapper electron-wrapper-1">
                            <div className="electron"></div>
                        </div>
                        <div className="electron-wrapper electron-wrapper-2">
                            <div className="electron"></div>
                        </div>
                        <div className="electron-wrapper electron-wrapper-3">
                            <div className="electron"></div>
                        </div>
                    </div>
                </a>
                <button className="mobile-menu-toggle" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className="nav-links retro-menu">
                    <li><a href="#vision" className="atomic-btn">Vision</a></li>
                    <li><a href="#why" className="atomic-btn">Why</a></li>
                    <li><a href="#how" className="atomic-btn">How</a></li>
                    <li><a href="#join" className="atomic-btn">Join</a></li>
                    <li><a href="#roadmap" className="atomic-btn">Roadmap</a></li>
                    <li><a href="#faq" className="atomic-btn">FAQ</a></li>
                </ul>
            </div>
        </nav>
    );
}
