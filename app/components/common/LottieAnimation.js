'use client'; 

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const LottieAnimation = ({ animationUrl, loop = true, autoplay = true }) => {
  const containerRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);
  const animationInstanceRef = useRef(null);  // Keep a reference to the animation instance

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fetchAnimationData = async () => {
        try {
          const response = await fetch(animationUrl);
          const data = await response.json();
          setAnimationData(data);
        } catch (error) {
          console.error('Error fetching animation data:', error);
        }
      };

      fetchAnimationData();
    }
  }, [animationUrl]);

  useEffect(() => {
    if (typeof window !== 'undefined' && animationData) {
      import('lottie-web').then((lottie) => {
        if (animationInstanceRef.current) {
          animationInstanceRef.current.destroy();  // Clean up any previous animation instance
        }

        animationInstanceRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop,
          autoplay,
          animationData,
        });
      });

      return () => {
        if (animationInstanceRef.current) {
          animationInstanceRef.current.destroy();  // Cleanup on unmount
        }
      };
    }
  }, [animationData, loop, autoplay]);

  if (typeof window === 'undefined') {
    return null;
  }

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default dynamic(() => Promise.resolve(LottieAnimation), {
  ssr: false,
});
