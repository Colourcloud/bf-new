import Header from '../components/partnership/Header';
import Partners from '../components/partnership/Partners';
import TestimonialVideo from '../components/partnership/TestimonialVideo';
import Values from '../components/partnership/Values';
import Statistics from '../components/partnership/Statistics';
import Services from '../components/partnership/Services';
import Testimonials from '../components/common/Testimonials';


const Partnership: React.FC = () => {
    return (
        <div className='bg-[--dark-background-color]'>
            <Header />
            <Partners />
            <TestimonialVideo />
            <Values />
            <Statistics />
            <Services />
            <Testimonials />
        </div>
    );
};

export default Partnership;
