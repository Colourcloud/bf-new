import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import AnimatedText from '../common/AnimateText';
import AnimateOnScroll from '../common/AnimateOnScroll';
import CountUp from '../common/animation/CountUp';


const Statistics = () => {

    return (
        <div className='py-8 md:py-20 border-b border-[#222222]'>
            <div className="site-wrapper">
                <section className="mission-statement flex flex-col py-20 gap-16">
                    <div className="text-block w-full md:w-2/4">
                        <AnimatedText><h4 className='text-white font-bold text-4xl md:text-5xl'>We&apos;ve helped businesses just like yours succeed in their online endeavours</h4></AnimatedText>
                    </div>
                    <div className="text-block w-full flex flex-row flex-wrap lg:flex-nowrap md:flex-row lg:justify-evenly items-start gap-12">
                        <div className="statistic-block flex flex-col gap-3 w-full lg:w-1/4">
                        <CountUp target={10} className='purple-gradient font-extrabold text-6xl md:text-5xl xl:text-7xl border-b-2 border-[#D3C6FF] py-4' />
                            <p className='text-[--text-on-dark] font-medium text-lg'>Years in the industry</p>
                        </div>
                        <div className="statistic-block flex flex-col gap-3 w-full lg:w-1/4">
                            <CountUp target={300} className='purple-gradient font-extrabold text-6xl md:text-5xl xl:text-7xl border-b-2 border-[#D3C6FF] py-4' />
                            <p className='text-[--text-on-dark] font-medium text-lg'>Satisfied customers</p>
                        </div>
                        <div className="statistic-block flex flex-col gap-3 w-full lg:w-1/4">
                            <CountUp target={24000} className='purple-gradient font-extrabold text-6xl md:text-5xl xl:text-7xl border-b-2 border-[#D3C6FF] py-4' />
                            <p className='text-[--text-on-dark] font-medium text-lg'>Combined hours of experience</p>
                        </div>
                        <div className="statistic-block flex flex-col gap-3 w-full lg:w-1/4">
                            <CountUp target={11} className='purple-gradient font-extrabold text-6xl md:text-5xl xl:text-7xl border-b-2 border-[#D3C6FF] py-4' />
                            <p className='text-[--text-on-dark] font-medium text-lg'>Countries serviced by us</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Statistics;