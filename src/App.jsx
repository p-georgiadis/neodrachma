// neo-drachma-vite/src/App.jsx
import React from 'react'

// Import components
import AnimatedHero from './components/AnimatedHero.jsx'
import RetroTerminal from './components/RetroTerminal.jsx'
import StrategicRoadmap from './components/StrategicRoadmap.jsx'
import IntelligenceFAQ from './components/IntelligenceFAQ.jsx'
import Footer from "./components/Footer.jsx";
import MascotProfile from "./components/MascotProfile.jsx";
import MainSections from "./components/MainSections.jsx";
import Hero from "./components/Hero.jsx";
import Navigation from "./components/Navigation.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import './App.css';

// Import language context
import { LanguageProvider } from './contexts/LanguageContext.jsx';
function App() {
    return (
        <LanguageProvider>
            <Navigation />
            <Hero />
            <MascotProfile />
            <StrategicRoadmap />
            <MainSections />
            <IntelligenceFAQ />
            <RetroTerminal />
            <Footer />
            <ScrollToTop />
        </LanguageProvider>
    )
}

export default App
