import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/common/Navbar'
import Header from './components/home/Header'
import Clients from './components/common/Clients'
import Button from './components/common/Button'

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
            <section className="builtflat-section spaced-p spaced-m flex flex-col md:flex-row gap-9 items-center">
              <div className="section-text flex flex-col gap-9">
                <h2 className='text-4xl md:text-5xl font-bold'>We help businesses thrive through effective digital design</h2>
                <p className='text-xl font-light'>Whether you want to grow brand awareness, showcase your services, increase sales, or increase user engagement, Builtflat can help. We understand it can be difficult to get your brand online, so let us do the hard work for you.</p>
                <div className="section-buttons flex flex-row gap-4">
                  <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/application" >Get started today</Button>
                </div>
              </div>
              <div className="section-graphic">
                <Image src="/home/test.jpg" alt="header-graphic" width="3000" height="500"></Image>
              </div>
            </section>
            <section className="builtflat-section spaced-p spaced-m">Hey</section>
          </div>
        </div>
      </main>
    </>
  )
}
