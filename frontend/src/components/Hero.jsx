import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Send, FileText, Cpu, Zap, Activity } from 'lucide-react';
import ResumeModal from './ResumeModal';

const roles = [
  'MERN Stack Developer',
  'Full-Stack Web Developer',
  'React & Node.js Builder',
  'MongoDB & Backend Architect',
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // 3D Card tilt physics
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { damping: 20, stiffness: 200 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    mouseX.set(clientX / width - 0.5);
    mouseY.set(clientY / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Interactive Digital Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      <section
        id="hero"
        style={{
          width: '100%',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          boxSizing: 'border-box',
          paddingTop: '20px',
          paddingBottom: '40px',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left: Introduction & Actions */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(0, 206, 168, 0.1)',
                border: '1px solid rgba(0, 206, 168, 0.3)',
                color: '#00cea8',
                fontSize: '12px',
                fontWeight: '600',
                marginBottom: '18px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#00cea8',
                  boxShadow: '0 0 8px #00cea8',
                }}
              />
              <span>Available for MERN & Full-Stack Roles</span>
            </div>

            <h1
              style={{
                color: '#ffffff',
                fontSize: 'clamp(38px, 5.5vw, 64px)',
                fontWeight: '900',
                lineHeight: '1.1',
                margin: '0 0 16px 0',
                letterSpacing: '-1px',
              }}
            >
              Hi, I'm{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #915eff 0%, #00cea8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Harsh Patel
              </span>
            </h1>

            <div
              style={{
                height: '38px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={roles[index]}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#cbd5e1',
                    fontSize: 'clamp(17px, 2.2vw, 22px)',
                    fontWeight: '700',
                  }}
                >
                  <Code2 size={20} color="#00cea8" />
                  <span>{roles[index]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            <p
              style={{
                color: '#aaa6c3',
                fontSize: '15.5px',
                lineHeight: '1.7',
                maxWidth: '540px',
                margin: '0 0 32px 0',
              }}
            >
              Passionate developer specializing in building scalable web applications using MongoDB, Express.js, React.js, and Node.js with clean database architecture.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <a
                href="#projects"
                style={{
                  backgroundColor: '#915eff',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '14px',
                  padding: '13px 24px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 10px 25px rgba(145, 94, 255, 0.4)',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>Explore Projects</span>
                <ArrowRight size={15} />
              </a>

              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                style={{
                  backgroundColor: 'rgba(0, 206, 168, 0.1)',
                  color: '#00cea8',
                  border: '1px solid rgba(0, 206, 168, 0.4)',
                  fontWeight: '700',
                  fontSize: '14px',
                  padding: '12px 22px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 20px rgba(0, 206, 168, 0.15)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#00cea8';
                  e.currentTarget.style.color = '#050816';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 206, 168, 0.1)';
                  e.currentTarget.style.color = '#00cea8';
                }}
              >
                <FileText size={16} />
                <span>Digital Resume</span>
              </button>

              <a
                href="#contact"
                style={{
                  backgroundColor: '#151030',
                  color: '#ffffff',
                  fontWeight: '600',
                  fontSize: '14px',
                  padding: '12px 22px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  border: '1px solid #2a2845',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#915eff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2a2845';
                }}
              >
                <span>Get in Touch</span>
                <Send size={14} />
              </a>
            </div>
          </div>

          {/* Right: Interactive Photo Frame with Updated Stack Badges */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              minHeight: '460px',
              perspective: '1200px',
            }}
          >
            {/* Ambient Radial Glow */}
            <div
              style={{
                position: 'absolute',
                width: '360px',
                height: '360px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(145, 94, 255, 0.45) 0%, rgba(0, 206, 168, 0.2) 60%, transparent 80%)',
                filter: 'blur(45px)',
                zIndex: 0,
              }}
            />

            {/* Orbit Lines */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                border: '1.5px dashed rgba(145, 94, 255, 0.35)',
                zIndex: 1,
              }}
            />

            {/* Tilt Photo Core */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                position: 'relative',
                zIndex: 2,
                width: '280px',
                height: '350px',
                borderRadius: '26px',
                padding: '3px',
                background: 'linear-gradient(135deg, #915eff 0%, rgba(30, 27, 75, 0.8) 50%, #00cea8 100%)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(145, 94, 255, 0.3)',
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: 'preserve-3d',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '23px',
                  overflow: 'hidden',
                  backgroundColor: '#0a081a',
                  position: 'relative',
                }}
              >
                <img
                  src="/profile.png"
                  alt="Harsh Patel"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 12%',
                    display: 'block',
                  }}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500';
                  }}
                />

                {/* Laser scan line animation */}
                <motion.div
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #00cea8, #915eff, transparent)',
                    boxShadow: '0 0 10px #00cea8',
                    pointerEvents: 'none',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10, 8, 26, 0.95) 0%, rgba(10, 8, 26, 0.25) 30%, transparent 60%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '16px',
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ color: '#ffffff', fontSize: '15px', fontWeight: '800', display: 'block' }}>Harsh Patel</span>
                      <span style={{ color: '#00cea8', fontSize: '11px', fontFamily: 'monospace' }}>sys.status // online</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(145, 94, 255, 0.2)',
                        border: '1px solid rgba(145, 94, 255, 0.4)',
                        color: '#915eff',
                        fontSize: '10px',
                        fontWeight: '700',
                        fontFamily: 'monospace',
                      }}
                    >
                      <Activity size={12} />
                      <span>99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Top-Left Pill: React & Node */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '20px',
                left: '-20px',
                backgroundColor: '#151030',
                border: '1px solid rgba(145, 94, 255, 0.5)',
                borderRadius: '14px',
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
                zIndex: 3,
              }}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', backgroundColor: '#100d25', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#915eff' }}>
                <Zap size={15} />
              </div>
              <div>
                <div style={{ color: '#ffffff', fontSize: '12px', fontWeight: '800' }}>React & Node</div>
                <div style={{ color: '#64748b', fontSize: '10px' }}>Full Stack MERN</div>
              </div>
            </motion.div>

            {/* Bottom-Right Pill: MongoDB & Express */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute',
                bottom: '15px',
                right: '-20px',
                backgroundColor: '#151030',
                border: '1px solid rgba(0, 206, 168, 0.5)',
                borderRadius: '14px',
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
                zIndex: 3,
              }}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', backgroundColor: '#100d25', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00cea8' }}>
                <Cpu size={15} />
              </div>
              <div>
                <div style={{ color: '#ffffff', fontSize: '12px', fontWeight: '800' }}>MongoDB & Express</div>
                <div style={{ color: '#64748b', fontSize: '10px' }}>RESTful APIs</div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}