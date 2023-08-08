'use client'

import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import AnimateOnScroll from '../common/AnimateOnScroll';


const Collaboration = () => {


    return (
        <div className="builtflat-container-block">
                <div className='overflow-hidden'>
                    <div className="site-wrapper">
                    <section className="builtflat-section spaced-p spaced-m">
                        <div className="flex flex-col gap-8">
                            <div className="section-text flex flex-col gap-8 w-full md:w-3/5 md:mx-auto text-left md:text-center items-start md:items-center">
                                <span className='highlighted-purple-text rounded-full text-sm font-medium'>Collaboration</span>
                                <h4 className='text-4xl md:text-5xl font-bold'>A collaborative experience to speed up those busy workflows</h4>
                                <p className='text-xl font-light'>We work closely with other design & development agencies, to help them meet their client deadlines. Leveraging workloads can greatly increase the productivity of a team, to deliver a more polished project.</p>
                                <div className="user-icons flex flex-row justify-start">
                                    <AnimateOnScroll><Image src="/home/avatars/avatar-1.jpg" alt="face avatar" width="200" height="200" className='avatar-icon rounded-full mr-[-20px] relative z-10'></Image></AnimateOnScroll>
                                    <AnimateOnScroll><Image src="/home/avatars/avatar-2.jpg" alt="face avatar" width="200" height="200" className='avatar-icon rounded-full mr-[-20px] relative z-20'></Image></AnimateOnScroll>
                                    <AnimateOnScroll><Image src="/home/avatars/avatar-3.jpg" alt="face avatar" width="200" height="200" className='avatar-icon rounded-full mr-[-20px] relative z-30'></Image></AnimateOnScroll>
                                    <AnimateOnScroll><Image src="/home/avatars/avatar-4.jpg" alt="face avatar" width="200" height="200" className='avatar-icon rounded-full mr-[-20px] relative z-40'></Image></AnimateOnScroll>
                                    <AnimateOnScroll><Image src="/home/avatars/avatar-5.jpg" alt="face avatar" width="200" height="200" className='avatar-icon rounded-full mr-[-20px] relative z-50'></Image></AnimateOnScroll>
                                    <AnimateOnScroll><Image src="/home/avatars/avatar-6.jpg" alt="face avatar" width="200" height="200" className='avatar-icon rounded-full mr-[-20px] relative z-[60]'></Image></AnimateOnScroll>
                                    <AnimateOnScroll><Image src="/home/avatars/avatar-7.jpg" alt="face avatar" width="200" height="200" className='avatar-icon rounded-full mr-[-20px] relative z-[70]'></Image></AnimateOnScroll>
                                </div>
                            </div>
                            <div className="section-graphic relative">
                                <div className="floating-cards-container">
                                    <div className="floating-card rounded-lg shadow-sm absolute p-4 flex justify-between items-start gap-3">
                                        <Image src="/home/avatars/avatar-2.jpg" alt="face avatar" width="200" height="200" className='w-12 rounded-full relative z-10'></Image>
                                        <div className="floating-card-text flex flex-col gap-2">
                                            <h6 className='text-white text-sm font-bold flex justify-between items-center'>Mary Woodkin <span className='text-gray-300 text-xs font-extralight'>1h ago</span></h6>
                                            <p className='text-gray-100 text-sm font-light'>Ive finished the type up for the home page and added it to the Trello board.</p>
                                        </div>
                                    </div>
                                    <div className="floating-card rounded-lg shadow-sm absolute p-4 flex justify-between items-start gap-3">
                                        <Image src="/home/avatars/avatar-5.jpg" alt="face avatar" width="200" height="200" className='w-12 rounded-full relative z-10'></Image>
                                        <div className="floating-card-text flex flex-col gap-2">
                                            <h6 className='text-white text-sm font-bold flex justify-between items-center'>Sara Hawkins <span className='text-gray-300 text-xs font-extralight'>1h ago</span></h6>
                                            <p className='text-gray-100 text-sm font-light'>Ive emailed through the latest illustrations for the “about-us” page!</p>
                                        </div>
                                    </div>
                                    <div className="floating-card rounded-lg shadow-sm absolute p-4 flex justify-between items-start gap-3">
                                        <Image src="/home/avatars/avatar-4.jpg" alt="face avatar" width="200" height="200" className='w-12 rounded-full relative z-10'></Image>
                                        <div className="floating-card-text flex flex-col gap-2">
                                            <h6 className='text-white text-sm font-bold flex justify-between items-center'>Brandon Fisher <span className='text-gray-300 text-xs font-extralight'>1h ago</span></h6>
                                            <p className='text-gray-100 text-sm font-light'>This is looking really good! Could we maybe make some adjustments to the header section?</p>
                                        </div>
                                    </div>
                                </div>
                                <Image src="/home/collaboration-graphic.jpg" width='1200' height='800' alt="Figma UI for collaboration design" className='w-[300%] sm:w-full max-w-[2000px] sm:max-w-full rounded-lg shadow-lg'></Image>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>
        </div>
    );
};
export default Collaboration;