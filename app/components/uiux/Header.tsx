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
                <h1 className="text-4xl purple-gradient leading-tight font-bold text-center md:text-7xl pb-4">Interfaces that leave a memorable impact</h1>
                <h4 className="text-xl text-white text-center mt-6 lg:text-2xl">Whether you’re building an e-commerce store, or a platform that uses a lot of data, we have you covered. Our experienced development teams can bring your ideas to life. Using the most robust and up to date technologies, we ensure your application is built with functionality and scalability in mind.</h4>
                </div>
                <div className="header-buttons flex flex-col sm:flex-row gap-6 mt-8">
                  <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/application" >Free Consultation</Button>
                  <Button backgroundColor="--button-dark-bg" textColor="white"  className="background-dark" href="/">View Case Studies</Button>
                </div>
              </div>
            
          </div>
        </header>
            <div className="site-wrapper showreel-wrapper relative z-40">
                <div className="showreel w-full rounded-md shadow-md bg-white">
                <video autoPlay loop muted className="rounded-md">
                    <source src="/uiux-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>

        </div>
    );
};
export default Header;