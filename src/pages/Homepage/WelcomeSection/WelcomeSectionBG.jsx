import React, { useState, useEffect } from 'react';
import WelcomeSection from './WelcomeSection';
import 'src/vendors/vanta.globe.min.js';  // Import the Vanta.globe script

const WelcomeSectionBG = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / windowHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background globe effect initialization
  useEffect(() => {
    // Initialize VANTA.GLOBE effect
    const globeEffect = window.VANTA.GLOBE({
      el: "#globe-background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      color: 0xff6f61,          // Main color of globe elements
      color2: 0xffffff,         // Secondary color of connections
      backgroundColor: 0x1a1147, // Background color
      size: 1.5,                // Size of globe points
      points: 12,               // Number of points in the globe effect
      maxDistance: 20,          // Max distance between points
      spacing: 15,              // Spacing of points
      showDots: true            // Show dots on the globe
    });

    return () => {
      if (globeEffect) globeEffect.destroy();
    };
  }, []);

  return (
    <div className="relative">
      {/* Globe background */}
      <div 
        id="globe-background"
        className="fixed top-0 left-0 w-full h-screen z-0"
        style={{
          opacity: 1 - scrollProgress * 1.5 // Fade out faster than scroll
        }}
      />

      {/* Gradient overlay that becomes visible as you scroll */}
      <div 
        className="fixed top-0 left-0 w-full h-screen z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(26, 17, 71, 0) 0%, rgba(26, 17, 71, 1) 100%)',
          opacity: scrollProgress
        }}
      />

      {/* Welcome section */}
      <div className="relative z-10">
        <WelcomeSection />
      </div>

      {/* Next section */}
      <div 
        className="relative z-10 min-h-screen bg-[#1a1147] flex items-center justify-center"
        style={{
          marginTop: '100vh' // Push the next section below the welcome section
        }}
      >
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Next Section</h2>
          <p className="text-xl">Your content goes here</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSectionBG;
