import Image from 'next/image';
import Button from '../common/Button';
import { MdArrowForward } from "react-icons/md";


const WebsiteDevelopment = () => {
    return (
        <>
        <section className="builtflat-section dark-bg" id="website-development">
            <div className="site-wrapper">
                <div className="flex flex-col gap-8">
                    <div className="section-text flex flex-col gap-8 w-full lg:w-3/5 md:mx-auto text-left md:text-center items-start md:items-center spaced-m spaced-p">
                        <span className='highlighted-purple-text rounded-full text-sm font-medium'>Website Development</span>
                        <h4 className='text-4xl md:text-5xl font-bold purple-gradient'>Tailored website development solutions for your business</h4>
                        <p className='text-xl font-light text-white'>We build fully custom, scalable web applications for your business using the latest web technologies. We make sure all web applications we build have the functionality your customers need, and can be easily managed by you.</p>
                        <div className="process flex flex-col gap-4">
                            <h6 className='text-gray-400 font-bold text-lg'>Process</h6>
                            <ul className='flex flex-row gap-1 md:gap-4 items-center'>
                                <li className='text-gray-600 font-medium text-sm md:text-base'>Strategy</li>
                                <li className='text-gray-600 font-medium text-sm md:text-base'><MdArrowForward></MdArrowForward></li>
                                <li className='text-gray-600 font-medium text-sm md:text-base'>Creative Design</li>
                                <li className='text-gray-600 font-medium text-sm md:text-base'><MdArrowForward></MdArrowForward></li>
                                <li className='text-white font-bold text-sm md:text-base'>Development</li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-graphic">
                        <Image src="/application/web-dev.jpg" alt="Website development code besides a travel guide website graphic" className='rounded-t-lg' width="2000" height="800"></Image>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default WebsiteDevelopment;