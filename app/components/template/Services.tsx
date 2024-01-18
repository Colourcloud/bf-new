'use client'

import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import AnimateOnScroll from '../common/AnimateOnScroll';
import AnimatedText from '../common/AnimateText';

import { useEffect, useState } from 'react';

// Define a type for the image map
type ImageMap = {
    [key: string]: string;
};

const Services = () => {
    const [currentImage, setCurrentImage] = useState('/template-design/image1.jpg');

    const handleScroll = () => {
        // Hardcoded pixel values for breakpoints
        const breakpoints = [930, 1860]; // Adjust these values as needed

        // Define the image source for each breakpoint
        const images = [
            '/template-design/image1.jpg', // 0px to 930px
            '/template-design/image2.jpg', // 931px to 1860px
            '/template-design/image3.jpg', // 1861px and beyond
        ];

        const container = document.getElementById('content-container');
        if (!container) return;

        // Calculate scroll position relative to the container
        const scrollPosition = window.scrollY - container.offsetTop;
        let imageIndex;

        if (scrollPosition < breakpoints[0]) {
            imageIndex = 0;
        } else if (scrollPosition < breakpoints[1]) {
            imageIndex = 1;
        } else {
            imageIndex = 2;
        }

        setCurrentImage(images[imageIndex]);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='bg-[--dark-background-color]'>
            <div className="site-wrapper">
                <div className="content-container flex flex-row h-[2800px] gap-10 w-full" id="content-container">
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
                        <AnimateOnScroll><Image src={currentImage} alt="yes" className='w-full sticky top-8 rounded-lg template-service-image scale' width="1200" height="1200"></Image></AnimateOnScroll>
                    </div>
                </div>
            </div>
            </div>
    );
};
export default Services;