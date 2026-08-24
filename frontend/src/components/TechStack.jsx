import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const techItems = [
  // Frontend
  {
    name: 'React.js',
    category: 'frontend',
    categoryLabel: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61DAFB',
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    categoryLabel: 'Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#F7DF1E',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    categoryLabel: 'Styling',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    color: '#38BDF8',
  },
  {
    name: 'HTML5 / CSS3',
    category: 'frontend',
    categoryLabel: 'Core Web',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: '#E34F26',
  },
  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    categoryLabel: 'Runtime',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#339933',
  },
  {
    name: 'Express.js',
    category: 'backend',
    categoryLabel: 'Backend Framework',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    color: '#ffffff',
    invert: true,
  },
  {
    name: 'REST APIs',
    category: 'backend',
    categoryLabel: 'Architecture',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    color: '#00cea8',
  },
  {
    name: 'Python',
    category: 'backend',
    categoryLabel: 'Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: '#3776AB',
  },
  // Database & Cloud
  {
    name: 'MongoDB',
    category: 'database',
    categoryLabel: 'NoSQL Database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: '#47A248',
  },
  {
    name: 'MySQL',
    category: 'database',
    categoryLabel: 'SQL Database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: '#4479A1',
  },
  // Tools & Devops
  {
    name: 'Git',
    category: 'tools',
    categoryLabel: 'Version Control',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: '#F05032',
  },
  {
    name: 'GitHub',
    category: 'tools',
    categoryLabel: 'Repository Hosting',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    color: '#ffffff',
    invert: true,
  },
  {
    name: 'Postman',
    category: 'tools',
    categoryLabel: 'API Testing',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    color: '#FF6C37',
  },
  
];

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'tools', label: 'Tools & DevOps' },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems =
    activeTab === 'all'
      ? techItems
      : techItems.filter((item) => item.category === activeTab);

  return (
    <section id="skills" style={{ width: '100%', padding: '30px 0' }}>
      {/* Heading */}
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
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
          My Technical Arsenal
        </p>
        <h2
          style={{
            color: '#ffffff',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: '900',
            margin: '0 0 12px 0',
          }}
        >
          Technologies & Tools
        </h2>
        <p style={{ color: '#aaa6c3', fontSize: '15px', maxWidth: '560px', margin: '0 auto' }}>
          Technologies, frameworks, databases, and workflow tools I use to build scalable web applications.
        </p>
      </div>

      {/* Interactive Category Filter Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '36px',
        }}
      >
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                padding: '8px 18px',
                borderRadius: '12px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                border: isActive
                  ? '1px solid #00cea8'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: isActive ? 'rgba(0, 206, 168, 0.12)' : 'rgba(21, 16, 48, 0.6)',
                color: isActive ? '#00cea8' : '#aaa6c3',
                boxShadow: isActive ? '0 0 16px rgba(0, 206, 168, 0.2)' : 'none',
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Animated Dynamic Tech Cards Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
          gap: '18px',
        }}
      >
        <AnimatePresence>
          {filteredItems.map((tech) => (
            <motion.div
              layout
              key={tech.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -6, borderColor: tech.color }}
              style={{
                backgroundColor: '#151030',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '22px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '12px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Tech Icon Container */}
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(5, 8, 22, 0.75)',
                  border: `1px solid rgba(255, 255, 255, 0.08)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px',
                  boxShadow: `0 4px 12px ${tech.color}25`,
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: tech.invert ? 'brightness(0) invert(1)' : 'none',
                  }}
                  loading="lazy"
                />
              </div>

              {/* Text Info */}
              <div>
                <h3
                  style={{
                    color: '#ffffff',
                    fontSize: '15px',
                    fontWeight: '700',
                    margin: '0 0 3px 0',
                  }}
                >
                  {tech.name}
                </h3>
                <span
                  style={{
                    color: '#aaa6c3',
                    fontSize: '11px',
                    fontWeight: '500',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    padding: '2px 8px',
                    borderRadius: '6px',
                  }}
                >
                  {tech.categoryLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}