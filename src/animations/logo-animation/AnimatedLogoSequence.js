import React, { useState, useEffect } from 'react';
import IconAnimation from '../IconAnimation';
import LogoAnimationAethyra from './LogoAnimationAethyra';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedLogoSequence = ({ onIntroComplete }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [sequence, setSequence] = useState('icon'); // States: 'icon', 'logo', 'complete'
  const [unmountComponents, setUnmountComponents] = useState(false);

  // Duration of IconAnimation in milliseconds
  const iconAnimationDuration = 3000;

  useEffect(() => {
    // Check if the user has already seen the animation
    const hasSeenAnimation = localStorage.getItem('hasSeenAnimation');
    
    if (hasSeenAnimation) {
      // If animation has already been seen, skip it and mark as complete
      onIntroComplete();
      setUnmountComponents(true);
      return;
    }
    
    // If not seen, start the animation sequence
    if (sequence === 'icon') {
      const timer = setTimeout(() => {
        setSequence('logo');
        setShowLogo(true);
      }, iconAnimationDuration);

      return () => clearTimeout(timer);
    }
  }, [sequence, onIntroComplete]);

  const handleLogoComplete = () => {
    setSequence('complete');
    setUnmountComponents(true);

    // Save to localStorage to prevent animation from replaying in future sessions
    localStorage.setItem('hasSeenAnimation', 'true');

    // Reduced delay from 1500ms to 300ms for faster transition
    setTimeout(() => {
      if (onIntroComplete) {
        onIntroComplete();
      }
    }, 300); // Much shorter delay for snappier transition
  };

  // If components should be unmounted, render nothing
  if (unmountComponents) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={sequence}
        className="h-screen w-full flex items-center justify-center bg-black"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }} // Reduced from 0.5 to 0.3 for faster fade
      >
        {sequence === 'icon' && <IconAnimation />}
        {sequence === 'logo' && (
          <LogoAnimationAethyra onComplete={handleLogoComplete} />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedLogoSequence;
