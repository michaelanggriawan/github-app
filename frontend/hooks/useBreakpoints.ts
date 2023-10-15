import useMedia from 'use-media';

const breakpoints = {
  small: '(max-width: 640px)',
  medium: '(min-width: 641px) and (max-width: 1024px)',
  large: '(min-width: 1025px)',
};

const useBreakpoints = () => {
  const isSmallScreen = useMedia(breakpoints.small);
  const isMediumScreen = useMedia(breakpoints.medium);
  const isLargeScreen = useMedia(breakpoints.large);

  return {
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
  };
};

export default useBreakpoints;
