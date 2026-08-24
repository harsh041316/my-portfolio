import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
      }}
    >
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      
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
        <Tech />
        <Projects />
        <Contact />
      </main>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}