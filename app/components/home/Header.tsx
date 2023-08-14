import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import headerImage1 from '../../../public/home/header-image-1.jpg'
import headerImage2 from '../../../public/home/header-image-2.jpg'
import headerImage3 from '../../../public/home/header-image-3.jpg'

const Header = () => {


    return (
        <header className='home-page'>
          <div className="site-wrapper">
            <Navbar></Navbar>
            <div className="header-content flex flex-col spaced-m spaced-p w-full text-center items-center mx-auto lg:w-4/5">
              <div className="header-text flex flex-col">
                <h1 className="text-4xl purple-gradient leading-tight font-bold text-center md:text-7xl pb-4">Drive Business Growth with Cutting-Edge Digital Solutions</h1>
                <h4 className="text-xl text-white text-center mt-6 lg:text-2xl">In a world driven by technology, it&apos;s important for your customers that your brand has a digital space on the web. Our team can make this happen.</h4>
                </div>
                <div className="header-buttons flex flex-col sm:flex-row gap-6 mt-8">
                  <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/application" >Free Consoltation</Button>
                  <Button backgroundColor="--button-dark-bg" textColor="white"  className="background-dark" href="/">View Case Studies</Button>
                </div>
              </div>
              <div className="header-images flex flex-row justify-center relative">
              <Image
                  src={headerImage2}
                  alt="An example image"
                  className='relative z-20 rounded-t-md header-image'
                />
                <Image
                  src={headerImage3}
                  alt="An example image"
                  className='absolute z-10 rounded-t-md header-image'
                />
                <Image
                  src={headerImage1}
                  alt="An example image"
                  className='absolute z-10 rounded-t-md header-image'
                />
              </div>
          </div>
        </header>
    );
};
export default Header;