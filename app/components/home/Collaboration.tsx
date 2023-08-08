import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';


const Collaboration = () => {


    return (
        <div className="bg-gradient-purple relative">
        <section className="builtflat-section spaced-p spaced-m">
            <div className="site-wrapper flex flex-col gap-8">
                <div className="section-text flex flex-col gap-8 w-3/5 mx-auto text-center items-center">
                    <span className='highlighted-purple-text rounded-full text-sm font-medium'>Collaboration</span>
                    <h4 className='text-5xl font-bold'>A collaborative experience to speed up those busy workflows</h4>
                    <p className='text-xl font-light'>We work closely with other design & development agencies, to help them meet their client deadlines. Leveraging workloads can greatly increase the productivity of a team, to deliver a more polished project.</p>
                    <div className="user-icons flex flex-row">
                        <Image src="/home/avatars/avatar-1.jpg" alt="face avatar" width="200" height="200" className='avatar-icon rounded-full mr-[-20px] relative z-10'></Image>
                        <Image src="/home/avatars/avatar-2.jpg" alt="face avatar" width="200" height="200" className='avatar-icon rounded-full mr-[-20px] relative z-20'></Image>
                        <Image src="/home/avatars/avatar-3.jpg" alt="face avatar" width="200" height="200" className='avatar-icon rounded-full mr-[-20px] relative z-30'></Image>
                        <Image src="/home/avatars/avatar-4.jpg" alt="face avatar" width="200" height="200" className='avatar-icon rounded-full mr-[-20px] relative z-40'></Image>
                        <Image src="/home/avatars/avatar-5.jpg" alt="face avatar" width="200" height="200" className='avatar-icon rounded-full mr-[-20px] relative z-50'></Image>
                        <Image src="/home/avatars/avatar-6.jpg" alt="face avatar" width="200" height="200" className='avatar-icon rounded-full mr-[-20px] relative z-[60]'></Image>
                        <Image src="/home/avatars/avatar-7.jpg" alt="face avatar" width="200" height="200" className='avatar-icon rounded-full mr-[-20px] relative z-[70]'></Image>
                    </div>
                </div>
                <div className="section-graphic">
                    <Image src="/home/collaboration-graphic.jpg" width='1200' height='800' alt="Figma UI for collaboration design" className='w-full rounded-lg shadow-lg'></Image>
                </div>
            </div>
        </section>
        </div>
    );
};
export default Collaboration;