'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from '../common/AnimateText';
import { IoIosArrowRoundForward } from "react-icons/io";

interface ServiceCard {
  title: string;
  description: string;
  imageUrl: string;
  serviceLink: string;
}

const serviceCards: ServiceCard[] = [
  {
    title: 'Website Development',
    description: 'Our development services help businesses create custom platforms, to simple online stores. All suited for your customers, no matter the technology.',
    imageUrl: '/application/header-image.jpg', // Replace with actual image path
    serviceLink: '/application',
  },
  {
    title: 'User Interface & Experience',
    description: 'Our development services help businesses create custom platforms, to simple online stores. All suited for your customers, no matter the technology.',
    imageUrl: '/path/to/ui-ux.jpg', // Replace with actual image path
    serviceLink: '/uiux',
  },
  {
    title: 'Mobile Development',
    description: 'Our development services help businesses create custom platforms, to simple online stores. All suited for your customers, no matter the technology.',
    imageUrl: '/path/to/ui-ux.jpg', // Replace with actual image path
    serviceLink: '/',
  },
  {
    title: 'Template Driven Design',
    description: 'Our development services help businesses create custom platforms, to simple online stores. All suited for your customers, no matter the technology.',
    imageUrl: '/path/to/ui-ux.jpg', // Replace with actual image path
    serviceLink: '/template-design',
  },
  {
    title: 'Research & Marketing',
    description: 'Our development services help businesses create custom platforms, to simple online stores. All suited for your customers, no matter the technology.',
    imageUrl: '/path/to/ui-ux.jpg', // Replace with actual image path
    serviceLink: '/',
  },
  // Add more service cards as needed
];

const Services = () => {

  const [activeService, setActiveService] = useState<ServiceCard>(serviceCards[0]);

  const handleCardClick = (serviceCard: ServiceCard) => {
    setActiveService(serviceCard);
  };

  return (
    <div className=''>
        <div className="border-b border-[--border-colour-dark] py-20 md:py-40">
            <div className="site-wrapper">
                <div className="section-block">
                    <div className="section-text w-full flex flex-col gap-8 md:w-3/4">
                        <AnimatedText><h2 className='text-4xl text-white md:text-7xl font-bold'>Our team covers a wider range of services on all areas of design & development</h2></AnimatedText>     
                    </div>
                </div>
                <div className="flex flex-row gap-10 mt-24">
                    <div className='flex flex-row gap-8 w-1/3'>
                    <ul className='flex flex-col'>
                        {serviceCards.map((card, index) => (
                        <li
                            key={index}
                            className={`service-card-holder ${activeService.title === card.title ? 'active' : ''} flex flex-col gap-4 p-6 rounded-md`}
                            onClick={() => handleCardClick(card)}
                        >
                            <h4 className='text-[--text-on-dark] text-2xl font-bold'>{card.title}</h4>
                            <div className='service-dropdown flex flex-col gap-4 items-start'>
                            <p className='text-[--text-on-dark]'>{card.description}</p>
                            <Link href={activeService.serviceLink} className='service-learn-more text-purple font-medium flex flex-row items-center gap-1'>Learn More <IoIosArrowRoundForward className='text-2xl'></IoIosArrowRoundForward></Link>
                            </div>
                        </li>
                        ))}
                    </ul>
                    </div>
                    <div className="w-full md:w-2/3">
                        <Image src={activeService.imageUrl} className='w-[120%] rounded-lg max-w-none' alt={activeService.title} width="1800" height="800" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services