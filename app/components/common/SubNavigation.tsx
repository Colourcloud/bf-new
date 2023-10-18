"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface SubNavBarProps {
    subNavigationItems: { label: string; href: string }[];
}

const SubNavBar: React.FC<SubNavBarProps> = ({ subNavigationItems }) => {
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        });
    };
    

    useEffect(() => {
        const handleSectionVisibility = () => {
            let currentSection = '';

            subNavigationItems.forEach(item => {
                const element = document.getElementById(item.href.replace('#', ''));
                if (element) {
                    const rect = element.getBoundingClientRect();
            
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        currentSection = item.href;
                    }
                }
            });            

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleSectionVisibility);
        
        return () => {
            window.removeEventListener('scroll', handleSectionVisibility);
        }
    }, [subNavigationItems]);

    return (
        <div className='sticky top-0 z-50'>
            <div className='navbar w-100 h-16 bg-white shadow-sm'>
                <div className='site-wrapper'>
                    <div className='nav-container flex flex-row justify-between h-16'>
                        <div className='nav-content-left flex flex-row gap-10 md:gap-16 items-center overflow-auto no-scroll-bar'>
                            <h4 className='text-base font-extrabold md:text-xl'>Services</h4>
                            <ul className='flex flex-row gap-6 md:gap-10 items-center'>
                                {subNavigationItems.map((item, index) => (
                                    <li key={index} className='text-black text-sm md:text-base font-light whitespace-nowrap'>
                                       <Link href={item.href}>
                                            <span 
                                                className={`cursor-pointer ${activeSection === item.href ? 'text-purple-600' : ''}`}
                                                onClick={(e) => handleScroll(e, item.href)}
                                            >
                                                {item.label}
                                            </span>
                                        </Link>
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
