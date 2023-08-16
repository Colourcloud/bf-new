import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarWhite from '../components/common/NavbarWhite';
import SubNavBar from '../components/common/SubNavigation';
import Header from '../components/application/Header';
import WebsiteDevelopment from '../components/application/WebsiteDevelopment';
import CmsDevelopment from '../components/application/CmsDevelopment';
import CmsSoftware from '../components/application/CmsSoftware';
import Ecommerce from '../components/application/Ecommerce';

const Application: React.FC = () => {
    const subNavigationItems = [
        { label: 'Website Development', href: '#website-development' },
        { label: 'CMS Development', href: '#cms-development' },
        { label: 'E-Commerce', href: '#ecommerce' },
        { label: 'Technologies', href: '#' },
        { label: 'Scalability', href: '#' },
    ];

    return (
        <>
            <NavbarWhite />
            <SubNavBar subNavigationItems={subNavigationItems} />
            <Header />
            <WebsiteDevelopment />
            <CmsDevelopment />
            <CmsSoftware />
            <Ecommerce />
        </>
    );
};

export default Application;
