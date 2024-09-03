import NavbarWhite from '../components/common/NavbarWhite';
import Navbar from '../components/common/Navbar';
import SubNavBar from '../components/common/SubNavigation';
import Portfolio from '../components/common/Portfolio';
import Header from '../components/uiux/Header';
import Responsive from '../components/uiux/Responsive';
import Paralax from '../components/uiux/Paralax';
import Research from '../components/uiux/Research';
import Interaction from '../components/uiux/Interaction';

const Application: React.FC = () => {
    

    return (
        <>
            
            <Header />
            <Responsive />
            <Paralax />
            <Research />
            <Interaction />
            <Portfolio />
        </>
    );
};

export default Application;
