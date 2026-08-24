import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

const navLinks = [
  { id: 'hero', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 200;

      sections.forEach((section) => {
        if (!section) return;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: scrolled ? 'rgba(5, 8, 22, 0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #1a1638' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              backgroundColor: '#151030',
              border: '1px solid rgba(145, 94, 255, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#915eff',
            }}
          >
            <Code2 size={18} />
          </div>
          <span style={{ color: '#ffffff', fontSize: '16px', fontWeight: '800', letterSpacing: '-0.3px' }}>
            Harsh Patel <span style={{ color: '#00cea8', fontSize: '12px', fontWeight: '600' }}>| MERN</span>
          </span>
        </a>

        {/* Dynamic Nav Links with Active Indicator */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                style={{
                  position: 'relative',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  color: isActive ? '#00cea8' : '#94a3b8',
                  fontSize: '13.5px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  backgroundColor: isActive ? 'rgba(0, 206, 168, 0.08)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(0, 206, 168, 0.3)' : 'transparent'}`,
                  transition: 'all 0.22s ease',
                }}
              >
                {link.title}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}