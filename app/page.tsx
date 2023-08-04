import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/common/Navbar'
import Button from './components/common/Button'

export default function Home() {
  return (
    <>
      <header className='home-page'>
        <Navbar></Navbar>
        <div className="site-wrapper">
          <div className="header-content flex flex-col spaced-m spaced-p w-full text-center items-center mx-auto lg:w-4/5">
            <div className="header-text flex flex-col">
              <h1 className="text-4xl purple-gradient leading-tight font-bold text-center md:text-7xl pb-4">Drive Business Growth with Cutting-Edge Digital Solutions</h1>
              <h4 className="text-xl text-white text-center mt-6 lg:text-2xl">In a world driven by technology, it&apos;s important for your customers that your brand has a digital space on the web. Our team can make this happen.</h4>
              </div>
              <div className="header-buttons flex flex-row gap-6 mt-8">
                <Button backgroundColor="--primary-color" textColor="white" hoverColor="white" href="/application" >Free Consoltation</Button>
                <Button backgroundColor="--button-dark-bg" textColor="white" hoverColor="gray-800" href="/">View Case Studies</Button>
              </div>
            </div>
        </div>



      </header>
    </>
  )
}
