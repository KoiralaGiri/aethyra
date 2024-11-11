import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MorphingStairAnimation = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showMorph, setShowMorph] = useState(false);

  // Color array from darkest (top) to lightest (bottom) with sky blue tints
  const colors = [
    '#1d201f', // Darkest at top
    '#2d3640',
    '#3b4d61',
    '#4a6487',
    '#5c7aa8',
    '#7291c7',
    '#89a8e6'  // Lightest sky blue at bottom
  ];

  const stairs = [
    { width: 20, color: colors[0] },
    { width: 35, color: colors[1] },
    { width: 50, color: colors[2] },
    { width: 65, color: colors[3] },
    { width: 80, color: colors[4] },
    { width: 100, color: colors[5] },
    { width: 120, color: colors[6] }
  ];

  const springs = {
    gentle: {
      type: "spring",
      stiffness: 180,
      damping: 12
    },
    bouncy: {
      type: "spring",
      stiffness: 300,
      damping: 10
    },
    swift: {
      type: "spring",
      stiffness: 400,
      damping: 15
    }
  };

  const stairVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: 100,
      scaleX: 0,
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scaleX: 1,
      transition: {
        x: {
          ...springs[i % 2 === 0 ? 'swift' : 'bouncy'],
          duration: 0.3,
          delay: 0.35 + (i * 0.05)
        },
        opacity: {
          duration: 0.2,
          delay: 0.35 + (i * 0.05)
        },
        scaleX: {
          ...springs.gentle,
          duration: 0.3,
          delay: 0.35 + (i * 0.05)
        }
      }
    }),
    exit: (i) => ({
      opacity: 0,
      filter: 'blur(10px)',
      x: -50,
      transition: {
        duration: 0.5,
        delay: (stairs.length - i) * 0.05,
        ease: "easeInOut"
      }
    })
  };

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 350);

    const morphTimer = setTimeout(() => {
      setShowMorph(true);
    }, 2350);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(morphTimer);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-black">
      <div className="relative w-[120px] h-[140px]">
        <AnimatePresence mode="wait">
          {startAnimation && !showMorph && (
            <>
              {stairs.map((stair, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={stairVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute"
                  style={{
                    width: `${stair.width}px`,
                    height: '16px',
                    backgroundColor: stair.color,
                    borderRadius: '4px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Simpler, flatter shadow
                    transformOrigin: 'right',
                    right: 0,
                    top: `${i * 20}px`,
                    transform: `scale(${1 - i * 0.02}) translateZ(${i * 2}px)`,
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showMorph && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <svg id="filters" className="hidden">
                <defs>
                  <filter id="threshold">
                    <feColorMatrix
                      in="SourceGraphic"
                      type="matrix"
                      values="1 0 0 0 0
                             0 1 0 0 0
                             0 0 1 0 0
                             0 0 0 255 -140"
                    />
                  </filter>
                </defs>
              </svg>
              <div 
                className="w-full h-full"
                style={{ filter: 'url(#threshold) blur(0.6px)' }}
              >
                <span className="absolute w-full text-center text-white opacity-0">
                  {/* Morphing text content */}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MorphingStairAnimation;