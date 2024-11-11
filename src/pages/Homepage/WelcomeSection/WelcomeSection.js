import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
import { WordPullUp } from './WordPullUp';
import { motion, AnimatePresence } from 'framer-motion';
import 'src/vendors/vanta.globe.min.js';

const WelcomeSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showDevelopment, setShowDevelopment] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [globeVisible, setGlobeVisible] = useState(false);
  const [backgroundBlur, setBackgroundBlur] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const globeRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const updateViewportDimensions = () => {
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
    };

    updateViewportDimensions();
    window.addEventListener('resize', updateViewportDimensions);
    return () => window.removeEventListener('resize', updateViewportDimensions);
  }, []);

  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      setGlobeVisible(true);

      const blurSteps = 20;
      for (let i = 0; i <= blurSteps; i++) {
        await new Promise(resolve => setTimeout(resolve, 30));
        setBackgroundBlur(i / blurSteps);
      }

      const opacitySteps = 20;
      for (let i = 0; i <= opacitySteps; i++) {
        await new Promise(resolve => setTimeout(resolve, 30));
        setBackgroundOpacity(i / opacitySteps);
      }

      await new Promise(resolve => setTimeout(resolve, 300));
      setShowDevelopment(true);

      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowWelcome(true);

      await new Promise(resolve => setTimeout(resolve, 300));
      setShowDescription(true);
    };

    sequence();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const progress = Math.min(scrollY / (windowHeight * 0.5), 1);
      setScrollProgress(progress);
      
      const globeOpacity = Math.max(0, 1 - (scrollY / (windowHeight * 0.3)));
      if (globeRef.current) {
        globeRef.current.style.opacity = globeOpacity;
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (globeVisible && globeRef.current && viewportHeight > 0) {
      const globeEffect = window.VANTA.GLOBE({
        el: "#globe-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: viewportHeight,
        minWidth: viewportWidth,
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
    }
  }, [globeVisible, viewportHeight, viewportWidth]);

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
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
    hidden: { y: 20, opacity: 0 },
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
    hidden: { y: 40, opacity: 0 },
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
    "that aren't just functional — ",
    "they're unforgettable."
  ];

  return (
    <SectionWrapper ref={sectionRef}>
      <GlobeBackgroundContainer
        style={{
          transform: `translateY(${Math.min(0, -scrollProgress * viewportHeight)}px)`
        }}
      >
        <GlobeBackground 
          ref={globeRef}
          id="globe-background" 
          scrollProgress={scrollProgress}
        />
      </GlobeBackgroundContainer>

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
                      .typeString('Welcome to Aethyra')
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

      <GradientFade />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  position: relative;
  background: #1a1147;
  min-height: 70vh;
  overflow: hidden;
  z-index: 1;
`;

const GlobeBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  will-change: transform;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30vh;
    background: linear-gradient(to bottom,
      rgba(26, 17, 71, 0) 0%,
      rgba(26, 17, 71, 0.8) 70%,
      rgba(26, 17, 71, 1) 100%
    );
    pointer-events: none;
  }
`;

const GlobeBackground = styled.div`
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease-out;
  background-color: #1a1147;
  z-index: 1;
`;

const GradientFade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30vh;
  background: linear-gradient(
    to bottom,
    rgba(26, 17, 71, 0) 0%,
    rgba(26, 17, 71, 0.6) 30%,
    rgba(26, 17, 71, 1) 100%
  );
  z-index: 3;
`;

const ContentWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const CenteredContent = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  max-width: 800px;
  height: 400px;
  overflow: visible;
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
`;

export default WelcomeSection;
