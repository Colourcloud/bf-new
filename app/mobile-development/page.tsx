import React from 'react'
import Header from '../components/mobile-development/Header'
import Partners from '../components/partnership/Partners'
import Services from '../components/mobile-development/Services'
import Technology from '../components/mobile-development/Technology'
import Testimonials from '../components/common/Testimonials'
import Portfolio from '../components/common/Portfolio'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Builtflat - Mobile Development',
  description: "Builtflat can deliver the latest in app development. From Progressive Web Apps, Apple IOS, and Android. Find out here how we can add value to your application project.",
};

const page = () => {
  return (
    <>
   <div className='bg-[--dark-background-color]'>
    <Header />
    <Partners />
    <Services />
    <Technology />
    <Testimonials />
    <Portfolio />
    </div>
    </>
  )
}

export default page