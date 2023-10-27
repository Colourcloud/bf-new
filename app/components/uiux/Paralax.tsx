import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimatedText from '../common/AnimateText';

const Paralax = () => {


    return (
        <>
        <section className="builtflat-section dark-bg" id="cms-development">
            <div className="section-wrapper mx-auto relative max-w-[1920px] flex flex-row">
               <div className="paralax-image section-graphic w-[60%] bg-white h-[700px]"></div>
               <div className="section-text flex flex-col gap-8 w-[40%] justify-center p-16">
                    <AnimatedText><h4 className='text-5xl font-black text-white'>Beautiful interfaces are what we know.</h4></AnimatedText>
                    <div className="section-text-group flex flex-col gap-3">
                        <h6 className='font-bold text-lg text-white'>Researching your brand</h6>
                        <p className='font-light text-base text-white'>When it comes to designing for your business, we make sure to do thorough research around your branding and users. We make sure our designs best represent your brand and its values.</p>
                    </div>
                    <div className="section-text-group flex flex-col gap-3">
                        <h6 className='font-bold text-lg text-white'>Collaborating with our clients</h6>
                        <p className='font-light text-base text-white'>We love it when our clients have their say and encourage you to have your own input on every design deicision we make. You know your brand best, that’s why we listen to what you have to say.</p>
                    </div>
               </div>
            </div>
        </section>
        </>
    );
};
export default Paralax;