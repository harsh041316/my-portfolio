import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CyberCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Trailing Ambient Glow Orb */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(145, 94, 255, 0.09) 0%, rgba(0, 206, 168, 0.04) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 99,
          mixBlendMode: 'screen',
        }}
      />
      {/* Precision Core Dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#00cea8',
          boxShadow: '0 0 10px #00cea8, 0 0 20px #915eff',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
    </>
  );
}