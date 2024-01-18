import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import AnimatedText from './AnimateText';

const Testimonials = () => {
    return (
        <>
        <section className="builtflat-section py-[100px] bg-[--dark-background-color]">
            <section className="builtflat-section relative z-10">
                        <div className="flex flex-col gap-8">
                            <div className="section-text flex flex-col gap-8 w-full md:w-3/5 md:mx-auto text-left md:text-center items-start md:items-center">
                                <span className='highlighted-purple-text rounded-full text-sm font-medium'>Design Catalogue</span>
                                <AnimatedText><h4 className='text-black text-4xl md:text-7xl font-extrabold'>Get inspired. Browse our design catalog</h4></AnimatedText>
                                <p className='text-black text-xl font-light'>We have a large collection of pre-designed elements & templates that have already been tried & tested for a large range of different industries. This allows our clients to save time & cost for their projects</p>
                                <div className="header-buttons flex flex-col items-start sm:flex-row gap-6 mt-10">
                                <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/application" >Browse Catalogue</Button>
                                </div>
                            </div>
                        </div>
                </section>
        </section>
        </>
    );
};

export default Testimonials;