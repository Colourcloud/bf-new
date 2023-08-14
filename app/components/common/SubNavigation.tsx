import React from 'react';
import Link from 'next/link'

interface SubNavBarProps {
    subNavigationItems: { label: string; href: string }[];
}

const SubNavBar: React.FC<SubNavBarProps> = ({ subNavigationItems }) => {
    return (
        <div className='sticky top-0 z-50'>
            <div className='navbar w-100 h-16 bg-white shadow-sm'>
                <div className='site-wrapper'>
                    <div className='nav-container flex flex-row justify-between h-16'>
                        <div className='nav-content-left flex flex-row gap-16 items-center'>
                            <h4 className='text-xl font-extrabold'>Services</h4>
                            <ul className='flex flex-row gap-10 items-center'>
                                {/* Render the navigation items dynamically */}
                                {subNavigationItems.map((item, index) => (
                                    <li key={index} className='text-black text-base font-light'>
                                        <Link href={item.href}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubNavBar;