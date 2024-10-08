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
                <AnimatedText><h2 className='text-4xl md:text-5xl font-bold'>Our experience covers a wide range of digital services to help your business grow</h2></AnimatedText>
                <p className='text-xl font-light'>We&apos;ve combined our web services into four design & development offerings built to boost up your site. Not sure what you&apos;re looking for? <Link href="/contact" className='text-[--primary-color]'>Contact us here.</Link></p>
              </div>
              <div className="service-grid spaced-p">

                <Link href='/application' className='service-card-link'>
                  <div className="service-card p-10">
                    <div className="service-card-text flex flex-col gap-4">
                      <h4 className="text-white text-2xl md:text-3xl font-bold flex flex-row justify-between items-center">Website Development <span className='opacity-40'><MdArrowCircleRight/></span></h4>
                      <p className='text-white w-full md:w-3/4'>Our development services help businesses create custom platforms, to simple online stores. Built to your needs. Made for your customers. No matter the technology.</p>
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
                    <p className='text-white w-full'>Our top-notch UX/UI graphic designers can craft up websites, branding, applications, marketing and more.</p>
                  </div>
                  <div className="service-card-image">
                  <Image src="/home/ui-ux-image.png" alt="yes" className='ui-ux-graphic' width="500" height="600"></Image>
                  </div>
                </div>
                </Link>

                <Link href='/mobile-development' className='service-card-link'>
                <div className="service-card flex flex-col justify-between">
                  <div className="service-card-text flex flex-col gap-4 px-10 pt-10">
                    <h4 className="text-white text-2xl md:text-3xl font-bold flex flex-row justify-between items-center">Mobile Development <span className='opacity-40'><MdArrowCircleRight/></span></h4>
                    <p className='text-white w-full'>Builtflat can deliver the latest in app development. From Progressive Web Apps, Apple IOS, and Android. Find out here how we can add value to your application project.</p>
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
                    <p className='text-white w-full md:w-3/4'>Our template driven design program helps businesses get online quickly. With our pre-made web templates we can easily craft up the perfect website for your business.</p>
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