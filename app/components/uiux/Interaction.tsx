import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimatedText from '../common/AnimateText';
import ScrollSlide from '../common/animation/ScrollSlide';

const Interaction = () => {


    return (
        <>
        <section className="builtflat-section spaced-p spaced-m" id="responsive">
            <div className="site-wrapper max-w-[920px!important] lg:max-w-[1440px!important]">
                <div className="section-text w-full md:w-3/4 flex flex-col gap-8 items-start">
                    <span className='highlighted-purple-text rounded-full text-sm font-medium'>Interaction Design</span>
                    <AnimatedText><h4 className='text-4xl md:text-5xl font-bold'>Keeping every screen size in mind. Smooth user experience not matter the device</h4></AnimatedText>
                    <p className='text-xl font-light'>Whether you want to grow brand awareness, showcase your services, increase sales, or increase user engagement, Builtflat can help. We understand it can be difficult to get your brand online, so let us do the hard work for you.</p>
                </div>
            </div>
            <div className="site-wrapper spaced-m">
               
            </div>
        </section>
        </>
    );
};
export default Interaction;