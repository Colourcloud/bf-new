import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import AnimatedText from '../common/AnimateText';
import IntroductionImage from '../../../public/home/test.jpg';


const HomeIntroduction = () => {


    return (
      <div className="builtflat-container-block">
      <div>
      <div className="site-wrapper">
        <section className="builtflat-section spaced-p spaced-m flex flex-col lg:flex-row gap-9 items-center relative z-10">
              <div className="section-text flex flex-col gap-8 w-full lg:w-2/5">
              <AnimatedText><h2 className='text-4xl md:text-5xl font-bold'>We help businesses thrive through effective digital design</h2></AnimatedText>
                <p className='text-xl font-light'>Just like us, every business we&apos;ve worked with has been unique in their own way. That&apos;s why we adapt our solutions to every client we have. We work with you to create the best tailor-fitted outcome to reach your website goals.</p>
                <div className="section-buttons flex flex-row gap-4">
                  <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/contact" >Get started today</Button>
                </div>
              </div>
              <div className="section-graphic">
                <Image src={IntroductionImage} alt="header-graphic" width="800" placeholder='blur' priority height="500" className='rounded-lg'></Image>
              </div>
        </section>
      </div>
      </div>
      </div>
    );
};
export default HomeIntroduction;