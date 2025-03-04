import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Button from '@/app/components/common/Button'
import Navbar from '@/app/components/common/Navbar'
import Link from 'next/link'
import AnimatedText from '@/app/components/common/AnimateText'
import { FaArrowLeftLong } from "react-icons/fa6";
import Portfolio from '@/app/components/common/Portfolio'
import Statistics from '@/app/components/locations/Statistics'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

// Define the Location type based on the API response
type Location = {
  id: number
  title: { rendered: string }
  acf: {
    location_name?: string
    maori_name?: string
    location_description?: string
    location_image?: number
    more_information?: {
      heading?: string
      sub_paragraph?: string
      introduction_text?: string
      introduction_description?: string
      introduction_images?: number[]
      more_information_heading?: string
      more_information_text?: string
    }
    service_list?: {
      services?: Array<{
        service_title?: string
        service_description?: string
      }>
    }
    faq?: Array<{
      question?: string
      answer?: string
    }>
  }
}

interface PageProps {
  params: {
    slug: string
  }
}

// Validate and await params
async function validateParams(params: Promise<PageProps['params']> | PageProps['params']) {
  const resolvedParams = await params
  if (!resolvedParams?.slug) {
    notFound()
  }
  return resolvedParams
}

// Fetch all locations for static paths
async function getAllLocations() {
  const res = await fetch('https://blog.builtflat.co.nz/wp-json/wp/v2/location')
  const locations = await res.json()
  return locations
}

// Generate static params for all locations
export async function generateStaticParams() {
  const locations = await getAllLocations()
  return locations.map((location: { slug: string }) => ({
    slug: location.slug,
  }))
}

// Fetch location data with revalidation
async function getLocation(slug: string): Promise<Location & { mediaDetails: Record<number, { url: string, alt: string }> }> {
  const res = await fetch(`https://blog.builtflat.co.nz/wp-json/wp/v2/location?slug=${slug}`, {
    next: { revalidate: 3600 } // Revalidate every hour
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch location data')
  }
  
  const data = await res.json()
  if (!data || data.length === 0) {
    notFound()
  }

  const location = data[0]
  
  // Collect all media IDs that need to be fetched
  const mediaIds = [
    location.acf?.location_image,
    ...(location.acf?.more_information?.introduction_images || [])
  ].filter(Boolean) // Remove any null/undefined values
  
  // If no media IDs, return early with empty mediaDetails
  if (mediaIds.length === 0) {
    return { ...location, mediaDetails: {} }
  }
  
  // Fetch all media details in one call
  const mediaRes = await fetch(`https://blog.builtflat.co.nz/wp-json/wp/v2/media?include=${mediaIds.join(',')}`, {
    next: { revalidate: 3600 }
  })
  
  if (!mediaRes.ok) {
    throw new Error('Failed to fetch media details')
  }
  
  const mediaData = await mediaRes.json()
  
  // Create a map of media details
  const mediaDetails = mediaData.reduce((acc: Record<number, { url: string, alt: string }>, media: any) => {
    acc[media.id] = {
      url: media.source_url,
      alt: media.alt_text || media.title.rendered
    }
    return acc
  }, {})
  
  return { ...location, mediaDetails }
}

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<PageProps['params']> 
}): Promise<Metadata> {
  const validatedParams = await validateParams(params)
  const location = await getLocation(validatedParams.slug)
  
  return {
    title: `${location.acf.location_name} - Website Design & Development Services | Builtflat`,
    description: location.acf.location_description,
  }
}

