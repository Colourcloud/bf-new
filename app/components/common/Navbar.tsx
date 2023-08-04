import React from 'react';
import Link from 'next/link'

const Navbar = () => {
    const navigationItems = [
        { label: 'Solutions', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Why Builtflat', href: '#' },
        { label: 'Partnership', href: '#' },
        { label: 'Blog', href: '#' }
    ];

    return (
        <div>
            <div className='navbar w-100 h-16 bg-transparent relative z-10'>
                <div className='site-wrapper'>
                    <div className='nav-container flex flex-row justify-between h-16'>
                        <div className='nav-content-left flex flex-row gap-16 items-center'>
                            <Link href="/" className='logo'><svg className='w-11/12' xmlns="http://www.w3.org/2000/svg" width="115.852" height="37.029" viewBox="0 0 115.852 37.029"><defs><clipPath id="a"><path d="M8.385,6.838h0L7.665,8.8l19.62,7.243L28,14.08A10.455,10.455,0,0,0,21.818.651h0A10.445,10.445,0,0,0,8.385,6.838" transform="translate(-7.665 0)" fill="none"/></clipPath><linearGradient id="b" x1="0.131" y1="1.588" x2="0.138" y2="1.588" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#7a4aff"/><stop offset="1" stop-color="#5232c6"/></linearGradient><clipPath id="c"><path d="M2.628,23.976l-.156.423L1.9,25.934l-.737,2A18.748,18.748,0,0,0,0,34.4v.067A18.8,18.8,0,0,0,12.285,52.06l3.961,1.461a10.437,10.437,0,0,0,3.595.648h.042a10.459,10.459,0,0,0,9.789-6.842q.086-.234.161-.471l0,0A10.647,10.647,0,0,0,23.212,33.8L5.831,27.387a4.183,4.183,0,0,1-2.686-4.581,10.4,10.4,0,0,0-.517,1.17" transform="translate(0 -22.806)" fill="none"/></clipPath><linearGradient id="d" x1="0.221" y1="0.77" x2="0.225" y2="0.77" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#8c62ff"/><stop offset="0.585" stop-color="#7a4aff"/><stop offset="1" stop-color="#6f4aff"/></linearGradient></defs><g transform="translate(-146 68.438)"><g transform="translate(-8178 -6779.06)"><g transform="translate(8324 6711)"><text transform="translate(34.852 25.636)" fill="#fff" font-size="23" font-family="Roboto-Bold, Roboto" font-weight="700" letter-spacing="-0.01em"><tspan x="0" y="0">Built</tspan><tspan y="0" letter-spacing="0.001em">fl</tspan><tspan y="0">at</tspan></text></g></g><g transform="translate(146 -68.438)"><g transform="translate(1.904 0)"><g clip-path="url(#a)"><path d="M-9.67-21.392-18.631-1.779,7.813,5.279l8.961-19.613Z" transform="translate(12.098 16.077)" fill="url(#b)"/></g></g><g transform="translate(0 5.666)"><g clip-path="url(#c)"><path d="M6.247-10.937-30.875-31.072l-19.21,38,37.122,20.134Z" transform="translate(37.642 17.686)" fill="url(#d)"/></g></g></g></g></svg></Link>
                            <ul className='flex flex-row gap-16'>
                                {/* Render the navigation items dynamically */}
                                {navigationItems.map((item, index) => (
                                    <li key={index} className='text-white'>
                                        <Link href={item.href}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='nav-content-right flex items-center'>
                            <Link className="px-7 py-3 text-sm rounded-md button-behaviour relative background-purple hover: text-white " href="/contact">Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;