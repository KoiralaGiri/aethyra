import React, { useState } from 'react';
import AnimatedLogoSequence from './animations/logo-animation/AnimatedLogoSequence';
import WelcomeSection from './pages/Homepage/WelcomeSection/WelcomeSection';
import MegaMenuNavbar from './components/MegaMenuNavbar';
import WelcomeSectionTransition from './pages/Homepage/SVG&Sponsor/WelcomeSectionTransition';

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  return (
    <div className="w-full min-h-screen bg-black relative">
      {!introComplete && (
        <AnimatedLogoSequence onIntroComplete={handleIntroComplete} />
      )}
      
      {introComplete && (
        <>
          <MegaMenuNavbar />
          <WelcomeSection />
          <WelcomeSectionTransition />
        </>
      )}
    </div>
  );
};

export default App;