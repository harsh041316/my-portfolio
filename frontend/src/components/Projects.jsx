import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Home, 
  Car, 
  Building2 
} from 'lucide-react';

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

const projects = [
  {
    id: 'aurastays',
    title: 'AuraStays — Full Stack Airbnb Clone',
    tagline: 'Modern vacation rental platform with complete property CRUD, user reviews, and owner permissions.',
    category: 'MERN Stack',
    icon: Home,
    accentColor: '#00cea8',
    status: 'Ongoing Project',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
    description:
      'Developed a full-featured accommodation platform allowing hosts to publish and manage listings, while travelers can explore destinations, book stays, and leave ratings and reviews.',
    features: [
      'Full CRUD workflows for property listings, dynamic pricing, and image management',
      'Robust user authentication and authorization restricting modifications strictly to verified owners',
      'Interactive review and 5-star rating system linked with authenticated user accounts',
      'Responsive design styled with modern Bootstrap components and custom CSS',
    ],
    techStack: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Express.js', color: '#ffffff' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'Bootstrap', color: '#7952B3' },
    ],
    githubLink: 'https://github.com/harsh041316',
  },
  {
    id: 'realestate',
    title: 'Real Estate Management Platform',
    tagline: 'Multi-role property marketplace with dynamic search filters, buyer inquiries, and relational data architecture.',
    category: 'Full Stack Web',
    icon: Building2,
    accentColor: '#915eff',
    status: 'BCA Minor Project',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
    description:
      'Engineered a comprehensive real estate platform with dedicated modules for Admins, Owners, Agents, and Buyers to streamline property browsing, inquiries, and transaction records.',
    features: [
      'Multi-role access control for Admins, Property Owners, Real Estate Agents, and Buyers',
      'Dynamic property search and filtration by location, budget, amenities, and property type',
      'Normalized relational MySQL database architecture for secure inquiry and listing management',
      'Client inquiry management pipeline connecting prospective buyers directly to property agents',
    ],
    techStack: [
      { name: 'PHP', color: '#777BB4' },
      { name: 'MySQL', color: '#4479A1' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'Less / CSS3', color: '#1572B6' },
      { name: 'HTML5', color: '#E34F26' },
    ],
    githubLink: 'https://github.com/harsh041316',
  },
  {
    id: 'carrental',
    title: 'Car Rental & Fleet Management System',
    tagline: 'Automated vehicle booking pipeline with fleet scheduling, availability tracking, and cost calculation.',
    category: 'Full Stack Web',
    icon: Car,
    accentColor: '#00cea8',
    status: 'BCA Minor Project',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80',
    description:
      'Built a complete vehicle reservation web platform that handles real-time car availability, automated rental duration and price calculation, and administrative fleet management.',
    features: [
      'Vehicle catalog with category filters (Sedan, SUV, Luxury) and specifications',
      'Automated pricing engine calculating rental totals based on duration and vehicle tier',
      'Fleet availability tracking preventing overlapping booking reservations',
      'Administrative dashboard for vehicle status updates, maintenance logs, and booking history',
    ],
    techStack: [
      { name: 'PHP', color: '#777BB4' },
      { name: 'MySQL', color: '#4479A1' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'Bootstrap', color: '#7952B3' },
      { name: 'HTML5 / CSS3', color: '#E34F26' },
    ],
    githubLink: 'https://github.com/harsh041316',
  },
];

const filterCategories = ['All Projects', 'MERN Stack', 'Full Stack Web'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filteredProjects = activeFilter === 'All Projects'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      style={{
        width: '100%',
        paddingTop: '60px',
        paddingBottom: '80px',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '500px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(145, 94, 255, 0.12) 0%, rgba(0, 206, 168, 0.05) 50%, transparent 80%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Header & Filter Bar */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '18px',
          marginBottom: '36px',
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
            <span>Featured Work</span>
          </div>

          <h2
            style={{
              color: '#ffffff',
              fontSize: 'clamp(26px, 3.8vw, 38px)',
              fontWeight: '900',
              margin: '0 0 6px 0',
              letterSpacing: '-0.5px',
            }}
          >
            Academic & Full-Stack Projects.
          </h2>
          <p style={{ color: '#aaa6c3', fontSize: '15px', maxWidth: '600px', margin: 0 }}>
            Web applications built with end-to-end database design, secure authentication, and responsive user interfaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {filterCategories.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                style={{
                  backgroundColor: isActive ? '#915eff' : '#0d0a21',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  border: `1px solid ${isActive ? '#915eff' : '#1f1b40'}`,
                  borderRadius: '10px',
                  padding: '7px 16px',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 15px rgba(145, 94, 255, 0.35)' : 'none',
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Cards Grid */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        <AnimatePresence>
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25 }}
                style={{
                  backgroundColor: '#0d0a21',
                  border: '1px solid #1c183d',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.45)',
                  transition: 'border-color 0.25s ease, transform 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = project.accentColor;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1c183d';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Image Banner */}
                <div style={{ position: 'relative', height: '180px', width: '100%', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, #0d0a21 0%, rgba(13, 10, 33, 0.3) 60%, transparent 100%)',
                    }}
                  />

                  {/* Status Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      backgroundColor: 'rgba(9, 7, 26, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: `1px solid ${project.accentColor}55`,
                      color: project.accentColor,
                      fontSize: '11px',
                      fontWeight: '800',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <Icon size={13} />
                    <span>{project.status}</span>
                  </div>

                  {/* GitHub Action */}
                  <div style={{ position: 'absolute', top: '14px', right: '14px' }}>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Source on GitHub"
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(9, 7, 26, 0.85)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid #28244c',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = project.accentColor;
                        e.currentTarget.style.color = project.accentColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#28244c';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                    >
                      <GithubIcon size={16} />
                    </a>
                  </div>
                </div>

                {/* Card Body */}
                <div
                  style={{
                    padding: '20px 22px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        color: '#ffffff',
                        fontSize: '17.5px',
                        fontWeight: '800',
                        margin: '0 0 6px 0',
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        color: '#94a3b8',
                        fontSize: '13px',
                        lineHeight: '1.55',
                        margin: '0 0 16px 0',
                      }}
                    >
                      {project.tagline}
                    </p>

                    {/* Feature Highlights */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
                      {project.features.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                          <CheckCircle2 size={14} color={project.accentColor} style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span style={{ color: '#cbd5e1', fontSize: '12px', lineHeight: '1.45' }}>
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Footer */}
                  <div
                    style={{
                      paddingTop: '14px',
                      borderTop: '1px solid #1a1638',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                    }}
                  >
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          backgroundColor: '#120e2e',
                          color: '#cbd5e1',
                          border: '1px solid #231f47',
                          borderRadius: '6px',
                          padding: '3px 8px',
                          fontSize: '11px',
                          fontWeight: '600',
                        }}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}