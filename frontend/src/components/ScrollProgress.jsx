import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Fixed Progress Line */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #915eff, #00cea8)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 99999,
          boxShadow: '0 0 10px rgba(0, 206, 168, 0.8)',
        }}
      />

      {/* Floating Back to Top Trigger */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.1, y: -2 }}
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: '#120e2e',
              border: '1px solid rgba(0, 206, 168, 0.4)',
              color: '#00cea8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 206, 168, 0.2)',
              zIndex: 999,
            }}
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}