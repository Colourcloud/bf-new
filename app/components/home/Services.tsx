import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import { MdArrowCircleRight } from "react-icons/md";
import AnimateOnScroll from '../common/AnimateOnScroll';
import AnimatedText from '../common/AnimateText';

const Services = () => {


    return (
      <div className="builtflat-container-block">
      <div className="site-wrapper">
        <section className="builtflat-section spaced-p spaced-m flex flex-col gap-8">
              <div className="section-text w-full lg:w-3/5 flex flex-col gap-8">
                <span className='text-[#7A4AFF] font-bold'>Services</span>
                <AnimatedText><h2 className='text-4xl md:text-5xl font-bold'>Our experience covers a wide range of digital services to help your brand.</h2></AnimatedText>
                <p className='text-xl font-light'>Whether you want to grow brand awareness, showcase your services, increase sales, or increase user engagement, Builtflat can help. We understand it can be difficult to get your brand online, so let us do the hard work for you.</p>
              </div>
              <div className="service-grid spaced-p">

                <Link href='/application' className='service-card-link'>
                  <div className="service-card p-10">
                    <div className="service-card-text flex flex-col gap-4">
                      <h4 className="text-white text-2xl md:text-3xl font-bold flex flex-row justify-between items-center">Website Development <span className='opacity-40'><MdArrowCircleRight/></span></h4>
                      <p className='text-white w-full md:w-3/4'>Our development services help businesses create custom platforms, to simple online stores. All suited for your customers, no matter the technology.</p>
                    </div>
                    <div className="service-card-image">
                    <Image src="/home/application-development.png" alt="yes" width="1200" height="600" className='right-[-5%] rounded-xl bottom-0 application-development-graphic'></Image>
                    </div>
                  </div>
                </Link>

                <Link href='/uiux' className='service-card-link'>
                <div className="service-card p-10">
                  <div className="service-card-text flex flex-col gap-4">
                    <h4 className="text-white text-2xl md:text-3xl font-bold flex flex-row justify-between items-center">UI / UX Design <span className='opacity-40'><MdArrowCircleRight/></span></h4>
                    <p className='text-white w-full'>Builtflat covers a wide scope of graphic design services to best help your brand. Whether its branding, to marketing, we have you covered.</p>
                  </div>
                  <div className="service-card-image">
                  <Image src="/home/ui-ux-image.png" alt="yes" className='ui-ux-graphic' width="500" height="600"></Image>
                  </div>
                </div>
                </Link>

                <Link href='/application' className='service-card-link'>
                <div className="service-card flex flex-col justify-between">
                  <div className="service-card-text flex flex-col gap-4 px-10 pt-10">
                    <h4 className="text-white text-2xl md:text-3xl font-bold flex flex-row justify-between items-center">Mobile Development <span className='opacity-40'><MdArrowCircleRight/></span></h4>
                    <p className='text-white w-full'>Builtflat covers a wide scope of graphic design services to best help your brand. Whether its branding, to marketing, we have you covered.</p>
                  </div>
                  <div className="service-card-image">
                  <Image src="/home/mobile-dev.png" alt="yes" className='w-full sm:w-4/5 lg:w-full bottom-0 relative flex justify-center' width="800" height="600"></Image>
                  </div>
                </div>
                </Link>

                <Link href='/template-design' className='service-card-link'>
                <div className="service-card service-card flex flex-col justify-between">
                  <div className="service-card-text flex flex-col gap-4 px-10 pt-10">
                    <h4 className="text-white text-2xl md:text-3xl font-bold flex flex-row justify-between items-center">Template Driven Design <span className='opacity-40'><MdArrowCircleRight/></span></h4>
                    <p className='text-white w-full md:w-3/4'>Our template driven design scheme helps businesses get online quickly. With our pre-made templates, we can easily craft the perfect website for your business.</p>
                  </div>
                  <div className="service-card-image flex justify-center">
                  <Image src="/home/template-graphic.png" alt="yes" className='md:w-[100%] bottom-0 right-0 template-graphic' width="2000" height="600"></Image>
                  </div>
                </div>
                </Link>
                
              </div>
            </section>
        </div>
        </div>
    );
};
export default Services;