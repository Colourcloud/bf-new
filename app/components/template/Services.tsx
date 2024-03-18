'use client'

import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import AnimateOnScroll from '../common/AnimateOnScroll';
import AnimatedText from '../common/AnimateText';

import { useEffect, useState } from 'react';

const images = [
    '/template-design/image1.jpg', 
    '/template-design/image2.jpg',
    '/template-design/image3.jpg',
];

// Define a type for the image map
type ImageMap = {
    [key: string]: string;
};

const Services = () => {
    const [currentImage, setCurrentImage] = useState('/template-design/image1.jpg');
    const [lastCrossedBreakpoint, setLastCrossedBreakpoint] = useState(0);
    const [flicker, setFlicker] = useState(false);

    const triggerFlicker = () => {
        setFlicker(true);
        setTimeout(() => setFlicker(false), 500); // Match the duration of the animation
    };

    const handleScroll = () => {
        const breakpoints = [0, 930, 1860]; // Defined breakpoints
        const threshold = 50; // Threshold in pixels for changing images
        const images = [
            '/template-design/image1.jpg', // Image for 0px
            '/template-design/image2.jpg', // Image for 930px
            '/template-design/image3.jpg', // Image for 1860px
        ];

        const container = document.getElementById('content-container');
        if (!container) return;

        const containerTop = container.offsetTop;
        const relativeScrollPosition = window.scrollY - containerTop;

        // Find the nearest breakpoint
        const nearestBreakpoint = breakpoints.reduce((nearest, breakpoint) =>
            Math.abs(breakpoint - relativeScrollPosition) < Math.abs(nearest - relativeScrollPosition) ? breakpoint : nearest
        );

        if (Math.abs(relativeScrollPosition - nearestBreakpoint) <= threshold && nearestBreakpoint !== lastCrossedBreakpoint) {
            const imageIndex = breakpoints.indexOf(nearestBreakpoint);
            setCurrentImage(images[imageIndex]);
            setLastCrossedBreakpoint(nearestBreakpoint);
            triggerFlicker(); // Trigger the flicker effect
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastCrossedBreakpoint]);

    return (
        <div className='bg-[--dark-background-color]'>
            <div className="site-wrapper">
                <div className="content-container hidden md:flex invisible md:visible flex-row h-[2800px] gap-10 w-full" id="content-container">
                    <div className="content-text w-2/5 h-full flex flex-col gap-80">  {/* Text down the page */}
                        <div className="text-block flex flex-col gap-6 min-h-[600px] justify-center">
                            <span id="block-1"></span>
                            <AnimatedText><h4 className='text-white text-5xl font-bold'>Build with designed & coded templates. Ready for production</h4></AnimatedText>
                            <p className='text-white text-lg'>We have a large collection of pre-designed elements & templates that have already been tried & tested for a large range of different industries. This allows our clients to save time & cost for their projects</p>
                        </div>
                        <div className="text-block flex flex-col gap-6 min-h-[700px] justify-center">
                            <AnimatedText><h4 className='text-white text-5xl font-bold'>Tailor made design components for any project</h4></AnimatedText>
                            <p className='text-white text-lg'>We have a large collection of pre-designed elements & templates that have already been tried & tested for a large range of different industries. This allows our clients to save time & cost for their projects</p>
                            <span id="block-2"></span>
                        </div>
                        <div className="text-block flex flex-col gap-6 min-h-[700px] justify-center">
                        <span id="block-3"></span>
                            <AnimatedText><h4 className='text-white text-5xl font-bold'>Responsive in mind. Designed to work on any screen size</h4></AnimatedText>
                            <p className='text-white text-lg'>We have a large collection of pre-designed elements & templates that have already been tried & tested for a large range of different industries. This allows our clients to save time & cost for their projects</p>
                        </div>
                    </div>
                    <div className="content-graphic-container w-2/3  h-full p-8"> {/* Image that scrolls down the page */}
                    <div className='sticky top-8 flex justify-center items-center'>
                    <span id="trigger" className='w-2 h-2'></span>
                    <AnimateOnScroll><Image src={currentImage} alt="yes" className={`w-full rounded-lg template-service-image scale ${flicker ? 'flicker' : ''}`} width="1200" height="1200" priority={true}></Image></AnimateOnScroll>
                    </div>
                    </div>
                </div>

                {/* MOBILE VIEW*/}

                <section className='mobile-services-layout pb-40 visible md:invisible flex gap-16 flex-col md:hidden'>
                    <div className="content-block flex flex-col gap-8">
                        <AnimateOnScroll><Image src={images[0]} alt="yes" className='w-full rounded-lg template-service-image' width="1200" height="1200"></Image></AnimateOnScroll>
                        <div className="content-text flex flex-col gap-6">
                            <AnimatedText><h4 className='text-white text-3xl font-bold'>Build with designed & coded templates. Ready for production</h4></AnimatedText>
                            <p className='text-white text-lg'>We have a large collection of pre-designed elements & templates that have already been tried & tested for a large range of different industries. This allows our clients to save time & cost for their projects</p>
                        </div>
                    </div>
                    <div className="content-block flex flex-col gap-8">
                        <AnimateOnScroll><Image src={images[1]} alt="yes" className='w-full rounded-lg template-service-image' width="1200" height="1200"></Image></AnimateOnScroll>
                        <div className="content-text flex flex-col gap-6">
                            <AnimatedText><h4 className='text-white text-3xl font-bold'>Tailor made design components for any project</h4></AnimatedText>
                            <p className='text-white text-lg'>We have a large collection of pre-designed elements & templates that have already been tried & tested for a large range of different industries. This allows our clients to save time & cost for their projects</p>
                        </div>
                    </div>
                    <div className="content-block flex flex-col gap-8">
                        <AnimateOnScroll><Image src={images[2]} alt="yes" className='w-full rounded-lg template-service-image' width="1200" height="1200"></Image></AnimateOnScroll>
                        <div className="content-text flex flex-col gap-6">
                            <AnimatedText><h4 className='text-white text-3xl font-bold'>Responsive in mind. Designed to work on any screen size</h4></AnimatedText>
                            <p className='text-white text-lg'>We have a large collection of pre-designed elements & templates that have already been tried & tested for a large range of different industries. This allows our clients to save time & cost for their projects</p>
                        </div>
                    </div>
                </section>

            </div>
            </div>
    );
};
export default Services;