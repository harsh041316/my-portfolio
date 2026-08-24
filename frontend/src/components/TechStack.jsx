import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Terminal, 
  Layers, 
  Database, 
  Wrench, 
  Cpu, 
  CheckCircle2, 
  Zap,
  ArrowUpRight
} from 'lucide-react';

const technologies = [
  // Frontend & MERN
  {
    name: 'React.js',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    level: 'Advanced',
    color: '#61DAFB',
    summary: 'Component-based UI architecture, state management & hooks for dynamic SPAs.',
    useCase: 'Interactive frontend for AuraStays and full-stack web applications.',
    experience: 'Core Focus',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 'Advanced',
    color: '#F7DF1E',
    summary: 'Asynchronous event loops, modern ES6+ syntax, DOM manipulation, and promises.',
    useCase: 'Primary scripting foundation across client and server runtimes.',
    experience: 'Core Focus',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    level: 'Intermediate',
    color: '#06B6D4',
    summary: 'Utility-first CSS framework for responsive layout compositions.',
    useCase: 'Rapid UI styling, dark-mode theming, and responsive design systems.',
    experience: 'Regular Use',
  },
  {
    name: 'Bootstrap',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    level: 'Advanced',
    color: '#7952B3',
    summary: 'Grid system, responsive utility classes, and pre-styled UI components.',
    useCase: 'BCA minor projects and AuraStays responsive platform layout.',
    experience: 'Proficient',
  },
  {
    name: 'HTML5 / CSS3',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 'Advanced',
    color: '#E34F26',
    summary: 'Semantic HTML markup, modern flexbox/grid styling, animations, and transitions.',
    useCase: 'Web structure and foundational layout engineering.',
    experience: 'Proficient',
  },

  // Backend & APIs
  {
    name: 'Node.js',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    level: 'Advanced',
    color: '#339933',
    summary: 'Event-driven JavaScript runtime engine for asynchronous backend services.',
    useCase: 'Server-side API controllers, authentication pipelines, and microservices.',
    experience: 'Core Focus',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    level: 'Advanced',
    color: '#FFFFFF',
    invert: true,
    summary: 'Minimalist web framework for Node.js REST API routing and middleware pipelines.',
    useCase: 'API endpoint routing, token verification, and request validation.',
    experience: 'Core Focus',
  },
  {
    name: 'PHP',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    level: 'Advanced',
    color: '#777BB4',
    summary: 'Server-side scripting language with database connectivity and MVC design.',
    useCase: 'Engineered multi-role Real Estate & Car Rental management systems.',
    experience: 'Proficient',
  },
  {
    name: 'Python',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    level: 'Intermediate',
    color: '#3776AB',
    summary: 'Object-oriented programming, data structures, automation, and AI/ML foundations.',
    useCase: 'Algorithmic problem solving and AI exploration experiments.',
    experience: 'Intermediate',
  },
  {
    name: 'Java',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    level: 'Intermediate',
    color: '#ED8B00',
    summary: 'Robust OOP design, memory management, and enterprise application fundamentals.',
    useCase: 'Academic software engineering and algorithm design.',
    experience: 'Intermediate',
  },

  // Databases
  {
    name: 'MongoDB',
    category: 'Databases',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    level: 'Advanced',
    color: '#47A248',
    summary: 'Document-oriented NoSQL database with flexible JSON-like document schemas.',
    useCase: 'Primary datastore for AuraStays user records, reviews, and listings.',
    experience: 'Core Focus',
  },
  {
    name: 'MySQL',
    category: 'Databases',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    level: 'Advanced',
    color: '#4479A1',
    summary: 'Relational database management, table normalization, constraints, and joins.',
    useCase: 'Structured database schemas for Real Estate & Car Rental platforms.',
    experience: 'Proficient',
  },

  // Tools & DevOps
  {
    name: 'Git',
    category: 'Tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    level: 'Advanced',
    color: '#F05032',
    summary: 'Distributed version control, branch management, merge resolution, and commit history.',
    useCase: 'Daily codebase management and feature branching.',
    experience: 'Daily Use',
  },
  {
    name: 'GitHub',
    category: 'Tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    level: 'Advanced',
    color: '#FFFFFF',
    invert: true,
    summary: 'Remote repository hosting, collaborative pull requests, issues, and code reviews.',
    useCase: 'Open-source project publishing and automated deployment pipelines.',
    experience: 'Daily Use',
  },
  {
    name: 'Postman',
    category: 'Tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    level: 'Intermediate',
    color: '#FF6C37',
    summary: 'RESTful API testing suite for endpoint validation, auth tokens, and payload inspection.',
    useCase: 'API testing and debugging during Node.js/Express development.',
    experience: 'Proficient',
  },
  {
    name: 'VS Code',
    category: 'Tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    level: 'Advanced',
    color: '#007ACC',
    summary: 'Modern code editor configured with ESLint, Prettier, and full-stack debugging tools.',
    useCase: 'Primary development workspace for all full-stack projects.',
    experience: 'Daily Use',
  },
];

