import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/common/Navbar'
import Header from './components/home/Header'
import Clients from './components/common/Clients'
import Button from './components/common/Button'
import Services from './components/home/Services'
import HomeIntroduction from './components/home/HomeIntroduction'

export default function Home() {
  return (
    <>
      <header className='home-page'>
        <Navbar></Navbar>
        <Header></Header>
      </header>
      <main>
        <div className="bg-gradient-purple relative">
          <Clients></Clients>
          <div className="site-wrapper">
            <HomeIntroduction></HomeIntroduction>
            <Services></Services>
          </div>
        </div>
      </main>
    </>
  )
}
