import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  disableRemoveClass?: boolean; // New prop to disable removing the "on-screen" class
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, disableRemoveClass }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const shouldRemoveClass = !disableRemoveClass && !inView; // Check if the "on-screen" class should be removed

  return React.cloneElement(children as React.ReactElement, {
    className: `${(children as React.ReactElement).props.className} animate ${shouldRemoveClass ? '' : 'on-screen'}`,
    ref,
  });
};

export default AnimateOnScroll;
