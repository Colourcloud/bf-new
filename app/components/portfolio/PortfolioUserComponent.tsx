//"use client";
//This is a client component where we can use all the fancy react hooks

import Image from "next/image";
import NavbarWhite from "../common/NavbarWhite";

interface PortfolioUserComponentProps {
    portfolioProps: {
      id: number;
      title: string;
      brief?: string; // Make brief optional
      image: string;
      slug: string;
      images?: string[]; // Make images optional
      link?: string; // Already optional
      discovered?: string; // Make discovered optional
      mobile_statement?: string; // Make mobile_statement optional
    }[];
  }
  

  const PortfolioUserComponent: React.FC<PortfolioUserComponentProps> = ({ portfolioProps }) => {
    const [data] = portfolioProps
    // Passed array is destructured
    return (
      <>
      <NavbarWhite />
      <section className=''>
          <div className="max-w-[1600px] m-auto">
            <div className="header-content flex flex-col spaced-m spaced-p w-full text-center items-center mx-auto lg:w-[1600px]">
              <div className="header-text flex flex-row justify-between">
                  <h1 className="text-4xl text-[#1b1b1b] leading-tight font-bold text-center md:text-5xl">{data.title}</h1>
                  <div className="w-2/4 flex flex-col justify-start gap-4">
                    <p className="text-xl font-light text-[#1b1b1b] text-left">{data.brief}</p>
                      {
                        data.link && 
                        <a href={data.link} target="_blank" className="text-left text-xl font-light text-[--primary-color]" rel="noopener noreferrer">Visit Website</a>
                      }
                  </div>
                </div>
              </div>
            <section className="content m-auto">
              <div className="content-photo w-full"> 
                <Image src={data.images[0]} alt={data.title} loading="lazy" width={1600} height={800} className="object-cover"/>
              </div>
              <div className="flex flex-col gap-4 w-2/3 m-auto spaced-m spaced-p">
                <h4 className="text-2xl font-bold">What we discovered</h4>
                <p className="text-xl font-light">{data.discovered}</p>
              </div>
              <div className="content-photo w-full"> 
                <Image src={data.images[1]} alt={data.title} loading="lazy" width={1600} height={800} className="object-cover"/>
              </div>
              <div className="content-photo w-full mt-6"> 
                <Image src={data.images[2]} alt={data.title} loading="lazy" width={1600} height={800} className="object-cover"/>
              </div>
              <div className="flex flex-col gap-4 w-2/3 m-auto spaced-m spaced-p">
                  {
                    data.mobile_statement && 
                    <h4 className="text-2xl font-bold">Designing a mobile experience</h4>
                  }
                  {
                    data.mobile_statement && 
                    <p className="text-xl font-light">{data.mobile_statement}</p>
                  }
              </div>
              <div className="content-photo w-full mt-6"> 
                <Image src={data.images[3]} alt={data.title} loading="lazy" width={1600} height={800} className="object-cover"/>
              </div>
              <div className="content-photo w-full flex flex-row"> 
                <Image src={data.images[4]} alt={data.title} loading="lazy" width={800} height={800} className="object-cover"/>
                <Image src={data.images[5]} alt={data.title} loading="lazy" width={800} height={800} className="object-cover"/>
              </div>
            </section>
          </div>
      </section>
      </>
    );
  };
  
  export default PortfolioUserComponent;