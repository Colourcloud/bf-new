import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimateOnScrollProps {
  children: React.ReactNode;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return React.cloneElement(children as React.ReactElement, {
    className: `${(children as React.ReactElement).props.className} animate ${inView ? 'on-screen' : ''}`,
    ref,
  });
};

export default AnimateOnScroll;
