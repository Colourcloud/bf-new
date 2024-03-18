import React from 'react'
import Header from '../components/mobile-development/Header'
import Partners from '../components/partnership/Partners'
import Services from '../components/mobile-development/Services'
import Technology from '../components/mobile-development/Technology'
import Testimonials from '../components/common/Testimonials'
import Portfolio from '../components/common/Portfolio'

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