import React from 'react'
import Header from './components/home/Header'
import Clients from './components/common/Clients'
import Services from './components/home/Services'
import HomeIntroduction from './components/home/HomeIntroduction'
import Collaboration from './components/home/Collaboration'
import Portfolio from './components/common/Portfolio'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className="header-notice p-4 text-center w-full bg-[--primary-color] text-sm text-white">We&apos;re currently offering a complimentary website &amp; competitor analysis for a limited time.&nbsp;<Link href='/website-analysis/' className='font-bold'>Apply Here</Link></div>
          <Header></Header>
          <Clients></Clients>
          <HomeIntroduction></HomeIntroduction>
          <Services></Services>
          <Collaboration></Collaboration>
          <Portfolio></Portfolio>
    </>
  )
}
