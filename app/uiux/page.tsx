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
    const subNavigationItems = [
        { label: 'Responsive Design', href: '#responsive' },
        { label: 'Design Research', href: '#design-research' },
        { label: 'Interaction Design', href: '#interaction-research' },
        { label: 'Visual Design', href: '#technology' },
    ];

    return (
        <>
            <SubNavBar subNavigationItems={subNavigationItems} />
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
