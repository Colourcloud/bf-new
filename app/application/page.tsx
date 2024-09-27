import NavbarWhite from '../components/common/NavbarWhite';
import SubNavBar from '../components/common/SubNavigation';
import Header from '../components/application/Header';
import WebsiteDevelopment from '../components/application/WebsiteDevelopment';
import CmsDevelopment from '../components/application/CmsDevelopment';
import CmsSoftware from '../components/application/CmsSoftware';
import Ecommerce from '../components/application/Ecommerce';
import Technology from '../components/application/Technology';
import Portfolio from '../components/common/Portfolio';
import Faq from '../components/application/Faq';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Builtflat - Website & Application development',
    description: "Our fully customisable websites are developed using the latest tech with scalability, security, and functionality in mind. We don't joke when we say you and your clients will love it.",
};

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
            {/* <Faq /> */}
            <Portfolio />
        </>
    );
};

export default Application;
