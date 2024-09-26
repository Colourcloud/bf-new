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
        <div className="values-intro border-b border-[--border-colour-dark] py-10 md:py-20">
            <div className="site-wrapper">
                <div className="section-block">
                    <div className="section-text w-full flex flex-col gap-8">
                        <AnimatedText><h2 className='text-4xl text-white md:text-6xl font-bold w-full md:w-2/3'>We pride ourselves on our companies core values</h2></AnimatedText>
                        <div className='flex flex-col md:flex-row justify-between items-start gap-6'>
                            <p className='text-xl text-[--text-on-dark] font-light w-full md:w-2/3'>We don&apos;t have commitment issues, that&apos;s why we&apos;re deeply committed to our core values which we ingrain into every project we undertake. Straight up - No surprises.</p>
                            <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/application" >Let&apos;s have a chat</Button>
                        </div>
                  </div>
                </div>
            </div>
        </div>
        <div className="values py-10 md:py-20 border-b border-[--border-colour-dark]">
            <div className="site-wrapper">
                <div className="value-container flex flex-col gap-20">
                    <div className="value-row flex flex-col lg:flex-row gap-20 lg:gap-40">
                        <div className="value-card flex flex-col gap-6 items-start max-w-[550px]">
                            <div className="value-icon p-3 rounded-md bg-[--primary-color]"><FaHeart className='text-white text-2xl'/></div>
                            <h4 className='text-white text-3xl font-bold'>Lasting Relationships</h4>
                            <p className='text-[--text-on-dark]'>Long lasting positive relationships are the best, aren&apos;t they? We believe so. Through effective designs, amazing communication, and the common goal to help our clients we&apos;re out here to create lifelong friendships.</p>
                        </div>
                        <div className="value-card flex flex-col gap-6 items-start max-w-[550px]">
                            <div className="value-icon p-3 rounded-md bg-[--primary-color]"><AiOutlineFileSearch className='text-white text-2xl'/></div>
                            <h4 className='text-white text-3xl font-bold'>Research First</h4>
                            <p className='text-[--text-on-dark]'>Before we start any project, we take the time to strengthen our understanding of your project and needs through research. We sit down with our clients to find out the in&apos;s and out&apos;s of their business, customers and brand to translate that knowledge into our work.</p>
                        </div>
                    </div>
                    <div className="value-row flex flex-col lg:flex-row gap-20 lg:gap-40">
                        <div className="value-card flex flex-col gap-6 items-start max-w-[550px]">
                            <div className="value-icon p-3 rounded-md bg-[--primary-color]"><GrTechnology className='text-white text-2xl'/></div>
                            <h4 className='text-white text-3xl font-bold'>Design & Technology Driven</h4>
                            <p className='text-[--text-on-dark]'>When it comes to building any digital platform, we ensure it looks, feels and works the right way. By using the latest technologies backed with some awesome designs that keep scalability in mind, we can create a platform for your business to suit your needs right now and as your business grows in the future.</p>
                        </div>
                        <div className="value-card flex flex-col gap-6 items-start max-w-[550px]">
                            <div className="value-icon p-3 rounded-md bg-[--primary-color]"><GoMirror className='text-white text-2xl'/></div>
                            <h4 className='text-white text-3xl font-bold'>Transparency</h4>
                            <p className='text-[--text-on-dark]'>Just as we weren&apos;t born yesterday, you weren&apos;t either. That&apos;s why we know honesty and openness is the best policy which we maintain with every client. Your trust is super important to us and allows us to keep doing our thing so you can be assured no hidden surprises, no radio silence, and no agendas other than getting your job done properly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Values