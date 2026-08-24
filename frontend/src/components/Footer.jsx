import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

function GithubIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        width: '100%',
        backgroundColor: '#09071a',
        borderTop: '1px solid #1f1b40',
        padding: '32px 24px',
        boxSizing: 'border-box',
        marginTop: '60px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '18px',
        }}
      >
        {/* Brand info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                color: '#ffffff',
                fontWeight: '900',
                fontSize: '16px',
                letterSpacing: '-0.5px',
              }}
            >
              Harsh Patel
            </span>
            <span
              style={{
                color: '#00cea8',
                fontSize: '11px',
                fontWeight: '700',
                fontFamily: 'monospace',
              }}
            >
              // MERN Developer[cite: 1]
            </span>
          </div>
          <p style={{ color: '#64748b', fontSize: '13px', margin: '4px 0 0 0' }}>
            &copy; {currentYear} Harsh Patel. All rights reserved. Built with React & Vite.
          </p>
        </div>

        {/* Social Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="https://github.com/harsh041316"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: '#120e2e',
              border: '1px solid #28244c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#cbd5e1',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#00cea8';
              e.currentTarget.style.borderColor = '#00cea8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#cbd5e1';
              e.currentTarget.style.borderColor = '#28244c';
            }}
          >
            <GithubIcon size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/harshpatel434"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: '#120e2e',
              border: '1px solid #28244c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#cbd5e1',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#915eff';
              e.currentTarget.style.borderColor = '#915eff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#cbd5e1';
              e.currentTarget.style.borderColor = '#28244c';
            }}
          >
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}