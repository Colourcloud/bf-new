import NavbarWhite from '../components/common/NavbarWhite';
import Navbar from '../components/common/Navbar';
import SubNavBar from '../components/common/SubNavigation';
import Portfolio from '../components/common/Portfolio';
import Header from '../components/uiux/Header';
import Responsive from '../components/uiux/Responsive';
import Paralax from '../components/uiux/Paralax';
import Research from '../components/uiux/Research';
import Interaction from '../components/uiux/Interaction';
import Faq from '../components/uiux/Faq';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Builtflat - User Interface Design',
    description: "You need to be unique to stand out in a crowd, why wouldn't you do the same with your website? Our team pushes the boundaries of interface design to capture your brand and the eyes of your customers.",
};


const Application: React.FC = () => {

    return (
        <>
            
            <Header />
            <Responsive />
            <Paralax />
            <Research />
            <Interaction />
            <Faq />
            <Portfolio />
        </>
    );
};

export default Application;
