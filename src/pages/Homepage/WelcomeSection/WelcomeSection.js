// src/pages/Homepage/WelcomeSection/WelcomeSection.js

import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
import { WordPullUp } from './WordPullUp';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import 'src/vendors/vanta.globe.min.js';

const WelcomeSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showDevelopment, setShowDevelopment] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setShowDevelopment(true), 300);    
    setTimeout(() => setShowWelcome(true), 1500);       
    setTimeout(() => setShowDescription(true), 2500);   
  }, []);

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
      minHeight: 200.00,
      minWidth: 200.00,
      color: 0xff6f61,
      color2: 0xffffff,
      size: 1.2,
      backgroundColor: 0x1a1147,
      points: 15,
      maxDistance: 20,
      spacing: 15,
      showDots: true,
      scale: 1,
    });

    return () => {
      if (globeEffect) globeEffect.destroy();
    };
  }, []);

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 40
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
      }
    }
  };

  const descriptionVariants = {
    hidden: { 
      y: 20,
      opacity: 0
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.08
      }
    }
  };

  const wordVariants = {
    hidden: { 
      y: 40,
      opacity: 0
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const words = [
    "We design solutions ",
    "that aren't just functional—",
    "they're unforgettable."
  ];

  return (
    <SectionWrapper>
      <GlobeBackground id="globe-background" scrollProgress={scrollProgress} />
      <GradientOverlay scrollProgress={scrollProgress} />

      <ContentWrapper>
        <CenteredContent>
          <style>
            {`
              @font-face {
                font-family: 'Silk Serif';
                src: url('/src/assets/fonts/Silk-Serif-Extra-Light.ttf') format('truetype');
                font-weight: 200;
                font-style: normal;
              }
              
              @font-face {
                font-family: 'HK Grotesk';
                src: url('/src/assets/fonts/hk-grotesk/HKGrotesk-Black.otf') format('opentype');
                font-weight: 900;
                font-style: normal;
              }

              @font-face {
                font-family: 'Nestor';
                src: url('src/assets/fonts/Nestor.otf') format('opentype');
                font-weight: normal;
                font-style: normal;
                font-display: swap;
              }
              
              .silk-serif {
                font-family: 'Silk Serif', serif;
                font-weight: 200;
                letter-spacing: -0.02em;
                line-height: 1.1;
              }

              .hk-grotesk {
                font-family: 'HK Grotesk', sans-serif;
                font-weight: 900;
                letter-spacing: -0.01em;
                line-height: 1.2;
              }

              .nestor {
                font-family: 'Nestor', sans-serif;
                line-height: 1.4;
                letter-spacing: -0.01em;
              }

              .Typewriter__cursor {
                font-weight: 100;
                color: white;
                opacity: 1;
                transition: opacity 0.3s ease;
              }
            `}
          </style>

          <DevelopmentContainer>
            {showDevelopment && (
              <WordPullUp 
                words="DEVELOPMENT IN A NEW WAY" 
                className="hk-grotesk text-white"
                style={{ fontSize: "3rem", lineHeight: "1", color: "white" }}
                wrapperFramerProps={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                  },
                }}
                framerProps={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
              />
            )}
          </DevelopmentContainer>

          <WelcomeContainer>
            {showWelcome && (
              <div className="silk-serif text-white" style={{ fontSize: "3.2rem", color: "white" }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Welcome to, Aethyra')
                      .start();
                  }}
                  options={{
                    delay: 30,
                    cursor: '|',
                    wrapperClassName: 'silk-serif',
                    cursorClassName: 'Typewriter__cursor'
                  }}
                />
              </div>
            )}
          </WelcomeContainer>

          <DescriptionContainer>
            <AnimatePresence>
              {showDescription && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="nestor text-white text-center"
                  style={{ 
                    fontSize: "0.95rem", 
                    lineHeight: "1.2",
                    fontFamily: "Nestor, sans-serif",
                    whiteSpace: "nowrap",
                    overflow: "visible",
                    width: "100%",
                    position: "relative",
                    padding: "20px 0"
                  }}
                >
                  <motion.div
                    variants={descriptionVariants}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3em',
                      position: 'relative',
                      overflow: 'visible'
                    }}
                  >
                    {words.map((word, i) => (
                      <motion.span
                        key={i}
                        variants={wordVariants}
                        style={{
                          color: 'white',
                          display: 'inline-block',
                          position: 'relative'
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </DescriptionContainer>
        </CenteredContent>
      </ContentWrapper>

      <NextSection>
        <div className="text-gray-800 text-center">
          <h2 className="text-4xl font-bold mb-4">Next Section</h2>
          <p className="text-xl">Your content goes here</p>
        </div>
      </NextSection>
    </SectionWrapper>
  );
};

export default WelcomeSection;

const SectionWrapper = styled.div`
  position: relative;
`;

const GlobeBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  opacity: ${({ scrollProgress }) => Math.max(0, 1 - scrollProgress * 0.8)};
  transform: scale(${({ scrollProgress }) => 1 + scrollProgress * 0.05});
`;

const GradientOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, ${({ scrollProgress }) => scrollProgress * 0.3}) 45%,
    rgba(255, 255, 255, ${({ scrollProgress }) => scrollProgress * 0.6}) 65%,
    rgba(255, 255, 255, ${({ scrollProgress }) => scrollProgress * 0.9}) 85%,
    rgba(255, 255, 255, ${({ scrollProgress }) => scrollProgress}) 100%
  );
  opacity: ${({ scrollProgress }) => scrollProgress};
`;

const ContentWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const CenteredContent = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  max-width: 800px;
  height: 400px;
  overflow: visible;
`;

const WelcomeContainer = styled.div`
  position: absolute;
  top: 17%;
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  &:empty {
    height: 80px;
  }
`;

const DevelopmentContainer = styled.div`
  position: absolute;
  top: 45%;
  width: 100%;
  min-height: 80px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  &:empty {
    height: 80px;
  }
`;

const DescriptionContainer = styled.div`
  position: absolute;
  top: 47%;
  width: 100%;
  min-height: 80px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  &:empty {
    min-height: 80px;
  }
`;

const NextSection = styled.div`
  position: relative;
  z-index: 10;
  min-height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;