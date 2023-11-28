'use client'

import React, { ReactNode, useEffect, useRef, useState } from 'react';

type AnimatedTextProps = {
  children: React.ReactElement;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const text = React.isValidElement<{children?: ReactNode}>(children) ? children.props.children : null;


  if (typeof text !== 'string') {
    return children;
  }

  const animatedChildren = text.split(' ').map((word, index) => (
    <span 
      key={index}
      style={{
        display: 'inline-block',
        overflow: 'hidden'
      }}
    >
      <span 
        style={{
          display: 'inline-block',
          lineHeight: '1.1',
          transform: isVisible ? 'translateY(0px)' : 'translateY(100px)',
          transition: `transform 0.4s ${index * 0.05}s`,
          opacity: isVisible ? 1 : 0
        }}
      >
        {word}&nbsp;
      </span>
    </span>
  ));

  return React.cloneElement(children, { ...children.props, ref, children: animatedChildren });
};

export default AnimatedText;




