import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimatedText from '../common/AnimateText';
import AnimateOnScroll from '../common/AnimateOnScroll';
import HeaderImage1 from '../../../public/about/header-image-1.jpg';
import HeaderImage2 from '../../../public/about/header-image-2.jpg';
import HeaderImage3 from '../../../public/about/header-image-3-desktop.jpg';


const Header = () => {


    return (
        <div>
            <header className='home-page'>
                <Navbar></Navbar>
                <div className="site-wrapper relative">
                    <div className="absolute header-message p-10 rounded-md bg-[--primary-color] max-w-[550px] flex flex-col gap-6 bottom-[10%] right-[5%]">
                        <h4 className='text-white text-3xl font-bold'>What we believe in</h4>
                        <p className='text-white text-base font-base'>Over the years at Builtflat, we&apos;ve put alot of thought into what makes us who we are.  We could write up a long list of things, but we think the key point that stands out to us is our commitment to our clients</p>
                    </div>
                    <div className="header-content flex flex-col spaced-m spaced-p w-full text-left lg:w-full">
                        <div className="header-text flex flex-col">
                            <h1 className="text-5xl text-white leading-tight font-bold md:text-7xl pb-4">We may be the <span className='new-kids purple-gradient'>New Kids </span> on the block - <br/>But we&apos;re backed with years of experience</h1>
                        </div>
                    </div>
                    <div className="flex flex-row gap-6 pb-[230px] pt-10">
                            <div className="image-block flex flex-row gap-6 w-3/4">
                               <Image src={HeaderImage1} alt="An example image" className='rounded-md w-full' width='530' height='580' priority />
                               <Image src={HeaderImage2} alt="An example image" className='rounded-md w-full' width='530' height='580' priority />
                            </div>
                            <div className="image-block w-1/4">
                                <Image src={HeaderImage3} alt="An example image" className='rounded-md w-full' width='530' height='500' priority />
                            </div>
                        </div>
                </div>
            </header>
        </div>
    );
};
export default Header;