--- src/components/OpeningAnimation.tsx (原始)
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MandalaDecoration, OrnateDivider } from './Decorations';

interface OpeningAnimationProps {
  onComplete: () => void;
}

const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setPhase(4), 3500),
      setTimeout(() => setPhase(5), 4500),
      setTimeout(() => onComplete(), 5500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 5 && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-vintage-dark" />

          {/* Mandala rotating in background */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <MandalaDecoration size={600} />
          </motion.div>

          {/* Curtain panels */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-vintage-maroon via-vintage-brown to-vintage-dark z-10"
            animate={{ x: phase >= 4 ? '-100%' : '0%' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-vintage-dark opacity-50" />
            {/* Vertical decorative lines */}
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="absolute top-0 bottom-0 w-px bg-vintage-gold opacity-10"
                style={{ left: `${20 + i * 15}%` }} />
            ))}
          </motion.div>

          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-vintage-maroon via-vintage-brown to-vintage-dark z-10"
            animate={{ x: phase >= 4 ? '100%' : '0%' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-vintage-dark opacity-50" />
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="absolute top-0 bottom-0 w-px bg-vintage-gold opacity-10"
                style={{ right: `${20 + i * 15}%` }} />
            ))}
          </motion.div>

          {/* Central content */}
          <div className="relative z-20 text-center px-4">
            {/* Top ornament */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: phase >= 1 ? 1 : 0, scale: phase >= 1 ? 1 : 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <div className="flex justify-center">
                <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                  <path d="M40 5 L45 15 L55 12 L50 22 L60 25 L50 28 L55 38 L45 32 L40 40 L35 32 L25 38 L30 28 L20 25 L30 22 L25 12 L35 15 Z"
                    stroke="#C5943A" strokeWidth="1.5" fill="none" />
                  <circle cx="40" cy="22" r="4" fill="#C5943A" opacity="0.6" />
                </svg>
              </div>
            </motion.div>

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 30 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="font-[Cinzel_Decorative] text-4xl md:text-6xl lg:text-7xl text-vintage-gold tracking-wider mb-2">
                Bengaluru
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: phase >= 3 ? 1 : 0, y: phase >= 3 ? 0 : 20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="my-4">
                <OrnateDivider className="max-w-md mx-auto" />
              </div>
              <p className="font-[Cormorant_Garamond] text-xl md:text-2xl text-vintage-cream italic tracking-wide">
                The Vintage Heritage Trail
              </p>
              <p className="font-[Cormorant_Garamond] text-base md:text-lg text-vintage-gold/60 mt-3 tracking-widest uppercase">
                Twenty Treasures of the Garden City
              </p>
            </motion.div>

            {/* Bottom ornament */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: phase >= 3 ? 1 : 0, scale: phase >= 3 ? 1 : 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="mt-8"
            >
              <div className="flex justify-center gap-2">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-vintage-gold self-center" />
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <rect x="5" y="5" width="20" height="20" stroke="#C5943A" strokeWidth="1" fill="none" transform="rotate(45 15 15)" />
                  <rect x="8" y="8" width="14" height="14" stroke="#C5943A" strokeWidth="0.5" fill="none" transform="rotate(45 15 15)" />
                  <circle cx="15" cy="15" r="2" fill="#C5943A" />
                </svg>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-vintage-gold self-center" />
              </div>
            </motion.div>
          </div>

          {/* Floating particles */}
          {phase >= 2 && Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-vintage-gold rounded-full"
              initial={{
                opacity: 0,
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [null, Math.random() * -200 - 100]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningAnimation;


+++ src/components/OpeningAnimation.tsx (修改后)
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MandalaDecoration, OrnateDivider } from './Decorations';

interface OpeningAnimationProps {
  onComplete: () => void;
}

const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setPhase(3), 1300),
      setTimeout(() => setPhase(4), 2000),
      setTimeout(() => onComplete(), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-vintage-dark" />

          {/* Mandala rotating in background */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <MandalaDecoration size={500} />
          </motion.div>

          {/* Curtain panels */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-vintage-maroon via-vintage-brown to-vintage-dark z-10"
            animate={{ x: phase >= 3 ? '-100%' : '0%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-vintage-dark opacity-50" />
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="absolute top-0 bottom-0 w-px bg-vintage-gold opacity-10"
                style={{ left: `${20 + i * 15}%` }} />
            ))}
          </motion.div>

          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-vintage-maroon via-vintage-brown to-vintage-dark z-10"
            animate={{ x: phase >= 3 ? '100%' : '0%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-vintage-dark opacity-50" />
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="absolute top-0 bottom-0 w-px bg-vintage-gold opacity-10"
                style={{ right: `${20 + i * 15}%` }} />
            ))}
          </motion.div>

          {/* Central content */}
          <div className="relative z-20 text-center px-4">
            {/* Top ornament */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: phase >= 1 ? 1 : 0, scale: phase >= 1 ? 1 : 0.5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-4"
            >
              <div className="flex justify-center">
                <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                  <path d="M30 3L34 11L42 9L38 17L46 20L38 23L42 30L34 26L30 30L26 26L18 30L22 23L14 20L22 17L18 9L26 11Z"
                    stroke="#C5943A" strokeWidth="1.5" fill="none" />
                  <circle cx="30" cy="17" r="3" fill="#C5943A" opacity="0.6" />
                </svg>
              </div>
            </motion.div>

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="font-[Cinzel_Decorative] text-4xl md:text-6xl lg:text-7xl text-vintage-gold tracking-wider mb-2">
                Bengaluru
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 15 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <div className="my-3">
                <OrnateDivider className="max-w-sm mx-auto" />
              </div>
              <p className="font-[Cormorant_Garamond] text-lg md:text-2xl text-vintage-cream italic tracking-wide">
                The Vintage Heritage Trail
              </p>
              <p className="font-[Cormorant_Garamond] text-sm md:text-base text-vintage-gold/60 mt-2 tracking-widest uppercase">
                Twenty Treasures of the Garden City
              </p>
            </motion.div>
          </div>

          {/* Floating particles */}
          {phase >= 2 && Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-vintage-gold rounded-full"
              initial={{
                opacity: 0,
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [null, Math.random() * -200 - 100]
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random() * 1
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningAnimation;
