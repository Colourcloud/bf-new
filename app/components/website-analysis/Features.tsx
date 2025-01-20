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
                            <p className='text-gray-600 font-light'>SEO boosts your site&apos;s ranking, increasing visibility and organic clicks. With targeted keywords, you reach users looking for what you offer.</p>
                        </div>
                        <div className="card-image rounded-xl pt-6 px-6 bg-gray-100 border flex-grow">
                            <div className="relative w-full h-full min-h-[300px]">
                                <Image src="/seo/website-views.svg" alt="Timeline" layout="fill" objectFit="contain" className='rounded-t-lg' />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/4 lg:w-3/5 rounded-xl min-h-[600px] bg-white border p-8 flex flex-col justify-between gap-9">
                        <div className="card-text flex flex-col gap-4">
                            <h4 className='text-black text-3xl md:text-3xl font-bold'>Save Time With Automation</h4>
                            <p className='text-gray-600 font-light'>SEO helps streamline your efforts by aligning with automated tools for scheduling posts, tracking performance, and analyzing data. Spend less time on repetitive tasks and more time focusing on growing your business. With efficient processes in place, you&apos;ll maximize productivity while maintaining a consistent online presence.</p>
                        </div>
                        <div className="card-image rounded-xl pt-6 px-6 bg-gray-100 border flex-grow">
                            <div className="relative w-full h-full min-h-[300px]">
                                <Image src="/seo/timeline.svg" alt="Timeline" layout="fill" objectFit="contain" className='rounded-t-lg' />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-2/4 lg:w-3/5 rounded-xl min-h-[600px] bg-white border p-8 flex flex-col justify-between gap-9">
                        <div className="card-text flex flex-col gap-4">
                            <h4 className='text-black text-3xl md:text-3xl font-bold'>Rank Higher Than Your Competitors</h4>
                            <p className='text-gray-600 font-light'>Higher rankings signal credibility and authority, building trust with users. Ranking above your competitors for relevant keywords not only enhances your reputation but positions your brand as the go-to choice.</p>
                        </div>
                        <div className="card-image rounded-xl pt-6 px-6 bg-gray-100 border flex-grow">
                            <div className="relative w-full h-full min-h-[300px]">
                                <Image src="/seo/search-results.svg" alt="Timeline" layout="fill" objectFit="contain" className='rounded-t-lg' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-2/4 lg:w-2/5 rounded-xl min-h-[600px] bg-white border p-8 flex flex-col justify-between gap-9">
                        <div className="card-text flex flex-col gap-4">
                            <h4 className='text-black text-3xl md:text-3xl font-bold'>Results That Matter</h4>
                            <p className='text-gray-600 font-light'>SEO isn&apos;t just about rankings—it&apos;s about real results. It brings more leads, conversions, and engagement to your site. With analytics, you can track progress and refine your strategy to achieve your goals.</p>
                        </div>
                        <div className="card-image rounded-xl pt-6 px-6 bg-gray-100 border flex-grow">
                            <div className="relative w-full h-full min-h-[300px]">
                                <Image src="/seo/website-health.svg" alt="Timeline" layout="fill" objectFit="contain" className='rounded-t-lg' />
                            </div>
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