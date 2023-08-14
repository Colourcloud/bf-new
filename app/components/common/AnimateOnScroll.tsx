import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  threshold?: number; // New prop for threshold value
  rootMarginOffset?: number; // New prop for rootMargin offset value
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, threshold = 0.3, rootMarginOffset = 0 }) => {
  const [ref, inView] = useInView({
    threshold,
    rootMargin: `200px 0px -200px 0px`, // top-right-bottom-left with custom offset
  });

  const shouldAddOnScreenClass = inView;

  return React.cloneElement(children as React.ReactElement, {
    className: `${(children as React.ReactElement).props.className} animate ${shouldAddOnScreenClass ? 'on-screen' : ''}`,
    ref,
  });
};

export default AnimateOnScroll;
