import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import AnimateOnScroll from '../common/AnimateOnScroll';
import AnimatedText from '../common/AnimateText';
import headerImage from '../../../public/template-design/header-graphic.jpg';


const Styles = () => {


    return (
        <div className="builtflat-container-block bg-white pt-[100px]">
            <div>
                <div className='overflow-hidden'>
                    <div className="site-wrapper">
                    <section className="builtflat-section relative z-10">
                        <div className="flex flex-col gap-8">
                            <div className="section-text w-full xl:w-2/3 flex flex-col gap-2 text-left items-start py-3">
                                <span className='highlighted-purple-text rounded-full text-sm font-medium'>Rapid Production</span>
                                <h1 className="text-6xl text-black leading-tight font-extrabold md:text-8xl">Personalised styles</h1>
                                <h4 className="text-3xl text-black font-medium mt-2 lg:text-5xl">Making sure our pre-designed assets fit your branding & style guidelines.</h4>
                            </div>
                        </div>
                        <div className="section-graphic mt-[100px]">
                            <AnimateOnScroll><Image src={headerImage} alt="An example image" className='relative z-20 rounded-t-md header-image figma-screen' width='2000' height='1400' priority /></AnimateOnScroll>
                        </div>
                    </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Styles;