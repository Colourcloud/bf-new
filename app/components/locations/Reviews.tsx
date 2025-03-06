import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import testimonialData from '@/app/data/Testimonial.json'

const Reviews = () => {
  // Split testimonials into two groups
  const firstHalf = testimonialData.slice(0, Math.ceil(testimonialData.length / 2))
  const secondHalf = testimonialData.slice(Math.ceil(testimonialData.length / 2))

  return (
    <section className="py-12 lg:py-32 bg-black overflow-hidden border-b border-[#222222]">
      <div className="flex flex-col gap-8">
        <Marquee
          gradient={false}
          speed={40}
          className="flex"
        >
          {firstHalf.map((review) => (
            <div key={review.id} className="review-card flex flex-col gap-4 p-8 rounded-lg border border-[#222222] bg-[#0a0a0a] max-w-[500px] min-h-[150px] md:min-h-[200px] mx-2">
              <div className="flex flex-row gap-2 items-center">
                <Image src={review.imageSrc} alt={review.altText} className='rounded-full' width='36' height='36' />
                <div className="flex flex-col">
                  <p className='text-white text-base'>{review.name}</p>
                  <span className='text-gray-400 text-sm'>{review.company}</span>
                </div>
              </div>
              <p className='text-white text-xs md:text-sm'>{review.testimonial}</p>
            </div>
          ))}
        </Marquee>

        <Marquee
          gradient={false}
          speed={40}
          direction="right"
          className="flex"
        >
          {secondHalf.map((review) => (
            <div key={review.id} className="review-card flex flex-col gap-4 p-8 rounded-lg border border-[#222222] bg-[#0a0a0a] max-w-[500px] min-h-[150px] md:min-h-[200px] mx-2">
              <div className="flex flex-row gap-2 items-center">
                <Image src={review.imageSrc} alt={review.altText} className='rounded-full' width='36' height='36' />
                <div className="flex flex-col">
                  <p className='text-white text-base'>{review.name}</p>
                  <span className='text-gray-400 text-sm'>{review.company}</span>
                </div>
              </div>
              <p className='text-white text-xs md:text-sm'>{review.testimonial}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Reviews