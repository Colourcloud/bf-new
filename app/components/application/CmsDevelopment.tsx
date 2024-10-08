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
                    <p className='text-xl font-light'>The CMS is one of the most important parts of every website. That&apos;s why we use a set of awesome content management systems that can be developed to fit your site&apos;s needs. Super easy to use and full of customisation.</p>
                </div>
                <div className="section-container flex flex-col lg:flex-row gap-10 spaced-m spaced-p">
                    <div className="section-graphic w-full lg:w-3/5 position: relative;">
                        <Image src="/application/cms-graphic.jpg" alt="Graphic of a CMS dashboard user interface for managing business employees" className='shadow-sm rounded-lg' width="1600" height="800"></Image>
                    </div>
                    <div className="section-text w-full lg:w-2/5 flex flex-col gap-6 justify-center">
                        <h4 className='text-3xl font-bold'>Our Content Management Systems are &apos;packed to the brim&apos; with features to fit your needs</h4>
                        <p className='font-light text-lg'>It&apos;s important your CMS has the right functions and features to manage your website. Here are some of the key features we use in each:</p>
                        <article className='flex flex-col gap-2 mt-4'>
                            <h6 className='font-bold text-base flex flex-row items-center gap-1'><span><MdOutlineCheckCircleOutline className="text-[--primary-color] text-2xl" /></span> User Management</h6>
                            <p className='font-light'>Create and manage user roles & profiles from an administration account to set up their privileges. This includes staff and clients with log-in capabilities.</p>
                        </article>
                        <article className='flex flex-col gap-2'>
                            <h6 className='font-bold text-base flex flex-row items-center gap-1'><span><MdOutlineCheckCircleOutline className="text-[--primary-color] text-2xl" /></span> Media Management</h6>
                            <p className='font-light'>Create and edit your website&apos;s assets such as images, videos, icons, text and more. If you need something to be editable, it can happen.</p>
                        </article>
                        <article className='flex flex-col gap-2'>
                            <h6 className='font-bold text-base flex flex-row items-center gap-1'><span><MdOutlineCheckCircleOutline className="text-[--primary-color] text-2xl" /></span> Theme Support</h6>
                            <p className='font-light'>Keep the look and feel of your website fresh by using custom themes. We can easily create themes tailored for specific brand looks which can be changed with a few clicks.</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default CmsDevelopment;