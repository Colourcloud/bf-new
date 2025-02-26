import React from 'react'
import Navbar from '../common/Navbar'
import Button from '../common/Button'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
            <header className='home-page'>
            <Navbar></Navbar>
            <div className="site-wrapper">
                <div className="header-content flex flex-col spaced-m spaced-p w-full text-left lg:w-4/5">
                <div className="header-text flex flex-col">
                    <h1 className="text-4xl purple-gradient leading-tight font-bold md:text-6xl lg:text-7xl pb-4">Providing Full Stack Website Services To The Whole Of New Zealand.</h1>
                    <h4 className="text-xl text-white mt-6 lg:text-xl">Experience seamless, full-stack website solutions tailored for lots of different industries. From custom designs to advanced development, we deliver cutting-edge results. Find out why we&apos;re a fast growing web agency below!</h4>
                    </div>
                    <div className="header-buttons flex flex-col items-start sm:flex-row gap-6 mt-10">
                    <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/contact" >Free Consultation</Button>
                    <Button backgroundColor="black" textColor="white" className="bg-black border border-gray-700" href="/website-analysis">Free Website Analysis</Button>
                    </div>
                </div>
            </div>
            <div className="grid gird-cols-1 md:grid-cols-3 max-w-[2560px] mx-auto">
                <Image src="/locations/auckland.jpg" alt="Auckland, New Zealand" className='w-full h-full object-cover' width='2000' height='1400' priority />
                <Image src="/locations/wellington.jpg" alt="Auckland, New Zealand" className='w-full h-full object-cover' width='2000' height='1400' priority />
                <Image src="/locations/queenstown.jpg" alt="Auckland, New Zealand" className='w-full h-full object-cover' width='2000' height='1400' priority />
            </div>
            </header>
        </div>
  )
}

export default Header