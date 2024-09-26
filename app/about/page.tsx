import NavbarWhite from '../components/common/NavbarWhite';
import Navbar from '../components/common/Navbar';
import SubNavBar from '../components/common/SubNavigation';
import Portfolio from '../components/common/Portfolio';
import Header from '../components/about/Header';
import MissionStatement from '../components/about/Mission-statement';
import Statistics from '../components/about/Statistics';
import Partnering from '../components/about/Partnering';
import Team from '../components/about/Team';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Builtflat - About us',
    description: "We've made it our mission to deliver not only stunning designs, but fully functioning developed products to our clients that are loved by their customers. What makes this possible? Research, experience, knowledge and understanding",
};

const About: React.FC = () => {
    return (
        <>
        <div className='bg-[--dark-background-color]'>
            <Header />
            <MissionStatement />
            <Statistics />
            <Partnering />
            <Team />
        </div>
        </>
    );
};

export default About;
