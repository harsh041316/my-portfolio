import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechConstellation from './components/TechConstellation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import CommandMenu from './components/CommandMenu';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: '#050816',
        color: '#ffffff',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        overflowX: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Content */}
      <main
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
        }}
      >
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <TechConstellation />
        <Projects />
        <Contact />
      </main>

      {/* Floating Interactive Utilities */}
      <BackToTop />
      <CommandMenu onOpenResume={() => setIsResumeOpen(true)} />

      {/* Global Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}