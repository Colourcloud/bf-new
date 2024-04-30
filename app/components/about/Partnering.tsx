import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import AnimatedText from '../common/AnimateText';
import AnimateOnScroll from '../common/AnimateOnScroll';
import PartnerImageOne from '../../../public/about/partner-image-1.jpg';
import PartnerImageTwo from '../../../public/about/partner-image-2.jpg';


const Partnering = () => {


    return (
        <div className="builtflat-container-block bg-[--dark-background-color] py-20 md:py-[160px]">
            <div>
                <div className='overflow-hidden'>
                    <div className="site-wrapper">
                    <section className="builtflat-section relative z-10">
                        <div className="flex flex-col gap-8">
                            <div className="section-text flex flex-col gap-8 w-full xl:w-3/5 md:mx-auto text-left md:text-center items-start md:items-center">
                                <span className='highlighted-purple-text rounded-full text-sm font-medium'>Partnership</span>
                                <AnimatedText><h4 className='text-white text-4xl md:text-7xl font-bold'>Partnering with other talented teams</h4></AnimatedText>
                                <p className='text-[--text-on-dark] text-xl font-light'>Maybe you&apos;re expanding out and don&apos;t quite have all the pieces to the puzzle? You have tight deadlines that are cutting it a little bit too close? Or maybe you&apos;ve been handed more work than your capacity? Great! We work closely with other design and development agencies quite like yourself all the time. Find out more about how you can leverage Builtflat&apos;s team on your projects below!</p>
                                <div className="header-buttons flex flex-col items-start sm:flex-row gap-6 mt-10">
                                <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/partnership" >Learn about Partnerships</Button>
                                </div>
                            </div>
                        </div>
                        <div className="partner-images flex flex-col lg:flex-row gap-5 py-12">
                            <Image src={PartnerImageOne} alt="An example image" className='relative z-20 rounded-md w-full lg:w-2/4' width='1200' height='500' priority  />
                            <Image src={PartnerImageTwo} alt="An example image" className='relative z-20 rounded-md w-full lg:w-2/4' width='1200' height='500' priority />
                        </div>
                    </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Partnering;