import { useState, useEffect, RefObject } from 'react';

export function useScroll(ref: RefObject<HTMLElement | null>, threshold: number = 100) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setIsScrolled(ref.current.scrollTop > threshold);
      }
    };

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref, threshold]);

  return isScrolled;
}
