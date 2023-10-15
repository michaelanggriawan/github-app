import { useEffect, useState } from 'react';

const breakpoints = {
  small: '(max-width: 640px)',
  medium: '(min-width: 641px) and (max-width: 1024px)',
  large: '(min-width: 1025px)',
};

const useBreakpoints = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.matchMedia(breakpoints.small).matches);
      setIsMediumScreen(window.matchMedia(breakpoints.medium).matches);
      setIsLargeScreen(window.matchMedia(breakpoints.large).matches);
    };

    // Check if we are on the client-side before attaching listeners
    if (typeof window !== 'undefined') {
      // Initial check
      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return {
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
  };
};

export default useBreakpoints;
