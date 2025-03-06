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
            <Reviews />
        </section>
        </>
    );
};

export default Testimonials;