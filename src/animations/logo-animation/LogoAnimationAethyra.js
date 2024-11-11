import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingAnimation from './LoadingAnimation';
import ScreenWipe from './ScreenWipe';

const LogoAnimationAethyra = ({ companyName = "AETHYRA", onComplete }) => {
  const letters = companyName.split("");
  const [pathsDrawn, setPathsDrawn] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showScreenWipe, setShowScreenWipe] = useState(false);

  const logoColors = [
    '#1d201f', '#2d3640', '#3b4d61', '#4a6487',
    '#5c7aa8', '#7291c7', '#89a8e6'
  ];

  const letterOffsets = {
    A: { x: -1.9, y: -1.2 },
    E: { x: -9, y: 21.9 },
    T: { x: 15, y: 44 },
    H: { x: 5.5, y: 54 },
    Y: { x: 30, y: 42 },
    R: { x: 1, y: 31 },
    A2: { x: 1, y: 0 },
  };

  const svgVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      scale: 0.5 
    },
    visible: i => ({ 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        delay: i * 0.1 + 1.5,
        duration: 0.6
      }
    }),
    bounce: {
      y: [-8, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.6,
          ease: "easeInOut"
        }
      }
    }
  };

  const maskVariants = {
    hidden: { y: "100%" },
    visible: i => ({
      y: "0%",
      transition: {
        duration: 0.8,
        delay: i * 0.1 + 2
      }
    })
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPathsDrawn(true);
      setShowLoading(true);
    }, 2000);

    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
      setTimeout(() => setShowScreenWipe(true), 500);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(loadingTimer);
    };
  }, []);

  const handleWipeComplete = () => {
    setShowScreenWipe(false);
    if (onComplete) onComplete();
  };

  const getLetterPath = (letter) => {
    switch (letter) {
      case 'A':
        return "m 97.770703,115.6999 q 0.2032,-0.4572 0.6604,-0.762 0.508,-0.3556 1.0668,-0.3556 h 7.111997 q 0.508,0 0.9652,0.3556 0.508,0.3048 0.7112,0.762 l 14.8336,34.544 q 0.2032,0.4572 -0.1016,0.9652 -0.254,0.508 -1.0668,0.508 h -8.6868 q -0.5588,0 -1.0668,-0.3048 -0.4572,-0.3556 -0.7112,-0.8128 l -1.3716,-3.048 q -0.254,-0.4572 -0.762,-0.762 -0.4572,-0.3556 -0.9652,-0.3556 H 97.669103 q -0.5588,0 -1.0668,0.3556 -0.4572,0.3048 -0.6604,0.762 l -1.4224,3.048 q -0.2032,0.4572 -0.7112,0.8128 -0.4572,0.3048 -0.9652,0.3048 h -8.7376 q -0.254,0 -0.508,-0.1016 -0.3048,-0.1016 -0.4572,-0.3048 -0.2032,-0.2032 -0.254,-0.508 -0.0508,-0.3048 0.1524,-0.7112 z m 2.997197,22.098 h 4.5212 q 0.508,0 0.7112,-0.3048 0.254,-0.3556 0,-0.8128 -0.508,-1.27 -1.2192,-2.9464 -0.7112,-1.7272 -1.3208,-3.2004 -0.2032,-0.4572 -0.4572,-0.4572 -0.254,0 -0.4572,0.4572 l -2.54,6.1468 q -0.203197,0.4572 0,0.8128 0.2032,0.3048 0.762,0.3048 z";
      case 'E':
        return "m 103.69522,111.41503 v 2.1336 q 0,0.508 0.3556,0.8636 0.3556,0.3556 0.8636,0.3556 h 13.7668 q 0.508,0 0.8636,0.3556 0.3556,0.3556 0.3556,0.8636 v 7.0104 q 0,0.508 -0.3556,0.8636 -0.3556,0.3556 -0.8636,0.3556 h -13.7668 q -0.508,0 -0.8636,0.3556 -0.3556,0.3556 -0.3556,0.8636 v 1.9304 q 0,0.508 0.3556,0.8636 0.3556,0.3556 0.8636,0.3556 h 15.7988 q 0.508,0 0.8636,0.3556 0.3556,0.3556 0.3556,0.8636 v 7.0104 q 0,0.508 -0.3556,0.8636 -0.3556,0.3556 -0.8636,0.3556 h -25.8572 q -0.508,0 -0.8636,-0.3556 -0.3556,-0.3556 -0.3556,-0.8636 v -34.7472 q 0,-0.508 0.3556,-0.8636 0.3556,-0.3556 0.8636,-0.3556 h 25.8572 q 0.508,0 0.8636,0.3556 0.3556,0.3556 0.3556,0.8636 v 6.9088 q 0,0.508 -0.3556,0.8636 -0.3556,0.3556 -0.8636,0.3556 h -15.7988 q -0.508,0 -0.8636,0.3556 -0.3556,0.3556 -0.3556,0.8636 z";
      case 'T':
        return "m 107.21372,97.614573 h -7.112 q -0.508005,0 -0.863605,0.3556 -0.3556,0.3556 -0.3556,0.8636 v 25.399997 q 0,0.508 -0.3556,0.8636 -0.3048,0.3556 -0.8636,0.3556 h -7.62 q -0.508,0 -0.8636,-0.3556 -0.3556,-0.3556 -0.3556,-0.8636 V 98.833773 q 0,-0.508 -0.3556,-0.8636 -0.3048,-0.3556 -0.8636,-0.3556 h -7.2136 q -0.508,0 -0.8636,-0.3556 -0.3556,-0.3556 -0.3556,-0.8636 v -6.9088 q 0,-0.508 0.3556,-0.8636 0.3556,-0.3556 0.8636,-0.3556 h 26.822405 q 0.5588,0 0.8636,0.3556 0.3556,0.3556 0.3556,0.8636 v 6.9088 q 0,0.508 -0.3556,0.8636 -0.3048,0.3556 -0.8636,0.3556 z";
      case 'H':
        return "m 115.30637,83.375687 v 34.747203 q 0,0.508 -0.3556,0.8636 -0.3556,0.3556 -0.8636,0.3556 h -7.62 q -0.5588,0 -0.9144,-0.3556 -0.3048,-0.3556 -0.3048,-0.8636 v -10.8712 q 0,-0.508 -0.3556,-0.8636 -0.3556,-0.3556 -0.8636,-0.3556 H 93.563966 q -0.5588,0 -0.9144,0.3556 -0.3048,0.3556 -0.3048,0.8636 v 10.8712 q 0,0.508 -0.3556,0.8636 -0.3556,0.3556 -0.8636,0.3556 h -7.5692 q -0.5588,0 -0.9144,-0.3556 -0.3048,-0.3556 -0.3048,-0.8636 V 83.375687 q 0,-0.508 0.3048,-0.8636 0.3556,-0.3556 0.9144,-0.3556 h 7.5692 q 0.508,0 0.8636,0.3556 0.3556,0.3556 0.3556,0.8636 v 12.0396 q 0,0.508 0.3048,0.8636 0.3556,0.3556 0.9144,0.3556 h 10.464804 q 0.508,0 0.8636,-0.3556 0.3556,-0.3556 0.3556,-0.8636 v -12.0396 q 0,-0.508 0.3048,-0.8636 0.3556,-0.3556 0.9144,-0.3556 h 7.62 q 0.508,0 0.8636,0.3556 0.3556,0.3556 0.3556,0.8636 z";
      case 'Y':
        return "M 102.42032,90.459498 89.720321,111.0335 q -0.254,0.4572 -0.4572,1.1176 -0.2032,0.6604 -0.2032,1.1684 v 11.6332 q 0,0.508 -0.3556,0.8636 -0.3556,0.3556 -0.8636,0.3556 h -7.6708 q -0.508,0 -0.8636,-0.3556 -0.3556,-0.3556 -0.3556,-0.8636 v -11.5824 q 0,-0.508 -0.2032,-1.1684 -0.1524,-0.7112 -0.4064,-1.1176 -3.048,-5.2324 -6.2484,-10.2616 -3.1496,-5.029202 -6.2992,-10.363202 -0.254,-0.4572 -0.1016,-0.9144 0.1524,-0.508 0.6604,-0.508 h 9.0424 q 0.508,0 1.016,0.3048 0.5588,0.3048 0.8128,0.762 l 6.2484,10.871202 q 0.254,0.4064 0.6096,0.4064 0.3556,0 0.6096,-0.4064 l 6.1976,-10.871202 q 0.254,-0.4572 0.762,-0.762 0.5588,-0.3048 1.0668,-0.3048 h 9.143999 q 0.508,0 0.7112,0.3556 0.254,0.3556 -0.1524,1.0668 z";
      case 'R':
        return "m 96.056468,133.00172 h -7.5692 q -0.508,0 -0.8636,-0.3556 -0.3556,-0.3556 -0.3556,-0.8636 V 97.035325 q 0,-0.508 0.3556,-0.8636 0.3556,-0.3556 0.8636,-0.3556 h 15.798802 q 2.9464,0 5.4356,1.016 2.4892,0.9652 4.2164,2.7432 1.778,1.777995 2.7432,4.216395 1.016,2.4384 1.016,5.3848 0,1.6256 -0.4064,3.2512 -0.3556,1.5748 -1.0668,2.9972 -0.7112,1.4224 -1.6764,2.5908 -0.9652,1.1176 -2.1844,1.8796 -0.4064,0.3048 -0.5588,0.762 -0.1016,0.4064 0.2032,0.8128 1.9304,2.54 4.064,5.2324 2.1336,2.6924 3.81,4.9276 0.3048,0.4064 0.1524,0.9144 -0.1524,0.4572 -0.6604,0.4572 h -9.4488 q -0.508,0 -1.1176,-0.254 -0.5588,-0.3048 -0.8636,-0.7112 -1.6256,-2.1336 -3.2512,-4.318 -1.5748,-2.1844 -3.1496,-4.4196 -0.3048,-0.4064 -0.8636,-0.6604 -0.5588,-0.3048 -1.066803,-0.3048 h -1.1176 q -0.508,0 -0.8636,0.3556 -0.3556,0.3556 -0.3556,0.8636 v 8.2296 q 0,0.508 -0.355599,0.8636 -0.3556,0.3556 -0.8636,0.3556 z m 2.438399,-20.0152 h 5.384803 q 0.6096,0 1.27,-0.2032 0.6604,-0.254 1.2192,-0.7112 0.5588,-0.508 0.9144,-1.2192 0.3556,-0.7112 0.3556,-1.6764 0,-0.508 -0.2032,-1.1684 -0.1524,-0.7112 -0.6096,-1.3208 -0.4064,-0.6604 -1.1684,-1.0668 -0.7112,-0.4572 -1.778,-0.4572 h -5.384803 q -0.508,0 -0.8636,0.3556 -0.3556,0.3556 -0.3556,0.8636 v 5.3848 q 0,0.508 0.3556,0.8636 0.3556,0.3556 0.8636,0.3556 z";
      default:
        return "M0,0";
    }
  };

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="relative flex items-center justify-center space-x-4">
        {letters.map((letter, i) => {
          const offset = letterOffsets[letter] || { x: 0, y: 0 };
          const path = getLetterPath(letter); // Your existing getLetterPath function

          return (
            <div key={i} className="relative flex items-center justify-center">
              <motion.svg
                width="152"
                height="152"
                viewBox="80 88.34 45.7 100"
                className="absolute z-10"
                style={{
                  overflow: 'visible',
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(1.1009)`,
                }}
              >
                <defs>
                  <linearGradient id={`gradient-${i}`} gradientTransform="rotate(45)">
                    <stop offset="0%" stopColor={logoColors[i]} />
                    <stop offset="100%" stopColor={logoColors[(i + 1) % logoColors.length]} />
                  </linearGradient>
                  <mask id={`mask-${i}`}>
                    <motion.rect
                      x="80"
                      y="88.34"
                      width="45.7"
                      height="100"
                      fill="white"
                      variants={maskVariants}
                      initial="hidden"
                      animate={pathsDrawn ? "visible" : "hidden"}
                      custom={i}
                    />
                  </mask>
                </defs>

                <motion.path
                  d={path}
                  fill="none"
                  stroke={`url(#gradient-${i})`}
                  strokeWidth="1.5"
                  variants={svgVariants}
                  initial="hidden"
                  animate="visible"
                />

                <path
                  d={path}
                  fill={`url(#gradient-${i})`}
                  mask={`url(#mask-${i})`}
                  style={{
                    opacity: pathsDrawn ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}
                />
              </motion.svg>

              <motion.div
                className="relative z-20 text-[4rem] font-bold text-white"
                style={{
                  fontFamily: 'Heavitas, sans-serif',
                  transform: `translate(${offset.x}px, ${offset.y}px)`,
                }}
                variants={letterVariants}
                initial="hidden"
                animate={pathsDrawn ? ["visible", "bounce"] : "hidden"}
                custom={i}
              >
                {letter}
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="absolute" style={{ top: '58%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <LoadingAnimation visible={showLoading} />
      </div>

      {showScreenWipe && <ScreenWipe onComplete={handleWipeComplete} />}
    </div>
  );
};

export default LogoAnimationAethyra;