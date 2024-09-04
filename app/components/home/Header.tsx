import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimatedText from '../common/AnimateText';
import { MdArrowForward } from "react-icons/md";

const Header = () => {
    return (
        <>
            <header className='header-home-page relative'>
                <Navbar />
                <div className="video-background">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/home/home-header.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="site-wrapper relative z-10 flex flex-col justify-center h-[calc(100vh-10rem)]">
                    <div className="header-content flex flex-col w-full text-center items-center mx-auto lg:w-4/5">
                        <div className="header-text flex flex-col">
                            <h1 className="text-4xl text-white leading-tight font-semibold text-center md:text-7xl pb-4">Drive Business Growth with Cutting-Edge Digital Solutions</h1>
                            {/* <h4 className="text-xl text-white text-center mt-6 lg:text-2xl">In a world driven by technology, it&apos;s important for your customers that your brand has a digital space on the web. Our team can make this happen.</h4> */}
                        </div>
                        <div className="header-buttons flex flex-col sm:flex-row gap-6 mt-8">
                            <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/contact">Free Consultation</Button>
                            <Button backgroundColor="black" textColor="white" className="bg-black border border-gray-700" href="/portfolio">View Case Studies</Button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="header-notice p-4 text-center w-full bg-[--primary-color] text-sm text-white">
                Want a free website & competitor analysis valued at over $500+? <Link href="/" className='font-bold'>Apply here</Link>
            </div>
        </>
    );
};

export default Header;
