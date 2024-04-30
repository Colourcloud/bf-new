import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimatedText from '../common/AnimateText';

const Research = () => {


    return (
        <>
        <section id="design-research">
        <section className="builtflat-section">
            <div className="site-wrapper spaced-m spaced-p">
            <div className="section-text flex flex-col gap-8 w-full lg:w-3/5 md:mx-auto text-left md:text-center items-start md:items-center">
                <span className='highlighted-purple-text rounded-full text-sm font-medium'>Design Research</span>
                <AnimatedText><h4 className='text-4xl md:text-5xl font-bold'>Design research is key to your website&apos;s performance.</h4></AnimatedText>
                <p className='text-xl font-light'>Your brand has a deep bond to your customers, it&apos;s something every touch point communicates to them. We first research your brand, learn the language and then let it influence the design.</p>       
            </div>
            </div>
        </section>
        <div className="site-wrapper">
        <section className="builtflat-section spaced-p spaced-m flex flex-col lg:flex-row gap-20 items-center relative z-10">
              <div className="section-text flex flex-col gap-8 w-full lg:w-2/5">
              <AnimatedText><h2 className='text-4xl md:text-5xl font-bold'>Exploring User Needs and Behaviors Through Research</h2></AnimatedText>
                <p className='text-xl font-light'>Design research is the superhero of UX design. It rescues design teams from the peril of designing in the dark, where creators might fall victim to the “I&apos;m everyone” illusion. We use facts, not fiction so our team can confidently rely on real evidence to ensure our designs aren&apos;t just guess-work or biassed.</p>
                <div className="section-buttons flex flex-row gap-4">
                </div>
              </div>
              <div className="section-graphic">
                <Image src="/uiux/research.jpg" alt="header-graphic" width="800" height="500" className='rounded-lg w-full object-cover'></Image>
              </div>
        </section>
        </div>
        </section>
        
        </>
    );
};
export default Research;