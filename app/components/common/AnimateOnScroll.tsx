import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  disableRemoveClass?: boolean;
  threshold?: number; // New prop for threshold value
  rootMarginOffset?: number; // New prop for rootMargin offset value
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, disableRemoveClass, threshold = 0.3}) => {
  const [ref, inView] = useInView({
    threshold,
    rootMargin: `0px 0px 0px 0px`, // top-right-bottom-left with custom offset
  });

  const shouldRemoveClass = !disableRemoveClass && !inView;

  return React.cloneElement(children as React.ReactElement, {
    className: `${(children as React.ReactElement).props.className} animate ${shouldRemoveClass ? '' : 'on-screen'}`,
    ref,
  });
};

export default AnimateOnScroll;
