import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';


const HomeIntroduction = () => {


    return (
        <section className="builtflat-section spaced-p spaced-m flex flex-col md:flex-row gap-9 items-center">
              <div className="section-text flex flex-col gap-8">
                <h2 className='text-4xl md:text-5xl font-bold'>We help businesses thrive through effective digital design</h2>
                <p className='text-xl font-light'>Whether you want to grow brand awareness, showcase your services, increase sales, or increase user engagement, Builtflat can help. We understand it can be difficult to get your brand online, so let us do the hard work for you.</p>
                <div className="section-buttons flex flex-row gap-4">
                  <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/application" >Get started today</Button>
                </div>
              </div>
              <div className="section-graphic">
                <Image src="/home/test.jpg" alt="header-graphic" width="2700" height="500"></Image>
              </div>
        </section>
    );
};
export default HomeIntroduction;