import NavbarWhite from '../components/common/NavbarWhite';
import SubNavBar from '../components/common/SubNavigation';
import Header from '../components/application/Header';
import WebsiteDevelopment from '../components/application/WebsiteDevelopment';
import CmsDevelopment from '../components/application/CmsDevelopment';
import CmsSoftware from '../components/application/CmsSoftware';
import Ecommerce from '../components/application/Ecommerce';
import Technology from '../components/application/Technology';
import Portfolio from '../components/common/Portfolio';

const Application: React.FC = () => {
    

    return (
        <>
            <NavbarWhite />
            <Header />
            <WebsiteDevelopment />
            <CmsDevelopment />
            <CmsSoftware />
            <Ecommerce />
            <Technology />
            <Portfolio />
        </>
    );
};

export default Application;
