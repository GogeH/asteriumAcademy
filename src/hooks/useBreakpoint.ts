'use client';

import { useEffect, useState } from 'react';
import { BREAKPOINTS } from '@/constants/breakpoints';
import { TSize } from '@/types/size';

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<TSize | null>(null);

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;

      if (width >= BREAKPOINTS.desktop) {
        setBreakpoint('DESKTOP');
      } else if (width >= BREAKPOINTS.tablet) {
        setBreakpoint('TABLET');
      } else {
        setBreakpoint('MOBILE');
      }
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);

    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  return breakpoint;
};
