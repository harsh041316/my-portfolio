import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CyberCursor from './components/CyberCursor';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div
      style={{
        backgroundColor: '#050816',
        minHeight: '100vh',
        color: '#ffffff',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* UI/UX Upgrades */}
      <CyberCursor />
      <ScrollProgress />
      <Navbar />

      {/* Main Portfolio Sections */}
      <main
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}