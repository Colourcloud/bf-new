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
    imageUrl: '/application/header-image.jpg',
    serviceLink: '/application',
  },
  {
    title: 'User Interface & Experience',
    description: 'Our top-notch graphic designers offer a wide range of services designed to help your brand. From websites, branding, marketing and more.',
    imageUrl: '/partnership/ui-ux-graphic.jpg',
    serviceLink: '/uiux',
  },
  {
    title: 'Mobile Development',
    description: 'Builtflat can deliver the latest in app development. From Progressive Web Apps, Apple IOS, and Android. Find out here how we can add value to your application project.',
    imageUrl: '/partnership/mobile-graphic.jpg',
    serviceLink: '/mobile-development',
  },
  {
    title: 'Template Driven Design',
    description: 'Our template driven design scheme helps businesses get online quickly. With our pre-made templates, we can easily craft the perfect website for your business.',
    imageUrl: '/partnership/template-graphic.jpg',
    serviceLink: '/template-design',
  },
  // Add more service cards as needed
];

const Services = () => {
  const [activeService, setActiveService] = useState<ServiceCard>(serviceCards[0]);

  const handleCardClick = (serviceCard: ServiceCard) => {
    setActiveService(serviceCard);
  };

  return (
    <div>
      <div className="border-b border-[--border-colour-dark] py-20 md:py-40">
        <div className="site-wrapper">
          <div className="section-block">
            <div className="section-text w-full flex flex-col gap-8 md:w-3/4">
              <AnimatedText>
                <h2 className='text-4xl text-white md:text-7xl font-bold'>
                  Our team covers a wider range of services on all areas of design & development
                </h2>
              </AnimatedText>
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
                      <Link href={card.serviceLink} className='service-learn-more text-purple font-medium flex flex-row items-center gap-1'>
                        Learn More <IoIosArrowRoundForward className='text-2xl' />
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-2/3">
              {serviceCards.map((card, index) => (
                <Image
                  key={index}
                  src={card.imageUrl}
                  className={`w-[120%] rounded-lg max-w-none ${activeService.title === card.title ? 'block' : 'hidden'}`}
                  alt={card.title}
                  priority={true}
                  width={1800}
                  height={800}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
