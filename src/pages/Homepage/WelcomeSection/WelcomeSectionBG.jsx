import React, { useState, useEffect } from 'react';
import WelcomeSection from './WelcomeSection';
import styled from 'styled-components';
import 'src/vendors/vanta.globe.min.js';

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

  useEffect(() => {
    const globeEffect = window.VANTA.GLOBE({
      el: "#globe-background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
      color: 0xff6f61,
      color2: 0xffffff,
      backgroundColor: 0x1a1147,
      size: 1.5,
      points: 12,
      maxDistance: 20,
      spacing: 15,
      showDots: true,
    });

    return () => {
      if (globeEffect) globeEffect.destroy();
    };
  }, []);

  return (
    <Container>
      <BackgroundContainer>
        <GlobeWrapper 
          id="globe-background"
          style={{
            opacity: 1 - scrollProgress * 1.5
          }}
        />
        <GradientOverlay 
          style={{
            opacity: scrollProgress
          }}
        />
      </BackgroundContainer>
      
      <ContentContainer>
        <WelcomeSection />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #1a1147;
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  clip-path: inset(0);
  contain: strict;
`;

const GlobeWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease-out;
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 45vh;
  background: linear-gradient(
    to bottom,
    rgba(26, 17, 71, 0) 0%,
    rgba(26, 17, 71, 0.5) 30%,
    rgba(26, 17, 71, 0.8) 50%,
    rgba(26, 17, 71, 1) 70%
  );
  pointer-events: none;
  transform: translateZ(0);
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const SVGTransition = styled.div`
  position: relative;
  width: 100%;
  background-color: #266dd3;
  overflow: hidden;
  z-index: 2;
`;

export default WelcomeSectionBG;
