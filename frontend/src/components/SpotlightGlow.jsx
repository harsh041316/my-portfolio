import React, { useEffect, useState } from 'react';

export default function SpotlightGlow() {
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(145, 94, 255, 0.12), transparent 80%)`,
        transition: 'background 0.05s ease-out',
      }}
    />
  );
}