const categoryTabs = [
  { id: 'All', label: 'All Stack' },
  { id: 'Frontend', label: 'Frontend' },
  { id: 'Backend', label: 'Backend' },
  { id: 'Databases', label: 'Databases' },
  { id: 'Tools', label: 'Tools' },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState(technologies[0]);

  const filteredTech = activeCategory === 'All'
    ? technologies
    : technologies.filter((t) => t.category === activeCategory);

  return (
    <section
      id="skills"
      style={{
        width: '100%',
        paddingTop: '50px',
        paddingBottom: '60px',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '260px',
          background: 'radial-gradient(circle, rgba(145, 94, 255, 0.12) 0%, rgba(0, 206, 168, 0.06) 60%, transparent 80%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Header & Filter Controls */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '24px',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(0, 206, 168, 0.1)',
              border: '1px solid rgba(0, 206, 168, 0.3)',
              color: '#00cea8',
              fontSize: '11px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: '8px',
            }}
          >
            <Sparkles size={12} />
            <span>Interactive Tech Deck</span>
          </div>

          <h2
            style={{
              color: '#ffffff',
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: '900',
              margin: 0,
              letterSpacing: '-0.5px',
            }}
          >
            Tools & Technology.
          </h2>
        </div>

        {/* Filter Chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  backgroundColor: isActive ? '#915eff' : '#0d0a21',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  border: `1px solid ${isActive ? '#915eff' : '#1f1b40'}`,
                  borderRadius: '10px',
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 15px rgba(145, 94, 255, 0.35)' : 'none',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Split Layout: Interactive Deck (Left) & Live Inspector (Right) */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          alignItems: 'stretch',
        }}
      >
        {/* Left: Interactive Tech Icon Grid */}
        <div
          style={{
            backgroundColor: '#0c091f',
            border: '1px solid #1c183d',
            borderRadius: '20px',
            padding: '18px',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.4)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '10px',
            alignContent: 'start',
          }}
        >
          <AnimatePresence>
            {filteredTech.map((tech) => {
              const isSelected = selectedTech.name === tech.name;
              return (
                <motion.div
                  layout
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.18 }}
                  onClick={() => setSelectedTech(tech)}
                  onMouseEnter={() => setSelectedTech(tech)}
                  whileHover={{ y: -2 }}
                  style={{
                    backgroundColor: isSelected ? '#161138' : '#100c28',
                    border: `1px solid ${isSelected ? tech.color : '#201b47'}`,
                    borderRadius: '12px',
                    padding: '10px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? `0 4px 18px ${tech.color}33` : 'none',
                  }}
                >
                  <div
                    style={{
                      width: '26px',
                      height: '26px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        filter: tech.invert ? 'invert(1)' : 'none',
                      }}
                      loading="lazy"
                    />
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      style={{
                        color: isSelected ? '#ffffff' : '#cbd5e1',
                        fontSize: '12px',
                        fontWeight: '700',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                      }}
                    >
                      {tech.name}
                    </div>
                    <div style={{ color: isSelected ? tech.color : '#64748b', fontSize: '10px', fontWeight: '600' }}>
                      {tech.level}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right: Live Inspector Console */}
        <div
          style={{
            backgroundColor: '#0c091f',
            border: `1px solid ${selectedTech.color}55`,
            borderRadius: '20px',
            padding: '24px',
            boxShadow: `0 15px 45px rgba(0, 0, 0, 0.6), 0 0 25px ${selectedTech.color}15`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <div>
            {/* Inspector Top Terminal Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '14px',
                borderBottom: '1px solid #1c183d',
                marginBottom: '18px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Terminal size={14} color={selectedTech.color} />
                <span style={{ color: '#8b86a8', fontSize: '11px', fontFamily: 'monospace' }}>
                  inspector.inspect("{selectedTech.name.toLowerCase()}")
                </span>
              </div>
              <span
                style={{
                  backgroundColor: `${selectedTech.color}18`,
                  color: selectedTech.color,
                  border: `1px solid ${selectedTech.color}44`,
                  padding: '3px 8px',
                  borderRadius: '6px',
                  fontSize: '10.5px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                }}
              >
                {selectedTech.category}
              </span>
            </div>

            {/* Selected Tech Card Identity */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: '#130f30',
                  border: `1px solid ${selectedTech.color}55`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px',
                  boxSizing: 'border-box',
                  boxShadow: `0 0 20px ${selectedTech.color}25`,
                }}
              >
                <img
                  src={selectedTech.icon}
                  alt={selectedTech.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: selectedTech.invert ? 'invert(1)' : 'none',
                  }}
                />
              </div>
              <div>
                <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: '900', margin: 0 }}>
                  {selectedTech.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '3px' }}>
                  <span style={{ color: '#00cea8', fontSize: '11.5px', fontWeight: '700' }}>
                    {selectedTech.level} Proficiency
                  </span>
                  <span style={{ color: '#4b5563' }}>•</span>
                  <span style={{ color: '#94a3b8', fontSize: '11.5px' }}>{selectedTech.experience}</span>
                </div>
              </div>
            </div>

            {/* Summary & Project Application */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div
                style={{
                  backgroundColor: '#120e2e',
                  border: '1px solid #1f1a4a',
                  borderRadius: '12px',
                  padding: '12px 14px',
                }}
              >
                <div style={{ color: '#8b86a8', fontSize: '10.5px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Core Functionality
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '12.5px', lineHeight: '1.5', margin: 0 }}>
                  {selectedTech.summary}
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#120e2e',
                  border: '1px solid #1f1a4a',
                  borderRadius: '12px',
                  padding: '12px 14px',
                }}
              >
                <div style={{ color: '#8b86a8', fontSize: '10.5px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Applied in Portfolio Projects
                </div>
                <p style={{ color: '#00cea8', fontSize: '12.5px', lineHeight: '1.5', margin: 0, fontWeight: '600' }}>
                  {selectedTech.useCase}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Live Status Pill */}
          <div
            style={{
              marginTop: '16px',
              paddingTop: '12px',
              borderTop: '1px solid #1c183d',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={14} color="#00cea8" />
              <span style={{ color: '#94a3b8', fontSize: '11.5px', fontWeight: '600' }}>
                Verified in Codebase
              </span>
            </div>
            <a
              href="#projects"
              style={{
                color: selectedTech.color,
                fontSize: '11.5px',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span>View in Projects</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}