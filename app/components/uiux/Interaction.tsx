import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimatedText from '../common/AnimateText';
import ScrollSlide from '../common/animation/ScrollSlide';

const Interaction = () => {


    return (
        <>
        <section className="builtflat-section spaced-p spaced-m" id="interaction-research">
            <div className="site-wrapper max-w-[920px!important] lg:max-w-[1440px!important]">
                <div className="section-text w-full md:w-3/4 flex flex-col gap-8 items-start">
                    <span className='highlighted-purple-text rounded-full text-sm font-medium'>Interaction Design</span>
                    <AnimatedText><h4 className='text-4xl md:text-5xl font-bold'>Ensuring a quality user experience with seamless design interactions</h4></AnimatedText>
                    <p className='text-xl font-light'>Your customers expect the best interaction with your brand. That&apos;s why part of our designers mission is to think deeply about how users will interact with the designs we create to give them the best experience possible.</p>
                </div>
            </div>
            <div className="site-wrapper spaced-m">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="w-full min-h-[450px] rounded-lg bg-slate-400">
                        <Image src="/uiux/interaction-graphic-1.jpg" alt="Accounting calculator UI for carbon savings feature on a website" className='rounded-lg max-w-none w-full object-cover h-full' width="1200" height="800"></Image>
                    </div>
                    <div className="w-full min-h-[450px] rounded-lg bg-slate-400">
                        <Image src="/uiux/interaction-graphic-2.jpg" alt="A mobile design website for Flora, an online clothing ecommerce store" className='rounded-lg max-w-none w-full object-cover h-full' width="1200" height="800"></Image>
                    </div>
               </div>
            </div>
        </section>
        </>
    );
};
export default Interaction;