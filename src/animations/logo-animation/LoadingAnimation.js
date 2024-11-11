import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LoadingAnimation = ({ visible, onComplete }) => {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    // Fetch JSON from the public folder
    fetch('/ani-icons/loadinganimation.json')
      .then(response => response.json())
      .then(animationData => {
        // Initialize the Lottie animation with fetched data
        animationInstance.current = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: 'svg',
          loop: true,
          autoplay: false, // Prevent automatic start
          animationData: animationData, // Use the fetched JSON data
        });
      })
      .catch(error => {
        console.error("Error loading animation JSON:", error);
      });

    // Cleanup on unmount
    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (animationInstance.current) {
      if (visible) {
        // Reset the animation to the first frame and start playing
        animationInstance.current.goToAndPlay(0, true);
      } else {
        // Delay fade-out to allow animation to complete visually
        const fadeTimeout = setTimeout(() => {
          animationInstance.current.stop();
          if (onComplete) onComplete(); // Callback for further actions after animation stops
        }, 1200); // Adjust delay as needed for animation to feel complete

        return () => clearTimeout(fadeTimeout);
      }
    }
  }, [visible, onComplete]);

  return (
    <div
      ref={animationContainer}
      style={{
        width: 150,
        height: 150,
        opacity: visible ? 1 : 0,
        transition: 'opacity 1s ease-in-out', // Adjusted to a longer fade for smoother transition
      }}
    />
  );
};

export default LoadingAnimation;
