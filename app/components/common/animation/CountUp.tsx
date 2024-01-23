'use client'

// CountUp.tsx

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountUpProps {
    target: number;
    duration?: number;
    className?: string;
}

const CountUp: React.FC<CountUpProps> = ({ target, duration = 1000, className }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            const incrementValue = target > 1000 ? 100 : 1;
            const totalIncrements = Math.ceil(target / incrementValue);
            const incrementTime = duration / totalIncrements;

            let currentCount = 0;
            const timer = setInterval(() => {
                currentCount += incrementValue;
                if (currentCount > target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(currentCount);
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [inView, target, duration]);

    return <span ref={ref} className={className}>{count}+</span>;
};

export default CountUp;
