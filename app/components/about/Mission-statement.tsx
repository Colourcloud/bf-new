import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import AnimatedText from '../common/AnimateText';
import AnimateOnScroll from '../common/AnimateOnScroll';


const MissionStatement = () => {


    return (
        <div className='py-8 md:py-20 border-t border-b border-[#222222]'>
            <div className="site-wrapper">
                <section className="mission-statement flex flex-col gap-6 md:flex-row justify-between items-center py-20">
                    <div className="text-block w-full md:w-2/4">
                        <AnimatedText><h4 className='text-white font-bold text-4xl md:text-5xl'>Powerful ideas designed & developed for your customers</h4></AnimatedText>
                    </div>
                    <div className="text-block w-full md:w-2/5">
                        <p className='text-[--text-on-dark] text-lg'>At Builtflat we&apos;ve made it our mission to not only deliver visually stunning designs & development products to our clients, but we make it a priority that what we deliver is loved by your customers. We carefully research your customer base and put ourselves into their shoes to truly understand what their needs and wants are.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default MissionStatement;