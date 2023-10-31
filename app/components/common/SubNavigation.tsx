"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface SubNavBarProps {
    subNavigationItems: { label: string; href: string }[];
}

const SubNavBar: React.FC<SubNavBarProps> = ({ subNavigationItems }) => {
    const [activeSection, setActiveSection] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetId = href.replace(/.*#/, "");
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

        const handleScrollVisibility = () => {
            const currentScrollPosition = window.scrollY;
            setIsVisible(currentScrollPosition > 80);
        };

        window.addEventListener('scroll', handleSectionVisibility);
        window.addEventListener('scroll', handleScrollVisibility);
        
        // Trigger the visibility function initially in case the page is loaded with a scroll position > 80
        handleScrollVisibility();

        return () => {
            window.removeEventListener('scroll', handleSectionVisibility);
            window.removeEventListener('scroll', handleScrollVisibility);
        }
    }, [subNavigationItems]);

    const subNavStyle = {
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: isVisible ? 'transform 0.2s ease-in-out, z-index 0s, display 0s' : 'transform 0.2s ease-in-out, z-index 0s 0.2s, display 0s 0.2s',
        zIndex: isVisible ? '50' : '-1',
    };

    return (
        <div className='fixed w-full top-0' style={subNavStyle}>
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
