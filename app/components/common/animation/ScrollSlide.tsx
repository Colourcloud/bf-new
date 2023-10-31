'use client'

import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollSlideProps {
  children: ReactNode;
}

const ScrollSlide: React.FC<ScrollSlideProps> = ({ children }) => {
  const [translateXValue, setTranslateXValue] = useState(-150);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (ref.current) {
      const boundingRect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      if (boundingRect.top <= windowHeight && boundingRect.bottom >= 0) {
        // Calculate the percentage of the element that is visible
        const visiblePercentage = (windowHeight - boundingRect.top) / windowHeight;
        const value = Math.max(-150, -150 + visiblePercentage * 150);
        setTranslateXValue(value);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call it once initially to set the initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const style = {
    transform: `translateX(${translateXValue}px)`,
    transition: 'transform 0.3s ease-out',
  };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};

export default ScrollSlide;

