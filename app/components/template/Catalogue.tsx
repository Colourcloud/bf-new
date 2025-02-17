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
                                <AnimatedText><h4 className='text-black text-4xl md:text-6xl font-bold !leading-3'>Get inspired. Browse our design catalog</h4></AnimatedText>
                                <p className='text-black text-xl font-light'>We have loads of templates designed for multiple different industries. We&apos;re also more than happy to piece templates or elements together from two or more different ones to create your ultimate website. Want to have a look? Let us know!</p>
                                <div className="header-buttons flex flex-col items-start sm:flex-row gap-6 mt-10">
                                <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/application" >Book a Viewing</Button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='catalogue-showcase mt-[100px]'>
                        <div className='div1 overflow-hidden'>
                            <Image src="/template-design/catalogue-2.png" alt="Most popular products and client testimonial sections on a template website for an online ecommerce furniture store" width="1200" height="500" className='object-fit h-full'></Image>
                        </div>
                        <div className='div2 overflow-hidden'>
                            <Image src="/template-design/catalogue-1.png" alt="Blog/Article section view on a web template" width="1200" height="500" className='object-cover h-full'></Image>
                        </div>
                        <div className='div3 overflow-hidden'>
                            <Image src="/template-design/catalogue-3.png" alt="Best selling products section on a ecommerce template site showing four different chairs for sale" width="1200" height="500" className='object-fit h-full'></Image>
                        </div>
                        <div className='div4 overflow-hidden'>
                            <Image src="/template-design/catalogue-4.png" alt="Tablet view for a software template website" width="1200" height="500" className='object-fit h-full'></Image>
                        </div>
                        <div className='div5 overflow-hidden'>
                            <Image src="/template-design/catalogue-5.png" alt="Mobile view layout for a online clothing ecommerce template website" width="1200" height="500" className='object-fit h-full'></Image>
                        </div>
                    </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Catalogue;