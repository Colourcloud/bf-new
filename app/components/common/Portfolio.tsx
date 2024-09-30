import Link from 'next/link';
import Image from 'next/image';
import PotrfolioGrid from '../portfolio/PortfolioGrid';

const Portfolio = () => {
    return (
        <>
        <section className="builtflat-section pt-16 pb-40 h-full bg-[--dark-background-color]">
            <div className="site-wrapper">
                <div className="section-text flex flex-col gap-8 w-full xl:w-3/5 md:mx-auto text-left md:text-center items-start md:items-center spaced-p">
                    <h4 className='text-4xl md:text-5xl font-semibold purple-gradient'>We&apos;re trusted by lots of amazing brands, want to find out why?</h4>
                    <p className='text-xl font-light text-white'>We&apos;ve helped heaps of companies from service based, to corporate, retail, and more reach their goals on a range of projects and loved every moment! Check out our latest web projects below.</p>
                    <Link href="/portfolio" className='text-purple font-medium'>View all our case studies</Link>       
                </div>
            </div>
            <div className="recent-work_cards-layout max-w-[1600px] px-4 flex flex-row flex-wrap justify-center gap-6 m-auto">
                <div className="recent-work_card h-80 w-full md:w-72 bg-white rounded-md overflow-hidden">
                    <Link href="/portfolio/cssbuyy"><Image src="/portfolio/cssbuy/portfolio-banner.jpg" className='h-full object-cover transition hover:scale-105' alt="" height="600" width="600"></Image></Link>
                </div>
                <div className="recent-work_card h-80 w-full md:w-72 bg-white rounded-md overflow-hidden">
                    <Link href="/portfolio/chasnz"><Image src="/portfolio/chasnz/portfolio-banner.jpg" className='h-full object-cover transition hover:scale-105' alt="" height="600" width="600"></Image></Link>
                </div>
                <div className="recent-work_card h-80 w-full md:w-72 bg-white rounded-md overflow-hidden">
                    <Link href="/portfolio/blankcanvas"><Image src="/portfolio/blankcanvas/portfolio-banner.jpg" className='h-full object-cover transition hover:scale-105' alt="" height="600" width="600"></Image></Link>
                </div>
                <div className="recent-work_card h-80 w-full md:w-72 bg-white rounded-md overflow-hidden">
                    <Link href="/portfolio/doofy"><Image src="/portfolio/doofy/portfolio-banner.jpg" className='h-full object-cover transition hover:scale-105' alt="" height="600" width="600"></Image></Link>
                </div>
                <div className="recent-work_card h-80 w-full md:w-72 bg-white rounded-md overflow-hidden">
                    <Link href="/portfolio/bureau"><Image src="/portfolio/bureau/portfolio-banner.jpg" className='h-full object-cover transition hover:scale-105' alt="" height="600" width="600"></Image></Link>
                </div>
            </div>
        </section>
        </>
    );
};

export default Portfolio;