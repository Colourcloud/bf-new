import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimatedText from '../common/AnimateText';
import ScrollSlide from '../common/animation/ScrollSlide';

const Responsive = () => {


    return (
        <>
        <section className="builtflat-section spaced-p spaced-m" id="responsive">
            <div className="site-wrapper max-w-[920px!important] lg:max-w-[1440px!important]">
                <div className="section-text w-full md:w-3/4 flex flex-col gap-8 items-start">
                    <span className='highlighted-purple-text rounded-full text-sm font-medium'>Responsive Design</span>
                    <AnimatedText><h4 className='text-4xl md:text-5xl font-bold'>Keeping every screen size in mind for a smooth user experience, no matter the device</h4></AnimatedText>
                    <p className='text-xl font-light'>Long gone are the days of desktops being the most common screens used. Responsive design isn&apos;t a &apos;maybe&apos; unless you want your application interface to look.. Well - Terrible.</p>
                </div>
            </div>
            <div className="site-wrapper spaced-m responsive-wrapper">
               <div className="responsive-showcase flex-col lg:flex-row gap-6 mx-auto hidden invisible lg:visible lg:flex">
                    <div className="responsive-card w-[720px] shadow-md rounded-md bg-white">
                        <Image src="/uiux/responsive-group1-1.jpg" alt="desktop site design view for an I.T Services website" className='rounded-lg max-w-none w-full object-fit' width="1200" height="800"></Image>
                    </div>
                    <div className="responsive-card w-[480px] shadow-md rounded-md bg-white">
                        <Image src="/uiux/responsive-group1-2.jpg" alt="Tablet website design for an I.T Services site" className='rounded-lg max-w-none w-full object-fit' width="1200" height="800"></Image>
                    </div>
                    <div className="responsive-card w-[340px] shadow-md rounded-md bg-white">
                        <Image src="/uiux/responsive-group1-3.jpg" alt="Mobile site design view for an I.T Services website" className='rounded-lg max-w-none w-full object-fit' width="1200" height="800"></Image>
                    </div>
                </div>
                <div className="flex flex-row md:flex-row gap-6 mx-auto lg:hidden lg:invisible">
                    <div className="responsive-card w-full md:w-full shadow-md rounded-md bg-white">
                        <Image src="/uiux/responsive-group1-2.jpg" alt="Tablet website design for an I.T Services site" className='rounded-lg max-w-none w-full object-fit' width="1200" height="800"></Image>
                    </div>
                    <div className="responsive-card w-2/4 shadow-md rounded-md bg-white flex self-start">
                        <Image src="/uiux/responsive-group1-3.jpg" alt="Mobile site design view for an I.T Services website" className='rounded-lg max-w-none w-full object-fit' width="1200" height="800"></Image>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Responsive;