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
                <p className='text-xl font-light'>Whether you want to grow brand awareness, showcase your services, increase sales, or increase user engagement, Builtflat can help. We understand it can be difficult to get your brand online, so let us do the hard work for you.</p>
                <div className="section-buttons flex flex-row gap-4">
                  <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/application" >Get started today</Button>
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