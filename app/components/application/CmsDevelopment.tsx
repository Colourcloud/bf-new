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
                    <p className='text-xl font-light'>Whether you want to grow brand awareness, showcase your services, increase sales, or increase user engagement, Builtflat can help. We understand it can be difficult to get your brand online, so let us do the hard work for you.</p>
                </div>
                <div className="section-container flex flex-col lg:flex-row gap-10 spaced-m spaced-p">
                    <div className="section-graphic w-full lg:w-3/5 position: relative;">
                        <Image src="/application/cms-graphic.jpg" alt="dashboard ui for managing users" className='shadow-sm rounded-lg' width="1600" height="800"></Image>
                    </div>
                    <div className="section-text w-full lg:w-2/5 flex flex-col gap-6">
                        <h4 className='text-3xl font-bold'>Making sure your CMS is packed with all the features you need</h4>
                        <p className='font-light text-lg'>Having a vast number of features for your CMS is important to help manage your application. Below are just some of the key features you can expect:</p>
                        <article className='flex flex-col gap-2 mt-4'>
                            <h6 className='font-bold text-base flex flex-row items-center gap-1'><span><MdOutlineCheckCircleOutline className="text-[--primary-color] text-2xl" /></span> User Management</h6>
                            <p className='font-light'>Manage user profiles and administrators that control what&apos;s visible on your website. Assign user roles that give special privileges based on requirements for your project.</p>
                        </article>
                        <article className='flex flex-col gap-2'>
                            <h6 className='font-bold text-base flex flex-row items-center gap-1'><span><MdOutlineCheckCircleOutline className="text-[--primary-color] text-2xl" /></span> Media Management</h6>
                            <p className='font-light'>Control images, icons and text throughout your website using rich drag & drop editors. Create image galleries with a few clicks. Supporting a wide range of different image formats.</p>
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