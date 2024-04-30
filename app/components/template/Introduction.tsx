import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import AnimateOnScroll from '../common/AnimateOnScroll';
import AnimatedText from '../common/AnimateText';


const Introduction = () => {


    return (
        <div className="builtflat-container-block bg-[--dark-background-color] py-[100px]">
            <div>
                <div className='overflow-hidden'>
                    <div className="site-wrapper">
                    <section className="builtflat-section relative z-10">
                        <div className="flex flex-col gap-8">
                            <div className="section-text flex flex-col gap-8 w-full xl:w-3/5 md:mx-auto text-left md:text-center items-start md:items-center">
                                <span className='highlighted-purple-text rounded-full text-sm font-medium'>Rapid Production</span>
                                <AnimatedText><h4 className='text-white text-4xl md:text-7xl font-bold'>Accelerating your online presence efficiently</h4></AnimatedText>
                                <p className='text-white text-xl font-light'>With our pre-designed template websites all the hard work is already done for you. This means we can cut the delivery time of a standard website down by over 50%. Less time, less cost, less mucking around!</p>
                                <div className="header-buttons flex flex-col items-start sm:flex-row gap-6 mt-10">
                                <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/contact" >Book a free consultation</Button>
                                </div>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Introduction;