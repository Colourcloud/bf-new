import React from 'react'
import Image from 'next/image'
import AnimatedText from '../common/AnimateText'

const Introduction = () => {
  return (
   <section className="py-12 lg:py-32 bg-[--dark-background-color] border-b border-[#222222]">
        <div className="site-wrapper">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 justify-between items-center">
                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                    <AnimatedText><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Website design & development delivered straight to New Zealand</h2></AnimatedText>
                    <p className='text-[--text-on-dark] text-base md:text-lg'>Partnering with expert full stack web service providers in New Zealand is essential as demand for digital solutions grows. If your business operates in NZ, having a high-performing website is key to engaging your audience and maximising opportunities.</p>
                    <p className='text-[--text-on-dark] text-base md:text-lg'>With proven success across New Zealand and globally, we specialise in comprehensive web services that elevate your online presence. Our team takes the time to understand your goals and delivers top-tier web solutions, allowing you to focus on what you do best.</p>
                </div>
                <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
                    <Image src="/locations/auckland.jpg" alt="Auckland, New Zealand" className='w-full h-full object-cover' width='2000' height='1400' priority />
                </div>
            </div>
        </div>
   </section>
  )
}

export default Introduction