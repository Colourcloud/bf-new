import NavbarWhite from '../components/common/NavbarWhite';
import Navbar from '../components/common/Navbar';
import SubNavBar from '../components/common/SubNavigation';
import Portfolio from '../components/common/Portfolio';
import Header from '../components/template/Header';
import Introduction from '../components/template/Introduction';
import Services from '../components/template/Services';
import Styles from '../components/template/Styles';
import Catalogue from '../components/template/Catalogue';
import Testimonials from '../components/common/Testimonials';

const Template: React.FC = () => {
    return (
        <>
            <Header />
            <Introduction />
            <Services />
            <Styles />
            <Catalogue />
            <Testimonials />
            <Portfolio />
        </>
    );
};

export default Template;
