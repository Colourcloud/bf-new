import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import Header from '../components/locations/Header'
import Introduction from '../components/locations/Introduction'
import Statistics from '../components/locations/Statistics'
import LocationList from '../components/locations/LocationList'
import Portfolio from '../components/common/Portfolio'

export const metadata: Metadata = {
  title: 'Providing Full Stack Website Services To The Whole Of New Zealand | Builtflat',
  description: 'Partnering with expert full stack web service providers in New Zealand is essential as demand for digital solutions grows. If your business operates in NZ, having a high-performing website is key to engaging your audience and maximising opportunities.',
}

const page = () => {
  return (
    <section className="bg-[--dark-background-color]">
        <Header />
        <Introduction />
        <Statistics />
        <LocationList />
        <Portfolio />
    </section>
  )
}

export default page