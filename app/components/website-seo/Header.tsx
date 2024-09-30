import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';


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
                        <span className='highlighted-purple-text rounded-full text-sm font-medium'>Website SEO</span>
                        <h1 className='text-white text-4xl md:text-5xl md:leading-[1.1] font-bold'>Get your brand recognised online with our strategic SEO services</h1>
                        <p className='text-[--text-on-dark] text-xl font-light'>Your clients projects are important to your business, but sometimes workloads and capacity can be limited. We work closely with other design & development agencies who trust us to help enhance, grow and boost their capabilities.</p>
                        <div className="header-buttons flex flex-col sm:flex-row gap-6 mt-8">
                            <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/contact" >Let&apos;s have a chat</Button>
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