import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Whyseo = () => {
  return (
    <section className="py-12 lg:py-32 border border-t">
        <div className="site-wrapper">
            <div className="flex flex-col gap-6 md:flex-row md:gap-20 justify-between">
                <div className="w-full md:w-2/4">
                  <Image src="/seo/why-seo.jpg" alt="Why SEO" width="1000" height="1000" className="rounded-lg w-full" />
                </div>
                <div className='flex flex-col gap-6 w-full md:w-2/4 items-start justify-center'>
                  <h4 className='text-black text-3xl md:text-4xl lg:text-5xl font-bold'>Why is this the ultimate solution for you?</h4>
                  <p className='text-base md:text-lg font-light w-full'>Unlock your website&apos;s true potential with a powerful analysis that goes beyond the basics. This comprehensive solution dives deep into your site&apos;s performance, revealing hidden opportunities, key strengths, and critical areas for improvement. It&apos;s not just data—it&apos;s a roadmap to accelerated growth, giving you a clear edge over the competition.</p>
                  <p className='text-base md:text-lg font-light w-full'>Experience insights that empower you to make smarter, faster, and more impactful decisions. Don&apos;t just improve - Take over.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Whyseo