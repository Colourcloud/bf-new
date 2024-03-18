import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
   <section className="mobile-services py-10 md:py-40">
    <div className="site-wrapper">
        <div className="mobile-services_grid grid gap-6">
            <div className="mobile-services_card border rounded-lg border-[#3A3A3A] pt-10 pl-10 overflow-hidden flex flex-col gap-8">
                <div className="card-text flex flex-col gap-4 w-4/5">
                    <h4 className='text-white text-3xl md:text-4xl font-bold'>Connected directly to your CMS</h4>
                    <p className='text-[--text-on-dark]'>We seemlisly connect your mobile application directly into your existing CMS, allowing you to manage all your content in one place, for web and mobile.</p>
                </div>
                <div className="service-card_graphic overflow-hidden rounded-tl-lg h-full flex justify-end">
                    <Image src="/mobile-development/cms-connect.jpg" alt="connected to cms" width="1800" height="600" className='object-cover'></Image>
                </div>
            </div>
            <div className="mobile-services_card border rounded-lg border-[#3A3A3A] pt-10 pl-10 overflow-hidden flex flex-col gap-8">
                <div className="card-text flex flex-col gap-4 w-4/5">
                    <h4 className='text-white text-3xl md:text-4xl font-bold'>Lightning performance</h4>
                    <p className='text-[--text-on-dark]'>Your app will be lightning fast for all your users, delivering a pleasant user experience, no matter the device</p>
                </div>
                <div className="service-card_graphic overflow-hidden rounded-tl-lg h-full flex justify-end pr-10">
                    <Image src="/mobile-development/speed-graphic.png" alt="connected to cms" width="1200" height="600" className='object-cover'></Image>
                </div>
            </div>
            <div className="mobile-services_card border rounded-lg border-[#3A3A3A] pt-10 overflow-hidden flex flex-col gap-8">
                <div className="card-text flex flex-col gap-4 w-4/5 pl-10">
                    <h4 className='text-white text-3xl md:text-4xl font-bold'>Applications that scale</h4>
                    <p className='text-[--text-on-dark]'>We build applications with scalability in mind. As your business grows, so does the technology built around it. No more unexpected downtimes.</p>
                </div>
                <div className="service-card_graphic overflow-hidden rounded-tl-lg h-full flex justify-end">
                    <Image src="/mobile-development/scale.png" alt="connected to cms" width="1200" height="400" className='object-cover'></Image>
                </div>
            </div>
            <div className="mobile-services_card border rounded-lg border-[#3A3A3A] pt-10 overflow-hidden flex flex-col gap-8">
                <div className="card-text flex flex-col gap-4 w-4/5 pl-10">
                    <h4 className='text-white text-3xl md:text-4xl font-bold'>Built for all operating systems</h4>
                    <p className='text-[--text-on-dark]'>We&apos;re able to deliver your app on both Apple IOS and Android devices, connecting your users to your business, no matter the device they choose to use.</p>
                </div>
                <div className="service-card_graphic overflow-hidden rounded-tl-lg h-full flex px-10 relative justify-center">
                    <Image src="/mobile-development/platform.png" alt="connected to cms" width="1200" height="400" className='object-contain relative lg:absolute bottom-0 w-full lg:w-4/5'></Image>
                </div>
            </div>
        </div> 
    </div>
   </section>
  )
}

export default Services