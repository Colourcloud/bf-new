import Header from '../components/partnership/Header';
import Partners from '../components/partnership/Partners';
import TestimonialVideo from '../components/partnership/TestimonialVideo';
import Values from '../components/partnership/Values';
import Statistics from '../components/partnership/Statistics';
import Services from '../components/partnership/Services';
import Testimonials from '../components/common/Testimonials';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Builtflat - Partnership',
    description: "Your clients projects are important to your business, but sometimes workloads and capacity can be limited. We work closely with other design & development agencies who trust us to help enhance, grow and boost their capabilities.",
};


const Partnership: React.FC = () => {
    return (
        <div className='bg-[--dark-background-color]'>
            <Header />
            <Partners />
            {/* <TestimonialVideo /> */}
            <Values />
            <Statistics />
            <Services />
            <Testimonials />
        </div>
    );
};

export default Partnership;
