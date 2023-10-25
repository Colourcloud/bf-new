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
                    <h1 className='text-4xl md:text-6xl font-extrabold'>Pushing your ideas into production ready solutions</h1>
                    <p className='text-xl font-light'>Whether you&apos;re building an e-commerce store, or a platform that uses a lot of data, we have you covered. Our experienced development teams can bring your ideas to life. Using the most robust and up to date technologies, we ensure your application is built with functionality and scalability in mind.</p>
                    <div className="header-buttons flex flex-col sm:flex-row gap-6 mt-8">
                        <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/application" >Free Consultation</Button>
                        <Button backgroundColor="--button-dark-bg" textColor="white"  className="background-dark" href="/">View Case Studies</Button>
                    </div>
                </div>
                <div className="header-graphic w-full lg:w-2/4">
                    <Image src="/application/blank.jpg" className='shadow-md w-full lg:w-[180%] rounded-lg max-w-none' alt="blank image" width="1800" height="800"></Image>
                </div>
            </div>
        </div>
        </div>
        </header>
        </>
    );
};
export default Header;