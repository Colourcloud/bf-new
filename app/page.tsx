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
              <div className="section-text flex flex-col gap-8">
                <h2 className='text-4xl md:text-5xl font-bold'>We help businesses thrive through effective digital design</h2>
                <p className='text-xl font-light'>Whether you want to grow brand awareness, showcase your services, increase sales, or increase user engagement, Builtflat can help. We understand it can be difficult to get your brand online, so let us do the hard work for you.</p>
                <div className="section-buttons flex flex-row gap-4">
                  <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/application" >Get started today</Button>
                </div>
              </div>
              <div className="section-graphic">
                <Image src="/home/test.jpg" alt="header-graphic" width="2700" height="500"></Image>
              </div>
            </section>
            <section className="builtflat-section spaced-p spaced-m flex flex-col gap-8">
              <div className="section-text w-full lg:w-3/5 flex flex-col gap-8">
                <span className='text-[#7A4AFF] font-bold'>Services</span>
                <h2 className='text-3xl md:text-4xl font-bold'>Our experience covers a wide range of digital services to help your brand.</h2>
                <p className='text-xl font-light'>Whether you want to grow brand awareness, showcase your services, increase sales, or increase user engagement, Builtflat can help. We understand it can be difficult to get your brand online, so let us do the hard work for you.</p>
              </div>
              <div className="service-grid spaced-p">
                <div className="service-card p-10">
                  <div className="service-card-text flex flex-col gap-4">
                    <h4 className="text-white text-2xl md:text-3xl font-bold">Application Development</h4>
                    <p className='text-white w-full md:w-3/4'>Our development services help businesses create custom platforms, to simple online stores. All suited for your customers, no matter the technology.</p>
                  </div>
                  <div className="service-card-image">
                    <Image src="/home/application-development.png" alt="yes" width="1200" height="600" className='right-[-5%] rounded-t-xl bottom-0 application-development-graphic'></Image>
                  </div>
                </div>
                <div className="service-card p-10">
                  <div className="service-card-text flex flex-col gap-4">
                    <h4 className="text-white text-2xl md:text-3xl font-bold">UI / UX Design</h4>
                    <p className='text-white w-full'>Builtflat covers a wide scope of graphic design services to best help your brand. Whether its branding, to marketing, we have you covered.</p>
                  </div>
                  <div className="service-card-image">
                    <Image src="/home/ui-ux-image.png" alt="yes" className='ui-ux-graphic' width="500" height="600"></Image>
                  </div>
                </div>
                <div className="service-card flex flex-col justify-between">
                  <div className="service-card-text flex flex-col gap-4 px-10 pt-10">
                    <h4 className="text-white text-2xl md:text-3xl font-bold">Mobile Development</h4>
                    <p className='text-white w-full'>Builtflat covers a wide scope of graphic design services to best help your brand. Whether its branding, to marketing, we have you covered.</p>
                  </div>
                  <div className="service-card-image">
                    <Image src="/home/mobile-dev.png" alt="yes" className='w-full bottom-0 right-0 relative' width="500" height="600"></Image>
                  </div>
                </div>
                <div className="service-card p-10">
                  <div className="service-card-text flex flex-col gap-4">
                    <h4 className="text-white text-2xl md:text-3xl font-bold">Template Driven Design</h4>
                    <p className='text-white w-full md:w-3/4'>Our template driven design scheme helps businesses get online quickly. With our pre-made templates, we can easily craft the perfect website for your business.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
