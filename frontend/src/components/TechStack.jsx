import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Layout, Code2, Terminal, ShieldCheck } from 'lucide-react';

const technologies = [
  { name: 'React.js', category: 'Frontend UI', icon: Layout, color: '#00cea8' },
  { name: 'Node.js', category: 'Runtime Environment', icon: Terminal, color: '#915eff' },
  { name: 'Express.js', category: 'Backend Framework', icon: Server, color: '#00cea8' },
  { name: 'MongoDB', category: 'Database & Atlas', icon: Database, color: '#915eff' },
  { name: 'JavaScript (ES6+)', category: 'Core Language', icon: Code2, color: '#00cea8' },
  { name: 'REST APIs & JWT', category: 'Architecture & Security', icon: ShieldCheck, color: '#915eff' },
];

export default function TechStack() {
  return (
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
            letterSpacing: '-0.5px',
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
        {technologies.map((tech, idx) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -6, borderColor: tech.color }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: '#151030',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '24px 18px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '12px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                transition: 'border-color 0.2s ease',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(10, 8, 26, 0.7)',
                  border: `1px solid ${tech.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: tech.color,
                }}
              >
                <IconComponent size={26} />
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}