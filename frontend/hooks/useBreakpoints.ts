import { useEffect, useState } from 'react';

const breakpoints = {
  small: '(max-width: 640px)',
  medium: '(min-width: 641px) and (max-width: 1024px)',
  large: '(min-width: 1025px)',
};

const useBreakpoints = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia(breakpoints.small).matches
  );
  const [isMediumScreen, setIsMediumScreen] = useState(
    window.matchMedia(breakpoints.medium).matches
  );
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia(breakpoints.large).matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.matchMedia(breakpoints.small).matches);
      setIsMediumScreen(window.matchMedia(breakpoints.medium).matches);
      setIsLargeScreen(window.matchMedia(breakpoints.large).matches);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
  };
};

export default useBreakpoints;
