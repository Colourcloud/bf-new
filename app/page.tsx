import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/common/Navbar'
import Header from './components/home/Header'
import Clients from './components/common/Clients'
import Button from './components/common/Button'
import Services from './components/home/Services'
import HomeIntroduction from './components/home/HomeIntroduction'
import Collaboration from './components/home/Collaboration'

export default function Home() {
  return (
    <>
      <header className='home-page'>
        <Header></Header>
      </header>
      <main>
      <Clients></Clients>
          <div className="site-wrapper">
            <HomeIntroduction></HomeIntroduction>
            <Services></Services>
          </div>
          <Collaboration></Collaboration>
      </main>
    </>
  )
}
