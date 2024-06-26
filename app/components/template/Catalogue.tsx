import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import AnimateOnScroll from '../common/AnimateOnScroll';
import AnimatedText from '../common/AnimateText';


const Catalogue = () => {


    return (
        <div className="builtflat-container-block bg-[#F7F7F7] py-[100px]">
            <div>
                <div className='overflow-hidden'>
                    <div className="site-wrapper">
                    <section className="builtflat-section relative z-10">
                        <div className="flex flex-col gap-8">
                            <div className="section-text flex flex-col gap-8 w-full xl:w-3/5 md:mx-auto text-left md:text-center items-start md:items-center">
                                <span className='highlighted-purple-text rounded-full text-sm font-medium'>Design Catalogue</span>
                                <AnimatedText><h4 className='text-black text-4xl md:text-7xl font-extrabold'>Get inspired. Browse our design catalog</h4></AnimatedText>
                                <p className='text-black text-xl font-light'>We have loads of templates designed for multiple different industries. Have a look through and see if anything catches your eye! Liking odd &apos;bits and bobs&apos; from different options? Let us know, we&apos;re more than happy to piece templates together to create your ultimate website.</p>
                                <div className="header-buttons flex flex-col items-start sm:flex-row gap-6 mt-10">
                                <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/application" >Book a Viewing</Button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='catalogue-showcase mt-[100px]'>
                        <div className='div1'></div>
                        <div className='div2'></div>
                        <div className='div3'></div>
                        <div className='div4'></div>
                        <div className='div5'></div>
                    </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Catalogue;