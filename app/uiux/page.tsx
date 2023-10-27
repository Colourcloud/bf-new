import NavbarWhite from '../components/common/NavbarWhite';
import Navbar from '../components/common/Navbar';
import SubNavBar from '../components/common/SubNavigation';
import Portfolio from '../components/common/Portfolio';
import Header from '../components/uiux/Header';
import Responsive from '../components/uiux/Responsive';
import Paralax from '../components/uiux/Paralax';

const Application: React.FC = () => {
    const subNavigationItems = [
        { label: 'Responsive Design', href: '#responsive' },
        { label: 'Design Research', href: '#cms-development' },
        { label: 'Interaction Design', href: '#ecommerce' },
        { label: 'Visual Design', href: '#technology' },
    ];

    return (
        <>
            <SubNavBar subNavigationItems={subNavigationItems} />
            <Header />
            <Responsive />
            <Paralax />
        </>
    );
};

export default Application;
