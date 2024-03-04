import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimateOnScroll from '../common/AnimateOnScroll';


const Header = () => {


    return (
        <>
        <section className='home-page'>
        <Navbar />
            <header className='application-header overflow-hidden'>
            <div className='full-purple-gradient spaced-m spaced-p'>
            <div className="site-wrapper">
                <div className="header-content flex flex-col lg:flex-row gap-20">
                    <div className="header-text flex flex-col gap-6 w-full lg:w-2/5 items-start justify-center">
                        <span className='highlighted-purple-text rounded-full text-sm font-medium'>Partnership</span>
                        <h1 className='text-white text-4xl md:text-5xl md:leading-[1.1] font-bold'>Collaborating with other creatives. Helping to reach those client deadlines</h1>
                        <p className='text-[--text-on-dark] text-xl font-light'>We work closely along side other design & development agencies to help leverage some of those busy workloads. We understand how important it is to delegate when it comes to design & development, which is why you can trust our team to not only help deliver your projects on time, but with exceptional results.</p>
                        <div className="header-buttons flex flex-col sm:flex-row gap-6 mt-8">
                            <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/contact" >Let&apos;s have a chat</Button>
                        </div>
                        <div className="partner-faces flex flex-col gap-6">
                            <p className='text-[--text-on-dark] text-sm'>We already work alongside 50+ designers throughout the New Zealand</p>
                            <div className="user-icons flex flex-row justify-start">
                                    <Image src="/home/avatars/avatar-1.jpg" alt="face avatar" width="200" height="200" className='w-[50px] h-[50px] border-2 border-[--primary-color] rounded-full mr-[-20px] relative z-10'></Image>
                                    <Image src="/home/avatars/avatar-2.jpg" alt="face avatar" width="200" height="200" className='w-[50px] h-[50px] border-2 border-[--primary-color] rounded-full mr-[-20px] relative z-20'></Image>
                                    <Image src="/home/avatars/avatar-3.jpg" alt="face avatar" width="200" height="200" className='w-[50px] h-[50px] border-2 border-[--primary-color] rounded-full mr-[-20px] relative z-30'></Image>
                                    <Image src="/home/avatars/avatar-4.jpg" alt="face avatar" width="200" height="200" className='w-[50px] h-[50px] border-2 border-[--primary-color] rounded-full mr-[-20px] relative z-40'></Image>
                                    <Image src="/home/avatars/avatar-5.jpg" alt="face avatar" width="200" height="200" className='w-[50px] h-[50px] border-2 border-[--primary-color] rounded-full mr-[-20px] relative z-50'></Image>
                                    <Image src="/home/avatars/avatar-6.jpg" alt="face avatar" width="200" height="200" className='w-[50px] h-[50px] border-2 border-[--primary-color] rounded-full mr-[-20px] relative z-[60]'></Image>
                                    <Image src="/home/avatars/avatar-7.jpg" alt="face avatar" width="200" height="200" className='w-[50px] h-[50px] border-2 border-[--primary-color] rounded-full mr-[-20px] relative z-[70]'></Image>
                            </div>
                        </div>
                    </div>
                    <div className="header-graphic w-full lg:w-2/4">
                        <Image src="/partnership/header.jpg" className='w-[120%] lg:w-[100%] rounded-lg max-w-none' alt="blank image" width="1800" height="800"></Image>
                    </div> 
                </div>
            </div>
            </div>
            </header>
        </section>
        
        </>
    );
};
export default Header;