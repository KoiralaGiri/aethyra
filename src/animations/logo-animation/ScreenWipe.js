// ScreenWipe.js
import React from 'react';
import { motion } from 'framer-motion';

const ScreenWipe = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ y: '100%' }} // Start from the bottom
      animate={{ y: '0%' }} // Move to the top
      transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }} // Adjust timing and easing
      className="fixed top-0 left-0 w-full h-full bg-black z-50"
      onAnimationComplete={onComplete} // Trigger the onComplete callback when animation ends
    />
  );
};

export default ScreenWipe;
