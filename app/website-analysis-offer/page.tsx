import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import Header from '../components/website-analysis/Header'
import Navbar from '../components/common/NavbarWhite'
import Pricing from '../components/website-analysis/Pricing'
import Features from '../components/website-analysis/Features'
import Faq from '../components/website-analysis/Faq'
import Whyseo from '../components/website-analysis/Whyseo'

export const metadata: Metadata = {
    title: "Builtflat - Website Analysis Offer",
    description: "Want to get deeper insights into your competitors sites and your own website? For a limited time we’re doing two special analysis deals that will give you an edge over your competitors and a further understanding of your websites issues with a list of solutions.",
}

const page = () => {
  return (
    <>
    <Header />
    <Features />
    <Pricing />
    <Whyseo />
    <Faq />
    </>
  )
}

export default page