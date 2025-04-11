// neo-drachma-vite/src/App.jsx
import React from 'react'

// Import the four components you asked about:
import AnimatedHero from './components/AnimatedHero.jsx'
import RetroTerminal from './components/RetroTerminal.jsx'
import StrategicRoadmap from './components/StrategicRoadmap.jsx'
import IntelligenceFAQ from './components/IntelligenceFAQ.jsx'
import './App.css';
import Footer from "./components/Footer.jsx";
import MascotProfile from "./components/MascotProfile.jsx";
import MainSections from "./components/MainSections.jsx";
import Hero from "./components/Hero.jsx";
import Navigation from "./components/Navigation.jsx";
function App() {
    return (
        <>
            <Navigation />
            <Hero />
            <MascotProfile />
            <StrategicRoadmap />
            <MainSections />
            <IntelligenceFAQ />
            <RetroTerminal />
            <Footer />
        </>
    )
}

export default App
