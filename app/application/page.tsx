import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarWhite from '../components/common/NavbarWhite';
import SubNavBar from '../components/common/SubNavigation';
import Header from '../components/application/Header';
import WebsiteDevelopment from '../components/application/WebsiteDevelopment';

const Application: React.FC = () => {
    const subNavigationItems = [
        { label: 'Website Development', href: '#' },
        { label: 'CMS Development', href: '#' },
        { label: 'E-Commerce', href: '#' },
        { label: 'Technologies', href: '#' },
        { label: 'Scalability', href: '#' },
    ];

    return (
        <>
            <NavbarWhite />
            <SubNavBar subNavigationItems={subNavigationItems} />
            <header className='application-header'>
                <Header></Header>
            </header>
            <WebsiteDevelopment></WebsiteDevelopment>
        </>
    );
};

export default Application;
