import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <>
    <div className="pt-16 lg:pt-32">
        <div className="max-w-[1440px] mx-auto px-4 mt-16">
            <div className="features-grid flex flex-col gap-8">
                <div className="flex flex-col md:flex-row gap-8">

                    <div className="w-full md:w-2/4 lg:w-2/5 rounded-xl min-h-[600px] bg-white border p-8 flex flex-col justify-between gap-9">
                        <div className="card-text flex flex-col gap-4">
                            <h4 className='text-black text-3xl md:text-3xl font-bold'>Increase Traffic to Your Website</h4>
                            <p className='text-gray-600 font-light'>We seamlessly connect your mobile application directly into your existing CMS, allowing you to manage all your content in one place, for web and mobile.</p>
                        </div>
                        <div className="card-image rounded-xl pt-6 px-6 bg-gray-100 border flex-grow">
                            <div className="relative w-full h-full">
                                <Image src="/seo/website-views.svg" alt="Timeline" layout="fill" objectFit="contain" className='rounded-t-lg' />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/4 lg:w-3/5 rounded-xl min-h-[600px] bg-white border p-8 flex flex-col justify-between gap-9">
                        <div className="card-text flex flex-col gap-4">
                            <h4 className='text-black text-3xl md:text-3xl font-bold'>Scheduled task to reduce workload bloat</h4>
                            <p className='text-gray-600 font-light'>We seamlessly connect your mobile application directly into your existing CMS, allowing you to manage all your content in one place, for web and mobile.</p>
                        </div>
                        <div className="card-image rounded-xl pt-6 px-6 bg-gray-100 border flex-grow">
                            <div className="relative w-full h-full">
                                <Image src="/seo/timeline.svg" alt="Timeline" layout="fill" objectFit="contain" className='rounded-t-lg' />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-2/4 lg:w-3/5 rounded-xl min-h-[600px] bg-white border p-8 flex flex-col justify-between gap-9">
                        <div className="card-text flex flex-col gap-4">
                            <h4 className='text-black text-3xl md:text-3xl font-bold'>Rank Higher Than Your Competitors</h4>
                            <p className='text-gray-600 font-light'>We seamlessly connect your mobile application directly into your existing CMS, allowing you to manage all your content in one place, for web and mobile.</p>
                        </div>
                        <div className="card-image rounded-xl pt-6 px-6 bg-gray-100 border flex-grow">
                            <div className="relative w-full h-full">
                                <Image src="/seo/search-results.svg" alt="Timeline" layout="fill" objectFit="contain" className='rounded-t-lg' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-2/4 lg:w-2/5 h-[600px] rounded-xl bg-white border">
                        <div className="card-text flex flex-col gap-4 p-8">
                            <h4 className='text-black text-3xl md:text-3xl font-bold'>Results that matter</h4>
                            <p className='text-gray-600 font-light'>We seemlisly connect your mobile application directly into your existing CMS, allowing you to manage all your content in one place, for web and mobile.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Features