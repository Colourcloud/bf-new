import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimatedText from '../common/AnimateText';
import { FaHeart } from "react-icons/fa6";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { GoMirror } from "react-icons/go";

const Values = () => {
  return (
    <div className=''>
        <div className="values-intro border-b border-[--border-colour-dark] pb-10 md:pb-20">
            <div className="site-wrapper">
                <div className="section-block">
                    <div className="section-text w-full flex flex-col gap-8">
                        <AnimatedText><h2 className='text-4xl text-white md:text-6xl font-bold w-full md:w-2/3'>We pride ourselves on our companies core values</h2></AnimatedText>
                        <div className='flex flex-row justify-between'>
                            <p className='text-xl text-[--text-on-dark] font-light w-full md:w-2/3'>We are deeply committed to upholding our core values, ensuring they are intricately woven into every project we undertake and infused in every interaction we engage in.</p>
                            <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/application" >Let's have a chat</Button>
                        </div>
                  </div>
                </div>
            </div>
        </div>
        <div className="values py-10 md:py-20 border-b border-[--border-colour-dark]">
            <div className="site-wrapper">
                <div className="value-container flex flex-col gap-20">
                    <div className="value-row flex flex-row gap-40">
                        <div className="value-card flex flex-col gap-6 items-start max-w-[550px]">
                            <div className="value-icon p-3 rounded-md bg-[--primary-color]"><FaHeart className='text-white text-2xl'/></div>
                            <h4 className='text-white text-3xl font-bold'>Lasting Relationships</h4>
                            <p className='text-[--text-on-dark]'>We&amp;re here to stay so one of our core values is to create great long lasting relationships with all our clients. Through amazing design, affordable pricing, top-notch communication, and giving you exactly what you need, we hope to earn your trust and friendship.</p>
                        </div>
                        <div className="value-card flex flex-col gap-6 items-start max-w-[550px]">
                            <div className="value-icon p-3 rounded-md bg-[--primary-color]"><AiOutlineFileSearch className='text-white text-2xl'/></div>
                            <h4 className='text-white text-3xl font-bold'>Research First</h4>
                            <p className='text-[--text-on-dark]'>Before we start any project, we always back-up the direction we take with research on all things related to your brand. We sit down with our clients to better understand the in&amp;s and out&amp;s of their business and brand so we can translate that into our work.</p>
                        </div>
                    </div>
                    <div className="value-row flex flex-row gap-40">
                        <div className="value-card flex flex-col gap-6 items-start max-w-[550px]">
                            <div className="value-icon p-3 rounded-md bg-[--primary-color]"><GrTechnology className='text-white text-2xl'/></div>
                            <h4 className='text-white text-3xl font-bold'>Design & Technology Driven</h4>
                            <p className='text-[--text-on-dark]'>When it comes to building a platform for your business, we want to ensure it looks and works the right way. Using the latest technologies backed with some awesome designing that keeps scalability in mind, we can create the platform your business needs right now and as your business grows.</p>
                        </div>
                        <div className="value-card flex flex-col gap-6 items-start max-w-[550px]">
                            <div className="value-icon p-3 rounded-md bg-[--primary-color]"><GoMirror className='text-white text-2xl'/></div>
                            <h4 className='text-white text-3xl font-bold'>Transparency</h4>
                            <p className='text-[--text-on-dark]'>Just as you weren&amp;t born yesterday, we weren&amp;t either. That&amp;s why we know that being open and honest is the best policy which we maintain with all our clients. Your trust is important to us so we keep you in the loop throughout the entire process. No hidden surprises, no radio silence, no agendas other than getting your job done properly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Values