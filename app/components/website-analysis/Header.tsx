import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimateOnScroll from '../common/AnimateOnScroll';


const Header = () => {


    return (
        <>
        <header className='home-page overflow-hidden'>
        <Navbar />
        <div className='spaced-m spaced-p'>
        <div className="site-wrapper">
            <div className="header-content flex flex-col lg:flex-row gap-8">
                <div className="header-text flex flex-col gap-6 w-full lg:w-3/5 items-start justify-center">
                    <AnimateOnScroll><span className='highlighted-purple-text rounded-full text-sm font-medium'>Analysis Offer</span></AnimateOnScroll>
                    <h1 className='text-white text-4xl md:text-6xl font-extrabold'>Don&apos;t leave just yet! You&apos;ve unlocked something greater!</h1>
                    <p className='text-[--text-on-dark] text-xl font-light'>Ready for deeper insights into your competitors and your own site? For a limited time, unlock two exclusive analysis offers that reveal your website&apos;s challenges, provide tailored solutions, and give you a competitive edge.</p>
                    <div className="header-buttons flex flex-col sm:flex-row gap-6 mt-8">
                        <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="#offer-pricing" >View Available Offers</Button>
                    </div>
                </div>
                <div className="header-graphic w-full lg:w-2/4">
                    <Image src="/application/header-image.jpg" className='w-[120%] lg:w-[180%] rounded-lg max-w-none' alt="Login page for Doofy, a online digital marketplace website for creatives selling products" width="1800" height="800"></Image>
                </div>
            </div>
        </div>
        </div>
        </header>
        </>
    );
};
export default Header;