export default async function LocationPage({ 
  params 
}: { 
  params: Promise<PageProps['params']> 
}) {
  const validatedParams = await validateParams(params)
  const location = await getLocation(validatedParams.slug)
  const { acf, mediaDetails } = location

  // Get introduction images from the mediaDetails map with proper fallback for undefined arrays
  const introductionImages = (acf.more_information?.introduction_images || []).map(id => mediaDetails[id] || null).filter(Boolean)

  return (
        <>
        <header className='home-page'>
            <Navbar></Navbar>
            <div className="site-wrapper">
                <div className="header-content flex flex-col spaced-m spaced-p w-full text-left lg:w-4/5">
                <Link href="/locations" className='text-white font-medium flex flex-row gap-2 items-center'><FaArrowLeftLong /> Back to locations</Link>
                <div className="header-text flex flex-col">
                    <h1 className="text-4xl purple-gradient leading-tight font-bold md:text-6xl lg:text-7xl pb-4">{acf.more_information?.heading || 'Providing Full Stack Website Services To the Local Area.'}</h1>
                    <h4 className="text-xl text-white mt-6 lg:text-xl">{acf.more_information?.sub_paragraph}</h4>
                    </div>
                    <div className="header-buttons flex flex-col items-start sm:flex-row gap-6 mt-10">
                    <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/contact" >Free Consultation</Button>
                    <Button backgroundColor="black" textColor="white" className="bg-black border border-gray-700" href="/website-analysis">Free Website Analysis</Button>
                    </div>
                </div>
            </div>
            <div className="grid gird-cols-1 md:grid-cols-3 max-w-[2560px] mx-auto">
                {introductionImages.map((image, index) => (
                    <Image
                        key={index}
                        src={image.url}
                        alt={image.alt}
                        className='w-full h-full object-cover'
                        width={2000}
                        height={1400}
                        priority
                    />
                ))}
            </div>
        </header>
        
      <section className="py-12 lg:py-32 bg-[--dark-background-color] border-b border-[#222222]">
        <div className="site-wrapper">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 justify-between items-center">
                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                    <AnimatedText><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{acf.more_information?.introduction_text || 'Welcome'}</h2></AnimatedText>
                    {(acf.more_information?.introduction_description || '').split('\r\n\r\n').map((paragraph, index) => (
                        <p key={index} className="text-[--text-on-dark] text-base md:text-lg">
                            {paragraph}
                        </p>
                    ))}
                </div>
                <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
                    {acf.location_image && mediaDetails[acf.location_image] && (
                        <Image 
                            src={mediaDetails[acf.location_image].url}
                            alt={mediaDetails[acf.location_image].alt}
                            className='w-full h-full object-cover'
                            width={2000}
                            height={1400}
                            priority
                        />
                    )}
                </div>
            </div>
        </div>
        </section>

        <section className="bg-[--dark-background-color]"><Statistics /></section>

      {/* Services Section */}
       <section className="py-12 lg:py-32 border-b border-[#222222] bg-[--dark-background-color]">
            <div className="site-wrapper">
                <div className="flex flex-col gap-6 max-w-5xl">
                    <AnimatedText><h4 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>We help businesses all across {acf.location_name} succeed in their online endevour</h4></AnimatedText>
                    <p className='text-[--text-on-dark] text-base md:text-lg'>Builtflat offers a complete range of web services to elevate your digital presence in {acf.location_name}. From cutting-edge design to seamless development and strategic maintenance, we cover all your website needs.</p>
                    <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/contact" >Free Consultation</Button>
                </div>
            </div>
        </section>

            <div className="flex flex-col bg-[--dark-background-color]">
                {acf.service_list?.services?.map((service, index) => (
                    <div key={index} className="service-info-card border-b border-[#222222] group hover:bg-[#111111] [transition:background-color_0.3s]">
                        <div className="flex flex-col px-4 md:flex-row gap-6 md:gap-20 justify-between py-12 md:py-16 max-w-[1440px] mx-auto">
                            <div className="w-full md:w-1/2">
                                <h6 className='text-2xl md:text-3xl lg:text-3xl font-bold text-white'>{service.service_title}</h6>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div 
                                    className='service-info-card_description text-[--text-on-dark] text-base'
                                    dangerouslySetInnerHTML={{ __html: service.service_description || '' }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

      {/* FAQ Section */}
      <section className="location-faq py-12 lg:py-32 bg-[--dark-background-color] border-b border-[#222222]">
        <div className="site-wrapper">
        <div className='blog-faq w-full lg:w-4/5 mx-auto'>
            <div className="faq-container w-full mx-auto text-center flex flex-col gap-3 text-white">
                <h2 className='text-4xl md:text-3xl font-bold'>Frequently Asked Questions</h2>
                <p className='text-base font-light'>Below are some frequently asked questions relating to our services in {acf.location_name}.</p>
            </div>
            <Accordion type="single" collapsible className='mt-12'>
                {(acf.faq || []).map((faqItem, index: number) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className='text-white'>{faqItem.question}</AccordionTrigger>
                    <AccordionContent className='text-white'>
                    <div dangerouslySetInnerHTML={{ __html: faqItem.answer || '' }} />
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
            </div>
        </div>
            
      </section>

      <section className="bg-[--dark-background-color]"><Portfolio /></section>
      
    </>
  )
} 