import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import AnimatedText from './AnimateText';
import Reviews from '../locations/Reviews';

import testimonialData from '../../data/Testimonial.json';

const Testimonials: React.FC = () => {

    const chunkArray = (array: any[], chunkSize: number) => {
        let result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const rows = chunkArray(testimonialData, 3); // 3 cards per row

    
    return (
        <>
        <section className="builtflat-section pt-[100px] pb-10 bg-[--dark-background-color]">
            <section className="builtflat-section relative z-10">
                <div className="flex flex-col gap-8">
                    <div className="section-text flex flex-col gap-8 w-full px-4 xl:w-3/5 md:mx-auto text-left md:text-center items-start md:items-center">
                        <span className='highlighted-purple-text rounded-full text-sm font-medium'>Testimonials</span>
                        <AnimatedText><h4 className='text-white text-4xl md:text-5xl font-bold'>Not sure if this is right for you? Connect with us to see how we can help you</h4></AnimatedText>
                        <p className='text-white text-xl font-light'>We value long lasting relationships with our clients, that&apos;s why it&apos;s our goal to deliver the best website service possible and earn your trust while doing it. Find out below why Builtflat is the best solution for your business!</p>
                        <div className="header-buttons flex flex-col items-start sm:flex-row gap-6 mt-10">
                        <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/contact" >Book a free consultation </Button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="hidden invisible md:block md:visible">
                <Reviews />
            </div>
            <div className="site-wrapper spaced-m spaced-p md:hidden md:invisible">
                <h6 className='text-left lg:text-center text-xl lg:text-4xl font-semibold opacity-50 text-white'>Hear it from our clients!</h6>
                <section className="testimonial-cards flex flex-col xl:flex-row flex-wrap gap-6 mt-12">
                    {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="card-row flex flex-col xl:flex-row gap-6">
                    {row.map((item) => (
                        <div key={item.id} className="quote-card w-full 2xl:w-[450px] p-6 rounded-md border border-[#222] flex flex-col gap-6">
                            <div className="top-section flex flex-row gap-3">
                                <Image src={item.imageSrc} alt={item.altText} className="rounded-full w-11 h-11" width="120" height="120" />
                                <div className="test-name">
                                    <h4 className='text-white font-medium'>{item.name}</h4>
                                    <p className='text-white font-light'>{item.company}</p>
                                </div>
                            </div>
                            <p className='text-white font-light'>{item.testimonial}</p>
                        </div>
                    ))}
                </div>
                ))}
            </section>
            </div>
        </section>
        </>
    );
};

export default Testimonials;