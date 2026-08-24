import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';

const skillsData = [
  { name: 'React.js', category: 'Frontend UI', color: '#00cea8' },
  { name: 'Node.js', category: 'Runtime Environment', color: '#915eff' },
  { name: 'Express.js', category: 'Backend Framework', color: '#00cea8' },
  { name: 'MongoDB', category: 'Database & Atlas', color: '#915eff' },
  { name: 'JavaScript (ES6+)', category: 'Core Language', color: '#00cea8' },
  { name: 'REST APIs & JWT', category: 'Architecture & Security', color: '#915eff' },
];

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
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Core Tech Stack Section */}
        <section id="skills" style={{ width: '100%', padding: '20px 0' }}>
          <div style={{ marginBottom: '36px', textAlign: 'center' }}>
            <p
              style={{
                color: '#00cea8',
                fontSize: '13px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                margin: '0 0 8px 0',
              }}
            >
              Technical Arsenal
            </p>
            <h2
              style={{
                color: '#ffffff',
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: '900',
                margin: 0,
              }}
            >
              Core Technologies & Skills
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
            }}
          >
            {skillsData.map((tech, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#151030',
                  border: `1px solid rgba(255, 255, 255, 0.08)`,
                  borderRadius: '16px',
                  padding: '24px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = tech.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(10, 8, 26, 0.7)',
                    border: `1px solid ${tech.color}50`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: tech.color,
                    fontSize: '22px',
                    fontWeight: 'bold',
                  }}
                >
                  ⚡
                </div>
                <div>
                  <h3
                    style={{
                      color: '#ffffff',
                      fontSize: '16px',
                      fontWeight: '700',
                      margin: '0 0 4px 0',
                    }}
                  >
                    {tech.name}
                  </h3>
                  <p style={{ color: '#aaa6c3', fontSize: '12px', margin: 0 }}>
                    {tech.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Projects Section */}
        <Projects />

        {/* 4. Contact Section */}
        <Contact />
      </main>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}