import React, { useRef, useState } from 'react';

export default function ProjectCard({ title, desc, tags, liveUrl, githubUrl }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setCoords((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        backgroundColor: '#151030',
        borderRadius: '20px',
        padding: '28px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        transition: 'transform 0.25s ease, border-color 0.25s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: coords.opacity,
          transition: 'opacity 0.2s ease',
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(0, 206, 168, 0.15), transparent 80%)`,
        }}
      />

      <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: '800', margin: '0 0 10px 0' }}>
        {title}
      </h3>
      <p style={{ color: '#aaa6c3', fontSize: '14px', lineHeight: '1.6', margin: '0 0 18px 0' }}>
        {desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        {tags.map((tag, i) => (
          <span
            key={i}
            style={{
              fontSize: '11px',
              fontFamily: 'monospace',
              color: '#915eff',
              backgroundColor: 'rgba(145, 94, 255, 0.1)',
              padding: '4px 10px',
              borderRadius: '6px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            style={{ color: '#00cea8', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}
          >
            Live Demo $\rightarrow$
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            style={{ color: '#cbd5e1', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}