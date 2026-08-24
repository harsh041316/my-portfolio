import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'MongoDB', 'Express.js', 'React.js', 'Node.js', 
  'REST APIs', 'JavaScript (ES6+)', 'Tailwind CSS', 'Git & GitHub', 
  'Postman', 'Redux Toolkit', 'JWT Auth', 'Vite'
];

export default function TechConstellation() {
  return (
    <div style={{ overflow: 'hidden', padding: '24px 0', width: '100%', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '80px',
          background: 'linear-gradient(to right, #050816, transparent)',
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '80px',
          background: 'linear-gradient(to left, #050816, transparent)',
          zIndex: 2,
        }}
      />
      
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: '16px', width: 'max-content' }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            style={{
              padding: '8px 20px',
              borderRadius: '9999px',
              background: 'rgba(21, 16, 48, 0.7)',
              border: '1px solid rgba(145, 94, 255, 0.25)',
              color: '#e2e8f0',
              fontSize: '13px',
              fontWeight: '600',
              backdropFilter: 'blur(8px)',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            }}
          >
            <span style={{ color: '#00cea8', marginRight: '6px' }}>#</span>
            {skill}
          </div>
        ))}
      </motion.div>
    </div>
  );
}