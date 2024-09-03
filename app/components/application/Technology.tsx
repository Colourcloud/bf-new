"use client"

import { GetStaticProps } from 'next';
import Card from './SoftwareCard';
import softwareData from '../../data/SoftwareData.json';
import { useEffect, useRef } from 'react';

const Technology = () => { 

    const { topRowData, bottomRowData } = softwareData;

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
    
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          addAnimation();
        }
    
        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", "true");
                
                // Get scrollerInner and check if it exists
                const scrollerInner = scroller.querySelector(".scroller__inner");
                if (!scrollerInner) return;
        
                // Use the scrollerInner to get children safely now
                const scrollerContent = Array.from(scrollerInner.children);
        
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true) as HTMLElement; // TypeScript cast
                    duplicatedItem.setAttribute("aria-hidden", "true");
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
        
    
      }, []);

    return (
        <section className="builtflat-section mt-28 overflow-hidden" id="technology">
            <div className="site-wrapper">
                <div className="section-text w-full md:w-3/4 flex flex-col gap-8 items-start">
                    <span className='highlighted-purple-text rounded-full text-sm font-medium'>Technologies</span>
                    <h4 className='text-4xl md:text-5xl font-bold'>We make sure to build your project with the worlds leading technologies</h4>
                    <p className='text-xl font-light'>Our team has a wide range of experience across multiple different leading technologies. This means we can use the best suited tech your project needs to reach its full potential.</p>
                </div>
            </div>
            <div className="technology-wrapper w-[1920px] m-auto">
            <div className="software-grid flex flex-col gap-6 spaced-m spaced-p">
                    <div className="software-top-row scroller flex flex-row gap-3" data-direction="left">
                        <div className="scroller__inner">
                            {topRowData.map((data) => (
                            <Card
                                key={data.id}
                                id={data.id}
                                title={data.title}
                                description={data.description}
                                link={data.link}
                                icon={data.icon}
                            />
                            ))}
                        </div>
                    </div>

                    <div className="software-bottom-row scroller flex flex-row gap-3" data-direction="right">
                        <div className="scroller__inner">
                            {topRowData.map((data) => (
                            <Card
                                key={data.id}
                                id={data.id}
                                title={data.title}
                                description={data.description}
                                link={data.link}
                                icon={data.icon}
                            />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;