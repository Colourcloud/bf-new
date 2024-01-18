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
    const [currentImage, setCurrentImage] = useState('/template-design/image1.jpg'); // Default image

    const handleScroll = () => {
        // Define the image source for each block
        const images: ImageMap = {
            'block-1': '/template-design/image1.jpg',
            'block-2': '/template-design/image2.jpg',
            'block-3': '/template-design/image3.jpg',
        };
    
        let foundBlock = false;
    
        // Iterate through each block and check if it's in view
        for (const blockId of Object.keys(images)) {
            const block = document.getElementById(blockId);
            if (block && isInViewport(block)) {
                setCurrentImage(images[blockId]);
                foundBlock = true;
                break;
            }
        }
    
        // If no block is found, check if 'block-1' is in view to revert to the first image
        const block1 = document.getElementById('block-1');
        if (!foundBlock && block1 && isInViewport(block1)) {
            setCurrentImage(images['block-1']);
        }
    };
    
    const isInViewport = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    
        // Check if the top of the element is within the viewport
        return rect.top >= 0 && rect.bottom <= windowHeight;
    };
    

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='bg-[--dark-background-color]'>
            <div className="site-wrapper">
                <div className="content-container flex flex-row h-[2800px] gap-10 w-full">
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