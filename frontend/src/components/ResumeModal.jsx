import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(3, 5, 15, 0.88)',
          backdropFilter: 'blur(14px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 999999,
          padding: '85px 16px 24px 16px',
          boxSizing: 'border-box',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#0c0a1d',
            border: '1px solid rgba(145, 94, 255, 0.4)',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '920px',
            maxHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.9), 0 0 35px rgba(145, 94, 255, 0.2)',
            overflow: 'hidden',
          }}
        >
          {/* Top Control Header */}
          <div
            style={{
              padding: '14px 22px',
              backgroundColor: '#110d29',
              borderBottom: '1px solid #1f1b40',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
              <span style={{ color: '#8b86a8', fontSize: '12.5px', fontWeight: '600', marginLeft: '8px' }}>
                harsh_patel_resume.pdf
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a
                href="/resume.pdf"
                download="Harsh_Patel_Resume.pdf"
                style={{
                  backgroundColor: '#915eff',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '12px',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(145, 94, 255, 0.35)',
                }}
              >
                <DownloadIcon />
                <span>Download PDF</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                style={{
                  background: 'none',
                  border: '1px solid #231f47',
                  borderRadius: '8px',
                  color: '#94a3b8',
                  padding: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Unified Scrollable Container */}
          <div
            style={{
              padding: '24px 28px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              boxSizing: 'border-box',
              scrollbarWidth: 'thin',
              scrollbarColor: '#2b2359 #0c0a1d',
            }}
          >
            {/* Header Profile Card */}
            <div
              style={{
                backgroundColor: '#120e2e',
                border: '1px solid #221c4e',
                borderRadius: '16px',
                padding: '20px 22px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: '900', margin: 0 }}>
                    HARSH PATEL
                  </h2>
                  <span
                    style={{
                      backgroundColor: 'rgba(0, 206, 168, 0.15)',
                      color: '#00cea8',
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      border: '1px solid rgba(0, 206, 168, 0.3)',
                    }}
                  >
                    MERN STACK DEVELOPER
                  </span>
                </div>
                <p style={{ color: '#aaa6c3', fontSize: '13px', margin: '8px 0 0 0', maxWidth: '580px', lineHeight: '1.6' }}>
                  Motivated MCA student with a solid foundation in MERN architecture, relational database management, and full-stack software development.
                </p>
              </div>

              {/* Direct Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-start' }}>
                <span style={{ color: '#cbd5e1', fontSize: '12px' }}>📧 harsh04032004@gmail.com</span>
                <span style={{ color: '#cbd5e1', fontSize: '12px' }}>📱 +91-8469653336</span>
                <span style={{ color: '#8b86a8', fontSize: '11.5px' }}>📍 Killa Pardi, Valsad, Gujarat</span>
                <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                  <a
                    href="https://github.com/harsh041316"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: '#1c1742',
                      border: '1px solid #2d2663',
                      borderRadius: '6px',
                      padding: '4px 10px',
                      color: '#00cea8',
                      fontSize: '11.5px',
                      fontWeight: '700',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>GitHub</span>
                    <ExternalIcon />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/harshpatel434"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: '#1c1742',
                      border: '1px solid #2d2663',
                      borderRadius: '6px',
                      padding: '4px 10px',
                      color: '#915eff',
                      fontSize: '11.5px',
                      fontWeight: '700',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>LinkedIn</span>
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Technical Arsenal */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00cea8' }} />
                <h3 style={{ color: '#ffffff', fontSize: '14.5px', fontWeight: '800', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Technical Skills
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                <div style={{ backgroundColor: '#120e2e', border: '1px solid #221c4e', borderRadius: '12px', padding: '14px' }}>
                  <div style={{ color: '#00cea8', fontSize: '11.5px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Web & Frameworks
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['React.js', 'Node.js', 'Express.js', 'Bootstrap', 'Tailwind CSS', 'HTML5', 'CSS3'].map((s, i) => (
                      <span key={i} style={{ backgroundColor: '#0c0920', color: '#cbd5e1', border: '1px solid #201a47', padding: '3px 8px', borderRadius: '6px', fontSize: '11px' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ backgroundColor: '#120e2e', border: '1px solid #221c4e', borderRadius: '12px', padding: '14px' }}>
                  <div style={{ color: '#915eff', fontSize: '11.5px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Languages & Databases
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['JavaScript', 'Python', 'Java', 'MongoDB', 'MySQL', 'Database Management'].map((s, i) => (
                      <span key={i} style={{ backgroundColor: '#0c0920', color: '#cbd5e1', border: '1px solid #201a47', padding: '3px 8px', borderRadius: '6px', fontSize: '11px' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ backgroundColor: '#120e2e', border: '1px solid #221c4e', borderRadius: '12px', padding: '14px' }}>
                  <div style={{ color: '#cbd5e1', fontSize: '11.5px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Emerging & Soft Skills
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['Artificial Intelligence', 'Machine Learning', 'Problem Solving', 'Team Collaboration'].map((s, i) => (
                      <span key={i} style={{ backgroundColor: '#0c0920', color: '#cbd5e1', border: '1px solid #201a47', padding: '3px 8px', borderRadius: '6px', fontSize: '11px' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Projects */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#915eff' }} />
                <h3 style={{ color: '#ffffff', fontSize: '14.5px', fontWeight: '800', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Academic Projects
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ backgroundColor: '#120e2e', border: '1px solid #221c4e', borderRadius: '12px', padding: '16px 18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px' }}>
                    <div>
                      <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: '800', margin: 0 }}>
                        AuraStays (Full Stack Airbnb Clone)
                      </h4>
                      <span style={{ color: '#00cea8', fontSize: '11px', fontWeight: '700' }}>Ongoing Academic Project</span>
                    </div>
                    <span style={{ color: '#915eff', fontSize: '11.5px', fontWeight: '700', fontFamily: 'monospace' }}>
                      Node.js • Express.js • MongoDB • JavaScript • Bootstrap
                    </span>
                  </div>
                  <ul style={{ margin: '8px 0 0 0', paddingLeft: '18px', color: '#94a3b8', fontSize: '12.5px', lineHeight: '1.6' }}>
                    <li>Developing a full-stack rental platform allowing users to perform CRUD operations on property listings and submit ratings and reviews.</li>
                    <li>Implementing secure user authentication and authorization protocols to restrict data modification strictly to authorized owners.</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: '#120e2e', border: '1px solid #221c4e', borderRadius: '12px', padding: '16px 18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px' }}>
                    <div>
                      <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: '800', margin: 0 }}>
                        Real Estate & Car Rental Web Platforms
                      </h4>
                      <span style={{ color: '#915eff', fontSize: '11px', fontWeight: '700' }}>BCA Minor Projects</span>
                    </div>
                    <span style={{ color: '#00cea8', fontSize: '11.5px', fontWeight: '700', fontFamily: 'monospace' }}>
                      PHP • MySQL • JavaScript • HTML/CSS
                    </span>
                  </div>
                  <ul style={{ margin: '8px 0 0 0', paddingLeft: '18px', color: '#94a3b8', fontSize: '12.5px', lineHeight: '1.6' }}>
                    <li>Developed multi-role web applications featuring Admin, Owner, Agent, and Buyer modules with comprehensive CRUD operations.</li>
                    <li>Implemented advanced search filters, user management, and inquiry systems.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00cea8' }} />
                  <h3 style={{ color: '#ffffff', fontSize: '14.5px', fontWeight: '800', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Education
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ backgroundColor: '#120e2e', border: '1px solid #221c4e', borderRadius: '10px', padding: '12px 14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: '800' }}>Master of Computer Applications (MCA)</span>
                      <span style={{ color: '#00cea8', fontSize: '11px', fontWeight: '700' }}>Expected May 2027</span>
                    </div>
                    <div style={{ color: '#8b86a8', fontSize: '11.5px', marginTop: '2px' }}>
                      SS Agrawal Institute of Management & Technology Navsari | GTU
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#120e2e', border: '1px solid #221c4e', borderRadius: '10px', padding: '12px 14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: '800' }}>Bachelor of Computer Applications (BCA)</span>
                      <span style={{ color: '#915eff', fontSize: '11px', fontWeight: '700' }}>2025</span>
                    </div>
                    <div style={{ color: '#8b86a8', fontSize: '11.5px', marginTop: '2px' }}>
                      KBS College Vapi | Veer Narmad South Gujarat University
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#120e2e', border: '1px solid #221c4e', borderRadius: '10px', padding: '12px 14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: '800' }}>HSC (12th) & SSC (10th)</span>
                      <span style={{ color: '#8b86a8', fontSize: '11.5px', fontWeight: '700' }}>2022 / 2020</span>
                    </div>
                    <div style={{ color: '#8b86a8', fontSize: '11.5px', marginTop: '2px' }}>
                      GSEB Board, Gujarat
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#915eff' }} />
                  <h3 style={{ color: '#ffffff', fontSize: '14.5px', fontWeight: '800', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Certifications
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { title: 'Getting Started with AI', org: 'IBM SkillsBuild', date: 'Jul 30, 2026' },
                    { title: 'Advanced Prompt Engineering with ChatGPT', org: 'upGrad Certificate of Completion', date: 'July 2026' },
                    { title: 'Introduction to Generative AI Studio', org: 'Simplilearn SkillUP (Powered by Google Cloud)', date: '27th July 2026' },
                    { title: 'Lab: Troubleshoot Your Code Using IBM Bob', org: 'IBM SkillsBuild / Adobe Learning Manager', date: '30 Jul 2026' },
                  ].map((cert, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: '#120e2e',
                        border: '1px solid #221c4e',
                        borderRadius: '10px',
                        padding: '10px 14px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <div style={{ color: '#ffffff', fontSize: '12px', fontWeight: '700' }}>{cert.title}</div>
                        <div style={{ color: '#8b86a8', fontSize: '11px' }}>{cert.org}</div>
                      </div>
                      <span style={{ color: '#00cea8', fontSize: '11px', fontWeight: '700', whiteSpace: 'nowrap' }}>
                        {cert.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}