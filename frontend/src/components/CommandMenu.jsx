import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { Terminal, Code, User, Send, FileText, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CommandMenu({ onOpenResume }) {
  const [open, setOpen] = useState(false);

  // Toggle with Ctrl+K or Cmd+K
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const navigateTo = (id) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00cea8', '#915eff', '#ffffff'],
    });
  };

  return (
    <>
      {/* Floating Keyboard Shortcut Hint */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed',
          bottom: '28px',
          left: '28px',
          backgroundColor: 'rgba(21, 16, 48, 0.85)',
          border: '1px solid rgba(145, 94, 255, 0.4)',
          borderRadius: '12px',
          padding: '8px 14px',
          color: '#cbd5e1',
          fontSize: '12px',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
          zIndex: 99,
        }}
      >
        <Terminal size={14} color="#00cea8" />
        <span>Press</span>
        <kbd
          style={{
            backgroundColor: 'rgba(145, 94, 255, 0.2)',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '10px',
            border: '1px solid rgba(145, 94, 255, 0.4)',
            color: '#00cea8',
          }}
        >
          Ctrl + K
        </kbd>
      </button>

      {/* Modal Dialog Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 8, 22, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '16px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '520px',
              backgroundColor: '#151030',
              border: '1px solid rgba(145, 94, 255, 0.4)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.7)',
            }}
          >
            <Command label="Command Menu">
              <div style={{ display: 'flex', alignItems: 'center', padding: '14px 18px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <Terminal size={18} color="#00cea8" style={{ marginRight: '12px' }} />
                <Command.Input
                  placeholder="Type a command or jump to section..."
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#ffffff',
                    fontSize: '15px',
                  }}
                  autoFocus
                />
              </div>

              <Command.List style={{ maxHeight: '280px', overflowY: 'auto', padding: '10px' }}>
                <Command.Empty style={{ padding: '16px', color: '#64748b', fontSize: '13px', textAlign: 'center' }}>
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation" style={{ color: '#00cea8', fontSize: '11px', fontWeight: '700', padding: '6px 10px', textTransform: 'uppercase' }}>
                  <Command.Item
                    onSelect={() => navigateTo('hero')}
                    style={{ padding: '10px 14px', borderRadius: '8px', color: '#e2e8f0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}
                  >
                    <User size={16} color="#915eff" />
                    <span>About / Overview</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => navigateTo('projects')}
                    style={{ padding: '10px 14px', borderRadius: '8px', color: '#e2e8f0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}
                  >
                    <Code size={16} color="#00cea8" />
                    <span>Projects & Live Work</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => navigateTo('contact')}
                    style={{ padding: '10px 14px', borderRadius: '8px', color: '#e2e8f0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}
                  >
                    <Send size={16} color="#915eff" />
                    <span>Contact / Get in Touch</span>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Actions" style={{ color: '#00cea8', fontSize: '11px', fontWeight: '700', padding: '6px 10px', marginTop: '8px', textTransform: 'uppercase' }}>
                  <Command.Item
                    onSelect={() => {
                      setOpen(false);
                      triggerConfetti();
                      if (onOpenResume) onOpenResume();
                    }}
                    style={{ padding: '10px 14px', borderRadius: '8px', color: '#e2e8f0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}
                  >
                    <FileText size={16} color="#00cea8" />
                    <span>View Resume & Trigger Confetti 🎉</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      setOpen(false);
                      window.open('https://github.com/harsh041316', '_blank');
                    }}
                    style={{ padding: '10px 14px', borderRadius: '8px', color: '#e2e8f0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}
                  >
                    <ExternalLink size={16} color="#915eff" />
                    <span>GitHub Profile</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}