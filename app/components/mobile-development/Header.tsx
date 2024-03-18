import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../common/Navbar';
import Button from '../common/Button';

const Header = () => {


    return (
      <>
        <header className='home-page'>
          <Navbar></Navbar>
          <div className="site-wrapper">
            <div className="header-content flex flex-col spaced-m spaced-p w-full text-center items-center mx-auto lg:w-4/5">
              <div className="header-text flex flex-col">
                <h1 className="text-4xl purple-gradient leading-tight font-semibold text-center md:text-7xl pb-4">Connect with your users on any device with your own mobile application</h1>
                <h4 className="text-xl text-white text-center mt-6 lg:text-2xl">Empower your brand to thrive in the palm of your users hands. Building custom mobile apps that deliver value and drive interaction, ensuring a seamless connection on every device.</h4>
                </div>
                <div className="header-buttons flex flex-col sm:flex-row gap-6 mt-8">
                  <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/contact" >Free Consultation</Button>
                </div>
              </div>
              <div className="flex flex-row justify-center relative">
                <Image src="/mobile-development/header-graphic.png" alt="mobile development" width="1800" height="1200" className='w-full lg:w-[60%]' priority></Image>
              </div>
          </div>
        </header>
        </>
    );
};
export default Header;