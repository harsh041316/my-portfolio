import React, { useRef, useState } from 'react';
import { Globe, Code, Server, Database, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Frontend Engineering",
    description: "Responsive, dynamic, and accessible interfaces crafted with React, Vite, and modern CSS architecture.",
    icon: <Globe size={32} color="#22d3ee" />,
    accent: "#22d3ee",
  },
  {
    title: "React & State UI",
    description: "Predictable state management, custom hooks, component modularity, and smooth Framer Motion interactions.",
    icon: <Code size={32} color="#c084fc" />,
    accent: "#c084fc",
  },
  {
    title: "Backend API Systems",
    description: "Robust RESTful APIs, routing controllers, middleware security, and authentication built on Node.js and Express.",
    icon: <Server size={32} color="#34d399" />,
    accent: "#34d399",
  },
  {
    title: "Database & Modeling",
    description: "Document schemas, relationships, indexing, and scalable queries designed using MongoDB and Mongoose.",
    icon: <Database size={32} color="#fbbf24" />,
    accent: "#fbbf24",
  },
];

function TiltCard({ service }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTransform(`perspective(1000px) rotateX(${-y * 0.08}deg) rotateY(${x * 0.08}deg) translateY(-6px)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)');
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform,
        transition: 'transform 0.15s ease-out, border-color 0.2s ease, box-shadow 0.2s ease',
        backgroundColor: '#151030',
        border: `1px solid ${isHovered ? service.accent : '#232042'}`,
        borderRadius: '20px',
        padding: '32px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: isHovered
          ? `0 14px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${service.accent}25`
          : '0 10px 25px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer',
        boxSizing: 'border-box',
        minHeight: '260px',
        justifyContent: 'space-between',
      }}
    >
      {/* Icon Badge */}
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          backgroundColor: '#100d25',
          border: '1px solid #2a2845',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
          transition: 'transform 0.2s ease',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        {service.icon}
      </div>

      {/* Content */}
      <div>
        <h3
          style={{
            color: '#ffffff',
            fontSize: '19px',
            fontWeight: '700',
            margin: '0 0 10px 0',
            letterSpacing: '-0.3px',
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            color: '#aaa6c3',
            fontSize: '13.5px',
            lineHeight: '1.6',
            margin: 0,
          }}
        >
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function Overview() {
  return (
    <section id="about" style={{ width: '100%', scrollMarginTop: '100px' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(145, 94, 255, 0.12)',
            border: '1px solid rgba(145, 94, 255, 0.3)',
            color: '#915eff',
            fontSize: '12px',
            fontWeight: '600',
            marginBottom: '12px',
          }}
        >
          <Sparkles size={14} />
          <span>Core Competencies</span>
        </div>
        <p
          style={{
            color: '#aaa6c3',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '12px',
            fontWeight: '600',
            margin: '0 0 6px 0',
          }}
        >
          Introduction
        </p>
        <h2
          style={{
            color: '#ffffff',
            fontSize: '42px',
            fontWeight: '900',
            margin: 0,
            letterSpacing: '-0.5px',
          }}
        >
          Overview.
        </h2>
        <p
          style={{
            color: '#aaa6c3',
            fontSize: '16px',
            lineHeight: '1.6',
            maxWidth: '740px',
            marginTop: '12px',
          }}
        >
          I specialize in building full-stack JavaScript architectures—from modular React interfaces and state management systems to production REST APIs and scalable MongoDB database designs.
        </p>
      </div>

      {/* 4-Card Responsive Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {services.map((service) => (
          <TiltCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}