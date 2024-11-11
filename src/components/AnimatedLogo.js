import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedLogo.css';

const AnimatedLogo = () => {
  // Create elliptical orbital paths
  const createEllipticalPath = (radiusX, radiusY, rotation = 0) => {
    const centerX = 50;
    return `
      M ${centerX - radiusX}, 0
      a ${radiusX} ${radiusY} 0 1 0 ${radiusX * 2} 0
      a ${radiusX} ${radiusY} 0 1 0 -${radiusX * 2} 0
    `;
  };

  // Generate multiple paths with different sizes and orientations
  const orbitalPaths = [
    { path: createEllipticalPath(90, 25), delay: 0, duration: 15 },
    { path: createEllipticalPath(85, 20), delay: 3, duration: 18 },
    { path: createEllipticalPath(95, 30), delay: 6, duration: 20 },
    { path: createEllipticalPath(80, 15), delay: 9, duration: 16 },
    { path: createEllipticalPath(100, 35), delay: 12, duration: 22 },
  ];

  return (
    <div className="logo-container">
      <svg className="logo-svg" viewBox="0 -40 100 80">
        {/* Background particles */}
        {orbitalPaths.map((orbital, index) => (
          <motion.path
            key={`back-${index}`}
            d={orbital.path}
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.5, 0.5, 0],
              pathOffset: [0, 1]
            }}
            transition={{
              duration: orbital.duration,
              delay: orbital.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Logo text with enhanced size */}
        <motion.text
          x="50"
          y="0"
          className="logo-text"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          AETHYRA
        </motion.text>

        {/* Foreground particles */}
        {orbitalPaths.map((orbital, index) => (
          <motion.path
            key={`front-${index}`}
            d={orbital.path}
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.7, 0.7, 0],
              pathOffset: [0, 1]
            }}
            transition={{
              duration: orbital.duration,
              delay: orbital.delay + 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedLogo;