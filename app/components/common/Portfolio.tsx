import Link from 'next/link';
import Image from 'next/image';
import PotrfolioGrid from '../portfolio/PortfolioGrid';

const Portfolio = () => {
    return (
        <>
        <section className="builtflat-section spaced-p h-full bg-[--dark-background-color]">
            <div className="site-wrapper">
                <div className="section-text flex flex-col gap-8 w-full md:w-3/5 md:mx-auto text-left md:text-center items-start md:items-center spaced-p">
                    <h4 className='text-4xl md:text-5xl font-semibold purple-gradient'>Some our recent case studies</h4>
                    <p className='text-xl font-light text-white'>We work closely with other design & development agencies, to help them meet their client deadlines. Leveraging workloads can greatly increase the productivity of a team, to deliver a more polished project.</p>
                    <Link href="/portfolio" className='text-purple font-medium'>View all our case studies</Link>       
                </div>
            </div>
            <div className="recent-work_cards-layout max-w-[1600px] px-4 flex flex-row flex-wrap justify-center gap-6 m-auto">
                <div className="recent-work_card h-80 w-full md:w-72 bg-white rounded-md"></div>
                <div className="recent-work_card h-80 w-full md:w-72 bg-white rounded-md"></div>
                <div className="recent-work_card h-80 w-full md:w-72 bg-white rounded-md"></div>
                <div className="recent-work_card h-80 w-full md:w-72 bg-white rounded-md"></div>
                <div className="recent-work_card h-80 w-full md:w-72 bg-white rounded-md"></div>
            </div>
        </section>
        </>
    );
};

export default Portfolio;