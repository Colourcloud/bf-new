import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimatedText from '../common/AnimateText';

const Header = () => {


    return (
        <header className='home-page'>
        <Navbar></Navbar>
          <div className="site-wrapper">
            <div className="header-content flex flex-col spaced-m spaced-p w-full text-center items-center mx-auto lg:w-4/5">
              <div className="header-text flex flex-col">
                <h1 className="text-4xl purple-gradient leading-tight font-bold text-center md:text-7xl pb-4">Solving tough challenges for some leading brands</h1>
                <h4 className="text-xl text-white text-center mt-6 lg:text-2xl">We work closely with other design & development agencies, to help them meet their client deadlines. Leveraging workloads can greatly increase the productivity of a team, to deliver a more polished project.</h4>
                </div>
              </div>
          </div>
        </header>
    );
};
export default Header;