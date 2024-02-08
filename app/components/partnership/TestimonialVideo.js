import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimatedText from '../common/AnimateText';


const TestimonialVideo = () => {


    return (
       <section className='testimonial-video py-40'>
        <div className="site-wrapper">
            <div className="text-block w-full md:w-4/5">
                <AnimatedText><h2 className='text-white text-4xl md:text-6xl text-bold'>The key difference between us is, we’re not your ordinary team. No matter the job, we have the creative talent to get it done right.</h2></AnimatedText>
            </div>
            <div className="mt-16">
                <iframe width="1440" height="800" src="https://www.youtube.com/embed/VCPGMjCW0is?si=_0glZL6s6loCL5IV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
       </section>
    );
};
export default TestimonialVideo;