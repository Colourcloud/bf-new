import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimatedText from '../common/AnimateText';

const Header = () => {


    return (
        <div>
        <header className='home-page pb-40 xl:pb-96'>
        <Navbar></Navbar>
          <div className="site-wrapper">
            <div className="header-content flex flex-col spaced-m spaced-p w-full text-center items-center mx-auto lg:w-4/5">
              <div className="header-text flex flex-col">
                <h1 className="text-4xl purple-gradient leading-tight font-bold text-center md:text-7xl pb-4">Interface designs that make a statement.</h1>
                <h4 className="text-xl text-white text-center mt-6 lg:text-2xl">You need to be unique to stand out in a crowd, why wouldn&apos;t you do the same with your website? Our team pushes the boundaries of interface design to capture your brand and the eyes of your customers.</h4>
                </div>
                <div className="header-buttons flex flex-col sm:flex-row gap-6 mt-8">
                  <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/contact" >Free Consultation</Button>
                  <Button backgroundColor="--button-dark-bg" textColor="white"  className="background-dark" href="/portfolio">View Case Studies</Button>
                </div>
              </div>
            
          </div>
        </header>
            <div className="site-wrapper showreel-wrapper relative z-40">
                <div className="showreel w-full rounded-md shadow-md bg-white">
                <video autoPlay loop muted className="rounded-md" poster='/uiux/uiux-video-thumbnail.jpg'>
                    <source src="/home/home-header.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>

        </div>
    );
};
export default Header;