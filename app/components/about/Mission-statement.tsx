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
                        <AnimatedText><h4 className='text-white font-bold text-4xl md:text-5xl'>Bringing powerful ideas into design, right to your customers</h4></AnimatedText>
                    </div>
                    <div className="text-block w-full md:w-2/5">
                        <p className='text-[--text-on-dark] text-lg'>Here at Builtflat, we&apos;ve made it our mission to not only deliver visually stunning designs &amp; products to our clients, but we make it a priority that what we deliver is understood by your customers. We spend a large portion of our time researching your customer base and truly understanding what they&apos;re needs are. We put ourselves into their shoes, so that we can deliver a product we&apos;d love using ourselves</p>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default MissionStatement;