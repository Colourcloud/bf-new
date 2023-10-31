import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimatedText from '../common/AnimateText';

const Research = () => {


    return (
        <>
        <section className="builtflat-section" id="design-research">
            <div className="site-wrapper spaced-m spaced-p">
            <div className="section-text flex flex-col gap-8 w-full md:w-3/5 md:mx-auto text-left md:text-center items-start md:items-center">
                <span className='highlighted-purple-text rounded-full text-sm font-medium'>Design Research</span>
                <AnimatedText><h4 className='text-4xl md:text-5xl font-bold'>A collaborative experience to speed up those busy workflows</h4></AnimatedText>
                <p className='text-xl font-light'>We work closely with other design & development agencies, to help them meet their client deadlines. Leveraging workloads can greatly increase the productivity of a team, to deliver a more polished project.</p>       
            </div>
            </div>
        </section>
        <div className="site-wrapper">
        <section className="builtflat-section spaced-p spaced-m flex flex-col lg:flex-row gap-20 items-center relative z-10">
              <div className="section-text flex flex-col gap-8 w-full lg:w-2/5">
              <AnimatedText><h2 className='text-4xl md:text-5xl font-bold'>Exploring User Needs and Behaviors Through Research</h2></AnimatedText>
                <p className='text-xl font-light'>Nowadays it seems like you can buy anything online, from tools to food essentials and cars to holidays. E-commerce websites have not only opened consumers purchasing options to more than just what the local stores have, they’ve given consumers around the world the ability to make purchases on their terms wherever there’s an internet connection.. Which is basically everywhere!</p>
                <div className="section-buttons flex flex-row gap-4">
                </div>
              </div>
              <div className="section-graphic">
                <Image src="/uiux/research.jpg" alt="header-graphic" width="800" height="500" className='rounded-lg w-full object-cover'></Image>
              </div>
        </section>
        </div>
        
        </>
    );
};
export default Research;