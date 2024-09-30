import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimateOnScroll from '../common/AnimateOnScroll';


const Header = () => {


    return (
        <>
        <header className='application-header overflow-hidden'>
        <div className='full-purple-gradient spaced-m spaced-p'>
        <div className="site-wrapper">
            <div className="header-content flex flex-col lg:flex-row gap-8">
                <div className="header-text flex flex-col gap-6 w-full lg:w-3/5 items-start justify-center">
                    <AnimateOnScroll><span className='highlighted-purple-text rounded-full text-sm font-medium'>Development Services</span></AnimateOnScroll>
                    <h1 className='text-4xl md:text-6xl font-extrabold'>Helping your business with effective developed solutions</h1>
                    <p className='text-xl font-light'>Our fully custom built sites are the finest of fine, developed with the best security, intuitive design & functionality, and scalability in mind. Because frankly, we want you to be proud that you have a Builtflat website!</p>
                    <div className="header-buttons flex flex-col sm:flex-row gap-6 mt-8">
                        <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/contact" >Free Consultation</Button>
                        <Button backgroundColor="--button-dark-bg" textColor="white"  className="background-dark" href="/portfolio">View Case Studies</Button>
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