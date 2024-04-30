import Image from 'next/image';
import Button from '../common/Button';
import { MdArrowForward, MdOutlineCheckCircleOutline } from "react-icons/md";


const CmsDevelopment = () => {
    return (
        <>
        <section className="builtflat-section spaced-p spaced-m" id="cms-development">
            <div className="site-wrapper max-w-[920px!important] lg:max-w-[1440px!important]">
                <div className="section-text w-full md:w-3/4 flex flex-col gap-8 items-start">
                    <span className='highlighted-purple-text rounded-full text-sm font-medium'>CMS Development</span>
                    <h4 className='text-4xl md:text-5xl font-bold'>Easily manage your content with powerful content management systems</h4>
                    <p className='text-xl font-light'>The CMS is one of the most important parts of a website, that&apos;s why we use a set of awesome content management systems that we can use & develop to fit your business. Super easy to use and full of customisation.</p>
                </div>
                <div className="section-container flex flex-col lg:flex-row gap-10 spaced-m spaced-p">
                    <div className="section-graphic w-full lg:w-3/5 position: relative;">
                        <Image src="/application/cms-graphic.jpg" alt="dashboard ui for managing users" className='shadow-sm rounded-lg' width="1600" height="800"></Image>
                    </div>
                    <div className="section-text w-full lg:w-2/5 flex flex-col gap-6">
                        <h4 className='text-3xl font-bold'>Making sure your CMS is packed with all the features you need</h4>
                        <p className='font-light text-lg'>It&apos;s important your CMS has all the features necessary to manage your website. Check out some of the key features we&apos;ve developed:</p>
                        <article className='flex flex-col gap-2 mt-4'>
                            <h6 className='font-bold text-base flex flex-row items-center gap-1'><span><MdOutlineCheckCircleOutline className="text-[--primary-color] text-2xl" /></span> User Management</h6>
                            <p className='font-light'>Create and manage user roles & profiles from an administration account to set up their privileges. This includes staff and clients with log-in capabilities.</p>
                        </article>
                        <article className='flex flex-col gap-2'>
                            <h6 className='font-bold text-base flex flex-row items-center gap-1'><span><MdOutlineCheckCircleOutline className="text-[--primary-color] text-2xl" /></span> Media Management</h6>
                            <p className='font-light'>Create new galleries or edit existing set assets such as images, videos, icons, text and more through your website with simple drag and drop editors.</p>
                        </article>
                        <article className='flex flex-col gap-2'>
                            <h6 className='font-bold text-base flex flex-row items-center gap-1'><span><MdOutlineCheckCircleOutline className="text-[--primary-color] text-2xl" /></span> Theme Support</h6>
                            <p className='font-light'>Control the look and feel of your website using custom themes. We can easily create tailored themes for your brand which can be installed in a few clicks.</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default CmsDevelopment;