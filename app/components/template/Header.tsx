import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimatedText from '../common/AnimateText';
import AnimateOnScroll from '../common/AnimateOnScroll';
import headerImage from '../../../public/template-design/header-graphic.jpg';
import headerImage2 from '../../../public/template-design/header-text.png';
import headerImage3 from '../../../public/template-design/header-image.png';
import headerImage4 from '../../../public/template-design/colour-palette.png';
import headerImage5 from '../../../public/template-design/header-image-2.png';
import headerImage6 from '../../../public/template-design/header-buttons.png';

const Header = () => {


    return (
        <div>
            <header className='home-page'>
            <Navbar></Navbar>
            <div className="site-wrapper">
                <div className="header-content flex flex-col spaced-m spaced-p w-full text-left lg:w-4/5">
                <div className="header-text flex flex-col">
                    <h1 className="text-4xl text-white leading-tight font-bold md:text-7xl pb-4">Give your project a headstart - <br/> Pre designed elements for any industry</h1>
                    <h4 className="text-xl text-white mt-6 lg:text-xl">We have a large collection of pre-designed elements & templates that have already been tried & tested for a large range of different industries. This allows our clients to save time & cost for their projects.</h4>
                    </div>
                    <div className="header-buttons flex flex-col items-start sm:flex-row gap-6 mt-10">
                    <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/application" >Free Consultation</Button>
                    </div>
                </div>
                
                </div>

            <div className="header-graphic template-design-header relative w-full flex justify-center">
                <AnimateOnScroll><Image src={headerImage} alt="An example image" className='relative z-20 rounded-t-md header-image figma-screen' width='2000' height='1400' priority /></AnimateOnScroll>
                <AnimateOnScroll><Image src={headerImage2} alt="An example image" className='absolute z-20 rounded-t-md floating-header-image' width='550' height='400' priority /></AnimateOnScroll>
                <AnimateOnScroll><Image src={headerImage3} alt="An example image" className='absolute z-20 rounded-t-md floating-header-image' width='450' height='600' priority  /></AnimateOnScroll>
                <AnimateOnScroll><Image src={headerImage4} alt="An example image" className='absolute z-20 rounded-t-md floating-header-image' width='300' height='400' priority  /></AnimateOnScroll>
                <AnimateOnScroll><Image src={headerImage5} alt="An example image" className='absolute z-20 rounded-t-md floating-header-image' width='225' height='400' priority  /></AnimateOnScroll>
                <AnimateOnScroll><Image src={headerImage6} alt="An example image" className='absolute z-20 rounded-t-md floating-header-image' width='400' height='400' priority  /></AnimateOnScroll>
            </div>
            </header>
        </div>
    );
};
export default Header;